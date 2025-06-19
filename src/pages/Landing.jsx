import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            AuthApp
          </div>
          <div className="space-x-4">
            <Link 
              to="/login" 
              className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-200"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-black mb-6">
            Your Digital Identity
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create your secure profile and manage your digital presence. 
            Join our platform with confidence and security.
          </p>
          <div className="space-x-4">
            <Link 
              to="/signup" 
              className="inline-block px-8 py-4 bg-black text-white text-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              Create Account
            </Link>
            <Link 
              to="/login" 
              className="inline-block px-8 py-4 border-2 border-black text-black text-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-black mb-16">
            Why Choose Our Platform?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white border border-gray-200">
              <div className="w-16 h-16 bg-black mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Profile Management</h3>
              <p className="text-gray-600">
                Create and manage your personal profile with easy-to-use tools and customization options.
              </p>
            </div>

            <div className="text-center p-8 bg-white border border-gray-200">
              <div className="w-16 h-16 bg-black mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Secure Authentication</h3>
              <p className="text-gray-600">
                Enterprise-grade security with encrypted data storage and secure authentication protocols.
              </p>
            </div>

            <div className="text-center p-8 bg-white border border-gray-200">
              <div className="w-16 h-16 bg-black mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Privacy Control</h3>
              <p className="text-gray-600">
                Full control over your personal information with granular privacy settings and data protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Features Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Personalize Your Experience
              </h2>
              <p className="text-gray-600 mb-6">
                Build a comprehensive profile that represents who you are. Add your personal information, 
                preferences, and customize your account settings to match your needs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-gray-700">Complete profile customization</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-gray-700">Account security settings</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-gray-700">Privacy preference controls</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-gray-700">Easy account management</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-8 border border-gray-200">
              <div className="bg-white p-6 border border-gray-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-black rounded-full mr-4"></div>
                  <div>
                    <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-32"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who trust our platform with their digital identity.
          </p>
          <Link 
            to="/signup" 
            className="inline-block px-8 py-4 bg-white text-black text-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
          >
            Create Your Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold text-black mb-4">AuthApp</h3>
              <p className="text-gray-600">
                Secure authentication platform for managing your digital identity.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Features</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/security" className="hover:text-black">Security</Link></li>
                <li><Link to="/privacy" className="hover:text-black">Privacy</Link></li>
                <li><Link to="/profile" className="hover:text-black">Profile</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/about" className="hover:text-black">About</Link></li>
                <li><Link to="/careers" className="hover:text-black">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-black">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/help" className="hover:text-black">Help Center</Link></li>
                <li><Link to="/privacy" className="hover:text-black">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-black">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2025 AuthApp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
