<template>
  <v-app>
    <v-app-bar absolute color="" fixed app>
      <v-toolbar-title>Nuxt Crud App</v-toolbar-title>
      <NuxtLink to="/CreateUser"
        ><v-btn absolute right top color="blue lighten-1">Create user</v-btn>
      </NuxtLink>
    </v-app-bar>
    <v-main>
      <client-only>
        <Nuxt />
      </client-only>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      fixed: false,
    };
  },
};
</script>
