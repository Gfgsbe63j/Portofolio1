import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const ServiceCard: React.FC<ServiceItem> = ({ title, description, link }) => {
  return (
    <div className="group relative flex flex-col h-full border border-gray-200 p-8 hover:bg-gray-50 transition-colors duration-300">
      <div className="flex-grow">
        <h3 className="text-slate-900 mb-4 text-2xl font-bold">{title}</h3>
        <p className="text-slate-600 mb-8 text-base leading-relaxed">
          {description}
        </p>
      </div>
      <Link 
        to={link}
        className="inline-flex items-center text-slate-900 font-bold uppercase text-sm tracking-widest border-b-2 border-transparent hover:border-accent hover:text-accent transition-all pb-1 group-hover:pl-2"
      >
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;