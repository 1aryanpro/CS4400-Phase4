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
        "flight",
        "location",
        "passenger",
        "pilot",
        "pilot_licenses",
    ];

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
        "simulation_cycle",
    ];
</script>

<h1>Home Page</h1>
<div>
    <ul>
        <li>
            <h2>Views:</h2>
        </li>
        {#each views as view}
            <li><a href={`/views/${view}`}>{snakeToTitleCase(view)}</a></li>
        {/each}
    </ul>
    <ul>
        <li>
            <h2>Procedures:</h2>
        </li>
        {#each procedures as proc}
            <li>
                <a href={`/procedures/${proc}`}>{snakeToTitleCase(proc)}</a>
            </li>
        {/each}
    </ul>
</div>

