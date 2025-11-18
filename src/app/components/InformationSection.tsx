'use client';
import { Poppins } from "next/font/google";
import { Laptop, Wallet, MapPin } from 'lucide-react';
import SparkleProgress from "./SparkleProgress";
import AnimatedDotsLoader from "./AnimatedDotsLoader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function InformationSection() {
  return (
    <section className={`bg-[#F7F8FC] py-16 md:py-20 ${poppins.className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <SparkleProgress />
        {/* ---------- Header ---------- */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            Things you need <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500
    bg-[length:200%_200%]
    animate-gradient
    text-transparent bg-clip-text">to do</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-5">
            We ensure that you’ll embark on a perfectly planned,
            <br className="hidden sm:inline" /> safe vacation at a price you can afford.
          </p>
          <AnimatedDotsLoader />
        </div>


        {/* ---------- Cards (aligned) ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="group bg-white rounded-2xl p-6 md:p-8 flex flex-col h-full
                hover:shadow-lg hover:scale-105 transition-transform duration-300">

            <div className="flex items-start gap-4 flex-grow">
              <div className="p-3 bg-orange-50 rounded-xl shrink-0">
                <Laptop className="w-7 h-7 md:w-8 md:h-8 text-orange-500
    group-hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Sign Up</h3>
                <p className="mt-2 text-gray-600 text-sm md:text-base leading-relaxed">
                  Completes all the work associated with planning and processing
                </p>
              </div>
            </div>

            <div className="
    mt-6 h-1 w-full rounded-full
    bg-gradient-to-r from-orange-400 to-orange-500
    bg-[length:200%_100%]
    transform scale-x-50 origin-left
    transition-transform duration-500 ease-out
    group-hover:scale-x-100
  "></div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-2xl p-6 md:p-8 flex flex-col h-full
                hover:shadow-lg hover:scale-105 transition-transform duration-300">

            <div className="flex items-start gap-4 flex-grow">
              <div className="p-3 bg-blue-50 rounded-xl shrink-0">
                <Wallet className="w-7 h-7 md:w-8 md:h-8 text-blue-500
    group-hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Worth of Money</h3>
                <p className="mt-2 text-gray-600 text-sm md:text-base leading-relaxed">
                  After successful access then book from exclusive deals & pricing
                </p>
              </div>
            </div>

            <div className="
    mt-6 h-1 w-full rounded-full
    bg-gradient-to-r from-blue-400 to-blue-500
    bg-[length:200%_100%]
    transform scale-x-50 origin-left
    transition-transform duration-500 ease-out
    group-hover:scale-x-100
  "></div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-2xl p-6 md:p-8 flex flex-col h-full
                hover:shadow-lg hover:scale-105 transition-transform duration-300">

            <div className="flex items-start gap-4 flex-grow">
              <div className="p-3 bg-yellow-50 rounded-xl shrink-0">
                <MapPin className="w-7 h-7 md:w-8 md:h-8 text-yellow-500
    group-hover:[transform:rotate(30deg)]
    transition-transform duration-400" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Exciting Travel</h3>
                <p className="mt-2 text-gray-600 text-sm md:text-base leading-relaxed">
                  Start and explore a wide range of exciting travel experience.
                </p>
              </div>
            </div>

            <div className="
    mt-6 h-1 w-full rounded-full
    bg-gradient-to-r from-yellow-400 to-yellow-500
    bg-[length:200%_100%]
    transform scale-x-50 origin-left
    transition-transform duration-500 ease-out
    group-hover:scale-x-100
  "></div>
          </div>

        </div>
      </div>
    </section>
  );
}