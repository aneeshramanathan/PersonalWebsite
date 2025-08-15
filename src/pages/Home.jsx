import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-primary-600">Aneesh Ramanathan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Computer Science student at San Jose State University and experienced Software Engineer Intern specializing in AI/ML, full-stack development, and data analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/projects"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Get In Touch
              </Link>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/aneeshramanathan" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/aneesh-ramanathan" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:aneesh.ramanathan@sjsu.edu" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16"
          >
            <ArrowDown className="mx-auto text-gray-400 animate-bounce" size={32} />
          </motion.div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-lg text-gray-600 mb-6">
                I'm a Computer Science student at San Jose State University with hands-on experience as a Software Engineer Intern 
                at companies like Cisco and AceMDR. I specialize in AI/ML development, full-stack web applications, and data analysis, 
                with expertise in Python, JavaScript, React, and various cloud platforms.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Currently pursuing my Bachelor's degree (Aug 2023 - May 2026), I've developed dynamic AI recommendation engines, 
                automated testing frameworks, and predictive analytics solutions. I'm passionate about leveraging technology 
                to solve complex problems and create meaningful impact.
              </p>
              <Link
                to="/about"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-block"
              >
                Learn More About Me
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-lg p-8"
            >
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  CS Student at SJSU (2023-2026)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Software Engineer Intern
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  AI/ML & Full-Stack Developer
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Python, JavaScript, React Expert
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">Check out some of my recent work</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: project * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <Link
                    to="/projects"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-block"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
