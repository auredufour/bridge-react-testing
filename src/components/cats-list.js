import React from 'react'

import Cat from './cat'

const CatsList = ({
  cats
}) => (
  cats ? 
  <div>
    { cats.map((cat, index) => 
    <Cat index={index} name={ cat.name } picture={ cat.picture } breed={ cat.breed } age={ cat.age } />
    )}
  </div> 
  : null
)

export default CatsList
