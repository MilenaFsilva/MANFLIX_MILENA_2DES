<template>
<div class="main">
  <img src="https://raw.githubusercontent.com/andre-savedra/nuxt-fullstack/master/documentos/manflix.png" class="manflix">
  <div
    
    class="
    flex align-items-center
    justify-content-center flex-column w-screen"
  >
    
    <div
      class="p-4 
      login-container 
      flex align-items-center 
      justify-content-center flex-column"
    >
      <h2>Entrar</h2>
      <br><br>
      <p class="p-input-icon-left h-auto w-full">
        <i class="pi pi-user" />
        <InputText class="w-full" type="text" placeholder="Usuário"
        v-model="user.username"/>
      </p><br>
      <p class="p-input-icon-left h-auto w-full">
        <i class="pi pi-lock"/>
        <InputText class="w-full" type="password" placeholder="Senha"
        v-model="user.password"/>
      </p>
        <br><br>   
      <p>
        <Button label="Entrar" 
        class="p-button-raised p-button-secondary"
        v-on:click="sendLogin()"/>
        
      </p>  <br><br> 
      <p>Novo por aqui? <a href="/register">Assina agora!</a></p> 
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data(){
    return{
      user:{
        username: '',
        password: ''
      }
    }
  },
  methods:{
    sendLogin: function(){
      if(this.user.username && this.user.password)
      {
        this.$auth.loginWith(
          "local", {data: this.user}
        ).then(()=>{
          alert("Usuário logado!");
        })
      }
      else{
        alert("Preencha os campos necessário seu Otário!");
      }
    }
  }
};
</script>

<style lang="scss" scoped>

    .main{
         
        background-image: url("https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png");
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
    }
    .login-container{
        opacity: .8;
        background-color: black; 
        color:white;
        height:600px;
        width: 500px;
        font-size: 25px;
        margin-top:140px;
        border-radius: 8px;
    } 

    .w-full {
        background-color: rgb(53, 52, 52);
        border:none;
        border-radius: 6px;
        height: 50px;
        color:white;
        width:30px;
    }
    .p-button-raised{
        background-color: red;
        border:none;
        border-radius: 6px;
        height: 50px;
        font-size: 20px;
    }
    .manflix{
        height:auto;
        width:300px;
        padding:30px;
    }

    p{
        font-size:18px;
    }

    a{
        color:gray;
    }

    .pi.pi-user{
        color:white;
    }
    
    .pi.pi-lock{
        color:white;
    }


</style>