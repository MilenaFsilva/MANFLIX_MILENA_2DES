<template>
  <div>
    <header class="flex flex-row align-items-center justify-content-between">
      <!-- <a v-on:click="$router.push('/home')">Home</a>
            <a v-on:click="$router.push('/about')">About</a> -->

      <button
        class="pi pi-bars btnHamburguer"
        v-on:click="showSidebar = showSidebar ? false : true"
      />

  
      <Avatar
        class="avatarUser"
        :image="$store.state.BASE_URL + $store.state.usuario.foto"
        size="xlarge"
        shape="circle"
      />
      <!--se showsidebar for true ele vira false senão vira true-->
    </header>

    <Sidebar
      :visible.sync="showSidebar" 
      :dismissable="true"
      :baseZIndex="1000"
      :showCloseIcon="false"
      class="customSidebar"
    >
      <div
        v-for="(myButton, index) in buttonSidebar"
        :key="index"
        class="btnContainer"
      >
        <button
          v-on:click="
            () => {
              if (myButton.path === '/logout') $auth.logout();
              else $router.push(myButton.path);
            }
          "
        >
          <i :class="myButton.icon" />
          <span>{{ myButton.name }}</span>
        </button>
      </div>
    </Sidebar>

    <Nuxt />
    <footer></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSidebar: false,
      buttonSidebar: [
        {
          icon: "pi pi-home",
          name: "Home",
          path: "/home",
        },

        {
          icon: "pi pi-chevron-right",
          name: "Catálago",
          path: "/filmes",
        },
        {
          icon: "pi pi-sign-out",
          name: "Logout",
          path: "/logout",
        },
      ],
    };
  },
  methods: {},
  created() {
    console.log(this.$auth);
    this.$axios
      .get(this.$store.state.BASE_URL + "/usuarios?user=" + this.$auth.$state.user.id)
      .then((response) => {
        console.log("Deu certo!");
        console.log(response.data[0]);

        //aciona a action!
        this.$store.dispatch("SET_USER", response.data[0])

      })
      .catch((error) => {
        console.log("Deu ruim");
        console.log(error);

      })
  },
};
</script>

<style lang="scss" scoped>
$height-header: 80px;

header {
  width: 100%;
  height: 80px;
  background-color: var(--background-header);
  color: white;

  .avatarUser {
    margin-right: 30px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
  }

  .btnHamburguer {
    background-color: var(--background-header);
    color: white;
    border: none;
    width: 30px;
    margin-left: 15px;
    cursor: pointer;
    height: 100%;

    &:hover {
      background-color: var(--background-header-hover);
    }
  }

  // a{
  //     text-decoration: none;
  //     font-weight:bold;
  //     cursor:pointer;

  //     &:hover{
  //         color:rgb(148,53,53);
  //     }
  // }
}

.customSidebar {
  width: 10vw;
  height: calc(100vh - $height-header);
  display: absolute;
  top: 80px;
  left: 0;
  background-color: var(--background-sidebar);
  justify-content:space-between !important;
  align-items:center !important;
  display:flex !important;
  flex-direction: column !important;
}

.btnContainer {
  width: 100%;
  height:25vh;

  // background-color: var(--background-sidebar);
  margin-top: 20px;

  button {
    background-color: var(--background-sidebar);
    color: white;
    font-size: 25px;
    border: none;
    height:100px;
    cursor: pointer;

    i {
      font-size: 25px;
    }
    &:hover {
      background-color: var(--background-sidebar-hover);
    }
  }
  .customSidebar2{

   
    height:100vh;
  }
}
</style>
