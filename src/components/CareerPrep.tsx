import { Bot, Shield, Sparkles } from 'lucide-react'
import cp from '../assets/cp.svg'

export default function AIChatBot() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mx-[10%]">
<div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-start">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-green-400 text-black text-sm font-medium px-4 py-2 rounded-full">
                Latest Release
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl  text-gray-900 leading-tight">
               Upgrade Your Tomorrow
                <Sparkles className="inline-block ml-2 mb-2" size={32} strokeWidth={2} />
              </h1>
              <p className="text-base text-gray-600 leading-relaxed">
                            CareerPrep is a comprehensive career-readiness platform engineered for engineering students and academic institutions. It integrates structured learning, interview preparation, profile optimization, and placement strategy into a unified ecosystem.
    </p>
            </div>

            <div className="space-y-8 pt-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6">
                    <Bot className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
    </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">Career-ready from day one
</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Tools that help learners build skills, portfolios, and confidence.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6">
                    <Shield className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">Your future, your platform</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                 Practice, improve, and showcase your abilities in one place.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6">
                    <Sparkles className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">Enable results at scale</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                  Colleges and training partners get dashboards, insights, and tools to support every learner.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <img src={cp} alt="Chat Preview" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
