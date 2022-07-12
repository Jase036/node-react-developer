import { useEffect, useState, VFC } from 'react';
import { Repository } from '../Models/Repo';
import Repo from './Repo';

const RepoList: VFC = () => {
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    fetch('/repos/')
      .then((res) => res.json())
      .then((data) => setRepoData(data));
  }, []);

  return (
    <div>
      {repoData.map((repo: Repository) => (
        <Repo key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;
