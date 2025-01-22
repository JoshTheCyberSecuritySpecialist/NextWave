"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Smartphone, Video, Wand2, Trophy, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-pink-600/20 z-0" />
        <div 
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2
          }}
        />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
            Catch the Wave of Creativity
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Share your story in seconds
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-5 w-5" /> Download for iOS
            </Button>
            <Button size="lg" variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-500/10">
              <Smartphone className="mr-2 h-5 w-5" /> Download for Android
            </Button>
          </div>
          <ArrowDown 
            className={`w-8 h-8 mx-auto mt-12 animate-bounce cursor-pointer ${
              isScrolled ? 'opacity-0' : 'opacity-100'
            } transition-opacity`}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Unleash Your Creativity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Video className="w-10 h-10 text-blue-400" />}
              title="Swipe-to-Discover"
              description="Endless entertainment at your fingertips. Discover trending videos from creators worldwide."
            />
            <FeatureCard
              icon={<Wand2 className="w-10 h-10 text-pink-400" />}
              title="Advanced Editing"
              description="Professional-grade editing tools to make your content stand out."
            />
            <FeatureCard
              icon={<Trophy className="w-10 h-10 text-purple-400" />}
              title="Community Challenges"
              description="Join trending challenges and showcase your unique take on popular themes."
            />
            <FeatureCard
              icon={<Smartphone className="w-10 h-10 text-teal-400" />}
              title="AR Filters"
              description="Express yourself with cutting-edge AR filters and effects."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-colors duration-300">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}