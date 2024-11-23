import Header from "./Header"
import Info from "./InfoSection"
import SortableCustomerTable from "./CustomerSection"

export default function Main({numOfCustomers, numOfMembers, numOfActive, customers, onLocationClick, onNameClick, setCustomers}){
    return(
        <main className="main-content">
            <div className="container">
                <Header />
                <Info numOfCustomers={numOfCustomers} numOfMembers={numOfMembers} numOfActive={numOfActive}/>
                <SortableCustomerTable customers={customers} onLocationClick={onLocationClick} onNameClick={onNameClick} setCustomers={setCustomers}  />
                   
            </div>
        </main>
    )
    

}