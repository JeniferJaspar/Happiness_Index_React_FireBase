import React,{ useState } from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import RecordData from "./RecordData";

 
const Survey = () => {

    var total;
    var happinessIndex;
    var per;
    const [message,setMessage] = useState("");
    const [answer1,setAnswer1] = useState("");
    const [answer2,setAnswer2] = useState("");
    const [answer3,setAnswer3] = useState("");
    const [answer4,setAnswer4] = useState("");
    const [answer5,setAnswer5] = useState("");
    const [answer6,setAnswer6] = useState("");
    const [answer7,setAnswer7] = useState("");
    const [answer8,setAnswer8] = useState("");
    const [answer9,setAnswer9] = useState("");
    const [answer10,setAnswer10] = useState("");
    const{logOut,user} =useUserAuth();
    const navigate = useNavigate();
    const [percent, setPercent] =  useState(""); // take tot in a state
    const [happinessindex, setHappinessIndex] =  useState(""); // take tot in a state
   
    const handleLogout = async () => {
    try {
        await logOut();
         navigate("/");

         } catch (error) {
         console.log(error.message);
         }
         
         };
      
       const handleClick =async () => {
        
   
     
// setTot(Number(num1) + Number(num2)); // set number to the state
  
  total= Number(answer1) + Number(answer2) +Number(answer3)+Number(answer4)+Number(answer5)+Number(answer6)+Number(answer7)+Number(answer8)+Number(answer9) +Number(answer10) ;
  //setTot(total);
 
  per = Number(total/60)*Number(100);
 
  setPercent(per);

  
 
  if(per >= 80)
  {
    happinessIndex = "Very Happy"
  }
  else if(per >=60 && per <80 )
  {
    happinessIndex = "Somewhat Happy"
  }
  else if(per >=40 && per <60)
  {
    happinessIndex = "Moderately Neither Happy Nor Unhappy"
  }
  else if(per >=20 && per <40)
  {
    happinessIndex = "Somewhat Unhappy"
  }
 
  else
  {
    happinessIndex = "Very Unhappy"
  }
 
  setHappinessIndex(happinessIndex);

  const newRecord ={
    happinessIndex,
    per
  } 

  console.log(newRecord);

    try{    
    
    await RecordData.addRecord(newRecord);
    console.log('added')
    setMessage({error :false,msg: "New entry added"});
  }
  catch(err) {setMessage({error:true,msg:err.message});
}
  
};
    return (
               
      <div  class="container">
        <p>Evaluate the following statements:</p>
       <div class="form-group">
       <table class="table table-striped" >
       <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Strongly Disagree</td>
        <td>Moderately Disagree</td>
        <td>Moderately Disagree</td>
        <td>Slightly Agree</td>
        <td>Moderately Agree</td>
        <td>Strongly Disagree</td>
        </tr>
        <tr>
            <td align="left" colspan="14">I don't feel particularly pleased with the way I am</td>
                <td>
               <input class="form-check-input" type="radio" name="answer1" id="inlineRadio1" value="1" onChange={(event) =>
                {
                    setAnswer1(event.target.value);      
                }}/>1
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer1" id="inlineRadio1" value="2" onChange={(event) =>
                {
                    setAnswer1(event.target.value);      
                }}></input> 2
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer1" id="inlineRadio1" value="3" onChange={(event) =>
                {
                    setAnswer1(event.target.value);      
                }}></input> 3
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer1" id="inlineRadio1" value="4" onChange={(event) =>
                {
                    setAnswer1(event.target.value);      
                }}></input> 4
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer1" id="inlineRadio1" value="5" onChange={(event) =>
                {
                    setAnswer1(event.target.value);      
                }}></input> 5
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer1" id="inlineRadio1" value="6" onChange={(event) =>
                {
                    setAnswer1(event.target.value);      
                }}></input> 6
                </td>
            </tr>
            <tr>
            <td align="left" colspan="14">I am intensely interested in other people</td>
                <td>
               <input class="form-check-input" type="radio" name="answer2" id="inlineRadio1" value="1" onChange={(event) =>
                {
                    setAnswer2(event.target.value);      
                }}/>1
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer2" id="inlineRadio1" value="2" onChange={(event) =>
                {
                    setAnswer2(event.target.value);      
                }}></input> 2
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer2" id="inlineRadio1" value="3" onChange={(event) =>
                {
                    setAnswer2(event.target.value);      
                }}></input> 3
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer2" id="inlineRadio1" value="4" onChange={(event) =>
                {
                    setAnswer2(event.target.value);      
                }}></input> 4
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer2" id="inlineRadio1" value="5" onChange={(event) =>
                {
                    setAnswer2(event.target.value);      
                }}></input> 5
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer2" id="inlineRadio1" value="6" onChange={(event) =>
                {
                    setAnswer2(event.target.value);      
                }}></input> 6
                </td>
            </tr>
            <tr>
            <td align="left" colspan="14">I feel that life is very rewarding</td>
                <td>
               <input class="form-check-input" type="radio" name="answer3" id="inlineRadio1" value="1" onChange={(event) =>
                {
                    setAnswer2(event.target.value);      
                }}/>1
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer3" id="inlineRadio1" value="2" onChange={(event) =>
                {
                    setAnswer3(event.target.value);      
                }}></input> 2
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer3" id="inlineRadio1" value="3" onChange={(event) =>
                {
                    setAnswer3(event.target.value);      
                }}></input> 3
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer3" id="inlineRadio1" value="4" onChange={(event) =>
                {
                    setAnswer3(event.target.value);      
                }}></input> 4
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer3" id="inlineRadio1" value="5" onChange={(event) =>
                {
                    setAnswer3(event.target.value);      
                }}></input> 5
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer3" id="inlineRadio1" value="6" onChange={(event) =>
                {
                    setAnswer3(event.target.value);      
                }}></input> 6
                </td>
            </tr>
            <tr>
            <td align="left" colspan="14">I have very warm feelings almost towards everyone</td>
                <td>
               <input class="form-check-input" type="radio" name="answer4" id="inlineRadio1" value="1" onChange={(event) =>
                {
                    setAnswer2(event.target.value);      
                }}/>1
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer4" id="inlineRadio1" value="2" onChange={(event) =>
                {
                    setAnswer4(event.target.value);      
                }}></input> 2
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer4" id="inlineRadio1" value="3" onChange={(event) =>
                {
                    setAnswer4(event.target.value);      
                }}></input> 3
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer4" id="inlineRadio1" value="4" onChange={(event) =>
                {
                    setAnswer4(event.target.value);      
                }}></input> 4
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer4" id="inlineRadio1" value="5" onChange={(event) =>
                {
                    setAnswer4(event.target.value);      
                }}></input> 5
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer4" id="inlineRadio1" value="6" onChange={(event) =>
                {
                    setAnswer4(event.target.value);      
                }}></input> 6
                </td>
            </tr>
            <tr>
            <td align="left" colspan="14">I rarely wake up feeling rested</td>
                <td>
               <input class="form-check-input" type="radio" name="answer5" id="inlineRadio1" value="1" onChange={(event) =>
                {
                    setAnswer5(event.target.value);      
                }}/>1
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer5" id="inlineRadio1" value="2" onChange={(event) =>
                {
                    setAnswer5(event.target.value);      
                }}></input> 2
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer5" id="inlineRadio1" value="3" onChange={(event) =>
                {
                    setAnswer5(event.target.value);      
                }}></input> 3
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer5" id="inlineRadio1" value="4" onChange={(event) =>
                {
                    setAnswer5(event.target.value);      
                }}></input> 4
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer5" id="inlineRadio1" value="5" onChange={(event) =>
                {
                    setAnswer5(event.target.value);      
                }}></input> 5
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer5" id="inlineRadio1" value="6" onChange={(event) =>
                {
                    setAnswer5(event.target.value);      
                }}></input> 6
                </td>
            </tr>
            <tr>
            <td align="left" colspan="14">I am not particularly optimistic about future</td>
                <td>
               <input class="form-check-input" type="radio" name="answer6" id="inlineRadio1" value="1" onChange={(event) =>
                {
                    setAnswer6(event.target.value);      
                }}/>1
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer6" id="inlineRadio1" value="2" onChange={(event) =>
                {
                    setAnswer6(event.target.value);      
                }}></input> 2
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer6" id="inlineRadio1" value="3" onChange={(event) =>
                {
                    setAnswer6(event.target.value);      
                }}></input> 3
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer6" id="inlineRadio1" value="4" onChange={(event) =>
                {
                    setAnswer6(event.target.value);      
                }}></input> 4
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer6" id="inlineRadio1" value="5" onChange={(event) =>
                {
                    setAnswer6(event.target.value);      
                }}></input> 5
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer6" id="inlineRadio1" value="6" onChange={(event) =>
                {
                    setAnswer6(event.target.value);      
                }}></input> 6
                </td>
            </tr>
            <tr>
            <td align="left" colspan="14">I find most things amazing</td>
                <td>
               <input class="form-check-input" type="radio" name="answer7" id="inlineRadio1" value="1" onChange={(event) =>
                {
                    setAnswer7(event.target.value);      
                }}/>1
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer7" id="inlineRadio1" value="2" onChange={(event) =>
                {
                    setAnswer7(event.target.value);      
                }}></input> 2
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer7" id="inlineRadio1" value="3" onChange={(event) =>
                {
                    setAnswer7(event.target.value);      
                }}></input> 3
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer7" id="inlineRadio1" value="4" onChange={(event) =>
                {
                    setAnswer7(event.target.value);      
                }}></input> 4
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer7" id="inlineRadio1" value="5" onChange={(event) =>
                {
                    setAnswer7(event.target.value);      
                }}></input> 5
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer7" id="inlineRadio1" value="6" onChange={(event) =>
                {
                    setAnswer7(event.target.value);      
                }}></input> 6
                </td>
            </tr>
            <tr>
            <td align="left" colspan="14">I am always committed and involved</td>
                <td>
               <input class="form-check-input" type="radio" name="answer8" id="inlineRadio1" value="1" onChange={(event) =>
                {
                    setAnswer8(event.target.value);      
                }}/>1
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer8" id="inlineRadio1" value="2" onChange={(event) =>
                {
                    setAnswer8(event.target.value);      
                }}></input> 2
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer8" id="inlineRadio1" value="3" onChange={(event) =>
                {
                    setAnswer8(event.target.value);      
                }}></input> 3
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer8" id="inlineRadio1" value="4" onChange={(event) =>
                {
                    setAnswer8(event.target.value);      
                }}></input> 4
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer8" id="inlineRadio1" value="5" onChange={(event) =>
                {
                    setAnswer8(event.target.value);      
                }}></input> 5
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer8" id="inlineRadio1" value="6" onChange={(event) =>
                {
                    setAnswer8(event.target.value);      
                }}></input> 6
                </td>
            </tr>
            <tr>
            <td align="left" colspan="14">Life is good</td>
                <td>
               <input class="form-check-input" type="radio" name="answer9" id="inlineRadio1" value="1" onChange={(event) =>
                {
                    setAnswer2(event.target.value);      
                }}/>1
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer9" id="inlineRadio1" value="2" onChange={(event) =>
                {
                    setAnswer9(event.target.value);      
                }}></input> 2
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer9" id="inlineRadio1" value="3" onChange={(event) =>
                {
                    setAnswer9(event.target.value);      
                }}></input> 3
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer9" id="inlineRadio1" value="4" onChange={(event) =>
                {
                    setAnswer9(event.target.value);      
                }}></input> 4
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer9" id="inlineRadio1" value="5" onChange={(event) =>
                {
                    setAnswer9(event.target.value);      
                }}></input> 5
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer9" id="inlineRadio1" value="6" onChange={(event) =>
                {
                    setAnswer9(event.target.value);      
                }}></input> 6
                </td>
            </tr>
            <tr>
            <td align="left" colspan="14">I don't think world is a good place</td>
                <td>
               <input class="form-check-input" type="radio" name="answer10" id="inlineRadio1" value="1" onChange={(event) =>
                {
                    setAnswer10(event.target.value);      
                }}/>1
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer10" id="inlineRadio1" value="2" onChange={(event) =>
                {
                    setAnswer10(event.target.value);      
                }}></input> 2
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer10" id="inlineRadio1" value="3" onChange={(event) =>
                {
                    setAnswer10(event.target.value);      
                }}></input> 3
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer10" id="inlineRadio1" value="4" onChange={(event) =>
                {
                    setAnswer10(event.target.value);      
                }}></input> 4
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer10" id="inlineRadio1" value="5" onChange={(event) =>
                {
                    setAnswer10(event.target.value);      
                }}></input> 5
                </td>
                <td>
        <input class="form-check-input" type="radio" name="answer10" id="inlineRadio1" value="6" onChange={(event) =>
                {
                    setAnswer10(event.target.value);      
                }}></input> 6
                </td>
            </tr>
            </tbody>
        </table>
        </div>  
              
         <div class="form-group">
         <label>Percent</label>
         <input type="text"   class="form-control" value={ percent } onChange={(e) => setPercent(e.target.value )}></input>  
        </div>
        <div class="form-group">
        <label>Your Happiness Index :</label>
        <input type="text"   class="form-control" value={ happinessindex } onChange={(e) => setHappinessIndex(e.target.value )}></input>  
        </div>
        <table>
            <tr>
            <td><button onClick={handleClick}  class="btn btn-warning mt-4">Calculate Happiness Index</button></td>
            <td></td>
            <td></td>
            <td><button onClick={handleLogout}  class="btn btn-warning mt-4">Log Out</button></td>
        </tr>
        </table>
      </div>
      
    );
            
};

export default Survey;
