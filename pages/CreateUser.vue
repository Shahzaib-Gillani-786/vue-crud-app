<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col sm-8>
          <v-form>
            <v-text-field
              v-model="user.fname"
              label="fname"
              required
            ></v-text-field>
            <v-text-field
              v-model="user.lname"
              label="lname"
              required
            ></v-text-field>
            <v-text-field
              v-model="user.email"
              label="email"
              required
            ></v-text-field>
            <v-text-field
              v-model="user.username"
              label="username"
              required
            ></v-text-field>
            <v-file-input
              prepend-icon="mdi-camera"
              :v-model="user.avatar"
              color="white darken-4 "
              label="avatar"
              required
            >
            </v-file-input>
            <v-btn color="primary" class="mr-4" @click="create"> Submit </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>

    <v-snackbar v-model="snackbar" :timeout="2000" top color="primary">
      {{ text }}
    </v-snackbar>
    <!-- popup -->
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      user: {
        fname: "",
        lname: "",
        username: "",
        email: "",
        avatar: "",
      },
      snackbar: "",
      text: "",
    };
  },

  methods: {
    async create(callback) {
      await fetch("https://www.mecallapi.com/api/users/create", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.user),
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          if (response["status"] === "ok") {
            (this.snackbar = true), (this.text = response.message);
          } else {
            (this.snackbar = true), (this.text = response.message);
          }
        })
        .then(() => {
          this.$nuxt.$options.router.push("/");
        });
    },
  },
};
</script>