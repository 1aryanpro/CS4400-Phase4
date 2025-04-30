<script>
    let ip_personID = "";
    let ip_first_name = "";
    let ip_last_name = "";
    let ip_locationID = "";
    let role = ""; // 'pilot' or 'passenger'

    // Pilot-specific
    let ip_taxID = "";
    let ip_experience = "";

    // Passenger-specific
    let ip_miles = "";
    let ip_funds = "";

    let message = "";

    async function addPerson() {
        let body = {
            ip_personID,
            ip_first_name,
            ip_last_name,
            ip_locationID,
            ip_taxID: null,
            ip_experience: null,
            ip_miles: null,
            ip_funds: null,
        };

        if (role === "pilot") {
            body.ip_taxID = ip_taxID;
            body.ip_experience = ip_experience;
        } else if (role === "passenger") {
            body.ip_miles = ip_miles;
            body.ip_funds = ip_funds;
        }

        try {
            const response = await fetch("/api/procedures/add_person", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            const data = await response.json();
            if (response.success) message = "Person added successfully!";
            else message = 'Error adding Person, something is wrong';
        } catch (err) {
            console.error(err);
            message = "Failed to add person.";
        }
    }
</script>

<h1>Add Person</h1>

<form on:submit|preventDefault={addPerson}>
    <label
        >Person ID:
        <input bind:value={ip_personID} required />
    </label><br />

    <label
        >First Name:
        <input bind:value={ip_first_name} required />
    </label><br />

    <label
        >Last Name:
        <input bind:value={ip_last_name} />
    </label><br />

    <label
        >Location ID:
        <input bind:value={ip_locationID} required />
    </label><br />

    <label
        >Role:
        <select bind:value={role} required>
            <option value="">Select Role</option>
            <option value="pilot">Pilot</option>
            <option value="passenger">Passenger</option>
        </select>
    </label><br />

    {#if role === "pilot"}
        <label
            >Tax ID:
            <input bind:value={ip_taxID} required />
        </label><br />

        <label
            >Experience (Years):
            <input type="number" bind:value={ip_experience} min="0" required />
        </label><br />
    {/if}

    {#if role === "passenger"}
        <label
            >Frequent Flyer Miles:
            <input type="number" bind:value={ip_miles} min="0" required />
        </label><br />

        <label
            >Funds Available:
            <input type="number" bind:value={ip_funds} min="0" required />
        </label><br />
    {/if}

    <button type="submit">Add Person</button>
</form>

<p>{message}</p>
