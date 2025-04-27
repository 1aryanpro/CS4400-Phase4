<script>
    let ip_flightID = '';

    let message = '';

    async function passengersBoard() {
        try {
            const response = await fetch('/api/procedures/passengers_board', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ip_flightID })
            });

            const data = await response.json();
            if (response.ok) {
                message = 'Passengers boarded successfully!';
            } else {
                message = `Error: ${data.error}`;
            }
        } catch (err) {
            console.error(err);
            message = 'Failed to board passengers.';
        }
    }
</script>

<h1>Passengers Board</h1>

<form on:submit|preventDefault={passengersBoard}>
    <label>Flight ID:
        <input bind:value={ip_flightID} required />
    </label><br />

    <button type="submit">Board Passengers</button>
</form>

<p>{message}</p>
