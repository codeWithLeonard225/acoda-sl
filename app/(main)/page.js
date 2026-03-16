"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function HomePage() {
  return (
    <main className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative bg-blue-900 text-white py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/acodacommunity.jpg"
            alt="ACoDA Community Empowerment"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/30 text-blue-200 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm"
          >
            Established October 2024
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            Empowering Communities <br className="hidden md:block" /> Through Sustainable Alternatives
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-blue-100"
          >
            A female-led national organization providing MSMEs, cooperatives, and farmers
            with the financial tools to transform their livelihoods in Sierra Leone.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apply" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-2xl hover:-translate-y-1">
              Apply for a Loan
            </Link>
            <Link href="/about" className="bg-white/10 backdrop-blur-md border border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition">
              Our Vision
            </Link>
          </div>
        </div>
      </section>

      {/* 2. IMPACT STATS BAR */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard emoji="👩‍💼" value="Female-Led" label="Owned & Operated" />
          <StatCard emoji="🌾" value="Farmers" label="Agricultural Support" />
          <StatCard emoji="📍" value="Sierra Leone" label="Registered & Licensed" />
        </div>
      </section>

      {/* 3. WHO WE ARE & SNAPSHOT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/acoda-staff.jpg"
              alt="ACoDA Team and Clients"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-sm font-bold text-blue-700 uppercase tracking-widest mb-3">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Driving Financial Independence
            </h3>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
              <p>
                **Agency for Community Development Alternatives (ACoDA) Microfinance** is a female-owned and led business dedicated to inclusive growth. 
              </p>
              <p className="border-l-4 border-blue-600 pl-6 italic bg-blue-50/50 py-2">
                We are legally registered to carry on with micro loans and credit-only business in Sierra Leone, focusing on sustainable development and financial inclusion.
              </p>
            </div>
            <Link href="/about" className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition shadow-lg inline-block">
              Learn More About Our Mission
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. LOAN TERMS & CLIENT FOCUS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h4 className="text-blue-900 font-black text-3xl mb-6 flex items-center gap-3">
                <span className="text-4xl">📝</span> Our Loan Terms
              </h4>
              <p className="text-gray-700 text-xl italic leading-relaxed font-medium">
                "Our loan terms are crafted with our target clientele in mind. We are quite flexible, recalling that we have a mission to support businesses to thrive."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg shadow-blue-200">✓</div>
                <div>
                  <p className="font-black text-blue-900 uppercase tracking-widest text-sm">Flexible & Inclusive</p>
                  <p className="text-gray-500 text-xs">Empowering those traditional banks overlook.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-blue-600 h-32 rounded-2xl flex items-center justify-center text-white font-bold text-center p-4">Low Interest</div>
              <div className="bg-blue-500 h-32 rounded-2xl flex items-center justify-center text-white font-bold text-center p-4 mt-8">Fast Processing</div>
              <div className="bg-blue-700 h-32 rounded-2xl flex items-center justify-center text-white font-bold text-center p-4 -mt-8">Group Lending</div>
              <div className="bg-blue-800 h-32 rounded-2xl flex items-center justify-center text-white font-bold text-center p-4">Agri-Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TARGETED ENTITIES */}
      <TargetedClients />

      {/* 6. CALL TO ACTION */}
      <section className="bg-blue-900 text-white py-24 text-center px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-black mb-6 italic">Join the Alternative for Development</h2>
          <p className="mb-10 text-blue-100 text-lg">
            Ready to scale your business or cooperative? Apply for a loan today and partner with ACoDA.
          </p>
          <Link
            href="/apply"
            className="bg-white text-blue-900 px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition shadow-2xl inline-block"
          >
            Apply for a Loan Now
          </Link>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-800 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-800 rounded-full translate-x-1/3 translate-y-1/3 opacity-50" />
      </section>
    </main>
  );
}

/* ---------- COMPONENTS ---------- */

function TargetedClients() {
  const clients = [
    "Micro, Small & Medium Enterprises (MSMEs)",
    "Savings & Credit Cooperative Societies (SACCOs)",
    "Farmer Cooperative Unions",
    "Area Cooperative Enterprises",
    "Village Savings & Loan Associations (VSLAs)"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-black text-center mb-16 text-slate-900 uppercase tracking-widest"
        >
          Targeted Beneficiaries
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.03, backgroundColor: "#f8fafc", borderColor: "#3b82f6" }}
              className="bg-slate-50 border border-slate-100 px-8 py-8 rounded-[2rem] text-blue-900 font-bold shadow-sm transition-all cursor-default flex items-center gap-4 group"
            >
              <span className="w-3 h-3 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></span>
              {client}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ emoji, value, label }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100"
    >
      <div className="bg-blue-100 p-3 rounded-lg text-2xl">{emoji}</div>
      <div>
        <div className="text-xl font-black text-blue-900">{value}</div>
        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{label}</p>
      </div>
    </motion.div>
  );
}