import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './output.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './pages/components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import EditPosts from './pages/EditPosts';
import CategoryPosts from './pages/CategoryPosts';
import AuthorPosts from './pages/AuthorPosts';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';
import { AuthContextProvider, AuthContext } from './pages/context/AuthContext';

const RequireAuth = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  console.log('Current User:', currentUser); // For debugging
  return currentUser ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts/:id", element: <PostDetail /> },
      { path: "register", element: <Register /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "Create", element: <CreatePost /> },
      { path: "posts/:id/edit", element: <EditPosts /> },
      { path: "posts/categories/:category", element: <CategoryPosts /> },
      { path: "posts/user/:id", element: <AuthorPosts /> },
      { path: "Logout", element: <Logout /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "app/",
    element: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
