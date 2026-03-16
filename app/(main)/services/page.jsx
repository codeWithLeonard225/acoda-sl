"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const interventions = [
  {
    category: "Financial Inclusion",
    title: "Prioritized Enterprise Financing",
    desc: "We prioritize financing to micro, small, medium enterprises (MSMEs) and agricultural cooperatives, ensuring that capital reaches the engines of local economic growth.",
    image: "/images/financing.jpg",
    details: ["MSME Focus", "Agricultural Cooperatives", "Direct Capital Injection"]
  },
  {
    category: "Income Generation",
    title: "Empowering the Active Poor",
    desc: "We make it possible for the active poor to increase their household incomes through the extension of affordable financing to both individuals and organized groups.",
    image: "/images/income-growth.jpg",
    details: ["Individual Loans", "Group Solidarity Lending", "Affordable Interest Rates"]
  },
  {
    category: "Job Creation",
    title: "Direct & Indirect Employment",
    desc: "We create employment opportunities across Sierra Leone through strategic financing for individuals and groups engaged in viable small and medium enterprises.",
    image: "/images/employment.jpg",
    details: ["SME Job Growth", "Entrepreneurial Support", "Viable Business Funding"]
  },
  {
    category: "Sustainability",
    title: "Capacity Building & Research",
    desc: "We strengthen the management capacities of our clients through training and conduct rigorous market research to develop products that suit the unique needs of our target clients.",
    image: "/images/research.jpg",
    details: ["Management Training", "Market-Driven Products", "Sustainable Business Coaching"]
  }
];

// --- ANIMATION VARIANTS ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ServicesPage() {
  return (
    <main className="w-full bg-white overflow-hidden">
      {/* HEADER */}
      <section className="bg-blue-900 text-white py-24 relative">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-6 relative z-10"
        >
          <span className="text-blue-400 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Impact</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            What We Do
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed">
            ACoDA Microfinance is dedicated to transforming lives in Sierra Leone by 
            providing inclusive financial services and the knowledge required to use them effectively.
          </p>
        </motion.div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-800/50 to-transparent pointer-events-none" />
      </section>

      {/* INTERVENTIONS GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {interventions.map((item, index) => (
            <motion.div 
              key={index} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
              className={`flex flex-col md:flex-row gap-16 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE COLUMN */}
              <div className="w-full md:w-1/2">
                <div className="relative h-[400px] md:h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent" />
                </div>
              </div>

              {/* CONTENT COLUMN */}
              <div className="w-full md:w-1/2">
                <div className="space-y-6">
                  <span className="text-blue-600 font-black text-sm uppercase tracking-widest">{item.category}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.desc}
                  </p>
                  
                  <ul className="grid grid-cols-1 gap-4 pt-4">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-3 text-gray-800 font-medium">
                        <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-8">
                    <Link 
                      href="/apply" 
                      className="inline-flex items-center text-blue-700 font-black text-lg group hover:gap-4 transition-all"
                    >
                      Access this service 
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-blue-900 py-24 relative overflow-hidden text-white">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-black mb-6">Partnering for Sustainable Growth</h2>
          <p className="text-blue-100 text-xl mb-12 leading-relaxed">
            Whether you are a micro-business owner looking for capital or a development 
            partner looking to reach active rural communities, ACoDA is your gateway.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/apply" 
              className="bg-white text-blue-900 px-10 py-4 rounded-xl font-black text-lg hover:bg-blue-50 transition-colors shadow-xl"
            >
              Apply for Financing
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-700 text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-blue-600 transition-colors border border-blue-500"
            >
              Inquire About Partnerships
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}