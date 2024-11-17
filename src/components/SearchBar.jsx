const SearchBar = ({ genre, setGenre }) => {

  function handleChange(e) {
    setGenre(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(genre)
  }

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <label htmlFor="">Search</label>
      <input value={genre} onChange={handleChange} type="text" />

      <button className='search-btn'>Search</button>
    </form>
  )
}

export default SearchBar