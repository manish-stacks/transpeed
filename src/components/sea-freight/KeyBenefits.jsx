"use client";

export default function KeyBenefits() {
  const steps = [
    { id: "01", title: " Full Container Load (FCL) Ocean Freight Forwarding ", icon: "✍️", description: "Maximize cost efficiency and reduce your carbon footprint with our FCL services. Our long-standing relationships with a wide range of carriers allow us to secure space on ships, arrange convenient schedules, and offer competitive rates. With our advanced tracking systems, you’ll have real-time visibility into your shipment’s status, ensuring peace of mind from start to finish." },
    { id: "02", title: " Less-than-Container Load (LCL) Ocean Freight Forwarding", icon: "📦", description: "Our LCL services offer flexibility for smaller shipments, helping you control costs and transit times. We provide consolidation and multi-country consolidation services (MCCS) for complex shipments, enhancing efficiency and reducing costs. Our advanced tracking systems keep you informed about your shipment’s progress at every stage." },
    { id: "03", title: "Temperature-Controlled Ocean Freight", icon: "🛒", description: "We handle sensitive shipments requiring specific temperature conditions — from frozen goods to ambient cargo. Our reefers and temperature-controlled warehouses are designed to meet the stringent requirements of industries such as food, pharmaceuticals, aerospace, and technology. Additional services like special packaging, temperature loggers, and real-time monitoring ensure your cargo arrives in perfect condition. " },
    { id: "04", title: " Project Cargo and Non-Containerized Shipments", icon: "🚚", description: "Our dedicated Project Cargo Team manages complex and oversized shipments with precision and care. From planning to execution, we handle every aspect of your project cargo, drawing on local expertise to overcome logistical challenges and ensure successful delivery." },
    {
      id: "05", title: "Value-Added Ocean Freight Services", icon: "🚚", description: "Weekly Bonded trucking service to  Delhi, Ahmedabad etc from  Nhava sheva and Bangalore, Hyderabad from Chennai.",
      list: ["Door-to-door deliveries", "Customs brokerage", "Cargo insurance", "Real-time shipment tracking ", "Specialized packaging and handling "]
    },
    { image: "/images/sea-freight-logistic-service.png" },

  ];


  return (
    <div className="bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500 to-sky-900 dark:bg-grid-white/[0.05] text-white py-20 text-center">
      {/* <h3 className="text-gray-400 uppercase text-sm">How We Work</h3> */}
      <h2 className="text-xl md:text-5xl max-[768px]:text-3xl font-bold mb-4">Tailored Industry Solutions</h2>
      <p className="text-white mb-10">Every industry has unique requirements — and we are equipped to meet them through our
        specialized ocean freight solutions: </p>
      <div className="relative grid min-[992px]:grid-cols-2 min-[768px]:grid-col-2 w-full md:px-40 px:5">
        <div className="absolute left-0 w-full border-t-2 border-dashed border-orange-500 -z-10"></div>
        {steps.map((step, index) => (
          step.image ? (
            <img key={index} src={step.image} className="mx-auto p-5"/>
          ) : (
            <div key={index} className="relative bg-slate-100/10 text-center mx-6 my-5 p-5 rounded-lg">
              <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-4xl">
                {/* {step.icon}  */}
                <span className="text-yellow-500 font-bold mr-1">{step.id}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold">
                {/* <span className="text-gray-300 mr-1">{step.id}.</span> */}
                <span className="text-yellow-500">{step.title}</span>
              </h3>
              <div className=" text-gray-300 mt-2">
                <p>{step.description}</p>
                {
                  step.list && (
                    <ul className="mt-3">
                      {step.list.map((data, index) => {
                        return <li className="bg-gray-100/10 my-1 py-1" key={index}>{data}</li>;
                      })}
                    </ul>
                  )
                }
              </div>
            </div >
          )
        ))
        }
      </div >
    </div >
  );
}

