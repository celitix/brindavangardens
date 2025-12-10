import Image from 'next/image';
import { IoMapSharp } from "react-icons/io5";


export default function MysoreAttractions() {
  const attractions = [
    {
      id: 1,
      title: "Krishna Raja Sagar Dam",
      image: "/assets/Krishnaraja2.jpg",
      imageAlt: "Krishna Raja Sagar Dam with water flowing",
      imagePosition: "right",
      description: (
        <>
          KRS as it is popularly called. The <span className="text-blue-600">Brindavan Gardens</span> are attached to the Krishna Raja Sagar dam. The city of Mysore is popular for these to the prime lake, Dam, and gardens. It was built across the Kaveri River in the year 1924. The importance of Dam is such that the districts of Mysore and Mandya rely on this dam for their water needs. Water for irrigation and also portable water for Mysore, Mandya & Bengaluru is supplied by this dam. The state of Tamilnadu receives water from it and stores in the famous Mettur dam (Salem). The dam has historic importance and is a milestone for various notable features. This is a must-visit amongst Mysore places to visit.
        </>
      )
    },
    {
      id: 2,
      title: "The Glimmering Mysore Palace",
      image: "/assets/mysorepalace2.jpg",
      imageAlt: "Mysore Palace illuminated at night",
      imagePosition: "left",
      description: "In The Mysore Palace royal family of Mysore dwelled. This is the most famous of all tourist places near Mysore. The palace is huge and consists of durbar halls which are common places for meetings. Courtyards and gardens deserve a special mention here as they are the most attractive feature of the Palace. The Palace is the venue every year for the Mysore Dussehra festival. Cultural events are conducted here and artists from all over country perform here. Lightening at the Palace is world famous. The real charm is to see it when the lights are lit at one go. This is definitely an eye candy amongst the Mysore places to visit."
    },
    {
      id: 3,
      title: "Mysore Zoo",
      image: "/assets/zoo2.jpg",
      imageAlt: "Giraffe at Mysore Zoo",
      imagePosition: "right",
      description: "Shri Chamarajendra zoological Garden, popularly known as Mysore Zoo, is one of the oldest and most famous places to visit in Mysore. The zoo was created in 1892 and Spread in the of 157 acre. Various species of birds, ape, carnivores, and herbivores are conserved here. It is noticed that more than 2 million of tourists visit Mysore zoo in a year from all over the world. It is serene to walk through the zoo and see the animals."
    },
    {
      id: 4,
      title: "Railway Museum Mysore",
      image: "/assets/mysoremuseum.jpg",
      imageAlt: "Vintage locomotive at Railway Museum",
      imagePosition: "left",
      description: "The Railway museum as the name suggests this is a locomotive display museum. This is an amazing railway museum right after the National Railways Museum of Delhi. This is an outdoor exhibition set up of 1979 by the Indian Railways. The museum has an interesting and captivating collection of locomotives. The Major Attractions of Rail Museum includes a wide range of lights, tickets, ticketing machines, clocks, signal signs, and a mini toy train that takes the tourists around the grounds of the museum."
    },
    {
      id: 5,
      title: "Chamundi Hills and Temple",
      image: "/assets/chamundi2.jpg",
      imageAlt: "Chamundi Temple with golden tower",
      imagePosition: "right",
      description: "13 km from Mysore city the Chamundi hills are elevated at 1000 metres. The hills accommodate the famous and pious Chamundi temple. Goddess Chamundeshwari temple is on the top of the main hill. Local buses are easily available to climb the hills. While on the way back there are certain spots on the path that gives an amazing view of the Mysore palace and the Kerani Lake. The famous statue of the demon Mahishasura is found near the temple."
    },
    {
      id: 6,
      title: "St. Philomena's Cathedral, Mysore",
      image: "/assets/church2.jpg",
      imageAlt: "St. Philomena's Cathedral twin spires",
      imagePosition: "left",
      description: "St. Philomena, a Latin Catholic saint was a young Greek princess martyred in the 4th century. The Maharaja of Mysore Nalvadi Krishnaraja Wodeyar laid the foundation stone of St. Philomena's Cathedral on 28 October 1933 and it was built in 1956. It is considered to be Asia's second largest church. It is Built in the Gothic style with beautiful stain glass windows and lofty towers. The twin spires of the church are 175 feet in height and they somewhat resembles the spires of the Cologne Cathedral and of the St. Patrick's Church in New York City."
    }
  ];

  return (
    <>
 {/*============= Destinations Section ============*/}
    <section className="pt-16 pb-2 px-6 md:px-16 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12">
        Destinations
      </h2>

      {/* Divider with Leaf */}
      <div className="flex items-center justify-center my-6">
        <span className="w-48 h-[2px] bg-gray-300"></span>
        <IoMapSharp className="text-[#58b451] text-[35px] mx-4" />
        <span className="w-48 h-[2px] bg-gray-300"></span>
      </div>

      {/* Description */}
      <p className="max-w-5xl mx-auto text-gray-600 leading-relaxed text-[15px] md:text-base">
      Let us take a look at Places to visit in Mysore. Mysore is a historic city with ethnic and cultural importance. Tourist places near Mysore are all inspired by nature. There are famous natural and manmade sites in the list of Mysore places to visit all year round. Tourists who visit in Mysore are both domestic and international.
      </p>
    </section>

   {/*=============== Image Box section ===============*/}
       <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="py-12">
        {attractions.map((attraction) => (
          <div className='py-4' key={attraction.id}>
            <div className={`flex flex-col ${attraction.imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-start`}>
              {/* Image Section */}
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative w-full h-64 md:h-56">
                  <Image
                    src={attraction.image}
                    alt={attraction.imageAlt}
                    fill
                    className="object-cover rounded shadow-md"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-2/3">
                <h2 className="text-xl md:text-2xl font-semibold bg-[#e2e2e2] px-4 py-4 mb-4 text-center">
                  {attraction.title}
                </h2>
                <p className="text-sm md:text-base text-gray-500 leading-7 text-justify">
                  {attraction.description}
                </p>
              </div>
            </div>

            {/* Divider */}
            {attraction.id !== attractions.length && (
              <hr className="my-8 border-t-4 border-[#58b451] " />
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}