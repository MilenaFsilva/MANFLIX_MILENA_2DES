<template>
  
  <div
    class="main flex align-items-center justify-content-center flex-column w-screen"> 
    <img src="https://raw.githubusercontent.com/andre-savedra/nuxt-fullstack/master/documentos/manflix.png" class="manflix">
    <div
      class="p-4 login-container flex align-items-center justify-content-center flex-column"
    >
      <h2>Registra-se</h2><br>
      <p class="p-input-icon-left h-auto w-full bg-white">
        <i class="pi pi-user" />
        <InputText
          class="w-full"
          type="text"
          placeholder="Nome"
          v-model="user.name"
        />
      </p><br>
      <p class="p-input-icon-left h-auto w-full bg-white">
        <i class="pi pi-user" />
        <InputText
          class="w-full"
          type="text"
          placeholder="Usuário"
          v-model="user.passConfirm"
        />
      </p><br>
      <p class="p-input-icon-left h-auto w-full bg-white">
        <i class="pi pi-lock" />
        <InputText
          class="w-full"
          type="password"
          placeholder="Senha"
          v-model="user.password"
        />
      </p><br>
       <p class="p-input-icon-left h-auto w-full bg-white">
        <i class="pi pi-lock" />
        <InputText
          class="w-full"
          type="password"
          placeholder="Re - Senha"
          v-model="user.rePassword"
        />
      </p><br>

       <p class="p-input-icon-left h-auto w-full bg-white">
        <i class="pi pi-phone" />
        <InputText
          class="w-full"
          type="fone"
          placeholder="Telefone"
          v-model="user.telefone"
        />
      </p><br>
       <p class="p-input-icon-left h-auto w-full bg-white">
        <i class="pi pi-envelope" />
        <InputText
          class="w-full"
          type="mail"
          placeholder="Email"
          v-model="user.email"
        />
      </p><br>

      <p>
        <Button
          label="Acessar"
          class="p-button-raised p-button-secondary"
          v-on:click="sendRegister()"
        />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      user: {
        username: "",
        password: "",
        rePassword: "",
        email: "",
        fone: ""
      },
    };
  },
  methods: {
    sendRegister: function () {
     console.log(this.user);
     if(this.user.password === this.user.passConfirm)
     {
       registerUser(this.user)
     }
    },
    registerUser: async function(){
      const body = {
        username: user.username,
        password: user.password,
        email: user.email
      }

      this.$axios.post(this.$store.state.BASE_URL + "/api/v1/users/",
        body,
      ).then((response) => {
        console.log("Cadastro do user ok");
        console.log(response)
        this.user.idUser = response.data.id;

      }).catch((response) => {

        console.log("Cadastro do user errado");
        console.log(error);
        this.user = null;
      });

    },
    registerUsuarios: async function(){

    }
  },
};
</script>

<style lang="css" scoped>

 .main{
         
        background-image: url("https://store-images.s-microsoft.com/image/apps.47842.9007199266246365.2a2d31fe-dc82-41b6-9774-9ce54b027860.e16db4e0-8f09-444d-8119-15dc01401ba2?mode=scale&q=90&h=1080&w=1920");
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
    }
    .login-container{
        
        background-color: black; 
        color:white;
        height:650px;
        width: 450px;
        font-size: 25px;
        margin-bottom:100px;
        border-radius: 8px;
    } 

    .w-full {
        background-color: rgb(52, 51, 51);
        border:none;
        border-radius: 6px;
        height: 50px;
        width: 150px;
        color:white;
    }
    .p-button-raised{
        background-color: red;
        border:none;
        border-radius: 6px;
        height: 50px;
        font-size: 20px;
    }

    .pi-pi{
      color:white;
    }
    .manflix{
        background-color:black;
        height:auto;
        width:270px;
        padding:10px;
       margin-right: 1500px;
       margin-bottom:120px;
    }

</style>

