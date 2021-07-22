<template>
    <h3 class="py-3">Todo List</h3>
    <ul class="list-group">
        <li v-for="(todo,i) in todos" :key="i" class="list-group-item text-left">
            <span class="float-start">{{ todo.name }}</span>
            <span>Status: {{ todo.status }}</span>
            <div class="btn-group float-end">
                <button class="btn btn-primary btn-sm" @click="makeFinish(todo.id)">Finish</button>
                <button class="btn btn-info btn-sm" @click="confirmDelete(todo.id)">Delete</button>
            </div>
        </li>
    </ul>
</template>

<script lang="ts">

import { defineComponent, reactive, toRefs, PropType } from "@vue/runtime-core";

import { ItemList, Item } from "../model/todo"

export default defineComponent({
    props: {
        todos: {
            type: Array as PropType<Item[]>,
            default: []
        }
    },
    setup(props, { emit }) {

        console.log({ props: props.todos });

        const makeFinish = (id: String): void => {
            emit("finishTodo", id)
        }

        const confirmDelete = (id: String): void => {
            emit("deleteTodo", id)
        }
        return { makeFinish, confirmDelete }
    }
})
</script>