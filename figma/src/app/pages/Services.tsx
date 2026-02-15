import { ArrowLeft, CheckCircle, Code, Palette, Search, Users, Smartphone, Globe, Layout, TestTube, Settings, Target, ShoppingBag, Box } from 'lucide-react';
import { Link } from 'react-router';

export default function Services() {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Digital Product Design',
      description: 'End-to-end product design from concept to launch, focusing on creating intuitive and engaging digital experiences.',
      features: ['Product Strategy', 'Design Sprint', 'User Flow Design', 'Product Roadmap']
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'User Experience Design',
      description: 'Creating seamless user experiences through research-driven design decisions and user-centered methodologies.',
      features: ['UX Strategy', 'User Journey Mapping', 'Wireframing', 'UX Consultation']
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'User Interface Design',
      description: 'Crafting beautiful, functional interfaces that enhance usability and create memorable user interactions.',
      features: ['Visual Design', 'UI Components', 'Design Patterns', 'Micro-interactions']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'User Research',
      description: 'Understanding user needs, behaviors, and motivations through comprehensive research methodologies.',
      features: ['User Interviews', 'Surveys', 'Analytics Analysis', 'Persona Development']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Information Architecture',
      description: 'Organizing and structuring content to create intuitive navigation and findability.',
      features: ['Site Mapping', 'Content Strategy', 'Navigation Design', 'Taxonomy Development']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Interaction Design',
      description: 'Designing interactive elements that guide users through meaningful and delightful experiences.',
      features: ['Animation Design', 'Interactive Prototypes', 'Gesture Design', 'Feedback Systems']
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'UI Auditing',
      description: 'Comprehensive evaluation of existing interfaces to identify improvements and optimize user experience.',
      features: ['Heuristic Evaluation', 'Accessibility Audit', 'Performance Review', 'Recommendations']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Brand Design',
      description: 'Creating cohesive brand identities that resonate with your target audience and stand out in the market.',
      features: ['Brand Strategy', 'Logo Design', 'Brand Guidelines', 'Visual Identity']
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: 'Prototyping',
      description: 'Building interactive prototypes to validate ideas and gather feedback before development.',
      features: ['Low-fi Prototypes', 'High-fi Prototypes', 'Interactive Mockups', 'Clickable Demos']
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: 'User Testing',
      description: 'Validating design decisions through real user feedback and usability testing sessions.',
      features: ['Usability Testing', 'A/B Testing', 'Remote Testing', 'Test Analysis']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web UI Design',
      description: 'Designing responsive web interfaces that work seamlessly across all devices and browsers.',
      features: ['Responsive Design', 'Landing Pages', 'Web Applications', 'Dashboard Design']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile UI Design',
      description: 'Creating native and cross-platform mobile experiences optimized for touch interactions.',
      features: ['iOS Design', 'Android Design', 'App Design', 'Mobile-first Design']
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'Shopify Design',
      description: 'Designing custom Shopify stores that drive conversions and enhance the shopping experience.',
      features: ['Theme Design', 'Store Setup', 'Product Pages', 'Checkout Optimization']
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: 'Design System',
      description: 'Building scalable design systems that ensure consistency and accelerate product development.',
      features: ['Component Library', 'Design Tokens', 'Documentation', 'Governance']
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery & Research',
      description: 'Understanding your business goals, target audience, and market landscape through comprehensive research.'
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Defining project scope, creating roadmaps, and establishing design direction aligned with your objectives.'
    },
    {
      number: '03',
      title: 'Design & Prototyping',
      description: 'Crafting wireframes, visual designs, and interactive prototypes to bring concepts to life.'
    },
    {
      number: '04',
      title: 'Testing & Iteration',
      description: 'Validating designs through user testing and refining based on feedback and data insights.'
    },
    {
      number: '05',
      title: 'Delivery & Support',
      description: 'Handing off design assets, documentation, and providing ongoing support for implementation.'
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
            <Link to="/services" className="text-blue-600 font-semibold transition-colors text-sm">
              Services
            </Link>
            <a href="/#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
              Portfolio
            </a>
            <a href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
              About
            </a>
            <a href="/#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services I Offer
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive design solutions tailored to help your business thrive in the digital world. 
              From strategy to execution, I bring 15 years of expertise to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-blue-200 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My Design Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A proven methodology that ensures successful outcomes for every project
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
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
            Let's discuss how my design expertise can help bring your vision to life and drive real business results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/#contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              Get in Touch
            </a>
            <Link 
              to="/" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-all"
            >
              View Portfolio
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
