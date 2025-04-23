<script>
    import { snakeToTitleCase } from '$lib';

    export let data;

    let viewName = data.viewName;
    let viewData = data.viewData;
</script>

<h1>View: {snakeToTitleCase(viewName)}</h1>

{#if viewData && viewData.length > 0}
    <ul>
        {#each viewData as row}
            <li>{JSON.stringify(row)}</li>
        {/each}
    </ul>
{:else}
    <p>No data found.</p>
{/if}
