"use client";

import { Card } from "@/components/ui/card";
import { ScrollText, ShieldCheck, AlertCircle, Scale } from "lucide-react";

export default function Terms() {
  const sections = [
    {
      icon: <ScrollText className="w-8 h-8 text-blue-500" />,
      title: "Terms of Use",
      content: "By accessing or using NextWave, you agree to be bound by these terms and all applicable laws and regulations. If you disagree with any part of these terms, you may not access our service."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
      title: "User Responsibilities",
      content: "You are responsible for maintaining the confidentiality of your account and for all activities under your account. You must not share harmful content or engage in activities that violate our community guidelines."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-yellow-500" />,
      title: "Content Guidelines",
      content: "All content must comply with our community guidelines. We reserve the right to remove content that violates these guidelines or terminate accounts that repeatedly infringe upon them."
    },
    {
      icon: <Scale className="w-8 h-8 text-purple-500" />,
      title: "Intellectual Property",
      content: "You retain ownership of your content, but grant NextWave a license to use, modify, and display it. You must not upload content that infringes upon others' intellectual property rights."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Please read these terms carefully before using NextWave.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {sections.map((section, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">{section.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                    <p className="text-gray-400">{section.content}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="prose prose-invert max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Detailed Terms of Service</h2>
            <p className="text-gray-300 mb-4">
              Last updated: January 1, 2024
            </p>
            {/* Add more detailed terms sections here */}
          </div>
        </div>
      </section>
    </main>
  );
}