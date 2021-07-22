<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <Form />
      </div>
      <div class="col-12 mt-5">
        <Todo :todos="todoList.data" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { v4 as uuidv4 } from 'uuid';
// import HelloWorld from './components/HelloWorld.vue'
import Form from "./components/Form.vue"
import Todo from "./components/Todo.vue"

import { ItemList } from "./model/todo"

export default defineComponent({
  name: 'App',
  components: {
    Form,
    Todo
  },
  setup() {
    const todoList = reactive<ItemList>({
      total: 0,
      data: []
    })

    setTimeout(() => {
      const data = [...Array(5)].map((e, i) => {
        return {
          id: uuidv4(),
          name: `todo ${i}`,
          status: i % 2 == 0
        }
      })

      todoList.data = data
      todoList.total = data.length
    }, 3000)

    return { todoList }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
