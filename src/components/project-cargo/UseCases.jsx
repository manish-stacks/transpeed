import React from 'react';
import { Truck, Building2, Factory, Wind, Drill, Power, Clock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function UseCaseCard({ icon: Icon, title, description }) {
  return (
    <div 
      variants={fadeIn}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-yellow-500 mr-3" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function UseCases() {
  return (
    <div className="min-h-screen bg-[#D3EDFF]">
      {/* Hero Section */}
      <section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative h-[600px] flex items-center justify-center"
      >
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Transpeed Cargo
          </h1>
          <p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Your trusted partner in specialized cargo solutions
          </p>
        </div>
      </section>

      {/* Use Cases Section */}
      <section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-[#D3EDFF] px-4 max-w-7xl mx-auto"
      >
        <h2 
          variants={fadeIn}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Industry Solutions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UseCaseCard
            icon={Building2}
            title="Construction & Infrastructure"
            description="Transporting heavy construction materials and equipment for large-scale infrastructure projects."
          />
          <UseCaseCard
            icon={Drill}
            title="Oil & Gas and Energy"
            description="Handling sensitive and high-value components for offshore platforms and refineries."
          />
          <UseCaseCard
            icon={Factory}
            title="Mining & Industrial"
            description="Shipping large mining machinery and industrial equipment to remote locations."
          />
          <UseCaseCard
            icon={Power}
            title="Power Generation"
            description="Delivering transformers, turbines, and other oversized components for power plants."
          />
          <UseCaseCard
            icon={Wind}
            title="Renewable Energy"
            description="Managing complex logistics for renewable energy installations like wind turbines."
          />
          <UseCaseCard
            icon={Truck}
            title="Manufacturing"
            description="Transporting factory equipment and production lines with minimal downtime."
          />
        </div>
      </section>

      {/* Execution Section */}
      <section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-[#0F1A42] text-white py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2 
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16"
          >
            Seamless Execution from Start to Finish
          </h2>
          
          <div 
            variants={fadeIn}
            className="bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500 to-sky-900 dark:bg-grid-white/[0.05] p-8 rounded-2xl shadow-xl"
          >
            <p className="text-lg text-gray-50 mb-8 text-center">
              At Transpeed Cargo, we manage every detail — from initial feasibility studies and
              route planning to securing permits and arranging specialized equipment. Our
              commitment to operational excellence ensures that even the most challenging
              projects are delivered on time and within budget.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-50">Comprehensive feasibility studies</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-50">Strategic route planning</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-50">Permit acquisition</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-50">Specialized equipment arrangement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 px-4 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Partner with Transpeed Cargo
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience reliable and cost-effective Project Cargo solutions tailored to your needs
          </p>
          <Link href={'/contact-us'} className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default UseCases;