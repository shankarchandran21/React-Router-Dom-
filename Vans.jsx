import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])
    
    const typeFilter = searchParams.get("type")
    console.log(typeFilter)
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    /**
     * Challenge: filter the list of vans based on the `typeFilter`
     * we created earlier. For now, just enter "simple", "luxury",
     * or "rugged" into the search param in the URL to check your work.
     */



const displayData = typeFilter ?vans.filter(data=>data.type.toLowerCase() === typeFilter.toLowerCase()):vans

const getNewSearchParam =(key, value) =>{
    const sp = new URLSearchParams(searchParams)
    if(value === null){
        sp.delete(key)
    }else{
        sp.set(key, value)
        // sp.set("name","Shankar")//we can set multiple query params
    }
    console.log(sp)
    return `?${sp.toString()}`
}



//using setSearchParams to set query
const handleParams = (key,value)=>{
    setSearchParams((prev)=>{
            if(value === null){
                prev.delete(key)
                console.log(prev)
            }else{
                console.log(prev)

                prev.set(key,value)
            }
            console.log(prev)

            return prev
    })
}


    const vanElements = displayData.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img alt={van.name} src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))
   
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
                <div className="van-list-filter-buttons">
                        <button
                            onClick={()=>setSearchParams({type:"simple"})}
                            className="van-type simple"
                        >
                            Simple
                        </button>
                        <button
                            onClick={()=>setSearchParams({type:"rugged"})}
                            className="van-type rugged"
                        >
                            Rugged
                        </button>
                        <button
                            onClick={()=>setSearchParams({type:"luxury"})}
                            className="van-type luxury"
                        >
                            Luxury
                        </button>
                        {
                            typeFilter&&(
                                <button
                                onClick={()=>setSearchParams({})}
                                className="van-type simple"
                            >
                                Clear Filter
                            </button>
                            )
                        }
                        
                        
                </div>
                <div className="van-list-filter-buttons">
                        <Link
                            to={getNewSearchParam("type","simple")}
                            className="van-type simple"
                        >
                            Simple
                        </Link>
                        <Link
                            to={getNewSearchParam("type","rugged")}
                            className="van-type rugged"
                        >
                            Rugged
                        </Link>
                        <Link
                            to={getNewSearchParam("type","luxury")}
                            className="van-type luxury"
                        >
                            Luxury
                        </Link>
                        {
                            typeFilter&&(
                                <Link
                                to={getNewSearchParam("type",null)}
                                className="van-type simple"
                            >
                                Clear Filter
                            </Link>
                            )
                        }
                        
                        
                </div>
                <div className="van-list-filter-buttons">
                        <button
                            onClick={()=>handleParams("type","simple")}
                            className={`van-type ${typeFilter ==="simple"?"selected":""}`}
                           
                        >
                            Simple
                        </button>
                        <button
                            onClick={()=>handleParams("type","rugged")}
                            className={`van-type ${typeFilter==="rugged"?"selected":""}`}
                        >
                            Rugged
                        </button>
                        <button
                            onClick={()=>handleParams("type","luxury")}
                            className={`van-type ${typeFilter ==="luxury"?"selected":""}`}
                           
                        >
                            Luxury
                        </button>
                     {
                        typeFilter&&(
                            <button
                            onClick={()=>handleParams("type",null)}
                            className="van-type simple"
                        >
                            Clear Filter
                        </button>
                        )
                     }
                        
                        
                </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}