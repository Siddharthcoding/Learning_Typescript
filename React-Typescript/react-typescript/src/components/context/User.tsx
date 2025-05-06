import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const User = () => {
    const userContext = useContext(UserContext) // useContext is a hook that allows you to access the context value
    const handleLogin = () => {
        userContext.setUser({
            name: 'Siddharth',
            email: 'abc@gmail.com'
        }) // setUser is a function that takes a value of type AuthUser or null and returns void
    }

    const handleLogout = () => {
        userContext.setUser(null);
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext.user?.name}</div>
            <div>User email is {userContext.user?.email}</div>
        </div>
    )
}