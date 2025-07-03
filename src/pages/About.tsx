
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Brain, Zap, FileText, Waves, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Suraj Vaidyanathan",
      role: "Machine Learning – Cyclone Prediction",
      icon: Activity,
      gradient: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      contribution: "In this project, I focused on developing the cyclone prediction model using Machine Learning. After exploring various sources, I decided to use the INSAT3D Infrared Satellite Imagery from India Meteorological Department (IMD) as the training and validation dataset. I worked with infrared satellite images to train a Deep Learning Neural Network capable of estimating cyclone intensity and maximum wind speed. Using Python on Google Colab with packages like Torch, I learned to preprocess image data, implemented the Mean Squared Error loss function as the criterion for training, and fine-tuned the model to achieve reliable predictions. I also hosted the trained model on an Anvil web app to make it accessible for real-time estimation. This experience strengthened my understanding of Deep Learning for image-based tasks and taught me how to apply these techniques to a critical real-world problem. Collaborating with the team highlighted the importance of combining ML, electronics, and web development to deliver a practical early warning system for disaster preparedness."
    },
    {
      name: "Krishna N Rao",
      role: "Machine Learning – Earthquake Prediction",
      icon: Brain,
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      contribution: "For this project, I worked on developing the earthquake prediction model using machine learning. I focused on training [xgboost] in Python on Google Colab to analyze seismic and vibration data available from the government website NCS (National Centre for Seismology) and estimate earthquake risk levels. I learned to preprocess the input features, tune model parameters, and evaluate performance using metrics like Mean Squared Error to ensure accurate predictions. Additionally, I helped integrate the model into our web interface using Anvil so users could easily input sensor data and view results. I also learnt to make use of accelerometer for measuring the relative magnitude of the earthquake on the MMI scale. This experience deepened my understanding of applying ML to geophysical data and showed me how these tools can support real-time disaster preparedness. Collaborating with my teammates taught me the value of interdisciplinary work and clear communication in turning a technical model into a practical early warning solution."
    },
    {
      name: "Samarth Bijjal",
      role: "Electronics – Earthquake Detection",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
      contribution: "As part of the project, I was responsible for designing and implementing the Earthquake Detection circuit using the ADXL335 accelerometer. I worked on interfacing the sensor with the Arduino, ensuring accurate connection of the X, Y, and Z output pins to the analog inputs, and writing Embedded C code to read and interpret the vibration data. This allowed us to simulate real-time detection of ground movements, which was then used as input for the machine learning model. Through this process, I developed a strong understanding of how MEMS-based sensors function and how hardware can be used to capture environmental signals for predictive analysis. The experience of troubleshooting connections and optimizing sensor output helped me appreciate the challenges and importance of reliable data acquisition in disaster prediction systems."
    },
    {
      name: "Ishaan Parikh",
      role: "Electronics and Documentation – Flood Detection",
      icon: FileText,
      gradient: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      contribution: "In this project, I worked on building the Flood Detection circuit using Arduino by connecting the DHT11 and Water Level Sensors to accurately capture temperature, humidity, and water level data for real-time monitoring. I wrote and uploaded Embedded C code in Arduino IDE to process the sensor readings and trigger alerts with the buzzer. Alongside the hardware work, I also led the effort to compile and organize the project documentation, ensuring all processes, methodologies, and results were clearly and professionally presented. This experience taught me the importance of precise circuit design and thorough documentation in delivering a reliable and replicable solution. Collaborating with my teammates highlighted the value of coordination and attention to detail in successfully completing a multidisciplinary project aimed at improving disaster preparedness."
    },
    {
      name: "Kartik Shekhar",
      role: "Machine Learning – Flood Prediction",
      icon: Waves,
      gradient: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      contribution: "During this project, I focused on developing the flood prediction model using machine learning. I learned to work with 100 years of historical flood data from the Indian Government and real-time data, training Decision Tree and Random Forest algorithms in Python on Google Colab to classify flood risk based on temperature, humidity, and water level inputs. I also explored how to deploy the model using Anvil to create an accessible web interface where users can view predictions. This experience taught me the practical steps of building, testing, and integrating an ML model into a user-facing application. Working with my teammates helped me appreciate the value of collaboration, clear communication, and combining electronics and software to deliver a complete early warning solution."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Team Invictus
              </span>
            </Link>
            <div className="hidden md:flex items-baseline space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Home
              </Link>
              <span className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium bg-blue-50">
                About Team
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Meet <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team Invictus</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              The brilliant minds behind Anemoi's AI-powered disaster prediction platform
            </p>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <Card
                key={member.name}
                className={`overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${member.bgColor} border-0 shadow-lg`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${member.gradient} flex items-center justify-center mr-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-gray-600">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {member.contribution}
                  </p>
                </CardContent>
              </Card>
            );
          })}
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

export default About;
