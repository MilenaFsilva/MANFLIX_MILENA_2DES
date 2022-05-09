<template>
  <div class="main">
    <div class="screen">
       <div class="img">
    <img src="https://raw.githubusercontent.com/andre-savedra/nuxt-fullstack/master/documentos/manflix.png" class="manflix">
    </div>
    </div>
    <div class="card">
      <Carousel :value="filmes[0]" :numVisible="4" :numScroll="4" :circular="true" :autoplayInterval="2000">
        <template #header>
          <p> FAVORITOS</p>
        </template>
     
        <template #item="slotProps">
          <div class="product-item">
            <div class="product-item-content">
              <div class="mb-3">
                <img
                  :src="$store.state.BASE_URL + slotProps.data.imagem"
                  :alt="slotProps.data.imagem"
                  class="product-image"
                />
                <p>{{slotProps.nome}}</p>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
     <div class="card">
      <Carousel :value="filmes[0]" :numVisible="4" :numScroll="4" :circular="false" :autoplayInterval="2000">
        <template #header>
          <p> FAVORITOS</p>
        </template>
     
        <template #item="slotProps">
          <div class="product-item">
            <div class="product-item-content">
              <div class="mb-3">
                <img
                  :src="$store.state.BASE_URL + slotProps.data.imagem"
                  :alt="slotProps.data.imagem"
                  class="product-image"
                />
                <p>{{slotProps.nome}}</p>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
     <div class="card">
      <Carousel :value="filmes[0]" :numVisible="4" :numScroll="4" :circular="true" :autoplayInterval="1000">
        <template #header>
          <p> FAVORITOS</p>
        </template>
     
        <template #item="slotProps">
          <div class="product-item">
            <div class="product-item-content">
              <div class="mb-3">
                <img
                  :src="$store.state.BASE_URL + slotProps.data.imagem"
                  :alt="slotProps.data.imagem"
                  class="product-image"
                />
                <p>{{slotProps.nome}}</p>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "filmes",
  middleware: "auth",
  layout: "standard",
  data() {
    return {
      filmes: [],
      favoritos:[],
    };
  },
  
  methods: {
    Filmes: async function() {
       await this.$axios.get(this.$store.state.BASE_URL + "/filmes/").then((e) => this.filmes.push(e.data));
    },

    Favoritos: async function() {
      //  await this.$axios.get(this.$store.state.BASE_URL + "/favoritos?id="+ this.$auth.$state.usuario.id + "/").then((e) => this.favoritos.push(e.data));
    }
    
  },
  
  created(){
      this.Filmes()
      this.Favoritos()
      console.log(this.$auth.$state.usuario);      
  }
}
</script>

<style lang="scss" scoped>
.product-item{
  background-color:black;

}

.mb-3{
    height:220px;
    width:auto;
    padding:5px;
    padding-top: 10px;

}
.manflix{

    height:auto;
    width:200px;
    padding-top: 10px;
   
    margin-right:2300px;
}

.img{
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content:center;

}
.main{
    background-color:black;
    width:100%;
    height: calc(100vh - 80px);
  
}

.screen{
  background-image: url("/stranger.png");
  height:525px;
  width:100%;
  background-image: no-repeat;
  background-size: cover;
  
}

.card{
  color:rgb(168, 38, 38);
  padding-left:10px;
  padding-right:10px;
  background-color: black;


}

.p-link{
  color:rgb(168, 38, 38);
  width:100px;
 
}

p{
  padding-left: 58px;
  font-size:25px;
}

</style>
  