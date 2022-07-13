import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Repository } from '../Models/Repo';

interface RepoProps {
  repos: Repository[];
}

const Filters: FC<RepoProps> = ({ repos }) => {
  const languages: string[] = repos
    .map((repo: Repository) => repo.language)
    .filter((language, index, self) => self.indexOf(language) === index);

  return (
    <FilterWrapper>
      <FilterLabel>Filter Repositories by Language:</FilterLabel>
      {languages.map((language, index) => (
        <StyledLink key={index} to={`/languages/${language}`}>
          {language}
        </StyledLink>
      ))}
    </FilterWrapper>
  );
};

const FilterWrapper = styled.div`
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  justify-content: flex-start;
`;

const FilterLabel = styled.p`
  margin: 15px 10px;
`;
const StyledLink = styled(Link)`
  margin: 40px 10px 10px 10px;
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;
  background-color: #ddd;
  color: #000;

  &:hover {
    background-color: #fff;
  }
`;
export default Filters;
