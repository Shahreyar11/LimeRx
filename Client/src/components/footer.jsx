import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand/About Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Limerence<span className="text-pink-500">Care</span></h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering individuals to navigate through limerence with AI-driven insights, 
              community support, and expert guidance. You are not alone on this journey.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-4 text-[15px]">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/ai-helper" className="hover:text-indigo-600 transition-colors">AI Recovery Guide</Link></li>
              <li><Link to="/blog" className="hover:text-indigo-600 transition-colors">Latest Articles</Link></li>
              <li><Link to="/community" className="hover:text-indigo-600 transition-colors">Support Forum</Link></li>
              <li><Link to="/guides" className="hover:text-indigo-600 transition-colors">Prevention Tips</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-4 text-[15px]">Support</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/contacts" className="hover:text-indigo-600 transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-indigo-600 transition-colors">FAQs</Link></li>
              <li><Link to="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Social & Connect */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-4 text-[15px]">Connect</h4>
            <div className="flex gap-4 mb-6">
              {/* Placeholders for future social links */}
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-pink-50 hover:text-pink-500 cursor-pointer transition-all">
                <i className="fab fa-instagram"></i> {/* Using FontAwesome or simple SVGs later */}
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer transition-all">
                <i className="fab fa-twitter"></i>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-all">
                <i className="fab fa-facebook"></i>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic font-medium">
              Join 1,000+ others in our weekly newsletter.
            </p>
          </div>
        </div>

        {/* Disclaimer Section - Very important for this niche */}
        <div className="border-t border-slate-50 pt-8 text-center">
          <p className="text-[11px] text-slate-400 max-w-3xl mx-auto uppercase tracking-wider mb-4">
            Disclaimer: Our AI and resources are for educational and support purposes only and do not replace professional psychological therapy or medical advice.
          </p>
          <p className="text-sm text-slate-500">
            &copy; {currentYear} LimerenceCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;