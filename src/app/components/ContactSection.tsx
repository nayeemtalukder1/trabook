'use client';

import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Send,
  Plane
} from 'lucide-react';
import SparkleProgress from './SparkleProgress';
import GradientRing from './GradientRing';
import AnimatedDotsLoader from './AnimatedDotsLoader';


export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <SparkleProgress />
        <div className="text-center text-4xl font-bold pb-7">Contact <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500
    bg-[length:200%_200%]
    animate-gradient
    text-transparent bg-clip-text">Information</span></div>
        <AnimatedDotsLoader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Contact Info */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-3xl hover:shadow-xl hover:scale-105 duration-150 p-8 md:p-10 space-y-8">
            {/* Header */}

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-2xl">
                <GradientRing size={60} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  To communicate your needs
                </h3>
                <p className="text-gray-600">Anytime, any question</p>
              </div>
            </div>

            {/* Contact Items */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="pl-2 flex items-start gap-4 hover:shadow-md duration-300 transition-shadow">
                <div className="p-3 bg-green-100 rounded-2xl">
                  <Phone className="w-6 h-6 text-green-600 group-hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Call Now</p>
                  <p className="text-lg font-medium text-gray-800">01969148410</p>
                  <p className="text-sm text-gray-500">8 a.m. to 8 p.m. (daily)</p>
                </div>
              </div>

              {/* Email */}
              <div className="pl-2 flex items-start gap-4 hover:shadow-md duration-300 transition-shadow">
                <div className="p-3 bg-blue-100 rounded-2xl">
                  <Mail className="w-6 h-6 text-blue-600 group-hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-lg font-medium text-gray-800 break-all">trabook@gmail.com</p>
                  <p className="text-sm text-gray-500">Reply confirmed in 24 hours</p>
                </div>
              </div>

              {/* Location */}
              <div className="pl-2 flex items-start gap-4 hover:shadow-md duration-300 transition-shadow">
                <div className="p-3 bg-purple-100 rounded-2xl">
                  <MapPin className="w-6 h-6 text-purple-600 group-hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Our Farm</p>
                  <p className="text-gray-800 leading-relaxed">
                    24 Chopara road,<br />
                    uttora, Dhaka.
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
                Also Get Us
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-green-100 rounded-2xl hover:bg-green-200 transition-colors">
                  <MessageCircle className="w-6 h-6 text-green-600 group-hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
                </a>
                <a href="#" className="p-3 bg-blue-100 rounded-2xl hover:bg-blue-200 transition-colors">
                  <Facebook className="w-6 h-6 text-blue-600 group-hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-3xl hover:shadow-xl hover:scale-105 duration-150 p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-green-100 rounded-2xl">
                <Send className="w-6 h-6 text-green-600 group-hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Send Message</h3>
                <p className="text-gray-600">What do you want to say? Write it down</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              >
                <Send className="w-5 h-5 group-hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}