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
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <Image
          src="/images/acoda-staff.jpg" 
          alt="ACoDA Community Engagement"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/70"></div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/30 border border-blue-400/30 text-blue-200 text-sm font-bold uppercase tracking-widest mb-4">
            Established October 2024
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Leading the Future of <br /> Microfinance in Sierra Leone
          </h1>
          <p className="text-lg md:text-xl text-blue-100 font-medium">
            Empowering MSMEs and smallholder farmers through reasonable interest rates and inclusive growth.
          </p>
        </motion.div>
      </section>


      {/* 3. CEO MESSAGE SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* CEO Image Container */}
           {/* CEO Image Container */}
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="lg:col-span-2 lg:sticky lg:top-24 flex flex-col items-center lg:items-start"
>
  <div className="relative h-[500px] md:h-[550px] lg:h-[600px] w-full max-w-[450px] lg:max-w-none rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
    <Image
      src="/images/ceo-aiesha.jpg"
      alt="Mrs. Aiesha M. Tucker"
      fill
      className="object-cover object-top md:object-center" // Helps keep the face in view
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
  <div className="mt-6 text-center lg:text-left">
    <h4 className="text-2xl font-black text-blue-900">Mrs. Aiesha M. Tucker</h4>
    <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">Founder & Executive Director</p>
  </div>
</motion.div>

            {/* Message Content */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100"
            >
              <div className="text-5xl text-blue-200 mb-6 font-serif">“</div>
              <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed space-y-6">
                <p className="text-xl font-medium text-gray-900">
                  At ACoDA Microfinance, our vision is rooted in the belief that access to financial services is a fundamental driver of economic empowerment and community development.
                </p>
                <p>
                  As a female-owned and led institution, we respond to the pressing need for inclusive financial services that support the growth of entrepreneurs and small businesses across Sierra Leone. My vision is to build a trusted and innovative financial institution that expands opportunities for individuals often excluded from traditional banking.
                </p>
                <p>
                  Through responsible lending, flexible products, and a commitment to client development, we aim to empower MSMEs to grow, increase incomes, and create sustainable livelihoods. Financial inclusion remains one of the most powerful tools for economic transformation. 
                </p>
                <p>
                  We are committed to ensuring that entrepreneurs—especially women, farmers, small traders, and cooperative groups—have access not only to credit but also to the financial knowledge and support needed to manage and expand their businesses.
                </p>
                <p className="font-bold text-blue-900">
                  Together with our clients and partners, ACoDA Microfinance will remain committed to building resilient businesses, stronger communities, and a more inclusive financial future for all.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION */}
      <section className="py-24 bg-blue-900 text-white">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={fadeInUp} className="relative p-10 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="text-4xl mb-6">👁️</div>
            <h2 className="text-2xl font-bold mb-4 text-blue-300 tracking-wide uppercase">Our Vision</h2>
            <p className="text-blue-50 text-xl leading-relaxed font-light">
              To be the lead Provider and Manager of microfinance services in Sierra Leone and Sub-Saharan Africa.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative p-10 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="text-4xl mb-6">🎯</div>
            <h2 className="text-2xl font-bold mb-4 text-blue-300 tracking-wide uppercase">Our Mission</h2>
            <p className="text-blue-50 text-lg leading-relaxed font-light">
              To improve income in agricultural, commercial, and manufacturing micro, small, and medium enterprises in Sierra Leone by providing loans at reasonable interest rates and encouraging savings.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 5. STRATEGIC OBJECTIVES */}
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
            className="grid md:grid-cols-1 lg:grid-cols-3 gap-8"
          >
            <ObjectiveCard 
              icon="📈" 
              title="Scale & Reach" 
              text="To service the need for microfinance services of 950,000 clients by 2030, resulting in improved standards of living and stronger civil society." 
            />
            <ObjectiveCard 
              icon="🌍" 
              title="Economic Growth" 
              text="To contribute to local and regional economic growth by supporting micro-enterprises and sustainable income-generating activities." 
            />
            <ObjectiveCard 
              icon="⚖️" 
              title="Sustainability" 
              text="To achieve financial sustainability to ensure the long-term viability of our operations and continued service to our clients." 
            />
          </motion.div>
        </div>
      </section>

      {/* 6. WHERE WE WORK */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Operational Footprint</h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto text-lg">
            Strategically located to serve commercial hubs and smallholder farming communities.
          </p>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <LocationCard city="Western Urban" detail="Administrative Headquarters" />
            {/* <LocationCard city="Bo District" detail="Tinkonko Chiefdom" /> */}
            <LocationCard city="24 Waterloo-Jui Highway" detail="Abibatu Turay" />
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
      <p className="text-gray-600 leading-relaxed text-sm">{text}</p>
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