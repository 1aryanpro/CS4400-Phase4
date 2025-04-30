// src/routes/api/procedures/flight_landing/+server.js

import pool from '$lib/db';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const { ip_flightID } = await request.json();

    try {
        const connection = await pool.getConnection();
        const [res] = await connection.query('CALL flight_landing(?)', [ip_flightID]);
        connection.release();
        return json({ success: res.affectedRows > 0 });
    } catch (err) {
        console.error('Database error:', err);
        return json({ error: err.message }, { status: 500 });
    }
}
