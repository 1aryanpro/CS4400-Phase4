// src/routes/api/procedures/add_airport/+server.js

import pool from '$lib/db';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const {
        ip_airportID,
        ip_airport_name,
        ip_city,
        ip_state,
        ip_country,
        ip_locationID
    } = await request.json();

    try {
        const connection = await pool.getConnection();
        const [res] = await connection.query('CALL add_airport(?, ?, ?, ?, ?, ?)', [
            ip_airportID,
            ip_airport_name,
            ip_city,
            ip_state,
            ip_country,
            ip_locationID
        ]);
        return json({ success: res.affectedRows > 0 });
    } catch (err) {
        console.error('Database error:', err);
        return json({ error: err.message }, { status: 500 });
    }
}
