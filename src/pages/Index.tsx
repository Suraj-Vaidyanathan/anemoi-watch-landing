import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Waves, Wind } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const scrollToDisasters = () => {
    const disastersSection = document.getElementById('disasters-section');
    if (disastersSection) {
      disastersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const disasters = [
    {
      id: "cyclone",
      title: "Cyclone Prediction",
      description: "Sophisticated storm tracking and cyclone intensity forecasting using satellite imagery and atmospheric data.",
      icon: Wind,
      gradient: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
      link: "https://solid-any-form.anvil.app",
    },
    {
      id: "earthquake",
      title: "Earthquake Prediction",
      description: "Advanced seismic analysis and earthquake forecasting using AI-powered geological data processing.",
      icon: Activity,
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      hoverColor: "hover:bg-orange-100",
      link: "https://enormous-self-reliant-local.anvil.app/",
    },
    {
      id: "flood",
      title: "Flood Prediction",
      description: "Real-time flood risk assessment through weather patterns, rainfall data, and hydrological modeling.",
      icon: Waves,
      gradient: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
      link: "https://likable-young-ibex.anvil.app",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Team Invictus
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="https://solid-any-form.anvil.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-purple-50"
                >
                  Cyclone Prediction
                </a>
                <a
                  href="https://enormous-self-reliant-local.anvil.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-orange-50"
                >
                  Earthquake Prediction
                </a>
                <a
                  href="https://likable-young-ibex.anvil.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50"
                >
                  Flood Prediction
                </a>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-indigo-50"
                >
                  About Team
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToDisasters}
                className="text-gray-700 hover:text-blue-600"
              >
                Tools
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="https://enormous-self-reliant-local.anvil.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-50"
            >
              Earthquake Prediction
            </a>
            <a
              href="https://likable-young-ibex.anvil.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-50"
            >
              Flood Prediction
            </a>
            <a
              href="https://solid-any-form.anvil.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-50"
            >
              Cyclone Prediction
            </a>
            <Link
              to="/about"
              className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-50"
            >
              About Team
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4 animate-pulse">
                  <Activity className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 animate-ping" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Anemoi
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              AI-Powered Disaster Prediction Platform
            </p>
            
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Harness the power of artificial intelligence to predict and prepare for natural disasters. 
              Our advanced algorithms analyze vast amounts of data to provide accurate forecasting for earthquakes, floods, and cyclones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                onClick={scrollToDisasters}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 hover:border-blue-500 px-8 py-3 rounded-full transition-all duration-300"
                onClick={() => window.open("https://drive.google.com/drive/folders/1T8VifaYWnYEd9pwpXmqo0W4rqJ-td3_M?usp=sharing", "_blank")}
              >
                Learn More
              </Button>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-indigo-300 hover:border-indigo-500 px-8 py-3 rounded-full transition-all duration-300"
                >
                  About Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="disasters-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Disaster Prediction Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our specialized prediction systems, each designed to provide accurate forecasting for specific natural disasters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {disasters.map((disaster, index) => {
            const Icon = disaster.icon;
            return (
              <Card
                key={disaster.id}
                className={`relative overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${disaster.bgColor} ${disaster.hoverColor} border-0 shadow-lg`}
                onMouseEnter={() => setHoveredCard(disaster.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => window.open(disaster.link, '_blank')}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${disaster.gradient} opacity-10`} />
                </div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${disaster.gradient} flex items-center justify-center transform transition-transform duration-300 ${hoveredCard === disaster.id ? 'scale-110 rotate-12' : ''}`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {disaster.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    {disaster.description}
                  </p>
                  
                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      className={`group border-2 transition-all duration-300 ${
                        hoveredCard === disaster.id 
                          ? `border-transparent bg-gradient-to-r ${disaster.gradient} text-white` 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      Access Tool
                      <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-300 ${hoveredCard === disaster.id ? 'translate-x-1' : ''}`} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-blue-600 mb-2">High Accuracy</div>
              <div className="text-gray-600">Prediction System</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Real-time Monitoring</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4">Anemoi</h3>
          <p className="text-gray-400 mb-6">AI-Powered Disaster Prediction Platform</p>
          <p className="text-sm text-gray-500">
            © 2025 Anemoi by Team Invictus. All rights reserved. Built with advanced AI for disaster preparedness.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
