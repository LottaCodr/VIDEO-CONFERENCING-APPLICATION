import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'

import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link
        href='/' className='flex items-center gap-1'>
        <Image src='/icons/logo.svg'
          width={32}
          height={32}
          alt='Logo'
          className='max-sm:size-10'
        />
        <p className='text-[26px] font-extrabold text-white max-sm:hidden'> Callr</p>
      </Link>

      <div className='flex-between gap-5'>



        <LoginLink postLoginRedirectURL='/'>Sign in</LoginLink>
        <RegisterLink>Sign up</RegisterLink>
        <LogoutLink postLogoutRedirectURL='/api/auth/login'>Log Out</LogoutLink>

        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar