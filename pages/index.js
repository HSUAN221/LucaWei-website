import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Link,
    Button
} from "@chakra-ui/react"
import NextLink from "next/link"
import { LinkIcon } from "@chakra-ui/icons"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"

const Page = () => {
    return (
        <Container>
            <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
            p={3}
            mb={6}
            align="center"
            css={{ backdropFilter: 'blur(10px)' }}
            >
                Hello, I'm Luca in Taiwnan!
            </Box>

            {/* Profile */}
            <Box display={{md:'flex'}}>
                <Box floexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Luca Wei
                    </Heading>
                    <p>Software Engineer (Artist / Developer / Designer )</p>
                </Box>
                <Box
                flexShrink={0}
                mt={{base: 4, md: 0}}
                ml= {{md: 6}}
                align="center"
                >
                    <Image
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="soild"
                    maxWidth="100px"
                    display="inline-block"
                    borderRadius="full"
                    src="/images/luca.jpg"
                    alt="Profile Image"
                    />
                </Box>
            </Box>

            {/* Work */}
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Paragraph
                </Paragraph>
            </Section>
            <Box align="center" my={4}>
                <Button
                as={NextLink}
                href="/works"
                scroll={false}
                rightIcon={<LinkIcon />}
                colorScheme="teal"
                >
                    My portfolio
                </Button>
            </Box>

            {/* biography */}
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Biography
                </Heading>
                <BioSection>
                    <BioYear>1996</BioYear>
                    Born in Taipei (台北), Taiwan.
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Researched in Computational Fluid Dynamics Lab at Kobe University, Japan (神戶大學計算科學專攻)
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Completed the Master&apos;s Program in the Graduate School of
                    Mechanical Engineering at National Taiwan University of Science and Technology
                    (國立臺灣科技大學機械工程)
                </BioSection>
                <BioSection>
                    <BioYear>2021 to present</BioYear>
                    Worked at Moldex3D, Taiwan (科盛科技)
                </BioSection>
                
            </Section>
        </Container>
    )
}

export default Page