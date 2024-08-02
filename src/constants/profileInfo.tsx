import { List, Text } from '@chakra-ui/react';
import '../styles/profileInfo.css';
import AnimatedText from '@/app/components/AnimatedText';

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
        text="- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"
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
        text="- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"
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
        text="- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"
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
        text="- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"
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
    <List>
      <li>mpgpascale@gmail.com</li>
      <li>(+598) 093934252</li>
      <li>Montevideo, Uruguay</li>
      <li>
        <a href="https://www.linkedin.com/in/martin-pascale-garcia-370128149/">
          LinkedIn
        </a>
      </li>
      <li>
        <a href="https://martinpascale.dev/">Website</a>
      </li>
      <li>
        <a href="https://github.com/MartinPascale">GitHub</a>
      </li>
    </List>
  ),
  4: (
    <List>
      <li>React</li>
      <li>TypeScript</li>
      <li>Next</li>
      <li>Node</li>
      <li>AWS</li>
      <li>Scrum</li>
    </List>
  ),
  5: (
    <List>
      <li>
        <strong>Professional Scrum Master I</strong> Scrum.org, Jan 2023
      </li>
      <li>
        <strong>English First Certificate</strong> Cambridge, Dec 2015
      </li>
      <li>
        <strong>Portuguese - Celpe Bras</strong> Colegio San Pablo, Dec 2015
      </li>
    </List>
  ),
};

export const infoCards = [
  { id: 1, content: 'Summary♥️' },
  { id: 2, content: 'Experience' },
  { id: 3, content: 'Contact' },
  { id: 4, content: 'Skills♣️' },
  { id: 5, content: 'Certifications' },
];
