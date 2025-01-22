"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Siren as Fire, TrendingUp } from "lucide-react";
import OptimizedImage from "@/components/optimized-image";
import { Suspense } from "react";
import LoadingSpinner from "@/components/loading-spinner";

export default function Community() {
  const challenges = [
    {
      title: "#DanceChallenge",
      participants: "2.5M",
      deadline: "2 days left",
      prize: "$1,000",
      image: "https://images.unsplash.com/photo-1545694693-b192f2a11c8c",
    },
    {
      title: "#SingWithMe",
      participants: "1.8M",
      deadline: "5 days left",
      prize: "$500",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
    },
    {
      title: "#MagicTricks",
      participants: "980K",
      deadline: "1 week left",
      prize: "$750",
      image: "https://images.unsplash.com/photo-1503431128871-cd250803fa41",
    },
  ];

  const trending = [
    {
      hashtag: "#NextWaveCreator",
      posts: "5.2M",
      growth: "+125%",
    },
    {
      hashtag: "#TalentedAF",
      posts: "3.8M",
      growth: "+82%",
    },
    {
      hashtag: "#CreativeMinds",
      posts: "2.9M",
      growth: "+65%",
    },
    {
      hashtag: "#ViralMoment",
      posts: "1.7M",
      growth: "+43%",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <Suspense fallback={<LoadingSpinner />}>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
              Join the Community
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
              Connect with millions of creators, participate in challenges, and be part of something bigger.
            </p>

            {/* Active Challenges */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                <Fire className="text-orange-500" /> Active Challenges
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {challenges.map((challenge, index) => (
                  <Card
                    key={index}
                    className="bg-gray-900/50 border-gray-800 overflow-hidden group cursor-pointer"
                  >
                    <OptimizedImage
                      src={`${challenge.image}?auto=format&fit=crop&q=80`}
                      alt={challenge.title}
                      width={600}
                      height={400}
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold">{challenge.title}</h3>
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                          {challenge.deadline}
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>{challenge.participants} participants</span>
                        <span className="text-yellow-400">Prize: {challenge.prize}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Trending Hashtags */}
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                <TrendingUp className="text-pink-500" /> Trending Now
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {trending.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-gray-900/50 border-gray-800 p-6 hover:border-pink-500/50 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-bold mb-2">{item.hashtag}</h3>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{item.posts} posts</span>
                      <span className="text-green-400">{item.growth}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </main>
  );
}