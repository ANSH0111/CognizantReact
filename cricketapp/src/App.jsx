import React from "react";
import ListofPlayers from "./ListofPlayers";
import IndianPlayers from "./IndianPlayers";

let flag = true; // Change this to toggle between components
const App = () => {
    
    if(flag == true){
        return (
            <div>
            <ListofPlayers />
            </div>
        );
    }
    else{
        return (
            <div>
            <IndianPlayers />
            </div>
        );
    }
}

export default App;
