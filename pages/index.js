import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="grey" p={3} mb={6} align="center">
                Hello, I'm Luca in Taiwnan!
            </Box>

            <Box display={{md:'flex'}}>
                <Box floexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Luca Wei
                    </Heading>
                    <p>Software Engineer (Artist / Developer)</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page 