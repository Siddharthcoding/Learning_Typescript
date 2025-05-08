import { Login } from "./Login";
import type { ProfileProps } from "./Profile";

type PrivateProps = {
    isLoggedIn: boolean,
    component: React.ComponentType<ProfileProps>   // This is a type for a component that takes ProfileProps as props
}

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {  // This is a functional component that takes isLoggedIn and component as props
    if(isLoggedIn) {
        return <Component name = 'Siddharth' />
    } else {
        return <Login />
    }
}