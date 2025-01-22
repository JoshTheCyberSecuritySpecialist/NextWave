"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import OptimizedImage from "@/components/optimized-image";
import { Calendar, Clock, User } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      title: "The Future of Short-Form Video Content",
      excerpt: "Explore how AI and AR are revolutionizing video creation and what it means for content creators.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      author: "Sarah Chen",
      date: "Jan 15, 2024",
      readTime: "5 min read",
      category: "Technology"
    },
    {
      title: "Creator Economy: A New Era",
      excerpt: "How digital platforms are enabling creators to build sustainable businesses and reach global audiences.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      author: "Alex Rivera",
      date: "Jan 12, 2024",
      readTime: "4 min read",
      category: "Business"
    },
    {
      title: "Building Community Through Content",
      excerpt: "Tips and strategies for creating engaging content that builds meaningful connections with your audience.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
      author: "Maya Patel",
      date: "Jan 10, 2024",
      readTime: "6 min read",
      category: "Community"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
            NextWave Blog
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Insights, updates, and stories from the NextWave community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                <Card className="bg-gray-900/50 border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                  <OptimizedImage
                    src={`${post.image}?auto=format&fit=crop&q=80`}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                        {post.category}
                      </Badge>
                    </div>
                    <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-400 gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}