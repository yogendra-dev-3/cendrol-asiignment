// import required Components
import {Component} from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader'
import CategoryItem from '../CategoryItem'
import './index.css'

class JokesContainer extends Component {
  // initialize the state
  state = {categories: [], isLoading: true}

  componentDidMount() {
    // get all categories of jokes when component mounts
    this.getCategories()
  }

  getCategories = async () => {
    // set loader as true before data is Fetched
    this.setState({isLoading: true})
    const url = 'https://api.chucknorris.io/jokes/categories'
    const response = await fetch(url)
    const data = await response.json()
    // store fetched data in categories state and set isLoading state to false after data is fetched
    this.setState({categories: data, isLoading: false})
  }

  render() {
    const {categories, isLoading} = this.state

    // color of loader
    const color = 'white'
    // loader status
    const loading = true

    return (
      <div className="bg-container">
        <h1 className="heading">Chuck Norries</h1>
        {isLoading ? (
          // show the loader component if data is still loading
          <div className="loader">
            <ScaleLoader
              color={color}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          // displaying all the categories of jokes
          <div className="jokes-container">
            {categories.map(each => (
              <CategoryItem category={each} key={each} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default JokesContainer
