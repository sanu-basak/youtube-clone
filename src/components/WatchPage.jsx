import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'

function WatchPage() {
    const dispatch = useDispatch()
    const params = useSearchParams()
    useEffect(() => {
        dispatch(closeMenu())
    },[])
  return (
    <div className='flex flex-col'>
      <div className='p-4'>
          <iframe 
              width="1200" 
              height="600" 
              src={"https://www.youtube.com/embed/"+params[0].get('v')} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          />
      </div>
      <CommentsContainer/>
    </div>
   
  )
}

export default WatchPage