import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  chakra,
  List,
  Link,
  ListItem,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layout/article'
import { GridItem } from '../components/grid-item'
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
  IoHome,
} from 'react-icons/io5'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop),
})

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a mobile and web developer based in Korea!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jeongtae Kim
            </Heading>
            <p>Android / Flutter / React</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/origogi.jpeg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I have about 9 years of Android developed experience and I am
            currently working as a Flutter developer. And recently, I am
            interested in developing the web and studying JavaScript, HTML, CSS,
            and React.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
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
            Bachelor of Science in Computer Engineering at Konkuk Univ. Seoul
          </BioSection>
          <BioSection>
            <BioYear>2013</BioYear>
            Worked at LG Electronics, Seoul
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Worked at 11 Street, Seoul
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Worked at Kakao Brain, Pangyo
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Contacts
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Origogi" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @Origogi
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/%EC%A0%95%ED%83%9C-%EA%B9%80-679975155/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @Jeongtae Kim
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://origogi.github.io/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoHome />}
                >
                  origogi.github.io
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
