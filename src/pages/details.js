import React from 'react'
import { Button } from 'react-bootstrap'

import { Link, useParams } from 'react-router-dom'

const Details = ({movies}) => {
  const {id} = useParams()
  
  return (
    <div> <iframe width="560" height="315" src={movies.find((el)=>el._id ===id).TrailerURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Link to={"/"}><Button>Back Home</Button></Link>
    </div>
    )
}

export default Details
