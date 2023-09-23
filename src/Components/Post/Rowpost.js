import React,{useEffect,useState} from 'react'
import axios from '../../Components/axios'
import {imageUrl,API_KEY } from '../../constants/constanst'
import './post.css'
import  Youtube from 'react-youtube'
function Rowpost(props) {
  const [movies,setMovies] = useState([])
  const [urlid,setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    })
  },[])
 
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
     
      autoplay: 1,
    },
  };
  const handleMovie =(id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])

      }else{
        console.log('empty array');
      }
       
    })

  }
  return (
    <div className='row'>
      <h2 >{props.title}</h2>
      <div className='posters'>
        {
          movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="sss" />

          )
        }
        
      </div>
     {urlid &&<Youtube opts={opts} videoId={urlid.key}/>}
    </div>
  )
}

export default Rowpost
