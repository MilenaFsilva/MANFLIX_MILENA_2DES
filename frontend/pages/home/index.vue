<template>

  <div class="main">
    <div class="letter">
      <h1>Filmes, séries e muito mais.</h1>
      <h1>Sem limites.</h1>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  layout: "standard",
  methods: {},
};
</script>

<style lang="scss" scoped>
.main{
  background-image: url("https://files.tecnoblog.net/wp-content/uploads/2018/12/cartoes-netflix.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 91.5vh;
  display:flex;
  align-items: center;
  justify-content:center;
}

.letter{

  font-size:40px;
  padding-top: 380px;
  text-align: center;
  color:rgb(255, 255, 255);
  font-weight: bold;
  cursor: none;

}

.p-link{
  background-color:black;
}

</style>


