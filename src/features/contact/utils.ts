/**
 * Escapes HTML special characters to prevent XSS attacks
 */
export function escapeHtml(text: string): string {
  const htmlEscapes: Readonly<Record<string, string>> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  } as const;

  return text.replace(/[&<>"']/g, (char) => htmlEscapes[char] || char);
}

/**
 * Generates HTML email template for contact form submissions
 */
export function generateEmailTemplate(data: { name: string; email: string; message: string }): string {
  const { name, email, message } = data;
  const escapedName = escapeHtml(name);
  const escapedEmail = escapeHtml(email);
  const escapedMessage = escapeHtml(message);

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #4D5BCE;">New Contact Form Submission</h2>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${escapedName}</p>
        <p><strong>Email:</strong> ${escapedEmail}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${escapedMessage}</p>
      </div>
      <p style="color: #666; font-size: 12px; margin-top: 20px;">
        This message was sent from your portfolio contact form.
      </p>
    </div>
  `;
}

/**
 * Generates plain text email template
 */
export function generateTextEmail(data: { name: string; email: string; message: string }): string {
  const { name, email, message } = data;
  return `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from your portfolio contact form.
  `.trim();
}

