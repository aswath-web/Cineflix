import axios from 'axios'
import React, { useState,useEffect, Fragment, useContext } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { Container } from './NavBar'
import NoImg from './NoImage.jpg'
import '../Styles/Videos.css'
import TrailerTvShows from '../Trailers/TrailerTvShows'

function TvShows() {
  const {toggle, inputValue} = useContext(Container)
  const input = inputValue
  const [showData, setShowData] = useState([])
  const [trailer,setTrailer] = useState(true)
  const Shown = input ? 'search' : 'discover'
  const [title,setTitle] = useState('')
  const Api = `https://api.themoviedb.org/3/${Shown}/tv`
  const Images = 'https://image.tmdb.org/t/p/w500/'
  const TvShows = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key:'7ee907a4123097a57db19d0a9b94e507',
        query: input 
      }
    })
    const results = (data.data.results)
    setShowData(results)
  }
    useEffect(() => {
      setTimeout(() => {
        TvShows()
      },100);
      TvShows()
    },[input])
    console.log(showData)
    const TvShowTitle = (shows) => {
       setTitle(shows.name)
       setTrailer(!trailer) 
    }
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
      <div className="movies-container">
      {showData.map((shows) => {
        return (
          <Fragment key={shows.id}>
            <div id= {trailer ? 'container' : 'NoContainer'}>
               <AiFillPlayCircle color='white' fontSize={40} id={trailer ? "playIcon" : 'hide'} onClick={() => TvShowTitle(shows)}/>
               <img src={shows.poster_path ? `${Images}${shows.poster_path}` : NoImg} alt='' onClick={() => TvShowTitle(shows)}  />
               <h3 id={shows.name.length >  28 ? 'smaller-Text': ''} className={toggle ? 'mainColor' : 'secondaryColor'}>{shows.name}</h3>
            </div>
          </Fragment>
        )
      })}
      {trailer ? console.log : <TrailerTvShows TvShowTitle={title} toggle={toggle} />}
      <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} color="white" cursor={'pointer'} onClick={() => setTrailer(true)} />
      </div>
      </div>
    </Fragment>
  )
}

export default TvShows