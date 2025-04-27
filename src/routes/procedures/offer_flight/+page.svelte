<script>
    let ip_flightID = '';
    let ip_routeID = '';
    let ip_support_airline = '';
    let ip_support_tail = '';
    let ip_progress = '';
    let ip_next_time = '';
    let ip_cost = '';

    let message = '';

    async function offerFlight() {
        try {
            const response = await fetch('/api/procedures/offer_flight', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ip_flightID,
                    ip_routeID,
                    ip_support_airline: ip_support_airline || null, // allow NULL
                    ip_support_tail: ip_support_tail || null,       // allow NULL
                    ip_progress,
                    ip_next_time,
                    ip_cost
                })
            });

            const data = await response.json();
            if (response.ok) {
                message = 'Flight offered successfully!';
            } else {
                message = `Error: ${data.error}`;
            }
        } catch (err) {
            console.error(err);
            message = 'Failed to offer flight.';
        }
    }
</script>

<h1>Offer Flight</h1>

<form on:submit|preventDefault={offerFlight}>
    <label>Flight ID:
        <input bind:value={ip_flightID} required />
    </label><br />

    <label>Route ID:
        <input bind:value={ip_routeID} required />
    </label><br />

    <label>Support Airline (optional):
        <input bind:value={ip_support_airline} />
    </label><br />

    <label>Support Tail Number (optional):
        <input bind:value={ip_support_tail} />
    </label><br />

    <label>Progress (leg index):
        <input type="number" bind:value={ip_progress} min="0" required />
    </label><br />

    <label>Next Takeoff Time (HH:MM:SS):
        <input type="time" bind:value={ip_next_time} required />
    </label><br />

    <label>Flight Cost:
        <input type="number" bind:value={ip_cost} min="0" required />
    </label><br />

    <button type="submit">Offer Flight</button>
</form>

<p>{message}</p>
