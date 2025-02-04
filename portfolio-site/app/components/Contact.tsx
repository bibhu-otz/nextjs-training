const Contact: React.FC = () => {
    return (
      <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <form className="mt-8 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 mb-4 border rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 mb-4 border rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 mb-4 border rounded"
              rows={4}
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  