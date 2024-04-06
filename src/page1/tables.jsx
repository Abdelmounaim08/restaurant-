import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from './image/logo.png';
import React from 'react';
import Datetime from './dateTime'

import Draggable from 'react-draggable';
function Table() {
     const [theme, setTheme] = useState([]);
     const [table, settable] = useState([]);
     const navigate = useNavigate();
     const [searchTitle, setSearchTitle] = useState("");
     const [id, setId] = useState([]);
     const [status, setStatus] = useState([]);
     const Variants = {
          OCCUPIED: "bg-green-800 hover:bg-green-400",
          WITH_CUSTOMERS: "bg-red-800 hover:bg-red-400",
          AVAILABLE: "bg-blue-800 hover:bg-blue-400"
     }
     
  useEffect(() => {
     if(window.matchMedia('(prefers-color-scheme: dark)').matches){
       setTheme('dark');
     }
     else {
       setTheme('light');
     }
   }, [])
 
   useEffect(() => {
     if (theme === "dark") {
       document.documentElement.classList.add("dark");
     } else {
       document.documentElement.classList.remove("dark");
     }
   }, [theme]);
 
   const handleThemeSwitch = () => {
     setTheme(theme === "dark" ? "light" : "dark");
   };
 

     useEffect(() => {
          const loadPosts = async () => {

               const response = await axios.get(
                    "https://test.gs-lafondation.com/api/tables"
               );
               settable(response.data);

          };

          loadPosts();
     }, []);

     const handleClick = (e, y) => {
          setId(e);
          setStatus(y);
     }
     return <>
     
<div className="space-y-4 md:space-y-2  h-full dark:bg-gray-700">
          <div className=" dark:bg-gray-700">
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded  dark:bg-gray-700 ">
          <div className="container flex flex-wrap items-center  dark:bg-gray-700 justify-between mx-auto">
            <a href="https://www.facebook.com/mounaim.mis/" className="flex items-center">
              <img src={logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">restaurant</span>
            </a>
            <div className="flex md:order-2">
              <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                <svg className="w-5 h-5" aria-hidden="true" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Search</span>
              </button>
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500 dark:text-white" aria-hidden="true" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input type="text"
                  placeholder="Search..."
                  onChange={(e) => setSearchTitle(e.target.value)} className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-white dark:placeholder-white dark:text-white dark:hover:ring-blue-500 dark:focus:border-blue-500 " />
              </div>
              <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                <span className="sr-only">Open menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500 dark:text-white" aria-hidden="true" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text"
                  placeholder="Search..."
                  onChange={(e) => setSearchTitle(e.target.value)} className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-white dark:placeholder-white dark:text-white dark:hover:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                </li>
                <li>
                  <a href="/command/0/AVAILABLE" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                </li>
                <li>                            <button className="bg-green-200 p-2 rounded-xl" onClick={handleThemeSwitch}>
                  Dark Mode
                </button></li>
              </ul>

            </div>
          </div>
        </nav>
      </div>
               <div className="container  dark:bg-gray-700  justify-between pt-2 space-y-4  pr-6 pl-6 mx-auto sm:grid gap-2 grid-cols-6 grid-flow-row-4 scroll-ml-6 snap-start flex flex-col md:flex-row  ">

                    {table.filter((value) => {
                         if (searchTitle === "") {
                              return value;
                         } else if (
                              value.name.toLowerCase().includes(searchTitle.toLowerCase()) ||
                              value.status.toLowerCase().includes(searchTitle.toLowerCase())

                         ) {
                              return value;
                         }
                    }).map((e, i) =>

                         <Draggable  key={i}>

                              <button
                                   onClick={() => handleClick(e.id, e.status)}
                                   onDoubleClick={() => navigate(`/command/${e.id}/${e.status}`)}
                                   className={` px-4 py-4 rounded-full text-white max-w-sm md:max-w-lg ${Variants[e.status]}`}>
                                   <p>
                                        {e.name}
                                   </p>
                                   <p>
                                        {e.status}
                                   </p>

                              </button>
                         </Draggable>


                    )}
               </div>
               <footer className="flex flex-col  dark:bg-gray-700 space-y-35 " >
                    <div className="bg-white justify-between text-lg fixed inset-x-0 bottom-0 p-1  dark:bg-gray-700  flex ">

                         <div className="row dark:text-white">
                              <img src={logo} className="h-6 mr-3 sm:h-9"></img>
                         </div>
                         <div className="row  dark:text-white">
                              <p>Table: {id} </p>
                         </div>

                         <div className="row  dark:text-white">
                              <p>etat:{status}</p>

                         </div>
                         <div className="row  dark:text-white">
                              <Datetime/>
                         </div>
                         <div className="row  dark:text-white">
                               <p>&copy;{new Date().getFullYear()} </p>
                         </div>

                    </div>
               </footer>
          </div>
     </>
}
export default Table;