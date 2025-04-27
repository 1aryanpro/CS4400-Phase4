// src/routes/api/procedures/flight_landing/+server.js

import pool from '$lib/db';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const { ip_flightID } = await request.json();

    try {
        const connection = await pool.getConnection();
        try {
            await connection.query('CALL flight_landing(?)', [ip_flightID]);
            return json({ success: true });
        } finally {
            connection.release();
        }
    } catch (err) {
        console.error('Database error:', err);
        return json({ error: err.message }, { status: 500 });
    }
}
