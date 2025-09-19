import {
  FiBriefcase,
  FiMapPin,
  FiClock,
  FiUsers,
  FiBookmark,
} from "react-icons/fi";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white  rounded-lg p-4 shadow-sm  hover:shadow-md transition-shadow">
      {job.promoted && (
        <div className="flex items-center gap-1 mb-3">
          <span className="text-xs bg-accent text-accent-foreground font-bold px-2 py-1 rounded">
            Promoted
          </span>
        </div>
      )}

      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center overflow-hidden">
          <img
            src={job.companyImage} // company ki image ka URL
            alt={job.company}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-normal text-card-foreground text-md">
            {job.title}
          </h3>
          <p className="text-xs text-muted-foreground">{job.company}</p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <FiMapPin className="w-3 h-3 text-gray-400" />
          <span className="text-gray-400">{job.location}</span>
        </div>
        <div className="flex items-center gap-2 ">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <FiClock className="w-3 h-3 text-gray-400" />
            <span className="text-gray-400">{job.timePosted}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <FiUsers className="w-3 h-3 text-gray-400" />
            <span className="text-blue-600">{job.applicants}</span>
          </div>
        </div>
      </div>
      <div className="flex  justify-between items-center gap-4">
        <button className="py-2 cursor-pointer  bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors flex items-center justify-between px-8">
          Apply Now
        </button>

        <FiBookmark className="w-6 h-6 text-gray-300 hover:text-gray-500" />
      </div>
    </div>
  );
};

export default JobCard;
