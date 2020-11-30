import './App.css'
import Weather from './Weather'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Weather defaultCity='London' />
        <footer>
          This project was coded by <span>Sarah</span> and is{' '}
          <a
            href='https://github.com/SarahPruene/shecodes-react-weather-app'
            target='_blank'
          >
            open-sourced on Github
          </a>{' '}
          <br />
          and{' '}
          <a href='/' target='_blank'>
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  )
}

export default App
