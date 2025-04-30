<script>
    let ip_flightID = '';

    let message = '';

    async function recycleCrew() {
        try {
            const response = await fetch('/api/procedures/recycle_crew', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ip_flightID })
            });

            const data = await response.json();
            if (response.success) message = "Crew recycled successfully!";
            else message = 'Error recycling Crew, something is wrong';
        } catch (err) {
            console.error(err);
            message = 'Failed to recycle crew.';
        }
    }
</script>

<h1>Recycle Crew</h1>

<form on:submit|preventDefault={recycleCrew}>
    <label>Flight ID:
        <input bind:value={ip_flightID} required />
    </label><br />

    <button type="submit">Recycle Crew</button>
</form>

<p>{message}</p>
