import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleLogin = async (e) => {
    e.preventDefault();
    // Integration point: Call your Express API here (e.g., /api/auth/login)
    console.log("sUBMITTED");

    const userData = {
      email: email,
      password: password
    };
    console.log("Sending this data to backend: ", userData);

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Login successful!");
  
      } else {
        alert(data.message || "Login failed");
      } 
    } catch (error) {
      console.error("Error logging in:", error);
    } 

  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Welcome Back</h2>
          <p className="text-slate-500 text-sm">Continue your journey to emotional balance.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={email}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-300"
              placeholder="email@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Password</label>
              <Link to="/forgot-password" size="sm" className="text-xs text-indigo-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-300"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="remember" 
              className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-slate-500">Remember me for 30 days</label>
          </div>

          <button
            type="submit"
            className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 rounded-xl transition-all transform active:scale-[0.98] shadow-lg shadow-slate-200"
          >
            Log In
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-8 text-center text-sm text-slate-500">
          New to LimerenceCare?{' '}
          <Link to="/signup" className="text-pink-600 font-semibold hover:underline">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;