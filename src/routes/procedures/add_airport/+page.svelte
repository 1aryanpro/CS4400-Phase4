<script>
    let ip_airportID = '';
    let ip_airport_name = '';
    let ip_city = '';
    let ip_state = '';
    let ip_country = '';
    let ip_locationID = '';

    let message = '';

    async function addAirport() {
        try {
            const response = await fetch('/api/procedures/add_airport', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ip_airportID,
                    ip_airport_name,
                    ip_city,
                    ip_state,
                    ip_country,
                    ip_locationID
                })
            });

            const data = await response.json();
            if (response.success) message = "Airport added successfully!";
            else message = 'Error adding Airport, something is wrong';
        } catch (err) {
            console.error(err);
            message = 'Failed to add airport.';
        }
    }
</script>

<h1>Add Airport</h1>

<form on:submit|preventDefault={addAirport}>
    <label>Airport ID:
        <input bind:value={ip_airportID} placeholder="e.g., ATL" required maxlength="3" />
    </label><br />

    <label>Airport Name:
        <input bind:value={ip_airport_name} required />
    </label><br />

    <label>City:
        <input bind:value={ip_city} required />
    </label><br />

    <label>State:
        <input bind:value={ip_state} required />
    </label><br />

    <label>Country Code:
        <input bind:value={ip_country} placeholder="e.g., USA" required maxlength="3" />
    </label><br />

    <label>Location ID:
        <input bind:value={ip_locationID} placeholder="e.g., port_##" required />
    </label><br />

    <button type="submit">Add Airport</button>
</form>

<p>{message}</p>
