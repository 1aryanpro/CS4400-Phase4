import pool from '$lib/db';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const {
        ip_personID,
        ip_first_name,
        ip_last_name,
        ip_locationID,
        ip_taxID,
        ip_experience,
        ip_miles,
        ip_funds
    } = await request.json();

    try {
        const connection = await pool.getConnection();
        try {
            await connection.query('CALL add_person(?, ?, ?, ?, ?, ?, ?, ?)', [
                ip_personID,
                ip_first_name,
                ip_last_name,
                ip_locationID,
                ip_taxID,
                ip_experience,
                ip_miles,
                ip_funds
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
