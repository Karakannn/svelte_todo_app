<script>
    export let id, text, completed;
</script>

<div class="item">
    <input
        type="text"
        class="text-input"
        bind:value={text}
        readonly={completed}
    />
    <input type="checkbox" name="list-checkbox" class="completed-checkbox" bind:checked="{completed}">
</div>

<style>
</style>
