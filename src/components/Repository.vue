<template>
  <v-container fluid>
    <h1>Repository Details</h1>
    <v-row v-if="Object.keys(repository).length !== 0">
      <ul>
        <li>Name: {{ repository.name }}</li>
        <li>Description: {{ repository.description }}</li>
        <li>Stars: {{ repository.stargazers_count }}</li>
        <li>Forks: {{ repository.forks_count }}</li>
        <li>
          Language: {{ repository.language || "This repo has no language" }}
        </li>
        <li>
          <a target="_blank" :href="`${repository.html_url}`"> Link to repo</a>
        </li>
      </ul>
    </v-row>
    <p v-else>Loading...</p>
  </v-container>
</template>

<script type="text/javascript">
export default {
  name: "single-github-repo",
  data() {
    return {
      repository: {},
    };
  },
  created() {
    const repositoryName = this.$route.params.name;
    fetch(`https://api.github.com/repos/nefejames/${repositoryName}`)
      .then((response) => response.json())
      .then((data) => {
        this.repository = data;
      });
  },
};
</script>

<style scoped>
ul {
  margin-left: 2rem;
  margin-top: 2rem;
}

li {
  font-size: 1.3rem;
}
</style>
