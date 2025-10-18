export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Hi, I&apos;m <span className="text-blue-500">Omar El Attar</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          AI Engineer | MSc AI Student | Microsoft Certified Professional
        </p>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Currently working as an AI Engineer at MDS Systems, designing intelligent agents and automation 
          solutions for enterprise clients. Passionate about artificial intelligence, machine learning, 
          and building innovative solutions that drive business transformation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl font-medium"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
