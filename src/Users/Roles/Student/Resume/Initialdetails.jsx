import React, { useEffect, useState } from 'react';

import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const InitialDetails = () => {

    const [userProfile, setUserProfile] = useState(null);
    
    const [isOpen, setIsOpen] = useState(false);
    const [newSkill, setNewSkill] = useState('');
    const [skills, setSkills] = useState([]);
    const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      collegeEmail: '',
      mobileNo: '',
    });
    const [newWorkExperience, setNewWorkExperience] = useState({ jobTitle: '', company: '', startDate: '', endDate: '', description: '' });
    const [workExperience, setWorkExperience] = useState([]);
    const [isWorkExpModalOpen, setIsWorkExpModalOpen] = useState(false);
    const [newProject, setNewProject] = useState({ title: '', description: '', technologies: '', link: '' });
    const [projects, setProjects] = useState([]);
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
    // Update formData when userProfile changes
    useEffect(() => {
      if (userProfile) {
        setFormData({
          firstName: userProfile.firstName || '',
          lastName: userProfile.lastName || '',
          collegeEmail: userProfile.collegeEmail || '',
          mobileNo: userProfile.mobileNo || '',
        });
        setSkills(userProfile.skills || []);
        setWorkExperience(userProfile.workExperience || []);
        setProjects(userProfile.projects || []);
      }
    }, [userProfile]);
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async () => {
      try {
        const response = await fetch('/auth/userprofile', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
          // Attempt to parse JSON response
          try {
            const updatedUser = await response.json();
            setFormData(updatedUser);
            setIsOpen(false);
          } catch (jsonError) {
            console.error('Failed to parse JSON response:', jsonError);
          }
        } else {
          // Handle non-OK responses
          const errorData = await response.text();
          console.error('Error:', errorData);
        }
      } catch (err) {
        console.error('Error:', err);
      }
    };
    const handleAddSkill = async () => {
      if (!newSkill.trim()) return;
      
      const updatedSkills = [...skills, newSkill];
      try {
          await axios.put('/auth/userprofile', { skills: updatedSkills });
          setSkills(updatedSkills);
          setNewSkill('');
          setIsSkillModalOpen(false);
      } catch (err) {
          console.error("Error updating skills:", err);
      }
  };

  const handleChangeSkill = (e) => {
      setNewSkill(e.target.value);
  };

  const handleDeleteSkill = async (skillToDelete) => {
      const updatedSkills = skills.filter(skill => skill !== skillToDelete);
      try {
          await axios.put('/auth/userprofile', { skills: updatedSkills });
          setSkills(updatedSkills);
      } catch (err) {
          console.error("Error deleting skill:", err);
      }
  };
  const handleAddWorkExperience = async () => {
    if (!newWorkExperience.jobTitle.trim()) return;

    const updatedWorkExperience = [...workExperience, newWorkExperience];
    try {
      await axios.put('/auth/userprofile', { workExperience: updatedWorkExperience });
      setWorkExperience(updatedWorkExperience);
      setNewWorkExperience({ jobTitle: '', company: '', startDate: '', endDate: '', description: '' });
      setIsWorkExpModalOpen(false);
    } catch (err) {
      console.error("Error updating work experience:", err);
    }
  };

  const handleChangeWorkExperience = (e) => {
    setNewWorkExperience({ ...newWorkExperience, [e.target.name]: e.target.value });
  };

  const handleDeleteWorkExperience = async (experienceToDelete) => {
    const updatedWorkExperience = workExperience.filter(exp => exp !== experienceToDelete);
    try {
      await axios.put('/auth/userprofile', { workExperience: updatedWorkExperience });
      setWorkExperience(updatedWorkExperience);
    } catch (err) {
      console.error("Error deleting work experience:", err);
    }
  };

  const handleAddProject = async () => {
    if (!newProject.title.trim()) return;

    const updatedProjects = [...projects, newProject];
    try {
      await axios.put('/auth/userprofile', { projects: updatedProjects });
      setProjects(updatedProjects);
      setNewProject({ title: '', description: '', technologies: '', link: '' });
      setIsProjectModalOpen(false);
    } catch (err) {
      console.error("Error updating projects:", err);
    }
  };

  const handleChangeProject = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleDeleteProject = async (projectToDelete) => {
    const updatedProjects = projects.filter(proj => proj !== projectToDelete);
    try {
      await axios.put('/auth/userprofile', { projects: updatedProjects });
      setProjects(updatedProjects);
    } catch (err) {
      console.error("Error deleting project:", err);
    }
  };
  useEffect(() => {
    // Fetch the user profile data from the backend
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('/auth/userprofile');
        setUserProfile(response.data);
      } catch (err) {
        console.error("Error fetching user profile:", err);
      }
    };

    fetchUserProfile();
  }, []);



    if (!userProfile) {
        return <div>Loading...</div>; // Show loading state while fetching data
    }

    return (
        <div>
            <div className="back_button_container mb-4 p-4 ">
                <a href="/student" className="flex items-center text-blue-600 ml-24">
                    <IoIosArrowRoundBack />
                    <span className="ml-2">Back</span>
                </a>
            </div>
            <div id="layout_table" className="px-52 py-3 bg-gray-100 min-h-screen my-2">

                {/* Resume Heading */}
                <div className="text-2xl font-bold mb-4 text-center">Resume</div>

                {/* Resume Container */}
                <div id="resume-container" className="bg-white shadow-md rounded-lg p-12">
                    <div className="recruiter-text mb-4 text-gray-700 text-center">
                        This is the resume companies will see when you apply
                    </div><hr />

                    {/* Personal Details */}
                    <div className="details_table_row personal-details flex flex-wrap justify-between items-center mb-4 ">
                        <div className="details_right personal_details_details_right w-full sm:w-auto mb-4 sm:mb-0 p-4">
                            <div className="pre_filled_details">
                                <div className="line full-name text-lg font-semibold flex gap-2">
                                    {userProfile.firstName} {userProfile.lastName}
                                    <button onClick={() => setIsOpen(true)}>
          <MdModeEdit />
</button>
                                </div>
                                <div className="line">{userProfile.collegeEmail}</div>
                                <div className="line">{userProfile.mobileNo}</div>
                                <div className="line">Bhimavaram</div>
                            </div>
                        </div>
                        <div className="resume_download_cta">
                            <a href="/download/resume" target="_blank" className="text-blue-600 flex items-center">
                                <MdOutlineFileDownload />
                                <span className="ml-2">Download</span>
                            </a>
                        </div>
                    </div>
  {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <div>
              <label className="block mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-2">College Email</label>
              <input
                type="email"
                name="collegeEmail"
                value={formData.collegeEmail}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-2">Mobile No</label>
              <input
                type="text"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gray-200 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
                    {/* Career Objective */}
                    <hr className="my-4" />
                    <div className="details_table_row resume-career-objective grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4">
                        <div className="details_left font-semibold">CAREER OBJECTIVE</div>
                        <div className="details_right md:col-span-2">
                            <div className="career-objective-container prefilled-career-objective mb-2"></div>
                            <button  className="add_more_item_container text-blue-600 flex items-center">
                                <FaPlus />
                                <span className="ml-2">Add your career objective</span>
                            </button>
                        </div>
                    </div>

                    {/* Education */}
                    <hr className="my-4" />
                    <div className="details_table_row resume-education grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4">
                        <div className="details_left font-semibold">EDUCATION</div>
                        <div className="details_right md:col-span-2">
                            <div className="education-container">
                                <div className="prefilled-education-details-row">
                                    <div className="line">B.Tech, {userProfile.branch}</div>
                                    <div className="line">SRKR Engineering College</div>
                                    <div className="line">{userProfile.graduationYear}</div>
                                </div>
                                <button  className="add_more_item_container text-blue-600 flex items-center mt-2">
                                    <FaPlus />
                                    <span className="ml-2">Add education</span>
                                </button>
                            </div>
                        </div>
                    </div>

      {/* Work Experience */}
      <hr className="my-4" />
      <div className="work_experience_section mt-6">
            <h3 className="text-lg font-semibold mb-2">Work Experience</h3>
            <ul className="list-disc pl-5">
              {workExperience.map((exp, index) => (
                <li key={index} className="mb-4">
                  <div className="font-semibold">{exp.jobTitle} at {exp.company}</div>
                  <div>{new Date(exp.startDate).toLocaleDateString()} - {new Date(exp.endDate).toLocaleDateString()}</div>
                  <div>{exp.description}</div>
                  <button onClick={() => handleDeleteWorkExperience(exp)} className="text-red-600">Delete</button>
                </li>
              ))}
            </ul>
            <button onClick={() => setIsWorkExpModalOpen(true)} className="text-blue-600 flex items-center mt-2">
              <FaPlus />
              <span className="ml-2">Add Work Experience</span>
            </button>
          </div>

          {/* Add Work Experience Modal */}
          {isWorkExpModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Add Work Experience</h2>
                <div>
                  <label className="block mb-2">Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={newWorkExperience.jobTitle}
                    onChange={handleChangeWorkExperience}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div>
                  <label className="block mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={newWorkExperience.company}
                    onChange={handleChangeWorkExperience}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div>
                  <label className="block mb-2">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={newWorkExperience.startDate}
                    onChange={handleChangeWorkExperience}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div>
                  <label className="block mb-2">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={newWorkExperience.endDate}
                    onChange={handleChangeWorkExperience}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div>
                  <label className="block mb-2">Description</label>
                  <textarea
                    name="description"
                    value={newWorkExperience.description}
                    onChange={handleChangeWorkExperience}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="flex justify-end mt-4">
                  <button onClick={handleAddWorkExperience} className="bg-blue-600 text-white p-2 rounded">
                    Add
                  </button>
                  <button onClick={() => setIsWorkExpModalOpen(false)} className="ml-2 p-2 rounded border">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Projects */}
          <div className="projects_section mt-6">
            <h3 className="text-lg font-semibold mb-2">Projects</h3>
            <ul className="list-disc pl-5">
              {projects.map((proj, index) => (
                <li key={index} className="mb-4">
                  <div className="font-semibold">{proj.title}</div>
                  <div>{proj.description}</div>
                  <div>Technologies: {proj.technologies.join(', ')}</div>
                  <div>Link: <a href={proj.link} target="_blank" className="text-blue-600">{proj.link}</a></div>
                  <button onClick={() => handleDeleteProject(proj)} className="text-red-600">Delete</button>
                </li>
              ))}
            </ul>
            <button onClick={() => setIsProjectModalOpen(true)} className="text-blue-600 flex items-center mt-2">
              <FaPlus />
              <span className="ml-2">Add Project</span>
            </button>
          </div>

          {/* Add Project Modal */}
          {isProjectModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Add Project</h2>
                <div>
                  <label className="block mb-2">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={newProject.title}
                    onChange={handleChangeProject}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div>
                  <label className="block mb-2">Description</label>
                  <textarea
                    name="description"
                    value={newProject.description}
                    onChange={handleChangeProject}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div>
                  <label className="block mb-2">Technologies</label>
                  <input
                    type="text"
                    name="technologies"
                    value={newProject.technologies}
                    onChange={handleChangeProject}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div>
                  <label className="block mb-2">Link</label>
                  <input
                    type="text"
                    name="link"
                    value={newProject.link}
                    onChange={handleChangeProject}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="flex justify-end mt-4">
                  <button onClick={handleAddProject} className="bg-blue-600 text-white p-2 rounded">
                    Add
                  </button>
                  <button onClick={() => setIsProjectModalOpen(false)} className="ml-2 p-2 rounded border">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

      {/* Skills */}
      <hr className="my-4" />
     

                {/* Skill Modal */}
                <div className="details_table_row resume-skill grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4">
                    <div className="details_left font-semibold">SKILLS</div>
                    <div className="details_right md:col-span-2">
                        <div className="flex flex-wrap gap-2 mb-2">
                            {skills.map((skill, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                                    {skill}
                                    <button onClick={() => handleDeleteSkill(skill)} className="text-red-600">&times;</button>
                                </span>
                            ))}
                        </div>
                        <button onClick={() => setIsSkillModalOpen(true)} className="add_more_item_container text-blue-600 flex items-center">
                            <FaPlus />
                            <span className="ml-2">Add skill</span>
                        </button>
                      
                    </div>
                </div>

                {/* Skill Modal */}
                {isSkillModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Add Skill</h2>
                            <div>
                                <label className="block mb-2">Skill</label>
                                <input
                                    type="text"
                                    value={newSkill}
                                    onChange={handleChangeSkill}
                                    className="border p-2 rounded w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-end gap-4">
                                <button
                                    onClick={() => setIsSkillModalOpen(false)}
                                    className="bg-gray-200 px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddSkill}
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}
   {/* Extra Curricular Activities */}
   <hr className="my-4" />
      <div className="details_table_row resume-position-of-responsibility grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4">
        <div className="details_left font-semibold">EXTRA CURRICULAR ACTIVITIES</div>
        <div className="details_right md:col-span-2">
          <button className="add_more_item_container text-blue-600 flex items-center mt-2">
          <FaPlus />
            <span className="ml-2">Add extra curricular activities</span>
          </button>
        </div>
      </div>
        {/* Trainings / Courses */}
        <hr className="my-4" />
      <div className="details_table_row resume-training grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4">
        <div className="details_left font-semibold">TRAININGS/ COURSES</div>
        <div className="details_right md:col-span-2">
          <button className="add_more_item_container text-blue-600 flex items-center mt-2">
          <FaPlus />
            <span className="ml-2">Add training/ course</span>
          </button>
        </div>
      </div>
      {/* Accomplishments / Additional Details */}
      <hr className="my-4" />
      <div className="details_table_row resume-additional-detail grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4">
        <div className="details_left font-semibold">ACCOMPLISHMENTS/ ADDITIONAL DETAILS</div>
        <div className="details_right md:col-span-2">
          <button className="add_more_item_container text-blue-600 flex items-center mt-2">
          <FaPlus />
            <span className="ml-2">Add accomplishment/ additional detail</span>
          </button>
        </div>
      </div>
    </div>
  </div>    


     <div>
      
    </div>
</div>
  );
};

export default InitialDetails;