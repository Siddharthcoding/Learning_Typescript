// typing an literal prop

type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
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