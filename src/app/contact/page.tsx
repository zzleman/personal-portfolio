'use client';
import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import ContactResult from '@/components/contact-result';
import ContactForm from '@/components/contact-form';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Page = () => {
  const borderStyle = `border-r h-screen border-main_color border-opacity-30`;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    reset();
    setIsSubmitted(false);
  };

  return (
    <div className="text-main_color grid grid-cols-12 w-full h-screen">
      <div className={`left col-span-2 ${borderStyle}`}>
        <div className="contacts">
          <div className="text-white flex border border-main_color border-opacity-30 h-10 items-center px-2">
            <ArrowDropDownIcon />
            <p>contacts</p>
          </div>
          <div className="flex flex-col gap-3 px-2 py-4 text-sm">
            <div className="flex gap-2 items-center">
              <EmailIcon />
              <p>lemanzeynalli67@gmail.com</p>
            </div>
            <div className="flex gap-2 items-center">
              <PhoneIcon />
              <p>+994516338114</p>
            </div>
          </div>
        </div>
        <div className="find-me">
          <div className="text-white flex border border-main_color border-opacity-30 h-10 items-center px-2">
            <ArrowDropDownIcon />
            <p>Find-me-also-in</p>
          </div>
          <div className="flex flex-col gap-3 px-2 py-4 text-sm">
            <div className="flex gap-2 items-center">
              <OpenInNewOutlinedIcon />
              <p>Instagram account</p>
            </div>
            <div className="flex gap-2 items-center">
              <OpenInNewOutlinedIcon />
              <p>Telegram account</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`middle col-span-5 ${borderStyle}`}>
        <p className="px-2 h-10 border border-main_color border-opacity-30 flex items-center">
          contacts
        </p>
        <ContactForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          watch={watch}
          onSubmit={onSubmit}
          isSubmitted={isSubmitted}
          onReset={handleReset}
        />
      </div>
      <div className="right col-span-5 overflow-x-auto ">
        <div className="w-full max-w-full px-4 flex flex-col gap-5 text-sm py-5">
          <ContactResult
            name={watch('name')}
            email={watch('email')}
            message={watch('message')}
            isSubmitted={isSubmitted}
            onReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
