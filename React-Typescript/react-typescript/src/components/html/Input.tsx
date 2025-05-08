type InputProps = React.ComponentProps<'input'> // extending the input props to include all the properties of an input element

export const customInput = (props: InputProps) => {
    return (
        <input {...props}/>
    )
}