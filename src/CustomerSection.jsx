import { useState, useEffect } from 'react'
import arrowDownKey from './assets/arrow-down.svg'
import placeholder from './assets/user.jpg'
import { totalCustomers } from './Data'
import Loader from './Loader'
export default function SortableCustomerTable({customers, onLocationClick, onNameClick, setCustomers}){
    const[loading, setLoading] = useState(false);
    const [index, setIndex]  = useState(0);
    let customer = customers.map( c =>  <tr key={c.id}>
        <td ><img src={c.photo} alt= {c.name} className=""/></td>
        <td>{c.name}</td>
        <td className = 'email'>{c.email}</td>
        <td>{c.location} </td>
    </tr>)



    return(
        <section className="customer-section ">
            <div className="container">
                <Header handleLocationClick={onLocationClick} handleNameClick={onNameClick}/>
                {loading && <Loader />}
                {loading === false && 
                <table className="table">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th className = 'email-head'>Email</th>
                            <th>Location</th>
                        </tr>
                        
                    </thead>
                    <tbody>{customer}</tbody>
                </table> 
                }
                <Pagination 
                    onPageChangeClick={onPageChangeClick}
                    customers={customers}
                    setCustomers={setCustomers}
                    loading={loading}
                    setLoading={setLoading}
                    setIndex={setIndex}
                    index={index}
                    
                />    
                    
            </div>
        </section>
    )
    

    
}

function Header({handleLocationClick, handleNameClick}){
    return(
        <div className="row">
            <h2 className="table-title">All Customers</h2>
            <div className="sort-corner">
                <span className="text">Sort by:  <img src= {arrowDownKey} alt="" className='arrow-downKey' /></span>
                <div className="buttons">
                    <button id="location-btn" onClick={handleLocationClick}>Location</button>
                    <button id="name-btn" onClick={handleNameClick}>Name</button>
                </div>
            </div>
        </div>
    )
    
    
}

function onPageChangeClick(sliceIndex, newEnd , setCustomers){
    let nextSection = [...totalCustomers.slice(sliceIndex, newEnd)]
    console.log(nextSection)
    setCustomers(nextSection);
}


function Pagination({onPageChangeClick , setCustomers, loading, setLoading, index, setIndex}){

    const nextPage = (index, setIndex) => {
        setIndex( index + 1);
        console.log(index);
        switch(index){
            case 0: {onPageChangeClick(10, 20 , setCustomers); break};            
            case 1: {onPageChangeClick(20, 30 , setCustomers); break};   
            case 2: {onPageChangeClick(30, 40 , setCustomers); break};   
                
        }
    }

    const previousPage = (index, setIndex) => {
        setIndex(index - 1);
        switch(index){
            case 3: {onPageChangeClick(20, 30 , setCustomers); break};
            case 2: {onPageChangeClick(10, 20 , setCustomers); break};
            case 1: {onPageChangeClick(0, 10 , setCustomers); break};
        }
    }

    async function fetchData() {
        setLoading(true);
        console.log('fetching...');
        try {
            await getData(loading);
            setLoading(false);

            
        } catch (error) {
            console.log(error);
        }
        finally{
            console.log('fetched'); 
        }
        
    }

   

    
    
    
    function getData(loading){
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                if(loading === false) resolve();
                else reject( new Error('Error feching data...')) 
            }, 3000);
        })
    }

    return(
        <div className="center">
            <section className="pagination">
                <PaginationButton  label={'<'} onPageChangeClick={() =>{ previousPage(index, setIndex); fetchData()}} disabled = {index === 0} />
                <PaginationButton label={'1'} onPageChangeClick={() => {onPageChangeClick(0, 10 , setCustomers); fetchData()}} />
                <PaginationButton label={'2'} onPageChangeClick={() => {onPageChangeClick(10, 20, setCustomers); fetchData()}} />
                <PaginationButton label={'3'} onPageChangeClick={() => {onPageChangeClick(20, 30, setCustomers); fetchData()}}/>
                <PaginationButton label={'4'} onPageChangeClick={() => {onPageChangeClick(30, 40, setCustomers); fetchData()}}/>
                <PaginationButton  label={'>'} onPageChangeClick={() =>{ nextPage(index, setIndex); fetchData()}} disabled = {index === 3} />

                
            </section>
        </div>
        
    )

   
}

function PaginationButton({label, onPageChangeClick, ...props}){
    return <button className='pagination-btn' onClick={onPageChangeClick} {...props}>{label} </button>
}



 