<template>
    <div class="card">
        <div class="card-body">
            <form @submit.prevent="sendTodo()" class="row">
                <div class="form-grop col-md-8 col-12">
                    <label for>Todo</label>
                    <input type="text" class="form-control" v-model="todo" required />
                </div>
                <div class="col-md-4 col-12 pt-4">
                    <button type="submit" class="btn btn-success w-100">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "@vue/runtime-core";

export default defineComponent({
    setup(props, { emit }) {
        const todo = ref<string>("");

        const sendTodo = (): void => {
            console.log("todo", todo.value);

            emit("saveTodo", todo.value)
        }
        return { todo, sendTodo }
    }
})
</script>