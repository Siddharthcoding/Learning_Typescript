import { createContext, useState } from "react"

export type AuthUser = {
    name: string,
    email: string,
}

type UserContextType = {
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>> // setUser is a function that takes a value of type AuthUser or null and returns void
}

type UserContextProviderProps = {
    children: React.ReactNode;
}

export const UserContext = createContext({} as UserContextType) // default value of the context is an empty object of type UserContextType, so we use type assertion

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null); // user can be AuthUser or null, so we use union type

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}