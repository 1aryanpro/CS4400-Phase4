import pool from '$lib/db';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST() {
    try {
        const connection = await pool.getConnection();
        try {
            await connection.query('CALL simulation_cycle()');
            return json({ success: true });
        } finally {
            connection.release();
        }
    } catch (err) {
        console.error('Database error:', err);
        return json({ error: err.message }, { status: 500 });
    }
}
