<template>
  <div>
    <input style="padding: 10px; margin-bottom: 10px;" type="text" v-model="title" placeholder="Заголовок"><br>
    <input style="padding: 10px;" type="text" v-model="body" placeholder="Контент"><br>
    <div style="margin-top: 20px;">
      <a class="btn_create" @click.prevent="store">Добавить</a>
    </div>
  </div>
  <div v-if="storedPost">
    <h3>Новый пост</h3>
    <div><strong>Title:</strong>  {{ storedPost.title }}</div>
    <div><strong>Body:</strong> {{ storedPost.body }}</div>

  </div>
</template>


<script>
export default {
  data() {
    return{
      title: '',
      body: '',
      storedPost: null
    }
  },
  methods: {
    store() {
      if (!this.title || !this.body) return

      axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: this.title,
        body: this.body
      })
          .then(res => {
            this.storedPost = res.data
            this.title = ''
            this.body = ''
          })
    }
  }
}
</script>


<style>
.btn_create{
  padding: 10px 15px;

  border: 1px solid #b5b5b5;
  background-color: #fff;
  color: #6a6a6a;
}
.btn_create:hover{
  cursor: pointer;
  color: #000;
  opacity: 0.5;
}
</style>