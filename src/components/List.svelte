<script>
    import { onMount } from "svelte";
    import { items } from "../store/stores";
    import Item from "./Item.svelte";
    import NewItem from "./NewItem.svelte";
    import { v4 as uuidv4 } from "uuid";

    import TodoApi from "../API/ToDoApi";

    function handleNewItem(e) {
        $items = [
            {
                id: uuidv4(),
                text: e.detail,
                completed: false,
            },
            ...$items,
        ];

        TodoApi.save($items);
    }

    function handleUpdate(e) {
        const index = $items.findIndex((item) => item.id === e.detail.id);
        $items[index] = e.detail;

        TodoApi.save($items);
    }

    function handleDelete(e) {
        $items = $items.filter((item) => item.id !== e.detail);
        TodoApi.save($items);
    }

    let itemSorted = [];

    $: {
        itemSorted = [...$items];
        itemSorted.sort((a, b) => {
            if (a.completed && b.completed) return 0;
            if (a.completed) return 1;
            if (b.completed) return -1;
        });
    }

    onMount(async () => {
        $items = await TodoApi.getAll();
    });
</script>

<div class="list-container">
    <NewItem on:newItem={handleNewItem} />
    {#each itemSorted as item (item)}
        <Item {...item} on:update={handleUpdate} on:delete={handleDelete} />
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
