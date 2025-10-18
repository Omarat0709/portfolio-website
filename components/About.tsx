export default function About() {
  const skills = [
    "Python",
    "C/C++",
    "JavaScript/TypeScript",
    "React & Next.js",
    "Copilot Studio",
    "Power Automate",
    "Power Apps",
    "PyTorch & TensorFlow",
    "Microsoft Azure",
    "Machine Learning",
    "AI Agent Development",
    "REST APIs & Automation",
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* About Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I&apos;m currently working as an AI Engineer at MDS Systems (Midis Group), where I design 
              intelligent agents using Microsoft Copilot Studio and build enterprise automation solutions. 
              I was handpicked to independently lead 2 major projects for the largest event organizer in 
              the Middle East, demonstrating my technical proficiency and rapid workplace adaptation.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Alongside my role, I&apos;m pursuing my MSc in Artificial Intelligence for Engineering & 
              Design at the University of Bath (graduating 2025), building on my First Class Honours degree 
              in Computer Systems Engineering from the same institution.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I hold three Microsoft certifications (AI-900, AZ-900, MS-900), validating my expertise in 
              Azure AI, cloud computing, and Microsoft 365 technologies. My technical skills span across 
              AI development, low-code platforms (Power Platform), machine learning frameworks, and 
              full-stack development.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I&apos;m fluent in English and French, with intermediate Spanish and Arabic. Outside of work, 
              I enjoy tennis, hiking, voice acting, and video editing for YouTube. I believe in continuous 
              learning and creating innovative solutions that make a real-world impact.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                >
                  <span className="text-gray-800 dark:text-gray-200 font-medium">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            {/* Microsoft Certifications Badge */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white">
              <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span>🎓</span> Microsoft Certified Professional
              </h4>
              <div className="space-y-1 text-sm">
                <p>✓ Azure AI Fundamentals (AI-900)</p>
                <p>✓ Azure Fundamentals (AZ-900)</p>
                <p>✓ Microsoft 365 Fundamentals (MS-900)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
