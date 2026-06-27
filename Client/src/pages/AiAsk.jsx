import { useEffect, useRef, useState } from "react";
import {
  Send,
  Bot,
  User,
  Sparkles,
  MessageSquarePlus,
} from "lucide-react";

const AskAI = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello 👋 I'm LimerxAI. I'm your personalized AI assistant. How can I help you today?",
    },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  async function fetchCurrentUser() {
    try {
      const response = await fetch("http://localhost:3000/me", {
        credentials: "include",
      });

      const data = await response.json();

      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const prompt = input;

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/ask", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: prompt,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (err) {
      console.log(err);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <div className="flex h-screen bg-[#FFF7FB]">

      {/* Sidebar */}

      <aside className="hidden md:flex w-72 flex-col border-r bg-white">

        <div className="p-6">

          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            LimerxAI
          </h1>

          <button
            className="mt-8 w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 py-3 text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition"
          >
            <MessageSquarePlus size={20} />
            New Chat
          </button>

        </div>

        <div className="flex-1 overflow-y-auto px-4">

          <h2 className="text-sm text-gray-500 mb-3">
            Recent Conversations
          </h2>

          {[
            "Career Guidance",
            "Backend Development",
            "Mental Health",
            "Interview Prep",
            "Project Ideas",
          ].map((chat, index) => (

            <div
              key={index}
              className="cursor-pointer rounded-xl p-4 mb-3 hover:bg-pink-50 transition"
            >

              <h3 className="font-medium">
                {chat}
              </h3>

              <p className="text-xs text-gray-500">
                Continue conversation
              </p>

            </div>

          ))}

        </div>

      </aside>

      {/* Main */}

      <main className="flex flex-col flex-1">

        {/* Navbar */}

        <div className="border-b bg-white px-8 py-5 flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold">

              Welcome {currentUser?.username} 👋

            </h2>

            <p className="text-gray-500">

              Ask anything. Your AI remembers you.

            </p>

          </div>

          <div className="flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full">

            <Sparkles size={18} />

            Personalized AI

          </div>

        </div>

        {/* Messages */}

        <div className="flex-1 overflow-y-auto px-8 py-8">

          <div className="max-w-4xl mx-auto space-y-6">

            {messages.map((message, index) => (

              <div
                key={index}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-[70%] rounded-3xl px-6 py-4 shadow ${
                    message.role === "assistant"
                      ? "bg-white"
                      : "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                  }`}
                >

                  <div className="flex items-center gap-2 mb-2">

                    {message.role === "assistant" ? (
                      <Bot size={18} />
                    ) : (
                      <User size={18} />
                    )}

                    <span className="font-semibold">

                      {message.role === "assistant"
                        ? "LimerxAI"
                        : currentUser?.username}

                    </span>

                  </div>

                  <p className="leading-7 whitespace-pre-wrap">
                    {message.content}
                  </p>

                </div>

              </div>

            ))}

            {loading && (

              <div className="flex justify-start">

                <div className="rounded-3xl bg-white px-6 py-4 shadow">

                  <div className="flex items-center gap-2">

                    <Bot size={18} />

                    <span className="font-semibold">

                      LimerxAI

                    </span>

                  </div>

                  <p className="mt-2 animate-pulse">

                    Thinking...

                  </p>

                </div>

              </div>

            )}

            <div ref={bottomRef}></div>

          </div>
        </div>

        {/* Input */}

        <div className="border-t bg-white p-6">

          <div className="max-w-4xl mx-auto flex gap-4">

            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !loading) {
                  sendMessage();
                }
              }}
              className="flex-1 rounded-2xl border border-pink-200 px-6 py-4 outline-none focus:border-pink-500 transition"
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-6 text-white hover:scale-105 transition disabled:opacity-60"
            >
              <Send />
            </button>

          </div>

        </div>

      </main>

    </div>
  );
};

export default AskAI;