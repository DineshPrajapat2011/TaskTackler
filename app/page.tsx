import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100 -mx-4 px-4 py-20 sm:py-32">
        <div className="absolute inset-0 bg-gray-50 opacity-20"></div>
        <div className="relative text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-100 text-brand-800 text-sm font-medium">
            💼 Professional IT Solutions Since 2020
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
            Task Tackler
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted IT partner delivering innovative technology solutions to help your business grow, 
            optimize operations, and stay ahead in the digital world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-brand-600 text-white font-semibold text-lg hover:bg-brand-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
              Get Free Consultation
            </Link>
            <Link href="/browse" className="px-8 py-4 rounded-xl border-2 border-brand-600 text-brand-600 font-semibold text-lg hover:bg-brand-50 transform hover:scale-105 transition-all">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="text-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: '150+', label: 'Projects Delivered' },
            { number: '50+', label: 'Happy Clients' },
            { number: '5+', label: 'Years Experience' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-brand-600">{stat.number}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our IT Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive technology solutions tailored to your business needs</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Web Development', icon: '�', desc: 'Custom websites, web apps, e-commerce solutions', details: 'React, Node.js, Python' },
            { name: 'Cloud Solutions', icon: '☁️', desc: 'AWS, Azure, Google Cloud migration & management', details: 'Migration & DevOps' },
            { name: 'Mobile Apps', icon: '📱', desc: 'iOS and Android native & cross-platform apps', details: 'React Native, Flutter' },
            { name: 'IT Consulting', icon: '�', desc: 'Technology strategy, digital transformation', details: 'Strategic Planning' },
            { name: 'Cybersecurity', icon: '�', desc: 'Security audits, penetration testing, compliance', details: 'Protection & Compliance' },
            { name: 'DevOps & Automation', icon: '⚙️', desc: 'CI/CD pipelines, infrastructure automation', details: 'Docker, Kubernetes' }
          ].map((service) => (
            <div key={service.name} className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-brand-300 hover:shadow-lg transition-all cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="text-3xl group-hover:scale-110 transition-transform">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 group-hover:text-brand-600 transition-colors">{service.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{service.desc}</p>
                  <p className="text-xs text-brand-600 font-medium mt-2">{service.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 -mx-4 px-4 py-16 rounded-3xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why Choose Task Tackler?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">We deliver results that drive your business forward</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Expert Team', desc: 'Certified professionals with deep industry experience', icon: '�' },
            { step: '02', title: 'Proven Process', desc: 'Agile methodology ensuring on-time, quality delivery', icon: '⚡' },
            { step: '03', title: 'Ongoing Support', desc: '24/7 support and maintenance for all our solutions', icon: '�️' }
          ].map((item) => (
            <div key={item.step} className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <div className="text-sm font-bold text-brand-600">ADVANTAGE {item.step}</div>
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Technologies We Use</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Cutting-edge tools and frameworks for modern solutions</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes',
            'MongoDB', 'PostgreSQL', 'TypeScript', 'Next.js', 'Azure', 'Flutter'
          ].map((tech) => (
            <div key={tech} className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition-all">
              <div className="font-medium text-gray-800">{tech}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-brand-600 to-brand-700 -mx-4 px-4 py-16 rounded-3xl text-white">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90">Let&apos;s discuss how our IT solutions can help you achieve your goals</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-white text-brand-600 font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all">
              Schedule Consultation
            </Link>
            <Link href="/browse" className="px-8 py-4 rounded-xl border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-brand-600 transform hover:scale-105 transition-all">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
