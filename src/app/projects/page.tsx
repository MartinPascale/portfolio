import {
  Box,
  Heading,
  List,
  ListItem,
  Link as ChakraLink,
} from '@chakra-ui/react';
import Link from 'next/link';

type Project = {
  id: string;
  name: string;
};

const ProjectsPage = async () => {
  const res = await fetch(`/api/projects`);
  const projects: Project[] = await res.json();

  return (
    <Box padding="20px" maxWidth="800px" margin="auto">
      <Heading as="h1" marginBottom="10px">
        My Projects
      </Heading>
      <List spacing={3}>
        {projects.map((project) => (
          <ListItem key={project.id}>
            <Link href={`/projects/${project.id}`} passHref>
              {project.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProjectsPage;
