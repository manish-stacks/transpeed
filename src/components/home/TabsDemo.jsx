"use client";
import { Globe, PlaneTakeoff, Ship, Truck, House, TrainFront, PencilRuler, ChartNoAxesCombined, PackageSearch, FileText } from 'lucide-react';
import { Tabs } from "../ui/tabs";
import { useState } from 'react';

export function TabsDemo() {
  const [clamOns, setClamOns] = useState(false);

  const handleClamp = () => {
    setClamOns(prev => !prev);
  };

  const tabs = [
    {
      title: "Logistics",
      value: "logistics",
      content: (
        <div className="min-h-[600px] w-full relative rounded-2xl p-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500 to-sky-900 mb-20">
          <p className="text-xl md:text-4xl font-bold text-white text-center">Logistics</p>
          <div className="max-w-6xl mx-auto px-4 py-5 text-center">
            <p
              className={`text-[16px] whitespace-pre-wrap ${clamOns ? "line-clamp-none" : "line-clamp-2"} text-white font-normal leading-relaxed mb-6`}
            >
              Transpeed Cargo Pvt Ltd is India’s one of the top logistics solutions provider. Established in 2016 with the vision to provide Easy, Efficient and Economical integrated logistics solutions, Transpeed Cargo Pvt Ltd today is a reflection of its founder's passion for innovative services and belief in ethical business practices, where continuous emphasis is placed on delivering the highest standards of customer satisfaction. The founder with their experience in various import/export, sales and managerial positions focused to provide innovative, focused customer-oriented solutions to the consolidation and freight forwarding industry.
            </p>
            <div className="md:hidden">
              <button onClick={handleClamp} className="text-black">
                {clamOns ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
          {/* ... other Logistics tab content ... */}
          <div className="max-w-6xl mx-auto px-4 pb-10">
            <div className="grid md:grid-cols-2 gap-2">
              <div className="space-y-2">
                <div className="flex items-start rounded-md bg-yellow-500 text-gray-900 gap-4 px-4 py-2">
                  <PlaneTakeoff className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Air Freight</h3>
                  </div>
                </div>
                <div className="flex items-start rounded-md bg-yellow-500 text-gray-900 gap-4 px-4 py-2">
                  <Ship className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">SEA Freight</h3>
                  </div>
                </div>
                <div className="flex items-start rounded-md bg-yellow-500 text-gray-900 gap-4 px-4 py-2">
                  <Truck className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Road Transportation</h3>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start rounded-md bg-yellow-500 text-gray-900 gap-4 px-4 py-2">
                  <Globe className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Warehousing</h3>
                  </div>
                </div>
                <div className="flex items-start rounded-md bg-yellow-500 text-gray-900 gap-4 px-4 py-2">
                  <House className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Custom Clearence</h3>
                  </div>
                </div>
                <div className="flex items-start rounded-md bg-yellow-500 text-gray-900 gap-4 px-4 py-2">
                  <TrainFront className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Rail Transport</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Packaging",
      value: "packaging",
      content: (
        <div className="min-h-[600px] w-full relative rounded-2xl p-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500 to-sky-900 mb-20">
          <p className="text-xl md:text-4xl font-bold text-white text-center">Packaging</p>
          <div className="max-w-6xl mx-auto px-4 py-5 text-center">
            <p className="text-[16px] whitespace-pre-wrap line-clamp-2 md:line-clamp-none text-white font-normal leading-relaxed mb-6">
              Transpeed Cargo Pvt Ltd has a menu of supply chain solutions that can optimize the effectiveness of your product promotion, and reduce the cost of your packaging and distribution as well as your carbon footprint.
              <br />
              Transpeed Cargo Pvt Ltd is taking optimization to a whole new level. It has evolved into a comprehensive, fully integrated program designed to maximize productivity, minimize waste, and above all your product promotion, and reduce the cost of your packaging and distribution as well as your carbon footprint.
            </p>
          </div>
          <div className="package-img grid justify-center">
            <img src="images/330x267.webp" alt="Packaging" />
          </div>
        </div>
      ),
    },
    {
      title: "Materials",
      value: "materials",
      content: (
        <div className="min-h-[600px] w-full relative rounded-2xl p-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500 to-sky-900 mb-20">
          <p className="text-xl md:text-4xl font-bold text-white text-center">Materials</p>
          <div className="max-w-6xl mx-auto px-4 py-5 text-center">
            <p className="text-[16px] whitespace-pre-wrap line-clamp-2 md:line-clamp-none text-white font-normal leading-relaxed mb-6">
              Transpeed Cargo Pvt Ltd Helps you source finest goods for your business. Our global network helps us source only the best quality.
            </p>
          </div>
          {/* Additional content for Materials tab */}
          <div className="max-w-6xl mx-auto px-4 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="space-y-2">
                <div className="flex items-start rounded-md bg-yellow-500 text-gray-900 gap-4 px-4 py-2">
                  <PencilRuler className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Solutions Engineering</h3>
                  </div>
                </div>
                <div className="flex items-start rounded-md bg-yellow-500 text-gray-900 gap-4 px-4 py-2">
                  <ChartNoAxesCombined className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">High-Performance Material</h3>
                  </div>
                </div>
                <div className="flex items-start rounded-md bg-yellow-500 text-gray-900 gap-4 px-4 py-2">
                  <Truck className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Supply Chain Network</h3>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start rounded-md bg-yellow-500 text-gray-900 gap-4 px-4 py-2">
                  <Globe className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Deployed Resources</h3>
                  </div>
                </div>
                <div className="flex items-start rounded-md bg-yellow-500 text-gray-900 gap-4 px-4 py-2">
                  <PackageSearch className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Logistics</h3>
                  </div>
                </div>
                <div className="flex items-start rounded-md bg-yellow-500 text-gray-900 gap-4 px-4 py-2">
                  <FileText className="w-8 h-8 flex-shrink-0" />
                  <TrainFront className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Financial Reporting</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    }
  ];

  return (
    <div className="bg-gradient-to-r from-[#01385e] to-[#168cbd] h-full">
      <div className="h-[900px] [perspective:1000px] relative flex flex-wrap mx-auto max-w-7xl items-start justify-center py-20">
        <Tabs tabs={tabs} className="flex-wrap" />
      </div>
    </div>
  );
}
