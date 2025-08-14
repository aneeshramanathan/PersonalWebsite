import React from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Database, Globe } from 'lucide-react'

const About = () => {
  const skills = [
    {
      category: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      technologies: ["Java", "Python", "C", "SQL (Postgres)", "JavaScript", "HTML", "CSS", "GO"]
    },
    {
      category: "Frameworks",
      icon: <Palette className="w-6 h-6" />,
      technologies: ["React", "Node.js", "Flask", "JUnit", "WordPress", "FastAPI"]
    },
    {
      category: "Developer Tools",
      icon: <Database className="w-6 h-6" />,
      technologies: ["Git", "Docker", "TravisCI", "Google Cloud Platform", "VS Code", "Visual Studio"]
    },
    {
      category: "Libraries & IDEs",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["pandas", "NumPy", "Matplotlib", "PyCharm", "IntelliJ", "Eclipse"]
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about my journey, passion for technology, and what drives me to create meaningful digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  I'm currently pursuing my Bachelor of Science in Computer Science at San Jose State University 
                  (Aug 2023 - May 2026). My academic journey has been complemented by hands-on experience through 
                  internships at leading technology companies including Cisco and AceMDR, where I've specialized in 
                  AI/ML development and software engineering.
                </p>
                <p>
                  At Cisco, I developed a dynamic follow-up prompt recommendation engine for their SSE AI Assistant, 
                  leveraging RAG technology to enhance user engagement. At AceMDR, I created automated testing frameworks 
                  that improved efficiency by 30%. My experience spans from AI recommendation engines to predictive 
                  analytics and full-stack web development.
                </p>
                <p>
                  Beyond academics and internships, I serve as Events Planner Chair for ACM SJSU, where I've increased 
                  event participation by 15% through strategic planning and community engagement. I'm passionate about 
                  technology's potential to solve complex problems and create meaningful impact in people's lives.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-lg p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">1</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI/ML Development</h4>
                    <p className="text-gray-600">Building recommendation engines and predictive analytics solutions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">2</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Full-Stack Development</h4>
                    <p className="text-gray-600">Creating web applications with React, Node.js, and modern frameworks</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">3</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Data Analysis</h4>
                    <p className="text-gray-600">Analyzing complex datasets and creating predictive models</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <p className="text-lg text-gray-600">Here are the tools and technologies I work with</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-100 rounded-lg text-primary-600 mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <li key={tech} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Values</h2>
            <p className="text-lg text-gray-600">The principles that guide my work and approach</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation & Learning",
                description: "I'm passionate about exploring emerging technologies like AI/ML and staying current with industry trends to create cutting-edge solutions."
              },
              {
                title: "Collaboration & Leadership",
                description: "Through my role as ACM Events Chair and internship experiences, I've learned the value of teamwork and effective communication."
              },
              {
                title: "Impact-Driven Development",
                description: "Every project I work on is guided by the goal of creating meaningful impact, whether improving user experience or solving complex problems."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
