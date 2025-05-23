"use client";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { aircraftDataOne, aircraftDataTow, aircraftDataThree } from "../../../lib/aircraftData.js";

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen px-4 py-10 mt-20 mb-32">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-8">
        AIRCRAFT SPECIFICATION
      </h1>
      <div className="mb-6 flex">
        <div className="w-full flex flex-col md:flex-row gap-10">
          <div className="col-left w-full md:w-[40%]">
            <div className="mb-8">
              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="px-2 py-2 bg-white text-start font-bold text-[#172554] uppercase">
                        Specification
                      </th>
                      <th className="px-2 py-2 bg-white text-start font-bold text-[#172554]">
                        {" "}
                        AN-124-100
                      </th>
                      <th className="px-2 py-2 bg-white text-start font-bold text-[#172554]">
                        {" "}
                        AN-124-150
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {aircraftDataOne &&
                      aircraftDataOne.map((row, index) => (
                        <tr key={index}>
                          <td
                            className={`px-2 py-3 ${
                              index % 2 === 0 ? "bg-blue-200" : "bg-blue-100"
                            } text-xs md:text-sm font-medium text-gray-900`}
                          >
                            {row.label}
                          </td>
                          <td
                            className={`px-2 py-3 ${
                              index % 2 === 0 ? "bg-blue-200" : "bg-blue-100"
                            } text-center text-xs md:text-sm font-medium text-[#172554]`}
                          >
                            {row.val1}
                          </td>
                          <td
                            className={`px-2 py-3 ${
                              index % 2 === 0 ? "bg-blue-200" : "bg-blue-100"
                            } text-center text-xs md:text-sm font-medium text-[#172554]`}
                          >
                            {row.val2}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-left w-full md:w-[60%]">
            <h1 className="text-3xl md:text-4xl font-bold text-[#172554] mb-5">
              AN-124-100/150
            </h1>
            <p className="text-justify mb-5">
              The An-124-100 is the{" "}
              <span className="text-[#eab308]">
                worlds largest, mass produced, civil cargo aircraft
              </span>{" "}
              and is a recognized leader of the air cargo industry for its
              ability to transport oversized and super-heavy shipments.
            </p>
            <p className="text-justify">
              The combination of exceptional characteristics such as its cargo
              compartment size, flight range and uplift capability (without the
              need for special loading equipment) allows the An-124 to carry
              super-heavy and oversized cargoes including equipment up to 120
              tonnes (An-124-100) and up to 150 tonnes (An-124-150).
            </p>

            <div className="aircraft-image mt-12">
              <Image
                width={939}
                height={533}
                src="/images/air-craft-1.webp"
                alt="Air craft 1"
                className="rounded border border-yellow-300 p-3"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 flex">
        <div className="w-full flex flex-col md:flex-row gap-10">
          <div className="col-left w-full md:w-[40%]">
            <div className="mb-8">
              <div className="w-full h-full overflow-x-auto bg-[#004a80] px-8 py-20">
                <h3 className="text-[#fff] font-bold text-xl">
                  PAYLOAD INCL. EQUIPMENT WEIGHT
                </h3>
                <h2 className="text-[#9fd6f6] text-5xl font-bold">120,000/</h2>
                <h2 className="text-[#9fd6f6] text-5xl font-bold">
                  150,000 kg
                </h2>

                <h3 className="text-[#fff] font-bold text-xl mt-8">RANGE</h3>
                <h2 className="text-[#9fd6f6] text-5xl font-bold">4,500/</h2>
                <h2 className="text-[#9fd6f6] text-5xl font-bold">2,300 km</h2>

                <h3 className="text-[#fff] font-bold text-xl mt-8">
                  LOADING METHODS
                </h3>
                <div className="loading-methods mt-4">
                  <ul>
                    <li className="text-[#fff] font-medium mb-1">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                      Pallets & crates loaded by forklift
                    </li>
                    <li className="text-[#fff] font-medium mb-1">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                      Pallets & crates loaded by forklift
                    </li>
                    <li className="text-[#fff] font-medium mb-1">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                      Vehicles driven or winched into the aircraft
                    </li>
                    <li className="text-[#fff] font-medium mb-1">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                      Vehicles loaded on the Car Rack System
                    </li>
                    <li className="text-[#fff] font-medium mb-1">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                      Heavy or outsized items winched into the aircraft using t
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-left w-full md:w-[60%]">
            <h1 className="text-3xl md:text-4xl font-bold text-[#172554] mb-4">
              AN-124-100/150
            </h1>

            <div className="aircraft-image mt-6">
              <Image
                width={939}
                height={533}
                src="/images/air-craft-2.webp"
                alt="Air craft 1"
                className="rounded border border-yellow-300 p-3"
              />
              <div className="aircraft-image mt-2">
                <Image
                  width={939}
                  height={533}
                  src="/images/air-craft-2-1.webp"
                  alt="Air craft 1"
                  className="rounded border border-yellow-300 p-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 flex ">
        <div className="w-full flex flex-col md:flex-row gap-10">
          <div className="col-left w-full md:w-[40%]">
            <div className="mb-8">
              <div className="w-full h-full overflow-x-auto bg-[#004a80] px-8 py-20">
                <h3 className="text-[#9fd6f6] font-bold text-3xl">
                  ENVIRONMENT IN THE CARGO CABIN
                </h3>
                <h3 className="text-[#fff] font-bold text-xl mt-6">
                  G-Factors
                </h3>
                <div className="loading-methods mt-4">
                  <ul>
                    <li className="text-[#fff] font-medium mb-1">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                      Forward ‣ 2.3g
                    </li>
                    <li className="text-[#fff] font-medium mb-1">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                      Backward ‣ 1.5g
                    </li>
                    <li className="text-[#fff] font-medium mb-1">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                      Lateral ‣ 1.5g
                    </li>
                    <li className="text-[#fff] font-medium mb-1">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                      Upward ‣ 2.0g
                    </li>
                    <li className="text-[#fff] font-medium mb-1">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                      Down ‣ 2.5g
                    </li>
                  </ul>
                  <p className="text-[#fff] mt-4">
                    The lashing and preparation of cargo for flights must be
                    done in respect of these maximum values.
                  </p>
                </div>
                <h3 className="text-[#9fd6f6] font-bold text-3xl mt-5 mb-4">
                  AIR PRESSURE
                </h3>
                <p className="text-[#fff] font-semibold">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                  Minimum pressure (unpressurised cargo cabin)
                </p>
                <p className="text-white ml-10">‣ 260 mbar</p>
                <p className="text-[#fff] font-semibold">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                  Minimum pressure (pressurised cargo cabin)
                </p>
                <p className="text-white ml-10">‣ 480 mbar +0/1/-0.02 kg/cm2</p>
                <p className="text-[#fff] font-semibold">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                  Air pressure change rate
                </p>
                <p className="text-white ml-10">‣ 70 mbar/min</p>

                <h3 className="text-[#9fd6f6] font-bold text-3xl mt-5 mb-4">
                  TEMPERATURE RANGE
                </h3>
                <p className="text-[#fff] font-semibold">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                  Air Temperature
                </p>
                <p className="text-white ml-10">‣ Up till 20° C upon request</p>
                <p className="text-[#fff] font-semibold">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                  Humidity during flight{" "}
                </p>
                <p className="text-white ml-10">‣ 10-15% RH</p>
              </div>
            </div>
          </div>
          <div className="col-left w-full md:w-[60%]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#172554] mb-5">
              AN-124-100/150
            </h2>
            <div className="aircraft-image mt-12">
              <Image
                width={939}
                height={533}
                src="/images/air-craft-3.webp"
                alt="Air craft 1"
                className="rounded border border-yellow-300 p-3"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#172554] mb-5 mt-8">
              LOADING EQUIPMENT
            </h2>
            <p className="text-justify">
              <strong>Internal Crane System</strong> consists of two gantries
              each with two lifting hooks. Capable of lifting single items of up
              to 20,000 kg. The containers must have suitable lifting points.
              The SPG system can be fitted to increase lifting capacity up to
              30,000 kg but has further restrictions relating to the centre of
              gravity of the container and location of lifting points.{" "}
            </p>

            <p className="text-justify mt-2">
              <strong>Double-deck loading and transport system</strong> designed
              and patented by Volga-Dnepr allows the An-124-100 to transport up
              to 35 cars (average sedan) on a single flight; loading does not
              require any additional equipment; alternatively, cars can be
              driven or winched through the nose{" "}
            </p>

            <p className="text-justify mt-2">
              <strong>Bearings </strong> for elements of the front aircraft ramp
              or, to put it simply, under the front ramp of the An-124
            </p>
            <p className="text-justify mt-2">
              <strong>Extension ramps</strong> of various types of cargo
            </p>
            <p className="text-justify mt-1">
              <strong>
                Tracking systems (similar to railway tracks): 2 versions:
              </strong>{" "}
              low-profile and standard-profile
            </p>
            <p className="text-justify mt-1">
              <strong>Skate beams and roller beams</strong>
            </p>
            <p className="text-justify mt-1">
              <strong>
                Platforms of various design and load-carrying capacity
              </strong>
            </p>
            <p className="text-justify mt-1">
              <strong>Protective weight-distributing plating</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6 flex ">
        <div className="w-full flex flex-col md:flex-row gap-10">
          <div className="col-left w-full md:w-[40%]">
            <div className="mb-8">
              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse bg-[#004a80]">
                  <thead>
                    <tr>
                      <th className="px-2 py-2 text-start font-bold text-[#172554] uppercase"></th>

                      <th className="px-2 py-2 font-bold text-[#fff]">
                        {" "}
                        IL-76TD-90VD
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {aircraftDataTow &&
                      aircraftDataTow.map((row, index) => (
                        <tr key={index}>
                          <td
                            className={`px-2 py-3 ${
                              index % 2 === 0 ? "bg-blue-200" : "bg-blue-100"
                            } text-xs md:text-sm font-medium text-gray-900`}
                          >
                            {row.label}
                          </td>
                          <td
                            className={`px-2 py-3 ${
                              index % 2 === 0 ? "bg-blue-200" : "bg-blue-100"
                            } text-xs md:text-sm font-medium text-[#172554]`}
                          >
                            {row.val1}
                          </td>
                          <td
                            className={`px-2 py-3 ${
                              index % 2 === 0 ? "bg-blue-200" : "bg-blue-100"
                            } text-center text-xs md:text-sm font-medium text-[#172554]`}
                          >
                            {row.val2}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-left w-full md:w-[60%]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#172554] mb-5">
              IL-76TD-90VD
            </h2>

            <p className="text-justify">
              Volga-Dnepr participated in the cross-section modernisation of the
              IL-76TD, one of Volga-Dnepr‘s most successful cargo aircraft
              thanks to its cabin size, carrying capacity and autonomous loading
              capabilities.
            </p>

            <p className="text-justify mt-2">
              The resulting product is the IL-76TD-90VD, equipped with new
              PC-90A-76 engines and modern avionics, approved for worldwide
              operations.
            </p>
            <div className="aircraft-image mt-12">
              <Image
                width={939}
                height={533}
                src="/images/air-craft-4.webp"
                alt="Air craft 1"
                className="rounded border border-yellow-300 p-3 mb-2"
              />
              <Image
                width={939}
                height={533}
                src="/images/air-craft-5.webp"
                alt="Air craft 1"
                className="rounded border border-yellow-300 p-3"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 flex">
        <div className="w-full flex flex-col md:flex-row gap-10">
          <div className="col-left w-full md:w-[40%]">
            <div className="mb-8">
              <div className="w-full h-full overflow-x-auto bg-[#004a80] px-8 py-20">
                <h3 className="text-[#fff] font-bold text-xl">
                  MAX. LANDING WEIGHT
                </h3>
                <h2 className="text-[#9fd6f6] text-5xl font-bold">
                  195,000 kg
                </h2>

                <h3 className="text-[#fff] font-bold text-xl mt-8">
                  PAYLOAD INCL. EQUIPMENT WEIGHT
                </h3>
                <h2 className="text-[#9fd6f6] text-5xl font-bold">50,000 kg</h2>

                <h3 className="text-[#fff] font-bold text-xl mt-8">RANGE</h3>
                <h2 className="text-[#9fd6f6] text-5xl font-bold">4,500 km</h2>

                <h3 className="text-[#fff] font-bold text-xl mt-8">
                  CRUISING SPEED
                </h3>
                <h2 className="text-[#9fd6f6] text-5xl font-bold">750 km/h</h2>
              </div>
            </div>
          </div>
          <div className="col-left w-full md:w-[60%]">
            <h1 className="text-3xl md:text-4xl font-bold text-[#172554] mb-4">
              IL-76TD-90VD
            </h1>

            <div className="aircraft-image mt-6">
              <Image
                width={939}
                height={533}
                src="/images/air-craft-6.webp"
                alt="Air craft 1"
                className="rounded border border-yellow-300 p-3"
              />
              <div className="aircraft-image mt-2">
                <Image
                  width={939}
                  height={533}
                  src="/images/air-craft-7.webp"
                  alt="Air craft 1"
                  className="rounded border border-yellow-300 p-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 flex ">
        <div className="w-full flex flex-col md:flex-row gap-10">
          <div className="col-left w-full md:w-[40%]">
            <div className="mb-8">
              <div className="w-full h-full overflow-x-auto bg-[#004a80] px-8 py-12">
                <h3 className="text-[#9fd6f6] font-bold text-3xl">
                  ENVIRONMENT IN THE CARGO CABIN
                </h3>
                <h3 className="text-[#fff] font-bold text-xl mt-6">
                  G-Factors
                </h3>
                <div className="loading-methods mt-4">
                  <ul>
                    <li className="text-[#fff] font-medium mb-1">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                      Forward ‣ 2.3g
                      <p className="font-normal ml-7">
                        (up to 6.0g in case of emergency landing)
                      </p>
                    </li>
                    <li className="text-[#fff] font-medium mb-1">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                      Backward ‣ 1.5g
                    </li>
                    <li className="text-[#fff] font-medium mb-1">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                      Lateral ‣ 1.5g
                    </li>
                    <li className="text-[#fff] font-medium mb-1">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                      Upward ‣ 2.0g
                    </li>
                    <li className="text-[#fff] font-medium mb-1">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                      Down ‣ 2.5g
                    </li>
                  </ul>
                  <p className="text-[#fff] mt-4">
                    The lashing and preparation of cargo for flights must be
                    done in respect of these maximum values.
                  </p>
                </div>
                <h3 className="text-[#9fd6f6] font-bold text-3xl mt-5 mb-4">
                  AIR PRESSURE
                </h3>
                <p className="text-[#fff] font-semibold">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                  Maximal pressure
                </p>
                <p className="text-white ml-10">‣ 750 mbar (2 500m)</p>
                <p className="text-[#fff] font-semibold">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                  Air pressure change rate
                </p>
                <p className="text-white ml-10">‣ 15 mbar/min</p>

                <h3 className="text-[#9fd6f6] font-bold text-3xl mt-5 mb-4">
                  TEMPERATURE RANGE
                </h3>
                <p className="text-[#fff] font-semibold">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                  Air Temperature
                </p>
                <p className="text-white ml-10">‣ Up till 25° C upon request</p>
                <p className="text-[#fff] font-semibold">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />{" "}
                  Humidity during flight
                </p>
                <p className="text-white ml-10">‣ 10-15% RH</p>
              </div>
            </div>
          </div>
          <div className="col-left w-full md:w-[60%]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#172554] mb-5">
              IL-76TD-90VD
            </h2>
            <div className="aircraft-image mt-12">
              <Image
                width={939}
                height={533}
                src="/images/air-craft-8.webp"
                alt="Air craft 1"
                className="rounded border border-yellow-300 p-3"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#172554] mb-5 mt-8">
              LOADING EQUIPMENT
            </h2>
            <p className="text-justify mb-2">
              Internal Crane System - The onboard system of overhead cranes
              consists of 4 electric hoists with 3-tonne lifting capacity each,
              they are capa
            </p>
            <p className="text-justify mb-2">
              The freighter is equipped with 2 onboard electric winches of
              3-tonne hauling capacity each
            </p>
            <p className="text-justify mb-2">
              Loading of wheeled vehicles, trailers and tracked vehicles
            </p>
            <p className="text-justify mb-2">
              Ramp enables wheeled vehicles to be loaded using their own power
            </p>
              <p className="text-justify mb-2">
                Ramp enables wheeled vehicles to be loaded using their own power
              </p>
              <p className="text-justify mb-2">Loading of heavy and outsize cargo</p>

              <p className="text-justify mb-2">
                Use of special Volga-Dnepr Airlines‘ loading equipment for
                loading of heavy and outsize cargo subject to usage of mob
              </p>
          
          </div>
        </div>
      </div>

      <div className="mb-6 flex ">
        <div className="w-full flex flex-col md:flex-row gap-10">
          <div className="col-left w-full md:w-[40%]">
            <div className="mb-8">
              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse bg-[#004a80]">
                  <thead>
                    <tr>
                      <th className="px-2 py-2 text-start font-bold text-[#172554] uppercase"></th>

                      <th className="px-2 py-2 font-bold text-[#fff]">
                        {" "}
                         BOEING 747-8F
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {aircraftDataThree &&
                      aircraftDataThree.map((row, index) => (
                        <tr key={index}>
                          <td
                            className={`px-2 py-3 ${
                              index % 2 === 0 ? "bg-blue-200" : "bg-blue-100"
                            } text-xs md:text-sm font-medium text-gray-900`}
                          >
                            {row.label}
                          </td>
                          <td
                            className={`px-2 py-3 ${
                              index % 2 === 0 ? "bg-blue-200" : "bg-blue-100"
                            } text-xs md:text-sm font-medium text-[#172554]`}
                          >
                            {row.val1}
                          </td>
                          <td
                            className={`px-2 py-3 ${
                              index % 2 === 0 ? "bg-blue-200" : "bg-blue-100"
                            } text-center text-xs md:text-sm font-medium text-[#172554]`}
                          >
                            {row.val2}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-left w-full md:w-[60%]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#172554] mb-5">
              BOEING 747-8F/400ERF
            </h2>

            <p className="text-justify">The Boeing 747 is an all-cargo aircraft and is one of the most popular choices for cargo transportation. Its unique features such as the large side door and nose door facilitate the ease and flexibility of loading.</p>

            <div className="aircraft-image mt-12">
              <Image
                width={939}
                height={533}
                src="/images/air-craft-4.webp"
                alt="Air craft 1"
                className="rounded border border-yellow-300 p-3 mb-2"
              />
              <Image
                width={939}
                height={533}
                src="/images/air-craft-5.webp"
                alt="Air craft 1"
                className="rounded border border-yellow-300 p-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
