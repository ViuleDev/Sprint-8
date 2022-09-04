<template>
  <div class="footer">
    <div>FOLLOW STAR WARS:</div>
    <div class="icons">
      <fa class="fa-icon" :icon="['fab', 'twitter']" />
      <fa class="fa-icon" :icon="['fab', 'youtube']" />
      <fa class="fa-icon" :icon="['fab', 'instagram']" />
      <fa class="fa-icon" :icon="['fab', 'facebook']" />
    </div>
    <div class="copyright">
      <sup>Powered by</sup>
      Guybrush Threepwood Solutions&#8482;
    </div>
    <div class="links">
      <a href="#">About Star Wars</a> | <a href="#">Privacy Policy</a> | <a href="#">Help Desk</a> | <a href="#">FAQ</a> |
      <a href="#">Contact Us</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  padding: 3rem;
  background: url("../assets/footerbg.png") center no-repeat;
  background-size: 10%;
}

.footer div {
  margin: 1rem 0;
}

.icons .fa-icon {
  margin: 0 10px;
  font-size: 1.5rem;
}

.copyright {
  opacity: 0.5;
}

.copyright sup {
  color: steelblue;
}

.links a {
  margin: 0 10px;
}
</style>
