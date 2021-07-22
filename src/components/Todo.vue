<template>
    <h3 class="py-3">Todo List</h3>
    <ul class="list-group">
        <li v-for="(todo,i) in todos" :key="i" class="list-group-item">{{ todo.name }}</li>
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
    setup(props) {

        console.log({ props: props.todos });

        return {}
    }
})
</script>