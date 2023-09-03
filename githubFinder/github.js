class Github {
  constructor() {
    this.client_id = "clientid";
    this.client_secret = "key";
    this.repos_count = 10;
    this.repos_sort = "asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(`api`);

    const repoResponse = await fetch(`api`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    console.log(repos);

    return {
      profile,
      repos,
    };
  }
}
export default Github;
