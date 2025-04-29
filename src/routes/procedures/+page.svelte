<script>
    import { snakeToTitleCase } from "$lib";

    let procedures = [
        "add_airplane",
        "add_airport",
        "add_person",
        "grant_or_revoke_pilot_license",
        "offer_flight",
        "flight_landing",
        "flight_takeoff",
        "passengers_board",
        "passengers_disembark",
        "assign_pilot",
        "recycle_crew",
        "retire_flight",
        "simulation_cycle"
    ];
</script>

<h1>Available Procedures</h1>

<ul>
    {#each procedures as proc}
        <li><a href={`/procedures/${proc}`}>{snakeToTitleCase(proc)}</a></li>
    {/each}
</ul>
