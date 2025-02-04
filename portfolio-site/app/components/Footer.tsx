const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  