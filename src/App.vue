<template>
  <div id="app">

     <progbar></progbar>
  <div class="ds42-main-grid">    
    <a class="toggle open" href="#ds42-nav"><img src="./images/menu.svg" alt="menu icon"/></a>
    <div id="ds42-nav">
  <navigationcomp></navigationcomp>
  </div>
  <div class="ds42-body">
  <transition name="moveInUp">
  <router-view/>
  </transition>
  </div>
  </div>

  </div>
</template>
<script>

export default {
  name: 'App'
}
</script>

<script>
import navigationcomp from './components/navigationcomp';
import progbar from './components/progbar';

export default {
  components: {
    navigationcomp,
    progbar
  }
}

</script>



<style>

@import './assets/ds-42.css';

.moveInUp-enter-active{
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}
.moveInUp-leave-active{
  animation: moveInUp .3s ease-in;
}
@keyframes moveInUp{
 0%{
  transform: translateY(0);
 }
  100%{
  transform: translateY(-400px);
 }
}
</style>
