import { ArrowDownLeft, ArrowRightIcon, ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import QuotationForm from "./QuotationForm";

const Air = ({ incoterms, isformOpen, setIsFormOpen, selectedTab }) => {
  const [airImport, setAirImport] = useState(true);

  const [formData, setFormData] = useState({
    serviceTab: selectedTab || "",
    serviceType: airImport ? "Air Import" : "Air Export",
    incoTerm: incoterms[0]?.value || "",
    origin: "",
    destination: "",
    weight: "",
    width: "",
    length: "",
    height: "",
    CBM: "0",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
      // Recalculate CBM when dimensions change
      if (["width", "length", "height"].includes(name)) {
        newData.CBM = calculateCBM(
          newData.width,
          newData.length,
          newData.height
        ).toString();
      }
      return newData;
    });
  };

  const calculateCBM = (width, length, height) => {
    if (width && length && height) {
      return (
        parseFloat(width) *
        parseFloat(length) *
        parseFloat(height)
      ).toFixed(2);
    }
    return 0;
  };

  // Update serviceType when import/export changes
  const handleServiceTypeChange = (isImport) => {
    setAirImport(isImport);
    setFormData((prev) => ({
      ...prev,
      serviceType: isImport ? "Air Import" : "Air Export",
    }));
  };

  return (
    <>
      {!isformOpen ? (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative max-[567px]:hidden">
            <div className="flex justify-center relative">
              <div className="absolute text-center">
                <div className="pt-10">
                  <img
                    src="/images/calcimg.png"
                    alt="Box Dimensions"
                    className="w-full max-w-md opacity-100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 p-4">
            {/* Import/Export Tabs */}
            <div className="grid grid-cols-2  bg-gray-100 border border-yellow-500 rounded-md">
              <button
                onClick={() => handleServiceTypeChange(true)}
                className={`flex items-center justify-start space-x-2  py-3 px-4 ${
                  airImport
                    ? "bg-yellow-500 text-white"
                    : "bg-white text-slate-900"
                }`}
              >
                <ArrowDownLeft
                  className={`${
                    airImport
                      ? "bg-white text-yellow-500"
                      : "bg-yellow-500 text-white"
                  } rounded-full h-8 w-8 p-1`}
                />
                <span className="text-lg font-semibold">Air Import</span>
              </button>
              <button
                onClick={() => handleServiceTypeChange(false)}
                className={`flex items-center justify-start space-x-2  py-3 px-4 ${
                  !airImport
                    ? "bg-yellow-500 text-white"
                    : "bg-white text-slate-900"
                }`}
              >
                <span className="text-lg font-semibold">Air Export</span>
                <ArrowUpRight
                  className={`${
                    !airImport
                      ? "bg-white text-yellow-500"
                      : "bg-yellow-500 text-white"
                  } rounded-full h-8 w-8 p-1`}
                />
              </button>
            </div>

            {/* Additional Options */}
            <div className="grid grid-cols gap-2">
              <div>
                <select
                  name="incoTerm"
                  value={formData.incoTerm}
                  onChange={handleInputChange}
                  className="w-full bg-gray-200 py-2 px-3 rounded-sm text-md font-semibold"
                >
                  {incoterms.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Port Selection */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#1e3a8a] mb-2">
                  Origin Airport
                </label>
                <input
                  name="origin"
                  value={formData.origin}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Origin Airport"
                  className="w-full p-2 border rounded-sm bg-gray-200"
                />
              </div>
              <div>
                <label className="block text-[#1e3a8a] mb-2">
                  Destination Airport
                </label>
                <input
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Destination Airport"
                  className="w-full p-2 border rounded-sm bg-gray-200"
                />
              </div>
            </div>

            {/* Dimensions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <label className="w-24 text-[#1e3a8a]">Weight:</label>
                <input
                  name="weight"
                  type="number"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="flex-1 p-2 border rounded"
                />
                <select className="w-20 p-2 bg-gray-200 rounded">
                  <option>kg</option>
                </select>
              </div>
              {["width", "length", "height"].map((dim) => (
                <div key={dim} className="flex items-center space-x-2">
                  <label className="w-24 text-[#1e3a8a] capitalize">
                    {dim}:
                  </label>
                  <input
                    name={dim}
                    type="number"
                    value={formData[dim]}
                    onChange={handleInputChange}
                    className="flex-1 p-2 border rounded"
                  />
                  <select className="w-20 p-2 bg-gray-200 rounded">
                    <option>cm</option>
                  </select>
                </div>
              ))}
            </div>

            {/* CBM Calculation */}
            <div className="bg-gray-200 p-4 rounded">
              <div className="text-sm text-gray-600">Calculation</div>
              <div className="text-sm">CBM= Width*Length*Height</div>
              <div className="mt-2">
                <span className="font-bold">CBM</span>
                <span className="ml-4">{formData.CBM} CBM</span>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={() => setIsFormOpen(true)}
              className="w-full bg-yellow-500 text-white py-3 rounded flex items-center justify-center space-x-2"
            >
              <span>NEXT</span>
              <ArrowRightIcon size={20} />
            </button>

            {/* Help Link */}
            <div className="text-center">
              <a href="/contact-us" className="text-[#1e3a8a] underline">
                Need Help? Contact Us
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-1 gap-8">
          <QuotationForm formDataOne={formData} setIsFormOpen={setIsFormOpen} />
        </div>
      )}
    </>
  );
};

export default Air;
