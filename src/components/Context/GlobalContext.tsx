import React, { createContext, useState, ReactNode } from "react";

//env createContext
interface EnvContextType {
/* 현재 App이 실행중인 환경 */
env: { env : string;} | null;
setEnv: React.Dispatch<React.SetStateAction<{ env:string; } | null > >;
}

const defaultEnvState : EnvContextType = {
env: null,
setEnv : () => {},
};

export const EnvContext = createContext(defaultEnvState);

//Auth createContext
interface AuthContextType{
/* 사용자 권한체크 */
isAuthenticated: boolean;
setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultAuthState : AuthContextType = {
isAuthenticated: false,
setIsAuthenticated : () => {}
};

export const AuthContext = createContext(defaultAuthState);

//SignUp Modal createContext
interface SignUpModalContextType {
/* 현재 App이 실행중인 환경 */
isOpen: boolean;
setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultSignUpModalState : SignUpModalContextType = {
isOpen: false,
setIsOpen : () => {},
};

export const SignUpModalContext = createContext(defaultSignUpModalState);

//Context를 묶어서 제공하는 Provider 컴포넌트
interface GlobalContextProviderProps {
children: ReactNode
}

export const GlobalContextProvider = ( { children } : GlobalContextProviderProps ) => {
const [ env, setEnv] = useState<{env:string} | null>(null);
const [ isAuthenticated, setIsAuthenticated] = useState(false);
const [ isOpen, setIsOpen] = useState(false);

    return (
            <EnvContext.Provider value = {{ env, setEnv }}>
                <AuthContext.Provider value = {{ isAuthenticated, setIsAuthenticated }}>
                    <SignUpModalContext.Provider value = {{ isOpen, setIsOpen }}>
                        {children}
                    </SignUpModalContext.Provider>
                </AuthContext.Provider>
            </EnvContext.Provider>
        );
};