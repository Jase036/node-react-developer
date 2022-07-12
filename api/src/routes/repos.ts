import { Router, Request, Response } from 'express';
import { Repo } from '../models/Repo';
import repoData from '../../data/repos.json';

//eslint-disable-next-line
const importDynamic = new Function('modulePath', 'return import(modulePath)');

const fetch = async (...args: any[]) => {
  const module = await importDynamic('node-fetch');
  return module.default(...args);
};

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  //Let's grab the json data first and filter it by the "fork" property so we can aggregate with the data coming from the github API data.
  const jsonRepoData = repoData.filter((repo: Repo) => repo.fork === false);

  //Fetch the repo data from Github's API then run the json method on the response object
  const apiRepoDataFetch = await fetch(
    'https://api.github.com/users/silverorange/repos'
  );

  const apiData = await apiRepoDataFetch.json();

  //We filter the data from the api and then aggregate the json file data for the endpoint response.
  const agrregateData = apiData
    .filter((repo: Repo) => repo.fork === false)
    .concat(jsonRepoData);

  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  res.json(agrregateData);
});
