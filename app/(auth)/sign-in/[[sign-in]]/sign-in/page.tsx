import React from 'react'
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

const SignInPage = () => {
    return (

        <main>
            <LoginLink postLoginRedirectURL="/sign-in">Sign in</LoginLink>
        </main>

    )
}

export default SignInPage