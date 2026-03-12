"use client";

import { motion } from "framer-motion";
import { IoCall, IoMail, IoLocation, IoTime, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const infoItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function ContactPage() {
  return (
    <main className="w-full bg-white overflow-hidden">
      {/* HEADER SECTION */}
      <section className="bg-blue-900 py-24 text-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Get In Touch</h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed font-light">
              Have questions about our loan products or want to partner with us on a community project? 
              Our team in Freetown and Bo is ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
          
          {/* LEFT COLUMN: CONTACT INFO */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4">
                <span className="w-10 h-1.5 bg-blue-600 rounded-full"></span>
                Contact Info
              </h2>
              
              <div className="space-y-10">
                {/* CONTACT CARDS */}
                {[
                  { icon: <IoCall />, label: "Call Us", details: ["+232 7X XXX XXX", "+232 3X XXX XXX"] },
                  { icon: <IoMail />, label: "Email Us", details: ["info@acoda-sl.org", "finance@acoda-sl.org"] },
                  { icon: <IoLocation />, label: "Our Offices", details: ["Western Urban (HQ) - Freetown", "Bo District Office - Tinkonko"] },
                  { icon: <IoTime />, label: "Working Hours", details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat: 9:00 AM - 1:00 PM (Loans Only)"] }
                ].map((item, idx) => (
                  <motion.div key={idx} variants={infoItemVariants} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-blue-700 shrink-0 text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-400 uppercase text-xs tracking-[0.2em] mb-2">{item.label}</h4>
                      {item.details.map((line, lIdx) => (
                        <p key={lIdx} className="text-slate-700 font-bold text-lg leading-tight">{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* SOCIAL TRUST BOX */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 bg-slate-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h4 className="font-black text-2xl mb-4 text-blue-400">Join our community</h4>
                <p className="text-slate-400 leading-relaxed mb-8 font-light">
                  Follow our field updates and success stories from our projects in Moyamba and Bo districts.
                </p>
                <div className="flex gap-4">
                   {[
                     { icon: <IoLogoFacebook />, color: "hover:bg-blue-600" },
                     { icon: <IoLogoTwitter />, color: "hover:bg-sky-500" },
                     { icon: <IoLogoLinkedin />, color: "hover:bg-blue-700" }
                   ].map((social, sIdx) => (
                     <motion.a 
                        key={sIdx}
                        whileHover={{ y: -5 }}
                        href="#" 
                        className={`w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center transition-all text-2xl ${social.color}`}
                     >
                       {social.icon}
                     </motion.a>
                   ))}
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <motion.div 
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-slate-100 rounded-[3.5rem] p-10 md:p-16 shadow-2xl shadow-blue-900/5 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[3.5rem] -z-0"></div>
              
              <div className="relative z-10">
                <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Send a Message</h3>
                <p className="text-slate-500 text-lg mb-12 font-light">Our coordinators will get back to you within 24 hours.</p>
                
                <form className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-blue-600 ml-1">Full Name</label>
                      <input type="text" className="w-full p-6 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-blue-600 focus:bg-white outline-none transition-all shadow-inner" placeholder="Leonard Sankoh..." />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-blue-600 ml-1">Email Address</label>
                      <input type="email" className="w-full p-6 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-blue-600 focus:bg-white outline-none transition-all shadow-inner" placeholder="email@example.com" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-blue-600 ml-1">Subject</label>
                    <select className="w-full p-6 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-blue-600 focus:bg-white outline-none transition-all appearance-none cursor-pointer shadow-inner">
                      <option>General Inquiry</option>
                      <option>Loan Support / Microfinance</option>
                      <option>Partnership Opportunities</option>
                      <option>Project Feedback</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-blue-600 ml-1">Your Message</label>
                    <textarea rows="5" className="w-full p-6 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-blue-600 focus:bg-white outline-none transition-all resize-none shadow-inner" placeholder="How can we assist you today?"></textarea>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-7 bg-blue-700 text-white rounded-[2rem] font-black text-xl hover:bg-blue-800 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-4 group"
                  >
                    Send Message 
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}