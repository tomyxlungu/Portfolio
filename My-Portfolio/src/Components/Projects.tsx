const Project = () => {
  const projects = [
    { name: 'E-commerce Platform Redesign', href: '#' },
    { name: 'Cloud Migration Strategy', href: '#' },
    { name: 'Interactive Dashboard Explorer', href: '#' },
  ];

  return (
    <div>
        <div>
            <h4 className='font-bold text-2xl text-white mb-4'>Projects</h4>
        </div>

        <nav className="mb-14">
      <ul className="flex flex-wrap items-center gap-x-2 text-gray-300 font-medium">
        {projects.map((project, index) => (
          <li key={index} className="flex items-center">
            <a 
              href={project.href} 
              className="underline decoration-gray-400 underline-offset-4 hover:text-white 
              transition-colors"
            >
              {project.name}
            </a>
            {/* Render the separator only between items */}
            {index < projects.length - 1 && (
              <span className="ml-2 text-gray-500" aria-hidden="true">·</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
    </div>
  );
};

export default Project;