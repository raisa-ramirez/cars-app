"use client"

import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
    const handleExplore = () => {
        alert("We're working on it...")
    }

    return <div className="hero">
        <div className="flex-1 pt-36 padding-x padding-y">
            <h1 className="hero__title">Find, book, rent a car quick and super easy!</h1>
            <p className="hero__subtitle">Streamline your car rental experience with our effortless booking process.</p>
            <CustomButton
                title="Explore Cars"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleExplore}
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero" fill className="object-contain" />
            </div>
            <div className="hero__image-overlay" />
        </div>
    </div>
}

export default Hero;