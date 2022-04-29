import { Login } from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
    IsLoggedIn: boolean
    Component: React.ComponentType<ProfileProps>
    // Since the Component can be any type
}

export const Private = ({ IsLoggedIn, Component }: PrivateProps) => {
    if(IsLoggedIn)
    {
        return (<Component name='Vishu'/>)
    }
    else {
        return (<Login />)
    }
}