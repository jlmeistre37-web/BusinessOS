// App.jsx
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-100 bg-gray-900">

      {/* Header */}
      <header className="fixed w-full bg-gray-900/90 backdrop-blur-md shadow-md z-10 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
          <h1 className="text-2xl font-bold text-blue-500">BusinessOS</h1>
          <nav className="space-x-6">
            <a href="#features" className="hover:text-blue-400 transition-colors duration-300">Features</a>
            <a href="#pricing" className="hover:text-blue-400 transition-colors duration-300">Pricing</a>
            <a href="#testimonials" className="hover:text-blue-400 transition-colors duration-300">Testimonials</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-40 px-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
        <h2 className="text-6xl md:text-7xl font-extrabold text-white mb-6 animate-fadeIn">
          Simplify Your Business
        </h2>
        <p className="text-gray-100 text-lg md:text-xl max-w-2xl mb-10 animate-fadeIn delay-200">
          Manage your team, projects, and clients all in one place. Streamline your operations and grow faster with BusinessOS.
        </p>
        <div className="flex flex-col md:flex-row gap-4 animate-fadeIn delay-400">
          <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-gray-100 transition transform">
            Get Started
          </button>
          <button className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-gray-700 transition transform">
            Learn More
          </button>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 px-6 bg-gray-900">
        <h3 className="text-3xl font-bold text-center text-blue-500 mb-12">Trusted By</h3>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-12">
          <div className="bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition transform">
            <span className="text-white font-bold">TechCo</span>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition transform">
            <span className="text-white font-bold">StartSmart</span>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition transform">
            <span className="text-white font-bold">BuildCorp</span>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition transform">
            <span className="text-white font-bold">CreativeHub</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-gray-800">
        <h3 className="text-4xl font-bold text-center text-blue-500 mb-16">Features</h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            { icon: "📊", title: "Analytics", desc: "Get real-time insights into your business performance with beautiful dashboards." },
            { icon: "🤝", title: "Collaboration", desc: "Work together seamlessly with your team and clients all in one platform." },
            { icon: "⚡", title: "Automation", desc: "Automate repetitive tasks and focus on what really matters for your business growth." },
          ].map((f, i) => (
            <div key={i} className="bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-500">
              <div className="text-blue-400 mb-4 text-4xl">{f.icon}</div>
              <h4 className="text-2xl font-bold mb-2">{f.title}</h4>
              <p className="text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-gray-900">
        <h3 className="text-4xl font-bold text-center text-blue-500 mb-16">What Our Clients Say</h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {[
            { msg: "BusinessOS helped us organize our entire workflow. Our team productivity skyrocketed!", name: "Sarah L., CEO of TechCo" },
            { msg: "The analytics dashboard is a game-changer. We now make smarter business decisions every day.", name: "Mike R., Founder of StartSmart" },
          ].map((t, i) => (
            <div key={i} className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-500">
              <p className="text-gray-300 mb-4">"{t.msg}"</p>
              <p className="text-blue-400 font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-gray-800">
        <h3 className="text-4xl font-bold text-center text-blue-500 mb-16">Pricing Plans</h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            { name: "Starter", price: "$19/month", features: ["Basic Analytics", "Team Collaboration", "Limited Automations"], highlight: false },
            { name: "Pro", price: "$49/month", features: ["Advanced Analytics", "Team Collaboration", "Full Automations"], highlight: true },
            { name: "Enterprise", price: "Custom Pricing", features: ["All Features", "Dedicated Support", "Custom Integrations"], highlight: false },
          ].map((p, i) => (
            <div key={i} className={`bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-500 flex flex-col ${p.highlight ? "border-2 border-blue-500" : ""}`}>
              <h4 className="text-2xl font-bold mb-2">{p.name}</h4>
              <p className="text-gray-300 mb-4">{p.price}</p>
              <ul className="text-gray-300 mb-6 space-y-2">
                {p.features.map((f, idx) => <li key={idx}>✅ {f}</li>)}
              </ul>
              <button className="mt-auto px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition transform hover:scale-105">
                {p.highlight ? "Choose Pro" : p.name === "Enterprise" ? "Contact Us" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-900">
        <h3 className="text-4xl font-bold text-center text-blue-500 mb-16">Contact Us</h3>
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:border-blue-500" />
            <input type="email" placeholder="Email" className="p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:border-blue-500" />
            <textarea placeholder="Message" className="p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:border-blue-500" rows={5}></textarea>
            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 p-8 text-center">
        &copy; {new Date().getFullYear()} BusinessOS. All rights reserved.
      </footer>

    </div>
  );
}