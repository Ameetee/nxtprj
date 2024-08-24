// src/pages/projects.tsx
import { GetServerSideProps } from 'next';

const ProjectsPage = ({ projects }: { projects: string[] }) => {
  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from an API or database
  const projects = ['Project 1', 'Project 2', 'Project 3'];

  return {
    props: {
      projects,
    },
  };
};

export default ProjectsPage;

  