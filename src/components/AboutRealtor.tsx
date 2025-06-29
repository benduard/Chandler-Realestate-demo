import React from 'react';
import { Award, Users, Home } from 'lucide-react';

const AboutRealtor = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
            Meet <br />
            <span className="text-slate-600">Michael Chandler</span>
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Michael Chandler"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          
          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            <p className="text-slate-600 text-lg leading-relaxed">
              A dynamic and forward-thinking realtor, Michael Chandler brings a fresh perspective to luxury real estate in College Station. With his modern approach and deep understanding of the local market, Michael has quickly established himself as a trusted advisor for both first-time homebuyers and seasoned investors.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-slate-900" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-slate-900">Rising Star Award Winner</h3>
                  <p className="text-slate-600">Recognized for exceptional client service and market expertise</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-slate-900" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-slate-900">200+ Happy Clients</h3>
                  <p className="text-slate-600">Building lasting relationships through personalized service</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Home className="h-6 w-6 text-slate-900" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-slate-900">$100M+ in Sales</h3>
                  <p className="text-slate-600">Rapidly growing portfolio of successful transactions</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Professional Affiliations</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• National Association of Realtors®</li>
                <li>• Texas Real Estate Commission</li>
                <li>• Bryan-College Station Regional Association of Realtors®</li>
                <li>• Young Professionals Network</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRealtor;