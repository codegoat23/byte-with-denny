import React from "react";
import { FaFile, FaFolder } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { Navigate } from "react-router-dom";
import Logout from "./Logout";

const Dashboard = () => {
 
  return (
    <div className="flex flex-1 h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col bg-white">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center px-4">
           
          </div>

          {/* Search */}
          <div className="px-4 mt-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="block w-full py-2 pl-10 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                placeholder="Search here"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="px-4 mt-6">
            <hr className="border-gray-200" />
          </div>

          <div className="flex flex-col flex-grow px-3 mt-6 space-y-2">
            <nav className="flex flex-col space-y-2 w-56" >
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-white transition-all duration-200 bg-indigo-600 rounded-md hover:bg-indigo-500 "
              >
                <svg
                  className="w-5 h-5 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Dashboard
              </a>

              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 transition-all duration-200  rounded-md hover:text-white hover:bg-indigo-600 gap-4"
              >
                <IoSettings size={20}/>
                Settings
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 transition-all duration-200  rounded-md hover:text-white hover:bg-indigo-600 gap-4"
              >
                <FaFolder size={20}/>
                Assets
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 transition-all duration-200  rounded-md hover:text-white hover:bg-indigo-600 gap-4"
              >
               <IoIosColorPalette size={20}/>
                Themes
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 transition-all duration-200  rounded-md hover:text-white hover:bg-indigo-600 gap-4"
              >
                <FaFile size={20}/>
                Drafts
              </a>
              <Logout /> 
              {/* Add more nav items here */}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      
      <div className="flex flex-col flex-1">
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
           

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
