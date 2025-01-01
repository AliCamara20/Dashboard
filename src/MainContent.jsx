import Header from "./Header"
import Info from "./InfoSection"
import SortableCustomerTable from "./CustomerSection"
import Loader from "./Loader"
import { useState } from "react"

export default function Main({numOfCustomers, numOfMembers, numOfActive, customers, onLocationClick, onNameClick, setCustomers, query, onChange}){
    
    return(
 
        <main className="main-content">
            <div className="container">
                <Header query={query} onChange={onChange} />
                <Info numOfCustomers={numOfCustomers} numOfMembers={numOfMembers} numOfActive={numOfActive}/>
                <SortableCustomerTable customers={customers} onLocationClick={onLocationClick} onNameClick={onNameClick} setCustomers={setCustomers}  />
                   
            </div>  
        </main>
    )
    

}
