// src/routes/api/procedures/grant_or_revoke_pilot_license/+server.js

import pool from '$lib/db';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const {
        ip_personID,
        ip_license
    } = await request.json();

    try {
        const connection = await pool.getConnection();
        try {
            await connection.query('CALL grant_or_revoke_pilot_license(?, ?)', [
                ip_personID,
                ip_license
            ]);
            return json({ success: true });
        } finally {
            connection.release();
        }
    } catch (err) {
        console.error('Database error:', err);
        return json({ error: err.message }, { status: 500 });
    }
}
