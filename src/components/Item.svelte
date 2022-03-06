<script>
    import { createEventDispatcher } from "svelte";

    export let id, text, completed;

    const dispatch = createEventDispatcher();

    function triggerUpdate() {
        dispatch("update", { id, text, completed });
    }

    function handleDeleteItem() {
        const yes = confirm("Are you sure you wish to delete this item?")

        if(yes) {
            dispatch("delete", id)
        }
    }
</script>

<div class="item" class:completed on:dblclick={handleDeleteItem}>
    <input
        type="text"
        class="text-input"
        bind:value={text}
        on:keyup={(key, target) => key === "Enter" && target.blur()}
        on:blur={() => triggerUpdate()}
        readonly={completed}
    />
    <input
        type="checkbox"
        name="list-checkbox"
        class="completed-checkbox"
        bind:checked={completed}
        on:change={() => triggerUpdate()}
    />
</div>

<style>
    .item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        background: #ffffff;
    }

    .item.completed {
        background: #dddddd;
    }

    .item.completed .text-input {
        color: #555555;
        text-decoration: line-through;
    }

    .item:focus-within {
        background: rgba(255, 255, 255, 0.8);
    }

    .text-input {
        flex-grow: 1;
        background: none;
        border: none;
        outline: none;
        font-weight: 500;
        font-size: 1em;
    }

    .completed-checkbox {
        margin-left: 15px;
    }
</style>
