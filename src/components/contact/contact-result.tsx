import { getContactFormSnippet } from '@/data/mock';
import React from 'react';
import { CodeSnippet } from '@/components/ui';

type ContactResultProps = {
  name?: string;
  email?: string;
  message?: string;
};

const ContactResult: React.FC<ContactResultProps> = ({
  name,
  email,
  message,
}) => {
  const snippet = getContactFormSnippet(name, email, message);
  return (
    <div className="w-full animate-fade-in">
      <CodeSnippet snippet={snippet} />
    </div>
  );
};

export default ContactResult;
