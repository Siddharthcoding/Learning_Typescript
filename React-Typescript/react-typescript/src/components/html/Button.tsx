import type React from "react"

type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: string
// } & React.ComponentProps<'button'> // extending the button props to include all the properties of a button element
} & Omit<React.ComponentProps<'button'>, 'children'> // Omit is used to exclude the children property from the button props

export const CustomButton = ({ variant, children, ...rest}: ButtonProps) => {
    return (
        <button className={`class-with-${variant}`} {...rest}>
            {children}
        </button>
    )
}