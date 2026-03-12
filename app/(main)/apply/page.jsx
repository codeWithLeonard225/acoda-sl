import Link from "next/link";

export default function ApplyPage() {
  return (
    <main className="w-full bg-white">
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Loan Application Portal</h1>
          <p className="text-slate-400 text-lg">
            Empowering your growth through accessible and fair credit. 
            Please review the requirements before starting your application.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          
          {/* REQUIREMENTS SIDEBAR */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-6 flex items-center gap-2">
                <span>📋</span> Application Requirements
              </h3>
              <ul className="space-y-4 text-blue-800 text-sm">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">01.</span>
                  Valid National ID (Sierra Leonean)
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">02.</span>
                  Proof of Business or Farm Location
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">03.</span>
                  Two (2) Passport-sized Photos
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">04.</span>
                  For Group Loans: VSLA/Cooperative Registration
                </li>
              </ul>
            </div>

            <div className="p-8 border border-slate-100 rounded-3xl">
              <h4 className="font-bold mb-2">Need help?</h4>
              <p className="text-sm text-slate-500 mb-4">Visit our offices in Western Urban or Bo District for assistance.</p>
              <Link href="/contact" className="text-blue-700 font-bold text-sm">Contact Support →</Link>
            </div>
          </div>

          {/* APPLICATION FORM PLACEHOLDER */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl font-bold mb-8 text-slate-900">Start Your Application</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase">Full Name</label>
                  <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none" placeholder="Enter name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase">Phone Number</label>
                  <input type="tel" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none" placeholder="+232..." />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Loan Type</label>
                <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none">
                  <option>Select a product...</option>
                  <option>Group Loan</option>
                  <option>Agricultural Loan</option>
                  <option>Commercial/Enterprise Loan</option>
                  <option>Asset Finance</option>
                  <option>Salary Loan</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">Amount Requested (SLL)</label>
                <input type="number" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none" placeholder="0.00" />
              </div>

              <div className="p-6 bg-yellow-50 rounded-xl border border-yellow-100">
                <p className="text-sm text-yellow-800 leading-relaxed">
                  <strong>Note:</strong> By clicking submit, you agree that an ACoDA loan officer will contact you via phone for a field assessment and document verification.
                </p>
              </div>

              <button className="w-full py-5 bg-blue-700 text-white rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg shadow-blue-200">
                Submit Initial Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}