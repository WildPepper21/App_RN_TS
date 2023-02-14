import React, {useState} from "react";

import AuthContent from "../components/auth/AuthContent";
import {createUser} from "../util/auth";
import {LoadingOverlay} from "../components/ui";

interface ISignUpScreen {
}

const SignUpScreen: React.FC<ISignUpScreen> = () => {
    // State
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    // Functions
    const signUpHandler = async ({email, password}: { email: string, password: string }) => {
        setIsAuthenticating(true);
        await createUser(email, password);
        setIsAuthenticating(false);
    }

    // Render
    if (isAuthenticating)
        return <LoadingOverlay message="Creating user..."/>

    return <AuthContent isLogin={false} onAuthenticate={signUpHandler}/>;
}

export default SignUpScreen;
