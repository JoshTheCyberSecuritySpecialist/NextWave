"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What is NextWave?",
      answer: "NextWave is a short-form video platform that enables creators to share their stories through engaging, creative content. With advanced editing tools, AR filters, and a supportive community, NextWave makes it easy to create and share amazing videos.",
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply download the NextWave app from your device's app store, create an account, and start exploring content. When you're ready to create, tap the plus button to access our suite of creation tools.",
    },
    {
      question: "What makes NextWave different?",
      answer: "NextWave stands out with its professional-grade editing tools, unique AR filters, community challenges, and creator-first approach. We focus on fostering genuine connections and supporting creative expression.",
    },
    {
      question: "How do challenges work?",
      answer: "Challenges are themed contests where creators can showcase their talent and creativity. Each challenge has specific rules, deadlines, and prizes. Participate by creating content with the challenge hashtag and following the guidelines.",
    },
    {
      question: "Is NextWave safe for young users?",
      answer: "Yes, safety is our top priority. We have robust content moderation, age restrictions, and privacy settings. Parents can enable additional controls, and we regularly update our safety features based on community feedback.",
    },
    {
      question: "Can I earn money on NextWave?",
      answer: "Yes! Once you meet our Creator Program requirements, you can earn through various monetization features including the Creator Fund, virtual gifts, brand partnerships, and challenge prizes.",
    },
    {
      question: "How does the algorithm work?",
      answer: "Our algorithm personalizes your feed based on your interactions, interests, and viewing habits. It considers factors like watch time, engagement, and content categories to deliver videos you'll love.",
    },
    {
      question: "What are the video requirements?",
      answer: "Videos can be up to 3 minutes long and must follow our community guidelines. We support various formats and resolutions, optimizing playback for different devices and connection speeds.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 text-center mb-16">
            Got questions? We've got answers. If you can't find what you're looking for,
            reach out to our support team.
          </p>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-900/50 border border-gray-800 rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
}