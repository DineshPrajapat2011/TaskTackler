export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
          About Task Tackler
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering businesses through innovative IT solutions and digital transformation
        </p>
      </div>

      {/* Story */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2020, Task Tackler emerged from a vision to bridge the gap between businesses 
              and cutting-edge technology solutions. What started as a small team of passionate developers 
              has grown into a comprehensive IT services company trusted by businesses nationwide.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We specialize in custom software development, cloud solutions, cybersecurity, and digital 
              transformation. Our mission is to help organizations leverage technology to achieve their 
              goals, streamline operations, and stay competitive in the digital age.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we&apos;re proud to serve clients from startups to enterprise organizations across various industries.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: '🎯',
              title: 'Innovation',
              description: 'We leverage cutting-edge technologies to deliver innovative solutions that drive business growth.'
            },
            {
              icon: '🤝',
              title: 'Partnership',
              description: 'We work as your trusted technology partner, understanding your business and providing tailored solutions.'
            },
            {
              icon: '🔒',
              title: 'Security',
              description: 'Security and compliance are at the core of everything we build, ensuring your data stays protected.'
            }
          ].map((value, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 -mx-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Leadership Team</h2>
          <p className="text-lg text-gray-600">Experienced professionals leading our technology initiatives</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Alex Rodriguez', role: 'CEO & Founder', avatar: 'AR', expertise: 'Business Strategy & Digital Transformation' },
            { name: 'Sarah Kim', role: 'CTO', avatar: 'SK', expertise: 'Cloud Architecture & DevOps' },
            { name: 'David Chen', role: 'Lead Developer', avatar: 'DC', expertise: 'Full-Stack Development & Security' }
          ].map((member, i) => (
            <div key={i} className="text-center bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                {member.avatar}
              </div>
              <h3 className="font-semibold text-lg text-gray-900">{member.name}</h3>
              <p className="text-brand-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications & Expertise */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">Certifications & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'AWS Certified', icon: '☁️', type: 'Cloud Solutions' },
            { name: 'Microsoft Azure', icon: '🔷', type: 'Cloud Platform' },
            { name: 'ISO 27001', icon: '🔒', type: 'Security Standard' },
            { name: 'Agile Certified', icon: '⚡', type: 'Project Management' }
          ].map((cert, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-sm hover:shadow-lg transition-all">
              <div className="text-3xl mb-2">{cert.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{cert.name}</h3>
              <p className="text-gray-600 text-sm">{cert.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
