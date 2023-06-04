import React from "react";
import Table from "react-bootstrap/Table";
const handle=()=>{

}

const ProjectTable = () => {
  return (
    <>
      <table style={{ width: "100%" }}>
        <thead style={{ background: "lightblue" }}>
          <th style={{ padding: "20px" }}>Project Name</th>
          <th>Reason</th>
          <th>Type</th>
          <th>Division</th>
          <th>Category</th>
          <th>Priority</th>
          <th>Dept.</th>
          <th>Location</th>
          <th>Status</th>
          <th></th>
        </thead>
        <tbody>
            {[1,2,3,4,5,6,7,8,9,10].map((el)=>{
                return(
                    <tr style={{ borderBottom: "1px solid gray" }}>
                    <td style={{ padding: "18px" }}>Project Name</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
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
