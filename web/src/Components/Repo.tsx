import { FC } from 'react';
import { Repository } from '../Models/Repo';

interface RepoProps {
  repo: Repository;
}

const Repo: FC<RepoProps> = ({ repo }) => {
  return (
    <div>
      <p>{repo.name}</p>
      <p>{repo.id}</p>
    </div>
  );
};

export default Repo;
