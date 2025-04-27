<script>
    let ip_flightID = '';

    let message = '';

    async function flightTakeoff() {
        try {
            const response = await fetch('/api/procedures/flight_takeoff', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ip_flightID })
            });

            const data = await response.json();
            if (response.ok) {
                message = 'Flight takeoff processed successfully!';
            } else {
                message = `Error: ${data.error}`;
            }
        } catch (err) {
            console.error(err);
            message = 'Failed to process flight takeoff.';
        }
    }
</script>

<h1>Flight Takeoff</h1>

<form on:submit|preventDefault={flightTakeoff}>
    <label>Flight ID:
        <input bind:value={ip_flightID} required />
    </label><br />

    <button type="submit">Takeoff Flight</button>
</form>

<p>{message}</p>
