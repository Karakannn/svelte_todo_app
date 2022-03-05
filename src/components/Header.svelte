<script>
    import { items } from "../store/stores";

    $: allItemsLength = $items.length;
    $: completedItemsLength = $items.filter((item) => item.completed).length;
</script>

<div class="header">
    <span>Mehmet's To-Do List</span>
    <span>{completedItemsLength}/{allItemsLength}</span>
</div>

<style>
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 20px;
        font-weight: bold;
        color: #ffffff;
        font-size: 1.5em;
        background: rgba(0, 0, 0, 0.1);
    }

    .header span:last-child {
        margin-left: 50px;
    }
</style>
