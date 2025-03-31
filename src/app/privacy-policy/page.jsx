import React from 'react';
import { Shield } from 'lucide-react';

function page() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Shield className="w-8 h-8 text-blue-600" />
                        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
                    </div>

                    <p className="text-gray-900 mb-6">Effective Date: {currentDate}</p>

                    <div className="prose prose-slate max-w-none">
                        <p className="text-gray-900 mb-6">
                            {`Transpeed Cargo Private Limited ("Transpeed Cargo," "we," "our," or "us") is
                            committed to protecting your privacy. This Privacy Policy explains how we collect,
                            use, store, and safeguard your personal and business information when you use our
                            logistics, freight forwarding, and supply chain management services.`}
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
                            <p className="text-gray-900 mb-4">We collect and process various types of data necessary for providing our services, including:</p>

                            <div className="ml-4">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">A. Personal Information</h3>
                                <ul className="list-disc ml-6 text-gray-900 mb-4">
                                    <li>Name, contact number, email address, and mailing address</li>
                                    <li>Identity verification details (e.g., PAN, Aadhaar, passport) where applicable</li>
                                </ul>

                                <h3 className="text-xl font-medium text-gray-800 mb-2">B. Business & Shipping Information</h3>
                                <ul className="list-disc ml-6 text-gray-900 mb-4">
                                    <li>Company name, registration details, GST number, and business address</li>
                                    <li>Shipment details, including sender and recipient information</li>
                                    <li>Import/export documentation</li>
                                </ul>

                                <h3 className="text-xl font-medium text-gray-800 mb-2">C. Transaction & Payment Data</h3>
                                <ul className="list-disc ml-6 text-gray-900 mb-4">
                                    <li>Billing details, payment methods, and transaction history</li>
                                    <li>Tax information and financial records</li>
                                </ul>

                                <h3 className="text-xl font-medium text-gray-800 mb-2">D. Technical & Usage Data</h3>
                                <ul className="list-disc ml-6 text-gray-900 mb-4">
                                    <li>IP addresses, device type, browser details, and cookies</li>
                                    <li>GPS/location data if required for shipment tracking</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
                            <ul className="list-disc ml-6 text-gray-900">
                                <li className="mb-2">Freight Forwarding & Logistics Services – Processing shipments, managing
                                    transportation, customs clearance, and warehousing.</li>
                                <li className="mb-2">Customer Support – Responding to inquiries, tracking shipments, and
                                    providing assistance.</li>
                                <li className="mb-2">Billing & Payments – Processing invoices, payments, and refunds securely.
                                </li>
                                <li className="mb-2">Compliance & Legal Obligations – Adhering to trade regulations, customs
                                    laws, and tax requirements.</li>
                                <li className="mb-2">Improving Services – Enhancing our website, optimizing supply chain
                                    operations, and personalizing customer experience.</li>
                                <li>Marketing & Communication – Sending industry updates, service alerts, and
                                    promotional content (you can opt out anytime).</li>
                            </ul>
                        </section>
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Data Sharing & Disclosure</h2>
                            <p>We do not sell or rent your personal data. However, we may share it with:</p>
                            <ul className="list-disc ml-6 text-gray-900">
                                <li className="mb-2">Logistics & Shipping Partners – Airlines, shipping lines, transport providers,
                                    and warehousing companies for service execution.</li>
                                <li className="mb-2">Government & Regulatory Authorities – Customs departments, port
                                    authorities, and legal bodies as required by law.</li>
                                <li className="mb-2">Service Providers – Payment gateways, IT service providers, and CRM
                                    platforms to facilitate operations.
                                </li>
                                <li className="mb-2">Business Transfers – In case of a merger, acquisition, or corporate
                                    restructuring.</li>

                            </ul>
                        </section>
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
                            <p className="text-gray-900">We implement strict security measures to protect your data from unauthorized access, alteration, or loss. These include:</p>
                            <ul className="list-disc ml-6 text-gray-900">
                                <li className="mb-2"><strong>Encryption</strong> – Encryption of sensitive financial transactions.</li>
                                <li className="mb-2"><strong>Restricted Access</strong> – Access to shipment and business data is limited based on roles and permissions.</li>
                                <li className="mb-2"><strong>Regular Audits</strong> – Periodic audits to ensure compliance with industry standards.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cookies & Tracking Technologies</h2>
                            <p className="text-gray-900">We use cookies and tracking tools to:</p>
                            <ul className="list-disc ml-6 text-gray-900">
                                <li className="mb-2">Monitor website performance and enhance user experience.</li>
                                <li className="mb-2">Track shipment statuses and provide real-time updates.</li>
                                <li className="mb-2">Personalize service recommendations for better engagement.</li>
                            </ul>
                            <p className="text-gray-900 mt-2">You can manage cookie preferences through your browser settings.</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights & Choices</h2>
                            <p className="text-gray-900">You have the right to:</p>
                            <ul className="list-disc ml-6 text-gray-900">
                                <li className="mb-2"><strong>Access & Update</strong> – Modify your personal or business information.</li>
                                <li className="mb-2"><strong>Request Deletion</strong> – Request removal of data no longer needed for legal or operational purposes.</li>
                                <li className="mb-2"><strong>Opt Out</strong> – Choose to unsubscribe from marketing communications.</li>
                            </ul>
                            <p className="text-gray-900 mt-2">To exercise these rights, contact us at <strong>[Insert Contact Email]</strong>.</p>
                        </section>
                        <section className='mb-8'>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. International Data Transfers</h2>
                            <p className="text-gray-900">As a global logistics provider, we may transfer data across borders to facilitate
                                international shipments. We comply with applicable data protection laws and ensure
                                that transfers are secure.
                            </p>

                        </section>
                        <section className='mb-8'>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8.Third-Party Links</h2>
                            <p className="text-gray-900">Our website may contain links to third-party logistics platforms, government portals,
                                or industry resources. We are not responsible for their privacy practices, and we
                                advise reviewing their policies before sharing any data
                            </p>

                        </section>
                        <section className='mb-8'>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9.Updates to This Privacy Policy</h2>
                            <p className="text-gray-900">We may update this Privacy Policy periodically to reflect changes in our services or
                                legal requirements. Any modifications will be posted with an updated effective date.
                            </p>

                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">Transpeed Cargo Private Limited</h3>
                                <p>AD - 7E, Pitampura, Delhi 110034</p>
                                <p className="text-gray-900">Email: contact@transpeed.in</p>
                                <p className="text-gray-900">Phone: +91-9354382988</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;