<template>
  <v-app>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">ID</th>
            <th class="text-left">Pic</th>
            <th class="text-left">Fname</th>
            <th class="text-left">Lname</th>
            <th class="text-left">Username</th>
            <th class="text-left">Edit</th>
            <th class="text-left">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in users" :key="item.name">
            <td>{{ item.id }}</td>
            <td>
              <v-avatar><img :src="item.avatar" alt="" /></v-avatar>
            </td>
            <td>{{ item.fname }}</td>
            <td>{{ item.lname }}</td>
            <td>{{ item.username }}</td>
            <!-- update modal -->
            <td>
              <v-col cols="auto">
                <v-dialog transition="dialog-top-transition" max-width="600">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="light-green darken-3"
                      v-bind="attrs"
                      v-on="on"
                      @click="GetUser(item.id)"
                      >Edit</v-btn
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="primary" dark
                        >Opening from the top</v-toolbar
                      >
                      <!-- form in modal -->
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col sm-8>
                              <v-form>
                                <v-text-field
                                  v-model="user.id"
                                  label="id"
                                  required
                                  v-if="user.id"
                                ></v-text-field>
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
                                  v-model="user.username"
                                  label="username"
                                  required
                                ></v-text-field>
                                <v-text-field
                                  v-model="user.avatar"
                                  label="avatar"
                                  required
                                ></v-text-field>
                                <v-btn
                                  color="success"
                                  class="mr-4"
                                  @click="UserUpdate"
                                >
                                  {{ user.id ? "Edit" : "Submit" }}
                                </v-btn>
                              </v-form>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <!-- form in modal -->
                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-col>
            </td>
            <!-- update modal -->
            <td>
              <v-btn color="red" @click="UserDelete(item.id)">Delete</v-btn>
            </td>
          </tr>
        </tbody>

        <v-snackbar v-model="snackbar" :timeout="2000" top color="primary">
          {{ text }}
        </v-snackbar>
      </template>
    </v-simple-table>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      users: [],
      user: {
        id: "",
        fname: "",
        lname: "",
        username: "",
        avatar: "",
      },
      snackbar: "",
      text: "",
    };
  },

  // fetch data
  async fetch() {
    this.users = await this.$axios.$get("https://www.mecallapi.com/api/users");
  },
  // fetch data
  methods: {
    UserDelete(id) {
      var data = {
        id: id,
      };
      fetch("https://www.mecallapi.com/api/users/delete", {
        method: "DELETE",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response["status"] === "ok") {
            (this.snackbar = true), (this.text = response.message);
          } else {
            (this.snackbar = true), (this.text = response.message);
          }
        })
        .then(() => {
          this.refresh();
        });
    },

    async GetUser(id) {
      await this.$axios
        .$get(`https://www.mecallapi.com/api/users/${id}`)
        .then((res) => {
          this.user.id = res.user.id;
          this.user.fname = res.user.fname;
          this.user.lname = res.user.lname;
          this.user.username = res.user.username;
          this.user.avatar = res.user.avatar;
        });
    },

    async UserUpdate() {
      await fetch("https://www.mecallapi.com/api/users/update", {
        method: "PUT",
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

    refresh() {
      this.$nuxt.refresh();
    },
  },
};
</script>