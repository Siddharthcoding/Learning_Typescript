// typing an literal prop

type GreetProps = {
    name: string,
    messageCount?: number,  // optional prop
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props; // default value for optional prop
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn ? `Welcome ${props.name}, you have ${props.messageCount} unread messages` 
                    : `Welcome Guest`
                }
            </h2>
        </div>
    )
}