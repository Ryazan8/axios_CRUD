<template>
  <div class="container">
    <div style="margin: 20px 0; ">
      <router-link class="btn_index" to="/index/create">Добавить</router-link>
    </div>

    <h2>Список элементов:</h2>
    <div>
      <div v-if="items">
        <div style="background: #CAE7FF;padding: 15px; margin: 15px; border: 1px solid #48b8b8 " v-for="item in items" :key="item.id">
          <div style="padding-bottom: 5px;"><strong>Title:</strong> {{ item.title }}</div>
          <div><strong>Body:</strong> {{ item.body }}</div>
          <button @click.prevent="remove">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      items: []
    };
  },
  mounted() {
    this.getItems()
  },
  methods: {
    getItems() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(res => {
            this.items = res.data;
          })
    },
    remove(index) {
      axios.delete('https://jsonplaceholder.typicode.com/posts')
          .then(res => {
            this.items.params.id = res.data
          })
    }
  }
};
</script>
<style>
.container{
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
.btn_index{
  text-decoration: none;
  color: #fff;
  font-size: 28px;
  border: 1px solid #6a6a6a;
  padding: 10px;
  transition: all .3s ease-in-out;
  border-radius: 5px;
}
.btn_index:hover{
  color: #000;
  background-color: #fff;
}
</style>