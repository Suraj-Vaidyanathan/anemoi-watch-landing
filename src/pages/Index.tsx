
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Waves, Wind } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const disasters = [
    {
      id: "earthquake",
      title: "Earthquake Prediction",
      description: "Advanced seismic analysis and earthquake forecasting using AI-powered geological data processing.",
      icon: Activity,
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      hoverColor: "hover:bg-orange-100",
      link: "#", // Will be updated when user provides the actual link
    },
    {
      id: "flood",
      title: "Flood Prediction",
      description: "Real-time flood risk assessment through weather patterns, rainfall data, and hydrological modeling.",
      icon: Waves,
      gradient: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
      link: "#", // Will be updated when user provides the actual link
    },
    {
      id: "cyclone",
      title: "Cyclone Prediction",
      description: "Sophisticated storm tracking and cyclone intensity forecasting using satellite imagery and atmospheric data.",
      icon: Wind,
      gradient: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
      link: "#", // Will be updated when user provides the actual link
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 hover:border-blue-500 px-8 py-3 rounded-full transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Prediction Accuracy</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Real-time Monitoring</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
              <div className="text-gray-600">Lives Protected</div>
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
            © 2024 Anemoi. All rights reserved. Built with advanced AI for disaster preparedness.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
