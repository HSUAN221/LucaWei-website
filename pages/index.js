import {
    Link,
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Button,
    List,
    ListItem
} from "@chakra-ui/react"
import NextLink from "next/link"
import { LinkIcon } from "@chakra-ui/icons"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"
import { ExpSection, ExpItem } from "../components/exp"
import Layout from "../components/layouts/article"
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import { IoMdCall } from 'react-icons/io'
import { MdOutlineMail } from 'react-icons/md'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
                p={3}
                mb={6}
                align="center"
                css={{ backdropFilter: 'blur(10px)' }}
                >
                    Hello, I&apos;m Luca in Taiwnan!
                </Box>

                {/* Profile */}
                <Box display={{md:'flex'}}>
                    <Box floexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Luca Wei
                        </Heading>
                        <p>Software Engineer</p>
                        <p>- Keep to learn new technologies of software development.</p>
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
                        I'm a c/c++ software developer based in Hsinchu.
                        Passionate about planning and designing c/c++ program architectures in numerical solvers.
                        Currently working in a company that develops computational fluid dynamics software.
                    </Paragraph>
                </Section>
                <Box align="center" my={4}>
                    <Button
                    as={NextLink}
                    href="/works"
                    scroll={false}
                    rightIcon={<LinkIcon />}
                    colorScheme='facebook'
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

                {/* expertise */}
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Expertise
                    </Heading>
                    <Heading as="h2" size="sm">
                        Software
                    </Heading>
                    <ExpSection>
                        <ExpItem>&bull; C / C++ Programming</ExpItem>
                    </ExpSection>
                    <ExpSection>
                        <ExpItem>&bull; Test-Driven Development (TDD)</ExpItem>
                    </ExpSection>
                    <ExpSection>
                        <ExpItem>&bull; Object-Oriented Programming (OOP)</ExpItem>
                    </ExpSection>
                    <ExpSection>
                        <ExpItem>&bull; DevOps</ExpItem>
                    </ExpSection>
                    <ExpSection>
                        <ExpItem>&bull; Data Structures and Algorithms</ExpItem>
                    </ExpSection>
                    <ExpSection>
                        <ExpItem>&bull; Design Pattern</ExpItem>
                    </ExpSection>
                    <Heading as="h2" size="sm">
                        Domain Knowledge
                    </Heading>
                    <ExpSection>
                        <ExpItem>&bull; Physical Design Automation (PDA)</ExpItem>
                    </ExpSection>
                    <ExpSection>
                        <ExpItem>&bull; Computational Fluid Dynamic (CFD)</ExpItem>
                    </ExpSection>
                    <ExpSection>
                        <ExpItem>&bull; Numerical Analysis and Modeling</ExpItem>
                    </ExpSection>
                    <ExpSection>
                        <ExpItem>&bull; Parallel Programming (MPI, OpenMP)</ExpItem>
                    </ExpSection>
                </Section>

                {/* contact-info */}
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Contact Info
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/HSUAN221" target="_blank">
                                <Button
                                variant="ghost"
                                colorScheme='facebook'
                                leftIcon={<IoLogoGithub />}
                                >
                                    @lucawei
                                </Button>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link href="https://www.linkedin.com/in/luca-wei-985887236/" target="_blank">
                                <Button
                                variant="ghost"
                                colorScheme='facebook'
                                leftIcon={<IoLogoLinkedin />}
                                >
                                    @lucawei
                                </Button>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Button leftIcon={<IoMdCall />} colorScheme='facebook' variant="ghost">
                                (+886) 987431232
                            </Button>
                        </ListItem>

                        <ListItem>
                            <Button leftIcon={<MdOutlineMail />} colorScheme='facebook' variant="ghost">
                                lucaweidev@gmail.com
                            </Button>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page