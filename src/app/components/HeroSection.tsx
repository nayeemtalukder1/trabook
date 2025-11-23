'use client';
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelDate: "",
    guests: "1",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError("");
  };

  // REAL API SUBMISSION
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // Client-side validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.travelDate) {
      setError("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit booking");
      }

      // SUCCESS!
      setIsSubmitting(false);
      setShowSuccess(true);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        travelDate: "",
        guests: "1",
      });

      // Auto-close after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setIsModalOpen(false);
      }, 3000);

    } catch (err: any) {
      setError(err.message || "Network error. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* === Your existing hero section (unchanged) === */}
      <section className={`relative w-full max-w-7xl mx-auto px-4 mb-20 py-12 ${poppins.className}`}>
        <div className="absolute inset-0 hero-dots -z-10 rounded-3xl"></div>
        <div className="relative z-10">

          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1 text-center lg:text-left bg-white/70 p-6 rounded-xl backdrop-blur-sm">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Get started Your Exciting{" "}
                <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 bg-[length:200%_200%] animate-gradient text-transparent bg-clip-text">
                  journey{" "}
                </span>
                with us.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                A team of experienced tourism professionals will provide you the best advice and tips for your desired place.
              </p>
              <button className="group mt-8 px-8 py-3 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300 font-medium">
                Discover Now
                <span className="inline-block transition-transform duration-700 ease-out group-hover:translate-x-4 ml-2">→</span>
              </button>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg bg-white/70 rounded-xl backdrop-blur-sm p-4">
                <Image
                  src="/Image_travel.png"
                  alt="Travel"
                  width={5000}
                  height={3000}
                  className="w-full h-auto rounded-lg mx-auto mt-10 hover:scale-110 duration-500 transition-transform"
                />
                <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-4 py-2 rounded-full text-xl font-medium animate-bounce flex items-center">
                  <Image src="/best-seller.png" alt="Best" width={32} height={32} className="mr-2" />
                  Best Experience
                </div>
                <div className="absolute bottom-0 left-[-34px] bg-white px-8 py-8 rounded-full text-2xl font-bold shadow-2xl flex items-center gap-3">
                  BOOK NOW
                  <div className="relative">
                    <div className="w-4 h-4 bg-green-500 rounded-full" />
                    <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Search Bar */}
          <div className="mt-16 w-full flex justify-center">
            <div className="w-full max-w-3xl bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl duration-300 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-gray-700">
                <div>
                  <select className="w-full bg-transparent border-b-2 border-gray-300 text-lg font-medium focus:outline-none focus:border-orange-500 transition">
                    <option value="">Location</option>
                    <option>Mymensingh</option>
                    <option>Dhaka</option>
                    <option>Rajshahi</option>
                    <option>Cox's Bazar</option>
                  </select>
                  <p className="text-sm text-gray-500 mt-1">Where are you going</p>
                </div>
                <div>
                  <input type="date" className="w-full bg-transparent border-b-2 border-gray-300 text-lg font-medium focus:outline-none focus:border-orange-500 transition" />
                  <p className="text-sm text-gray-500 mt-1">When you will go</p>
                </div>
                <div>
                  <select className="w-full bg-transparent border-b-2 border-gray-300 text-lg font-medium focus:outline-none focus:border-orange-500 transition">
                    <option value="">Guest</option>
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3+ Guests</option>
                  </select>
                  <p className="text-sm text-gray-500 mt-1">Number of guests</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4" onClick={() => setIsModalOpen(false)}>
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-3xl font-light"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold text-center mb-2">Complete Your Booking</h2>
            <p className="text-center text-gray-600 mb-8">Fill in your details and let's start the journey!</p>

            {showSuccess ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-600">Booking Confirmed!</h3>
                <p className="text-gray-600 mt-2">We’ll contact you soon at {formData.phone}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    placeholder="+880 1XXX-XXXXXX"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-3 ${isSubmitting ? "opacity-80 cursor-not-allowed" : "hover:shadow-lg hover:scale-105"
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Confirm Booking"
                  )}
                </button>
              </form>
            )}

            <p className="text-center text-xs text-gray-500 mt-6">
              We’ll contact you within 2 hours to confirm your trip!
            </p>
          </div>
        </div>
      )}
    </>
  );
}