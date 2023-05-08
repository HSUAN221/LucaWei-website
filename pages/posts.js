import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbBuilding from '../public/images/posts/building.png'

const Posts = () => (
    <Layout title="Posts">
        <Container>

            <Heading as="h3" fontSize={20} mb={4}>
                Posts
            </Heading>

            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                <GridItem
                    title="How to Build a C++ Project"
                    thumbnail={thumbBuilding}
                    href="https://github.com/HSUAN221/architect"
                />

                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts