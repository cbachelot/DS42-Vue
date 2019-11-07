
<template>
<div class="navigationcomp">
    <a class="toggle close nav-close-icon" href="#"><img src="../images/close-circle.svg" alt="close icon"/></a>
    <div>
    <img class="nav-logo" style="min-width:270px; padding:15px; height:auto;" alt="Design System 42" src="../images/42-ph-logo.svg">
    </div>
<nav class="nav-effect">
<div class="ds42-nav-title">Design System Forty Two</div>
<router-link  to="/">DS 42 Overview</router-link>
<router-link  to="/resources">Resources</router-link>
<hr>
<div class="ds42-nav-title">Foundations</div>
<router-link  to="/foundations">Foundations Overview</router-link>
<router-link  to="/colors">Colors</router-link>
</nav>
</div>
</template>
<script>
export default{
  name: 'navigationcomp',
  data () {
    return {
      title: 'navigationcomp'
    }
  }
}
</script>
