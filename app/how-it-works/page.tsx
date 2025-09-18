import Link from 'next/link'

export default function SolutionsPage() {
  return (
    <div className="space-y-20">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
          IT Solutions
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive technology solutions designed to solve your business challenges and drive growth
        </p>
      </div>

      {/* Solutions by Industry */}
      <section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Solutions by Industry</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Tailored IT solutions for your specific industry needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              industry: 'Healthcare',
              icon: '🏥',
              solutions: ['HIPAA-compliant systems', 'Patient management', 'Telemedicine platforms', 'Data security'],
              description: 'Secure, compliant technology solutions for healthcare providers'
            },
            {
              industry: 'E-commerce',
              icon: '🛒',
              solutions: ['Online stores', 'Payment processing', 'Inventory management', 'Customer analytics'],
              description: 'Complete e-commerce platforms to grow your online business'
            },
            {
              industry: 'Finance',
              icon: '💰',
              solutions: ['Financial software', 'Banking systems', 'Compliance tools', 'Risk management'],
              description: 'Secure financial technology solutions with regulatory compliance'
            },
            {
              industry: 'Education',
              icon: '🎓',
              solutions: ['Learning management', 'Student portals', 'Online courses', 'Grade tracking'],
              description: 'Educational technology to enhance learning experiences'
            },
            {
              industry: 'Manufacturing',
              icon: '🏭',
              solutions: ['IoT integration', 'Process automation', 'Quality control', 'Supply chain'],
              description: 'Smart manufacturing solutions for Industry 4.0'
            },
            {
              industry: 'Real Estate',
              icon: '🏢',
              solutions: ['Property management', 'CRM systems', 'Virtual tours', 'Lead tracking'],
              description: 'Technology solutions to streamline real estate operations'
            }
          ].map((item) => (
            <div key={item.industry} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-lg transition-all">
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{item.industry}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <div className="space-y-2">
                  {item.solutions.map((solution, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-brand-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {solution}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solution Categories */}
      <section className="bg-gray-50 -mx-4 px-4 py-16 rounded-3xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Solution Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">From strategy to implementation, we provide end-to-end solutions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              category: 'Digital Transformation',
              icon: '🚀',
              description: 'Modernize your business processes with cutting-edge technology',
              features: ['Legacy system migration', 'Process automation', 'Digital workflows', 'Change management']
            },
            {
              category: 'Cloud Solutions',
              icon: '☁️',
              description: 'Scalable, secure cloud infrastructure for your business',
              features: ['Cloud migration', 'Multi-cloud strategy', 'Cost optimization', 'Disaster recovery']
            },
            {
              category: 'Custom Software',
              icon: '💻',
              description: 'Bespoke applications tailored to your unique requirements',
              features: ['Web applications', 'Mobile apps', 'API development', 'Integration services']
            },
            {
              category: 'Cybersecurity',
              icon: '🔒',
              description: 'Comprehensive security solutions to protect your business',
              features: ['Security audits', 'Threat monitoring', 'Compliance consulting', 'Incident response']
            }
          ].map((item) => (
            <div key={item.category} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-brand-300 hover:shadow-lg transition-all">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.category}</h3>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {item.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-brand-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Process */}
      <section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Solution Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">A proven methodology to deliver successful IT solutions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Discovery', desc: 'Understand your business needs and challenges', icon: '🔍' },
            { step: '02', title: 'Strategy', desc: 'Design the optimal solution architecture', icon: '📋' },
            { step: '03', title: 'Implementation', desc: 'Build and deploy your custom solution', icon: '🛠️' },
            { step: '04', title: 'Support', desc: 'Ongoing maintenance and optimization', icon: '🤝' }
          ].map((item) => (
            <div key={item.step} className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <div className="text-sm font-bold text-brand-600">PHASE {item.step}</div>
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-brand-600 to-brand-700 -mx-4 px-4 py-16 rounded-3xl text-white">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90">Let&apos;s discuss how our solutions can address your specific challenges</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-white text-brand-600 font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all">
              Schedule Consultation
            </Link>
            <Link href="/browse" className="px-8 py-4 rounded-xl border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-brand-600 transform hover:scale-105 transition-all">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
