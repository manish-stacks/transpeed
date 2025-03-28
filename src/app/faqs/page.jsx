"use client"

import React, { useState } from 'react';
import { ChevronDown, Search, Shield, CheckCircle, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { faqData } from '@/components/FaqData/FaqData';

// FAQ Item Component with enhanced animations
const FAQItem = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 ${isOpen ? 'shadow-md' : ''}`}
        >
            <button
                className="flex w-full justify-between items-center text-left p-5"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                        <HelpCircle className="h-5 w-5" />
                    </div>
                    <span className="text-lg font-medium text-gray-900">{item.question}</span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                    className="ml-4 flex-shrink-0"
                >
                    <ChevronDown className={`h-5 w-5 ${isOpen ? 'text-blue-600' : 'text-gray-400'}`} />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-gray-100"
                    >
                        <div className="p-5 pt-4 bg-gray-50">
                            <p className="text-gray-700 leading-relaxed">{item.answer}</p>

                            {/* Show a helpful message at the bottom of expanded items */}
                            <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                                <div className="flex items-center text-sm text-gray-500">
                                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                    <span>Was this answer helpful?</span>
                                </div>
                                <button className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-800 transition-colors">
                                    Contact Support
                                    <ArrowRight className="ml-1 h-3 w-3" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// Search component
const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
                type="text"
                className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};

// FAQ Page Component
function FAQPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState(0);

    // Filter FAQ items based on search query
    const filteredFaqData = searchQuery.trim() === ''
        ? faqData
        : faqData.map(section => ({
            ...section,
            items: section.items.filter(item =>
                item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.answer.toLowerCase().includes(searchQuery.toLowerCase())
            )
        })).filter(section => section.items.length > 0);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-4">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
                    <div className="relative h-64 sm:h-62 bg-blue-600">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
                        <div className="absolute inset-0 bg-[url('/images/faq-pattern.png')] opacity-20"></div>

                        <div className="relative h-full flex flex-col justify-center px-6 sm:px-12">
                            <div className="flex items-center gap-3 mb-4">
                                <Shield className="w-8 h-8 text-white" />
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                                    Frequently Asked Questions
                                </h1>
                            </div>
                            <p className="text-blue-100 max-w-2xl text-lg">
                                Find answers to common questions about Transpeed Cargo's services, shipping processes, and more.
                            </p>

                            {/* Search bar positioned at the bottom of the hero section */}
                            <div className="absolute -bottom-6 left-0 right-0 px-6 sm:px-12">
                                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 pb-8 px-6 sm:px-12">
                        {/* Quick links */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                            {faqData.map((section, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`p-4 rounded-xl text-center transition-all duration-200 ${activeTab === index
                                            ? 'bg-blue-50 border-blue-100 border text-blue-700'
                                            : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                                        }`}
                                >
                                    <div className="flex flex-col items-center">
                                        <div className={`p-2 rounded-full mb-2 ${activeTab === index ? 'bg-blue-100' : 'bg-white'
                                            }`}>
                                            {getIconForSection(section.title)}
                                        </div>
                                        <span className="text-sm font-medium">{section.title}</span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* FAQ Content */}
                        <div className="space-y-12">
                            {filteredFaqData.length > 0 ? (
                                filteredFaqData.map((section, sectionIndex) => (
                                    <div
                                        key={sectionIndex}
                                        className={`space-y-4 ${activeTab === sectionIndex || searchQuery ? '' : 'hidden'}`}
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                                                {getIconForSection(section.title)}
                                            </div>
                                            <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
                                        </div>

                                        <div className="grid gap-4">
                                            {section.items.map((item, itemIndex) => (
                                                <FAQItem key={itemIndex} item={item} index={itemIndex} />
                                            ))}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-12">
                                    <div className="mx-auto w-96 h-24 mb-6 relative">
                                        <Image
                                            src="/images/no.gif"
                                            alt="No results found"
                                         
                                           fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">No results found</h3>
                                    <p className="text-gray-600 max-w-md mx-auto">
                                        We couldn't find any FAQs matching your search. Try using different keywords or browse the categories.
                                    </p>
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                                    >
                                        Clear search
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="p-8 md:p-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
                            <p className="text-gray-600 mb-6">
                                If you couldn't find the answer to your question, our support team is here to help you.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-100 rounded-full text-blue-600 mt-1">
                                        <MessageCircle className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">Chat with us</h3>
                                        <p className="text-gray-600 text-sm">Our team is available 24/7 to assist you with any questions.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-green-100 rounded-full text-green-600 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">Call us</h3>
                                        <p className="text-gray-600 text-sm">+91 123 456 7890 (Mon-Fri, 9am-6pm)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-amber-100 rounded-full text-amber-600 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">Email us</h3>
                                        <p className="text-gray-600 text-sm">support@transpeedcargo.com</p>
                                    </div>
                                </div>
                            </div>
                            <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center">
                                Contact Support
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                        <div className="relative hidden md:block">
                            <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
                            <Image
                                src="/images/customer-support.jpg"
                                alt="Customer Support"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper function to get icon based on section title
function getIconForSection(title) {
    switch (title.toLowerCase()) {
        case 'Customs Clearance & Documentation':
            return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" /><path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>;
        case 'payment & pricing':
            return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>;
        case 'tracking & returns':
            return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
        case 'account & orders':
            return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
        default:
            return <HelpCircle className="h-5 w-5" />;
    }
}

export default FAQPage;
