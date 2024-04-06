import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";

import axios from "axios";

function Test() {
  const navigate = useNavigate();
  const [table, settable] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const Variants = {
    OCCUPIED: "bg-green-500 hover:bg-green-200",
     WITH_CUSTOMERS:"bg-red-500 hover:bg-red-200",
     AVAILABLE:"bg-blue-500 hover:bg-blue-200" };
     

  useEffect(() => {
    const loadPosts = async () => {
      
      const response = await axios.get(
        "https://test.gs-lafondation.com/api/tables"
      );
      settable(response.data);
      
    };

    loadPosts();
  }, []);

  return (
    <div className="App">
      <h3>Search Filter</h3>
      <input
      
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {
        table.filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(searchTitle.toLowerCase())
               
            ) {
              return value;
            }
          })
          .map((i,item) =>
          <div key={item}>  <button  onDoubleClick={()=>navigate(`/command/${i.id}/${i.status}`)}
          className={` px-4 py-4 rounded-full text-black max-w-sm md:max-w-lg ${Variants[i.status]}`}>
           <p> table {i.id}</p>
           <p> {i.status}</p>
            </button></div> )}
      
    </div>
  );
}

export default Test;




