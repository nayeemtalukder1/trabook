'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

          {/* Left: Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* Replace with your actual logo */}
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">TK</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Trabook</h3>
            </div>

            <p className="text-sm leading-relaxed max-w-xs">
              Trabook - Trusted Travel Supplier in Bangladesh. We are committed to providing
              comfortable travel to you and your family.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://wa.me/88019500606055"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-white hover:animate-[var(--animate-rotate-30-hover)]
    hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
              </a>
              <a
                href="#"
                className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5 text-white hover:animate-[var(--animate-rotate-30-hover)]
    hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
              </a>
            </div>
          </div>

          {/* Center: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-400 mt-0.5" />
                <p className="text-sm">
                  24 Chopara road,<br />
                  uttora, Dhaka.
                </p>
              </div>

              <div className="group flex items-center gap-3">
                <Phone className="w-5 h-5 text-pink-400 hover:animate-[var(--animate-rotate-30-hover)]
    hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
                <div className="space-y-1 text-sm">
                  <p>01969148410</p>
                  <p>01728527229</p>
                  <p>01708782739</p>
                </div>
              </div>

              <div className="group flex items-center gap-3">
                <Mail className="w-5 h-5 text-pink-400 hover:animate-[var(--animate-rotate-30-hover)]
    hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
                <p className="text-sm break-all">tarbook@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right: Google Map */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Our Location</h4>
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              {/* Replace with actual Google Maps embed */}
              <div className="bg-gray-800 aspect-video rounded-2xl flex items-center justify-center relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.456789012345!2d89.056789!3d24.415678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI0JzU2LjQiTiA4OcKwMDMnMjQuNCJF!5e0!3m2!1sen!2sbd!4v1234567890"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* View Larger Map Button */}
              <a
                href="https://maps.google.com/?q=Ekdala,+Tebaria,+Natore"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 bg-white text-gray-800 text-xs font-medium px-3 py-1.5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-1 opacity-0 group-hover:opacity-100"
              >
                <MapPin className="w-3 h-3" />
                View larger map
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © 2025 Trabook - All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}