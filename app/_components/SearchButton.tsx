import Image from "next/image";
import { SearchButtonProps } from "../_interfaces";

const SearchButton = ({type, manufacturer, searchCar, otherClasses} : SearchButtonProps) => {
    return <button
        type={type ?? "button"}
        onClick={() => searchCar}
        className={`-ml-3 z-10 ${otherClasses}`}
    >
        <Image 
        src="/magnifying-glass.svg"
        width={40}
        height={40}
        alt="search"
        className="object-contain cursor-pointer"
        />
    </button>
}

export default SearchButton;