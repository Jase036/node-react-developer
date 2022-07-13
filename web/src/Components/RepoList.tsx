import { FC } from 'react';
import { Repository } from '../Models/Repo';
import Repo from './Repo';

interface RepoProps {
  repos: Repository[];
}

const RepoList: FC<RepoProps> = ({ repos }) => {
  return (
    <div>
      {repos
        .sort(
          (a: Repository, b: Repository) =>
            +new Date(b.created_at) - +new Date(a.created_at)
        )
        .map((repo: Repository) => (
          <Repo key={repo.id} repo={repo} />
        ))}
    </div>
  );
};

export default RepoList;
