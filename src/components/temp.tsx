

import { ArrowRight } from 'lucide-react'
import cp from '../assets/cp.png'

export default function CareerPrepSection() {
  return (
    <section className="bg-[#F9F5F2] h-screen flex items-center py-10 px-6">
      <div className="max-w-7xl px-6 lg:px-12 mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Right (now swapped to left) */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                Latest Release
              </p>
              <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                CareerPrep: Professional Growth Redefined
              </h1>
            </div>

            <p className="text-base text-gray-700 leading-relaxed">
              CareerPrep is a comprehensive career-readiness platform engineered for engineering students and academic institutions. It integrates structured learning, interview preparation, profile optimization, and placement strategy into a unified ecosystem.
            </p>

            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-0.5">✓</span>
                <span>Structured curriculum designed by industry experts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-0.5">✓</span>
                <span>Real-world interview practice and feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-0.5">✓</span>
                <span>Scalable for individual and institutional adoption</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore CareerPrep
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Left (now swapped to right) */}
          <div className="relative flex justify-center">
            <div className="h-[90vh] w-auto rounded-2xl overflow-hidden shadow-lg">
              <img
                src={cp}
                alt="CareerPrep platform interface"
                className="h-full w-auto object-contain mx-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
