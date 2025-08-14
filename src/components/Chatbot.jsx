import React, { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Aneesh's virtual assistant. Ask me anything about his background, skills, or experience!",
      sender: 'bot'
    }
  ])
  const [inputMessage, setInputMessage] = useState('')

  // Simple knowledge base about Aneesh
  const knowledgeBase = {
    'name': "Aneesh Ramanathan",
    'education': "Computer Science graduate with focus on software engineering and system design",
    'skills': "Python, JavaScript, React, Node.js, AWS, Docker, PostgreSQL, System Architecture",
    'experience': "Software engineer with experience in full-stack development, cloud technologies, and scalable system design",
    'interests': "Software engineering, cloud computing, system architecture, open-source development, and emerging technologies",
    'location': "San Francisco Bay Area, California - Open to remote opportunities",
    'contact': "You can reach Aneesh through the contact form on this website or via email",
    'projects': "Check out the Projects page to see Aneesh's portfolio of software engineering work",
    'resume': "View Aneesh's complete resume in the Resume section for detailed experience and qualifications"
  }

  const getResponse = (message) => {
    const lowerMessage = message.toLowerCase()
    
    // Simple keyword matching
    if (lowerMessage.includes('name')) {
      return `His name is ${knowledgeBase.name}.`
    }
    if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('degree')) {
      return knowledgeBase.education
    }
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('programming')) {
      return `Aneesh's skills include: ${knowledgeBase.skills}`
    }
    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
      return knowledgeBase.experience
    }
    if (lowerMessage.includes('interest') || lowerMessage.includes('hobby') || lowerMessage.includes('like')) {
      return `Aneesh's interests include: ${knowledgeBase.interests}`
    }
    if (lowerMessage.includes('location') || lowerMessage.includes('where')) {
      return knowledgeBase.location
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email')) {
      return knowledgeBase.contact
    }
    if (lowerMessage.includes('project') || lowerMessage.includes('portfolio') || lowerMessage.includes('work')) {
      return knowledgeBase.projects
    }
    if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
      return knowledgeBase.resume
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! I'm here to help you learn more about Aneesh. What would you like to know?"
    }
    
    return "I'd be happy to help! You can ask me about Aneesh's education, skills, experience, projects, or how to contact him."
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user'
    }

    const botResponse = {
      id: messages.length + 2,
      text: getResponse(inputMessage),
      sender: 'bot'
    }

    setMessages([...messages, userMessage, botResponse])
    setInputMessage('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition-all duration-300 z-50 ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-primary-600 hover:bg-primary-700'
        } text-white`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-xl border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-primary-600 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Chat with Aneesh's Assistant</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Aneesh..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
