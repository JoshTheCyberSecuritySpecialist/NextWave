"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAnalytics } from "@/hooks/use-analytics";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Apple,
  Play,
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const { trackConversion } = useAnalytics();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your API
    console.log("Newsletter signup:", email);
    trackConversion("newsletter_signup");
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
              NextWave
            </h2>
            <p className="text-gray-300 mb-6">
              Share your story in seconds with NextWave, the next generation
              short-form video platform.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<Facebook />} label="Facebook" />
              <SocialLink href="https://twitter.com" icon={<Twitter />} label="Twitter" />
              <SocialLink href="https://instagram.com" icon={<Instagram />} label="Instagram" />
              <SocialLink href="https://youtube.com" icon={<Youtube />} label="YouTube" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/features">Features</FooterLink>
              <FooterLink href="/community">Community</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/cookies">Cookie Policy</FooterLink>
              <FooterLink href="/guidelines">Community Guidelines</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div>
                <label htmlFor="email-input" className="sr-only">
                  Email address
                </label>
                <Input
                  id="email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  required
                  aria-label="Email address for newsletter"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Subscribe to Newsletter
              </Button>
            </form>

            {/* App Store Badges */}
            <div className="mt-6 space-y-4">
              <AppStoreButton
                icon={<Apple className="w-6 h-6" />}
                store="App Store"
                href="https://apps.apple.com"
              />
              <AppStoreButton
                icon={<Play className="w-6 h-6" />}
                store="Google Play"
                href="https://play.google.com"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
            <ContactInfo icon={<Mail />} text="support@nextwave.app" />
            <ContactInfo icon={<Phone />} text="+1 (555) 123-4567" />
            <ContactInfo
              icon={<MapPin />}
              text="123 Creator Street, San Francisco, CA 94105"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 mt-8">
          <p>© {new Date().getFullYear()} NextWave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-400 hover:text-white transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}

function AppStoreButton({ icon, store, href }: { icon: React.ReactNode; store: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
      aria-label={`Download from ${store}`}
    >
      {icon}
      <div className="text-left">
        <div className="text-xs">Download on the</div>
        <div className="text-sm font-semibold">{store}</div>
      </div>
    </a>
  );
}

function ContactInfo({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span>{text}</span>
    </div>
  );
}