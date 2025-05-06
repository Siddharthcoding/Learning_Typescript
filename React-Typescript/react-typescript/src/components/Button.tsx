// clicked button component

type ButtonProps = {
    // handeClick: () => void,  // function prop
    handeClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void, // function prop with event
}

export const Button = (props: ButtonProps) => {
    return <button onClick={(event) => props.handeClick(event, 1)}>Click</button>
}