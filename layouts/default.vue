<template>
  <v-app>
    <HeaderBar />
    <v-main>
      <client-only>
        <Nuxt />
      </client-only>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <v-snackbar
      v-model="snackbar_error" :timeout="2000" top
      color="red accent-2"
    >
      {{ text }}
    </v-snackbar>
    <v-snackbar  v-model="snackbar" :timeout="2000" top color="primary">
      {{ text }}
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      fixed: false,
      snackbar: "",
      text: "",
      snackbar_error:""
    };
  },

  created() {
    this.$nuxt.$on("success", (message,bol) => {
        (this.text = message),
        (this.snackbar = bol)
    });
    this.$nuxt.$on("error", (message,bol) => {
        (this.text = message),
        (this.snackbar_error = bol)
    });
  },
};
</script>
