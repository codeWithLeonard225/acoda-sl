"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    title: "Group Loan",
    desc: "Tailored financial support for community groups and cooperatives to foster collective growth.",
    icon: "👥",
  },
  {
    title: "Commercial / Enterprise Loan",
    desc: "Working capital for small and medium enterprises (MSMEs) looking to scale operations and inventory.",
    icon: "📈",
  },
  {
    title: "Agricultural Loan",
    desc: "Seasonal and long-term financing designed specifically for farmers and agricultural value-chain businesses.",
    icon: "🌾",
  },
  {
    title: "Asset Finance Loan",
    desc: "Direct financing for equipment, machinery, and productive assets to modernize your business.",
    icon: "🚜",
  },
  {
    title: "Salary Loan",
    desc: "Short-term, accessible credit solutions for salaried workers with flexible repayment terms.",
    icon: "💳",
  },
];

const clients = [
  { name: "MSMEs", full: "Micro, Small and Medium Enterprises", desc: "Support for small businesses to expand operations and create jobs." },
  { name: "SACCOs", full: "Savings and Credit Cooperative Societies", desc: "Financial liquidity and support for cooperative savings groups." },
  { name: "Farmer CUs", full: "Farmer Cooperative Unions", desc: "Strengthening the bargaining power and production of agricultural unions." },
  { name: "ACEs", full: "Area Cooperative Enterprises", desc: "Empowering community-based enterprises to thrive in local markets." },
  { name: "VSLAs", full: "Village Savings and Loans Associations", desc: "Grassroots financial support for community-led savings initiatives." },
];

// --- ANIMATION VARIANTS ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function LoanProductsPage() {
  return (
    <main className="w-full bg-white overflow-hidden">
      {/* 1. BRAND IDENTITY SECTION */}
      <section className="bg-blue-900 text-white py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800 skew-x-12 translate-x-20 hidden lg:block opacity-50"></div>
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 relative z-10"
        >
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              Registered Microfinance Institution
            </span>
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">
              ACoDA Microfinance
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
              Established in October 2024, ACoDA Microfinance is a legally registered, female-owned entity dedicated to improving incomes in the agricultural and commercial sectors.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-4 bg-blue-600/30 p-4 rounded-2xl border border-blue-400/20"
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-xl">🛡️</div>
              <div>
                <p className="text-xs font-bold text-blue-300 uppercase tracking-tighter">The Value Proposition</p>
                <p className="text-white font-medium">Reasonable interest rates & encouraged savings.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 2. LOAN PRODUCTS GRID */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Our Loan Products</h2>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Flexible credit facilities designed to meet the unique needs of Sierra Leonean entrepreneurs and farmers.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 "
          >
            {products.map((product, idx) => (
              <motion.div 
                key={idx} 
                variants={cardVariant}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                className="bg-white p-10 card-electric rounded-[2.5rem] border border-slate-100 shadow-sm transition-all group"
              >
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{product.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 h-20 overflow-hidden">{product.desc}</p>
                <Link href="/apply" className="inline-flex items-center gap-2 text-blue-700 font-black uppercase text-sm tracking-widest hover:text-blue-900">
                  Apply Now <span className="group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. TARGETED CLIENTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[650px] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-slate-50"
            >
              <Image 
                src="/images/market-women.jpg"
                alt="ACoDA Clients"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12">
                <h3 className="text-white text-3xl font-black mb-2">Who We Serve</h3>
                <p className="text-blue-200 text-lg">Leveraging trust and local leadership to drive growth.</p>
              </div>
            </motion.div>

            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-10">Is ACoDA for You?</h2>
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {clients.map((client, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={cardVariant}
                    className="group p-6 rounded-3xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all cursor-default"
                  >
                    <div className="flex items-start gap-5">
                      <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="text-xl font-black text-blue-900">{client.name}</h4>
                        <p className="text-blue-600/70 text-xs font-bold uppercase tracking-widest mb-2">{client.full}</p>
                        <p className="text-slate-600 leading-relaxed">{client.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 p-10 bg-slate-900 rounded-[2rem] text-white relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <h4 className="font-black text-2xl mb-4 text-blue-400">Our Engagement Model</h4>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    We leverage young people and community leaders to foster trust and local knowledge, 
                    ensuring our financial services are accessible and culturally appropriate.
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-24 bg-blue-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">Start Your Application Today</h2>
            <p className="text-slate-600 text-xl mb-12 leading-relaxed">
              Join hundreds of entrepreneurs and farmers across Western Urban, Bo, and Moyamba 
              who are growing their futures with ACoDA.
            </p>
            <Link href="/apply" className="inline-block bg-blue-700 text-white px-14 py-6 rounded-full font-black text-xl hover:bg-blue-800 transition-all shadow-2xl shadow-blue-200 hover:-translate-y-1">
              Apply for Loan Now
            </Link>
          </motion.div>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex justify-around items-center">
            <span className="text-[20rem] font-black">ACoDA</span>
        </div>
      </section>
    </main>
  );
}