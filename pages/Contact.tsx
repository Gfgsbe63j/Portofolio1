import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
       <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Info Side */}
            <div>
              <SectionHeader 
                label="Contact Us" 
                title="Let's build something great."
                description="Ready to start your project or have a question? Fill out the form or reach us directly."
              />
              
              <div className="space-y-8 mt-12">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <a href="mailto:hello@devstudio.com" className="text-slate-600 hover:text-accent">hello@devstudio.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone</h4>
                    <p className="text-slate-600">+40 700 000 000</p>
                    <p className="text-sm text-slate-500">Mon-Fri, 9am - 5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                     <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Location</h4>
                    <p className="text-slate-600">Timisoara, Romania</p>
                    <p className="text-sm text-slate-500">Working 100% Remote</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-gray-50 p-8 md:p-12 border border-gray-200 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Send us a message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">Project Type</label>
                  <select 
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option>New Website</option>
                    <option>Redesign</option>
                    <option>Maintenance</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..." 
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-accent hover:bg-red-700 text-white font-bold py-4 uppercase tracking-widest transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;