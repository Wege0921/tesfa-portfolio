import { useState, useRef } from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter, FiSend, FiCheck, FiX, FiMessageSquare } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      // Replace these with your actual EmailJS service ID, template ID, and public key
      const serviceId = 'service_123'; // Replace with your EmailJS service ID
      const templateId = 'template_123'; // Replace with your EmailJS template ID
      const publicKey = 'your_public_key'; // Replace with your EmailJS public key
      
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! I\'ll get back to you soon.'
      });
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later or contact me directly at wegemuluneh@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'm always open to new challenges and interesting projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                    <FiMail className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Email Me</h4>
                    <a href="mailto:wegemuluneh@gmail.com" className="text-lg font-medium hover:text-blue-400 transition-colors">
                      wegemuluneh@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-500/10 p-3 rounded-lg mr-4">
                    <FiPhone className="text-green-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Call Me</h4>
                    <p className="text-lg font-medium">+251 940 706272</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-500/10 p-3 rounded-lg mr-4">
                    <FiMapPin className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Location</h4>
                    <p className="text-lg font-medium">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                <div className="grid grid-cols-4 gap-4">
                  <a href="https://www.linkedin.com/in/tesfamariam/" target="_blank" rel="noopener noreferrer" 
                     className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/30 transition-colors duration-300 flex items-center justify-center"
                     title="LinkedIn">
                    <FiLinkedin className="text-xl" />
                  </a>
                  <a href="https://github.com/Wege0921" target="_blank" rel="noopener noreferrer" 
                     className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/30 transition-colors duration-300 flex items-center justify-center"
                     title="GitHub">
                    <FiGithub className="text-xl" />
                  </a>
                  <a href="https://wa.me/251940706272?text=Hello%20Tesfamariam,%20I'm%20interested%20in%20your%20services." 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/30 transition-colors duration-300 flex items-center justify-center"
                     title="Chat on WhatsApp">
                    <FiMessageSquare className="text-xl text-green-400" />
                  </a>
                  <a href="https://t.me/@wege40" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/30 transition-colors duration-300 flex items-center justify-center"
                     title="Message on Telegram">
                    <FiSend className="text-xl text-blue-400" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 overflow-hidden h-64">
              {/* Simple map placeholder - you can replace this with an actual map component */}
              <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <FiMapPin className="w-8 h-8 mx-auto text-blue-400 mb-2" />
                  <p className="text-gray-400">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              {submitStatus.message && (
                <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'}`}>
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 ${submitStatus.success ? 'text-green-400' : 'text-red-400'} mt-0.5`}>
                      {submitStatus.success ? <FiCheck className="h-5 w-5" /> : <FiX className="h-5 w-5" />}
                    </div>
                    <div className="ml-3">
                      <p className={`text-sm ${submitStatus.success ? 'text-green-300' : 'text-red-300'}`}>
                        {submitStatus.message}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${errors.subject ? 'border-red-500/50' : 'border-white/10'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="How can I help you?"
                />
                {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject}</p>}
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Hi Tesfamariam, I'd like to discuss a project..."
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`mt-8 w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="mr-2" /> Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
