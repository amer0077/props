import React from 'react';
import "../App.css";

export default  function Profile (props) {
    function handelClick (e){
        alert ('name of Profile user is ${props.name } ')
    } ;
    return (
        <div>
            <p>
                the full name is <spam>  {props.name }     </spam>  
                and the bio   <spam> {props.bio}   </spam> 
                and profission is <spam> {props.profission} </spam>
            </p>
           
           
           {props.name}
            <p>

           
            <img src="https://media-cdn.tripadvisor.com/media/photo-c/2560x500/10/47/15/c9/l-oued-haidra-c-est-la.jpg" style={{width: 200, height: 200}}/> {props.children}            
        </p>
        <button onClick ={handelClick}> alerte the name       </button>
         </div>
    )
}


