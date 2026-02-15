import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, CheckCircle, Linkedin, Twitter, Facebook, Instagram, MessageSquare } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const emailBody = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Service Interested In: ${formData.service || 'Not specified'}
Budget: ${formData.budget || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}

Message:
${formData.message}

---
Sent from Portfolio Contact Form
      `;

      const mailtoLink = `mailto:amsudesign@hotmail.com?subject=New Contact Form Submission from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`;
      
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        timeline: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'amsudesign@hotmail.com',
      link: 'mailto:amsudesign@hotmail.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#',
      description: 'Available for remote work worldwide'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '24-48 hours',
      link: '#',
      description: 'We respond to all inquiries'
    }
  ];

  const services = [
    'UI/UX Design',
    'Web Design',
    'Mobile App Design',
    'Product Design',
    'Branding & Identity',
    'E-commerce Design',
    'Responsive Design',
    'Prototyping',
    'Design Systems',
    'User Research',
    'Consultation',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'Not sure yet'
  ];

  const timelines = [
    'ASAP',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope and complexity. A typical web design project takes 4-8 weeks, while more complex applications may take 3-6 months. We\'ll provide a detailed timeline during our initial consultation.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Absolutely! I work with clients worldwide and am experienced in remote collaboration. I\'m available for calls across different time zones and use modern project management tools to ensure smooth communication.'
    },
    {
      question: 'What is your design process?',
      answer: 'My process includes Discovery & Research, Information Architecture, Wireframing & Prototyping, Visual Design, and Testing & Refinement. Each phase involves client collaboration to ensure the final product exceeds expectations.'
    },
    {
      question: 'Do you offer ongoing support after project completion?',
      answer: 'Yes! I offer various support packages including maintenance, updates, and iterative improvements. We can discuss the best support plan for your needs during our consultation.'
    },
    {
      question: 'What information do you need to provide a quote?',
      answer: 'To provide an accurate quote, I need to understand your project goals, target audience, desired features, timeline, and budget range. The more details you can provide in the contact form, the better I can estimate the project scope.'
    },
    {
      question: 'Can you work with our existing brand guidelines?',
      answer: 'Definitely! I can work within your established brand guidelines or help create new ones if needed. I ensure all designs align perfectly with your brand identity and values.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">A</span>
            </div>
            <div>
              <span className="text-gray-900 font-bold text-lg block leading-none">
                AOOP MUHAMMAD
              </span>
              <span className="text-xs text-gray-500">Product Designer</span>
            </div>
          </Link>
          <nav className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
              Services
            </Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
              Portfolio
            </Link>
            <Link to="/contact" className="text-blue-600 font-semibold transition-colors text-sm">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Work Together
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Have a project in mind? I'd love to hear about it. Fill out the form below 
              or reach out directly, and I'll get back to you within 24-48 hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:amsudesign@hotmail.com"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Me Directly
              </a>
              <a 
                href="#contact-form"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-all"
              >
                Fill Contact Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-900 font-medium mb-1">{info.value}</p>
                <p className="text-sm text-gray-500">{info.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section id="contact-form" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Send Me a Message
                </h2>
                <p className="text-gray-600 text-lg">
                  Fill out the form below with your project details, and I'll get back to you as soon as possible.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-green-900 mb-1">Message Sent Successfully!</h3>
                    <p className="text-green-700 text-sm">Thank you for reaching out. I'll respond within 24-48 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                  <MessageSquare className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-1">Something went wrong</h3>
                    <p className="text-red-700 text-sm">Please try again or email me directly at amsudesign@hotmail.com</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-900 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-900 mb-2">
                      Expected Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              {/* Why Work With Me */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Work With Me?</h3>
                <ul className="space-y-4">
                  {[
                    '15+ years of design excellence',
                    '150+ successful projects delivered',
                    '50+ happy clients worldwide',
                    'Award-winning design work',
                    'User-centric approach',
                    'Fast response times',
                    'Flexible collaboration',
                    'Post-launch support available'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h3>
                <p className="text-gray-600 mb-6">
                  Follow me on social media to see my latest work and design insights.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Linkedin, name: 'LinkedIn', link: '#', color: 'bg-blue-600' },
                    { icon: Twitter, name: 'Twitter', link: '#', color: 'bg-sky-500' },
                    { icon: Facebook, name: 'Facebook', link: '#', color: 'bg-blue-700' },
                    { icon: Instagram, name: 'Instagram', link: '#', color: 'bg-pink-600' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all group"
                    >
                      <div className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <social.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium text-gray-900">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                    <span className="text-gray-900 font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="text-gray-900 font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <Clock className="w-4 h-4 inline mr-2" />
                    PST (Pacific Standard Time)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about working with me
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 group"
              >
                <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-blue-600 text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Don't hesitate to reach out. I'm always excited to discuss new projects and creative challenges.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#contact-form" 
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send a Message
            </a>
            <Link 
              to="/portfolio" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-all"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">A</span>
            </div>
            <span className="text-xl font-bold">AOOP MUHAMMAD</span>
          </div>
          <p className="text-gray-400 mb-4">
            Creating exceptional digital experiences for over 15 years.
          </p>
          <a href="mailto:amsudesign@hotmail.com" className="text-blue-400 hover:underline">
            amsudesign@hotmail.com
          </a>
          <div className="border-t border-gray-800 mt-8 pt-8 text-gray-400">
            <p>© 2026 AOOP Muhammad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
