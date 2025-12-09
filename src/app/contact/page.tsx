'use client';
import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import { ContactResult, ContactForm } from '@/components/contact';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContactFormData } from '@/features/contact';
import { useToggle } from '@/hooks/useToggle';
import { CONTACT_INFO, EXTERNAL_LINKS } from '@/constants';
import { classNames } from '@/utils/classNames';

const BORDER_STYLE = 'border-r lg:h-screen border-main_color border-opacity-30';

export default function ContactPage(): React.ReactElement {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isContactsOpen, toggleContacts] = useToggle(true);
  const [isFindMeOpen, toggleFindMe] = useToggle(true);
  
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = useCallback(async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setIsSubmitted(true);
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
      console.error('Error submitting form:', error);
      }
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Failed to send message. Please try again.';
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleReset = useCallback(() => {
    reset();
    setIsSubmitted(false);
  }, [reset]);

  return (
    <div className="text-main_color flex flex-col lg:grid lg:grid-cols-12 w-full min-h-screen lg:h-screen">
      <div className={classNames('left lg:col-span-2', BORDER_STYLE, 'overflow-y-auto hidden lg:block')}>
        <div className="contacts">
          <div 
            className="text-white flex border border-main_color border-opacity-30 h-10 items-center px-3 bg-[#011627]/50 sticky top-0 z-10 cursor-pointer hover:bg-[#011627]/70 transition-colors duration-200"
            onClick={toggleContacts}
          >
            <ArrowDropDownIcon 
              className={classNames(
                'w-5 h-5 transition-transform duration-200',
                isContactsOpen ? 'rotate-0' : '-rotate-90'
              )} 
            />
            <p className="font-medium">contacts</p>
          </div>
          {isContactsOpen && (
          <div className="flex flex-col gap-3 px-3 py-4 text-sm">
            <div className="flex gap-2 items-center px-2 py-1.5 rounded hover:bg-main_color/10 transition-colors duration-200">
              <EmailIcon className="w-4 h-4 text-custom_orange" />
              <p className="break-all">{CONTACT_INFO.EMAIL}</p>
            </div>
            <div className="flex gap-2 items-center px-2 py-1.5 rounded hover:bg-main_color/10 transition-colors duration-200">
              <PhoneIcon className="w-4 h-4 text-custom_green" />
              <p>{CONTACT_INFO.PHONE}</p>
            </div>
          </div>
          )}
        </div>
        <div className="find-me">
          <div 
            className="text-white flex border border-main_color border-opacity-30 h-10 items-center px-3 bg-[#011627]/50 cursor-pointer hover:bg-[#011627]/70 transition-colors duration-200"
            onClick={toggleFindMe}
          >
            <ArrowDropDownIcon 
              className={classNames(
                'w-5 h-5 transition-transform duration-200',
                isFindMeOpen ? 'rotate-0' : '-rotate-90'
              )} 
            />
            <p className="font-medium">find-me-also-in</p>
          </div>
          {isFindMeOpen && (
          <div className="flex flex-col gap-3 px-3 py-4 text-sm">
            <Link 
              href={EXTERNAL_LINKS.TELEGRAM} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center px-2 py-1.5 rounded hover:bg-main_color/10 transition-colors duration-200 cursor-pointer group"
            >
              <OpenInNewOutlinedIcon className="w-4 h-4 text-custom_purple group-hover:scale-110 transition-transform duration-200" />
              <p>telegram</p>
            </Link>
          </div>
          )}
        </div>
      </div>

      <div className="lg:hidden flex flex-col w-full">
        <div className="flex-1 overflow-y-auto border-b border-main_color border-opacity-30">
          <p className="px-3 h-10 border-b border-main_color border-opacity-30 flex items-center bg-[#011627]/50 sticky top-0 z-10 font-medium text-sm">
            contacts
          </p>
          <ContactForm
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            isSubmitted={isSubmitted}
            isLoading={isLoading}
            onReset={handleReset}
          />
        </div>

        <div className="overflow-y-auto border-b border-main_color border-opacity-30">
          <div className="w-full max-w-full px-4 py-4 flex flex-col gap-5 text-xs">
            <ContactResult
              name={watch('name')}
              email={watch('email')}
              message={watch('message')}
            />
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="contacts border-r border-main_color border-opacity-30">
            <div 
              className="text-white flex border-b border-main_color border-opacity-30 h-10 items-center px-3 bg-[#011627]/50 cursor-pointer hover:bg-[#011627]/70 transition-colors duration-200"
              onClick={toggleContacts}
            >
              <ArrowDropDownIcon 
                className={classNames(
                  'w-5 h-5 transition-transform duration-200',
                  isContactsOpen ? 'rotate-0' : '-rotate-90'
                )} 
              />
              <p className="font-medium text-sm">contacts</p>
            </div>
            {isContactsOpen && (
            <div className="flex flex-col gap-2 px-3 py-4 text-xs">
              <div className="flex gap-2 items-center px-2 py-1.5 rounded hover:bg-main_color/10 transition-colors duration-200">
                <EmailIcon className="w-3.5 h-3.5 text-custom_orange flex-shrink-0" />
                <p className="break-all text-xs">{CONTACT_INFO.EMAIL}</p>
              </div>
              <div className="flex gap-2 items-center px-2 py-1.5 rounded hover:bg-main_color/10 transition-colors duration-200">
                <PhoneIcon className="w-3.5 h-3.5 text-custom_green flex-shrink-0" />
                <p className="text-xs">{CONTACT_INFO.PHONE}</p>
              </div>
            </div>
            )}
          </div>
          <div className="find-me">
            <div 
              className="text-white flex border-b border-main_color border-opacity-30 h-10 items-center px-3 bg-[#011627]/50 cursor-pointer hover:bg-[#011627]/70 transition-colors duration-200"
              onClick={toggleFindMe}
            >
              <ArrowDropDownIcon 
                className={classNames(
                  'w-5 h-5 transition-transform duration-200',
                  isFindMeOpen ? 'rotate-0' : '-rotate-90'
                )} 
              />
              <p className="font-medium text-sm">find-me-also-in</p>
            </div>
            {isFindMeOpen && (
            <div className="flex flex-col gap-2 px-3 py-4 text-xs">
              <Link 
                href={EXTERNAL_LINKS.TELEGRAM} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center px-2 py-1.5 rounded hover:bg-main_color/10 transition-colors duration-200 cursor-pointer group"
              >
                <OpenInNewOutlinedIcon className="w-3.5 h-3.5 text-custom_purple group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                <p className="text-xs">telegram</p>
              </Link>
            </div>
            )}
          </div>
        </div>
      </div>

      <div className={classNames('middle lg:col-span-5', BORDER_STYLE, 'overflow-y-auto hidden lg:block')}>
        <p className="px-3 h-10 border border-main_color border-opacity-30 flex items-center bg-[#011627]/50 sticky top-0 z-10 font-medium">
          contacts
        </p>
        <ContactForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
          isSubmitted={isSubmitted}
          isLoading={isLoading}
          onReset={handleReset}
        />
      </div>

      <div className="right lg:col-span-5 overflow-y-auto hidden lg:block">
        <div className="w-full max-w-full px-4 md:px-6 py-6 md:py-8 flex flex-col gap-5 text-sm">
          <ContactResult
            name={watch('name')}
            email={watch('email')}
            message={watch('message')}
          />
        </div>
      </div>
    </div>
  );
}
