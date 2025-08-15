import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Smartphone, Globe, Database } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "ACM Club Website",
      description: "Designed and built the CS Student organization website using Javascript and next.js framework. Integrated with other modules of the website and published using git hub site repository.",
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
      technologies: ["React.js", "JavaScript", "HTML", "TypeScript", "Next.js", "Git"],
      githubUrl: "https://github.com/aneeshramanathan",
      liveUrl: "#",
      icon: <Globe className="w-6 h-6" />,
      period: "December 2023 - March 2024"
    },
    {
      title: "Navigating Urban Safety",
      description: "Developed predictive crime patterns in the city of SF using Machine Learning languages such as Python and frameworks such as Scikit-learn. Utilized GitHub for version control and project collaboration, managing codebase and resolving conflicts in a team-based project environment.",
      image: "bg-gradient-to-br from-green-400 to-green-600",
      technologies: ["Python", "NumPy", "pandas", "Matplotlib", "Scikit-learn", "Git"],
      githubUrl: "https://github.com/aneeshramanathan",
      liveUrl: "#",
      icon: <Database className="w-6 h-6" />,
      period: "October 2023 - January 2024"
    },
    {
      title: "Cisco AI Assistant Enhancement",
      description: "Developed a dynamic follow-up prompt recommendation engine for Cisco's SSE AI Assistant, leveraging RAG to suggest contextual follow-up prompts based on user queries.",
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
      technologies: ["Python", "ML/NLP", "RAG", "GitHub", "AI/ML"],
      githubUrl: "https://github.com/aneeshramanathan",
      liveUrl: "#",
      icon: <Code className="w-6 h-6" />,
      period: "May 2025 - August 2025"
    },
    {
      title: "AceMDR Testing Framework",
      description: "Created automated test scripts in Python, improving test efficiency by 30% and reducing bug identification time by 20%. Tested and verified AI analyst's new API functionality per specifications.",
      image: "bg-gradient-to-br from-red-400 to-red-600",
      technologies: ["Python", "API Testing", "Test Automation", "SCRUM"],
      githubUrl: "https://github.com/aneeshramanathan",
      liveUrl: "#",
      icon: <Code className="w-6 h-6" />,
      period: "May 2024 - August 2024"
    }
  ]

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my work, featuring web applications, tools, and experiments built with modern technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Project Image/Icon */}
                <div className={`h-48 ${project.image} flex items-center justify-center`}>
                  <div className="text-white p-4 bg-white/20 rounded-full backdrop-blur-sm">
                    {project.icon}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  {project.period && (
                    <p className="text-primary-600 text-sm font-medium mb-2">{project.period}</p>
                  )}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Used */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies I Use</h2>
            <p className="text-lg text-gray-600">
              Here are some of the key technologies and tools I work with in my projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {[
              "Java", "Python", "C", "SQL", "JavaScript", "HTML", "CSS", "GO",
              "React", "Node.js", "Flask", "JUnit", "WordPress", "FastAPI",
              "Git", "Docker", "TravisCI", "Google Cloud Platform", "VS Code",
              "pandas", "NumPy", "Matplotlib", "PyCharm", "IntelliJ"
            ].map((tech, index) => (
              <div
                key={tech}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-gray-800 font-medium">{tech}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Interested in Working Together?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              I'm always excited to take on new challenges and create amazing digital experiences. 
              Let's discuss your next project!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-block"
              >
                Get In Touch
              </Link>
              <Link
                to="/resume"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-block"
              >
                View Resume
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects
