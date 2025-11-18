import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Check, ArrowRight } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-start w-full py-5 text-left group hover:bg-gray-50 transition-colors rounded-md px-2"
      >
        <span className={`font-semibold text-lg lg:text-xl transition-colors pr-8 ${isOpen ? 'text-accent' : 'text-slate-900 group-hover:text-accent'}`}>
          {question}
        </span>
        <div className="mt-1 flex-shrink-0">
           {isOpen ? (
              <ChevronUp className="w-6 h-6 text-accent" />
           ) : (
              <ChevronDown className="w-6 h-6 text-slate-900 group-hover:text-accent" />
           )}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out px-2 ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const extras = [
    { name: "Custom email address", price: "EUR €20" },
    { name: "Google Analytics 4 Integration", price: "EUR €50" },
    { name: "Google Search Console Integration", price: "EUR €40" },
    { name: "Google Maps Integration", price: "EUR €40" },
    { name: "Extra pages", price: "EUR €100 per page" },
    { name: "CMS Integration (blog / news / events)", price: "EUR €300" },
    { name: "Google Calendar/Calendly Integration", price: "EUR €40" },
    { name: "Whatsapp button integration", price: "EUR €30" },
    { name: "Domain registration and configuration", price: "EUR €20" },
    { name: "1 hour web dev", price: "EUR €50" },
  ];

  const faqs = [
    { question: "Why collaborate with your company?", answer: "We treat every project as a partnership, focusing on your business goals rather than just delivering code. Our personalized approach ensures a website that truly represents your brand." },
    { question: "Do you use templates?", answer: "No. We believe in the power of custom code. Templates often come with bloated code that slows down your site. We build from scratch for performance and security." },
    { question: "Is website maintenance included?", answer: "Basic security configuration is included. For ongoing updates, backups, and content changes, we offer affordable monthly maintenance packages." },
    { question: "How is payment made?", answer: "We operate on a milestone basis: 50% deposit to start the project and the remaining 50% upon your final approval, before the site goes live." },
    { question: "Why is a performant website important?", answer: "Performance is key to retaining visitors. A delay of even a second can cause users to leave. Fast sites also rank significantly better on Google." },
    { question: "Do I need to provide the content?", answer: "You know your business best, so your input is vital. However, we can help refine your text to ensure it persuades visitors and is optimized for search engines." },
    { question: "Why does it cost this amount?", answer: "You are paying for expertise, custom design, and a high-performance technical solution. We don't cut corners, ensuring your investment yields long-term results." },
    { question: "If I have an old site, can you redesign it?", answer: "Yes! We specialize in redesigns. We can take your outdated site and transform it into a modern, high-converting digital asset." }
  ];

  return (
    <div className="pt-20 font-sans text-slate-900">
      
      {/* Pricing Section */}
      <section className="bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-40">
          <div className="flex flex-col xl:flex-row gap-12 xl:gap-20 items-start">
            
            {/* Left Content */}
            <div className="xl:w-1/2 space-y-8">
              <span className="text-accent font-bold text-sm uppercase tracking-widest">PREMIUM WEB UTILITY</span>
              <h1 className="text-3xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
                How much does a presentation website cost?
              </h1>
              <div className="space-y-6 text-lg lg:text-xl text-slate-600 leading-relaxed font-normal">
                <p>
                  We know you think well before investing in a new website. You've probably looked at many firms promising cheap websites using ready-made templates without knowing it, but your business deserves better art.
                </p>
                <p>
                  We will develop a completely custom website for you, built from zero especially for you.
                </p>
                <p>
                  We focus on elements that bring real value: professional design that represents the brand, technical excellence, and a structure that transforms visitors into loyal clients.
                </p>
              </div>
            </div>

            {/* Right Pricing Card */}
            <div className="xl:w-1/2 w-full">
              <div className="border border-slate-900/10 bg-white p-8 sm:p-12 shadow-md flex flex-col gap-8">
                <div className="space-y-2">
                   <p className="text-slate-900 text-xl lg:text-2xl font-semibold tracking-tight">Standard Package</p>
                   <div className="flex items-baseline gap-2 pt-4">
                      <span className="text-lg text-slate-500 font-medium uppercase">EUR</span>
                      <span className="text-4xl lg:text-5xl font-bold text-slate-900">€1200</span>
                   </div>
                   <p className="text-sm text-slate-500 mt-2">Starting price *</p>
                </div>

                <hr className="border-slate-900/10" />
                
                <div className="space-y-6">
                   <p className="font-semibold text-xl lg:text-2xl tracking-tight text-slate-900">Includes:</p>
                   <ul className="space-y-4">
                     {[
                       "5 pages in total",
                       "Custom design & structure",
                       "Copywriting oriented to client",
                       "Responsive design for any device",
                       "Competitor research",
                       "Guaranteed 90+ Google Pagespeed",
                       "Attention to User Experience (UX)",
                       "Advanced security (SSL certificate)",
                       "Contact form",
                       "Hosting secured by us",
                       "Legal pages (Terms, Privacy, Cookies)",
                       "GDPR Cookie Module (if applicable)",
                       "On-page SEO Optimization"
                     ].map((item, i) => (
                       <li key={i} className="flex items-start gap-3 text-base lg:text-lg text-slate-600 leading-relaxed">
                         <div className="mt-1 text-accent flex-shrink-0">
                            <Check className="w-5 h-5" />
                         </div>
                         {item}
                       </li>
                     ))}
                   </ul>
                </div>

                <Link 
                  to="/contact" 
                  className="block w-full text-center bg-accent hover:bg-red-700 text-white py-4 px-6 text-base font-bold uppercase tracking-widest transition-all duration-200 mt-4"
                >
                  Start a Project
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Extra Services Section */}
      <section className="bg-gray-50 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-40">
          <h2 className="text-3xl lg:text-6xl font-bold text-slate-900 mb-12 tracking-tight">Extra Services</h2>
          
          <div className="flex flex-col border border-slate-900/10 shadow-md rounded-sm overflow-hidden">
            {extras.map((item, index) => (
              <div 
                key={index} 
                className={`
                  flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 
                  px-6 py-5 md:px-8 md:py-6
                  ${index !== extras.length - 1 ? 'border-b border-slate-900/10' : ''} 
                  ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                `}
              >
                <span className="text-slate-600 text-base lg:text-xl leading-relaxed">{item.name}</span>
                <span className="text-slate-900 font-bold text-base lg:text-xl whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-20 lg:py-40 border-b border-white/10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
             <h2 className="text-3xl lg:text-6xl font-bold text-white tracking-tight leading-tight">Start a project?</h2>
             <Link 
               to="/contact" 
               className="inline-flex items-center justify-center bg-accent hover:bg-red-700 text-white px-8 py-4 text-base font-bold uppercase tracking-widest transition-all duration-200 group"
             >
               Contact Us
               <div className="relative ml-2 w-5 h-5 overflow-hidden">
                 <ArrowRight className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4 w-5 h-5" />
                 <ArrowRight className="absolute transition-all duration-200 group-hover:translate-y-0 group-hover:translate-x-0 -translate-x-4 w-5 h-5" />
               </div>
             </Link>
           </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 lg:py-40 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-6xl font-bold text-slate-900 mb-16 tracking-tight">Probably you are wondering</h2>
          
          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            <div className="w-full md:flex-1 space-y-2">
              {faqs.slice(0, 4).map((faq, i) => (
                <FAQItem key={i} {...faq} />
              ))}
            </div>
            <div className="w-full md:flex-1 space-y-2">
              {faqs.slice(4, 8).map((faq, i) => (
                 <FAQItem key={i + 4} {...faq} />
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;