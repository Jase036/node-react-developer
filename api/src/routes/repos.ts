import { Router, Request, Response } from 'express';

const importDynamic = new Function('modulePath', 'return import(modulePath)');

const fetch = async (...args: any[]) => {
  const module = await importDynamic('node-fetch');
  return module.default(...args);
};

import { Repo } from '../models/Repo';
import repoData from '../../data/repos.json';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  //Let's grab the json data first and filter it by the "fork" property so we can aggregate with the data coming from the github API data.
  const jsonRepoData = repoData.filter((repo: Repo) => repo.fork === false);

  const apiRepoDataFetch = await fetch(
    'https://api.github.com/users/silverorange/repos'
  );

  const apiData = await apiRepoDataFetch.json();

  const agrregateData = apiData
    .filter((repo: Repo) => repo.fork === false)
    .concat(jsonRepoData);

  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  res.json(agrregateData);
});
