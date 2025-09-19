import React from "react";
import Layout from "./Components/layout";
import Home from "./Pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopCompanies from "./Pages/top-companies";
import JobTracker from "./Pages/job-tracker";
import MyCalender from "./Pages/my-calender";
import Messages from "./Pages/messages";
import Documents from "./Pages/documents";
import Notifications from "./Pages/notifications";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-companies" element={<TopCompanies />} />
          <Route path="/job-tracker" element={<JobTracker />} />
          <Route path="/my-calendar" element={<MyCalender />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
