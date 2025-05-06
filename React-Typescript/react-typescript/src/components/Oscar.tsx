// typing react component children props

type OscarProps = {
    children: React.ReactNode,  // This is a prop that can accept any React node
}

export const Oscar = (props: OscarProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}