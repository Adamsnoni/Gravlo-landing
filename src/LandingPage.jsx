import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  CreditCard, 
  Users, 
  FileText, 
  Globe, 
  Bell, 
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Clock,
  LayoutDashboard,
  FileSpreadsheet,
  Wallet
} from 'lucide-react';

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-body text-stone-800">
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sage flex items-center justify-center">
              <Building2 size={16} className="text-cream" />
            </div>
            <span className="font-display font-semibold text-ink text-xl">Gravlo</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-stone-600 hover:text-ink transition-colors">Features</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-stone-600 hover:text-ink transition-colors">How It Works</button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-stone-600 hover:text-ink transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-stone-600 hover:text-ink transition-colors">FAQ</button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://leaseease.vercel.app/login" className="text-sm font-medium text-stone-600 hover:text-ink transition-colors">
              Login
            </a>
            <a href="https://leaseease.vercel.app/register" className="text-sm font-medium bg-ink text-cream px-5 py-2.5 rounded-full hover:bg-stone-800 transition-colors shadow-sm">
              Get Started
            </a>
          </div>

          <button 
            className="md:hidden p-2 text-stone-600 hover:text-ink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-stone-50 border-b border-stone-200 px-6 py-4 flex flex-col gap-4 shadow-lg">
            <button onClick={() => scrollToSection('features')} className="text-left py-2 text-stone-600 font-medium">Features</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-left py-2 text-stone-600 font-medium">How It Works</button>
            <button onClick={() => scrollToSection('pricing')} className="text-left py-2 text-stone-600 font-medium">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="text-left py-2 text-stone-600 font-medium">FAQ</button>
            <hr className="border-stone-200" />
            <a href="https://leaseease.vercel.app/login" className="py-2 text-stone-600 font-medium text-center border border-stone-200 rounded-lg">Login</a>
            <a href="https://leaseease.vercel.app/register" className="py-2 font-medium bg-ink text-cream text-center rounded-lg">Get Started</a>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center flex flex-col items-center">
        <h1 className="font-display font-bold text-5xl md:text-7xl text-ink leading-tight max-w-4xl mb-6 tracking-tight">
          Manage properties.<br />Collect rent.<br />Grow income, <span className="text-sage">automatically.</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-500 max-w-2xl mb-10 leading-relaxed">
          Gravlo is a rental management platform for landlords and property managers that automatically collects rent, tracks payments, and manages tenants across properties worldwide.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <a href="https://leaseease.vercel.app/register" className="w-full sm:w-auto text-center px-8 py-4 bg-ink text-cream rounded-full font-medium text-lg hover:bg-stone-800 transition-colors shadow-md flex items-center justify-center gap-2">
            Get Started For Free <ArrowRight size={18} />
          </a>
          <a href="https://leaseease.vercel.app/login" className="w-full sm:w-auto text-center px-8 py-4 bg-white text-ink border border-stone-200 rounded-full font-medium text-lg hover:bg-stone-50 transition-colors shadow-sm">
            Login
          </a>
        </div>
        <p className="mt-4 text-sm text-stone-500 flex justify-center items-center gap-2">
          <ShieldCheck size={16} className="text-sage" />
          <span>Powered by secure payment infrastructure • Bank-level encryption.</span>
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12 text-sm text-stone-500">
          <div><strong className="text-ink font-semibold">Automated</strong> rent tracking</div>
          <div><strong className="text-ink font-semibold">Global</strong> payments</div>
          <div><strong className="text-ink font-semibold">One dashboard</strong> for everything</div>
        </div>
        <div className="mt-16 w-full max-w-5xl h-64 md:h-96 bg-gradient-to-tr from-stone-200 to-stone-100 rounded-2xl border border-stone-200 shadow-2xl relative overflow-hidden flex items-center justify-center">
           <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
           <div className="z-10 bg-white p-6 rounded-xl shadow-lg border border-stone-100 w-3/4 max-w-md">
             <div className="h-4 w-24 bg-stone-200 rounded mb-6"></div>
             <div className="flex justify-between items-end mb-6">
                <div className="h-10 w-32 bg-sage/20 rounded-lg"></div>
                <div className="h-6 w-16 bg-stone-100 rounded"></div>
             </div>
             <div className="space-y-3">
               <div className="h-12 w-full bg-stone-50 rounded flex items-center px-4"><div className="w-6 h-6 rounded-full bg-stone-200"></div></div>
               <div className="h-12 w-full bg-stone-50 rounded flex items-center px-4"><div className="w-6 h-6 rounded-full bg-stone-200"></div></div>
               <div className="h-12 w-full bg-stone-50 rounded flex items-center px-4"><div className="w-6 h-6 rounded-full bg-stone-200"></div></div>
             </div>
           </div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className="py-24 bg-stone-100 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">Rental management shouldn't be a second job.</h2>
          <p className="text-stone-500 text-lg">We built Gravlo because property owners were losing hours to outdated methods.</p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mb-20">
          {[
            { icon: Clock, color: 'red', label: 'Late payments' },
            { icon: FileSpreadsheet, color: 'amber', label: 'Spreadsheet management' },
            { icon: Wallet, color: 'blue', label: 'Multiple bank transfers' },
            { icon: LayoutDashboard, color: 'orange', label: 'Manual rent tracking' },
            { icon: Users, color: 'purple', label: 'Lack of visibility' },
          ].map(({ icon: Icon, color, label }, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200/50 flex flex-col items-center text-center">
              <div className={`w-12 h-12 bg-${color}-50 text-${color}-500 rounded-full flex items-center justify-center mb-4`}>
                <Icon size={24} />
              </div>
              <h3 className="font-semibold text-ink text-sm">{label}</h3>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-md border border-stone-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-100 bg-stone-50/50">
              <h3 className="text-xl font-bold text-stone-500 mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-500"><X size={18} /></div>
                Before Gravlo
              </h3>
              <ul className="space-y-6">
                {[
                  'Chasing down late payments via text and email',
                  'Manually creating and emailing PDF invoices',
                  'Checking multiple bank accounts for transfers',
                  'Juggling messy spreadsheets and paper leases',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-500">
                    <span className="mt-1 text-stone-300">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 md:p-12 bg-white flex flex-col justify-center">
              <h3 className="text-xl font-bold text-ink mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center text-sage"><CheckCircle2 size={18} /></div>
                After Gravlo
              </h3>
              <ul className="space-y-6">
                {[
                  'Rent is automatically collected and tracked',
                  'Invoices are auto-generated and sent on schedule',
                  'One dashboard shows all global payments instantly',
                  'Tenants, units, and leases centralized in one app',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-800 font-medium">
                    <CheckCircle2 size={20} className="text-sage mt-0.5 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURES */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mb-4">Everything you need to collect rent.</h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">An operating system for your rental income. Clean, transparent, and completely automated.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: CreditCard, title: 'Automated Rent Collection', desc: 'Accept direct payments globally. Payments are securely processed and tracked automatically in your dashboard.' },
            { icon: Users, title: 'Tenant Invitations via Secure Links', desc: 'Onboard tenants with one click using unique, secure tracking links.' },
            { icon: Building2, title: 'Property & Unit Management', desc: 'Organize your entire portfolio in one unified visual interface.' },
            { icon: FileText, title: 'Automatic Invoices (PDF)', desc: 'Generate and send professional PDF receipts without lifting a finger.' },
            { icon: LayoutDashboard, title: 'Payment Tracking Dashboard', desc: 'Instantly see who paid, who is late, and your upcoming revenue.' },
            { icon: Globe, title: 'Global Currency Support', desc: 'Built for international landlords managing properties across borders.' },
            { icon: Bell, title: 'Smart Rent Reminders', desc: 'Automatically nudge tenants before rent is due to prevent late payments.' },
          ].map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-stone-50 text-sage rounded-xl flex items-center justify-center mb-6">
                <feature.icon size={26} />
              </div>
              <h3 className="font-semibold text-xl text-ink mb-3">{feature.title}</h3>
              <p className="text-stone-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-ink text-cream px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">How it works</h2>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">Three simple steps to put your rental income on autopilot.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Add Property & Units', desc: 'Set up your portfolio structure and define rent terms in minutes.' },
              { step: '2', title: 'Invite Tenants', desc: 'Send a secure link. Tenants connect their payment methods instantly.' },
              { step: '3', title: 'Get Paid Automatically', desc: 'Rent is collected when due and tracked automatically on your dashboard.' }
            ].map((item, i) => (
              <div key={i} className="bg-stone-900 border border-stone-800 p-8 rounded-3xl flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sage text-cream font-display text-2xl font-bold rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-2xl mb-3">{item.title}</h3>
                <p className="text-stone-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRUST */}
      <section className="py-20 border-b border-stone-200 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8">
          {[
            { icon: ShieldCheck, label: 'Secure payments' },
            { icon: Globe, label: 'Built for global landlords' },
            { icon: FileText, label: 'Transparent records' },
            { icon: CheckCircle2, label: 'Designed for simplicity' },
          ].map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex items-center gap-3">
              <Icon size={28} className="text-sage" />
              <span className="font-semibold text-ink text-lg">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PRICING */}
      <section id="pricing" className="py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mb-4">Simple, transparent pricing</h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">Pay for what you need as your portfolio grows.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-ink mb-2">Starter</h3>
              <p className="text-stone-500 mb-6 flex-grow">Perfect for landlords just starting out with 1-3 units.</p>
              <div className="text-4xl font-display font-bold text-ink mb-6">Free</div>
              <ul className="space-y-3 mb-8">
                {['Up to 3 units', 'Basic payment tracking', 'Tenant invites'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-stone-600"><CheckCircle2 size={18} className="text-sage" /> {f}</li>
                ))}
              </ul>
              <a href="https://leaseease.vercel.app/register" className="w-full py-3 px-4 border border-stone-300 text-center rounded-xl font-medium hover:bg-stone-50 transition-colors">Get Started</a>
            </div>

            <div className="bg-ink p-8 rounded-3xl border border-ink shadow-xl flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-sage text-cream text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
              <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
              <p className="text-stone-400 mb-6 flex-grow">Automate everything for your expanding portfolio.</p>
              <div className="text-4xl font-display font-bold text-white mb-6">$10<span className="text-lg text-stone-400 font-normal">/mo</span></div>
              <ul className="space-y-3 mb-8">
                {['Up to 20 units', 'Automated rent collection', 'Auto PDF Invoices', 'Smart reminders'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-stone-300"><CheckCircle2 size={18} className="text-sage" /> {f}</li>
                ))}
              </ul>
              <a href="https://leaseease.vercel.app/register" className="w-full py-3 px-4 bg-sage text-white text-center rounded-xl font-medium hover:bg-[#6b856b] transition-colors shadow-md">Get Started</a>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-ink mb-2">Pro</h3>
              <p className="text-stone-500 mb-6 flex-grow">Advanced features for professional property managers.</p>
              <div className="text-4xl font-display font-bold text-ink mb-6">$29<span className="text-lg text-stone-500 font-normal">/mo</span></div>
              <ul className="space-y-3 mb-8">
                {['Unlimited units', 'Priority support', 'Custom reports', 'API access'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-stone-600"><CheckCircle2 size={18} className="text-sage" /> {f}</li>
                ))}
              </ul>
              <a href="https://leaseease.vercel.app/register" className="w-full py-3 px-4 border border-stone-300 text-center rounded-xl font-medium hover:bg-stone-50 transition-colors">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-sage opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-ink mb-8">Let rent run itself.</h2>
          <a href="https://leaseease.vercel.app/register" className="inline-flex items-center gap-2 px-10 py-5 bg-ink text-cream rounded-full font-medium text-xl hover:bg-stone-800 transition-colors shadow-xl">
            Get Started Free <ArrowRight size={20} />
          </a>
          <p className="mt-6 text-sm text-stone-500 font-medium">
            Setup takes less than 2 minutes. No credit card required.
          </p>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-white border-t border-stone-200 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-sage flex items-center justify-center">
                <Building2 size={14} className="text-cream" />
              </div>
              <span className="font-display font-semibold text-ink text-lg">Gravlo</span>
            </div>
            <p className="text-stone-500 leading-relaxed max-w-sm">
              Gravlo pulls everything together, your properties, your tenants, your payments. Like gravity.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-ink mb-4">Product</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('features')} className="text-stone-500 hover:text-ink">Features</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="text-stone-500 hover:text-ink">Pricing</button></li>
              <li><a href="https://leaseease.vercel.app/login" className="text-stone-500 hover:text-ink">Login</a></li>
              <li><a href="https://leaseease.vercel.app/register" className="text-stone-500 hover:text-ink">Sign Up</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-ink mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-stone-500 hover:text-ink">Privacy Policy</a></li>
              <li><a href="#" className="text-stone-500 hover:text-ink">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between text-stone-400 text-sm">
          <p>© {new Date().getFullYear()} Gravlo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
