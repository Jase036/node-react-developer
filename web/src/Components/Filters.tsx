import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Repository } from '../Models/Repo';

interface RepoProps {
  repos: Repository[];
}

const Filters: FC<RepoProps> = ({ repos }) => {
  const languages: string[] = repos
    .map((repo: Repository) => repo.language)
    .filter((language, index, self) => self.indexOf(language) === index);
  //target in tsconfig indicates ES5 so mapped and filtered instead of spreading a new Set from the map.

  return (
    <FilterWrapper>
      <FilterLabel>Filter Repositories by Language:</FilterLabel>
      {languages.map((language, index) => (
        <StyledLink key={index} to={`/languages/${language}`}>
          {language}
        </StyledLink>
      ))}
      <StyledLink to={`/`}>View All</StyledLink>
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
const StyledLink = styled(NavLink)`
  margin: 40px 10px 10px 10px;
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;
  background-color: #ddd;
  color: #000;

  &:hover,
  &.active {
    background-color: #fff;
  }
`;
export default Filters;
