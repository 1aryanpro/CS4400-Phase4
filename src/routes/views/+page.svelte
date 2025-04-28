<script>
    import { snakeToTitleCase } from "$lib";

    let views = [
        "flights_in_the_air",
        "flights_on_the_ground",
        "people_in_the_air",
        "people_on_the_ground",
        "route_summary",
        "alternative_airports",
        "person",
        "airplane",
        "airport",
    ];
</script>
<style>
    @import '../viewsStyles.css';
</style>

<h1>Available Views</h1>
<ul>
    {#each views as view}
        <li><a href={`/views/${view}`}>{snakeToTitleCase(view)}</a></li>
    {/each}
</ul>
