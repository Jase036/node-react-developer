import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FilterList from './Components/FilterList';
import Filters from './Components/Filters';
import RepoList from './Components/RepoList';
import { Repository } from './Models/Repo';
import GlobalStyles from './GlobalStyles';

export function App() {
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    fetch('/repos/')
      .then((res) => res.json())
      .then((data) =>
        setRepoData(
          data.sort(
            (a: Repository, b: Repository) =>
              +new Date(b.created_at) - +new Date(a.created_at)
          )
        )
      );
  }, []);

  return (
    <div>
      <Router>
        <GlobalStyles />
        <Filters repos={repoData} />
        <Routes>
          <Route path="/" element={<RepoList repos={repoData} />} />
          <Route
            path="/languages/:language"
            element={<FilterList repos={repoData} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
