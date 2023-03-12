<template>
  <div id="app">
    <v-app>
      <div>
        <v-container fluid>
          <h1>Nefe's GitHub Repos</h1>
          <v-row no-gutters v-if="paginatedRepos.length !== 0">
            <v-col
              cols="12"
              sm="6"
              md="4"
              v-for="repo in paginatedRepos"
              :key="repo.id"
            >
              <v-card class="pa-2 ma-2" color="#e3f2fd">
                <router-link
                  :to="{ name: 'Repository', params: { name: repo.name } }"
                  >{{ repo.name }}</router-link
                >
                <v-chip color="green" class="ml-5" v-if="repo.language">
                  {{ repo.language }}
                </v-chip>
              </v-card>
            </v-col>
          </v-row>
          <p v-else>Loading...</p>
        </v-container>

        <div class="mt-4">
          <v-pagination
            v-model="page"
            :length="pages"
            @click="updatePage(page)"
          ></v-pagination>
        </div>
      </div>
    </v-app>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "github-repos",
  data() {
    return {
      page: 1,
      pageSize: 6,
      repoCount: 0,
      repositories: [],
      paginatedRepos: [],
    };
  },
  created() {
    this.initPage();
    this.updatePage(this.page);
    this.fetchGitHubRepos();
  },
  methods: {
    fetchGitHubRepos() {
      fetch(`https://api.github.com/users/nefejames/repos`)
        .then((response) => response.json())
        .then((data) => {
          this.repositories = data;
          this.initPage();
          this.updatePage(this.page);
          console.log(this.repositories);
        });
    },
    initPage: function () {
      this.repoCount = this.repositories.length;
      if (this.repoCount < this.pageSize) {
        this.paginatedRepos = this.repositories;
      } else {
        this.paginatedRepos = this.repositories.slice(0, this.pageSize);
      }
    },
    updatePage: function (pageIndex) {
      let start = (pageIndex - 1) * this.pageSize;
      let end = pageIndex * this.pageSize;
      this.paginatedRepos = this.repositories.slice(start, end);
      this.page = pageIndex;
    },
  },
  computed: {
    pages() {
      if (this.pageSize == null || this.repoCount == null) return 0;
      return Math.ceil(this.repoCount / this.pageSize);
    },
  },
};
</script>
