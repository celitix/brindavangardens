import { FaLeaf } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function AboutBrindavanSection() {

const gardens = [
    {
      title: "The Main Gate",
      description:
        "Huge gate stands to let you in and welcomes you to the wonder garden. The very entrance will take your heart leaps and bounds because the rose gardens on either side are amazing. They are well maintained, with annual flowerbeds.",
    },
    {
      title: "North Brindavan",
      description:
        "This is where all the lights and sounds magic lies. Beautiful terrace gardens with lush lawns and maintained flowering plants are a common sight. Sago palm, Copper pod, Polyalthea, Bougainvillea, Bigonia, Allamanda, are some of the species that you will find prevailing in this part of the garden. You can see a plant nursery here for maintenance, growth and sale of plants. The Brindavan garden timings of light and sound shows illuminate the entire garden.",
    },
     {
      title: "South Brindavan",
      description:
        "Here you can see the similar sights like that of the north garden however here one can see fountains sprinkling water continuously. Lawn that has flowering plants seasonal and annual is well maintained here. Similarly here we have colored lights that illuminate and attract tourists even more.A glass house is maintained here for different plants and green house effects. The Mysore Brindavan garden is first choice of plant lovers, but you automatically start loving them once you are here.",
    },
  ];

  return (
    <>
    {/*============= About Brindavan Section ============*/}
    <section className="pt-16 pb-2 px-6 md:px-16 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12">
        About Brindavan Garden Mysore
      </h2>

      {/* Divider with Leaf */}
      <div className="flex items-center justify-center my-6">
        <span className="w-48 h-[2px] bg-gray-300"></span>
        <FaLeaf className="text-[#68aa22] text-[35px] mx-4" />
        <span className="w-48 h-[2px] bg-gray-300"></span>
      </div>

      {/* Description */}
      <p className="max-w-5xl mx-auto text-gray-600 leading-relaxed text-[15px] md:text-base">
        Extended over 60 acres of land the Brindavan Garden Mysore is laid in
        three terraces. The slopes of the Garden are planted with ornamental
        plants and{" "}
        <Link href="https://en.wikipedia.org/wiki/Bougainvillea" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 cursor-pointer font-semibold">
          bougainvillea
        </Link>
        . Lawns, flower beds, open spaces, shades, are all available in this
        public park. The most attractive feature remains the musical fountains
        that are laid in the garden with multi colored effects. This is a
        historic attraction of the Indian state of Karnataka. This is a treat to
        the eye. Musical ballet as it is wonderfully referred at times is the
        most appropriate word to define it. The harmony created between water
        pressure, lights and music is controlled by a controller.
      </p>
    </section>

    {/*============= History Section ============*/}
<section className="pb-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12">
        History
      </h2>

      {/* Divider with Leaf */}
      <div className="flex items-center justify-center my-6">
        <span className="w-48 h-[2px] bg-gray-300"></span>
        <FaLeaf className="text-[#68aa22] text-[35px] mx-4" />
        <span className="w-48 h-[2px] bg-gray-300"></span>
      </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-1">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-72 md:h-72 shadow-md rounded-md overflow-hidden">
              <Image
                src="/assets/history.jpg" 
                alt="History of Mysore Brindavan Garden"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Text Box */}
          <div className="w-full lg:mb-12 md:w-1/2 bg-lime-600 text-white border border-2 border-lime-700 p-12 rounded-md shadow-md">
            <p className="leading-relaxed text-justify text-gray-100">
              Mysore Brindavan Garden is historic in all sense. Year 1927
              commenced the garden formation and continued up to 1932. Located
              near the Krishnaraja Sagar Dam in the{" "}
              <Link
                href="#"
                className="text-sky-300 font-semibold cursor-pointer hover:text-sky-400"
              >
                Srirangapatna
              </Link>{" "}
              taluk of Mandya District of Karnataka they are just 20 km away
              from Mysore. Mysore is the cultural heritage center of Karnataka.
              Brindavan is 143 km from the city of Bengaluru (capital). The Dam
              is built across river Kaveri, which is an important river of
              southern India.
            </p>
          </div>
        </div>
      </div>
    </section>


    {/*=========== Glass cards section ===========*/}
 <section className="relative py-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero1.jpg" 
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
        {/* Card 1 */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg p-6 shadow-lg transition-transform duration-500 hover:scale-105 hover:bg-white/20">
          <h3 className="text-xl font-semibold text-center mb-3 flex justify-center items-center gap-2">
            Children’s area
            <span className="w-3 h-3 bg-lime-400 inline-block rounded-sm"></span>
          </h3>
          <p className="text-sm leading-relaxed text-center text-gray-200">
            Slides, statues, birds, aquatic animals and other children’s attractions are found to keep your tiny tots busy and enjoying their trip.
          </p>
        </div>

        {/* Card 2 */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg p-6 shadow-lg transition-transform duration-500 hover:scale-105 hover:bg-white/20">
          <h3 className="text-xl font-semibold text-center mb-3 flex justify-center items-center gap-2">
            Fisheries Station
            <span className="w-3 h-3 bg-lime-400 inline-block rounded-sm"></span>
          </h3>
          <p className="text-sm leading-relaxed text-center text-gray-200">
            The dam nearby allows a fisheries station to be maintained here.
          </p>
        </div>

        {/* Card 3 */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg p-6 shadow-lg transition-transform duration-500 hover:scale-105 hover:bg-white/20">
          <h3 className="text-xl font-semibold text-center mb-3 flex justify-center items-center gap-2">
            Hydraulic Station
            <span className="w-3 h-3 bg-lime-400 inline-block rounded-sm"></span>
          </h3>
          <p className="text-sm leading-relaxed text-center text-gray-200">
            This is important from the scientific viewpoint. The dam allows the hydraulic research station to function at its best.
          </p>
        </div>
      </div>
    </section>
   

    {/*============= Wider Box Section ============*/}
  <section className="py-16 px-6 md:px-16 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        The Garden Panorama
      </h2>

      {/* Divider with Leaf */}
      <div className="flex items-center justify-center my-6">
        <span className="w-48 h-[2px] bg-gray-300"></span>
        <FaLeaf className="text-[#68aa22] text-[35px] mx-4" />
        <span className="w-48 h-[2px] bg-gray-300"></span>
      </div>

      {/* Garden Sections */}
      <div className="max-w-6xl mx-auto space-y-8">
        {gardens.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 shadow-sm text-left rounded-3xl"
          >
            <div className="bg-[#68aa22] text-white font-semibold text-lg px-4 py-3 rounded-t-xl">
              {item.title}
            </div>
            <div className="px-8 py-12 text-gray-600 leading-relaxed text-[15px]">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>



    </>
  );
}
