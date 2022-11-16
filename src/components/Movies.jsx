import axios from 'axios'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import {AiFillPlayCircle,AiOutlineClose} from 'react-icons/ai'
import { Container } from './NavBar'
import NoImg from './NoImage.jpg'
import '../Styles/Videos.css'
import TrailerMovies from '../Trailers/TrailerMovies'

function Movies() {
  const {toggle, inputValue} = useContext(Container)
  const input = inputValue
  const [moviesData, setMoviesdata] = useState([])
  const [trailer, setTrailer] = useState(true)
  const [movieTitle, setMovieTitle] = useState('')
  const Shown = input ? 'search' : 'discover'
  const Api = `https://api.themoviedb.org/3/${Shown}/movie`
  const Images = 'https://image.tmdb.org/t/p/w500/'
  const MovieCall = async () => {
    const data = await axios.get(Api,{
        params: {
            api_key:'7ee907a4123097a57db19d0a9b94e507',
            query: input
        }
    })
    const results = data.data.results
    setMoviesdata(results)
  }
  useEffect(() =>{
    setTimeout(() => {
        MovieCall()
    },100)
    MovieCall()
  }, [input])
  const MoviesTitle = (movie) => {
    setMovieTitle(movie.title)
    setTrailer(!trailer)

  }
  return (
    <Fragment>
        <div className = {toggle ? "mainBgColor" : 'secondaryBgColor'} >
        <div className="movies-container">
        {moviesData.map((movie) => {
            return (
            <Fragment>
                <div id= {trailer ? 'container' : 'NoContainer'}>
                    <AiFillPlayCircle color='white' fontSize={40} id={trailer ? "playIcon" : 'hide'}onClick={() => MoviesTitle(movie)}/>
                    <img src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg} alt='' onClick={() => MoviesTitle(movie)}  />
                    <h3 id={movie.title.length > 28 ? 'hi' : '' } className={toggle ? 'mainColor' : 'secondaryColor'}> {movie.title} </h3> 
                </div>
            </Fragment>
            )
        })}
        {trailer ? console.log : <TrailerMovies MovieTitle={movieTitle} toggle={toggle} />}
        <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} color="white" cursor={'pointer'} onClick={() => setTrailer(true)} />
        </div>
        </div>
    </Fragment>
  )
}

export default Movies