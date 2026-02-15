import { ArrowLeft, ExternalLink, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Design', 'Mobile App', 'Product Design', 'Branding', 'E-commerce'];

  const projects = [
    {
      id: 1,
      title: 'FinTech Dashboard',
      category: 'Web Design',
      description: 'Modern financial analytics dashboard with real-time data visualization',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['UI/UX', 'Dashboard', 'Analytics'],
      year: '2025',
      client: 'FinanceHub Inc.',
      slug: 'financehub'
    },
    {
      id: 2,
      title: 'Health & Wellness App',
      category: 'Mobile App',
      description: 'Comprehensive health tracking mobile application with AI-powered insights',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['Mobile', 'Healthcare', 'AI'],
      year: '2025',
      client: 'WellnessPro',
      slug: 'wellnesspro'
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      category: 'E-commerce',
      description: 'Luxury fashion e-commerce platform with immersive shopping experience',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['Shopify', 'E-commerce', 'Fashion'],
      year: '2024',
      client: 'LuxeFashion',
      slug: 'luxefashion'
    },
    {
      id: 4,
      title: 'Javelin Project Manager',
      category: 'Product Design',
      description: 'Complete redesign of project management tool focusing on simplicity',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['SaaS', 'Redesign', 'UX'],
      year: '2024',
      client: 'Javelin Technologies',
      slug: 'javelin'
    },
    {
      id: 5,
      title: 'TechStart Branding',
      category: 'Branding',
      description: 'Complete brand identity for innovative tech startup',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
      tags: ['Branding', 'Identity', 'Startup'],
      year: '2024',
      client: 'TechStart Labs'
    },
    {
      id: 6,
      title: 'Banking Mobile App',
      category: 'Mobile App',
      description: 'Secure and user-friendly mobile banking application',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      tags: ['Mobile', 'Banking', 'Security'],
      year: '2024',
      client: 'SecureBank'
    },
    {
      id: 7,
      title: 'Real Estate Portal',
      category: 'Web Design',
      description: 'Property listing platform with advanced search and filters',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      tags: ['Web', 'Real Estate', 'Search'],
      year: '2024',
      client: 'PropertyHub'
    },
    {
      id: 8,
      title: 'Food Delivery App',
      category: 'Mobile App',
      description: 'Intuitive food ordering app with real-time tracking',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
      tags: ['Mobile', 'Food', 'Delivery'],
      year: '2023',
      client: 'QuickBite'
    },
    {
      id: 9,
      title: 'Corporate Website',
      category: 'Web Design',
      description: 'Modern corporate website for consulting firm',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      tags: ['Corporate', 'Web', 'Business'],
      year: '2023',
      client: 'ConsultPro'
    },
    {
      id: 10,
      title: 'Fitness Tracker',
      category: 'Product Design',
      description: 'Comprehensive fitness tracking and workout planning platform',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
      tags: ['Fitness', 'Tracking', 'Health'],
      year: '2023',
      client: 'FitLife'
    },
    {
      id: 11,
      title: 'Jewelry Store',
      category: 'E-commerce',
      description: 'Elegant e-commerce platform for luxury jewelry brand',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
      tags: ['Shopify', 'Luxury', 'Jewelry'],
      year: '2023',
      client: 'DiamondLux'
    },
    {
      id: 12,
      title: 'Educational Platform',
      category: 'Web Design',
      description: 'Online learning platform with interactive course content',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      tags: ['Education', 'E-learning', 'Web'],
      year: '2023',
      client: 'LearnHub'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '15', label: 'Years Experience' },
    { number: '25+', label: 'Awards Won' }
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
            <Link to="/portfolio" className="text-blue-600 font-semibold transition-colors text-sm">
              Portfolio
            </Link>
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Portfolio
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A curated selection of projects showcasing 15 years of design excellence. 
              Each project represents a unique challenge and creative solution.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:shadow-md border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={project.slug ? `/portfolio/${project.slug}` : '#'}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                      <div className="flex-1 bg-white text-gray-900 py-2 rounded-lg font-medium flex items-center justify-center gap-2">
                        <Eye className="w-4 h-4" />
                        View
                      </div>
                      <div className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Details
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-900">
                      {project.year}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500">{project.client}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Like What You See?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's collaborate on your next project and create something extraordinary together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/#contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              Start a Project
            </a>
            <Link 
              to="/services" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-all"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              What clients say about working with me
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO, FinanceHub Inc.',
                text: 'Aoop transformed our vision into a stunning product. His attention to detail and user-centric approach exceeded our expectations.',
                rating: 5
              },
              {
                name: 'Michael Chen',
                role: 'Product Manager, TechStart Labs',
                text: 'Working with Aoop was a game-changer for our startup. He delivered a brand identity that perfectly captures our innovative spirit.',
                rating: 5
              },
              {
                name: 'Emily Rodriguez',
                role: 'Director, LuxeFashion',
                text: 'The e-commerce platform Aoop designed has significantly improved our conversion rates. Truly exceptional work!',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Heart key={i} className="w-5 h-5 fill-red-500 text-red-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
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