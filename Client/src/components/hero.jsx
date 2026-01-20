import heroImage from "../assets/hero-section.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="w-full min-h-[calc(100vh-120px)] flex items-center bg-white px-6 md:px-16">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-pink-500">
                        When Thoughts won't Let Go <br className="hidden md:block" />
                        You Don't Have to Face Them Alone
                    </h1>

                    <p className="mt-6 text-gray-500 max-w-md mx-auto md:mx-0">
                        Limerence can feel overwhelming,
                        constant thoughts, emotional highs and lows, and attachment that won’t fade.
                        Let's understand what’s happening, talk it through, and gently regain control of your mind.
                    </p>

                    {/* CTA */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start gap-4">
                        <Link
                            to="/signup"
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 text-white font-semibold shadow-md hover:scale-105 transition"
                        >
                            Start
                        </Link>

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