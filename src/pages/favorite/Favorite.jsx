import { useNavigate } from 'react-router-dom'
import './favorite.scss'
import { useEffect, useState } from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
const Favorite = () => {
  const navigate = useNavigate()
  const [items,setItems] = useState([])
  useEffect(()=>{
    
  setItems(JSON.parse(localStorage.getItem('items')) || [])
  },[])
  
  console.log(items)

  const handleRemove = (id)=>{
    let tempData = JSON.parse(localStorage.getItem('items'))
    tempData = tempData.filter((item)=>item.imdbID !== id)
    setItems(tempData)
    console.log(tempData)
    localStorage.setItem('items',JSON.stringify(tempData))
  }

  return (
    <div className='favorite'>
      <div className='wrapper'>
        {
          items.length>0 ? 
          
          <div className='list'>
          <div className='header'>YOUR FAVORITES</div>
          {
            items.map(item=>(
              <div className='listItem' key={item.imdbID}>
                <span>{item.Title}</span>
                <img src={item.Poster} alt=''/>
                <HighlightOffIcon className='icon' onClick={()=>handleRemove(item.imdbID)}/>
              </div>
            ))
          }

          </div> : <div className='noContent'>
            <h2>There is no favorites :( . You can go back and check for some nice movies.</h2>
            <button onClick={()=>navigate('/')}>Go back</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Favorite