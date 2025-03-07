"use client";
import {Globe, PlaneTakeoff, Ship, Truck, House, TrainFront } from 'lucide-react';
import { Tabs } from "../ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Logistics",
      value: "logistics",
      content: (
        <div className="w-full relative rounded-2xl p-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-400 to-sky-800 mb-20 ">
          <p className="text-xl md:text-4xl font-bold text-white text-center">Logistics</p>
          <div>
            <div className="max-w-6xl mx-auto px-4 py-5 text-center">
              <p className="text-[16px] text-white font-normal leading-relaxed mb-6">
                Transpeed Cargo Pvt Ltd is India’s one of the top logistics solutions provider. Established in 2016 with the vision to provide Easy, Efficient and Economical integrated logistics solutions, Transpeed Cargo Pvt Ltd today is a reflection of it’s founder's passion for innovative services and belief in ethical business practices, where continuous emphasis is placed on delivering the highest standards of customer satisfaction. The founder with their experience in various import/export, sales and managerial positions focused to provide innovative, focused customer oriented solutions to the consolidation and freight forwarding industry.
              </p>
            </div>

            {/* Features Grid */}
            <div className="max-w-6xl mx-auto px-4 pb-10">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-2">
                  <div className="flex items-start rounded-md bg-white/30 text-gray-100 gap-4 px-4 py-2">
                    <PlaneTakeoff className="w-8 h-8 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Air Freight</h3>
                      {/* <p className="text-white/80">Access to worldwide shipping routes and partners</p> */}
                    </div>
                  </div>

                  <div className="flex items-start rounded-md bg-white/30 text-gray-100 gap-4 px-4 py-2">
                    <Ship className="w-8 h-8 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">SEA Freight</h3>
                      {/* <p className="text-white/80">Detailed tracking and analytics at your fingertips</p> */}
                    </div>
                  </div>

                  <div className="flex items-start rounded-md bg-white/30 text-gray-100 gap-4 px-4 py-2">
                    <Truck className="w-8 h-8 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Road Transportation</h3>
                      {/* <p className="text-white/80">Optimized routes for faster delivery</p> */}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-2">
                  <div className="flex items-start rounded-md bg-white/30 text-gray-100 gap-4 px-4 py-2">
                    <Globe className="w-8 h-8 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Warehousing</h3>
                      {/* <p className="text-white/80">Best-in-class pricing for all shipping needs</p> */}
                    </div>
                  </div>

                  <div className="flex items-start rounded-md bg-white/30 text-gray-100 gap-4 px-4 py-2">
                    <House className="w-8 h-8 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Custom Clearence</h3>
                      {/* <p className="text-white/80">Tailored shipping solutions for your business</p> */}
                    </div>
                  </div>

                  <div className="flex items-start rounded-md bg-white/30 text-gray-100 gap-4 px-4 py-2">
                    <TrainFront className="w-8 h-8 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Rail Transport</h3>
                      {/* <p className="text-white/80">Quick and accurate quotes when you need them</p> */}
                    </div>
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
        <div className="w-full relative rounded-2xl p-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-400 to-sky-800 mb-20 ">
          <p className="text-xl md:text-4xl font-bold text-white text-center">Packaging</p>
          <div>
            <div className="max-w-6xl mx-auto px-4 py-5 text-center">
              <p className="text-[16px] text-white font-normal leading-relaxed mb-6">
                Transpeed Cargo Pvt Ltd is India’s one of the top logistics solutions provider. Established in 2016 with the vision to provide Easy, Efficient and Economical integrated logistics solutions, Transpeed Cargo Pvt Ltd today is a reflection of it’s founder's passion for innovative services and belief in ethical business practices, where continuous emphasis is placed on delivering the highest standards of customer satisfaction. The founder with their experience in various import/export, sales and managerial positions focused to provide innovative, focused customer oriented solutions to the consolidation and freight forwarding industry.
              </p>
            </div>

            {/* Features Grid */}
            <div className="max-w-6xl mx-auto px-4 pb-10">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-2">
                  <div className="flex items-start rounded-md bg-white/30 text-gray-100 gap-4 px-4 py-2">
                    <PlaneTakeoff className="w-8 h-8 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Air Freight</h3>
                      {/* <p className="text-white/80">Access to worldwide shipping routes and partners</p> */}
                    </div>
                  </div>

                  <div className="flex items-start rounded-md bg-white/30 text-gray-100 gap-4 px-4 py-2">
                    <Ship className="w-8 h-8 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">SEA Freight</h3>
                      {/* <p className="text-white/80">Detailed tracking and analytics at your fingertips</p> */}
                    </div>
                  </div>

                  <div className="flex items-start rounded-md bg-white/30 text-gray-100 gap-4 px-4 py-2">
                    <Truck className="w-8 h-8 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Road Transportation</h3>
                      {/* <p className="text-white/80">Optimized routes for faster delivery</p> */}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-2">
                  <div className="flex items-start rounded-md bg-white/30 text-gray-100 gap-4 px-4 py-2">
                    <Globe className="w-8 h-8 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Warehousing</h3>
                      {/* <p className="text-white/80">Best-in-class pricing for all shipping needs</p> */}
                    </div>
                  </div>

                  <div className="flex items-start rounded-md bg-white/30 text-gray-100 gap-4 px-4 py-2">
                    <House className="w-8 h-8 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Custom Clearence</h3>
                      {/* <p className="text-white/80">Tailored shipping solutions for your business</p> */}
                    </div>
                  </div>

                  <div className="flex items-start rounded-md bg-white/30 text-gray-100 gap-4 px-4 py-2">
                    <TrainFront className="w-8 h-8 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Rail Transport</h3>
                      {/* <p className="text-white/80">Quick and accurate quotes when you need them</p> */}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Materials",
      value: "materials",
      content: (
        <div className="w-full relative rounded-2xl p-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-400 to-sky-800 mb-20">
          <p className="text-xl md:text-4xl font-bold text-white text-center">Materials</p>
          <div>
            <div className="max-w-6xl mx-auto px-4 py-5 text-center">
              <p className="text-[16px] text-white font-normal leading-relaxed mb-6">
                Transpeed Cargo Pvt Ltd is India’s one of the top logistics solutions provider. Established in 2016 with the vision to provide Easy, Efficient and Economical integrated logistics solutions, Transpeed Cargo Pvt Ltd today is a reflection of it’s founder's passion for innovative services and belief in ethical business practices, where continuous emphasis is placed on delivering the highest standards of customer satisfaction. The founder with their experience in various import/export, sales and managerial positions focused to provide innovative, focused customer oriented solutions to the consolidation and freight forwarding industry.
              </p>
            </div>

            {/* Features Grid */}
            <div className="max-w-6xl mx-auto px-4 pb-10">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-2">
                  <div className="flex items-start rounded-md bg-white/30 text-gray-100 gap-4 px-4 py-2">
                    <PlaneTakeoff className="w-8 h-8 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Air Freight</h3>
                      {/* <p className="text-white/80">Access to worldwide shipping routes and partners</p> */}
                    </div>
                  </div>

                  <div className="flex items-start rounded-md bg-white/30 text-gray-100 gap-4 px-4 py-2">
                    <Ship className="w-8 h-8 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">SEA Freight</h3>
                      {/* <p className="text-white/80">Detailed tracking and analytics at your fingertips</p> */}
                    </div>
                  </div>

                  <div className="flex items-start rounded-md bg-white/30 text-gray-100 gap-4 px-4 py-2">
                    <Truck className="w-8 h-8 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Road Transportation</h3>
                      {/* <p className="text-white/80">Optimized routes for faster delivery</p> */}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-2">
                  <div className="flex items-start rounded-md bg-white/30 text-gray-100 gap-4 px-4 py-2">
                    <Globe className="w-8 h-8 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Warehousing</h3>
                      {/* <p className="text-white/80">Best-in-class pricing for all shipping needs</p> */}
                    </div>
                  </div>

                  <div className="flex items-start rounded-md bg-white/30 text-gray-100 gap-4 px-4 py-2">
                    <House className="w-8 h-8 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Custom Clearence</h3>
                      {/* <p className="text-white/80">Tailored shipping solutions for your business</p> */}
                    </div>
                  </div>

                  <div className="flex items-start rounded-md bg-white/30 text-gray-100 gap-4 px-4 py-2">
                    <TrainFront className="w-8 h-8 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Rail Transport</h3>
                      {/* <p className="text-white/80">Quick and accurate quotes when you need them</p> */}
                    </div>
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
    <>
      <div class="bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-400 to-sky-800 h-full mb-20">
        <div className="h-[900px] [perspective:1000px] relative flex flex-wrap mx-auto max-w-7xl  items-start justify-center py-20">
          <Tabs tabs={tabs} className="flex-wrap"/>
        </div>
      </div>
    </>
  );
}


