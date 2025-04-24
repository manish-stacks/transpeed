import React, { useState } from "react";
import { ArrowLeft, NewspaperIcon } from "lucide-react";
import { useRouter } from "next/navigation";

function QuotationForm({ formDataOne = {}, setIsFormOpen }) {
  // console.log(formDataOne);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    shipperAddress: "",
    shipperPinCode: "",
    consigneeAddress: "",
    consigneePinCode: "",
    additionalInfo: "",
    // selectedFile: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const combinedData = {
      ...formDataOne,
      ...formData,
    };

    try {
      const response = await fetch("/api/quotation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(combinedData),
      });

      const data = await response.json();
      data.error && console.error("Error:", data.error);
      console.log("Response data:", data);

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      if (response.ok) {
        alert("Form submitted successfully");
        setIsFormOpen(false);
        router.push("/thankyou");
        return;
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6  bg-slate-100 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Ex: Name"
              required
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <div className="flex">
              <select className="p-3 border rounded-l-md w-20">
                <option>+91</option>
              </select>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="9876543210"
                required
                className="w-full p-3 border border-l-0 rounded-r-md"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Ex: example@gmail.com"
              required
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Ex: Transpeed Cargo Pvt. Ltd."
              required
              className="w-full p-3 border rounded-md"
            />
          </div>
        </div>
        {["EXW", "DDU", "DAP"].includes(formDataOne.incoTerm) && (
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Shipper/Consignee Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Ex Work</label>
                <input
                  type="text"
                  name="shipperAddress"
                  value={formData.shipperAddress}
                  onChange={handleInputChange}
                  placeholder="Ex: Shipper Address"
                  required
                  className="w-full p-3 border rounded-md"
                />
                <input
                  type="text"
                  name="shipperPinCode"
                  value={formData.shipperPinCode}
                  onChange={handleInputChange}
                  placeholder="Ex: 400707"
                  required
                  className="w-full p-3 border rounded-md mt-4"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">DDU/DAP</label>
                <input
                  type="text"
                  name="consigneeAddress"
                  value={formData.consigneeAddress}
                  onChange={handleInputChange}
                  placeholder="Ex: Consignee Address"
                  required
                  className="w-full p-3 border rounded-md"
                />
                <input
                  type="text"
                  name="consigneePinCode"
                  value={formData.consigneePinCode}
                  onChange={handleInputChange}
                  placeholder="Ex: 400707"
                  required
                  className="w-full p-3 border rounded-md mt-4"
                />
              </div>
            </div>
          </div>
        )}
        <div>
          <label className="block text-gray-700 mb-2">
            Additional Information
          </label>
          <textarea
            placeholder="Ex: I need 20'' Container to ship my items"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div className="bg-gray-50 p-6 rounded-md flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-600">
            <p>Is your shipment too much and needs a whole container?</p>
            <p>
              Try <span className="font-medium">FCL</span> to utilise the full
              container benefits for your shipments
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsFormOpen(false)}
              type="button"
              className="px-6 py-2 text-[#1a4b8f]"
            >
              <ArrowLeft size={20} /> Edit
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 bg-yellow-600 text-white rounded-md flex items-center"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Processing...
                </span>
              ) : (
                <>
                  <NewspaperIcon size={20} className="mr-2" />
                  GET QUOTE
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default QuotationForm;
