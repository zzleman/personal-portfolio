'use client';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FolderIcon from '@mui/icons-material/Folder';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import CodeSnippet from '@/components/code';
import { codeSnippets } from '@/data/mock';
import Interest from '@/components/interests';
import Bio from '@/components/bio';
import { useState } from 'react';

export default function About() {
  const [selectedOption, setSelectedOption] = useState<string>('bio');

  const chooseOption = (option: string) => {
    setSelectedOption(option);
  };

  const renderSelectedOption = () => {
    if (selectedOption === 'bio') {
      return <Bio />;
    } else if (selectedOption === 'interests') {
      return <Interest />;
    }
    return null;
  };
  return (
    <div className="text-main_color grid grid-cols-12 w-full h-screen">
      <div className="left col-span-2 border-r h-screen border-main_color border-opacity-30">
        <div className="personal-info">
          <div className="text-white flex border border-main_color border-opacity-30 h-10 items-center px-2">
            <ArrowDropDownIcon />
            <p>personal-info</p>
          </div>
          <div className="flex flex-col gap-3 px-2 py-4">
            <div
              className="flex gap-1 cursor-pointer"
              onClick={() => chooseOption('bio')}
            >
              <ChevronRightIcon />
              <FolderIcon className="text-custom_pale_orange" />
              {selectedOption === 'bio' ? (
                <p className="text-white">bio</p>
              ) : (
                <p>bio</p>
              )}
            </div>
            <div
              className="flex gap-1 cursor-pointer"
              onClick={() => chooseOption('interests')}
            >
              <ChevronRightIcon />
              <FolderIcon className="text-custom_green" />
              {selectedOption === 'interests' ? (
                <p className="text-white">interests</p>
              ) : (
                <p>interests</p>
              )}
            </div>
            <div className="flex gap-1 cursor-pointer">
              <ChevronRightIcon />
              <FolderIcon className="text-custom_purple" />
              <p>education</p>
            </div>
          </div>
        </div>
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
      </div>
      <div className="middle col-span-5 border-r h-screen border-main_color border-opacity-30">
        <p className="px-2 h-10 border border-main_color border-opacity-30 flex items-center">
          personal-info
        </p>
        {renderSelectedOption()}
      </div>
      <div className="right col-span-5 overflow-x-auto ">
        <p className="h-10 border border-main_color border-opacity-30 flex items-center px-2">
          {`//`} code snippets
        </p>
        <div className="w-full max-w-full px-4 flex flex-col gap-5 text-sm py-5">
          <CodeSnippet snippets={codeSnippets} />
        </div>
      </div>
    </div>
  );
}
