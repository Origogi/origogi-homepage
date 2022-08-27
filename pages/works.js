import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbnail from '../public/images/works/thumbMovist.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="movist" title="Movist" thumbnail={thumbnail}>
            Show movie information through network (by Flutter)
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="movist" title="Movist" thumbnail={thumbnail}>
            Show movie information through network (by Flutter)
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
