

export default function Header({query, onChange}){
    return(
        <header className="header row">
            <h1 className="main-header" lang="de">Hola, TYC 👋</h1>
            <div className="search-bar">
                <input type="text" className="input-field" placeholder="search..." value={query} onChange={onChange}/>
            </div>
        </header>
    )
    
}