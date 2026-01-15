import heroImage from "../assets/hero-section.jpg";

export default function Hero() {
  return (
    <section className="w-full min-h-[calc(100vh-120px)] flex items-center bg-white px-6 md:px-16">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-pink-500">
            Lorem <br className="hidden md:block" />
            dolor sit
          </h1>

          <p className="mt-6 text-gray-500 max-w-md mx-auto md:mx-0">
            Consectetur adipiscing elit, sed do tempor incididunt labore et
            dolore magna aliqua. Duis enim ad minim veniam.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start gap-4">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 text-white font-semibold shadow-md hover:scale-105 transition">
              Start
            </button>

            <input
              type="email"
              placeholder="Enter your e-mail"
              className="px-6 py-3 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-pink-400 w-full sm:w-auto"
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Hero illustration"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}