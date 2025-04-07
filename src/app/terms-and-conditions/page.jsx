import React from 'react';

const page = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 mt-28 mb-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
      <p className="text-gray-900">Effective Date: 26/3/2025</p>
      <p className="text-gray-900 mb-4">Last Updated:  26/3/2025</p>
      <p className="text-gray-900 mb-5">
        Welcome to Transpeed Cargo Private Limited (“Company,” “we,” “our,” or “us”). These Terms & Conditions (“Terms”) govern the use of our freight forwarding,
        logistics, and cargo transportation services. By engaging our services, you (“Customer,” “Client,” or “You”) agree to abide by these Terms.
      </p>

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Services Offered</h2>
        <ul className="list-disc ml-6 text-gray-900">
          <li className="mb-2"><strong>Freight Forwarding:</strong> We facilitate the transportation of goods via air, sea, and land through our logistics network.</li>
          <li className="mb-2"><strong>Customs Clearance:</strong> We assist in customs documentation and clearance in compliance with applicable laws.</li>
          <li className="mb-2"><strong>Warehousing & Distribution:</strong> We provide secure storage and last-mile delivery solutions.</li>
          <li className="mb-2"><strong>Value-Added Services:</strong> Includes cargo insurance, packaging, labeling, and documentation support.</li>
        </ul>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Booking & Acceptance of Shipment</h2>
        <ul className="list-disc ml-6 text-gray-900">
          <li className="mb-2">Bookings must be made in advance and confirmed in writing.</li>
          <li className="mb-2">Acceptance of shipments is subject to compliance with local and international shipping regulations.</li>
          <li className="mb-2">Dangerous goods, prohibited items, and restricted cargo require prior approval and necessary documentation.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Rates, Payment & Charges</h2>
        <ul className="list-disc ml-6 text-gray-900">
          <li className="mb-2">Freight rates, surcharges, and taxes will be quoted based on weight, volume, and shipping mode.</li>
          <li className="mb-2">Payments must be made as per the agreed terms. Late payments may attract interest charges.</li>
          <li className="mb-2">Additional charges may apply for customs duties, storage, handling, and other ancillary services.</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Customer Obligations</h2>
        <ul className="list-disc ml-6 text-gray-900">
          <li className="mb-2">The Customer must provide accurate details, including invoice, packing list, and required shipping documents.</li>
          <li className="mb-2">The Customer is responsible for ensuring proper packaging and compliance with safety regulations.</li>
          <li className="mb-2">Any misdeclaration, incorrect documentation, or violation of shipping laws will be the Customer’s liability.</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Liability & Limitations</h2>
        <ul className="list-disc ml-6 text-gray-900">
          <li className="mb-2">Transpeed Cargo Pvt Ltd acts as an intermediary and is not liable for delays, damages, or losses caused by third-party carriers, customs authorities, or force majeure events.</li>
          <li className="mb-2">Liability for lost or damaged goods is limited to the extent of applicable international conventions and the carrier’s terms of service.</li>
          <li className="mb-2">Cargo insurance is available upon request, but must be arranged before shipment.</li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Delivery & Transit Time</h2>
        <ul className="list-disc ml-6 text-gray-900">
          <li className="mb-2">Estimated delivery times are indicative and subject to factors beyond our control, including customs clearance and carrier delays.</li>
          <li className="mb-2">We are not responsible for delays due to unforeseen circumstances, including weather conditions, strikes, or governmental actions.</li>
        </ul>
      </section>

      {/* Section 7 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Claims & Dispute Resolution</h2>
        <ul className="list-disc ml-6 text-gray-900">
          <li className="mb-2">Claims for lost or damaged goods must be filed in writing within seven (7) days of delivery.</li>
          <li className="mb-2">Disputes shall be resolved amicably. If unresolved, they will be subject to arbitration in [City, India] as per the Arbitration and Conciliation Act, 1996.</li>
        </ul>
      </section>

      {/* Section 8 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Termination & Cancellation</h2>
        <ul className="list-disc ml-6 text-gray-900">
          <li className="mb-2">We reserve the right to cancel or refuse service if fraudulent, illegal, or non-compliant activities are suspected.</li>
          <li className="mb-2">Cancellations by the Customer may incur charges based on service completion status.</li>
        </ul>
      </section>

      {/* Section 9 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Governing Law & Jurisdiction</h2>
        <p className="text-gray-900">
          These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in [City, India].
        </p>
      </section>

      {/* Section 10 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Amendments & Updates</h2>
        <p className="text-gray-900">
          We reserve the right to update these Terms at any time. Changes will be posted on our website and will take effect upon publication.
        </p>
        <p className="text-gray-900 mt-2">For further queries, please contact:</p>
        <p className="text-gray-900"><strong>📧 Email:</strong> contact@transpeed.in</p>
        <p className="text-gray-900"><strong>📞 Phone:</strong> +91-9354382988</p>
      </section>
    </div>
  );
};

export default page;
