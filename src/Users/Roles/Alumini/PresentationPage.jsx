import React, { useState, useEffect } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { v4 as uuidv4 } from 'uuid';

const defaultPresentations = [
  {
    id: uuidv4(),
    title: 'Start with a Prompt',
    description: 'Get started by using prompts designed to guide you through various tasks.',
    link: '/start-prompt',
    gradient: 'bg-gradient-to-r from-blue-400 to-blue-600'
  },
  {
    id: uuidv4(),
    title: 'Import Docs + Videos',
    description: 'Upload and manage your documents, videos, and useful links here.',
    link: '/import-docs',
    gradient: 'bg-gradient-to-r from-green-400 to-green-600'
  }
];

const PresentationPage = () => {
  const [presentations, setPresentations] = useState([]);

  useEffect(() => {
    // Load presentations from localStorage or use defaultPresentations if none found
    const savedPresentations = JSON.parse(localStorage.getItem('presentations'));
    if (savedPresentations) {
      setPresentations(savedPresentations);
    } else {
      setPresentations(defaultPresentations);
      localStorage.setItem('presentations', JSON.stringify(defaultPresentations));
    }
  }, []);

  const handleAddPresentation = () => {
    const newPresentation = {
      id: uuidv4(),
      title: 'New Presentation',
      description: 'Description of the new presentation.',
      link: '/new-presentation',
      gradient: `bg-gradient-to-r from-${randomColor()}`
    };
    const updatedPresentations = [...presentations, newPresentation];
    setPresentations(updatedPresentations);
    localStorage.setItem('presentations', JSON.stringify(updatedPresentations));
  };

  const randomColor = () => {
    const colors = ['red-400 to-red-600', 'purple-400 to-purple-600', 'yellow-400 to-yellow-600', 'teal-400 to-teal-600'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="p-20">
      <div className="flex justify-center items-center mb-8">
        <CiCirclePlus
          className="text-4xl text-gray-600 cursor-pointer"
          onClick={handleAddPresentation}
        />
        <h1 className="text-4xl font-bold text-gray-900 ml-4">Create a presentation</h1>
      </div>
      <div className="flex flex-wrap">
        {presentations.map(presentation => (
          <div
            key={presentation.id}
            className={`w-full max-w-xs mx-2 p-6 rounded-lg shadow-lg text-center ${presentation.gradient}`}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">{presentation.title}</h2>
            <p className="text-white mb-4">{presentation.description}</p>
            <a href={presentation.link} className="text-white underline hover:text-gray-200">
              {presentation.title === 'Start with a Prompt' ? 'Learn More' : 'Upload Now'}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresentationPage;
