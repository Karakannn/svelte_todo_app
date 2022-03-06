<script>
    import { onMount } from "svelte";
    import { items } from "../store/stores";
    import { Item } from "./Item.svelte";

    import TodoApi from "../API/ToDoApi";

    function handleNewItem(e) {}

    function handleUpdate(e) {}

    function handleDelete(e) {}

    onMount(async () => {
        $items = await TodoApi.getAll();
    });
</script>

<div class="list-container">
    {#each $items as item (item)}
        <Item {...item} on:update(handleUpdate) on:delete(handleDelete) />
    {:else}
        <p class="list-status">No Items Exist</p>
    {/each}
</div>

<style>
    .list-container {
        padding: 15px;
    }

    .list-status {
        margin: 0;
        text-align: center;
        color: #ffffff;
        font-weight: bold;
        font-size: 1.1em;
    }
</style>
