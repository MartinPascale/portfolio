import { Box, Link, List, ListItem, Text } from '@chakra-ui/react';
import '../styles/profileInfo.css';
import AnimatedText from '@/app/components/AnimatedText';
import {
  AttachmentIcon,
  CheckIcon,
  HamburgerIcon,
  InfoIcon,
  PhoneIcon,
} from '@chakra-ui/icons';
import AnimatedCard from '@/app/components/AnimatedCard';

interface ProfileInfoContent {
  [key: number]: JSX.Element;
}

export const profileInfoContent: ProfileInfoContent = {
  1: (
    <Text fontSize="xl">
      Software Engineer, experienced in React/Typescript/Node/AWS. I love
      designing and building beautiful and intuitive UIs. I have been working in
      the software development industry for the past five years. I have
      experience working with data-driven dashboards, generative AI, Admin
      Sites, a Search Engine, and a few big e-commerce websites, where I
      developed an eye for detail and always make sure everything works as
      expected on every device. While most of my work has been in the frontend
      using React (and lately AWS), being a self-taught developer has helped me
      to always be adapting to trends and learning new technologies. I think
      communication and collaboration are key to delivering a good product,
      which is why I hold the Agile Values in high regard (Courage, Commitment,
      Focus, Respect, and Openness).
    </Text>
  ),
  2: (
    <div className="experience">
      <div className="experience-heading">
        <h4>Constellation</h4>
        <p className="experience-date">Jan 2023 to Jul 2024</p>
      </div>
      <p>Senior Software Engineer</p>
      <p>
        As a Senior Software Engineer at Constellation, I was in charge of
        creating tools for Ad creation and placement on different platforms such
        as Google and Meta. This involved Frontend UI work in
        React/Next/Typescript and Backend infrastructure as a code
        AWS/Serverless/Node. I delivered entire features such as a Generative AI
        for creating, resizing, and modifying images using OpenAI, Stable
        Diffusion, and Cloudinary. Working closely with Designers, Product
        managers, and QA to achieve it.
      </p>
      <AnimatedText
        text=". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
        textShadow="rgb(7, 7, 7) 1px 1px 8px, rgb(7, 7, 7) 1px 1px 8px"
        fontSize="4xl"
        textAlign="center"
        duration={2}
        amplitude={8}
        delay={Math.random() - 0.5}
      />

      <div className="experience-item">
        <div className="experience-heading">
          <h4>Vairix</h4>
          <p className="experience-date">Sept 2021 to January 2023</p>
        </div>
        <p>Frontend Software Engineer</p>
        <p>
          Building and testing UIs and Design Systems using
          React/Typescript/Storybook for a fortune 50 company.
        </p>
      </div>
      <AnimatedText
        text=". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
        textShadow="rgb(7, 7, 7) 1px 1px 8px, rgb(7, 7, 7) 1px 1px 8px"
        fontSize="4xl"
        textAlign="center"
        duration={2}
        amplitude={8}
        delay={Math.random() - 0.5}
      />

      <div className="experience-item">
        <div className="experience-heading">
          <h4>Arvolution</h4>
          <p className="experience-date">Sept 2020 to Sept 2021</p>
        </div>
        <p>Software Engineer</p>
        <p>
          Worn many hats, going from requirements gathering through design and
          development. React/Typescript Node.
        </p>
      </div>
      <AnimatedText
        text=". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
        textShadow="rgb(7, 7, 7) 1px 1px 8px, rgb(7, 7, 7) 1px 1px 8px"
        fontSize="4xl"
        textAlign="center"
        duration={2}
        amplitude={8}
        delay={Math.random() - 0.5}
      />

      <div className="experience-item">
        <div className="experience-heading">
          <h4>Neocoast</h4>
          <p className="experience-date">Sept 2019 to Sept 2020</p>
        </div>
        <p>Frontend Developer</p>
        <p>
          Worked with React / Javascript /Redux stack. I learned a lot of my
          foundations and delivered pixel perfect responsive UIs in the process.
        </p>
      </div>
      <AnimatedText
        text=". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
        textShadow="rgb(7, 7, 7) 1px 1px 8px, rgb(7, 7, 7) 1px 1px 8px"
        fontSize="4xl"
        textAlign="center"
        duration={2}
        amplitude={8}
        delay={Math.random() - 0.5}
      />

      <div className="experience-item">
        <div className="experience-heading">
          <h4>Neocoast</h4>
          <p className="experience-date">Oct 2018 to Nov 2019</p>
        </div>
        <p>QA Tester</p>
        <p>
          Testing of Web and React Native apps. I was responsible for Manual
          testing and ticketing the bugs. Also used Selenium to automate
          regression testing on an E-commerce website.
        </p>
      </div>
    </div>
  ),
  3: (
    <Box display="flex" w="100%" justifyContent="space-around" flexDir="column">
      <Box>
        <Text fontSize="xl">Basic</Text>
        <List pl={3} fontSize="large">
          <ListItem>📬 mpgpascale@gmail.com</ListItem>
          <ListItem>📞 (+598) 093934252</ListItem>
          <ListItem>📍 Montevideo, Uruguay</ListItem>
        </List>
      </Box>
      <AnimatedText
        text=". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
        textShadow="rgb(7, 7, 7) 1px 1px 8px, rgb(7, 7, 7) 1px 1px 8px"
        fontSize="4xl"
        textAlign="center"
        width="100%"
        duration={2}
        amplitude={8}
        delay={Math.random() - 0.5}
      />
      <Box>
        <Text fontSize="xl">Links</Text>
        <List pl={3} fontSize="large">
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/martin-pascale-garcia-370128149/"
              color="blue.400"
            >
              LinkedIn
            </Link>
          </ListItem>
          <ListItem>
            <Link color="blue.400" href="https://github.com/MartinPascale">
              GitHub
            </Link>
          </ListItem>
          <ListItem>
            <Link color="blue.400" href="https://martinpascale.dev/">
              Website
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  ),
  4: (
    <Box
      gap={4}
      justifyContent="center"
      display="flex"
      height="100%"
      width="100%"
      flexWrap="wrap"
    >
      <AnimatedCard>
        <Box display="flex" justifyContent="space-between">
          <Text fontSize="large">React </Text>
          (5+ years)
        </Box>
      </AnimatedCard>
      <AnimatedCard>
        <Box display="flex" justifyContent="space-between">
          <Text fontSize="large">Typescript </Text>
          (4+ years)
        </Box>
      </AnimatedCard>
      <AnimatedCard>
        <Box display="flex" justifyContent="space-between">
          <Text fontSize="large">Next </Text>
          (3+ years)
        </Box>
      </AnimatedCard>
      <AnimatedCard>
        <Box display="flex" justifyContent="space-between">
          <Text fontSize="large">Node </Text>
          (3+ years)
        </Box>
      </AnimatedCard>
      <AnimatedCard>
        <Box display="flex" justifyContent="space-between">
          <Text fontSize="large">Aws </Text>
          (2 years)
        </Box>
      </AnimatedCard>
      <AnimatedCard>
        <Box display="flex" justifyContent="space-between">
          <Text fontSize="large">Scrum </Text>
          (6+ years)
        </Box>
      </AnimatedCard>
    </Box>
  ),
  5: (
    <Box
      gap={4}
      justifyContent="center"
      display="flex"
      height="100%"
      width="100%"
    >
      <AnimatedCard width="30%">
        <strong>Professional Scrum Master I</strong> Scrum.org, Jan 2023
      </AnimatedCard>
      <AnimatedCard width="30%">
        <strong>English First Certificate</strong> Cambridge, Dec 2015
      </AnimatedCard>
      <AnimatedCard width="30%">
        <strong>Portuguese - Celpe Bras</strong> Colegio San Pablo, Dec 2015
      </AnimatedCard>
    </Box>
  ),
};

export const infoCards = [
  { id: 1, content: 'Summary', icon: <InfoIcon /> },
  { id: 2, content: 'Experience', icon: <HamburgerIcon /> },
  { id: 3, content: 'Contact', icon: <PhoneIcon /> },
  { id: 4, content: 'Skills', icon: <CheckIcon /> },
  { id: 5, content: 'Certifications', icon: <AttachmentIcon /> },
];
