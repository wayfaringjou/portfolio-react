import { githubBio, githubPinnedRepos } from '../types/github';

async function fetchGraphQL(
  text: string,
  variables?: string,
): Promise<githubBio> {
  const token = process.env.REACT_APP_GITHUB_AUTH_TOKEN;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // eslint-disable-next-line no-return-await
  return await response.json();
}

export async function fetchPinnedRepos(
  text: string,
  variables?: string,
): Promise<githubPinnedRepos> {
  const token = process.env.REACT_APP_GITHUB_AUTH_TOKEN;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // eslint-disable-next-line no-return-await
  return await response.json();
}

export default fetchGraphQL;
