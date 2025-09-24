export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ready to transform your business with innovative IT solutions? Let&apos;s discuss your project and how we can help you achieve your goals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Request a Free Consultation</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">First Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Last Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  placeholder="+91 78019 11318"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Company</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                placeholder="Your Company Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Service Interested In</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-white">
                <option>Web Development</option>
                <option>Cloud Solutions</option>
                <option>Mobile App Development</option>
                <option>IT Consulting</option>
                <option>Cybersecurity</option>
                <option>DevOps & Automation</option>
                <option>Digital Transformation</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Project Budget</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-white">
                <option>Under $5,000</option>
                <option>$5,000 - $15,000</option>
                <option>$15,000 - $50,000</option>
                <option>$50,000 - $100,000</option>
                <option>$100,000+</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Project Details</label>
              <textarea 
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your project, timeline, and any specific requirements..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full px-6 py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              Schedule Free Consultation
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Note: Email notifications are currently being configured. For immediate assistance, please call +91 78019 11318
            </p>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white">
                  📧
                </div>
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <div className="text-gray-600">info@tasktacklerinfotech.com</div>
                  <div className="text-sm text-gray-500">We&apos;ll respond within 4 hours</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white">
                  🛠️
                </div>
                <div>
                  <div className="font-medium text-gray-900">Support</div>
                  <div className="text-gray-600">support@tasktacklerinfotech.com</div>
                  <div className="text-sm text-gray-500">Technical support & maintenance</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white">
                  �
                </div>
                <div>
                  <div className="font-medium text-gray-900">Phone</div>
                  <div className="text-gray-600">+91 78019 11318</div>
                  <div className="text-sm text-gray-500">Mon-Fri 9AM-6PM IST</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white">
                  📍
                </div>
                <div>
                  <div className="font-medium text-gray-900">Office</div>
                  <div className="text-gray-600">TaskTackler InfoTech</div>
                  <div className="text-gray-600">India</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white">
                  �
                </div>
                <div>
                  <div className="font-medium text-gray-900">Response Time</div>
                  <div className="text-gray-600">Consultations scheduled within 24hrs</div>
                  <div className="text-sm text-gray-500">Emergency support available 24/7</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {[
                { q: 'How do I get started with a project?', a: 'Schedule a free consultation where we\'ll discuss your needs, timeline, and provide a detailed proposal.' },
                { q: 'What is your typical project timeline?', a: 'Project timelines vary based on complexity, typically ranging from 2-12 weeks. We provide detailed timelines in our proposals.' },
                { q: 'Do you provide ongoing support?', a: 'Yes, we offer 24/7 support packages and maintenance services to ensure your systems run smoothly.' },
                { q: 'Can you work with our existing systems?', a: 'Absolutely! We specialize in integrating with existing systems and can provide migration services when needed.' }
              ].map((faq, i) => (
                <div key={i} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                  <div className="font-medium text-gray-900 mb-1">{faq.q}</div>
                  <div className="text-sm text-gray-600">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
