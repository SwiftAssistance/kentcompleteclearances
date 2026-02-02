import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Phone, MapPin, BadgeCheck, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-4">
                <div className="bg-red-600 text-white p-2 border-2 border-slate-700">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-white font-black uppercase tracking-wider">Kent Complete Clearances</span>
              </Link>
              <p className="text-sm mb-4">
                Professional, licensed waste removal services for Kent. We recycle 98% of what we collect. Family run, locally trusted.
              </p>
              <div className="flex gap-2 text-white">
                <a href="tel:01622000000" className="p-2 bg-slate-800 border border-slate-700 hover:bg-red-600 transition-colors" aria-label="Call us"><Phone className="w-4 h-4" /></a>
                <Link to="/about" className="p-2 bg-slate-800 border border-slate-700 hover:bg-red-600 transition-colors" aria-label="Our location"><MapPin className="w-4 h-4" /></Link>
              </div>
            </div>

            <div>
              <h5 className="text-white font-bold uppercase tracking-wider mb-4">Services</h5>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-red-500 transition-colors">House Clearance</Link></li>
                <li><Link to="/services" className="hover:text-red-500 transition-colors">Garden Waste</Link></li>
                <li><Link to="/services" className="hover:text-red-500 transition-colors">Office Clearouts</Link></li>
                <li><Link to="/services" className="hover:text-red-500 transition-colors">Wait &amp; Load</Link></li>
                <li><Link to="/services" className="hover:text-red-500 transition-colors">Builders Waste</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold uppercase tracking-wider mb-4">Company</h5>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link></li>
                <li><Link to="/about#areas" className="hover:text-red-500 transition-colors">Areas Covered</Link></li>
                <li><Link to="/about#faq" className="hover:text-red-500 transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-red-500 transition-colors">Get a Quote</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold uppercase tracking-wider mb-4">Contact</h5>
              <a href="tel:01622000000" className="text-lg font-bold text-white block mb-1 hover:text-red-400 transition-colors">01622 000 000</a>
              <p className="text-sm mb-4">info@kentcompleteclearances.co.uk</p>
              <div className="bg-slate-800 p-4 border border-slate-700 text-xs">
                <p className="font-bold text-white mb-1 flex items-center gap-1"><BadgeCheck className="w-4 h-4 text-green-400" /> Environment Agency Registered</p>
                <p>Upper Tier Carrier Dealer</p>
                <p className="font-mono text-slate-400">Reg: CBDU123456</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} Kent Complete Clearances. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed with <span className="text-red-600">&hearts;</span> in Kent.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-900 border-t-2 border-red-600 p-3 flex gap-2">
        <a href="tel:01622000000" className="flex-1 bg-red-600 text-white text-center py-3 font-black uppercase text-sm border-2 border-slate-900 flex items-center justify-center gap-2">
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <Link to="/contact" className="flex-1 bg-white text-slate-900 text-center py-3 font-black uppercase text-sm border-2 border-slate-900 flex items-center justify-center gap-2">
          <ArrowRight className="w-4 h-4" /> Free Quote
        </Link>
      </div>
      <div className="h-16 md:hidden"></div>
    </>
  );
}
