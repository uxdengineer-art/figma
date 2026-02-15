import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Dribbble, Menu, X, ArrowRight, Send } from 'lucide-react';
import { Link } from 'react-router';
import heroImage from 'figma:asset/b32ae56e10d785675362f259fa7829bff3a10df1.png';

export default function PortfolioV2() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '9c4e3f6a-8b2d-4e1f-9a7c-5d3e2f1a0b9c', // You'll need to replace this with your own key from web3forms.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to: 'amsudesign@hotmail.com',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    { title: 'Digital Product Design', icon: '🎨' },
    { title: 'User Experience Design', icon: '🔍' },
    { title: 'User Interface Design', icon: '💎' },
    { title: 'User Research', icon: '📊' },
    { title: 'Information Architecture', icon: '🏗️' },
    { title: 'Interaction Design', icon: '⚡' },
    { title: 'UI Auditing', icon: '✅' },
    { title: 'Brand Design', icon: '🎯' },
    { title: 'Prototyping', icon: '🔧' },
    { title: 'User Testing', icon: '🧪' },
    { title: 'Web UI Design', icon: '🌐' },
    { title: 'Mobile UI Design', icon: '📱' },
    { title: 'Shopify Design', icon: '🛍️' },
    { title: 'Design System', icon: '📐' }
  ];

  const projects = [
    { title: 'E-Commerce Platform', category: 'Web Design', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop' },
    { title: 'Mobile Banking App', category: 'Mobile Design', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop' },
    { title: 'SaaS Dashboard', category: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' },
    { title: 'Health & Fitness App', category: 'Mobile Design', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop' },
    { title: 'Real Estate Platform', category: 'Web Design', image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=400&fit=crop' },
    { title: 'Food Delivery App', category: 'Mobile Design', image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&h=400&fit=crop' },
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '200+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '15+', label: 'Awards Won' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">A</span>
            </div>
            <div>
              <span className="text-gray-900 font-bold text-lg block leading-none">
                AMSU MUHAMMED
              </span>
              <span className="text-xs text-gray-500">Product Designer</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
              Services
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
              Portfolio
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
              About
            </a>
            <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all">
              Contact
            </a>
          </nav>
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col p-4 gap-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              👋 Welcome to my portfolio
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              15 Years Crafting User Experiences
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              I'm a passionate Design Leader and Product Designer based in Bangalore, dedicated to creating 
              user-centric digital experiences that drive results and simplify everyday life.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#portfolio" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all inline-flex items-center gap-2"
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all border-2 border-gray-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage}
                alt="Designer at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Services I Offer
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive design solutions to help your business thrive in the digital world
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer border border-gray-100 hover:border-blue-200 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 text-white shadow-xl">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Design strategies that deliver <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">results</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              I'm an experienced Design Leader and Product Designer with over 15 years of expertise in creating 
              exceptional digital experiences. My approach combines strategic thinking with creative excellence 
              to help businesses scale and succeed.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              I specialize in transforming complex problems into elegant, user-friendly solutions. Whether 
              you're a startup or an established enterprise, I bring the design thinking and technical 
              expertise needed to elevate your product.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all inline-flex items-center gap-2">
                Let's Work Together <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Collaboration between designers, developers, and stakeholders creates exceptional products
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-2xl transition-all">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="px-2">
                  <div className="text-sm text-blue-600 font-medium mb-1">{project.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Create Something Amazing</h2>
            <p className="text-blue-100 text-lg">
              Have a project in mind? Let's discuss how we can work together
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-50 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-50 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-gray-50 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200"
              />
            </div>
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-4 bg-gray-50 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none border border-gray-200"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
              </button>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-xl">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-100 text-red-800 rounded-xl">
                  ❌ Failed to send message. Please try again or email directly at amsudesign@hotmail.com
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg font-bold">A</span>
                </div>
                <span className="text-xl font-bold">AOOP MUHAMMAD</span>
              </div>
              <p className="text-gray-400">
                Creating exceptional digital experiences for over 15 years.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="#services" className="block text-gray-400 hover:text-white transition-colors">Services</a>
                <a href="#portfolio" className="block text-gray-400 hover:text-white transition-colors">Portfolio</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <div className="flex gap-3 mb-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Dribbble className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <a href="mailto:amsudesign@hotmail.com" className="text-blue-400 hover:underline">
                amsudesign@hotmail.com
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 AMSU MUHAMMED. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}