import React from 'react';
import {
  UseFormRegister,
  FieldErrors,
  UseFormHandleSubmit,
} from 'react-hook-form';
import { ContactFormData } from '@/features/contact';

interface ContactFormProps {
  register: UseFormRegister<ContactFormData>;
  handleSubmit: UseFormHandleSubmit<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
  onSubmit: (data: ContactFormData) => void;
  isSubmitted: boolean;
  isLoading: boolean;
  onReset: () => void;
}

const ContactForm: React.FC<ContactFormProps> = React.memo(({
  register,
  handleSubmit,
  errors,
  onSubmit,
  isSubmitted,
  isLoading,
  onReset,
}) => {
  if (isSubmitted) {
    return (
      <div className="text-center p-8 animate-fade-in">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-custom_green/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-custom_green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-custom_green font-semibold text-lg mb-2">
            Thank you! Your message has been accepted.
          </p>
          <p className="text-main_color/70">You will receive an answer really soon!</p>
        </div>
        <button
          onClick={onReset}
          className="px-6 py-2.5 border border-custom_purple/50 rounded-lg text-custom_purple hover:bg-custom_purple/10 hover:border-custom_purple transition-all duration-300 font-medium"
        >
          Send New Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-8 gap-6 animate-fade-in"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-main_color font-medium">
          _name:
        </label>
        <input
          {...register('name', { required: true })}
          className="border p-3 w-full bg-transparent rounded-lg border-main_color border-opacity-50 outline-none text-white focus:border-custom_purple focus:border-opacity-80 transition-all duration-300 focus:ring-1 focus:ring-custom_purple/30"
          placeholder="Enter your name"
        />
        {errors.name && (
          <span className="text-custom_pale_orange text-sm">This field is required</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-main_color font-medium">
          _email:
        </label>
        <input
          {...register('email', { required: true })}
          type="email"
          className="border p-3 w-full bg-transparent rounded-lg border-main_color border-opacity-50 outline-none text-white focus:border-custom_purple focus:border-opacity-80 transition-all duration-300 focus:ring-1 focus:ring-custom_purple/30"
          placeholder="Enter your email"
        />
        {errors.email && (
          <span className="text-custom_pale_orange text-sm">This field is required</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-main_color font-medium">
          _message:
        </label>
        <textarea
          {...register('message', { required: true })}
          className="border p-3 w-full h-32 bg-transparent rounded-lg border-main_color border-opacity-50 outline-none text-white resize-none focus:border-custom_purple focus:border-opacity-80 transition-all duration-300 focus:ring-1 focus:ring-custom_purple/30"
          placeholder="Enter your message"
        />
        {errors.message && (
          <span className="text-custom_pale_orange text-sm">This field is required</span>
        )}
      </div>
      <div>
        <button 
          type="submit"
          disabled={isLoading}
          className="border border-custom_purple/50 rounded-lg h-10 px-6 text-custom_purple hover:bg-custom_purple/10 hover:border-custom_purple transition-all duration-300 hover:shadow-md hover:shadow-custom_purple/20 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'send-message'
          )}
        </button>
      </div>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';

export default ContactForm;
