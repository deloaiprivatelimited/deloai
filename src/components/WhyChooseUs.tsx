import React from "react";
import { CheckCircle, Shield, Award, Users, Zap, ThumbsUp } from "lucide-react";

/** WhyChooseUs Component
 * Modern, responsive, animated, Tailwind-powered
 */

const reasons = [
  {
    icon: <Shield className="w-7 h-7 text-white" />,
    title: "Reliable & Secure",
    desc: "We follow industry-grade security, strong coding standards and reliable delivery practices.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: <Award className="w-7 h-7 text-white" />,
    title: "Experienced Team",
    desc: "A highly skilled team with expertise in design, development and DevOps.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Users className="w-7 h-7 text-white" />,
    title: "Client-Centric Approach",
    desc: "Your business goals shape every decision we make in the project lifecycle.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: <Zap className="w-7 h-7 text-white" />,
    title: "Fast Delivery",
    desc: "Agile processes ensure faster builds, iterations and time-to-market.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <ThumbsUp className="w-7 h-7 text-white" />,
    title: "Quality Guaranteed",
    desc: "Strict QA, automated tests and code reviews for reliable, clean results.",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: <CheckCircle className="w-7 h-7 text-white" />,
    title: "End-to-End Support",
    desc: "We stay with you after launch for monitoring, improvement and maintenance.",
    color: "from-rose-500 to-red-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We provide unmatched value through expertise, communication and quality execution.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-default"
          >
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
              {item.icon}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}