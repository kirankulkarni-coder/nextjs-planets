import { Box, Typography } from '@mui/material'
import React from 'react'

interface Props {
  title: string;
  data: string;
}

const DataBox = ({title, data}: Props) => {
  return (
    <Box sx={{border: "1px solid rgba(225,225,225,0.75)", padding: "1rem", width: "15vw"}}>
     <Typography variant='h4' sx={{fontSize: '0.85rem'}}>{title}</Typography>
     <Typography sx={{fontSize: "2rem", fontWeight: "800"}}>{data}</Typography>
    </Box>
  )
}

export default DataBox