import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title : string;
    btnType?: "button" | "submit";
    textStyles?: string;
    containerStyles: string;
    rightIcon?: string;
    isDisabled?: boolean; 
    handleClick?: MouseEventHandler<HTMLElement>
}

export interface OptionsProps {
    title: string;
    value: string;
}

export interface CustomFilterPros {
    title:string;
    options: OptionsProps[];
}

export interface SearchManufacturerProps {
    manufacturer : string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}

export interface CarDetailsProps {
    isOpen: boolean;
    closeModal : () => void;
    car: CarProps
}

export interface SearchButtonProps {
    type?: "button" | "submit";
    manufacturer: string;
    searchCar: (e:React.FormEventHandler<HTMLFormElement>) => void;
    otherClasses: string;
}

export interface FilterProps {
    manufacturer: string;
    year: number;
    fuel: string;
    model: string;
}

export interface HomeProps {
    searchParams: FilterProps;
}