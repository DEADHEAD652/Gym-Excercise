import React from 'react'
import {Route,Routes} from'react-router-dom'
import{Box} from '@mui/material'
import'./App.css'

const App = () => {
  return (
    <Box width='400px'>

<Navber/>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/excercise:id' element={<ExcerciseDetail />} />

</Routes>


    </Box>
  )
}

export default App