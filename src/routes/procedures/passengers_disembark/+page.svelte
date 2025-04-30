<script>
    let ip_flightID = '';

    let message = '';

    async function passengersDisembark() {
        try {
            const response = await fetch('/api/procedures/passengers_disembark', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ip_flightID })
            });

            const data = await response.json();
            if (response.success) message = "Passengers disembarked successfully!";
            else message = 'Error disembarking Passenger, something is wrong';
        } catch (err) {
            console.error(err);
            message = 'Failed to disembark passengers.';
        }
    }
</script>

<h1>Passengers Disembark</h1>

<form on:submit|preventDefault={passengersDisembark}>
    <label>Flight ID:
        <input bind:value={ip_flightID} required />
    </label><br />

    <button type="submit">Disembark Passengers</button>
</form>

<p>{message}</p>
