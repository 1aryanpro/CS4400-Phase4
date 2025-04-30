<script>
    let ip_airlineID = "";
    let ip_tail_num = "";
    let ip_seat_capacity = "";
    let ip_speed = "";
    let ip_locationID = "";
    let ip_plane_type = "";

    // These three only sometimes show:
    let ip_maintenanced = "";
    let ip_model = "";
    let ip_neo = "";

    let message = "";

    async function addAirplane() {
        try {
            const body = {
                ip_airlineID,
                ip_tail_num,
                ip_seat_capacity,
                ip_speed,
                ip_locationID,
                ip_plane_type,
                ip_maintenanced:
                    ip_plane_type === "Boeing" ? ip_maintenanced : null,
                ip_model: ip_plane_type === "Boeing" ? ip_model : null,
                ip_neo: ip_plane_type === "Airbus" ? ip_neo : null,
            };

            const response = await fetch("/api/procedures/add_airplane", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            const data = await response.json();
            if (response.success) message = "Airplane added successfully!";
            else message = 'Error adding Airplane, something is wrong';
        } catch (err) {
            console.error(err);
            message = "Failed to add airplane.";
        }
    }
</script>

<h1>Add Airplane</h1>

<form on:submit|preventDefault={addAirplane}>
    <label>Airline ID: <input bind:value={ip_airlineID} required /></label><br
    />
    <label>Tail Number: <input bind:value={ip_tail_num} required /></label><br
    />
    <label
        >Seat Capacity: <input
            type="number"
            bind:value={ip_seat_capacity}
            min="1"
            required
        /></label
    ><br />
    <label
        >Speed: <input
            type="number"
            bind:value={ip_speed}
            min="1"
            required
        /></label
    ><br />
    <label
        >Location ID: <input
            bind:value={ip_locationID}
            placeholder="plane_..."
            required
        /></label
    ><br />

    <label
        >Plane Type:
        <select bind:value={ip_plane_type} required>
            <option value="">Select</option>
            <option value="Boeing">Boeing</option>
            <option value="Airbus">Airbus</option>
            <option value="Other">Other</option>
        </select>
    </label><br />

    {#if ip_plane_type === "Boeing"}
        <label
            >Maintenanced:
            <select bind:value={ip_maintenanced} required>
                <option value="">Select</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
        </label><br />

        <label>Model: <input bind:value={ip_model} required /></label><br />
    {/if}

    {#if ip_plane_type === "Airbus"}
        <label
            >NEO:
            <select bind:value={ip_neo} required>
                <option value="">Select</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
        </label><br />
    {/if}

    <button type="submit">Add Airplane</button>
</form>

<p>{message}</p>
