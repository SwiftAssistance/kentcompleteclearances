import React, { useState, useEffect } from 'react';
import { 
  Truck, 
  Trash2, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Recycle, 
  Sofa, 
  TreePine, 
  Construction, 
  FileText,
  Star,
  Menu,
  X,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

// --- Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "font-bold py-3 px-6 transition-all duration-200 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-white text-slate-900 hover:bg-slate-50",
    outline: "bg-transparent text-slate-900 border-slate-900 hover:bg-slate-100"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-12 ${align === 'left' ? 'text-left' : 'text-center'}`}>
    <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
        {subtitle}
      </p>
    )}
    <div className={`h-1 w-24 bg-red-600 mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
  </div>
);

const TownBadge = ({ name }) => (
  <span className="inline-block px-4 py-2 bg-slate-100 border border-slate-900 text-slate-800 font-bold text-sm hover:bg-red-600 hover:text-white transition-colors cursor-default">
    {name}
  </span>
);

// Updated Review Card - Removed Date
const ReviewCard = ({ name, location, text }) => (
  <div className="bg-slate-50 p-8 md:p-12 border-2 border-slate-900 relative h-full flex flex-col justify-center text-center min-h-[350px]">
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white p-2 border-2 border-slate-900 z-10">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="w-5 h-5 fill-current" />
        ))}
      </div>
    </div>
    <div className="mb-8 mt-4">
       <p className="text-slate-700 font-medium text-xl md:text-2xl italic leading-relaxed">
        "{text}"
       </p>
    </div>
    <div className="border-t-2 border-slate-200 pt-6 inline-block mx-auto">
      <p className="font-black text-slate-900 uppercase tracking-wider text-lg">{name}</p>
      <p className="text-sm text-red-600 font-bold flex items-center justify-center gap-1 mt-1">
        <MapPin className="w-4 h-4" /> {location}
      </p>
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  // Scroll handler for navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const reviews = [
    {
      name: "Sarah Jenkins",
      location: "Maidstone",
      text: "Absolutely brilliant service. The lads arrived on time, cleared my mum's garage in under an hour and swept up after. Much easier than hiring a skip."
    },
    {
      name: "Dave Miller",
      location: "Ashford",
      text: "Cheaper than the quote I got from a big national company. Friendly team, checked everything before taking it. Highly recommend for garden waste."
    },
    {
      name: "The Red Lion Pub",
      location: "Canterbury",
      text: "Use Kent Complete Clearances for all our commercial waste. Regular, reliable and they provide all the paperwork we need for the council."
    },
    {
      name: "Mrs. P. Thompson",
      location: "Sevenoaks",
      text: "I was worried about a sofa that wouldn't fit out the door. They dismantled it carefully and took it away. Very polite young men."
    },
    {
      name: "Construction Plus Ltd",
      location: "Dartford",
      text: "Top notch for wait and load. Drivers actually help load the van which is a rarity these days. Good price for rubble disposal."
    },
    {
      name: "Mike Stevens",
      location: "Tonbridge",
      text: "Great communication via WhatsApp. Sent a photo, got a price, job done next day. Couldn't ask for more."
    }
  ];

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-200">
      
      {/* Top Bar - Contact Info */}
      <div className="bg-slate-900 text-white py-2 px-4 text-xs md:text-sm font-bold tracking-wide">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-red-500" /> Licensed Waste Carrier (CBDU12345)</span>
            <span className="hidden md:flex items-center gap-2"><Clock className="w-4 h-4 text-red-500" /> Same Day Service Available</span>
          </div>
          <a href="tel:01622000000" className="hover:text-red-400 transition-colors">Maidstone & All Kent: 01622 000 000</a>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 border-b-2 border-slate-900 ${scrolled ? 'bg-white/95 backdrop-blur-sm py-3' : 'bg-white py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <div className="bg-red-600 text-white p-2 border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black uppercase leading-none tracking-tighter">
                Kent Complete<br/><span className="text-red-600">Clearances</span>
              </h1>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wider">
            <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
            <a href="#areas" className="hover:text-red-600 transition-colors">Areas</a>
            <a href="#reviews" className="hover:text-red-600 transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-red-600 transition-colors">FAQ</a>
            <Button variant="primary" className="py-2 px-4 text-sm">
              <Phone className="w-4 h-4" /> Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t-2 border-slate-900 p-4 absolute w-full shadow-xl">
            <div className="flex flex-col gap-4 font-bold uppercase">
              <a href="#services" onClick={toggleMenu} className="py-2 border-b border-slate-100">Services</a>
              <a href="#areas" onClick={toggleMenu} className="py-2 border-b border-slate-100">Areas Covered</a>
              <a href="#reviews" onClick={toggleMenu} className="py-2 border-b border-slate-100">Reviews</a>
              <a href="tel:01622000000" className="py-3 bg-red-600 text-center text-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                Call 01622 000 000
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative bg-white border-b-2 border-slate-900 overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50 pointer-events-none"></div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="inline-block bg-red-100 border-2 border-slate-900 px-4 py-1 transform -rotate-2">
                <span className="text-red-700 font-bold uppercase text-sm tracking-wider">Kent's #1 Local Waste Team</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] uppercase tracking-tight">
                We Load.<br/>
                We Clear.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">You Relax.</span>
              </h2>
              
              <p className="text-xl text-slate-600 font-medium max-w-md">
                Cheaper than a skip. Faster than the council. Fully licensed waste removal for homes and businesses across Kent.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="w-full sm:w-auto text-lg">
                  Book a Collection
                </Button>
                <Button variant="secondary" className="w-full sm:w-auto text-lg">
                  Send us a Photo <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </div>

              <div className="pt-6 flex items-center gap-6 text-sm font-bold text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600 w-5 h-5" /> No Hidden Fees
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600 w-5 h-5" /> 98% Recycled
                </div>
              </div>
            </div>

            {/* Hero Image / Placeholder */}
            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] bg-slate-200 border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden group">
                 {/* DEVELOPER NOTE FOR CLIENT: 
                    Replace this SVG block with an actual photo of your team or truck.
                    Ideally a photo of a truck in front of a recognizable Kent landmark 
                    (like Rochester Castle or just a Kent road sign) builds massive trust.
                 */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-400">
                    <Truck className="w-24 h-24 mb-4 text-slate-300" />
                    <p className="font-bold uppercase text-center px-8">
                      Owner: Insert photo of your truck here.<br/>
                      <span className="text-sm font-normal text-slate-500 normal-case">Real photos convert 40% better than stock photos!</span>
                    </p>
                 </div>
                 
                 {/* Overlay Badge */}
                 <div className="absolute bottom-6 right-6 bg-red-600 text-white p-4 border-2 border-slate-900 shadow-[4px_4px_0px_0px_white] text-center">
                    <p className="text-xs uppercase font-bold opacity-90">Rated</p>
                    <p className="text-3xl font-black leading-none">5.0</p>
                    <div className="flex text-yellow-300 mt-1">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Trust Bar */}
      <section className="bg-slate-900 text-white py-12 border-b-2 border-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center opacity-80">
            <div className="flex flex-col items-center gap-2">
              <FileText className="w-8 h-8 text-red-500" />
              <span className="font-bold uppercase">Licensed Carrier</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Recycle className="w-8 h-8 text-red-500" />
              <span className="font-bold uppercase">Eco-Friendly</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-8 h-8 text-red-500" />
              <span className="font-bold uppercase">Rapid Response</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle2 className="w-8 h-8 text-red-500" />
              <span className="font-bold uppercase">Insured Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Custom "Non-Grid" Layout */}
      <section id="services" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Services" 
            subtitle="No generic packages. We clear exactly what you need cleared."
          />

          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            
            {/* Service 1: House Clearance (Big Feature - Main Service) */}
            <div className="border-4 border-slate-900 p-8 shadow-[8px_8px_0px_0px_rgba(220,38,38,1)] bg-white flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group">
               {/* Decorative '01' Background */}
               <div className="absolute top-0 right-0 p-4 font-black text-9xl text-slate-100 -z-10 group-hover:text-red-50 transition-colors select-none">01</div>
               
               <div className="shrink-0 bg-red-600 text-white p-6 border-2 border-slate-900 transform rotate-1 group-hover:rotate-6 transition-transform">
                  <Sofa className="w-12 h-12" />
               </div>
               <div className="grow text-center md:text-left z-10">
                  <h3 className="text-3xl font-black uppercase mb-3 tracking-tight">House Clearance</h3>
                  <p className="text-lg text-slate-600 mb-6 font-medium">From single sofas to full probate clearances. We handle the heavy lifting, loading, and disposal so you don't have to lift a finger.</p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                     <span className="bg-slate-100 border-2 border-slate-900 px-3 py-1 font-bold text-sm">Furniture</span>
                     <span className="bg-slate-100 border-2 border-slate-900 px-3 py-1 font-bold text-sm">Carpets</span>
                     <span className="bg-slate-100 border-2 border-slate-900 px-3 py-1 font-bold text-sm">Appliances</span>
                     <span className="bg-slate-100 border-2 border-slate-900 px-3 py-1 font-bold text-sm">Loft Junk</span>
                  </div>
               </div>
               <div className="shrink-0 z-10">
                  <Button variant="outline" className="whitespace-nowrap group-hover:bg-slate-900 group-hover:text-white">
                    Get Price <ChevronRight className="w-4 h-4" />
                  </Button>
               </div>
            </div>

            {/* Service 2 & 3: Garden & Builders (Split Screen Layout) */}
            <div className="grid md:grid-cols-2 gap-8">
               {/* Garden - Dark Theme */}
               <div className="border-4 border-slate-900 p-8 bg-slate-900 text-white shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden group">
                  <div className="absolute top-4 right-4 text-slate-700 font-black text-6xl opacity-30 select-none">02</div>
                  <TreePine className="w-12 h-12 text-green-400 mb-6 transform group-hover:-translate-y-2 transition-transform" />
                  <h3 className="text-2xl font-black uppercase mb-3 text-white">Garden Waste</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">Overgrown jungle? Old shed? We take green waste, soil, rubble, and rotten fencing. We sweep the patio before we leave.</p>
                  <ul className="space-y-2 mb-6 text-sm font-bold text-slate-400">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400"/> Green Waste</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400"/> Shed Demolition</li>
                  </ul>
                  <Button className="w-full bg-green-600 border-none hover:bg-green-500 text-white shadow-none">Get Garden Quote</Button>
               </div>

               {/* Builders - Construction Theme (Yellow) */}
               <div className="border-4 border-slate-900 p-8 bg-yellow-400 text-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden group">
                  <div className="absolute top-4 right-4 text-yellow-600 font-black text-6xl opacity-20 select-none">03</div>
                  <Construction className="w-12 h-12 text-slate-900 mb-6 transform group-hover:-translate-y-2 transition-transform" />
                  <h3 className="text-2xl font-black uppercase mb-3">Builders Waste</h3>
                  <p className="text-slate-900 mb-6 font-bold leading-relaxed">Cheaper than a skip permit. We turn up, load your rubble, plasterboard, and timber, and drive away immediately.</p>
                   <ul className="space-y-2 mb-6 text-sm font-bold text-slate-800">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black"/> Wait & Load</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black"/> Kitchen Rip-outs</li>
                  </ul>
                  <Button variant="outline" className="w-full bg-white border-black">Get Trade Quote</Button>
               </div>
            </div>

            {/* Service 4: Office (Wide Slim Strip) */}
            <div className="border-4 border-slate-900 p-8 bg-slate-50 shadow-[8px_8px_0px_0px_rgba(220,38,38,1)] flex flex-col md:flex-row items-center gap-6 group hover:bg-white transition-colors">
                <div className="shrink-0 p-4 bg-white border-2 border-slate-900 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Trash2 className="w-8 h-8" />
                </div>
                <div className="grow text-center md:text-left">
                   <h3 className="text-xl font-black uppercase mb-1">Commercial & Office Clearance</h3>
                   <p className="text-slate-600 text-sm font-medium">Secure disposal of WEEE (electronics), confidential paper waste, and office furniture. VAT invoices provided.</p>
                </div>
                <Button variant="primary" className="shrink-0">
                  Business Enquiry
                </Button>
            </div>

             {/* Call to Action Box - Distinct from Services */}
             <div className="bg-red-600 p-6 border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
                <div>
                   <h3 className="text-2xl font-black text-white uppercase">Not sure if we take it?</h3>
                   <p className="text-red-100 font-medium">Just send us a photo on WhatsApp and we'll give you an instant quote.</p>
                </div>
                <div className="bg-white px-4 py-2 font-mono font-bold border-2 border-slate-900 text-slate-900 transform rotate-2">
                  07000 000 000
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Areas Covered Section - With Map */}
      <section id="areas" className="py-20 bg-slate-100 border-y-2 border-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading title="Areas Covered" subtitle="We're local, reliable, and ready to roll." />
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            
            {/* Map Column */}
            <div className="order-2 lg:order-1">
               <div className="bg-white p-2 border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] h-[400px]">
                  <iframe 
                    title="Kent Service Area"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d319088.0831627931!2d0.15833215809707165!3d51.258835848529285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df310e30206141%3A0x676e191986420551!2sMaidstone%2C%20Kent!5e0!3m2!1sen!2suk!4v1709400000000!5m2!1sen!2suk" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
               </div>
            </div>

            {/* Content Column */}
            <div className="order-1 lg:order-2 space-y-8">
               <div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase mb-4">
                    Based in Maidstone,<br/>Serving All of <span className="text-red-600 underline decoration-4 decoration-slate-900 underline-offset-4">Kent</span>
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Our trucks are strategically located in Maidstone and Ashford, allowing us to offer same-day service to most major towns.
                  </p>
               </div>

               <div className="bg-white p-6 border-2 border-slate-900">
                  <h3 className="font-bold text-slate-400 uppercase text-xs mb-4 tracking-widest">Primary Service Locations</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Maidstone', 'Ashford', 'Canterbury', 'Dartford', 'Sevenoaks', 'Tunbridge Wells', 'Gillingham', 'Chatham', 'Rochester', 'Sittingbourne', 'Faversham', 'Whitstable', 'Herne Bay', 'Margate', 'Dover', 'Folkestone', 'Tonbridge', 'Gravesend', 'Swanley'].map((town) => (
                      <TownBadge key={town} name={town} />
                    ))}
                  </div>
               </div>

               <div className="flex items-center gap-4 p-4 bg-red-100 border-l-4 border-red-600">
                  <MapPin className="w-8 h-8 text-red-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-sm">Responsible Disposal</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      All waste is taken to authorized transfer stations in Cuxton and Lenham.
                    </p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reviews Section - Single Slide with Navigation */}
      <section id="reviews" className="py-20 bg-white border-b-2 border-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading title="What The Locals Say" subtitle="Real feedback from our customers." />
          
          <div className="max-w-4xl mx-auto relative">
             
             {/* Navigation Buttons */}
             <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10">
                <button 
                    onClick={prevReview}
                    className="bg-white border-2 border-slate-900 p-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:bg-slate-50 active:shadow-none active:translate-y-[2px] active:translate-x-[2px] transition-all"
                    aria-label="Previous review"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
             </div>
             
             <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10">
                <button 
                    onClick={nextReview}
                    className="bg-white border-2 border-slate-900 p-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:bg-slate-50 active:shadow-none active:translate-y-[2px] active:translate-x-[2px] transition-all"
                    aria-label="Next review"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
             </div>

             {/* Review Card Container */}
             <div className="px-4 md:px-0">
                <div className="transition-opacity duration-300">
                    <ReviewCard {...reviews[activeReviewIndex]} />
                </div>
             </div>

             {/* Dots Indicator */}
             <div className="flex justify-center gap-2 mt-8">
                {reviews.map((_, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setActiveReviewIndex(idx)}
                        className={`w-3 h-3 rounded-full border-2 border-slate-900 transition-colors ${idx === activeReviewIndex ? 'bg-red-600' : 'bg-white'}`}
                        aria-label={`Go to review ${idx + 1}`}
                    />
                ))}
             </div>

          </div>
        </div>
      </section>

      {/* CTA / Booking Section */}
      <section id="contact" className="py-20 bg-red-600 text-white relative">
        <div className="container mx-auto px-4">
          <div className="bg-white text-slate-900 max-w-4xl mx-auto border-4 border-slate-900 shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">Ready to Clear the Clutter?</h2>
              <p className="text-lg text-slate-600">Fill in the form below or call us for an instant price.</p>
            </div>

            <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="font-bold uppercase text-xs tracking-wider text-slate-500">Your Name</label>
                <input type="text" className="w-full bg-slate-50 border-2 border-slate-300 p-4 focus:border-red-600 focus:outline-none transition-colors font-bold" placeholder="John Smith" />
              </div>
              <div className="space-y-2">
                <label className="font-bold uppercase text-xs tracking-wider text-slate-500">Phone Number</label>
                <input type="tel" className="w-full bg-slate-50 border-2 border-slate-300 p-4 focus:border-red-600 focus:outline-none transition-colors font-bold" placeholder="07000 000 000" />
              </div>
              <div className="space-y-2">
                <label className="font-bold uppercase text-xs tracking-wider text-slate-500">Postcode</label>
                <input type="text" className="w-full bg-slate-50 border-2 border-slate-300 p-4 focus:border-red-600 focus:outline-none transition-colors font-bold" placeholder="e.g. ME14 1XX" />
              </div>
              <div className="space-y-2">
                <label className="font-bold uppercase text-xs tracking-wider text-slate-500">Service Needed</label>
                <select className="w-full bg-slate-50 border-2 border-slate-300 p-4 focus:border-red-600 focus:outline-none transition-colors font-bold appearance-none">
                  <option>House Clearance</option>
                  <option>Garden Waste</option>
                  <option>Builders Waste</option>
                  <option>Office Clearance</option>
                  <option>Other / Mixed</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="font-bold uppercase text-xs tracking-wider text-slate-500">Description of Items</label>
                <textarea className="w-full bg-slate-50 border-2 border-slate-300 p-4 focus:border-red-600 focus:outline-none transition-colors font-bold h-32" placeholder="Roughly what needs going? e.g. 1 sofa, 10 black bags and a fridge..."></textarea>
              </div>
              <div className="md:col-span-2">
                <Button className="w-full text-xl py-4">
                  Get My Free Quote
                </Button>
                <p className="text-center text-xs text-slate-400 mt-4">
                  We respect your data. No spam, ever.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h5 className="text-white font-black uppercase tracking-wider mb-4">Kent Complete Clearances</h5>
              <p className="text-sm mb-4">
                Professional, licensed waste removal services for Kent. We recycle 98% of what we collect.
              </p>
              <div className="flex gap-2 text-white">
                <div className="p-2 bg-slate-800 border border-slate-700 hover:bg-red-600 transition-colors cursor-pointer"><Phone className="w-4 h-4"/></div>
                <div className="p-2 bg-slate-800 border border-slate-700 hover:bg-red-600 transition-colors cursor-pointer"><MapPin className="w-4 h-4"/></div>
              </div>
            </div>
            
            <div>
              <h5 className="text-white font-bold uppercase tracking-wider mb-4">Services</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-500">House Clearance</a></li>
                <li><a href="#" className="hover:text-red-500">Garden Waste</a></li>
                <li><a href="#" className="hover:text-red-500">Office Clearouts</a></li>
                <li><a href="#" className="hover:text-red-500">Wait & Load</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold uppercase tracking-wider mb-4">Legal</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-500">Terms of Service</a></li>
                <li><a href="#" className="hover:text-red-500">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-red-500">Sitemap</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold uppercase tracking-wider mb-4">Contact</h5>
              <p className="text-sm mb-2 font-bold text-white">01622 000 000</p>
              <p className="text-sm mb-4">info@kentcompleteclearances.co.uk</p>
              <div className="bg-slate-800 p-4 border border-slate-700 text-xs">
                <p className="font-bold text-white mb-1">Environment Agency Registered</p>
                <p>Upper Tier Carrier Dealer</p>
                <p className="font-mono text-slate-500">Reg: CBDU123456</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} Kent Complete Clearances. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed with <span className="text-red-600">♥</span> in Kent.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}