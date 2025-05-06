import { useState } from "react";

type AuthUser = {
    name: string,
    email: string,
}

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null); // user can be AuthUser or null, so we use union type
    // const [user, setUser] = useState<AuthUser>({} as AuthUser); // empty object of type AuthUser, so we use type assertion
    const handleLogin = () => {
        setUser({
            name: 'Siddharth',
            email: 'abc@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null);
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
            {/* <div>User name is {user.name}</div>
            <div>User email is {user.email}</div> */}
        </div>
    )
}