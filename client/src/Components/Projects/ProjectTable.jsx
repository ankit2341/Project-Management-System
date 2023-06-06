import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectTable = ({data}) => {
  const [status,setStatus]=useState("");
  const navigate=useNavigate();

  const handleStatus=(statusvalue,id)=>{
    const payload = {
      Status: `${statusvalue}`
    };

    fetch(`${process.env.REACT_APP_API}projects/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.Message == "Error in request body") {
          alert("Server error");
        } else if (res.Message == "Project updated successfully") {
          alert("Status updated successfully");
          window.location.reload(false);
        } else {
          alert("Server error");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Network error")
      });
  }

  return (
    <>
      <table style={{ width: "100%" }} className="projects_tableform">
        <thead style={{ background: "lightblue" }}>
          <tr>
          <th style={{ padding: "20px" }}>Project Name</th>
          <th>Reason</th>
          <th>Type</th>
          <th>Category</th>
          <th>Priority</th>
          <th>Dept.</th>
          <th>Location</th>
          <th>Status</th>
          <th></th>
          </tr>
        </thead>
        <tbody>
            {data.map((el)=>{
                return(
                    <tr key={el._id} style={{ borderBottom: "1px solid gray" }}>
                    <td style={{ padding: "18px" }}>{el.Projectname}</td>
                    <td>{el.Reason}</td>
                    <td>{el.Type}</td>
                    <td>{el.Category}</td>
                    <td>{el.Priority}</td>
                    <td>{el.Department}</td>
                    <td>{el.Location}</td>
                    <td>{el.Status}</td>
                    <td style={{justifyContent:"center",display:"flex",paddingTop:"18px",paddingBottom:"18px"}}>
                      <button
                        style={{
                          background: "blue",
                          color: "white",
                          borderRadius: "15px",
                          border: "none",
                          height: "30px",
                          marginLeft:"0px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                        onClick={()=>{handleStatus("Running",el._id)}}
                      >
                        Start
                      </button>
                      <button
                        style={{
                          borderRadius: "15px",
                          border: "1px solid blue",
                          height: "30px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                          marginLeft:"10px"
                        }}
                        onClick={()=>{handleStatus("Closed",el._id)}}
                      >
                        Close
                      </button>
                      <button
                        style={{
                          borderRadius: "15px",
                          border: "1px solid blue",
                          marginLeft:"10px",
                          height: "30px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                        onClick={()=>{handleStatus("Cancelled",el._id)}}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                )
            })} 
        
        </tbody>
      </table>
    </>
  );
};

export default ProjectTable;
