import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import CertificatesList from "../../Pages/CertificatesList/CertificatesList";
import CertificateVerify from "../../Pages/CertificateVerify/CertificateVerify";
import CreateUser from "../../Pages/CreateUser/CreateUser";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Event from "../../Pages/Events/Event";
import Events from "../../Pages/Events/Events";
import Forum from "../../Pages/Forum/Forum";
import ForumThreadsList from "../../Pages/ForumThreadsList/ForumThreadsList";
import FourOFour from "../../Pages/FourOFour/FourOFour";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ManageAdmin from "../../Pages/ManageAdmin/ManageAdmin";
import NewCertificate from "../../Pages/NewCertificate/NewCertificate";
import NewEvent from "../../Pages/NewEvent/NewEvent";
import Notifications from "../../Pages/Notifications/Notifications";
import OrganizeTeachers from "../../Pages/OrganizeTeachers/OrganizeTeachers";
import OrganizeTeam from "../../Pages/OrganizeTeam/OrganizeTeam";
import Profile from "../../Pages/Profile/Profile";
import Search from "../../Pages/Search/Search";
import Settings from "../../Pages/Settings/Settings";
import AllUsers from "../../Pages/AllUsers/AllUsers";

const Layout = () => {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="*" element={<FourOFour />} />
      <Route path="/" exact={true} element={<Home />} />
      <Route
        path="/login"
        exact={true}
        element={
          localStorage.getItem("authToken") ? (
            <Navigate to="/" replace />
          ) : (
            <Login></Login>
          )
        }
      />
      <Route path="/user/:id" exact={true} element={<Profile />} />
      <Route path="/search" exact={true} element={<Search />} />
      <Route path="/forum" exact={true} element={<Forum />} />
      <Route path="/forum/events" exact={true} element={<Events />} />
      <Route path="/forum/events/:eventId" exact={true} element={<Event />} />
      <Route path="/certificate" exact={true} element={<CertificateVerify />} />
      <Route
        path="/certificate/:id"
        exact={true}
        element={<CertificateVerify />}
      />
      {user?.uid ? (
        <Route path="/notifications" exact={true} element={<Notifications />} />
      ) : (
        ""
      )}
      <Route path="/settings" exact={true} element={<Settings />} />
      <Route path="/settings/:page" exact={true} element={<Settings />} />
      {localStorage.getItem("authToken") ? (
        ""
      ) : (
        <Route path="/admin/*" element={<Navigate to="/login" replace />} />
      )}
      {user?.role === "admin" ||
      user?.role === "mod" ||
      user?.role === "moderator" ||
      user?.role === "dev" ||
      user?.role === "developer" ? (
        <>
          <Route path="/admin" exact={true} element={<Dashboard />} />
          <Route path="/admin/dashboard" exact={true} element={<Dashboard />} />
          <Route path="/admin/new-event" exact={true} element={<NewEvent />} />
          <Route
            path="/admin/manage-admin"
            exact={true}
            element={<ManageAdmin />}
          />
          <Route
            path="/admin/create-user"
            exact={true}
            element={<CreateUser />}
          />
          <Route
            path="/admin/organize-teachers"
            exact={true}
            element={<OrganizeTeachers />}
          />
          <Route
            path="/admin/organize-team"
            exact={true}
            element={<OrganizeTeam />}
          />
          <Route
            path="/admin/new-certificate"
            exact={true}
            element={<NewCertificate />}
          />
          <Route
            path="/admin/certificates"
            exact={true}
            element={<CertificatesList />}
          />
          <Route
            path="/admin/certificates/:certificateId"
            exact={true}
            element={<CertificatesList />}
          />
          <Route path="/admin/all-users" exact={true} element={<AllUsers />} />
          <Route
            path="/admin/forum-threads"
            exact={true}
            element={<ForumThreadsList />}
          />
        </>
      ) : (
        ""
      )}
    </Routes>
  );
};

export default Layout;
