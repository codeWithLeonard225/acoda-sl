"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IoLogoFacebook, IoArrowForward } from "react-icons/io5";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function NewsPage() {
  return (
    <main className="w-full bg-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="bg-blue-900 py-24 text-white relative">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Latest Updates</h1>
            <p className="text-xl text-blue-100 leading-relaxed font-light">
              Stay informed about our community interventions, loan distribution cycles, 
              and success stories across Sierra Leone.
            </p>
          </motion.div>

          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://facebook.com/your-acoda-page" 
            target="_blank" 
            className="flex items-center gap-4 bg-[#1877F2] hover:bg-blue-600 text-white px-10 py-5 rounded-2xl font-black transition-all shadow-2xl shadow-blue-900/40"
          >
            <IoLogoFacebook className="text-3xl" /> Follow us on Facebook
          </motion.a>
        </div>
      </section>

      {/* 2. FEATURED NEWS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-slate-900 mb-12 flex items-center gap-4 uppercase tracking-tighter"
          >
            <span className="w-12 h-1.5 bg-blue-600 rounded-full"></span>
            Featured Stories
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* BIG FEATURE CARD */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative h-[550px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-50"
            >
              <Image 
                src="/images/launch-event.jpg" 
                alt="ACoDA Launch" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <span className="bg-blue-600 px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 inline-block">Milestone</span>
                <h3 className="text-4xl font-black mb-6 leading-tight">Official Registration & Launch of ACoDA Microfinance</h3>
                <p className="text-slate-200 text-lg mb-8 line-clamp-2 font-light">In October 2024, ACoDA officially began its mission as a female-led institution to empower MSMEs and smallholder farmers.</p>
                <button className="flex items-center gap-3 font-black text-blue-400 group-hover:text-white transition-colors">
                  READ FULL STORY <IoArrowForward className="text-xl group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* SIDE LIST */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-10"
            >
              {[1, 2, 3].map((item) => (
                <motion.div 
                  key={item} 
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex gap-8 group cursor-pointer border-b border-slate-100 pb-10 transition-all"
                >
                  <div className="relative w-40 h-40 rounded-3xl overflow-hidden shrink-0 shadow-lg border-2 border-white">
                    <Image src={`/images/news-${item}.jpg`} alt="News" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-2">Field Update</span>
                    <h4 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">Bo District Community Sensitization Meeting</h4>
                    <p className="text-slate-500 text-base mt-3 line-clamp-2 font-light">Engaging with local stakeholders in Tinkonko Chiefdom to discuss loan eligibility and VSLA support...</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FACEBOOK FEED SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-black text-slate-900 mb-4"
            >
              Live from Facebook
            </motion.h2>
            <p className="text-slate-500 text-xl font-light">Real-time updates from our field officers and community events.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
             {[1, 2, 3].map((i) => (
               <motion.div 
                 key={i}
                 variants={itemVariants}
                 className="bg-white border-2 border-slate-100 rounded-[2.5rem] h-[600px] flex flex-col items-center justify-center p-10 text-slate-400 italic shadow-sm hover:shadow-xl transition-shadow group"
               >
                 <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                    <IoLogoFacebook className="text-3xl text-slate-200 group-hover:text-[#1877F2] transition-colors" />
                 </div>
                 <p className="text-center font-light">Integrating Live Feed...</p>
                 <div className="mt-8 w-1/2 h-1 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="w-full h-full bg-blue-500"
                    />
                 </div>
               </motion.div>
             ))}
          </motion.div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://facebook.com/your-acoda-page" 
              className="text-blue-700 font-black uppercase text-sm tracking-[0.2em] hover:text-blue-900 transition underline decoration-2 underline-offset-8"
            >
              View all posts on Facebook
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}