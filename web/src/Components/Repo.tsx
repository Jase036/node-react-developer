import { FC, useState } from 'react';
import styled from 'styled-components';
import { Repository } from '../Models/Repo';

interface RepoProps {
  repo: Repository;
}
interface StyleProps {
  show: boolean;
}

const Repo: FC<RepoProps> = ({ repo }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = (ev: any) => {
    setExpanded(!expanded);
  };
  return (
    <Card onClick={handleExpand}>
      <p>Repository Name: {repo.name}</p>
      {repo.description && <p>Description: {repo.description}</p>}
      <p>Language: {repo.language}</p>
      <p>Number of forks: {repo.forks}</p>
      <ExpandingContainer show={expanded}>Extra Info</ExpandingContainer>
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

  &:hover {
    background-color: #fff;
  }
`;

const ExpandingContainer = styled.div<StyleProps>`
  max-height: ${(props) => (props.show ? '100%' : '0')};
  overflow: hidden;
  padding: ${(props) => (props.show ? '45px 0 0 0' : '0')};
  transition: all 0.5s ease-in-out;
`;
export default Repo;
