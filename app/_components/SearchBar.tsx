"use client"
import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')

    const handleSearchCar = () => {
        console.log('hello')
    }

    return <form onSubmit={handleSearchCar} className="searchBar">
        <div className="searchbar__item">
            <SearchManufacturer 
                manufacturer={manufacturer} 
                setManufacturer={setManufacturer}
            />
        </div>        
    </form>
}

export default SearchBar;