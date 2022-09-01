import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import P from '../../components/paragraph'
import { Title, Meta, WorkImage } from '../../components/work'
import Layout from '../../components/layout/article'

const Work = () => {
  return (
    <Layout title="Movist">
      <Container>
        <Title>
          Movist <Badge>2018</Badge>
        </Title>
        <p>Show movie & crews information through network.</p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Mobile App</Meta>
            <Link href="https://github.com/Origogi/Flutter-Movist">
              Github Repository <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android/iOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Flutter/Dart</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/thumbMovist.png" />
      </Container>
    </Layout>
  )
}

export default Work
