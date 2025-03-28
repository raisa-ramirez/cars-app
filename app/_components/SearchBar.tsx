"use client"
import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"
import SearchButton from "./SearchButton"
import Image from "next/image"
import { useRouter } from "next/navigation"

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')
    const router = useRouter()

    const handleSearchCar = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(manufacturer==='' || model ===''){
            return alert('Please fill in the search bar')
        }

        updateSearchParams(
            model.toLocaleLowerCase(), 
            manufacturer.toLowerCase()
        )
    }

    const updateSearchParams = (model:string, manufacturer:string)=> {
        const searchParams = new URLSearchParams(window.location.search)
        model?searchParams.set('model', model):searchParams.delete('model')
        manufacturer?searchParams.set('make', manufacturer):searchParams.delete('make')
        
        const newPathName = `${window.location.pathname}?${searchParams.toString()}#discover`
        router.push(newPathName)
    }

    return <form onSubmit={handleSearchCar} className="searchbar">
        <div className="searchbar__item">
            <SearchManufacturer 
                manufacturer={manufacturer} 
                setManufacturer={setManufacturer}
            />
            <SearchButton 
            type="submit" 
            manufacturer={manufacturer} 
            otherClasses="sm:hidden"
            searchCar={(e:any) => handleSearchCar(e)}/>
        </div>   
        <div className="searchbar__item">
            <Image 
            src="/model-icon.png"
            width={25}
            height={25}
            className="absolute w-[20px] h-[20px] margin-left"
            alt="car model"
            />
            <input 
            type="text"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)} 
            className="searchbar__input" />
            <SearchButton 
            type="submit" 
            manufacturer={manufacturer}
            otherClasses="sm:hidden"
            searchCar={(e:any) => handleSearchCar(e)}/>
        </div>
        <SearchButton 
            type="submit" 
            manufacturer={manufacturer}
            otherClasses="max-sm:hidden"
            searchCar={(e:any) => handleSearchCar(e)}/>
    </form>
}

export default SearchBar;