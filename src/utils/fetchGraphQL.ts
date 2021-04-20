type githubData = {
  data: {
    viewer: {
      name: string,
      bio: string,
    }
  }
}

async function fetchGraphQL(text: string, variables?: string):
 Promise<githubData> {
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
