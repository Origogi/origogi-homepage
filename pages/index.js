import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button
} from '@chakra-ui/react'

import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello I&apos;m Mobile and Web developer based in Korea
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jeongtae Kim (Origogi)
          </Heading>
          <p>Front-End Engineer ( Android / Flutter / Web )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/origogi.png"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Hello, I have about 9 years of Android developed experience and I am
          currently working as a Flutter developer. And recently, I am
          interested in developing the web and studying JavaScript, HTML, CSS,
          and React.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />}>My portfolio</Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1988</BioYear>
          Born in Busan, Korea
        </BioSection>
        <BioSection>
          <BioYear>2006</BioYear>
          Bachelor of Science in Computer Engineering in Konkuk Univ.
        </BioSection>
        <BioSection>
          <BioYear>2013</BioYear>
            Worked at LG Electronics (Mobile)
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
            Worked at 11 Street
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
            Worked at Kakao Brain
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
