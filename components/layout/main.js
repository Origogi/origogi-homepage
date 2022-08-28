import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import VoxelDog from '../voxel-dog'
import NoSsr from '../no-ssr'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jeongtae Kim - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelDog /> 
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default Main
