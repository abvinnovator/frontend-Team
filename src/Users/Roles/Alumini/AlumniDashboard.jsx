import React, { useState, useEffect } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { HiOutlineTrash } from 'react-icons/hi';
import { IoMdSearch } from 'react-icons/io';
import { IoMdApps } from 'react-icons/io';

const defaultPresentations = [
  {
    title: "Start with a Prompt",
    description: "Get started by using prompts designed to guide you through various tasks.",
    colorFrom: "from-blue-400",
    colorTo: "to-blue-600"
  },
  {
    title: "Import Docs + Videos",
    description: "Upload and manage your documents, videos, and useful links here.",
    colorFrom: "from-green-400",
    colorTo: "to-green-600"
  }
];

const AlumniDashboard = () => {
  const [presentations, setPresentations] = useState([]);
  const [newPresentation, setNewPresentation] = useState({ title: "", description: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Set default presentations on component mount
    setPresentations(defaultPresentations);
  }, []);

  const handleAddPresentation = () => {
    if (newPresentation.title.trim() && newPresentation.description.trim()) {
      setPresentations([...presentations, { ...newPresentation, colorFrom: "from-purple-400", colorTo: "to-purple-600" }]);
      setNewPresentation({ title: "", description: "" }); // Clear the input after adding
      setIsModalOpen(false); // Close the modal
    }
  };

  const handleDeletePresentation = (index) => {
    setPresentations(presentations.filter((_, i) => i !== index));
  };

  return (
    <div className="p-20 relative">
      {/* Navbar Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <CiCirclePlus
              className='w-16 h-16 text-blue-600 cursor-pointer'
              onClick={() => setIsModalOpen(true)} // Open the modal
            />
            <h1 className="text-4xl font-bold text-gray-900">Create a presentation</h1>
          </div>
        </div>
      </div>

      {/* Modal for adding presentation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-96">
            <h2 className="text-2xl font-semibold mb-4">Add New Presentation</h2>
            <input
              type="text"
              value={newPresentation.title}
              onChange={(e) => setNewPresentation({ ...newPresentation, title: e.target.value })}
              className="p-3 border border-gray-300 rounded mb-4 w-full"
              placeholder="Enter presentation title"
            />
            <textarea
              value={newPresentation.description}
              onChange={(e) => setNewPresentation({ ...newPresentation, description: e.target.value })}
              className="p-3 border border-gray-300 rounded mb-4 w-full"
              placeholder="Enter presentation description"
              rows="4"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={handleAddPresentation}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add Presentation
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex flex-wrap">
        {presentations.map((presentation, index) => (
          <div
            key={index}
            className={`w-full max-w-xs mx-2 mb-4 bg-gradient-to-r ${presentation.colorFrom} ${presentation.colorTo} p-6 rounded-lg shadow-lg text-center relative`}
          >
            <HiOutlineTrash
              className="absolute top-2 right-2 w-6 h-6 text-white cursor-pointer"
              onClick={() => handleDeletePresentation(index)}
            />
            <h2 className="text-2xl font-semibold text-white mb-4">{presentation.title}</h2>
            <p className="text-white mb-4">{presentation.description}</p>
            <a href={`/presentation/${presentation.title}`} className="text-purple-200 hover:text-white underline">
              View Details
            </a>
          </div>
        ))}
      </div>

      {/* Search Bar and MdApps Button */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border border-gray-300 rounded-lg pl-10"
          />
          <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
        </div>
        <IoMdApps className="w-8 h-8 text-blue-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default AlumniDashboard;
