"use client";

import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, UserCheck } from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Data Collection",
      content: "We collect information that you provide directly to us, including when you create an account, upload content, or communicate with other users. This may include your name, email address, profile information, and any content you create or share on NextWave."
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: "Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments."
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: "Data Usage",
      content: "We use your information to provide, maintain, and improve our services, process your requests, and communicate with you. This includes personalizing content, providing customer support, and sending service-related notifications."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-pink-500" />,
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal information. You can also object to processing and request data portability. Contact our privacy team to exercise these rights."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your data.
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
            <h2 className="text-2xl font-bold mb-4">Detailed Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              Last updated: January 1, 2024
            </p>
            {/* Add more detailed privacy policy sections here */}
          </div>
        </div>
      </section>
    </main>
  );
}