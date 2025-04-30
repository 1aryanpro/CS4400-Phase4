// src/routes/api/procedures/offer_flight/+server.js

import pool from '$lib/db';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const {
        ip_flightID,
        ip_routeID,
        ip_support_airline,
        ip_support_tail,
        ip_progress,
        ip_next_time,
        ip_cost
    } = await request.json();

    try {
        const connection = await pool.getConnection();
        const [res] = await connection.query('CALL offer_flight(?, ?, ?, ?, ?, ?, ?)', [
            ip_flightID,
            ip_routeID,
            ip_support_airline,
            ip_support_tail,
            ip_progress,
            ip_next_time,
            ip_cost
        ]);
        connection.release();
        return json({ success: res.affectedRows > 0 });
    } catch (err) {
        console.error('Database error:', err);
        return json({ error: err.message }, { status: 500 });
    }
}
