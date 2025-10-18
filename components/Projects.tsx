export default function Projects() {
  const projects = [
    {
      title: "AI & Machine Learning for Engineering & Design",
      description: "MSc dissertation project focusing on artificial intelligence applications in engineering and design. Benchmarking CNNs with ANN-and-LSTM models for optimizing sensor data, coordinated at scale and tested in real-world scenarios with rigorous documentation.",
      technologies: ["Python", "PyTorch", "TensorFlow", "CNN", "LSTM", "Machine Learning"],
      github: null,
      demo: null,
      pdfLink: "/projects/msc-dissertation.pdf",
      category: "Machine Learning"
    },
    {
      title: "Final Year Project - Water Supplies Detection",
      description: "Advanced computer systems engineering project using Computer Vision and IoT. Developed an online/hybrid board that calculated water supplies on a discrete surface, implementing footprint and power-over-ether prior design to solve real-world water supply challenges.",
      technologies: ["Computer Vision", "IoT", "Python", "Embedded Systems"],
      github: null,
      demo: null,
      pdfLink: "/projects/final-year-project.pdf",
      videoFile: "/projects/water-detection-demo.mp4",
      category: "Computer Vision"
    },
    {
      title: "PES Feeds-Balanz - C & Raspberry Pi",
      description: "Implemented a distributed memory social recording platform on a Raspberry Pi. Developed with a watch-controlled login, call functionality, and SMS/text features, optimizing communication and convergence logic with reduced latency in the DRAM module.",
      technologies: ["C", "Raspberry Pi", "Distributed Systems", "Embedded Programming"],
      github: null,
      demo: null,
      category: "Embedded Systems"
    },
    {
      title: "Vending RISC CPU x Pong Game",
      description: "Designed a 3-chip motherboard RISC core in Verilog on an Intel FPGA, implementing a watch-controlled vending machine capable of multi-task tests. Created an advanced Pong game implementation showcasing real-time processing capabilities.",
      technologies: ["Verilog", "FPGA", "RISC", "Hardware Design"],
      github: null,
      demo: null,
      category: "Hardware Design"
    },
    {
      title: "Marvel API Character Scraper",
      description: "A Python web scraping application that retrieves Marvel character data from the Marvel API and exports it to Excel format. Users can search for specific characters and generate customized spreadsheets with comprehensive character information.",
      technologies: ["Python", "Marvel API", "Pandas", "Excel", "REST APIs"],
      github: "https://github.com/Omarat0709/marvel-scraper",
      demo: null,
      downloadLink: "/projects/marvel-sample-output.xlsx",
      category: "Data Analysis"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js 14 and TypeScript. Features include dark mode support, smooth scrolling navigation, project showcase with video demonstrations, and mobile-first responsive design.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      github: "https://github.com/Omarat0709/portfolio-website",
      demo: "https://portfolio-project-jwrcndsj1-omarat0709s-projects.vercel.app",
      category: "Web Development"
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A collection of my work including web development, data analysis, and academic research projects.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700 flex flex-col"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
                <span className="text-white text-2xl font-bold text-center px-4">
                  {project.title}
                </span>
                {project.category && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs">
                    {project.category}
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                  
                  {/* Additional Links */}
                  {project.pdfLink && (
                    <a
                      href={project.pdfLink}
                      download
                      className="text-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      📄 Download PDF
                    </a>
                  )}
                  {project.downloadLink && (
                    <a
                      href={project.downloadLink}
                      download
                      className="text-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      📊 Sample Excel
                    </a>
                  )}
                  {project.videoFile && (
                    <a
                      href={project.videoFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      🎥 Watch Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}