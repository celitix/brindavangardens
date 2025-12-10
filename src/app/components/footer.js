import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero2.jpg" 
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Overlay */}
      </div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-6 py-12 grid md:grid-cols-4 sm:grid-cols-2 gap-10 z-10">
        {/* Logo */}
        <div>
         <Link href="/"><div className="text-4xl font-bold mb-4 text-[#58B451]">Brindavan Gardens</div></Link>
          <p className="text-gray-300 text-base">
            Relax in the vibrant charm of Brindavan Gardens, where nature, water, and light blend into unforgettable beauty.Experience beautifully landscaped gardens, illuminated fountains, and serene walkways by the KRS Dam.
          </p>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {/* Blog Item */}
            <Link href="/blog/mysore-a-city-of-heritage-sites" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog1.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-green-500 transition leading-snug">
              Mysore: A city of Heritage Sites
              </p>
            </Link>

      
         
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="/" className="hover:text-green-500 transition">Home</Link></li>
            <li><Link href="/about-brindavan-garden-mysore" className="hover:text-green-500 transition">About</Link></li>
            <li><Link href="/destinations" className="hover:text-green-500 transition">Destinations</Link></li>
            <li><Link href="/getting-there" className="hover:text-green-500 transition">Getting There</Link></li>
            <li><Link href="/blog" className="hover:text-green-500 transition">Blog</Link></li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15585.586487666498!2d76.574509!3d12.423273!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf78e109feca5d%3A0x915fba7ee0e6b6b2!2sBrindavana%20Gardens!5e0!3m2!1sen!2sin!4v1762496116298!5m2!1sen!2sin" 
           
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border-0"
          ></iframe>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative border-t border-gray-600/40 text-center py-4 text-sm text-gray-400 z-10">
        © {new Date().getFullYear()} All Rights Reserved | Built by{" "}
        <Link href="https://www.proactivedigital.in/" target="_blank"   rel="noopener noreferrer" className="text-blue-400 hover:text-cyan-600">Proactive</Link> |{" "}
        {/* <Link href="/disclaimer" className="text-blue-400 hover:text-cyan-600">Disclaimer</Link> */}
      </div>
    </footer>
  );
}
