import React from 'react';
import { Heart, Award, Users, Sparkles } from 'lucide-react';

const OurStory = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-50 to-amber-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">OUR STORY</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Crafting radiant reflections of beauty, elegance, and timeless sophistication 
            through exquisite jewelry that tells your unique story.
          </p>
        </div>
      </div>

      {/* Story Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Beginning</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              RADIANT REFLECTION was born from a passion for creating jewelry that captures 
              the essence of individual beauty and personal stories. Founded with the belief 
              that every piece of jewelry should be as unique as the person wearing it, we 
              began our journey to redefine elegance in the world of fine jewelry.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our founders, inspired by the way light dances through precious metals and 
              gemstones, envisioned a brand that would create not just accessories, but 
              meaningful reflections of life's most precious moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <Heart className="h-8 w-8 text-amber-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Passion</h3>
              <p className="text-gray-700">
                Every piece we create is infused with love, attention to detail, and 
                a commitment to excellence that reflects in the radiant beauty of our jewelry.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <Award className="h-8 w-8 text-amber-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Craftsmanship</h3>
              <p className="text-gray-700">
                We work with skilled artisans who bring decades of experience and 
                traditional techniques to create modern masterpieces.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At RADIANT REFLECTION, we believe that jewelry is more than just an accessory—it's 
              a reflection of your personality, your dreams, and your most cherished memories. 
              Our mission is to create pieces that not only enhance your natural beauty but 
              also tell your unique story.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are committed to ethical sourcing, sustainable practices, and creating 
              jewelry that you can wear with pride, knowing that every piece has been 
              crafted with respect for both people and the planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-amber-50 p-8 rounded-lg">
              <Users className="h-8 w-8 text-amber-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Community</h3>
              <p className="text-gray-700">
                We've built a community of jewelry lovers who appreciate quality, 
                elegance, and the stories behind each piece.
              </p>
            </div>
            <div className="bg-amber-50 p-8 rounded-lg">
              <Sparkles className="h-8 w-8 text-amber-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Future</h3>
              <p className="text-gray-700">
                We continue to innovate and create new designs that push the boundaries 
                of traditional jewelry while honoring timeless elegance.
              </p>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-amber-900 to-amber-800 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-xl mb-6">
              Discover jewelry that reflects your radiant spirit and becomes part of your story.
            </p>
            <button className="bg-white text-amber-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Explore Our Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;