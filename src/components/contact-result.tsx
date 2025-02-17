import { getContactFormSnippet } from '@/data/mock';
import React from 'react';
import CodeSnippet from './code';

type ContactResultProps = {
  name: string;
  email: string;
  message: string;
};

const ContactResult: React.FC<ContactResultProps> = ({
  name,
  email,
  message,
}) => {
  const snippet = getContactFormSnippet(name, email, message);
  return (
    <div className="w-full p-4 ">
      <div>
        <pre>
          <CodeSnippet snippet={snippet} />
        </pre>
      </div>
    </div>
  );
};

export default ContactResult;
