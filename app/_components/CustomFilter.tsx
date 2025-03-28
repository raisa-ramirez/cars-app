"use client"
import { CustomFilterPros } from "../_interfaces";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({title, options} : CustomFilterPros) => {
    const [selected, setSelected] = useState(options[0]);
    const router = useRouter();

    const handleUpdateSearchParams = (e: {title:string, value:string}) => {
        const newPathName = updateSearchParams(title==='fuel'?'fuel_type':title, e.value.toLocaleLowerCase())
        router.push(newPathName) 
    }

    return <div className="w-fit">
        <Listbox value={selected} onChange={(e) => {
            handleUpdateSearchParams(e)
            setSelected(e)
            }}>
            <div className="relative w-fit z-10">
                <Listbox.Button className="custom-filter__btn">
                    <span className="block truncate">{selected.title}</span>
                    <Image 
                        src="/chevron-up-down.svg"
                        width={20}
                        height={20}
                        className="margin-left object-contain"
                        alt="chevron up down"
                    />
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="custom-filter__options">
                    {options.map((item) => (
                        <Listbox.Option 
                        key={item.title} 
                        value={item}
                        className={({ active }) =>
                            `relative cursor-default select-none py-2 px-4 ${
                            active ? "bg-primary-blue text-white" : "text-gray-900"
                            }`
                        }>
                            {({selected}) => (
                                <span 
                                className={`block truncate ${selected?'font-medium':'font-normal'}`}>
                                    {item.title}
                                </span>
                            )}
                        </Listbox.Option>
                    ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    </div>
} 

export default CustomFilter;