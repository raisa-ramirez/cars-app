"use client"

import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const NavBar = () => {
  const signIn = () => {
    alert("We're working on it...")
  }

  return <header className='w-full absolute z-10 padding-top'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center padding-x bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>

      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
        handleClick={signIn}
      />
    </nav>
  </header>
};

export default NavBar;