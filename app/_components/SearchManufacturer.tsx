import { Fragment, useState } from "react"
import { Combobox, Transition } from "@headlessui/react"
import { manufacturers } from "../_constants"
import Image from "next/image"
import { SearchManufacturerProps } from "../_interfaces"

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
    const [query, setQuery] = useState('')

    const data =
        query === ''
            ? manufacturers
            : manufacturers.filter((item) => 
                item.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            )


    return (
        <div className="search-manufacturer">        
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className='relative w-full'>
                    <Combobox.Button className='absolute top-[14px]'>
                        <Image
                        src='/car-logo.svg'
                        width={20}
                        height={20}
                        className='margin-left'
                        alt='car logo'
                        />
                    </Combobox.Button>

                    <Combobox.Input 
                        className='search-manufacturer__input'
                        placeholder="Volskwagen..."
                        displayValue={(manufacturer:string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}/>

                    <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                        {   
                            data.map((item) =>
                                <Combobox.Option 
                                key={item} 
                                value={item}                   
                                className={({ active }) =>
                                `relative search-manufacturer__option ${
                                active ? "bg-primary-blue text-white" : "text-gray-900"
                                }`
                                }>
                                {({selected, active}) => (
                                    <>
                                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                        {item}
                                        </span>

                                        {/* Show an active blue background color if the option is selected */}
                                        {selected ? (
                                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                                        ></span>
                                        ) : null}
                                    </>
                                )}
                                </Combobox.Option>    
                            )                            
                        }                
                        </Combobox.Options>
                    </Transition>                    
               </div> 
            </Combobox>
        </div>
    )
}

export default SearchManufacturer;