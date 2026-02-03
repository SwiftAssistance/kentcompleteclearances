import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, Phone } from 'lucide-react';
import { Button, SectionHeading } from '../components/ui';

export default function Privacy() {
  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-20 relative overflow-hidden border-b-4 border-red-600">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-5 py-2 mb-6">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-white font-bold uppercase text-sm tracking-wider">Your Data is Safe</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Policy</span>
            </h1>
            <p className="text-slate-300 text-lg font-medium">
              How we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate prose-headings:font-black prose-headings:uppercase">

            <div className="bg-slate-50 border-2 border-slate-200 p-6 mb-8">
              <p className="text-sm text-slate-600 mb-0">
                <strong>Kent Complete Clearances</strong><br />
                Company Registration: 16770749<br />
                Based in Sittingbourne, Kent<br />
                Last updated: January 2025
              </p>
            </div>

            <h2 className="text-xl">1. Information We Collect</h2>
            <p>When you contact us for a quote or use our services, we may collect:</p>
            <ul>
              <li>Your name and contact details (phone number, email address)</li>
              <li>Your address or the address where services are required</li>
              <li>Photos you send us for quotation purposes</li>
              <li>Details about the waste removal services you require</li>
              <li>Payment information when you pay for our services</li>
            </ul>

            <h2 className="text-xl">2. How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul>
              <li>Provide you with quotes for our services</li>
              <li>Deliver the waste removal services you have requested</li>
              <li>Contact you about your booking or enquiry</li>
              <li>Send you waste transfer notes and receipts</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-xl">3. Legal Basis for Processing</h2>
            <p>We process your personal data on the following legal bases:</p>
            <ul>
              <li><strong>Contract:</strong> To fulfil our contractual obligations when you book our services</li>
              <li><strong>Legal obligation:</strong> To comply with waste carrier regulations and maintain waste transfer records</li>
              <li><strong>Legitimate interests:</strong> To respond to enquiries and improve our services</li>
            </ul>

            <h2 className="text-xl">4. Data Retention</h2>
            <p>We keep your personal information for as long as necessary to:</p>
            <ul>
              <li>Provide our services to you</li>
              <li>Comply with legal requirements (waste transfer notes must be kept for 2 years)</li>
              <li>Handle any disputes or complaints</li>
            </ul>
            <p>After this period, we securely delete or anonymise your data.</p>

            <h2 className="text-xl">5. Sharing Your Information</h2>
            <p>We do not sell your personal information. We may share your data with:</p>
            <ul>
              <li>Licensed waste transfer stations (as required by law)</li>
              <li>Our payment processor to handle transactions</li>
              <li>Regulatory authorities if required by law</li>
            </ul>

            <h2 className="text-xl">6. Your Rights</h2>
            <p>Under UK data protection law, you have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal retention requirements)</li>
              <li>Object to processing of your data</li>
              <li>Lodge a complaint with the Information Commissioner's Office (ICO)</li>
            </ul>

            <h2 className="text-xl">7. Cookies</h2>
            <p>Our website uses essential cookies to ensure it functions correctly. We do not use tracking or advertising cookies.</p>

            <h2 className="text-xl">8. Contact Us</h2>
            <p>If you have any questions about this privacy policy or how we handle your data, please contact us:</p>
            <ul>
              <li>Phone: 01622 000 000</li>
              <li>Email: info@kentcompleteclearances.co.uk</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-300 font-medium mb-6">Have questions about your data?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" to="/contact" variant="primary">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Button>
            <a href="tel:01622000000">
              <Button variant="secondary">
                <Phone className="w-5 h-5" /> 01622 000 000
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
