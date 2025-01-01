import Navbar from "./Sidebar"
import Main from './MainContent';
import { initialCustomers , totalCustomers, filterCustomers} from "./Data";
import { useState } from "react";
export default function Dashboard(){

    const [customers, setCustomers] = useState(initialCustomers);
    const [query, setQuery] = useState('');
    let activeCustomers = totalCustomers.filter( c => c.active);
    const results = filterCustomers(customers, query);



    function handleTextChange(e){
        setQuery(e.target.value);
        console.log(query)
    }
    


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
            customers={results}
            onLocationClick={handleSortByLocation}
            onNameClick={handleSortByName}
            setCustomers={setCustomers}
            query={query}
            onChange={handleTextChange}
           
         />
        </>
       
    )
}