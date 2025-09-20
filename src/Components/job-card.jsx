import { FiMapPin, FiClock, FiUsers, FiBookmark } from "react-icons/fi";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm group hover:bg-blue-600 transition-colors">
      {job.promoted && (
        <div className="flex items-center gap-1 mb-3">
          <span className="text-xs bg-accent text-accent-foreground font-bold px-2 py-1 rounded group-hover:bg-blue-500 group-hover:text-white">
            Promoted
          </span>
        </div>
      )}

      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src={job.companyImage}
            alt={job.company}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-normal text-card-foreground text-md group-hover:text-white">
            {job.title}
          </h3>
          <p className="text-xs text-muted-foreground group-hover:text-white">
            {job.company}
          </p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-white">
          <FiMapPin className="w-3 h-3 text-gray-400 group-hover:text-white" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-white">
            <FiClock className="w-3 h-3 text-gray-400 group-hover:text-white" />
            <span>{job.timePosted}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-white">
            <FiUsers className="w-3 h-3 text-blue-600 group-hover:text-white" />
            <span>{job.applicants}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <button className="py-2 cursor-pointer bg-blue-600 text-white rounded-lg text-sm font-medium group-hover:bg-white group-hover:text-blue-600 transition-colors flex items-center justify-between px-8">
          Apply Now
        </button>
        <FiBookmark className="w-6 h-6 text-gray-300 group-hover:text-white" />
      </div>
    </div>
  );
};

export default JobCard;
