import { useState } from 'react'

const App = () => {
  const [userState, setUserState] = useState({
    name: '',
    email: '',
    username: '',
    user: {}
  })

  const handleInputChange = ({ target }) => {
    setUserState({ ...userState, [target.name]: target.value })
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    const user = {
      name: userState.name,
      email: userState.email,
      username: userState.username
    }
    setUserState({
      ...userState,
      user,
      name: '',
      email: '',
      username: ''
    })
  }

  return (
    <>
      <h1>Hello World!</h1>
      <form>
        <p>
          <label htmlFor='name'>name</label>
          <input
            type='text'
            name='name'
            value={userState.name}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor='email'>email</label>
          <input
            type='email'
            name='email'
            value={userState.email}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor='username'>username</label>
          <input
            type='text'
            name='username'
            value={userState.username}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <button onClick={handleFormSubmit}>Submit</button>
        </p>
      </form>
      <div>
        <h1>Name: {userState.user.name}</h1>
        <h2>Email: {userState.user.email}</h2>
        <h3>Username: {userState.user.username}</h3>
      </div>
    </>
  )
}

export default App
