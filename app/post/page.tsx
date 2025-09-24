'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ProjectInquiryPage() {
  const [companyName, setCompanyName] = useState('')
  const [contactName, setContactName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [projectType, setProjectType] = useState('')
  const [description, setDescription] = useState('')
  const [budget, setBudget] = useState('')
  const [timeline, setTimeline] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const projectTypes = [
    'Web Development',
    'Mobile App Development', 
    'Cloud Solutions',
    'E-commerce Platform',
    'Custom Software',
    'IT Consulting',
    'Cybersecurity',
    'DevOps & Automation',
    'Digital Transformation',
    'Other'
  ]
  
  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Not sure yet'
  ]
  
  const timelines = [
    'ASAP (Rush job)',
    '1-2 weeks',
    '1-2 months', 
    '3-6 months',
    '6+ months',
    'Flexible'
  ]

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!companyName || !contactName || !email || !projectType || !description) return
    
    setIsSubmitting(true)
    try {
      // In a real app, this would send to your backend/CRM
      console.log('Project inquiry submitted:', {
        companyName, contactName, email, phone, projectType, description, budget, timeline
      })
      alert('Thank you! We\'ll contact you within 24 hours to schedule your free consultation.')
      router.push('/contact')
    } catch (error) {
      alert('Failed to submit inquiry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
          Start Your Project
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tell us about your project and we&apos;ll provide a free consultation and detailed proposal
        </p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <form onSubmit={onSubmit} className="space-y-8 p-8">
          {/* Company & Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input 
                value={companyName} 
                onChange={(e) => setCompanyName(e.target.value)} 
                placeholder="Your Company Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Contact Name <span className="text-red-500">*</span>
              </label>
              <input 
                value={contactName} 
                onChange={(e) => setContactName(e.target.value)} 
                placeholder="Your Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                required 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input 
                type="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="contact@company.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Phone Number
              </label>
              <input 
                type="tel"
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                placeholder="+91 78019 11318"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          {/* Project Type */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-900">
              Project Type <span className="text-red-500">*</span>
            </label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-white"
              required
            >
              <option value="">Select project type</option>
              {projectTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <p className="text-sm text-gray-500">Choose the service that best fits your needs</p>
          </div>

          {/* Project Description */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-900">
              Project Description <span className="text-red-500">*</span>
            </label>
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              placeholder="Describe your project goals, requirements, current challenges, and what success looks like for your business..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none" 
              rows={8} 
              required 
            />
            <p className="text-sm text-gray-500">The more details you provide, the better we can tailor our proposal to your needs.</p>
          </div>

          {/* Budget and Timeline Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Budget */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Budget Range
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="">Select budget range</option>
                {budgetRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
              <p className="text-sm text-gray-500">Help us understand your investment level</p>
            </div>

            {/* Timeline */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Desired Timeline
              </label>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="">Select timeline</option>
                {timelines.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
              <p className="text-sm text-gray-500">When would you like to launch?</p>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="space-y-4 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900">Technologies of Interest</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['React/Next.js', 'Node.js', 'Python', 'AWS', 'Azure', 'Docker', 'Mobile Apps', 'AI/ML', 'Blockchain', 'E-commerce', 'CRM', 'Analytics'].map(tech => (
                <label key={tech} className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-brand-600 focus:ring-brand-500" />
                  <span className="text-sm text-gray-700">{tech}</span>
                </label>
              ))}
            </div>
            <p className="text-sm text-gray-500">Select any technologies you&apos;re interested in (optional)</p>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              Free consultation • No obligation • Response within 24 hours
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="px-8 py-3 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Request Free Consultation'
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Process Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-blue-50 rounded-xl">
          <div className="text-3xl mb-3">�</div>
          <h3 className="font-semibold mb-2">Free Consultation</h3>
          <p className="text-sm text-gray-600">We&apos;ll schedule a call to discuss your needs and goals</p>
        </div>
        <div className="text-center p-6 bg-green-50 rounded-xl">
          <div className="text-3xl mb-3">�</div>
          <h3 className="font-semibold mb-2">Detailed Proposal</h3>
          <p className="text-sm text-gray-600">Receive a comprehensive proposal with timeline and pricing</p>
        </div>
        <div className="text-center p-6 bg-purple-50 rounded-xl">
          <div className="text-3xl mb-3">🚀</div>
          <h3 className="font-semibold mb-2">Project Kickoff</h3>
          <p className="text-sm text-gray-600">Start building your solution with our expert team</p>
        </div>
      </div>
    </div>
  )
}
