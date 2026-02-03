import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, ArrowRight, Phone } from 'lucide-react';
import { Button, SectionHeading } from '../components/ui';

export default function Terms() {
  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-20 relative overflow-hidden border-b-4 border-red-600">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-5 py-2 mb-6">
              <FileCheck className="w-5 h-5 text-green-400" />
              <span className="text-white font-bold uppercase text-sm tracking-wider">Clear & Fair</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Service</span>
            </h1>
            <p className="text-slate-300 text-lg font-medium">
              The terms and conditions for using our waste removal services.
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

            <h2 className="text-xl">1. Our Services</h2>
            <p>Kent Complete Clearances provides waste removal and clearance services across Kent, including:</p>
            <ul>
              <li>House clearances</li>
              <li>Garden waste removal</li>
              <li>Builders and trade waste removal</li>
              <li>Office and commercial clearances</li>
              <li>Single item collection</li>
              <li>Wait and load services</li>
            </ul>

            <h2 className="text-xl">2. Quotes and Pricing</h2>
            <ul>
              <li>All quotes are provided free of charge and without obligation</li>
              <li>Quotes are based on the information and photos you provide</li>
              <li>The quoted price is the price you pay, unless the scope of work changes on arrival</li>
              <li>If there is significantly more waste than described, we will discuss the revised price before starting work</li>
              <li>Payment is due upon completion of the work</li>
            </ul>

            <h2 className="text-xl">3. Booking and Cancellation</h2>
            <ul>
              <li>Bookings are confirmed once we agree a date and time with you</li>
              <li>We will give you a time window for arrival (typically 2 hours)</li>
              <li>If you need to cancel or reschedule, please give us at least 24 hours notice</li>
              <li>Same-day cancellations may incur a call-out fee</li>
            </ul>

            <h2 className="text-xl">4. Access and Responsibility</h2>
            <ul>
              <li>You must ensure we have clear access to the items being removed</li>
              <li>You confirm that you have the right to dispose of all items being removed</li>
              <li>We will not remove items that appear to be of significant value without your explicit confirmation</li>
              <li>You are responsible for disconnecting any appliances before our arrival</li>
            </ul>

            <h2 className="text-xl">5. Items We Cannot Take</h2>
            <p>For safety and legal reasons, we cannot remove:</p>
            <ul>
              <li>Hazardous materials (asbestos, chemicals, paint, solvents)</li>
              <li>Gas cylinders or pressurised containers</li>
              <li>Clinical or medical waste</li>
              <li>Firearms or ammunition</li>
              <li>Any illegal items</li>
            </ul>
            <p>If you are unsure whether we can take an item, please ask when requesting your quote.</p>

            <h2 className="text-xl">6. Care of Property</h2>
            <ul>
              <li>We take care to protect your property during the clearance</li>
              <li>We will use dust sheets and floor protection where appropriate</li>
              <li>Any accidental damage should be reported to us immediately</li>
              <li>We are fully insured for public liability</li>
            </ul>

            <h2 className="text-xl">7. Waste Disposal</h2>
            <ul>
              <li>All waste is disposed of at licensed transfer stations</li>
              <li>We are registered with the Environment Agency as an Upper Tier Waste Carrier</li>
              <li>You will receive a waste transfer note for every job</li>
              <li>We recycle or donate approximately 98% of all waste collected</li>
            </ul>

            <h2 className="text-xl">8. Liability</h2>
            <ul>
              <li>Our liability is limited to the cost of the services provided</li>
              <li>We are not liable for items disposed of at your request</li>
              <li>We are not liable for items left on site that were not specified for removal</li>
            </ul>

            <h2 className="text-xl">9. Complaints</h2>
            <p>We aim to provide excellent service on every job. If you are not satisfied:</p>
            <ul>
              <li>Contact us as soon as possible to discuss the issue</li>
              <li>We will investigate and respond within 7 days</li>
              <li>We will work to resolve the issue fairly</li>
            </ul>

            <h2 className="text-xl">10. Contact Information</h2>
            <p>For any questions about these terms or our services:</p>
            <ul>
              <li>Phone: 01622 000 000</li>
              <li>WhatsApp: 07000 000 000</li>
              <li>Email: info@kentcompleteclearances.co.uk</li>
            </ul>

          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-300 font-medium mb-6">Ready to book a clearance?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" to="/contact" variant="primary">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
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
