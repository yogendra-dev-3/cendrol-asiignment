import {useState, useEffect} from 'react'
import Popup from 'reactjs-popup'
import FadeLoader from 'react-spinners/FadeLoader'
import {GiCancel} from 'react-icons/gi'
import 'reactjs-popup/dist/index.css'
import './index.css'

const CategoryItem = props => {
  // get the category value from props
  const {category} = props
  const [joke, setJoke] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const getRandomJoke = async () => {
    // set isLoading state to true before fetching a random joke
    setIsLoading(true)
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`
    const response = await fetch(url)
    const data = await response.json()

    // set the joke received from the API response in the state
    setJoke(data.value)

    // set isLoading state to false after fetching the joke
    setIsLoading(false)
  }

  useEffect(() => {
    // fetch a random joke whenever the category changes
    getRandomJoke()
  }, [category])

  const loading = true
  const color = 'white'
  const Category = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <Popup
      trigger={
        // popup will be triggered whenever joke-box is clicked
        <div className="joke-box">
          <h1 className="category">{Category}</h1>
          <p className="text">Unlimited Jokes on {category}</p>
        </div>
      }
      modal
    >
      {close => (
        <div className="modal-content">
          <button type="button" className="close-button" onClick={close}>
            <GiCancel className="icon" />
          </button>
          <h1 className="popup-heading">{Category}</h1>
          <div className="content-container">
            {isLoading ? (
              // show loader  while fetching next joke
              <div className="loader">
                <FadeLoader
                  color={color}
                  loading={loading}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            ) : (
              // display the joke after joke is fetched
              <p className="joke">{joke}</p>
            )}

            <button
              className="next-joke-button"
              type="button"
              onClick={getRandomJoke}
            >
              Next Joke
            </button>
          </div>
        </div>
      )}
    </Popup>
  )
}

export default CategoryItem
