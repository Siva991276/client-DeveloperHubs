import React from "react";
import { useNavigate,Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
 import Header from "./Header";
function Home(){
    let navigate = useNavigate();
    const[data,setData] = useState([]);


useEffect(()=>{
    axios.get("http://localhost:4005/alldevelopers",{
        headers:{
            "token":localStorage.getItem('token')
        }

    })
    .then(response =>setData(response.data))
    .catch(error=>console.log(error.response.data))
},[])



useEffect(()=>{
    if(localStorage.getItem('token') === null){
        navigate("/")
    }
})

console.log(data);
    return(
        <div className="container">
        <Header />
        <div className="profiles">
            {data.length >=1 ?
                data.map(alldevelopers=>
                    <div className="row">
                    <div className="col-md-3">

                    </div>
                 <div key={alldevelopers._id} className="profile-container card mb-5 col-md-6 text-center p-3 "> 
                <div >
                 <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" className="w-50 "/>
                 </div>
                 <h1 className="text-black"style={{fontSize: "30px"}}>{alldevelopers.fullname}</h1>
                 <p className="text-primary" style={{fontSize: "22px"}}>{alldevelopers.email}</p>
                 <p className="text-primary"style={{fontSize: "18px"}}>India</p>
                 <ul className="skills">
                        {alldevelopers.skills.split(",").map(skills=>
                           <li className="text-danger skills21"  >
                                {skills}
                           </li> 
                            )}
                 </ul>
                 <Link to={`/indprofile/${alldevelopers.fullname}/${alldevelopers.email}/${alldevelopers.skills}/${alldevelopers._id}`}>
                 <button className="btn btn-success" type="button">view profile</button>
                 </Link>

                 </div> 
                 </div> 
                    )
        
        
        :null}

        </div>
    </div>
    )
}
export default Home;