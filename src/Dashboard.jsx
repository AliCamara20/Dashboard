import Navbar from "./Sidebar"
import Main from './MainContent';
import { initialCustomers } from "./Data";
import { totalCustomers } from "./Data";
import { useState } from "react";
export default function Dashboard(){

    const [customers, setCustomers] = useState(initialCustomers);
    let activeCustomers = totalCustomers.filter( c => c.active);
    


    function handleSortByLocation(){
        
        let newArr = [...customers];
        newArr.sort((a, b) => a.location.localeCompare(b.location));        
        setCustomers(newArr);
    }

    function handleSortByName(){
        let newArr = [...customers];
        newArr.sort((a, b) => a.name.localeCompare(b.name));
        console.log(newArr);
        setCustomers(newArr);
    }

    
    
    return(
        <> 
         <Navbar />
         <Main numOfCustomers={totalCustomers.length} 
            numOfMembers={totalCustomers.length} 
            numOfActive={activeCustomers.length} 
            customers={customers}
            onLocationClick={handleSortByLocation}
            onNameClick={handleSortByName}
            setCustomers={setCustomers}
           
         />
        </>
       
    )
}