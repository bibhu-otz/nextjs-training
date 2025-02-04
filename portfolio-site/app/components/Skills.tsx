const Skills: React.FC = () => {
    const skills = ["JavaScript", "React", "Next.js", "Tailwind CSS", "Node.js"];
  
    return (
      <section id="skills" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="flex flex-wrap justify-center mt-8">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-500 text-white px-4 py-2 m-2 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  