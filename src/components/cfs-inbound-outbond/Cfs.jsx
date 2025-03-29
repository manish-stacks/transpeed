import React from 'react';
import { Ship, Plane, Box, FileCheck, Timer, Shield, Truck, PackageCheck } from 'lucide-react';

function SolutionSection({ title, description, items, isLeft }) {
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 py-16 ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
      <div className="w-full lg:w-1/2">
        <div className={`relative rounded-3xl overflow-hidden aspect-[4/3] transform ${isLeft ? 'lg:-rotate-2' : 'lg:rotate-2'}`}>
          <img 
            src={isLeft ? 
              "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" : 
              "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            }
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30" />
        </div>
      </div>
      
      <div className="w-full lg:w-1/2">
        <div className={`bg-white rounded-3xl p-8 shadow-xl ${isLeft ? 'lg:-ml-12' : 'lg:-mr-12'}`}>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#15557D] to-[#2B92D0] bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-gray-800 mb-8">{description}</p>
          
          <div className="space-y-4">
            {items.map((item, index) => (
              <div 
                key={index}
                className="flex items-start p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 transition-colors"
              >
                <PackageCheck className="w-9 h-9 text-yellow-500 flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="font-bold text-lg text-[#172554]">{item.title}</h3>
                  <p className="text-gray-800 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Cfs() {
  const inboundItems = [
    {
      title: "Unloading & Handling",
      description: "Efficient unloading of cargo from vessels or flights directly to our secure CFS"
    },
    {
      title: "Customs Clearance",
      description: "Fast-track processing and documentation to reduce turnaround time"
    },
    {
      title: "Storage & Segregation",
      description: "Safe and organized storage of cargo with real-time tracking and inventory management"
    },
    {
      title: "De-stuffing & Consolidation",
      description: "Careful handling of cargo to prevent damage and ensure smooth transition"
    },
    {
      title: "Last-Mile Delivery",
      description: "Quick dispatch to final destinations through our well-connected transportation network"
    }
  ];

  const outboundItems = [
    {
      title: "Cargo Consolidation",
      description: "Combining multiple shipments to maximize container utilization and reduce costs"
    },
    {
      title: "Customs Documentation",
      description: "Expert assistance in preparing export documentation and compliance"
    },
    {
      title: "Secure Loading & Stuffing",
      description: "Careful loading of cargo to minimize damage and ensure maximum security"
    },
    {
      title: "Pre-Carriage & Port Delivery",
      description: "Timely delivery to ports or airports for scheduled departures"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500 to-sky-900 dark:bg-grid-white/[0.05] p-8 rounded-2xl shadow-xl text-white py-20">
        <div className="max-w-8xl  mx-auto px-4">
          <div className="max-w-full text-center ">
            <h1 className="text-5xl font-bold mb-6">
              Streamlined CFS Solutions
            </h1>
            <p className="text-xl text-center text-blue-100">
              Experience seamless cargo handling with our comprehensive Container Freight Station services,<br/> 
              designed to optimize your supply chain from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        <SolutionSection
          title="Inbound CFS Solutions"
          description="Our inbound CFS services are designed to ensure quick clearance and smooth handling of imported goods, providing end-to-end visibility and control."
          items={inboundItems}
          isLeft={true}
        />
        
        <SolutionSection
          title="Outbound CFS Solutions"
          description="Our outbound CFS services ensure your exports are handled with precision and efficiency, maximizing container utilization while maintaining cargo security."
          items={outboundItems}
          isLeft={false}
        />
      </div>

      
    </div>
  );
}

export default Cfs;