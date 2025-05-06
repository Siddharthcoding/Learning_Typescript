import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'

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
        <Greet name = "Siddharth" messageCount={20} isLoggedIn={false}/>
        <Person name = {personName} />
        <PersonList names={nameList}/>
      </div>
    </>
  )
}

export default App
