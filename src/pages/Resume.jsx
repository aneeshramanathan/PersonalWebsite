import React from 'react'
import { motion } from 'framer-motion'
import { Download, MapPin, Mail, Phone, Calendar, Award, Briefcase, GraduationCap } from 'lucide-react'

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "San Jose State University",
      year: "Aug 2023 - May 2026",
      description: "Currently pursuing degree with focus on software engineering, algorithms, and system design. Expected graduation May 2026."
    }
  ]

  const experience = [
    {
      title: "Software Engineer Intern",
      company: "Cisco",
      period: "May 2025 - August 2025",
      description: [
        "Developed a dynamic follow-up prompt recommendation engine for Cisco's SSE AI Assistant, leveraging RAG to suggest 3 contextual follow-up prompts based on user query",
        "Engineered and fine-tuned ML/NLP models in Python to rank prompts based on semantic similarity and conversational relevance, improving user engagement",
        "Integrated solution into Cisco's AI Assistant workflow with robust version control on GitHub, enabling seamless deployment and collaboration across teams"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "AceMDR",
      period: "May 2024 - August 2024",
      description: [
        "Created automated test scripts in Python, improving test efficiency by 30% and reducing bug identification time by 20%",
        "Tested and verified AI analyst's new API functionality per specifications",
        "Collaborated with cross-functional teams through daily SCRUM meetings for seamless integration of new API functionalities"
      ]
    },
    {
      title: "Events Planner Chair",
      company: "ACM SJSU",
      period: "November 2023 - Present",
      description: [
        "Streamlined event planning and team communication using project management tools like Google Workspace",
        "Coordinated logistics, budgeting, and outreach to increase event participation by 15% and fostering connections with industry professionals",
        "Collaborated with club officers and faculty to develop events focused on student interests in AI and software development"
      ]
    },
    {
      title: "Financial Data Analyst",
      company: "Keller Williams",
      period: "May 2022 - August 2022",
      description: [
        "Created interactive videos to promote home sales in the Bay Area, resulting in a 10% increase in online engagement and inquiries",
        "Developed California relocation trends with KW data using Excel charts, aiding in strategic marketing decisions",
        "Analyzed customer feedback to identify areas for improvement in promotional videos, leading to a 15% increase in customer satisfaction"
      ]
    }
  ]

  const skills = [
    { category: "Programming Languages", items: ["Java", "Python", "C", "SQL (Postgres)", "JavaScript", "HTML", "CSS", "GO"] },
    { category: "Frameworks", items: ["React", "Node.js", "Flask", "JUnit", "WordPress", "FastAPI"] },
    { category: "Developer Tools", items: ["Git", "Docker", "TravisCI", "Google Cloud Platform", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "Eclipse"] },
    { category: "Libraries", items: ["pandas", "NumPy", "Matplotlib"] }
  ]

  const certifications = [
    "AWS Certified Solutions Architect",
    "Professional Software Developer Certification",
    "Full Stack Web Development Certificate",
    "Cloud Computing Fundamentals"
  ]

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Resume</h1>
            <p className="text-xl text-gray-600 mb-8">
              Download my complete resume or view my experience and qualifications below
            </p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center">
              <Download className="mr-2" size={20} />
              Download PDF Resume
            </button>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Info */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Mail className="text-primary-600 mr-3" size={20} />
                <span>aneesh.ramanathan@sjsu.edu</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary-600 mr-3" size={20} />
                <span>408-748-4206</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-primary-600 mr-3" size={20} />
                <span>San Jose, CA</span>
              </div>
              <div className="flex items-center">
                <Calendar className="text-primary-600 mr-3" size={20} />
                <span>Available Immediately</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Professional Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              Computer Science student at San Jose State University with hands-on experience as a Software Engineer Intern 
              at leading technology companies including Cisco and AceMDR. Specialized in AI/ML development, full-stack web applications, 
              and data analysis with expertise in Python, JavaScript, React, and cloud technologies. Proven track record of developing 
              dynamic recommendation engines, automated testing frameworks, and predictive analytics solutions. Strong problem-solving 
              abilities with experience in agile development, version control, and cross-functional team collaboration.
            </p>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Briefcase className="mr-3 text-primary-600" size={24} />
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="border-l-4 border-primary-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-primary-600 font-medium">{job.company}</p>
                  <p className="text-gray-500 mb-3">{job.period}</p>
                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="text-gray-700 flex items-start">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="mr-3 text-primary-600" size={24} />
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-primary-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-primary-600 font-medium">{edu.school}</p>
                  <p className="text-gray-500 mb-2">{edu.year}</p>
                  <p className="text-gray-700">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="mr-3 text-primary-600" size={24} />
              Certifications
            </h2>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Resume
