import React from "react";

class First extends React.Component{
    render(){
        return(
            <>
                <form>
                    <label>First Name</label>
                    <input type="text" name="fname" placeholder="Enter Your first Name"></input><br></br>

                    <label>Last Name</label>
                    <input type="text" name="lname" placeholder="Enter Your last Name"></input><br></br>

                    <label>Date Of Birth</label>
                    <input type="date" name="dob"></input><br></br>

                    <label>Mobile Number</label>
                    <input type="number" name="mobile" placeholder="Enter Mobile No"></input><br></br>

                    <label>Email Id</label>
                    <input type="email" name="email" placeholder="Enter Email"></input><br></br>

                    <label>Address</label>
                    <textarea name="message" placeholder="Vill,Post,Police,Dist.,State,Pincode"></textarea><br></br>

                    <label>Admission</label>
                    <input type="text" name="admission" placeholder="Admission"></input><br></br>

                    <label>Class</label>
                    <input type="text" name="Class" placeholder="Class"></input><br></br>

                    <label>Section</label>
                    <input type="text" name="Section" placeholder="Section"></input><br></br>

                    <label>CLC</label>
                    <input type="text" name="CLC" placeholder="CLC"></input><br></br>

                    <input type="submit" name="ok" value={'Submit'}></input>


                </form>
            </>
        )
    }
}


export default First;
