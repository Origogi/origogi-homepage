import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbnailMovist from '../public/images/works/thumbMovist.png'
import thumbnailVertical from '../public/images/works/thumbVertical.png'
import thumbnailHorizontal from '../public/images/works/thumbHorizontal.png'
import thumbnailCatsta from '../public/images/works/thumbCatstagram.png'
import thumbnailCard from '../public/images/works/thumbCard.png'
import thumbnailYoutube from '../public/images/works/thumbYoutubeClone.png'


import Layout from '../components/layout/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="movist"
              title="Movist"
              thumbnail={thumbnailMovist}
            >
              Mobile App (Android/iOS)
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="vertical"
              title="Vertical Card Pager"
              thumbnail={thumbnailVertical}
            >
              Flutter UI plugin
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="horizontal"
              title="Horizontal Card Pager"
              thumbnail={thumbnailHorizontal}
            >
              Flutter UI plugin
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="catstagram"
              title="Catstagram"
              thumbnail={thumbnailCatsta}
            >
              Instagram clone App (Android)
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="card"
              title="Credit Card Input Form"
              thumbnail={thumbnailCard}
            >
              Flutter UI plugin
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="youtube"
              title="Youtube Clone"
              thumbnail={thumbnailYoutube}
            >
              Youtube clone web (React)
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
