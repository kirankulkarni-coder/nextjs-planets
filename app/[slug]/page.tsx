// app/[slug]/page.tsx
import { notFound } from 'next/navigation';
import data from '@/data/data.json'
import { Box, Container, Typography } from '@mui/material';
import Nav from '@/components/Nav';
import Image from 'next/image';
import DataBox from '@/components/DataBox';

type Props = {
  params: {
    slug: string;
  };
};

export default async function  Planet({ params }: Props) {
  const { slug } =await params;

  // Example: Fetch data based on the slug
  // const data = await fetchData(slug);

  if (!slug) {
    notFound(); // Render the 404 page if the slug is invalid
  }

  const planet = data[Number(slug)]
  console.log(planet);

  return (
    <Box>
      <Nav/>
      <Container maxWidth='lg' sx={{height: "80vh", display: 'flex', flexDirection: 'column' , justifyContent: 'space-evenly'}}>
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Image src={planet.images.planet} width={300} height={300} alt='Planet Image'></Image>
        
        <Box sx={{width: '30vw'}}>
          <Typography variant='h2'>{planet.name}</Typography>
          <Typography>{planet.overview.content}</Typography>
        </Box>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <DataBox title="Rotation Time" data={planet.rotation}></DataBox>
          <DataBox title="Revolution Time" data={planet.revolution}></DataBox>
          <DataBox title="Radius" data={planet.radius}></DataBox>
          <DataBox title="Temparature" data={planet.temperature}></DataBox>
        </Box>
      </Container>
    </Box>
  );
}