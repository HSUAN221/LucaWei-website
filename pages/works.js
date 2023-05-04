import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from "../components/layouts/article"
import thumbCfdsolver from '../public/images/works/cfd-solver.png'

const Works = () => {
    return (
    
        <Layout title="Works">
            <Container>

                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="cfdsolver" title="CFD Solver" thumbnail={thumbCfdsolver}>
                            A Fortran 3D flow using projection method with FVM
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

            </Container>
        </Layout>
    )
}

export default Works