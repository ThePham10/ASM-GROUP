import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import UserPage from './pages/UserPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';
import Group from './pages/Group';
import { modelgroups } from './model/GroupModel';
import AboutUsPage from './pages/AboutUsPage';
import MembersPage from './pages/MembersPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userprofile" element={<UserProfile />} />
        {modelgroups.map(group => (
          <Route
            key={group.id}
            path={`/group${group.id}`}
            element={<Group groupID={group.id} />}
          />
        ))}
        {modelgroups.map(group => (
          <Route
            key={group.id}
            path={`/aboutus${group.id}`}
            element={<AboutUsPage groupID={group.id} />}
          />
        ))}
        {modelgroups.map(group => (
          <Route
            key={group.id}
            path={`/groupmembers${group.id}`}
            element={<MembersPage groupID={group.id} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
