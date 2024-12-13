import React, { useState } from 'react';
import python from "./assets/python.jpeg";
import ml from "./assets/ml.jpeg";
import js from "./assets/js.png";
import deep from "./assets/deep.jpeg";
import ethical from "./assets/ethical.jpeg";
import mac from "./assets/mac.jpeg";
import node from "./assets/node.jpeg";
import cyber from "./assets/cyber.jpeg";
import sec from "./assets/sec.jpeg";

const Card = ({ title, image, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500">{category}</p>
    </div>
  );
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allCards = [
    {
      title: "Python Objects 101: How to use BeautifulSoup",
      image: python, 
      category: "Full Stack Development",
    },
    {
      title: "Machine Learning Must-Have Skills",
      image: ml, 
      category: "Data Science",
    },
    {
      title: "Unlocking the Power of NLP",
      image: cyber, 
      category: "Cyber Security",
    },
    {
      title: "JavaScript Basics for Beginners",
      image: js, 
      category: "Full Stack Development",
    },
    {
      title: "Deep Learning 101",
      image: deep, 
      category: "Data Science",
    },
    {
      title: "Ethical Hacking Essentials",
      image: ethical, 
      category: "Cyber Security",
    },
    {
      title: "Building REST APIs with Node.js",
      image: node, 
      category: "Full Stack Development",
    },
    {
      title: "Introduction to Machine Learning",
      image: mac, 
      category: "Data Science",
    },
    {
      title: "Network Security Fundamentals",
      image: sec,
      category: "Cyber Security",
    },
  ];

  const filteredCards = selectedCategory === 'All'
    ? allCards
    : allCards.filter(card => card.category === selectedCategory);

  return (
    <div className="container mx-auto py-12">
      
      <div className="flex justify-center items-center mb-6 shadow-lg bg-white">
        <div className="flex space-x-4 p-4">
          <div
            onClick={() => setSelectedCategory('All')}
            className={`text-gray-700 font-semibold py-2 px-4 rounded-lg cursor-pointer hover:bg-green-500 hover:text-white transition duration-300 ${selectedCategory === 'All' ? 'bg-green-500 text-white' : ''}`}
          >
            All
          </div>
          <div
            onClick={() => setSelectedCategory('Full Stack Development')}
            className={`text-gray-700 py-2 px-4 font-semibold rounded-lg cursor-pointer hover:bg-green-500 hover:text-white transition duration-300 ${selectedCategory === 'Full Stack Development' ? 'bg-green-500 text-white' : ''}`}
          >
            Full Stack Development
          </div>
          <div
            onClick={() => setSelectedCategory('Data Science')}
            className={`text-gray-700 py-2 px-4 font-semibold rounded-lg cursor-pointer hover:bg-green-500 hover:text-white transition duration-300 ${selectedCategory === 'Data Science' ? 'bg-green-500 text-white' : ''}`}
          >
            Data Science
          </div>
          <div
            onClick={() => setSelectedCategory('Cyber Security')}
            className={`text-gray-700 py-2 px-4 font-semibold rounded-lg cursor-pointer hover:bg-green-500 hover:text-white transition duration-300 ${selectedCategory === 'Cyber Security' ? 'bg-green-500 text-white' : ''}`}
          >
            Cyber Security
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCards.map((card, index) => (
          <Card key={index} title={card.title} image={card.image} category={card.category} />
        ))}
      </div>
    </div>
  );
};

export default App;
