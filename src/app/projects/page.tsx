'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Project, ProjectDialog } from '@/components/projects';
import { useToggle } from '@/hooks/useToggle';
import { TechStackItem, StrapiProject } from '@/types';
import { classNames } from '@/utils/classNames';
import { fetchProjects, getStrapiImageUrl } from '@/lib';

const BORDER_STYLE = 'border-r lg:h-screen border-main_color border-opacity-30';

const TECH_STACK: TechStackItem[] = [
  { src: '/images/tech/html5-plain.png', alt: 'HTML5', category: 'Markup' },
  { src: '/images/tech/css3-plain.png', alt: 'CSS3', category: 'Styling' },
  { src: '/images/tech/javascript-original.png', alt: 'JavaScript', category: 'Language' },
  { src: '/images/tech/typescript-original.png', alt: 'TypeScript', category: 'Language' },
  { src: '/images/tech/react-original.png', alt: 'React', category: 'Framework' },
  { src: '/images/tech/redux-original.png', alt: 'Redux', category: 'State Management' },
  { src: '/images/tech/nextjs-original.png', alt: 'Next.js', category: 'Framework' },
  { src: '/images/tech/firebase-plain.png', alt: 'Firebase', category: 'Backend' },
  { src: '/images/tech/tailwindcss-plain.png', alt: 'Tailwind CSS', category: 'Styling' },
  { src: '/images/tech/materialui-plain.png', alt: 'Material UI', category: 'UI Library' },
  { src: '/images/tech/eslint-original.png', alt: 'ESLint', category: 'Tool' },
  { src: '/images/tech/git-original.png', alt: 'Git', category: 'Version Control' },
] as const;

export default function ProjectsPage(): React.ReactElement {
  const [isTechStackOpen, toggleTechStack] = useToggle(true);
  const [projects, setProjects] = useState<StrapiProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    img: string;
    description: string;
    url: string;
    techStack: string[];
  } | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Failed to load projects:', err);
          console.error('Error details:', {
            message: err instanceof Error ? err.message : 'Unknown error',
            error: err,
          });
        }
        setError('Failed to load projects. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }

    loadProjects();
  }, []);

  return (
    <div className="text-main_color flex flex-col lg:grid lg:grid-cols-12 w-full min-h-screen lg:h-screen">
      <div className={classNames('left lg:col-span-2', BORDER_STYLE, 'overflow-y-auto order-2 lg:order-1')}>
        <div 
          className="border px-3 h-10 flex items-center border-main_color border-opacity-30 text-white bg-[#011627]/50 sticky top-0 z-10 font-medium cursor-pointer hover:bg-[#011627]/70 transition-colors duration-200"
          onClick={toggleTechStack}
        >
          <ArrowDropDownIcon 
            className={classNames(
              'w-5 h-5 transition-transform duration-200',
              isTechStackOpen ? 'rotate-0' : '-rotate-90'
            )} 
          />
          tech-stack
        </div>
        {isTechStackOpen && (
        <div className="px-3 md:px-4 py-4 md:py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 md:gap-4">
            {TECH_STACK.map((icon, index) => (
              <div
                key={index}
                className="group cursor-pointer flex flex-col items-center justify-center p-3 rounded-lg border border-main_color/10 bg-[#011627]/30 hover:border-custom_purple/30 hover:bg-custom_purple/5 transition-all duration-300 relative"
                title={icon.alt}
              >
                <div className="relative mb-2">
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={45}
                    height={45}
                    className="transition-all duration-300 group-hover:scale-125 group-hover:brightness-110 filter group-hover:drop-shadow-lg"
                  />
                  <div className="absolute inset-0 bg-custom_purple/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
                <span className="text-xs text-main_color/60 group-hover:text-custom_purple transition-colors duration-300 text-center leading-tight">
                  {icon.alt}
                </span>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>
      <div className={classNames('right lg:col-span-10', BORDER_STYLE, 'overflow-y-auto order-1 lg:order-2')}>
        <h3 className="border px-3 h-10 flex items-center border-main_color border-opacity-30 sticky top-0 bg-[#011627]/50 backdrop-blur-sm z-10 font-medium">
          projects
        </h3>
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-main_color/60">Loading projects...</p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-red-400">{error}</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-main_color/60">No projects found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 md:py-8 lg:py-10 px-4 md:px-8 lg:px-20 gap-6 md:gap-8 lg:gap-10">
            {projects.map((project, index) => {
              const imageUrl = getStrapiImageUrl(project.image);
              const tools = project.tools || [];
              const toolNames = tools.map(tool => tool.name);
              const projectImage = imageUrl || '/images/projects/project-1.png';
              const projectUrl = project.link || '#';

              return (
          <Project
                  key={project.id}
                  number={index + 1}
                  title={project.name || 'Untitled Project'}
                  img={projectImage}
                  description={project.description || ''}
                  url={projectUrl}
                  techStack={toolNames}
                  onCardClick={() => {
                    setSelectedProject({
                      title: project.name || 'Untitled Project',
                      img: projectImage,
                      description: project.description || '',
                      url: projectUrl,
                      techStack: toolNames,
                    });
                  }}
                />
              );
            })}
        </div>
        )}
      </div>

      {selectedProject && (
        <ProjectDialog
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          img={selectedProject.img}
          description={selectedProject.description}
          url={selectedProject.url}
          techStack={selectedProject.techStack}
        />
      )}
    </div>
  );
}
