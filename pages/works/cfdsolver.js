import {
Container,
Badge,
Link,
List,
ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="CFD Solver">
            <Container>
                <Title>
                    CFD Solver <Badge>2019</Badge>
                </Title>
                <Paragraph>
                    This code is a Fortran 3D flow using projection method with FVM.
                    Navier Stokes equations are solved for velocity and pressure fields.
                    The output data can be visualized with tecplot or paraview.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>SOURCE</Meta>
                        <Link href='https://github.com/HSUAN221/NTUSTCFDLAB'>
                            https://github.com/HSUAN221/NTUSTCFDLAB <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>PLATFORM</Meta> Linux
                    </ListItem>
    
                    <ListItem>
                        <Meta>LANGUAGE</Meta> Fortran
                    </ListItem>
                </List>

                <WorkImage src="/images/works/cfd-solver-01-plasma.gif" alt="CFD Solver" />
                <WorkImage src="/images/works/cfd-solver-02-cylinder-fsi.gif" alt="CFD Solver" />
                <WorkImage src="/images/works/cfd-solver-03-flapping-airfoil.gif" alt="CFD Solver" />
                <WorkImage src="/images/works/cfd-solver-04-cavity-re1000.gif" alt="CFD Solver" />
            </Container>
        </Layout>
    )
}


export default Work