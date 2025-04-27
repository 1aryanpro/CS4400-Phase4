import pool from '$lib/db';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const {
        ip_airlineID,
        ip_tail_num,
        ip_seat_capacity,
        ip_speed,
        ip_locationID,
        ip_plane_type,
        ip_maintenanced,
        ip_model,
        ip_neo
    } = await request.json();

    try {
        const connection = await pool.getConnection();
        try {
            await connection.query('CALL add_airplane(?, ?, ?, ?, ?, ?, ?, ?, ?)', [
                ip_airlineID,
                ip_tail_num,
                ip_seat_capacity,
                ip_speed,
                ip_locationID,
                ip_plane_type,
                ip_maintenanced,
                ip_model,
                ip_neo
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
