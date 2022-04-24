import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NewPost from "./role/Dashboard/Author/NewPost";
import UpdatePost from "./role/Dashboard/Author/UpdatePost";
import PostDetail from "./role/Dashboard/Author/PostDetail";
import ManagePost from "./role/Dashboard/Author/ManagePost";
import Auth from "./page/Auth";
import AuthorDashboard from "./role/Dashboard/Author/AuthorDashboard";
import Info from "./role/Dashboard/Info";
import ChangePassword from "./role/Dashboard/ChangePassword";
import ManageUser from "./role/Dashboard/Admin/ManageUser";
import AdminDashboard from "./role/Dashboard/Admin/AdminDashboard";
import Home from "./role/Client/Home";
import Explore from "./role/Client/Explore/Explore";
import PageNotFound from "./page/404";
import ClientAuth from "./role/Client/ClientAuth";
import ExploreDetail from "./role/Client/Explore/ExploreDetail";
import { useEffect } from "react";
function App() {
  localStorage.setItem("theme", "light");
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="explore" element={<Outlet />}>
          <Route path="all" element={<Explore />} />
          <Route path=":eid" element={<ExploreDetail />} />
        </Route>
        <Route path="/auth" element={<ClientAuth />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}

        <Route path="/auth" element={<Auth />} />
        <Route path="admin" element={<Outlet />}>
          <Route path="info" element={<Info />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="manage" element={<ManageUser />} />
        </Route>
        <Route path="author" element={<Outlet />}>
          <Route path="dashboard" element={<AuthorDashboard />} />
          <Route path="info" element={<Info />} />
          <Route path="change-password" element={<ChangePassword />} />
        </Route>
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route path="post" element={<Outlet />}>
          <Route path="new" element={<NewPost />} />
          <Route path="edit/:pid" element={<UpdatePost />} />
          <Route path="detail/:pid" element={<PostDetail />} />
          <Route path="manage" element={<ManagePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
