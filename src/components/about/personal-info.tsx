import React from 'react';
import { bio, education, interests, workExperience } from '@/data/mock';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MovieIcon from '@mui/icons-material/Movie';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import GroupIcon from '@mui/icons-material/Group';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BusinessIcon from '@mui/icons-material/Business';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { PersonalInfoOption } from '@/types';

interface PersonalInfoProps {
  option: PersonalInfoOption;
}

export default function PersonalInfo({ option }: PersonalInfoProps): React.ReactElement {
  if (option === 'bio') {
    const bioText = bio.code;
    const bioLines = bioText.split('\n').filter(line => line.trim());
    
    const experienceLine = bioLines.find(line => line.toLowerCase().includes('experience') && line.toLowerCase().includes('frontend developer'));
    const skillsLine = bioLines.find(line => line.toLowerCase().includes('skilled'));
    const interestsLine = bioLines.find(line => line.toLowerCase().includes('interested'));
    
    const mainDescription = experienceLine || bioLines.find(line => line.toLowerCase().includes('frontend developer')) || '';
    
    const otherLines = bioLines.filter(
      line => 
        !line.toLowerCase().includes('about me') &&
        !line.toLowerCase().includes('frontend developer') &&
        !line.toLowerCase().includes('skilled') &&
        !line.toLowerCase().includes('interested') &&
        !line.toLowerCase().includes('thank you')
    );
    
    const allBioText = bioLines.join(' ');
    const techStack = allBioText.match(/React\.js|React|Next\.js|NextJS|Next JS|Redux|TypeScript|Tailwind CSS/g) || [];
        
    const fullDescription = [mainDescription, skillsLine].filter(Boolean).join(' ');

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-lg bg-custom_pale_orange/20 flex items-center justify-center">
            <CodeIcon className="text-custom_pale_orange w-6 h-6" />
          </div>
          <div>
            <h2 className="text-white text-xl font-semibold">Bio</h2>
            <p className="text-main_color/70 text-sm">About me</p>
          </div>
        </div>
        
        {fullDescription && (
          <div className="p-6 rounded-xl border border-main_color/20 bg-gradient-to-br from-[#011627]/50 to-[#011627]/30 hover:border-main_color/40 transition-all duration-300">
            <p className="text-main_color/90 leading-relaxed text-base whitespace-pre-line">
              {fullDescription}
            </p>
          </div>
        )}

        {techStack.length > 0 && (
          <div className="p-5 rounded-xl border border-main_color/20 bg-[#011627]/30">
            <div className="flex items-center gap-2 mb-4">
              <StarIcon className="text-custom_orange w-5 h-5" />
              <h3 className="text-white font-semibold text-lg">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 rounded-lg bg-custom_purple/20 text-custom_purple border border-custom_purple/30 text-sm font-medium hover:bg-custom_purple/30 hover:scale-105 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-3">
          {otherLines.map((line, index) => {
            const trimmedLine = line.trim();
            if (!trimmedLine) return null;
            
            let icon = <CodeIcon className="w-4 h-4" />;
            let iconColor = 'text-custom_purple';
            let bgColor = 'bg-custom_purple/10';
            
            if (trimmedLine.toLowerCase().includes('learner')) {
              icon = <StarIcon className="w-4 h-4" />;
              iconColor = 'text-custom_green';
              bgColor = 'bg-custom_green/10';
            } else if (trimmedLine.toLowerCase().includes('team')) {
              icon = <GroupIcon className="w-4 h-4" />;
              iconColor = 'text-custom_orange';
              bgColor = 'bg-custom_orange/10';
            } else if (trimmedLine.toLowerCase().includes('passionate') || trimmedLine.toLowerCase().includes('learning')) {
              icon = <FavoriteIcon className="w-4 h-4" />;
              iconColor = 'text-custom_pale_orange';
              bgColor = 'bg-custom_pale_orange/10';
            }
            
            return (
              <div
                key={index}
                className="group p-4 rounded-lg border border-main_color/20 bg-[#011627]/30 hover:border-main_color/40 hover:bg-[#011627]/50 transition-all duration-300 flex items-start gap-3"
              >
                <div className={`w-8 h-8 rounded-lg ${bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${iconColor}`}>
                  {icon}
                </div>
                <p className="text-main_color/90 leading-relaxed flex-1 pt-0.5">
                  {trimmedLine}
                </p>
              </div>
            );
          })}
        </div>

        {interestsLine && (
          <div className="p-5 rounded-xl border border-custom_purple/30 bg-gradient-to-br from-custom_purple/10 to-transparent">
            <div className="flex items-center gap-2 mb-2">
              <FavoriteIcon className="text-custom_purple w-5 h-5" />
              <h3 className="text-white font-semibold">Most Interested In</h3>
            </div>
            <p className="text-main_color/90 leading-relaxed">
              {interestsLine.replace(/Most interested in/i, '').trim()}
            </p>
          </div>
        )}

        {bioLines.find(line => line.toLowerCase().includes('thank you')) && (
          <div className="text-center p-4 rounded-lg border border-main_color/20 bg-[#011627]/20">
            <p className="text-main_color/70 italic">
              {bioLines.find(line => line.toLowerCase().includes('thank you'))?.trim()}
            </p>
          </div>
        )}
      </div>
    );
  }

  if (option === 'interests') {
    const interestText = interests.code;
    
    const sections: { title: string; icon: React.ReactNode; bgColor: string; textColor: string; description: string; items: string[] }[] = [];
    
    const moviesMatch = interestText.match(/🎬 Movies & Series:([\s\S]*?)(?=🎶|💻|$)/);
    if (moviesMatch) {
      const content = moviesMatch[1].trim();
      const lines = content.split('\n').map(line => line.trim()).filter(line => line);
      const description = lines.find(line => line.includes('love watching') || line.includes('favorite genres')) || '';
      const items = lines
        .filter(line => line.match(/^\d+\./))
        .map(line => line.replace(/^\d+\.\s*/, ''));
      
      sections.push({
        title: 'Movies & Series',
        icon: <MovieIcon className="w-5 h-5" />,
        bgColor: 'bg-custom_pale_orange/20',
        textColor: 'text-custom_pale_orange',
        description: description,
        items: items,
      });
    }
    
    const musicMatch = interestText.match(/🎶 Music:([\s\S]*?)(?=💻|$)/);
    if (musicMatch) {
      const content = musicMatch[1].trim();
      const lines = content.split('\n').map(line => line.trim()).filter(line => line);
      const description = lines.find(line => line.includes('huge fan') || line.includes('Indie Pop')) || '';
      const items = lines
        .filter(line => line.match(/^\d+\./))
        .map(line => line.replace(/^\d+\.\s*/, '').replace(/"/g, ''));
      
      sections.push({
        title: 'Music',
        icon: <MusicNoteIcon className="w-5 h-5" />,
        bgColor: 'bg-custom_green/20',
        textColor: 'text-custom_green',
        description: description,
        items: items,
      });
    }
    
    const codingMatch = interestText.match(/💻 Coding:([\s\S]*?)$/);
    if (codingMatch) {
      const content = codingMatch[1].trim();
      const items = content
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && line.length > 20);
      
      sections.push({
        title: 'Coding',
        icon: <CodeIcon className="w-5 h-5" />,
        bgColor: 'bg-custom_purple/20',
        textColor: 'text-custom_purple',
        description: '',
        items: items,
      });
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-lg bg-custom_green/20 flex items-center justify-center">
            <LocalLibraryIcon className="text-custom_green w-6 h-6" />
          </div>
          <div>
            <h2 className="text-white text-xl font-semibold">My Interests</h2>
            <p className="text-main_color/70 text-sm">What I love doing</p>
          </div>
        </div>

        <div className="grid gap-4">
          {sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="p-5 rounded-xl border border-main_color/20 bg-gradient-to-br from-[#011627]/50 to-[#011627]/30 hover:border-main_color/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-main_color/20">
                <div className={`w-10 h-10 rounded-lg ${section.bgColor} flex items-center justify-center ${section.textColor} group-hover:scale-110 transition-transform duration-300`}>
                  {section.icon}
                </div>
                <h3 className="text-white font-semibold text-lg">{section.title}</h3>
              </div>
              {section.description && (
                <p className="text-main_color/80 text-sm mb-3 italic">{section.description}</p>
              )}
              <div className="space-y-3 pl-13">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="pl-4 border-l-2 border-main_color/20 hover:border-custom_purple/50 transition-colors duration-200"
                  >
                    <p className="text-main_color/90 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (option === 'work-experience') {
    const workText = workExperience.code;
    const workLines = workText.split('\n').filter(line => line.trim());
    
    const experiences: {
      company: string;
      position: string;
      period: string;
      responsibilities: string[];
      achievements: string[];
    }[] = [];
    
    let currentExp: typeof experiences[0] | null = null;
    let currentSection: 'responsibilities' | 'achievements' | null = null;
    
    workLines.forEach((line) => {
      const trimmed = line.trim();
      
      if (trimmed.includes('💼')) {
        if (currentExp) experiences.push(currentExp);
        const companyMatch = trimmed.match(/💼\s*(.+?)\s*–/);
        const company = companyMatch ? companyMatch[1].trim() : '';
        currentExp = {
          company,
          position: '',
          period: '',
          responsibilities: [],
          achievements: [],
        };
        currentSection = null;
      }
      else if (currentExp && trimmed.match(/Developer|Web Developer/) && trimmed.includes('(')) {
        const positionMatch = trimmed.match(/^(.+?)\s*\(/);
        const periodMatch = trimmed.match(/\(([^)]+)\)/);
        if (positionMatch) currentExp.position = positionMatch[1].trim();
        if (periodMatch) currentExp.period = periodMatch[1].trim();
      }
      else if (trimmed.includes('Job Responsibilities:')) {
        currentSection = 'responsibilities';
      } else if (trimmed.includes('Key Achievements:')) {
        currentSection = 'achievements';
      }
      else if (currentExp && trimmed.startsWith('-') && currentSection) {
        const content = trimmed.replace(/^-\s*/, '');
        if (currentSection === 'responsibilities') {
          currentExp.responsibilities.push(content);
        } else if (currentSection === 'achievements') {
          currentExp.achievements.push(content);
        }
      }
    });
    
    if (currentExp) experiences.push(currentExp);

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-lg bg-custom_orange/20 flex items-center justify-center">
            <BusinessIcon className="text-custom_orange w-6 h-6" />
          </div>
          <div>
            <h2 className="text-white text-xl font-semibold">Work Experience</h2>
            <p className="text-main_color/70 text-sm">Professional journey</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-custom_orange/50 via-custom_green/50 to-custom_purple/50"></div>
          <div className="space-y-8 pl-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-9 top-2 w-6 h-6 rounded-full bg-custom_orange/30 border-2 border-custom_orange group-hover:bg-custom_orange/50 group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-custom_orange"></div>
                </div>
                <div className="p-6 rounded-xl border border-main_color/20 bg-gradient-to-br from-[#011627]/50 to-[#011627]/30 hover:border-custom_orange/50 hover:shadow-lg hover:shadow-custom_orange/10 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg mb-1">{exp.company}</h3>
                      <p className="text-custom_orange font-semibold mb-2">{exp.position}</p>
                      {exp.period && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-custom_orange/10 border border-custom_orange/20">
                          <span className="text-custom_orange text-sm font-medium">{exp.period}</span>
                        </div>
                      )}
                    </div>
                    <BusinessIcon className="text-custom_orange/30 w-8 h-8 flex-shrink-0" />
                  </div>
                  
                  {exp.responsibilities.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                        <WorkIcon className="text-custom_green w-4 h-4" />
                        Job Responsibilities
                      </h4>
                      <ul className="space-y-2 ml-6">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-main_color/90 leading-relaxed text-sm flex items-start gap-2">
                            <span className="text-custom_green mt-1.5">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {exp.achievements.length > 0 && (
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                        <CheckCircleIcon className="text-custom_purple w-4 h-4" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2 ml-6">
                        {exp.achievements.map((ach, idx) => (
                          <li key={idx} className="text-main_color/90 leading-relaxed text-sm flex items-start gap-2">
                            <span className="text-custom_purple mt-1.5">✓</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const educationLines = education.code.split('\n').filter(line => line.trim());
  const educationItems = educationLines
    .filter(line => line.includes('🎓'))
    .map(line => {
      const cleaned = line.replace('🎓', '').trim();
      const dateMatch = cleaned.match(/\((\d{4}(?:-\d{4})?)\)/);
      const date = dateMatch ? dateMatch[1] : null;
      const text = cleaned.replace(/\s*\(\d{4}(?:-\d{4})?\)\s*/, '').trim();
      return { text, date };
    });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-lg bg-custom_purple/20 flex items-center justify-center">
          <SchoolIcon className="text-custom_purple w-6 h-6" />
        </div>
        <div>
          <h2 className="text-white text-xl font-semibold">Education</h2>
          <p className="text-main_color/70 text-sm">Academic background</p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-custom_purple/50 via-custom_green/50 to-custom_purple/50"></div>
        <div className="space-y-6 pl-12">
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -left-9 top-1 w-6 h-6 rounded-full bg-custom_purple/30 border-2 border-custom_purple group-hover:bg-custom_purple/50 group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-custom_purple"></div>
              </div>
              <div className="p-5 rounded-xl border border-main_color/20 bg-gradient-to-br from-[#011627]/50 to-[#011627]/30 hover:border-custom_purple/50 hover:shadow-lg hover:shadow-custom_purple/10 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <SchoolIcon className="text-custom_purple w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-main_color/90 leading-relaxed text-base">{item.text}</p>
                    {item.date && (
                      <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-custom_purple/10 border border-custom_purple/20">
                        <span className="text-custom_purple text-sm font-medium">{item.date}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
