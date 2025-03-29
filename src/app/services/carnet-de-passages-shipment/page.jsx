import CarnetDePassages from '@/components/carnet-de-passages-shipment/CarnetDePassages'
import { Package } from 'lucide-react'
import React from 'react'


const page = () => {
    return (
        <div>

            <div className="relative h-[600px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/global-vehical-movment-hero.webp')" }}>

                <div className="absolute inset-0 bg-gradient-to-r from-sky-900 to-sky-500/10"></div>

                {/* Hero Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 px-7 md:px-40">
                    <div className="space-y-8 relative z-10 max-w-8xl p-6 text-white text-center md:text-left">
                        <h3 className="text-yellow-400 text-2xl -mb-5">Transpeed Cargo Pvt. Ltd. </h3>
                        <h1 className="text-4xl font-bold md:text-6xl">Hassle-Free Global Vehicle Movement with Transpeed
                            Cargo              </h1>
                        <p className="mt-4 text-lg">
                            Transpeed Cargo Pvt. Ltd. streamlines international vehicle shipments with expert **Carnet de Passages (CPD)** services, ensuring smooth, compliant transit for trade shows, rallies, and business needs.
                        </p>
                        <div className='flex justify-center md:justify-start'>
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white mt-5 px-6 py-3 rounded-md flex items-center space-x-2 transition-colors">
                                <Package className="h-5 w-5" />
                                <span>GET A QUOTATION</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <section className="dark:bg-grid-white/[0.05] mt-5 mb-5 p-8 rounded-2xl max-w-7xl mx-auto shadow-xl text-white py-20">
                <div className="max-w-7xl  mx-auto px-4">
                    <div className="max-w-full text-center ">
                        <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                            What is a Carnet de Passages (CPD)?
                        </h1>
                        <p className="text-xl text-center text-gray-900">
                            A Carnet de Passages (CPD) is an internationally recognized customs document that allows
                            vehicles to be temporarily imported into a foreign country without paying import duties or
                            taxes. It acts as a "vehicle passport," facilitating seamless entry and exit across countries
                            that are part of the <b><i>ATA Carnet Convention.</i></b>
                            .
                        </p>
                    </div>
                </div>
            </section>


            <CarnetDePassages />


        </div>
    )
}



export default page