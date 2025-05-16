import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'Description for project 1',
    image: 'https://via.placeholder.com/450x240',
    href: '#',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: 'https://via.placeholder.com/450x240',
    href: '#',
  },
  {
    title: 'Project 3',
    description: 'Description for project 3',
    image: 'https://via.placeholder.com/450x240',
    href: '#',
  },
  {
    title: 'Project 4',
    description: 'Description for project 4',
    image: 'https://via.placeholder.com/450x240',
    href: '#',
  },
  {
    title: 'Project 5',
    description: 'Description for project 5',
    image: 'https://via.placeholder.com/450x240',
    href: '#',
  },
  {
    title: 'Project 6',
    description: 'Description for project 6',
    image: 'https://via.placeholder.com/450x240',
    href: '#',
  },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-16">
      {projects.map((project) => {
        const isLink = !!project.href;
        const WrappingComponent = isLink ? 'a' : 'div'; // Link component will be an anchor tag

        return (
          <WrappingComponent
            href={project.href}
            key={project.title}
            className="flex flex-col justify-center bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-8"
          >
            <div className="relative rounded-xl mb-4 shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl w-full h-56 object-cover"
              />
            </div>
            <h3 className="text-slate-700 font-semibold tracking-tight text-xl mb-2">
              {project.title}
            </h3>
            <h4 className="text-slate-500 text-base">{project.description}</h4>
          </WrappingComponent>
        );
      })}
    </div>
  );
};

export default Projects;
