import { Box, Heading, Text } from '@chakra-ui/react';

type Project = {
  id: string;
  name: string;
  description: string;
};

const ProjectPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`/api/projects/${params.id}`);
  const project: Project = await res.json();

  return (
    <Box padding="20px" maxWidth="800px" margin="auto">
      <Heading as="h1" marginBottom="10px">
        Name: {project.name}
      </Heading>
      <Text>{project.description}</Text>
    </Box>
  );
};

export default ProjectPage;
