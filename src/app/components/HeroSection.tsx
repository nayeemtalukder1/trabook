import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function HeroSection() {
  return (
    <section className={`relative w-full max-w-7xl mx-auto px-4 mb-20 py-12 ${poppins.className}`}>

      {/* Dotted Background (ONLY empty space) */}
      <div className="absolute inset-0 hero-dots -z-10 rounded-3xl"></div>

      {/* Main Content (Dots do NOT enter here) */}
      <div className="relative z-10">

        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left bg-white/70 p-6 rounded-xl backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Get started Your Exciting{" "}
              <span
                className="
    bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500
    bg-[length:200%_200%]
    animate-gradient
    text-transparent bg-clip-text
  "
              >
                journey{" "}
              </span>
              with us.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              A team of experienced tourism professionals will provide you the
              best advice and tips for your desired place.
            </p>
            <button
              className="group mt-8 px-8 py-3 border border-orange-500 text-orange-500 rounded-md
             hover:bg-orange-500 hover:text-white transition-all duration-300 font-medium"
            >
              Discover Now{" "}
              <span
                className="
      inline-block
      transition-transform duration-700 ease-out
      group-hover:translate-x-4
    "
              >
                →
              </span>
            </button>

          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg bg-white/70 rounded-xl backdrop-blur-sm p-4">

              <Image
                src="/Image_travel.png"
                alt="Travel"
                width={5000}
                height={3000}
                className="w-full h-auto rounded-lg mx-auto mt-10 hover:scale-120 duration-250"
              />

              <div className="absolute top-[0px] right-[0px] bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-4 py-2 rounded-4xl text-xl font-medium animate-bounce">
                <Image
                  src="/best-seller.png"
                  alt="Quality Icon"
                  width={32}
                  height={32}
                  className="inline-block mr-2"
                />
                Best Experience
              </div>

              <div className="absolute bottom-[0px] left-[-34px] bg-white px-8 py-8 rounded-4xl text-2xl font-medium shadow-md">
                BOOK NOW{" "}
                <div className="relative inline-block ml-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="mt-16 w-full flex justify-center">
          <div className="w-full max-w-3xl bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl duration-300 flex flex-col sm:flex-row items-center justify-between gap-6">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div>
                <select className="w-full bg-transparent border-none text-lg font-medium focus:outline-none">
                  <option>Location</option>
                  <option>Mymensingh</option>
                  <option>Dhaka</option>
                  <option>Rajshahi</option>
                </select>
                <p className="text-sm text-gray-500 mt-1">Where are you going</p>
              </div>

              <div>
                <select className="w-full bg-transparent border-none text-lg font-medium focus:outline-none">
                  <option>Date</option>
                  <option>6 AM</option>
                  <option>8 PM</option>
                  <option>12 PM</option>
                </select>
                <p className="text-sm text-gray-500 mt-1">When you will go</p>
              </div>

              <div>
                <select className="w-full bg-transparent border-none text-lg font-medium focus:outline-none">
                  <option>Guest</option>
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3+ Guests</option>
                </select>
                <p className="text-sm text-gray-500 mt-1">Number of guests</p>
              </div>
            </div>

            <button className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-md hover:scale-80 transition-all duration-300 font-medium text-base">
              BOOK NOW
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
