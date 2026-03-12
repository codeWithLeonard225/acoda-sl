import Link from "next/link";
import Image from "next/image";
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoWhatsapp, IoMail, IoCall, IoLocation } from "react-icons/io5";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. BRAND & IDENTITY */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg">
                <Image src="/logo.jpg" alt="ACoDA Logo" width={40} height={40} />
              </div>
              <span className="text-2xl font-black tracking-tighter">ACoDA</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Agency for Community Development Alternatives. A female-led national 
              NGO and registered Microfinance institution (Est. 2024) empowering 
              communities across Sierra Leone.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<IoLogoFacebook />} />
              <SocialLink href="#" icon={<IoLogoTwitter />} />
              <SocialLink href="#" icon={<IoLogoLinkedin />} />
              <SocialLink href="#" icon={<IoLogoWhatsapp />} />
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-blue-500 pl-3">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><FooterLink href="/about">About Our Mission</FooterLink></li>
              <li><FooterLink href="/services">Our Interventions</FooterLink></li>
              <li><FooterLink href="/impact">Impact & Projects</FooterLink></li>
              <li><FooterLink href="/news">Latest News</FooterLink></li>
              <li><FooterLink href="/contact">Contact Us</FooterLink></li>
            </ul>
          </div>

          {/* 3. LOAN PRODUCTS */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-blue-500 pl-3">Microfinance</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><FooterLink href="/loan-products">Group Loans</FooterLink></li>
              <li><FooterLink href="/loan-products">Agricultural Loans</FooterLink></li>
              <li><FooterLink href="/loan-products">Commercial Loans</FooterLink></li>
              <li><FooterLink href="/apply" className="text-blue-400 font-bold">Apply for a Loan</FooterLink></li>
            </ul>
          </div>

          {/* 4. OFFICE INFO */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-blue-500 pl-3">Our Offices</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex gap-3">
                <IoLocation className="text-blue-500 text-xl shrink-0" />
                <span>Western Urban, Freetown, Sierra Leone</span>
              </li>
              <li className="flex gap-3">
                <IoCall className="text-blue-500 text-xl shrink-0" />
                <span>+232 7X XXX XXX</span>
              </li>
              <li className="flex gap-3">
                <IoMail className="text-blue-500 text-xl shrink-0" />
                <span>info@acoda-sl.org</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © {currentYear} Agency for Community Development Alternatives (ACoDA). All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* --- HELPER COMPONENTS --- */

function FooterLink({ href, children, className = "" }) {
  return (
    <Link 
      href={href} 
      className={`hover:text-blue-400 hover:translate-x-1 transition-all inline-block ${className}`}
    >
      {children}
    </Link>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-xl hover:bg-blue-600 hover:text-white transition-all shadow-lg"
    >
      {icon}
    </a>
  );
}