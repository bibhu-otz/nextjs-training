const Hero: React.FC = () => {
    return (
      <section id="hero" className="bg-gray-800 text-white h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm [Your Name]</h1>
        <p className="mt-4 text-xl">A passionate Developer and Designer</p>
        <a
          href="#projects"
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded text-lg"
        >
          View My Work
        </a>
      </section>
    );
  };
  
  export default Hero;
  