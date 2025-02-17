import React from 'react';
import {
  UseFormRegister,
  FieldErrors,
  UseFormHandleSubmit,
} from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type ContactFormProps = {
  register: UseFormRegister<Inputs>;
  handleSubmit: UseFormHandleSubmit<Inputs>;
  errors: FieldErrors<Inputs>;
  onSubmit: (data: Inputs) => void;
  isSubmitted: boolean;
  onReset: () => void;
};

const ContactForm: React.FC<ContactFormProps> = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
  isSubmitted,
  onReset,
}) => {
  if (isSubmitted) {
    return (
      <div className="text-center p-5">
        <p className="text-green-600 font-bold">
          Thank you! Your message has been accepted.
        </p>
        <p className="text-gray-500">You will receive an answer really soon!</p>
        <button
          onClick={onReset}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Send New Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-20 gap-4"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name">_name:</label>
        <input
          {...register('name', { required: true })}
          className="border p-2 w-full bg-transparent rounded-lg border-main_color border-opacity-50 outline-none"
        />
        {errors.name && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">_email:</label>
        <input
          {...register('email', { required: true })}
          className="border p-2 w-full bg-transparent rounded-lg border-main_color border-opacity-50 outline-none"
        />
        {errors.email && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">_message:</label>
        <textarea
          {...register('message', { required: true })}
          className="border p-2 w-full h-32 bg-transparent rounded-lg border-main_color border-opacity-50 outline-none"
        />
        {errors.message && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div>
        <button className="bg-gray-800 w-40 h-10 rounded-lg">
          send-message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
