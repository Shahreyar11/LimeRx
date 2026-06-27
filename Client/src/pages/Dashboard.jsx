import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MessageCircle,
  Clock3,
  Sparkles,
  Heart,
  ArrowRight,
  User,
  Flame,
  Brain,
} from "lucide-react";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch("http://localhost:3000/me", {
          credentials: "include",
        });

        const data = await response.json();
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchUser();
  }, []);

  const chats = [
    {
      title: "Moving On",
      time: "Today",
    },
    {
      title: "Overthinking",
      time: "Yesterday",
    },
    {
      title: "College Stress",
      time: "2 Days Ago",
    },
    {
      title: "Relationship Advice",
      time: "Last Week",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8FC] flex">

      {/* Sidebar */}

      <aside className="w-80 bg-white border-r border-pink-100 shadow-sm p-6 hidden lg:flex flex-col">

        <h2 className="text-2xl font-bold text-pink-600 mb-8">
          Your Chats
        </h2>

        <div className="space-y-4 flex-1">

          {chats.map((chat, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-2xl border border-pink-100 p-4 hover:bg-pink-50 transition"
            >
              <div className="flex items-center gap-3">

                <div className="bg-pink-100 p-2 rounded-xl">
                  <MessageCircle className="text-pink-600" size={18} />
                </div>

                <div>

                  <h3 className="font-semibold text-gray-700">
                    {chat.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {chat.time}
                  </p>

                </div>

              </div>
            </div>
          ))}

        </div>

        <div className="mt-8 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 p-5 text-white">

          <Sparkles className="mb-2" />

          <h3 className="font-bold text-lg">
            Your Safe Space
          </h3>

          <p className="text-sm mt-2 text-pink-100">
            Continue your journey whenever you're ready.
          </p>

        </div>

      </aside>

      {/* Main */}

      <main className="flex-1 p-10">

        {/* Welcome */}

        <div className="bg-white rounded-3xl shadow-lg p-10 flex flex-col lg:flex-row justify-between items-center">

          <div>

            <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">

              Welcome Back,
              <br />

              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                {user?.username || "Friend"} 👋
              </span>

            </h1>

            <p className="text-gray-500 mt-6 max-w-xl text-lg">

              Your AI companion is here whenever you need someone to talk to.
              Continue your conversations, reflect on your thoughts, or begin
              a new journey today.

            </p>

            <button className="mt-10 flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition" onClick={() => navigate("/ask")}>

              <MessageCircle />

              Continue Chat

              <ArrowRight size={18} />

            </button>

          </div>

          <div className="mt-10 lg:mt-0">

            <div className="w-56 h-56 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 flex items-center justify-center shadow-inner">

              <User size={90} className="text-pink-600" />

            </div>

          </div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white rounded-3xl p-7 shadow-md hover:-translate-y-1 transition">

            <div className="bg-pink-100 w-fit p-3 rounded-xl">

              <MessageCircle className="text-pink-600" />

            </div>

            <h2 className="mt-5 text-4xl font-bold text-gray-700">
              18
            </h2>

            <p className="text-gray-500 mt-2">
              Total Conversations
            </p>

          </div>

          <div className="bg-white rounded-3xl p-7 shadow-md hover:-translate-y-1 transition">

            <div className="bg-orange-100 w-fit p-3 rounded-xl">

              <Flame className="text-orange-500" />

            </div>

            <h2 className="mt-5 text-4xl font-bold text-gray-700">
              7 Days
            </h2>

            <p className="text-gray-500 mt-2">
              Reflection Streak
            </p>

          </div>

          <div className="bg-white rounded-3xl p-7 shadow-md hover:-translate-y-1 transition">

            <div className="bg-purple-100 w-fit p-3 rounded-xl">

              <Brain className="text-purple-600" />

            </div>

            <h2 className="mt-5 text-4xl font-bold text-gray-700">
              Calm
            </h2>

            <p className="text-gray-500 mt-2">
              Current Mood
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="grid lg:grid-cols-2 gap-6 mt-10">

          {/* Profile */}

          <div className="bg-white rounded-3xl shadow-md p-8">

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white">

                <User size={28} />

              </div>

              <div>

                <h2 className="font-bold text-2xl">

                  {user?.username || "Guest"}

                </h2>

                <p className="text-gray-500">

                  Welcome to LimerxAI

                </p>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-5 mt-8">

              <div className="bg-pink-50 rounded-2xl p-5">

                <Clock3 className="text-pink-600 mb-3" />

                <p className="text-sm text-gray-500">
                  Last Active
                </p>

                <h3 className="font-semibold">
                  Today
                </h3>

              </div>

              <div className="bg-purple-50 rounded-2xl p-5">

                <Heart className="text-purple-600 mb-3" />

                <p className="text-sm text-gray-500">
                  Member Since
                </p>

                <h3 className="font-semibold">
                  2026
                </h3>

              </div>

            </div>

          </div>

          {/* Quote */}

          <div className="rounded-3xl p-8 bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg flex flex-col justify-center">

            <Heart className="mb-6" size={40} />

            <h2 className="text-3xl font-bold">

              Today's Reminder

            </h2>

            <p className="mt-6 text-lg leading-8 text-pink-100">

              "Healing isn't about forgetting.
              It's about learning to move forward
              while being kind to yourself."

            </p>

          </div>

        </div>

      </main>

    </div>
  );
};

export default Dashboard;