import { ArrowLeft, Calendar, Users, Target, Award, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router';

export default function ProjectDetail() {
  const { projectSlug } = useParams();

  // Project data - in a real app, this would come from an API or database
  const projectData: { [key: string]: any } = {
    javelin: {
      title: 'Javelin - Project Management Platform',
      subtitle: 'Revolutionizing Team Collaboration',
      category: 'SaaS Product Design',
      year: '2025',
      client: 'Javelin Technologies Inc.',
      duration: '6 months',
      role: 'Lead Product Designer',
      team: ['Product Designer', 'UX Researcher', '2 Developers', 'Product Manager'],
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      
      overview: 'Javelin is a next-generation project management platform designed to streamline team collaboration and boost productivity. The goal was to create an intuitive, powerful tool that teams of all sizes could adopt without extensive training.',
      
      challenge: {
        title: 'The Challenge',
        description: 'Traditional project management tools are often cluttered, complicated, and require extensive onboarding. Teams waste valuable time learning the software instead of using it to manage their work. Our challenge was to design a platform that felt familiar yet powerful, simple yet comprehensive.',
        points: [
          'High learning curve of existing solutions deterring adoption',
          'Information overload causing decision fatigue',
          'Poor mobile experience limiting remote team collaboration',
          'Lack of real-time collaboration features',
          'Complex pricing structures confusing users'
        ]
      },
      
      solution: {
        title: 'The Solution',
        description: 'We designed Javelin with a "progressive disclosure" approach - revealing features as users need them rather than overwhelming them upfront. The interface prioritizes clarity, with smart defaults and contextual help.',
        points: [
          'Clean, minimal interface focusing on essential features',
          'Intelligent task prioritization with AI assistance',
          'Real-time collaboration with live cursors and comments',
          'Mobile-first responsive design for on-the-go access',
          'Transparent, flexible pricing with free tier'
        ]
      },
      
      process: [
        {
          phase: 'Discovery & Research',
          duration: '4 weeks',
          activities: [
            'Conducted 25+ user interviews with project managers and team leads',
            'Analyzed competitor products (Asana, Monday, Trello, ClickUp)',
            'Created user personas and journey maps',
            'Identified pain points and opportunities'
          ],
          deliverables: ['Research Report', 'User Personas', 'Journey Maps', 'Feature Priority Matrix']
        },
        {
          phase: 'Information Architecture',
          duration: '2 weeks',
          activities: [
            'Developed site map and navigation structure',
            'Created user flows for key tasks',
            'Organized features into logical groupings',
            'Designed data hierarchy and relationships'
          ],
          deliverables: ['Site Map', 'User Flows', 'IA Documentation', 'Navigation Prototype']
        },
        {
          phase: 'Wireframing & Prototyping',
          duration: '6 weeks',
          activities: [
            'Sketched initial concepts and layouts',
            'Created low-fidelity wireframes',
            'Built interactive prototypes in Figma',
            'Conducted usability testing with 15 participants'
          ],
          deliverables: ['Wireframes', 'Interactive Prototypes', 'Usability Test Reports', 'Iteration Plans']
        },
        {
          phase: 'Visual Design',
          duration: '6 weeks',
          activities: [
            'Developed design system and component library',
            'Created high-fidelity mockups for all screens',
            'Designed responsive layouts for mobile and tablet',
            'Crafted micro-interactions and animations'
          ],
          deliverables: ['Design System', 'UI Kit', 'High-Fidelity Mockups', 'Animation Specifications']
        },
        {
          phase: 'Testing & Refinement',
          duration: '4 weeks',
          activities: [
            'Conducted A/B testing on key features',
            'Performed accessibility audits (WCAG 2.1 AA)',
            'Gathered feedback from beta users',
            'Iterated based on user feedback'
          ],
          deliverables: ['Test Results', 'Accessibility Report', 'Final Designs', 'Developer Handoff']
        }
      ],
      
      keyFeatures: [
        {
          title: 'Smart Dashboard',
          description: 'Personalized overview showing tasks, deadlines, and team activity at a glance',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
          highlights: ['Customizable widgets', 'AI-powered insights', 'Real-time updates']
        },
        {
          title: 'Kanban Boards',
          description: 'Flexible board views with drag-and-drop functionality and custom workflows',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
          highlights: ['Multiple view options', 'Custom fields', 'Automation rules']
        },
        {
          title: 'Team Collaboration',
          description: 'Real-time commenting, file sharing, and @mentions to keep everyone in sync',
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
          highlights: ['Live collaboration', 'Rich text comments', 'File attachments']
        },
        {
          title: 'Time Tracking',
          description: 'Built-in time tracking with detailed reports and productivity analytics',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
          highlights: ['Automatic tracking', 'Detailed reports', 'Budget monitoring']
        },
        {
          title: 'Mobile App',
          description: 'Full-featured mobile apps for iOS and Android with offline support',
          image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
          highlights: ['Native experience', 'Offline mode', 'Push notifications']
        },
        {
          title: 'Integrations',
          description: 'Seamless integration with popular tools like Slack, Google Drive, and GitHub',
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
          highlights: ['50+ integrations', 'API access', 'Webhooks']
        }
      ],
      
      designSystem: {
        colors: [
          { name: 'Primary Blue', hex: '#2563EB', usage: 'Primary actions, links' },
          { name: 'Success Green', hex: '#10B981', usage: 'Completed tasks, success states' },
          { name: 'Warning Orange', hex: '#F59E0B', usage: 'Warnings, pending items' },
          { name: 'Danger Red', hex: '#EF4444', usage: 'Errors, urgent items' },
          { name: 'Neutral Gray', hex: '#6B7280', usage: 'Text, borders, backgrounds' }
        ],
        typography: [
          { name: 'Headings', font: 'Inter Bold', usage: 'Page titles, section headers' },
          { name: 'Body', font: 'Inter Regular', usage: 'Body text, descriptions' },
          { name: 'UI Elements', font: 'Inter Medium', usage: 'Buttons, labels, navigation' }
        ]
      },
      
      results: {
        title: 'Results & Impact',
        description: 'The launch of Javelin exceeded all expectations, with impressive metrics across user acquisition, engagement, and satisfaction.',
        metrics: [
          { value: '10,000+', label: 'Active Users', sublabel: 'in first 3 months' },
          { value: '92%', label: 'User Satisfaction', sublabel: 'based on surveys' },
          { value: '45%', label: 'Faster Onboarding', sublabel: 'vs. competitors' },
          { value: '3.5x', label: 'Task Completion', sublabel: 'rate increase' },
          { value: '85%', label: 'Mobile Usage', sublabel: 'weekly active users' },
          { value: '4.8/5', label: 'App Store Rating', sublabel: 'across platforms' }
        ],
        achievements: [
          'Featured on Product Hunt - #1 Product of the Day',
          'Winner of "Best UX Design" at SaaS Awards 2025',
          'Covered by TechCrunch and The Verge',
          'Secured $5M Series A funding post-launch',
          'Acquired by major enterprise clients (Fortune 500)'
        ]
      },
      
      testimonial: {
        quote: 'Working with Aoop was transformative for our product. He didn\'t just design an interface - he crafted an experience that our users genuinely love. The attention to detail, user-centric approach, and ability to balance aesthetics with functionality is unmatched.',
        author: 'Jennifer Martinez',
        role: 'CEO, Javelin Technologies Inc.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'
      },
      
      learnings: [
        {
          title: 'Less is More',
          description: 'Users consistently preferred simpler interfaces with fewer options. We removed 40% of planned features and saw higher engagement.'
        },
        {
          title: 'Mobile Matters',
          description: 'Over 60% of users access the platform on mobile. Designing mobile-first was crucial to success.'
        },
        {
          title: 'Onboarding is Critical',
          description: 'Users who completed the interactive tutorial were 3x more likely to become paying customers.'
        },
        {
          title: 'Accessibility = Better UX',
          description: 'Designing for accessibility improved usability for everyone, not just users with disabilities.'
        }
      ],
      
      relatedProjects: [
        {
          slug: 'taskflow',
          title: 'TaskFlow Redesign',
          category: 'SaaS',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
        },
        {
          slug: 'financehub',
          title: 'FinanceHub Dashboard',
          category: 'FinTech',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
        },
        {
          slug: 'wellnesspro',
          title: 'WellnessPro App',
          category: 'Healthcare',
          image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop'
        }
      ]
    }
  };

  const project = projectData[projectSlug || 'javelin'] || projectData.javelin;

  return (
    <div className="min-h-screen bg-white">
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
            <a href="/#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <span className="text-gray-500">{project.year}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                {project.title}
              </h1>
              <p className="text-2xl text-gray-600 mb-8">
                {project.subtitle}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.overview}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <Calendar className="w-8 h-8 text-blue-600 mb-3" />
                <div className="text-sm text-gray-500 mb-1">Duration</div>
                <div className="font-bold text-gray-900">{project.duration}</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <Users className="w-8 h-8 text-blue-600 mb-3" />
                <div className="text-sm text-gray-500 mb-1">Team</div>
                <div className="font-bold text-gray-900">{project.team.length} members</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <Target className="w-8 h-8 text-blue-600 mb-3" />
                <div className="text-sm text-gray-500 mb-1">Role</div>
                <div className="font-bold text-gray-900">{project.role}</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <Award className="w-8 h-8 text-blue-600 mb-3" />
                <div className="text-sm text-gray-500 mb-1">Client</div>
                <div className="font-bold text-gray-900 text-sm">{project.client}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src={project.heroImage} alt={project.title} className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {project.challenge.title}
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {project.challenge.description}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {project.challenge.points.map((point: string, index: number) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {project.solution.title}
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {project.solution.description}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {project.solution.points.map((point: string, index: number) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring quality and user-centricity at every stage
            </p>
          </div>
          <div className="space-y-12">
            {project.process.map((phase: any, index: number) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 md:p-12">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {phase.phase}
                    </h3>
                    <p className="text-gray-600">{phase.duration}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Activities</h4>
                    <ul className="space-y-3">
                      {phase.activities.map((activity: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Deliverables</h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((deliverable: string, i: number) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful capabilities designed to enhance productivity and collaboration
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.keyFeatures.map((feature: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight: string, i: number) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Design System
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive system ensuring consistency and scalability
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Colors */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Color Palette</h3>
              <div className="space-y-4">
                {project.designSystem.colors.map((color: any, index: number) => (
                  <div key={index} className="flex items-center gap-4">
                    <div
                      className="w-16 h-16 rounded-xl shadow-md"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div>
                      <div className="font-bold text-gray-900">{color.name}</div>
                      <div className="text-sm text-gray-500">{color.hex}</div>
                      <div className="text-sm text-gray-600">{color.usage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Typography</h3>
              <div className="space-y-6">
                {project.designSystem.typography.map((type: any, index: number) => (
                  <div key={index} className="bg-white p-6 rounded-xl">
                    <div className="font-bold text-gray-900 mb-2">{type.name}</div>
                    <div className="text-sm text-gray-500 mb-3">{type.font}</div>
                    <div className="text-sm text-gray-600">{type.usage}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {project.results.title}
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {project.results.description}
            </p>
          </div>
          
          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {project.results.metrics.map((metric: any, index: number) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center border border-white/20">
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-sm font-semibold mb-1">{metric.label}</div>
                <div className="text-xs text-blue-100">{metric.sublabel}</div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <h3 className="text-3xl font-bold mb-8 text-center">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.results.achievements.map((achievement: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <Award className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p className="text-lg">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 md:p-12">
            <div className="flex items-start gap-6 mb-8">
              <img
                src={project.testimonial.image}
                alt={project.testimonial.author}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <div className="font-bold text-gray-900 text-lg">{project.testimonial.author}</div>
                <div className="text-gray-600">{project.testimonial.role}</div>
              </div>
            </div>
            <blockquote className="text-2xl text-gray-700 leading-relaxed italic">
              "{project.testimonial.quote}"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Key Learnings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights gained throughout the project journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {project.learnings.map((learning: any, index: number) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {learning.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {learning.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Related Projects
            </h2>
            <p className="text-xl text-gray-600">
              Explore more of my work
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {project.relatedProjects.map((related: any, index: number) => (
              <Link
                key={index}
                to={`/portfolio/${related.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{related.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                    {related.title}
                    <ArrowRight className="w-5 h-5" />
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Ready to bring your vision to life? Let's discuss your project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/#contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              Start a Project
            </a>
            <Link 
              to="/portfolio" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-all"
            >
              View All Projects
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
