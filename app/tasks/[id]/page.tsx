import { notFound } from 'next/navigation'
import { getTaskById } from '@/lib/tasksStore'
import Link from 'next/link'

export default function TaskDetails({ params }: { params: { id: string } }) {
  const task = getTaskById(params.id)
  if (!task) return notFound()
  
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500">
        <Link href="/browse" className="hover:text-brand-600 transition-colors">Browse Tasks</Link>
        <span>›</span>
        <span>Task Details</span>
      </nav>

      {/* Task Header */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                Open
              </span>
              <span className="text-sm text-gray-500">
                Posted {new Date(task.createdAt).toLocaleDateString()}
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">{task.title}</h1>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Est. 1-3 days</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Remote</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>Fixed Price</span>
              </div>
            </div>
          </div>

          {/* Budget Card */}
          <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-6 text-center lg:min-w-[200px]">
            <div className="text-sm text-brand-600 font-medium mb-1">Project Budget</div>
            <div className="text-3xl font-bold text-brand-700">${task.budget}</div>
            <div className="text-sm text-brand-600 mt-2">Fixed Price</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Project Description */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Description</h2>
            <div className="prose prose-gray max-w-none">
              <p className="whitespace-pre-wrap leading-relaxed text-gray-700">{task.description}</p>
            </div>
          </div>

          {/* Skills Required */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills Required</h2>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'React', 'Node.js', 'UI/UX Design'].map(skill => (
                <span key={skill} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-100 text-brand-800">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Proposals Section */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Proposals (3)</h2>
              <button className="text-sm text-brand-600 hover:text-brand-700 font-medium">
                Sort by: Best Match
              </button>
            </div>
            
            {/* Sample Proposals */}
            {[1, 2, 3].map(i => (
              <div key={i} className="border-b border-gray-200 last:border-b-0 py-6 first:pt-0 last:pb-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {String.fromCharCode(65 + i - 1)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">Freelancer {i}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            ⭐ 4.9 (127 reviews)
                          </span>
                          <span>•</span>
                          <span>95% Job Success</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-lg">${task.budget - (i * 50)}</div>
                        <div className="text-sm text-gray-600">in 2-3 days</div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      I&apos;m excited to work on your project! With {3 + i} years of experience in web development...
                    </p>
                    <div className="flex items-center gap-3">
                      <button className="px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors">
                        View Proposal
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Action Card */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Interested in this task?</h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 transition-colors">
                Submit Proposal
              </button>
              <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                Save Task
              </button>
              <button className="w-full px-4 py-3 text-gray-600 hover:text-gray-800 transition-colors text-sm">
                Report Task
              </button>
            </div>
          </div>

          {/* Client Info */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-4">About the Client</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-gray-600">⭐ 4.8 (23 reviews)</div>
                </div>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <div>📍 United States</div>
                <div>⏰ 2:30 PM local time</div>
                <div>📊 $5,240 total spent</div>
                <div>✅ Payment verified</div>
              </div>
            </div>
          </div>

          {/* Similar Tasks */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Similar Tasks</h3>
            <div className="space-y-3">
              {[1, 2].map(i => (
                <Link key={i} href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-sm mb-1">Build a mobile app for...</div>
                  <div className="text-xs text-gray-600">$800 • Fixed Price</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
