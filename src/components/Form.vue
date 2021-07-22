<template>
    <div class="card">
        <div class="card-body">
            <form action class="row">
                <div class="form-grop col-md-8 col-12">
                    <label for>Todo</label>
                    <input type="number" class="form-control" v-model.number="todo" />
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
    setup() {
        const todo = ref<string>("");
        return { todo }
    }
})
</script>