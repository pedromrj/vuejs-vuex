<template>
  <div id="app">
    <barra-navegacao/>
    <router-view/>
  </div>
</template>

<script>
import BarraNavegacao from '@/components/BarraNavegacao.vue';

export default {
  components: {
    BarraNavegacao
  }
}
</script>


<style>
.navbar {
  background: #27ae60;
}
.navbar-bytebank a {
  color: #fff;
}
.navbar-bytebank a:hover {
  color: #000;
}
</style>
