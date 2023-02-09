<template>
  <!-- <h1>current Page : {{ currentPage }}</h1>
  <h5>{{ path }}</h5> -->

  <keep-alive>
    <component :is="activeComponent" v-bind="currentProperties" />
  </keep-alive>
  <!--  <router-view />-->
</template>

<script>
import { computed, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "DynamicContentComponent",
  components: {
    HomeComponent: defineAsyncComponent(() =>
      import("@/views/Template/Base/Home")
    ),
    CategoryComponent: defineAsyncComponent(() =>
      import("@/views/Template/Pages/Category")
    ),

    LoginComponent: defineAsyncComponent(() => 
      import("@/views/Account/Login")
    ),

    ProfileComponent: defineAsyncComponent(() => 
      import("@/views/Account/Profile")
    ),

    RegisterComponent: defineAsyncComponent(() =>
      import("@/views/Account/Register")
    ),
    BuildComponent: defineAsyncComponent(() =>
      import("@/views/Template/Pages/Build")
    ),
    MythologyComponent: defineAsyncComponent(() =>
      import("@/views/Template/Pages/Mythology")
    ),
    MusicComponent: defineAsyncComponent(() =>
      import("@/views/Template/Pages/Music")
    ),
    SearchComponent: defineAsyncComponent(() =>
      import("@/views/Template/Pages/Search")
    ),
    ManifestoComponent: defineAsyncComponent(() =>
      import("@/views/Template/Pages/Manifesto")
    ),
    ManualComponent: defineAsyncComponent(() =>
      import("@/views/Template/Pages/Manual")
    ),
  },
  data() {
    return {
      currentComponent: null,
      currentPath: "null",
    };
  },
  setup() {
    const route = useRoute();
    const path = computed(() => route.path);

    const currentPage = computed(() => {
      return path.value.split("/")[1];
    });

    const activeComponent = computed(() => {
      // console.log(checkPathToGetPage);
      if (currentPage.value === "home") {
        return "HomeComponent";
      }
      if (currentPage.value === "login") {
        return "LoginComponent";
      }
      if (currentPage.value === "register") {
        return "RegisterComponent";
      }
      if (currentPage.value === "page") {
        return "CategoryComponent";
      }
      if (currentPage.value === "build") {
        return "BuildComponent";
      }
      if (currentPage.value === "mythology") {
        return "MythologyComponent";
      }

      if (currentPage.value === "music") {
        return "MusicComponent";
      }

      if (currentPage.value === "profile") {
        return "ProfileComponent";
      }

      if (currentPage.value === "search") {
        return "SearchComponent";
      }

      if (currentPage.value === "manifesto") {
        return "ManifestoComponent";
      }

      if (currentPage.value === "manual") {
        return "ManualComponent";
      }

      return "NULLLL";
    });

    return {
      path,
      activeComponent,
    };
  },
  created() {
    this.$store.dispatch("data/setCurrentPath", this.$route.path);
    this.getComponent();
    // this.$watch(
    //   () => this.$route.params,
    //   (toParams, previousParams) => {
    //     console.warn("toParams :", toParams);
    //     console.warn("previousParams :", previousParams);
    //   }
    // );
  },
  updated() {
    this.$store.dispatch("data/setCurrentPath", this.$route.path);
  },
  computed: {
    currentProperties() {
      // let t = "e";
      // if (t === "CategoryComponent") {
      //   return { categories: "getSlug" };
      // }
      return null;
    },
    currentPage() {
      return this.$store.getters["data/getCurrentPage"];
    },
  },
  methods: {
    getComponent() {
      console.log(this.currentPage);
    },
  },
};
</script>
