<template>
  <div class="hero">
    <div class="hero-header">
      <h1>“In a dark place we find ourselves and a little more knowledge lights our way.”</h1>
      <p>Yoda, Star Wars Episode III: Revenge Of The Sith</p>
    </div>
  </div>

  <div class="home">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ea error praesentium, veritatis ut, dolorum vitae hic nesciunt eligendi corporis quos voluptatem! Incidunt esse quidem, praesentium obcaecati sint provident voluptas totam quibusdam animi, dolorem dolorum, voluptatibus veritatis repellendus deleniti ipsum tempora accusantium distinctio cum nulla tempore a? Itaque neque animi dolor atque odit mollitia officiis! Totam rem rerum dolore sed. Nemo fugiat, eligendi placeat
      voluptate nobis consectetur dignissimos esse atque iste error, eum voluptates architecto commodi doloribus. Facilis voluptatum odit cum consequuntur amet. Aspernatur, totam perferendis officia praesentium error unde culpa cum sunt exercitationem quam suscipit architecto possimus, fugit laudantium inventore esse quas consequatur rem eaque dolore eius dicta! Vel doloremque sapiente illum possimus labore, a quibusdam illo. Dignissimos, voluptatem quos aliquam fugit doloremque nihil dolore
      quas ratione quaerat debitis error dolores, nulla tempore laborum perspiciatis aperiam sequi! Aliquid, amet similique maxime ut molestiae excepturi, dolor cumque blanditiis iusto assumenda rem ad. Cumque maiores eligendi aspernatur iusto quas quasi magnam, ex, animi expedita eveniet molestias eaque harum optio. Animi libero, enim minima natus velit repellat iste, inventore provident assumenda, fuga distinctio saepe hic sunt adipisci aliquam vero tempora nam! Enim inventore qui unde aperiam
      voluptatem hic obcaecati consequatur sed.
    </p>
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ea error praesentium, veritatis ut, dolorum vitae hic nesciunt eligendi corporis quos voluptatem! Incidunt esse quidem, praesentium obcaecati sint provident voluptas totam quibusdam animi, dolorem dolorum, voluptatibus veritatis repellendus deleniti ipsum tempora accusantium distinctio cum nulla tempore a? Itaque neque animi dolor atque odit mollitia officiis! Totam rem rerum dolore sed. Nemo fugiat, eligendi placeat
      voluptate nobis consectetur dignissimos esse atque iste error, eum voluptates architecto commodi doloribus. Facilis voluptatum odit cum consequuntur amet. Aspernatur, totam perferendis officia praesentium error unde culpa cum sunt exercitationem quam suscipit architecto possimus, fugit laudantium inventore esse quas consequatur rem eaque dolore eius dicta! Vel doloremque sapiente illum possimus labore, a quibusdam illo. Dignissimos, voluptatem quos aliquam fugit doloremque nihil
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>

<style>
.hero {
  background: url("../assets/bg1.jpg") center/cover;
  height: 50vh;
  display: flex;
  align-items: center;
  padding: 1.5rem;
}

.hero-header h1 {
  max-width: 700px;
  text-align: left;
  color: white;
  font-size: 2.5rem;
  font-weight: 300;
}

.hero img {
  width: 80px;
}

.home {
  text-align: left;
  padding: 1.5rem;
  background: #131515;
}

.home h1 {
  margin: 0 1rem;
}

.home p {
  font-size: 1.2rem;
  line-height: 1.4;
}
</style>
