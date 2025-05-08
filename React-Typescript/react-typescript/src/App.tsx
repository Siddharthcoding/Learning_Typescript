import './App.css'
import { Button } from './components/Button'
import { Greet } from './components/Greet'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Input } from './components/Input'
import { Container } from './components/Container'
import { ThemeContextProvider } from './components/context/ThemeContext'; 
import { Box } from './components/context/Box'
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/State/User'
import { Counter } from './class/Counter'
import { Private } from './components/auth/Private'
import { Profile } from './components/auth/Profile'
import { List } from './components/generics/List'
import { RandomNumber } from './components/restriction/RandomNumber'
import { Toast } from './components/templateLiterals/Toast'
import { CustomButton } from './components/html/Button'
import { Text } from './components/polymorphic/Text'

function App() {
  const personName = {
    first: 'Siddharth',
    last: 'Kumar'
  }

  const nameList = [
    {
      first: 'Siddharth',
      last: 'Kumar'
    },
    {
      first: 'John',
      last: 'Doe'
    },
    {
      first: 'Jane',
      last: 'Smith'
    }
  ]

  return (
    <>
      <div className='App'>
        <Heading>React Typescript</Heading>
        <Greet name = "Siddharth" isLoggedIn={false}/>
        <Person name = {personName} />
        <PersonList names={nameList}/>
        <Status status='success'/>
        <Oscar>
          <Heading>Oscar goes to Leonardo Decaprio</Heading>
        </Oscar>
        <Button handeClick={(event, id) => console.log('Button Clicked', event, id)}/>
        <Input value='' handleChange={(event) => console.log(event)} />
        <Container styles={{ border : '1px solid black', padding: '1rem'}} />
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
        <UserContextProvider>
          <User />
        </UserContextProvider>
        <Counter message='The count value is ' />
        <Private isLoggedIn={true} component={Profile}/>
        <List 
          items={['Superman', 'Batman', 'Spiderman']} 
          onClick={(item) => console.log(item)}
        />
        <List 
          items={[1, 2, 3]} 
          onClick={(item) => console.log(item)}
        />
        <RandomNumber value={10} isPositive />
        <Toast position='left-top'/>
        <CustomButton variant='primary' onClick={() => console.log('clicked')}>
          Primary Button
        </CustomButton>
        <Text as='h1' size='lg'>Heading</Text>
        <Text as='p' size='md'>Paragraph</Text>
        <Text as='label' htmlFor='id' size='sm' color='secondary'>Label</Text>

      </div>
    </>
  )
}

export default App
