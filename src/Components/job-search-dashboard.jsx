import { useState } from "react";
import { FiSearch, FiMapPin, FiChevronDown } from "react-icons/fi";
import JobCard from "./job-card";
import "react-calendar/dist/Calendar.css";
import {
  jobs,
  recommendedJobs,
  latestJobs,
  similarTags,
  jobTypes,
  locations,
} from "../data/jobsData";
import CustomCalendar from "./custom-calendar";
const JobSearchDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  return (
    <div className="min-h-screen bg-background bg-[#F1F5F9]">
      <div className="flex flex-col lg:flex-row px-[2%] ">
        {/* Left Sidebar - User Profile */}
        <div className="w-full lg:w-80 lg:sticky lg:top-4 h-fit rounded-lg  py-[2%] ">
          <div className="bg-white pb-5 rounded-xl overflow-hidden">
            <div className="relative ">
              <img
                src="/office-supplies.jpg"
                alt="Background"
                className="w-full h-28 object-cover"
              />
              <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2">
                <img
                  src="/professional-headshot-of-albert-flores.jpg"
                  alt="Albert Flores"
                  className="w-20 h-20 rounded-full border-4 border-white object-cover"
                />
              </div>
            </div>

            <div className="pt-12 text-center px-4">
              <h2 className="text-lg font-bold">Albert Flores</h2>
              <p className="text-sm text-gray-500">
                Senior Product Designer | UI/UX Designer | Graphic Designer |
                Web...
              </p>
              <p className="text-sm text-gray-500 flex items-center justify-center gap-1 mt-1">
                <FiMapPin className="w-4 h-4" />
                Clinton, Maryland
              </p>
            </div>
          </div>

          <div className="px-6 py-4 space-y-3 bg-white  my-2 rounded-xl">
            <div className="flex justify-between text-sm ">
              <span className="text-gray-500">Profile Visitors</span>
              <span className="font-semibold text-blue-600">140</span>
            </div>
            <hr className="border-t-gray-200" />
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Resume Viewers</span>
              <span className="font-semibold text-blue-600">20</span>
            </div>
            <hr className="border-t-gray-200" />
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">My Jobs</span>
              <span className="font-semibold text-blue-600">88</span>
            </div>
          </div>
          {/* Calendar  */}
          <CustomCalendar />
        </div>

        <div className="flex-1 p-6">
          <div>
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-gray-800">
                Find your Dream Job,{" "}
                <span className="text-blue-600 cursor-pointer hover:underline">
                  Albert!
                </span>
              </h1>
              <p className="text-gray-600 text-sm">
                Explore the latest job openings and apply for the best
                opportunities available today!
              </p>
            </div>

            <div className=" bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-3 ">
                <div className="md:col-span-2">
                  <div className="relative">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Job Title, Company, or Keywords"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-4 py-3  rounded-md focus:none focus:none focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-9 pr-4 py-3 border-l border-gray-200 focus:outline-none text-sm text-gray-400"
                    >
                      <option value="">Select Location</option>
                      {locations.map((loc) => (
                        <option key={loc.value} value={loc.value}>
                          {loc.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="w-full px-3 py-3 border-l border-gray-200 focus:outline-none text-sm text-gray-400"
                  >
                    <option value="">Job Type</option>
                    {jobTypes.map((job) => (
                      <option key={job.value} value={job.value}>
                        {job.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <button className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm font-medium">
                    <FiSearch className="mr-2 w-4 h-4" /> Search
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 my-4">
              <span className="text-md flex items-center text-gray-500">
                Similar :
              </span>
              {similarTags.map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-2 text-xs bg-gray-100 text-gray-600 border rounded-md hover:bg-blue-100 hover:text-blue-600 transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center  gap-4  mb-6">
              <h2 className="text-xl  text-foreground">Featured Jobs</h2>
              <button className="text-blue-600  underline hover:text-accent/80 text-md font-medium">
                See Featured Jobs
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center  gap-4  mb-6">
              <h2 className="text-xl  text-foreground">Recommended Jobs</h2>
              <button className="text-blue-600  underline hover:text-accent/80 text-md font-medium">
                See Recommended Jobs
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {recommendedJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center  gap-4  my-6">
              <h2 className="text-xl  text-foreground">Latest Jobs</h2>
              <button className="text-blue-600  underline hover:text-accent/80 text-md font-medium">
                See Latest Jobs
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {latestJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearchDashboard;
