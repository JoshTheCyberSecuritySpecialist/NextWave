"use client";

import { Card } from "@/components/ui/card";
import {
  Smartphone,
  Video,
  Wand2,
  Trophy,
  Sparkles,
  Share2,
  Shield,
  Zap,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Video className="w-12 h-12 text-blue-400" />,
      title: "Swipe-to-Discover",
      description: "Our intelligent algorithm learns your preferences to deliver a personalized feed of content you'll love.",
    },
    {
      icon: <Wand2 className="w-12 h-12 text-pink-400" />,
      title: "Advanced Editing Tools",
      description: "Professional-grade editing tools at your fingertips. Add effects, transitions, and music with ease.",
    },
    {
      icon: <Trophy className="w-12 h-12 text-purple-400" />,
      title: "Community Challenges",
      description: "Join daily challenges, showcase your creativity, and win exciting prizes.",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-yellow-400" />,
      title: "AR Filters",
      description: "Express yourself with cutting-edge AR filters and effects that track your movements in real-time.",
    },
    {
      icon: <Share2 className="w-12 h-12 text-green-400" />,
      title: "Cross-Platform Sharing",
      description: "Share your content across all major social platforms with a single tap.",
    },
    {
      icon: <Shield className="w-12 h-12 text-red-400" />,
      title: "Content Protection",
      description: "Advanced watermarking and copyright protection for your original content.",
    },
    {
      icon: <Zap className="w-12 h-12 text-orange-400" />,
      title: "Live Streaming",
      description: "Go live and interact with your audience in real-time with ultra-low latency streaming.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-teal-400" />,
      title: "Offline Mode",
      description: "Create and edit content without an internet connection, sync when you're back online.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
            Features That Empower
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Discover the tools and features that make NextWave the ultimate platform for short-form video creation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 p-6"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}