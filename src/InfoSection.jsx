import customerIcon from './assets/Customers.svg'
import memberIcon from './assets/member.svg'
import activeIcon from './assets/active.svg'
export default function  Info({numOfCustomers, numOfMembers, numOfActive}){
    return(
        <section className="info-section">
            <div className="mini-container">
                <InfoColumn title={'Total Customers'} number={numOfCustomers} icon={customerIcon}/>
                <InfoColumn title={'Members'} number={numOfMembers} icon={memberIcon}/>
                <InfoColumn title={'Active Now'} number={numOfActive} icon={activeIcon} />
            </div>
            
        </section>
    )
   
    
}


function InfoColumn({title, number, icon}){
    return(
        <div className="column">
            <div className="icon">
               <img src={icon} alt="" className = 'iconImg' /> 
            </div>
            <div className="info">
                <p className="title">{title}</p>
                <h2 className="number">{number}</h2>
            </div>
        </div>
    )
    
    
}