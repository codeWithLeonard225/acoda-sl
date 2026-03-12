"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    category: "Livelihoods",
    image: "/images/farming.jpg",
    items: [
      { title: "Microfinance", desc: "Sustainable credit solutions for MSMEs and VSLAs." },
      { title: "Smallholder Farming", desc: "Supporting poultry and cassava growers in Bo and Moyamba." }
    ]
  },
  {
    category: "Education",
    image: "/images/classroom.jpg",
    items: [
      { title: "Teacher Training", desc: "Enhancing the capacity of educators for better learning outcomes." },
      { title: "Education Monitoring", desc: "Ensuring standards are met through stakeholder engagement." }
    ]
  },
  {
    category: "WASH",
    image: "/images/water-pump.jpg",
    items: [
      { title: "Clean Water Facilities", desc: "Providing safe, accessible water points for rural communities." },
      { title: "Sanitation Awareness", desc: "Promoting hygiene practices to prevent waterborne diseases." }
    ]
  },
  {
    category: "Health & SRHR",
    image: "/images/health-talk.jpg",
    items: [
      { title: "SRH Awareness", desc: "Educating communities on sexual and reproductive health." },
      { title: "Family Planning", desc: "Advocating for 'Planned Births, Happy Women' for family well-being." }
    ]
  },
  {
    category: "Climate & Youth",
    image: "/images/youth-leader.jpg",
    items: [
      { title: "Climate Action", desc: "Policy advocacy and environmental protection initiatives." },
      { title: "Youth Empowerment", desc: "Leadership training and advocacy for adolescents." }
    ]
  }
];

// --- ANIMATION VARIANTS ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const imageVariants = (index) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, delay: 0.2 } 
  }
});

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
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Our Interventions
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed">
            ACoDA facilitates development through a comprehensive approach to social and 
            economic empowerment across Sierra Leone.
          </p>
        </motion.div>
        {/* Decorative subtle pattern or gradient */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-800/50 to-transparent pointer-events-none" />
      </section>

      {/* SERVICES GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {services.map((service, index) => (
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
              <motion.div 
                variants={imageVariants(index)}
                className="w-full md:w-1/2"
              >
                <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl group">
                  <Image
                    src={service.image}
                    alt={service.category}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-6 left-6 bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-lg">
                    {service.category}
                  </div>
                </div>
              </motion.div>

              {/* CONTENT COLUMN */}
              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h2 className="text-4xl font-black text-gray-900 mb-8 flex items-center gap-4">
                    <span className="h-1 w-12 bg-blue-600 rounded-full" />
                    {service.category}
                  </h2>
                  
                  <div className="space-y-10">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="relative pl-6 border-l-2 border-blue-100 hover:border-blue-600 transition-colors duration-300">
                        <h3 className="text-2xl font-bold text-blue-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="mt-12"
                  >
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center text-blue-700 font-extrabold text-lg group"
                    >
                      Partner with us on this intervention 
                      <span className="ml-3 transition-transform group-hover:translate-x-2">→</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-blue-50 py-24 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
        >
          <h2 className="text-4xl font-black text-gray-900 mb-6">Need Financial Support?</h2>
          <p className="text-gray-600 text-xl mb-12 leading-relaxed">
            If you are an MSME, farmer, or part of a VSLA in our operational districts, 
            you can apply for a loan today and scale your impact.
          </p>
          <Link 
            href="/apply" 
            className="bg-blue-700 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-800 hover:shadow-2xl hover:-translate-y-1 transition-all inline-block shadow-xl"
          >
            Apply for a Loan Now
          </Link>
        </motion.div>
        {/* Subtle background circles for "Professional" feel */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-100 rounded-full opacity-50" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-200/30 rounded-full opacity-50" />
      </section>
    </main>
  );
}