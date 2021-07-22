<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <Form @saveTodo="add" />
      </div>
      <div class="col-12 mt-5">
        <Todo :todos="todoList.data" @finishTodo="finish" @deleteTodo="del" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue'
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

    const add = (name: String): void => {
      // console.log("add new", name);
      const list = todoList.data


      list.push({ id: uuidv4(), name, status: false })
      todoList.data = list
    }

    const finish = (id: String): void => {
      const list = todoList.data.map(e => {
        if (e.id === id)
          e.status = true
        return e
      })
      todoList.data = list
    }
    
    const del = (id: String): void => {
      const list = todoList.data.filter(e => e.id !== id)
      todoList.data = list
    }

    watch(() => todoList.data, (after, before) => {
      console.log("wathc data", { after, before });

    })
    return { todoList, add, finish, del }
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
