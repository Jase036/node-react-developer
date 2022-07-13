import { FC } from 'react';
import styled from 'styled-components';
import { Repository } from '../Models/Repo';

interface RepoProps {
  repo: Repository;
}

const Repo: FC<RepoProps> = ({ repo }) => {
  return (
    <Card>
      <p>Repository Name: {repo.name}</p>
      {repo.description && <p>Description: {repo.description}</p>}
      <p>Language: {repo.language}</p>
      <p>Number of forks: {repo.forks}</p>
    </Card>
  );
};

const Card = styled.div`
  background-color: #ddd;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export default Repo;
