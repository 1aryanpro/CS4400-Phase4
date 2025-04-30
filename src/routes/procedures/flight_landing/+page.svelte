<script>
    let ip_flightID = '';

    let message = '';

    async function flightLanding() {
        try {
            const response = await fetch('/api/procedures/flight_landing', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ip_flightID })
            });

            const data = await response.json();
            if (response.success) message = "Flight landed successfully!";
            else message = 'Error landing Flight, something is wrong';
        } catch (err) {
            console.error(err);
            message = 'Failed to process flight landing.';
        }
    }
</script>

<h1>Flight Landing</h1>

<form on:submit|preventDefault={flightLanding}>
    <label>Flight ID:
        <input bind:value={ip_flightID} required />
    </label><br />

    <button type="submit">Land Flight</button>
</form>

<p>{message}</p>
