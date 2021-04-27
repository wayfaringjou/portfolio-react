export type githubBio = {
  data: {
    viewer: {
      name: string,
      bio: string,
    }
  }
}

export type githubPinnedRepos = {
  data: {
    viewer: {
      pinnedItems: {
        edges: Array<{
          node: {
            name: string,
            description: string,
            homepageUrl: string,
            url: string,
            openGraphImageUrl: string,
            languages: {
              nodes: Array<{
                name: string,
              }>
            },
            repositoryTopics: {
              nodes: Array<{
                topic: {
                  name: string,
                }
              }>
            }
          }
        }>
      }
    }
  }
}
