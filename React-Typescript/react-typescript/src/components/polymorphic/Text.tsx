// This file contains the Text component, which is a polymorphic component that can render different HTML elements based on the `as` prop. 
//It also accepts various props for styling and behavior.

type TextOwnProps<E extends React.ElementType> = { // E is a generic type that extends React.ElementType, which means it can be any valid HTML element or a React component
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode
    as?: E
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>> // Omit is used to exclude the own props from the component props. This is useful when you want to create a polymorphic component that can accept any valid props for the specified element type.
 // This type combines the own props with the props of the element type E, allowing the component to accept any valid props for the specified element type.

export const Text = <E extends React.ElementType = 'div'>({ size, color, children, as }: TextProps<E>) => {
    
    const Component = as || 'div' // default to div if as prop is not provided
    return <Component className={`class-with-${size}-${color}`} >{children}</Component>
}