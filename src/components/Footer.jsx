import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Phone, MapPin, BadgeCheck, ArrowRight, Star, Clock, Recycle, Shield, Mail, MessageCircle } from 'lucide-react';
import { Button } from './ui';

export default function Footer() {
  return (
    <>
      {/* Pre-Footer CTA */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-2">Need a Quote Today?</h3>
              <p className="text-white/80 font-medium">Send us a photo and get a fixed price in minutes.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:01622000000">
                <Button variant="secondary" className="whitespace-nowrap">
                  <Phone className="w-5 h-5" /> 01622 000 000
                </Button>
              </a>
              <Button as="link" to="/contact" variant="dark" className="whitespace-nowrap">
                Get Free Quote <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300">
        {/* Trust Bar */}
        <div className="border-b border-slate-800 py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold text-white">Fully Insured</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Recycle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold text-white">98% Recycled</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold text-white">Same-Day Service</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-sm font-bold text-white">50+ Reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Brand */}
              <div className="lg:col-span-1">
                <Link to="/" className="flex items-center gap-3 mb-5">
                  <div className="bg-red-600 text-white p-2.5 border-2 border-slate-700">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-white font-black uppercase tracking-tight text-lg block leading-tight">Kent Complete</span>
                    <span className="text-red-500 font-black uppercase tracking-tight text-lg leading-tight">Clearances</span>
                  </div>
                </Link>
                <p className="text-sm mb-5 leading-relaxed">
                  Professional, licensed waste removal for homes and businesses across Kent. Family run, locally trusted since 2025.
                </p>
                <div className="bg-slate-800/50 p-4 border border-slate-700">
                  <p className="font-bold text-white text-xs mb-2 flex items-center gap-2">
                    <BadgeCheck className="w-4 h-4 text-green-400" /> Licensed Waste Carrier
                  </p>
                  <p className="text-xs text-slate-400">Environment Agency Registered</p>
                  <p className="text-xs text-slate-400">Upper Tier Carrier Dealer</p>
                  <p className="font-mono text-xs text-slate-500 mt-2">Company Reg: 16770749</p>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-white font-black uppercase tracking-wider text-sm mb-5 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-red-600"></span> Services
                </h4>
                <ul className="space-y-3 text-sm">
                  <li><Link to="/services/house-clearance" className="hover:text-red-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-red-600" /> House Clearance</Link></li>
                  <li><Link to="/services/garden-waste" className="hover:text-red-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-red-600" /> Garden Waste</Link></li>
                  <li><Link to="/services/office-clearance" className="hover:text-red-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-red-600" /> Office Clearance</Link></li>
                  <li><Link to="/services/wait-and-load" className="hover:text-red-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-red-600" /> Wait &amp; Load</Link></li>
                  <li><Link to="/services/builders-waste" className="hover:text-red-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-red-600" /> Builders Waste</Link></li>
                  <li><Link to="/services/single-item-removal" className="hover:text-red-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-red-600" /> Single Item Removal</Link></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-black uppercase tracking-wider text-sm mb-5 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-red-600"></span> Company
                </h4>
                <ul className="space-y-3 text-sm">
                  <li><Link to="/about" className="hover:text-red-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-red-600" /> About Us</Link></li>
                  <li><Link to="/about#areas" className="hover:text-red-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-red-600" /> Areas Covered</Link></li>
                  <li><Link to="/about#reviews" className="hover:text-red-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-red-600" /> Customer Reviews</Link></li>
                  <li><Link to="/about#faq" className="hover:text-red-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-red-600" /> FAQ</Link></li>
                  <li><Link to="/contact" className="hover:text-red-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-red-600" /> Get a Quote</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white font-black uppercase tracking-wider text-sm mb-5 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-red-600"></span> Contact Us
                </h4>
                <div className="space-y-4">
                  <a href="tel:01622000000" className="flex items-center gap-3 group">
                    <div className="bg-red-600 p-2 text-white group-hover:bg-red-500 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white font-bold">01622 000 000</p>
                      <p className="text-xs text-slate-400">Landline</p>
                    </div>
                  </a>
                  <a href="tel:07000000000" className="flex items-center gap-3 group">
                    <div className="bg-green-600 p-2 text-white group-hover:bg-green-500 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white font-bold">07000 000 000</p>
                      <p className="text-xs text-slate-400">WhatsApp / Text</p>
                    </div>
                  </a>
                  <a href="mailto:info@kentcompleteclearances.co.uk" className="flex items-center gap-3 group">
                    <div className="bg-slate-700 p-2 text-white group-hover:bg-slate-600 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">info@kentcomplete<br />clearances.co.uk</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="bg-slate-700 p-2 text-white">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Based in Sittingbourne</p>
                      <p className="text-xs text-slate-400">Covering all of Kent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
              <p>&copy; {new Date().getFullYear()} Kent Complete Clearances. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-900 border-t border-red-600 p-2 flex gap-2">
        <a href="tel:01622000000" className="flex-1 bg-red-600 text-white text-center py-2 font-bold uppercase text-xs border border-slate-700 flex items-center justify-center gap-1">
          <Phone className="w-3 h-3" /> Call
        </a>
        <Link to="/contact" className="flex-1 bg-white text-slate-900 text-center py-2 font-bold uppercase text-xs border border-slate-700 flex items-center justify-center gap-1">
          <ArrowRight className="w-3 h-3" /> Quote
        </Link>
      </div>
      <div className="h-12 md:hidden"></div>
    </>
  );
}
