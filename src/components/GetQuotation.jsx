"use client";
import React, { useState } from "react";
import Lcl from "./quotation/lcl";
import Fcl from "./quotation/Fcl";
import Air from "./quotation/Air";

const incoterms = [
  { value: "EXW", label: "EXW – Ex Works" },
  { value: "FCA", label: "FCA – Free Carrier" },
  { value: "CPT", label: "CPT – Carriage Paid To" },
  { value: "CIP", label: "CIP – Carriage and Insurance Paid To" },
  { value: "DAP", label: "DAP – Delivered at Place" },
  { value: "DPU", label: "DPU – Delivered at Place Unloaded" },
  { value: "DDP", label: "DDP – Delivered Duty Paid" },
  { value: "FAS", label: "FAS – Free Alongside Ship" },
  { value: "FOB", label: "FOB – Free On Board" },
  { value: "CFR", label: "CFR – Cost and Freight" },
  { value: "CIF", label: "CIF – Cost, Insurance, and Freight" },
];

function GetQuotation() {
  const [selectedTab, setSelectedTab] = useState("lcl");

  const [isformOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen  p-4 md:p-8">
      <h1 className="text-3xl md:text-5xl font-bold text-sky-900 mb-8 text-center">
        Get a quotation
      </h1>
      <div className="max-w-6xl mx-auto bg-gray-50">
        {/* Shipping Type Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <button
            className={`p-4 text-center ${
              selectedTab === "lcl"
                ? "bg-yellow-600 text-white"
                : "bg-[#121a46]/50 text-[#fff]"
            }`}
            disabled={isformOpen}
            onClick={() => setSelectedTab("lcl")}
          >
            <div className="text-xl font-bold">LCL</div>
            <div className="text-sm">(Less than Container Load)</div>
          </button>
          <button
            className={`p-4 text-center ${
              selectedTab === "fcl"
                ? "bg-yellow-600 text-white"
                : "bg-[#121a46]/50 text-[#fff]"
            }`}
            disabled={isformOpen}
            onClick={() => setSelectedTab("fcl")}
          >
            <div className="text-xl font-bold">FCL</div>
            <div className="text-sm">(Full Container Load)</div>
          </button>
          <button
            className={`p-4 text-center ${
              selectedTab === "air"
                ? "bg-yellow-600 text-white"
                : "bg-[#121a46]/50 text-[#fff]"
            }`}
            disabled={isformOpen}
            onClick={() => setSelectedTab("air")}
          >
            <div className="text-xl font-bold">Air Freight</div>
          </button>
        </div>

        {/* lcl container */}
        {selectedTab === "lcl" && (
          <Lcl
            incoterms={incoterms}
            isformOpen={isformOpen}
            setIsFormOpen={setIsFormOpen}
            selectedTab={selectedTab}
          />
        )}
        {/* fcl container */}
        {selectedTab === "fcl" && (
          <Fcl
            incoterms={incoterms}
            isformOpen={isformOpen}
            setIsFormOpen={setIsFormOpen}
            selectedTab={selectedTab}
          />
        )}
        {/* Air Freight container */}
        {selectedTab === "air" && (
          <Air
            incoterms={incoterms}
            isformOpen={isformOpen}
            setIsFormOpen={setIsFormOpen}
            selectedTab={selectedTab}
          />
        )}
      </div>
    </div>
  );
}

export default GetQuotation;
