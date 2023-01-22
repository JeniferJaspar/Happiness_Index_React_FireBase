import React ,{useEffect, useState} from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import RecordData from "./RecordData";

const Home = () => {
  const [records,setRecords] = useState([]);
  useEffect(() => {
    getRecords();
  }, []);

  const getRecords =async() => {
    const data = await RecordData.getAllRecords();
    console.log(data.docs);
    setRecords(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  };
  const { logOut, user } = useUserAuth();

  const navigate = useNavigate();

 
  const handleSurvey = async () => {
    try {
         
           navigate("/survey");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="welcome-text">
          Hello !!! <br />
        {user && user.email}
       </div>
             
     <div className="d-grid gap-10">
      <Button variant="primary" onClick={handleSurvey}>
          Take the Survey
          </Button>
      </div>
      <label>Happiness Index History</label>
      <table class="table table-striped" >
      <tbody>
        <tr>       
          <td>S.No</td>
          <td>Percentage</td>
          <td>Happiness</td>
          </tr>
        {records.map((doc,index) => {
          
          return(
            <tr key={doc.id}>
             <td>{index +1} </td>
             <td>{doc.per} </td>
             <td>{doc.happinessIndex} </td>
             </tr>
         
        );
      })}
          </tbody>
       
       
       
      </table>
    </>  
  );

  };
export default Home;
