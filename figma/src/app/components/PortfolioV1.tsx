import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Dribbble } from 'lucide-react';
import { Link } from 'react-router';
import heroImage from 'figma:asset/b32ae56e10d785675362f259fa7829bff3a10df1.png';

export default function PortfolioV1() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

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
    'Digital Product Design',
    'User Experience Design',
    'User Interface Design',
    'User Research',
    'Information Architecture',
    'Interaction Design',
    'UI Auditing',
    'Brand Design',
    'Prototyping',
    'User Testing',
    'Web UI Design',
    'Mobile UI Design',
    'Shopify Design',
    'Design System'
  ];

  const tools = [
    { name: 'Figma', color: '#F24E1E' },
    { name: 'Sketch', color: '#F7B500' },
    { name: 'Adobe XD', color: '#FF61F6' },
    { name: 'Photoshop', color: '#31A8FF' },
    { name: 'Illustrator', color: '#FF9A00' },
    { name: 'InVision', color: '#FF3366' },
    { name: 'Dribbble', color: '#EA4C89' },
    { name: 'Behance', color: '#1769FF' },
    { name: 'Zeplin', color: '#FDBD39' },
    { name: 'Medium', color: '#00AB6C' },
    { name: 'Miro', color: '#FFD02F' },
    { name: 'Proto.io', color: '#34B1F7' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-bold">AM</span>
            </div>
            <span className="text-white font-semibold">
              AMSU <span className="text-red-500">MUHAMMED</span>
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="bg-red-500 text-white px-4 py-2 text-sm font-medium">
              HOME
            </a>
            <a href="#services" className="text-white hover:text-red-500 transition-colors text-sm font-medium">
              SERVICES
            </a>
            <a href="#portfolio" className="text-white hover:text-red-500 transition-colors text-sm font-medium">
              PORTFOLIO
            </a>
            <a href="#career" className="text-white hover:text-red-500 transition-colors text-sm font-medium">
              CAREER
            </a>
            <a href="#contact" className="text-white hover:text-red-500 transition-colors text-sm font-medium">
              CONTACT
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            15 Years Crafting User Experiences
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            An experienced Design Leader and Product Designer based in Bangalore, with a 15-year journey dedicated to crafting ProApps, user-centric,
            <br />
            digital experiences. Design isn't just work — it's a profession — it's to sustain that drives every project forward.
          </p>
          <div className="flex justify-center">
            <div className="w-12 h-20 border-2 border-white rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              I create design strategies for your business that get results.
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              An experienced Design Leader and Product Designer based in Bangalore, India, with over
              15 years of experience. I help startups and SMEs scale their products by turning their
              ideas into visually compelling problems, with a focus on ensuring excellent solutions
              that simplify everyday experiences.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I help startups and SMEs by providing the products they are building with strong UX and
              visual design and branding and interface — with a great first initiative at the
              start of every product. Research-think I find it's something inline with my further
              into expertise. So combine.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gray-200 rounded-full w-full aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {services.map((service, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium hover:border-red-500 hover:text-red-500 transition-colors cursor-pointer"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              the collaboration between designers, project teams, and developers generates a better product!
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-${1498050108023 + index * 10000000}?w=400&h=400&fit=crop`}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer"
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: tool.color }}
                >
                  <span className="text-white text-xs font-bold">
                    {tool.name.charAt(0)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h100v100H0z" fill="none"/%3E%3Cpath d="M50 0L50 100M0 50L100 50" stroke="white" stroke-width="0.5"/%3E%3C/svg%3E")',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Get in touch!</h2>
            <p className="text-gray-400">
              Don't hesitate to contact me for collaboration or a quick conversation before one of us inviting/jogging/at.com
            </p>
          </div>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                name="subject"
                placeholder="Your Subject *"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
                rows={8}
                className="w-full px-6 py-4 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 rounded-md font-medium transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-500 mt-2">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 mt-2">Failed to send message. Please try again.</p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © 2026 - AOOP, www.anoopsdesign.com - All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
              <Twitter className="w-4 h-4 text-black" />
            </a>
            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
              <Linkedin className="w-4 h-4 text-black" />
            </a>
            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
              <Dribbble className="w-4 h-4 text-black" />
            </a>
            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
              <Github className="w-4 h-4 text-black" />
            </a>
            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
              <Mail className="w-4 h-4 text-black" />
            </a>
          </div>
          <div className="text-sm">
            Let's collaborate: <a href="mailto:anoops@gmail.com" className="text-red-500 hover:underline">anoops@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}