export default function Experience() {
  const experiences = [
    {
      company: "MDS Systems - LiveRoute AI & Data Team",
      parentCompany: "Midis Group",
      role: "AI Engineer",
      location: "Placement",
      period: "July 2025 - Present",
      type: "Full-time Placement",
      description: [
        "Working directly on client projects delivering AI solutions to the largest event organizer in the Middle East, managing large-scale international events and exhibitions.",
        "Independently selected to lead 2 major projects, demonstrating rapid adaptation to workplace demands and technical proficiency.",
        "Design and develop intelligent agents using Microsoft Copilot Studio for various business automation and customer engagement purposes.",
        "Build end-to-end workflow automation solutions using Power Automate, integrating multiple systems and APIs.",
        "Develop enterprise applications leveraging Power Apps and Dataverse for data management and business process optimization.",
      ],
      technologies: ["Copilot Studio", "Power Automate", "Power Apps", "Dataverse", "AI Agents", "Microsoft Azure"],
      icon: "🤖",
      current: true
    },
    {
      company: "AQEED Tech-Solutions",
      role: "Software Development Intern",
      location: "Beirut, Lebanon",
      period: "Aug - Sep 2023",
      type: "Internship",
      description: [
        "Integrated into a CRON-like code-base, using React and JavaScript, and performed a performance check of the repository.",
        "Debugged code, reviewing and executing tasks/tickets based on project milestones.",
        "Experienced Jira and Bitbucket code review, and DevOps workflow in Jira.",
      ],
      technologies: ["React", "JavaScript", "Jira", "Bitbucket", "DevOps"],
      icon: "💼",
      current: false
    },
  ];

  const awards = [
    {
      title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      organization: "Microsoft",
      year: "2025",
      description: "Professional certification demonstrating foundational knowledge of AI and machine learning concepts on Azure",
      icon: "🎓",
      type: "certification"
    },
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      organization: "Microsoft",
      year: "2025",
      description: "Professional certification validating cloud computing knowledge and Azure services expertise",
      icon: "☁️",
      type: "certification"
    },
    {
      title: "Microsoft 365 Certified: Fundamentals (MS-900)",
      organization: "Microsoft",
      year: "2025",
      description: "Professional certification proving proficiency in Microsoft 365 services and cloud concepts",
      icon: "📊",
      type: "certification"
    },
    {
      title: "Dean's Prize 'Outstanding' Scholarship",
      organization: "University of Bath",
      year: "2024",
      description: "Award for academic excellence - Digital & most award!",
      icon: "🏆",
      type: "award"
    },
    {
      title: "Diana Jawad AI 'Active Learner' Certificate",
      organization: "",
      year: "2023",
      description: "Recognition for active learning and engagement in AI studies",
      icon: "📜",
      type: "award"
    },
    {
      title: "Academic Representative 2023/24",
      organization: "",
      year: "2023-2024",
      description: "Organized feedback for 60 students and coordinated year-group discussions",
      icon: "👥",
      type: "award"
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Experience & Achievements
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Professional experience and academic recognitions throughout my career
        </p>

        {/* Work Experience Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">💼</span>
            Professional Experience
          </h3>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-3xl">{exp.icon}</span>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.role}
                        </h4>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                          {exp.company}
                        </p>
                        {exp.parentCompany && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                            Part of {exp.parentCompany}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 ml-12">
                      <span className="flex items-center gap-1">
                        📍 {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        📅 {exp.period}
                      </span>
                      <span className={`px-3 py-1 rounded-full ${
                        exp.current 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                      }`}>
                        {exp.type}
                      </span>
                      {exp.current && (
                        <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-semibold animate-pulse">
                          Currently Working
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="ml-12">
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🏆</span>
            Certifications & Awards
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-lg p-6 border-2 hover:shadow-xl transition-shadow ${
                  award.type === 'certification'
                    ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 border-blue-300 dark:border-blue-600'
                    : 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 border-yellow-200 dark:border-yellow-700'
                }`}
              >
                <div className="text-center mb-4">
                  <span className="text-5xl">{award.icon}</span>
                  {award.type === 'certification' && (
                    <div className="mt-2">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full font-semibold">
                        Microsoft Certified
                      </span>
                    </div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                  {award.title}
                </h4>
                {award.organization && (
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-center mb-2">
                    {award.organization}
                  </p>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3">
                  {award.year}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm text-center">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-blue-50 dark:bg-gray-800 rounded-lg p-8 border border-blue-200 dark:border-blue-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Technical Skills Summary
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span>🤖</span> AI & Low-Code Platforms
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Copilot Studio (Proficient), Power Automate (Proficient), Power Apps (Advanced), Dataverse (Advanced)
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span>💻</span> Programming & Scripting
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                C/C++, Python, JavaScript, HTML, TypeScript, Node.js
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span>🔧</span> Frameworks & Libraries
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                React, PyTorch, Next.js, TailwindCSS, Pandas, Microsoft Azure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
