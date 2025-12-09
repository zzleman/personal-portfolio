'use client';
import { useState, useMemo } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FolderIcon from '@mui/icons-material/Folder';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { CodeSnippet } from '@/components/ui';
import { PersonalInfo } from '@/components/about';
import { codeSnippets } from '@/data/mock';
import { useToggle } from '@/hooks/useToggle';
import { useTransition } from '@/hooks/useTransition';
import { PersonalInfoOption } from '@/types';
import { PERSONAL_INFO_OPTIONS, CONTACT_INFO, RESUME_PATH, ANIMATION_DELAY, TRANSITION_DURATION } from '@/constants';
import { classNames } from '@/utils/classNames';

const BORDER_STYLE = 'border-r lg:h-screen border-main_color border-opacity-30';

interface NavigationItem {
  option: PersonalInfoOption;
  label: string;
  color: 'custom_pale_orange' | 'custom_orange' | 'custom_purple' | 'custom_green';
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  { option: PERSONAL_INFO_OPTIONS.BIO, label: 'bio', color: 'custom_pale_orange' },
  { option: PERSONAL_INFO_OPTIONS.WORK_EXPERIENCE, label: 'work-experience', color: 'custom_orange' },
  { option: PERSONAL_INFO_OPTIONS.EDUCATION, label: 'education', color: 'custom_purple' },
  { option: PERSONAL_INFO_OPTIONS.INTERESTS, label: 'interests', color: 'custom_green' },
] as const;

export default function About() {
  const [selectedOption, setSelectedOption] = useState<PersonalInfoOption>(PERSONAL_INFO_OPTIONS.BIO);
  const [isPersonalInfoOpen, togglePersonalInfo] = useToggle(true);
  const [isContactsOpen, toggleContacts] = useToggle(true);
  const [isResumeOpen, toggleResume] = useToggle(true);
  const [isTransitioning, startTransition] = useTransition({
    duration: TRANSITION_DURATION.FAST,
    delay: ANIMATION_DELAY.SHORT,
  });

  const handleOptionChange = (option: PersonalInfoOption) => {
    if (option === selectedOption) return;
    
    startTransition(() => {
      setSelectedOption(option);
    });
  };

  const renderSelectedOption = useMemo(() => {
    const optionMap: Record<PersonalInfoOption, React.ReactElement> = {
      [PERSONAL_INFO_OPTIONS.BIO]: <PersonalInfo option={PERSONAL_INFO_OPTIONS.BIO} />,
      [PERSONAL_INFO_OPTIONS.WORK_EXPERIENCE]: <PersonalInfo option={PERSONAL_INFO_OPTIONS.WORK_EXPERIENCE} />,
      [PERSONAL_INFO_OPTIONS.EDUCATION]: <PersonalInfo option={PERSONAL_INFO_OPTIONS.EDUCATION} />,
      [PERSONAL_INFO_OPTIONS.INTERESTS]: <PersonalInfo option={PERSONAL_INFO_OPTIONS.INTERESTS} />,
    };

    return optionMap[selectedOption];
  }, [selectedOption]);
  return (
    <div className="text-main_color flex flex-col lg:grid lg:grid-cols-12 w-full min-h-screen lg:h-screen">
      <div className={classNames('left lg:col-span-2', BORDER_STYLE, 'overflow-y-auto hidden lg:block')}>
        <div className="personal-info">
          <div 
            className="text-white flex border border-main_color border-opacity-30 h-10 items-center px-3 bg-[#011627]/50 sticky top-0 z-10 cursor-pointer hover:bg-[#011627]/70 transition-colors duration-200"
            onClick={togglePersonalInfo}
          >
            <ArrowDropDownIcon 
              className={classNames(
                'w-5 h-5 transition-transform duration-200',
                isPersonalInfoOpen ? 'rotate-0' : '-rotate-90'
              )} 
            />
            <p className="font-medium">personal-info</p>
          </div>
          {isPersonalInfoOpen && (
          <div className="flex flex-col gap-1 px-3 py-4">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = selectedOption === item.option;
              return (
                <div
                  key={item.option}
                  className={classNames(
                    'flex gap-2 cursor-pointer items-center px-3 py-2.5 rounded-lg transition-all duration-200 group',
                    isActive
                      ? `bg-${item.color}/10 border border-${item.color}/30`
                      : 'hover:bg-main_color/10'
                  )}
                  onClick={() => handleOptionChange(item.option)}
                >
                  <ChevronRightIcon 
                    className={classNames(
                      'w-4 h-4 transition-transform duration-200',
                      isActive ? `rotate-90 text-${item.color}` : 'text-main_color/60'
                    )} 
                  />
                  <FolderIcon 
                    className={classNames(
                      `text-${item.color} w-4 h-4 transition-transform duration-200`,
                      isActive && 'scale-110'
                    )} 
                  />
                  <p className={classNames(
                    'transition-colors duration-200',
                    isActive ? 'text-white font-medium' : 'text-main_color'
                  )}>
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
          )}
        </div>
        <div className="resume-download">
          <div 
            className="text-white flex border border-main_color border-opacity-30 h-10 items-center px-3 bg-[#011627]/50 cursor-pointer hover:bg-[#011627]/70 transition-colors duration-200"
            onClick={toggleResume}
          >
            <ArrowDropDownIcon 
              className={classNames(
                'w-5 h-5 transition-transform duration-200',
                isResumeOpen ? 'rotate-0' : '-rotate-90'
              )} 
            />
            <p className="font-medium">resume</p>
          </div>
          {isResumeOpen && (
          <div className="px-3 py-4">
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-custom_purple/50 bg-custom_purple/10 hover:bg-custom_purple/20 hover:border-custom_purple transition-all duration-300 text-custom_purple font-medium text-sm group"
            >
              <OpenInNewIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>view-resume</span>
            </a>
          </div>
          )}
        </div>
        <div className="contacts">
          <div 
            className="text-white flex border border-main_color border-opacity-30 h-10 items-center px-3 bg-[#011627]/50 cursor-pointer hover:bg-[#011627]/70 transition-colors duration-200"
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
      </div>

      <div className="lg:hidden flex flex-col w-full">
        <div className="border-b border-main_color border-opacity-30 bg-[#011627]/50 backdrop-blur-sm sticky top-0 z-20">
          <div className="px-3 py-2">
            <p className="text-white font-medium text-sm mb-2">personal-info</p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = selectedOption === item.option;
                return (
                  <button
                    key={item.option}
                    className={classNames(
                      'flex gap-1.5 cursor-pointer items-center px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap flex-shrink-0',
                      isActive
                        ? `bg-${item.color}/10 border border-${item.color}/30 text-white`
                        : 'hover:bg-main_color/10 text-main_color border border-transparent'
                    )}
                    onClick={() => handleOptionChange(item.option)}
                  >
                    <FolderIcon 
                      className={classNames(
                        `text-${item.color} w-4 h-4 transition-transform duration-200`,
                        isActive && 'scale-110'
                      )} 
                    />
                    <p className={classNames(
                      'transition-colors duration-200 text-xs font-medium',
                      isActive ? 'text-white' : 'text-main_color'
                    )}>
                      {item.label}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto border-b border-main_color border-opacity-30">
          <div className="p-4 md:p-6 relative min-h-[200px]">
            <div 
              key={selectedOption} 
              className={classNames(
                'transition-all duration-200 ease-in-out',
                isTransitioning 
                  ? 'opacity-0 translate-y-4 pointer-events-none' 
                  : 'opacity-100 translate-y-0 pointer-events-auto'
              )}
              style={{ 
                willChange: 'opacity, transform'
              }}
            >
              {renderSelectedOption}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 border-b border-main_color border-opacity-30">
          <div className="resume-download border-r border-main_color border-opacity-30">
            <div 
              className="text-white flex border-b border-main_color border-opacity-30 h-10 items-center px-3 bg-[#011627]/50 cursor-pointer hover:bg-[#011627]/70 transition-colors duration-200"
              onClick={toggleResume}
            >
              <ArrowDropDownIcon 
                className={classNames(
                  'w-5 h-5 transition-transform duration-200',
                  isResumeOpen ? 'rotate-0' : '-rotate-90'
                )} 
              />
              <p className="font-medium text-sm">resume</p>
            </div>
            {isResumeOpen && (
            <div className="px-3 py-4">
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-custom_purple/50 bg-custom_purple/10 hover:bg-custom_purple/20 hover:border-custom_purple transition-all duration-300 text-custom_purple font-medium text-xs group"
              >
                <OpenInNewIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>view-resume</span>
              </a>
            </div>
            )}
          </div>
          <div className="contacts">
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
        </div>

        <div className="overflow-y-auto">
          <p className="h-10 border-b border-main_color border-opacity-30 flex items-center px-3 bg-[#011627]/50 sticky top-0 z-10 font-medium text-sm">
            {`//`} code snippets
          </p>
          <div className="w-full max-w-full px-4 flex flex-col gap-5 text-xs py-4">
            <CodeSnippet snippets={codeSnippets} />
          </div>
        </div>
      </div>

      <div className={classNames('middle lg:col-span-5', BORDER_STYLE, 'overflow-y-auto hidden lg:block')}>
        <p className="px-3 h-10 border border-main_color border-opacity-30 flex items-center bg-[#011627]/50 backdrop-blur-sm sticky top-0 z-10 font-medium">
          personal-info
        </p>
        <div className="p-4 md:p-6 lg:p-8 relative min-h-[200px]">
          <div 
            key={selectedOption} 
            className={classNames(
              'transition-all duration-200 ease-in-out',
              isTransitioning 
                ? 'opacity-0 translate-y-4 pointer-events-none' 
                : 'opacity-100 translate-y-0 pointer-events-auto'
            )}
            style={{ 
              willChange: 'opacity, transform'
            }}
          >
            {renderSelectedOption}
          </div>
        </div>
      </div>

      <div className="right lg:col-span-5 overflow-y-auto hidden lg:block">
        <p className="h-10 border border-main_color border-opacity-30 flex items-center px-3 bg-[#011627]/50 sticky top-0 z-10 font-medium">
          {`//`} code snippets
        </p>
        <div className="w-full max-w-full px-4 md:px-6 flex flex-col gap-5 text-sm py-4 md:py-6">
          <CodeSnippet snippets={codeSnippets} />
        </div>
      </div>
    </div>
  );
}
