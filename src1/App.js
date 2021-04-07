import Card from './components/Card'

const person = {
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  bio: 'My name is John Doe! I am a developer and I love coding!'
}

const App = () => {
  return (
    <>
      <h1>The {person.name} Application</h1>
      <Card person={person} />
    </>
  )
}

export default App
