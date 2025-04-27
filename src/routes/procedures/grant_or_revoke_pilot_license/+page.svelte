<script>
    let ip_personID = '';
    let ip_license = '';

    let message = '';

    async function grantOrRevokeLicense() {
        try {
            const response = await fetch('/api/procedures/grant_or_revoke_pilot_license', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ip_personID,
                    ip_license
                })
            });

            const data = await response.json();
            if (response.ok) {
                message = 'License status updated successfully!';
            } else {
                message = `Error: ${data.error}`;
            }
        } catch (err) {
            console.error(err);
            message = 'Failed to update license.';
        }
    }
</script>

<h1>Grant or Revoke Pilot License</h1>

<form on:submit|preventDefault={grantOrRevokeLicense}>
    <label>Person ID:
        <input bind:value={ip_personID} required />
    </label><br />

    <label>License:
        <input bind:value={ip_license} required />
    </label><br />

    <button type="submit">Submit</button>
</form>

<p>{message}</p>
