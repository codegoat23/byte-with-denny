import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/components/Layout';
import ErrorPage from './pages/ErrorPage'
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
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement: <ErrorPage/>,
    children:[
      {index:true , element:<Home/>},
      {path:"posts/:id" , element: <PostDetail/>},
      {path:"register" , element: <Register/>}, 
      {path:"profile/:id" , element: <UserProfile />},
      {path:"bs-admin/login" , element: <Login />},
      {path:"Create" , element: <CreatePost/>},  
      {path:"posts/:id/edit" , element: <EditPosts/>},     
      {path:"posts/categories/:category" , element: <CategoryPosts/>},
      {path:"posts/user/:id" , element: <AuthorPosts/>}, 
      {path:"app/:id" , element: <Dashboard/>},  
      {path:"Logout" , element: <Logout/>},
      

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

