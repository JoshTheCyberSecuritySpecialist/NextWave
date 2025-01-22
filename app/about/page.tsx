"use client";

import { Card } from "@/components/ui/card";
import { Heart, Users, Shield, Globe } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
            Our Story
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            NextWave was born from a simple idea: everyone has a story worth sharing.
            We're building the future of creative expression, one short video at a time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: <Heart className="w-8 h-8 text-pink-500" />,
                title: "Our Mission",
                description: "Empower creators to share their authentic stories with the world.",
              },
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: "Community First",
                description: "Building a supportive space for creators to grow and connect.",
              },
              {
                icon: <Shield className="w-8 h-8 text-purple-500" />,
                title: "Safety & Privacy",
                description: "Your security and privacy are our top priorities.",
              },
              {
                icon: <Globe className="w-8 h-8 text-teal-500" />,
                title: "Global Reach",
                description: "Connecting creators and audiences across borders.",
              },
            ].map((item, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 p-6">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  role: "CEO & Founder",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                },
                {
                  name: "Alex Rivera",
                  role: "Head of Product",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                },
                {
                  name: "Maya Patel",
                  role: "Creative Director",
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-32 h-32 mx-auto rounded-full mb-4 bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image}?auto=format&fit=crop&q=80)` }}
                  />
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}