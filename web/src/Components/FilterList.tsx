import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Repository } from '../Models/Repo';
import Repo from './Repo';

interface RepoProps {
  repos: Repository[];
}

const FilterList: FC<RepoProps> = ({ repos }) => {
  const { language } = useParams();
  return (
    <div>
      {repos
        .filter((repo: Repository) => repo.language === language)
        .map((repo: Repository) => (
          <Repo key={repo.id} repo={repo} />
        ))}
    </div>
  );
};

export default FilterList;
