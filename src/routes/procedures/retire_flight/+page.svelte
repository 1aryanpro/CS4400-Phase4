<script>
    let ip_flightID = '';

    let message = '';

    async function retireFlight() {
        try {
            const response = await fetch('/api/procedures/retire_flight', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ip_flightID })
            });

            const data = await response.json();
            if (response.ok) {
                message = 'Flight retired successfully!';
            } else {
                message = `Error: ${data.error}`;
            }
        } catch (err) {
            console.error(err);
            message = 'Failed to retire flight.';
        }
    }
</script>

<h1>Retire Flight</h1>

<form on:submit|preventDefault={retireFlight}>
    <label>Flight ID:
        <input bind:value={ip_flightID} required />
    </label><br />

    <button type="submit">Retire Flight</button>
</form>

<p>{message}</p>
