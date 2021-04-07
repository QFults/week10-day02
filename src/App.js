import Item from './components/Item'

const people = ['John Doe', 'Jane Doe', 'Jack Doe', 'Jennifer Doe', 'James Doe']

const App = () => {
  return (
    <>
      <h1>Hello World!</h1>
      {/* {[<button>Click Me</button>, <button>Don't Click Me</button>]} */}
      <ul className='list-group'>
        {
          people.map((person, i) => <Item key={i} person={person} />)
        }
      </ul>
    </>
  )
}

export default App
