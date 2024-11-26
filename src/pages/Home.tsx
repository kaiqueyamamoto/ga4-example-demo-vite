import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Users,
  Briefcase,
  BarChart,
} from 'lucide-react';

const Home = () => {
  useEffect(() => {
    // Disparar o evento page_view com base no window.location
    const handlePageView = () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'page_views',
        page_path: window.location.pathname,
        page_title: document.title,
      });
    };

    // Chamar o evento quando o componente é montado
    handlePageView();

    // Adicionar um listener para mudanças no histórico (para Single Page Applications)
    const handlePopState = () => handlePageView();
    window.addEventListener('popstate', handlePopState);

    // Limpar o listener quando o componente for desmontado
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business
              <br />
              With Modern Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              We help businesses grow and succeed in the digital age with
              innovative strategies and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring together the best talent and technology to deliver
              exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Expert Team',
                description:
                  'Our team of experts brings years of experience and knowledge to every project.',
              },
              {
                icon: <Briefcase className="h-8 w-8" />,
                title: 'Proven Solutions',
                description:
                  'We deliver battle-tested solutions that drive real business results.',
              },
              {
                icon: <BarChart className="h-8 w-8" />,
                title: 'Data Driven',
                description:
                  'Make informed decisions with our data-driven approach to problem solving.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="inline-block p-3 bg-indigo-100 rounded-lg text-indigo-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-indigo-100">
                Join thousands of satisfied customers who trust us with their
                business.
              </p>
            </div>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-indigo-50 transition-colors duration-200 flex items-center">
              Contact Us Today
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
