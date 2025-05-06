// typeScript React component with props and event handling

type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void, // function prop
}

export const Input = (props: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
        
    }

    return <input type="text" value={props.value} onChange={handleInputChange}/>
}