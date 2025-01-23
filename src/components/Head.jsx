import React, { useEffect } from 'react'

function Head({title, description}) {
  useEffect(() => {
    document.title = `GamesView - ${title}`;
    document.querySelector('meta[name="description"]').setAttribute('content', description)
  },[])
  return (
    <></>
  )
}

export default Head