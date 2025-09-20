import React, { Suspense, lazy } from "react";
import Layout from "./Components/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./Components/loader";
import FindJobs from "./Pages/find-jobs";

// Lazy load pages
const Home = lazy(() => import("./Pages/home"));
const TopCompanies = lazy(() => import("./Pages/top-companies"));
const JobTracker = lazy(() => import("./Pages/job-tracker"));
const MyCalender = lazy(() => import("./Pages/my-calender"));
const Messages = lazy(() => import("./Pages/messages"));
const Documents = lazy(() => import("./Pages/documents"));
const Notifications = lazy(() => import("./Pages/notifications"));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-jobs" element={<FindJobs />} />
            <Route path="/top-companies" element={<TopCompanies />} />
            <Route path="/job-tracker" element={<JobTracker />} />
            <Route path="/my-calendar" element={<MyCalender />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
