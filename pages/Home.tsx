import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, MonitorSmartphone, Search } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-white pt-32 pb-24 lg:pt-48 lg:pb-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-8xl font-bold leading-[1.1] tracking-tighter uppercase mb-8">
              First impressions <br />
              <span className="text-gray-500">matter online.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-12 font-light">
              We build high-performance presentation websites for small businesses that turn visitors into customers. No templates, just pure performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-red-700 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-200 group"
              >
                Start Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services"
                className="inline-flex items-center justify-center border border-white/20 hover:bg-white/10 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-200"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            label="What we do" 
            title="Research, design & development under one roof."
            description="We keep it simple and transparent. You focus on your business, we ensure you have a website that attracts clients and tells your story efficiently."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 shadow-sm">
            <div className="bg-white">
              <ServiceCard 
                title="Custom Website Creation"
                description="We build performant websites optimized to convert visitors into clients."
                link="/services"
              />
            </div>
            <div className="bg-white">
              <ServiceCard 
                title="Website Redesign"
                description="We rebuild your website from scratch for a modern experience and better conversion rates."
                link="/services"
              />
            </div>
            <div className="bg-white">
              <ServiceCard 
                title="Maintenance & Support"
                description="We keep your site fast, secure, and updated for a flawless visitor experience."
                link="/services"
              />
            </div>
            <div className="bg-white">
              <ServiceCard 
                title="SEO & UX Audit"
                description="In-depth analysis of elements preventing your website from attracting more potential clients."
                link="/services"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack / Features */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            label="Why Choose Us" 
            title="Different by design."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <Zap className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-bold mb-4">Extreme Performance</h3>
              <p className="text-slate-600 leading-relaxed">
                We code manually using React and Tailwind. No bloated page builders. Your site will load instantly, boosting SEO and user retention.
              </p>
            </div>
            <div className="p-8 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <MonitorSmartphone className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-bold mb-4">Mobile First</h3>
              <p className="text-slate-600 leading-relaxed">
                Over 60% of traffic is mobile. We design for the smallest screen first, ensuring a perfect experience on every device.
              </p>
            </div>
            <div className="p-8 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <Search className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-bold mb-4">SEO Optimized</h3>
              <p className="text-slate-600 leading-relaxed">
                Semantic HTML structure, fast load times, and proper metadata to help Google understand and rank your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <SectionHeader 
            label="Testimonials" 
            title="What others say about us."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-10 relative bg-white shadow-sm">
               <h4 className="text-xl font-bold text-slate-900 mb-6">"Understood the business, not just the code."</h4>
               <p className="text-slate-600 text-lg leading-relaxed mb-8">
                 "I needed a website to showcase our services clearly. DevStudio created exactly what I was looking for - modern, easy to navigate, and trustworthy."
               </p>
               <div>
                 <p className="font-bold text-slate-900">Andrei P.</p>
                 <p className="text-slate-500 text-sm">Small Business Owner</p>
               </div>
            </div>
             <div className="border border-gray-200 p-10 relative bg-white shadow-sm">
               <h4 className="text-xl font-bold text-slate-900 mb-6">"Exactly what we needed."</h4>
               <p className="text-slate-600 text-lg leading-relaxed mb-8">
                 "Our old WordPress site was slow and losing visitors. They rebuilt it from scratch using modern tech. The speed difference is night and day."
               </p>
               <div>
                 <p className="font-bold text-slate-900">Mihaela C.</p>
                 <p className="text-slate-500 text-sm">Marketing Manager</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight max-w-2xl">
              Ready to start your project?
            </h2>
            <Link 
                to="/contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-red-700 text-white px-10 py-5 text-base font-bold uppercase tracking-widest transition-all duration-200 group"
              >
                Get in touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;