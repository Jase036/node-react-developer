import { FC } from 'react';
import { Repository } from '../Models/Repo';
import Repo from './Repo';

interface RepoProps {
  repos: Repository[];
}

const RepoList: FC<RepoProps> = ({ repos }) => {
  return (
    <div>
      {repos.map((repo: Repository) => (
        <Repo key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;
