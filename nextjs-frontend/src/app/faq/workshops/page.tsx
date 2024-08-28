import FAQList from '@/components/faq/FAQList';
import Navbar from '@/components/Navbar';
import React from 'react';

const faqs = [
  { question: 'When is the hackathon held?', answer: 'Ans: 29 June 2025' },
  { question: 'When is the hackathon held?', answer: 'Ans: 29 June 2025' },
  // Add more FAQs as needed
];

const workshopsFAQ: React.FC = () => {
  return (
    <div className="bg-blue-900 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Workshops FAQ</h1>
        <FAQList faqs={faqs} />
      </div>
    </div>
  );
};

export default workshopsFAQ;