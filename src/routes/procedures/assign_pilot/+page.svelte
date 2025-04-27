<script>
    let ip_flightID = '';
    let ip_personID = '';

    let message = '';

    async function assignPilot() {
        try {
            const response = await fetch('/api/procedures/assign_pilot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ip_flightID, ip_personID })
            });

            const data = await response.json();
            if (response.ok) {
                message = 'Pilot assigned successfully!';
            } else {
                message = `Error: ${data.error}`;
            }
        } catch (err) {
            console.error(err);
            message = 'Failed to assign pilot.';
        }
    }
</script>

<h1>Assign Pilot to Flight</h1>

<form on:submit|preventDefault={assignPilot}>
    <label>Flight ID:
        <input bind:value={ip_flightID} required />
    </label><br />

    <label>Pilot Person ID:
        <input bind:value={ip_personID} required />
    </label><br />

    <button type="submit">Assign Pilot</button>
</form>

<p>{message}</p>
