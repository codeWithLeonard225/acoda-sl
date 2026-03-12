"use client"; // Required for Framer Motion

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// --- ANIMATION VARIANTS ---
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/30 text-blue-200 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Established November 2024
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Empowering Communities <br className="hidden md:block" /> Through Sustainable Alternatives
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-blue-100">
            A female-led national organization providing MSMEs, cooperatives, and farmers
            with the financial tools to transform their livelihoods.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apply" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-2xl">
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
          <StatCard emoji="👩‍💼" value="1,000+" label="Women Targeted" />
          <StatCard emoji="🌾" value="50 Groups" label="Bo & Moyamba Farmers" />
          <StatCard emoji="📍" value="3 Districts" label="Current Operations" />
        </div>
      </section>

      {/* 3. ABOUT SNAPSHOT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/acoda-staff.jpg"
              alt="ACoDA Team and Clients"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl">
              <p className="text-blue-900 font-bold text-sm underline decoration-blue-500">Highlighting Impact:</p>
              <p className="text-gray-700 text-sm italic font-medium">Supporting poultry and cassava growers in Tinkonko and Kori Chiefdoms.</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Empowering Women & Community Leaders</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              ACoDA is more than a microfinance provider. We leverage young people and local leaders to build trust, mobilize support, and ensure our programmes are culturally appropriate.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Our intervention <span className="text-blue-700 font-semibold">"Planned Births, Happy Women"</span> integrates sexual reproductive health advocacy.
            </p>
            <Link href="/about" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition inline-block">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* 4. LOAN PRODUCTS GRID */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 electric-border inline-block mx-auto px-6">
              Our Loan Products
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Reasonable interest rates designed to help your enterprise or farm achieve a higher income.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <LoanCard title="Group Loan" desc="Financial support for community groups and VSLAs." />
            <LoanCard title="Commercial Loan" desc="Scaling MSMEs in manufacturing and trade." />
            <LoanCard title="Agricultural Loan" desc="Financing for seasonal inputs and out-growers." />
            <LoanCard title="Asset Finance" desc="Acquire equipment and machinery for your business." />
            <LoanCard title="Salary Loan" desc="Accessible credit for formally employed individuals." />
          </div>
        </div>
      </section>

      {/* 5. TARGETED CLIENTS (WHO WE SERVE) */}
      <TargetedClients />

      {/* 6. CALL TO ACTION */}
      <section className="bg-blue-800 text-white py-24 text-center px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-6 italic">Join the Alternative for Development</h2>
          <p className="mb-10 text-blue-100 text-lg">
            Ready to scale your business or cooperative? Apply for a loan today and partner with ACoDA.
          </p>
          <Link
            href="/apply"
            className="bg-white text-blue-800 px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition shadow-2xl inline-block"
          >
            Apply for a Loan Now
          </Link>
        </div>
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
          className="text-3xl font-bold text-center mb-16 text-slate-900"
        >
          Who We Serve
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
              whileHover={{ 
                scale: 1.03, 
                backgroundColor: "#f0f7ff", 
                borderColor: "#3b82f6" 
              }}
              className="bg-blue-50 border border-blue-100 px-8 py-6 rounded-3xl text-blue-900 font-bold shadow-sm transition-colors cursor-default flex items-center gap-4"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
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
    <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100">
      <div className="bg-blue-100 p-3 rounded-lg text-2xl">{emoji}</div>
      <div>
        <div className="text-2xl font-bold text-blue-900">{value}</div>
        <p className="text-sm text-gray-500 font-medium uppercase tracking-tighter">{label}</p>
      </div>
    </div>
  );
}

function LoanCard({ title, desc }) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm transition-all group card-electric">
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:bg-blue-700 group-hover:text-white transition-colors">
        💵
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{desc}</p>
      <Link
        href="/loan-products"
        className="text-blue-700 font-bold hover:underline inline-flex items-center"
      >
        Learn More <span className="ml-2">→</span>
      </Link>
    </div>
  );
}