'use client'
import Link from 'next/link'
import { useState } from 'react'

export const dynamic = 'force-dynamic'

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const services = [
    {
      id: 1,
      title: 'Custom Web Development',
      category: 'Web Development',
      description: 'Build responsive, modern websites and web applications using cutting-edge technologies like React, Next.js, and Node.js.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Mobile-First'],
      pricing: 'Starting at $2,500',
      duration: '2-4 weeks',
      icon: '🌐'
    },
    {
      id: 2,
      title: 'E-commerce Solutions',
      category: 'Web Development',
      description: 'Complete online store setup with payment integration, inventory management, and custom shopping experiences.',
      features: ['Payment Gateway', 'Inventory System', 'Admin Dashboard', 'Order Management'],
      pricing: 'Starting at $3,500',
      duration: '3-6 weeks',
      icon: '🛒'
    },
    {
      id: 3,
      title: 'Cloud Migration & Setup',
      category: 'Cloud Solutions',
      description: 'Migrate your existing infrastructure to AWS, Azure, or Google Cloud with optimized performance and security.',
      features: ['Server Migration', 'Cost Optimization', 'Security Setup', '24/7 Monitoring'],
      pricing: 'Starting at $1,500',
      duration: '1-3 weeks',
      icon: '☁️'
    },
    {
      id: 4,
      title: 'Mobile App Development',
      category: 'Mobile Development',
      description: 'Native iOS and Android apps or cross-platform solutions using React Native and Flutter.',
      features: ['Cross-Platform', 'Native Performance', 'App Store Deployment', 'Push Notifications'],
      pricing: 'Starting at $4,000',
      duration: '4-8 weeks',
      icon: '📱'
    },
    {
      id: 5,
      title: 'DevOps & Automation',
      category: 'DevOps',
      description: 'Set up CI/CD pipelines, automated deployments, and infrastructure as code for efficient development workflows.',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Docker Containers', 'Kubernetes'],
      pricing: 'Starting at $2,000',
      duration: '2-4 weeks',
      icon: '⚙️'
    },
    {
      id: 6,
      title: 'Cybersecurity Audit',
      category: 'Security',
      description: 'Comprehensive security assessment and penetration testing to identify vulnerabilities and strengthen your systems.',
      features: ['Vulnerability Assessment', 'Penetration Testing', 'Security Report', 'Remediation Plan'],
      pricing: 'Starting at $1,800',
      duration: '1-2 weeks',
      icon: '🔒'
    }
  ]

  const categories = ['All', 'Web Development', 'Cloud Solutions', 'Mobile Development', 'DevOps', 'Security']

  const filteredServices = services.filter(service => 
    selectedCategory === 'All' || service.category === selectedCategory
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
          Our IT Services
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive technology solutions to help your business thrive in the digital age
        </p>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-brand-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-brand-50 hover:text-brand-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="text-center mt-4 pt-4 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} available
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredServices.map((service) => (
          <div 
            key={service.id} 
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-lg transition-all duration-200"
          >
            <div className="space-y-4">
              {/* Service Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{service.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-brand-600 transition-colors">
                      {service.title}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-100 text-brand-800 mt-1">
                      {service.category}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-brand-600">{service.pricing}</div>
                  <div className="text-sm text-gray-500">{service.duration}</div>
                </div>
              </div>

              {/* Service Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 text-sm">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-brand-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="flex-1 text-center px-4 py-2 bg-brand-600 text-white font-medium rounded-xl hover:bg-brand-700 transition-colors"
                >
                  Get Quote
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 text-center px-4 py-2 border border-brand-600 text-brand-600 font-medium rounded-xl hover:bg-brand-50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Services CTA */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Need Something Custom?</h2>
        <p className="text-lg opacity-90 mb-6">
          Don&apos;t see exactly what you&apos;re looking for? We specialize in custom solutions tailored to your unique requirements.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-3 bg-white text-brand-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
        >
          Discuss Your Project
        </Link>
      </div>
    </div>
  )
}
