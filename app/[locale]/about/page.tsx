"use client";

import { useTranslations } from 'next-intl';
import { Card } from "@/components/ui/card";
import { Heart, Users, Shield, Globe } from "lucide-react";

export default function About() {
  const t = useTranslations('about');

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            {t('subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: <Heart className="w-8 h-8 text-pink-500" />,
                title: t('mission.title'),
                description: t('mission.description'),
              },
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: t('community.title'),
                description: t('community.description'),
              },
              {
                icon: <Shield className="w-8 h-8 text-purple-500" />,
                title: t('safety.title'),
                description: t('safety.description'),
              },
              {
                icon: <Globe className="w-8 h-8 text-teal-500" />,
                title: t('global.title'),
                description: t('global.description'),
              },
            ].map((item, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 p-6">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}