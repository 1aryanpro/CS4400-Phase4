<script>
    let message = '';

    async function runSimulationCycle() {
        try {
            const response = await fetch('/api/procedures/simulation_cycle', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });

            const data = await response.json();
            if (response.success) message = "Simulation cycle executed successfully!";
            else message = 'Error simulating cycle, something is wrong';
        } catch (err) {
            console.error(err);
            message = 'Failed to execute simulation cycle.';
        }
    }
</script>

<h1>Run Simulation Cycle</h1>

<form on:submit|preventDefault={runSimulationCycle}>
    <button type="submit">Run Simulation Cycle</button>
</form>

<p>{message}</p>
