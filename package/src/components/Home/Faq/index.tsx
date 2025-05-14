// components/Faq.js
'use client';
import Image from 'next/image';
import React, { useState } from 'react';// Optional: install lucide-react icons

const faqData = [
    {
        question: "What is Crypgo?",
        answer: "Crypgo is a cryptocurrency exchange that allows users to trade 100+ cryptocurrencies worldwide.",
    },
    {
        question: "Is Crypgo available worldwide?",
        answer: "Yes, Crypgo is accessible from most countries around the globe.",
    },
    {
        question: "Which cryptocurrencies are supported on Crypgo?",
        answer: "We support Bitcoin, Ethereum, Litecoin, and many more. Over 100 cryptocurrencies are available.",
    },
    {
        question: "Is my personal information secure with Crypgo?",
        answer: "Yes, we prioritize your security with advanced encryption and compliance protocols.",
    },
    {
        question: "Are there any deposit or withdrawal fees?",
        answer: "Our fee structure is transparent. Visit our pricing page for detailed info.",
    },
    {
        question: "Does Crypgo offer advanced trading tools?",
        answer: "Yes, Crypgo provides charts, APIs, and tools suitable for both beginners and professionals.",
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id='faq' className=" py-16 text-white">
            <div className="container">
                <div className=" mx-auto px-4">
                    <div className="text-center mb-10">
                        <p className="text-green-400 uppercase text-sm">Popular questions</p>
                        <h2 className="text-3xl md:text-4xl font-semibold mt-2">Learn more about Crypgo</h2>
                        <p className="text-gray-400 mt-2">We accept 100+ cryptocurrencies around the world</p>
                    </div>
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/5 rounded-lg p-4 cursor-pointer transition-all duration-300"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium">{item.question}</h3>
                                    <Image
                                        src={"/images/icons/plus-icon.svg"}
                                        alt='plus-icon'
                                        width={20}
                                        height={20}
                                        className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                                    />
                                </div>

                                <div
                                    className={`mt-2 text-gray-400 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40 visible' : 'max-h-0 hidden'
                                        }`}
                                >
                                    <p className="py-2">{item.answer}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
