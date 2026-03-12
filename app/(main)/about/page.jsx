"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// --- ANIMATION CONFIGS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function AboutPage() {
  return (
    <main className="w-full bg-white overflow-hidden">
      
      {/* 1. HERO SECTION - High Impact */}
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <Image
          src="/images/acoda-staff.jpg"
          alt="ACoDA Community Engagement"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/60"></div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/30 border border-blue-400/30 text-blue-200 text-sm font-bold uppercase tracking-widest mb-4">
            Established November 2024
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Our Commitment to <br /> Community Transformation
          </h1>
          <p className="text-lg md:text-xl text-blue-100 font-medium">
            Bridging gaps and building futures through female-led development alternatives.
          </p>
        </motion.div>
      </section>

      {/* 2. WHO WE ARE - Narrated Content */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-sm font-bold text-blue-700 uppercase tracking-widest mb-3">Our Identity</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Who We Are
            </h3>
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                The **Agency for Community Development Alternatives (ACoDA)** is a national non-governmental organisation that stands as a beacon for inclusive growth. 
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                As a **female-led organisation**, we are uniquely positioned to address the specific needs of children, women, and community leaders.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-inner relative"
          >
             <div className="absolute -top-4 -left-4 text-6xl text-blue-200 opacity-50">“</div>
             <blockquote className="text-xl italic text-blue-900 font-medium leading-relaxed relative z-10">
               "We leverage the energy of young people and the wisdom of community leaders to facilitate development that is both effective and sustainable."
             </blockquote>
             <div className="mt-8 flex items-center gap-4">
               <div className="w-12 h-1 bg-blue-600"></div>
               <p className="font-bold text-gray-900 uppercase text-sm tracking-widest">The ACoDA Team</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="py-24 bg-blue-900 text-white">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={fadeInUp} className="relative p-10 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-4xl mb-6">👁️</div>
            <h2 className="text-2xl font-bold mb-4 text-blue-300 tracking-wide uppercase">Our Vision</h2>
            <p className="text-blue-50 text-xl leading-relaxed font-light">
              Communities that are empowered to improve their own lives through appropriate and affordable development alternatives.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative p-10 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-4xl mb-6">🎯</div>
            <h2 className="text-2xl font-bold mb-4 text-blue-300 tracking-wide uppercase">Our Mission</h2>
            <p className="text-blue-50 text-xl leading-relaxed font-light">
              To empower women, men and children through comprehensive support including education, health and economic opportunities.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. STRATEGIC OBJECTIVES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Strategic Objectives</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <ObjectiveCard icon="📚" title="Education" text="Mobilizing resources for educational opportunities for vulnerable children." />
            <ObjectiveCard icon="🛡️" title="Protection" text="Ensuring children are safe, healthy and protected within their homes." />
            <ObjectiveCard icon="💧" text="Promoting water, sanitation and hygiene practices and climate action." title="WASH" />
            <ObjectiveCard icon="🌱" title="Livelihoods" text="Supporting community-led livelihood initiatives with sustainable alternatives." />
            <ObjectiveCard icon="🏥" title="SRHR" text="Building capacity on sexual reproductive health and rights across communities." />
          </motion.div>
        </div>
      </section>

      {/* 5. WHERE WE WORK */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Operational Footprint</h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <LocationCard city="Western Urban" detail="Administrative Headquarters" />
            <LocationCard city="Bo District" detail="Tinkonko Chiefdom" />
            <LocationCard city="Moyamba District" detail="Kori Chiefdom" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* ---------- HELPER COMPONENTS ---------- */

function ObjectiveCard({ icon, title, text }) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2 text-gray-900 uppercase tracking-wide">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{text}</p>
    </motion.div>
  );
}

function LocationCard({ city, detail }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="p-8 rounded-2xl border-2 border-gray-50 bg-white hover:border-blue-100 transition shadow-sm"
    >
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <h3 className="font-bold text-xl text-gray-900">{city}</h3>
      <p className="text-blue-600 font-semibold text-sm mt-1">{detail}</p>
    </motion.div>
  );
}