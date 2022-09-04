import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layout/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbAmplifyFlutter from '../public/images/contents/amplify-flutter.png'

const Posts = () => (
  <Layout title="Posts">
    <Heading as="h4" fontSize={20} mb={4}>
      Popular Posts
    </Heading>
    <Section delay={0.1}>
      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem
          title="Integrate Amplify with Flutter"
          thumbnail={thumbAmplifyFlutter}
          href="https://origogi.github.io/flutter/amplify-1/"
        />
        <GridItem
          title="Integrate Amplify with Flutter"
          thumbnail={thumbAmplifyFlutter}
          href="https://origogi.github.io/flutter/amplify-1/"
        />
      </SimpleGrid>
    </Section>
    <Section delay={0.3}>
      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem
          title="Integrate Amplify with Flutter"
          thumbnail={thumbAmplifyFlutter}
          href="https://origogi.github.io/flutter/amplify-1/"
        />
        <GridItem
          title="Integrate Amplify with Flutter"
          thumbnail={thumbAmplifyFlutter}
          href="https://origogi.github.io/flutter/amplify-1/"
        />
      </SimpleGrid>
    </Section>
    <Section delay={0.5}>
      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem
          title="Integrate Amplify with Flutter"
          thumbnail={thumbAmplifyFlutter}
          href="https://origogi.github.io/flutter/amplify-1/"
        />
        <GridItem
          title="Integrate Amplify with Flutter"
          thumbnail={thumbAmplifyFlutter}
          href="https://origogi.github.io/flutter/amplify-1/"
        />
      </SimpleGrid>
    </Section>
  </Layout>
)

export default Posts
