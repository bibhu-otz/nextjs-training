interface Project {
    title: string;
    description: string;
    link: string;
  }
  
  const Projects: React.FC = () => {
    const projects: Project[] = [
      { title: "Project 1", description: "Description of project 1", link: "#" },
      { title: "Project 2", description: "Description of project 2", link: "#" },
    ];
  
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projects.map((project, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
                <a href={project.link} className="text-blue-500 hover:underline mt-4 block">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  