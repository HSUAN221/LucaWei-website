// import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbCfdsolver from '../public/images/works/cfd-solver.png'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="cfdsolver" title="CFD Solver" thumbnail={thumbCfdsolver}>
                    A 
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works