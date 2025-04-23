<script>
    import { onMount } from "svelte";

    let airplanes = [];

    onMount(async () => {
        const res = await fetch("/api/test");
        airplanes = await res.json();
    });
</script>

<h1>Airplanes</h1>
<ul>
    {#each airplanes as plane}
        <li>{plane.seat_capacity}</li>
    {/each}
</ul>

