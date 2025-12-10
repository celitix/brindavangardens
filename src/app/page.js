import HeroSection from "./components/hero";
import Image from "next/image";
import { FaClock, FaBolt, FaRupeeSign } from "react-icons/fa";
import Link from "next/link";

export default function Home() {

 const attractions = [
    {
      title: "Krishnaraja Sagar Dam",
      desc: "Krishna Raja Sagara, also popularly known as KRS, is a lake and the dam built by Krishna Raja Wadiyar IV Maharaja of Mysore.....",
      img: "/assets/krishnaraja1.jpg",
    },
    {
      title: "Mysore Zoo",
      desc: "Mysore Zoo officially called as the Sri Chamarajendra Zoological Gardens is a 157-acre zoo located near the palace in Mysore.....",
      img: "/assets/zoo1.jpg",
    },
    {
      title: "Mysore Palace",
      desc: "Mysore Palace is the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore in Karnataka.....",
      img: "/assets/mysorepalace1.jpg",
    },
    {
      title: "Chamundi Hills and Temple",
      desc: "The Chamundeshwari Temple is located on the top of Chamundi Hills about 13 km from the palace city of Mysore.....",
      img: "/assets/chamundi1.jpg",
    },
    {
      title: "Railway Museum",
      desc: "This museum has a rich collection of various photographs and items depicting various stages in the progress of Indian railways.....",
      img: "/assets/museum1.jpg",
    },
    {
      title: "St. Philomena's Church",
      desc: "St. Philomena’s Cathedral also known as St. Joseph’s was constructed in 1936 and is one of the tallest churches in Asia.....",
      img: "/assets/church1.jpg",
    },
  ];

  return (
<>
{/*============ Hero Section ============*/}
<HeroSection />

{/*============ About Section ============*/}
<div className="bg-white">
<section className="max-w-6xl mx-auto  py-16 px-6 md:px-16 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        A World Class Terrace Garden,{" "}
        <span className="text-black">The Brindavan.</span>
      </h2>

      {/* Small green underline */}
      <div className="w-16 h-1 bg-[#58B451] mx-auto mt-3 mb-6"></div>

      {/* Description */}
      <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Sir <Link href="https://en.wikipedia.org/wiki/Mirza_Ismail" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 font-semibold cursor-pointer">Mirza Ismail</Link>{" "}
        built the picturesque Brindavan Gardens. The then Dewan of Princely
        state of Mysore (Karnataka, India), it took him around 5 years to
        complete the Brindavan Garden Mysore. About 20 kilometers from the
        historic city this is one of the must visit{" "}
        <Link href="/destinations" className="text-sky-600 hover:text-sky-700 font-semibold cursor-pointer">places</Link> in Mysore.
        The world famous musical dancing fountains of the Brindavan gardens
        leave you spell bound. Now under the department of Horticulture this is
        a well maintained tourist attraction.
      </p>

      {/* Info Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {/* Box 1 */}
        <div className="border border-[#58B451] rounded-md px-2 py-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Started In
          </h3>
          <p className="text-3xl font-bold text-[#58B451]">1927</p>
        </div>

        {/* Box 2 */}
        <div className="border border-[#58B451] rounded-md px-2 py-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Built In</h3>
          <p className="text-3xl font-bold text-[#58B451]">1932</p>
        </div>

        {/* Box 3 */}
        <div className="border border-[#58B451] rounded-md px-4 py-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Area</h3>
          <p className="text-3xl font-bold text-[#58B451]">60 Acres.</p>
        </div>

        {/* Box 4 */}
        <div className="border border-[#58B451] rounded-md px-4 py-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Founder</h3>
          <p className="text-3xl font-bold text-[#58B451]">Mirza Ismail</p>
        </div>
      </div>
    </section>
</div>  

{/*============ Horticulture farm Section ============*/}
    <section className="bg-[#414548] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-80 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/assets/horticulture.jpg"
              alt="Beautiful Horticulture Farms"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-lime-600 mb-4">
            Beautiful Horticulture Farms
          </h2>
          <p className="leading-relaxed text-justify text-gray-300">
            It has two beautiful horticulture farms. The first one, Naguvara
            Horticulture Farm, is located near the main gate. It has an area of
            30 acres. It contains different types of plants. The other farm is
            the Chandravana Horticulture Farm, which is smaller than the
            Naguvara Horticulture Farm and is situated in the Cauvery River. It
            covers an area of approximately 5 acres. Delicious mango trees and
            coconut trees are grown here.
          </p>
        </div>
      </div>
    </section>


 {/*============ Glass cards section ============*/}
  <section className="relative py-20 text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/hero2.jpg" 
        alt="Background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          A Place to Sit, Relax and Enjoy Nature
        </h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mt-3 mb-10"></div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg transition transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
            <div className="bg-yellow-500 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
              <FaClock className="text-white text-3xl" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              VISIT TIMING
            </h3>
            <p className="text-gray-200 text-sm">6 AM to 8 PM</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg transition transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] md:border-x md:border-dashed md:border-gray-400">
            <div className="bg-green-600 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
              <FaBolt className="text-white text-3xl" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              FOUNTAIN LIGHT SHOW
            </h3>
            <p className="text-gray-200 text-sm">
              Mon–Fri: 6:30–7:30 PM <br /> Sat–Sun: 6:30–8:30 PM
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg transition transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
            <div className="bg-yellow-500 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
              <FaRupeeSign className="text-white text-3xl" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              ENTRY TICKET
            </h3>
            <p className="text-gray-200 text-sm">
              For Adults: INR 15 | Children: INR 5
            </p>
          </div>
        </div>
      </div>
    </section> 

    {/*=========== Nearby attractions ===========*/} 
      <section className="py-16 px-6 md:px-16 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Explore Near By Attractions
      </h2>
      <div className="w-16 h-1 bg-green-500 mx-auto mt-3 mb-10"></div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto text-left">
        {attractions.map((item, index) => (
          <Link
            href="/destinations"
            key={index}
            className="flex items-start gap-5 group hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Image */}
            <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#58B451]">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>  
</>
  );
}
