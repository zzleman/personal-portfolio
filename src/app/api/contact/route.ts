import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData, ContactApiError } from '@/features/contact';
import { isValidEmail, validateRequired } from '@/utils/validation';
import { CONTACT_INFO } from '@/constants';
import { resend } from '@/lib/resend';
import { generateEmailTemplate, generateTextEmail } from '@/features/contact/utils';

export async function POST(request: NextRequest): Promise<NextResponse<ContactApiError | { success: boolean; message: string }>> {
  try {
    const body = await request.json() as Partial<ContactFormData>;
    const { name, email, message } = body;

    const validation = validateRequired(
      { name, email, message },
      ['name', 'email', 'message']
    );

    if (!validation.isValid) {
      return NextResponse.json(
        { 
          error: `Missing required fields: ${validation.missingFields.join(', ')}`,
          status: 400 
        } satisfies ContactApiError,
        { status: 400 }
      );
    }

    if (!isValidEmail(email!)) {
      return NextResponse.json(
        { 
          error: 'Invalid email format',
          status: 400 
        } satisfies ContactApiError,
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL || CONTACT_INFO.EMAIL;

    const formData: ContactFormData = {
      name: name!,
      email: email!,
      message: message!,
    };

    await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: recipientEmail,
      replyTo: formData.email,
      subject: `New Contact Form Message from ${formData.name}`,
      html: generateEmailTemplate(formData),
      text: generateTextEmail(formData),
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
        if (process.env.NODE_ENV === 'development') {
    console.error('Error sending email:', error);
        }
    
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'Failed to send email. Please try again later.';

    return NextResponse.json(
      { 
        error: errorMessage,
        status: 500 
      } satisfies ContactApiError,
      { status: 500 }
    );
  }
}
