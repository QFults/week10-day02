import UselessComponent from '../UselessComponent'

const Bio = ({ bio }) => {
  return (
    <p className='card-text'>
      <UselessComponent bio={bio} />
    </p>
  )
}

export default Bio
