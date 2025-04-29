<script>
    import { snakeToTitleCase } from '$lib';

    export let data;

    let viewName = data.viewName;
    let viewData = data.viewData;
</script>

<style>
    @import './tableStyles.css';
</style>

<h1>View: {snakeToTitleCase(viewName)}</h1>

{#if viewData && viewData.length > 0}
    <table class="styled-table">
        <thead>
            <tr>
                {#each Object.keys(viewData[0]) as key}
                    <th>{snakeToTitleCase(key)}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each viewData as row}
                <tr>
                    {#each Object.keys(row) as key}
                        <td>{row[key]}</td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
{:else}
    <p>No data available to display.</p>
{/if}