import db from '$lib/db';

export async function load({ params }) {
    const { viewName } = params;

    try {
        const [viewData] = await db.query(`SELECT * FROM ${viewName}`);
        if (viewData.length === 0) return { viewName, viewData: [] };

        return { viewName, viewData };
    } catch (error) {
        return {
            error: 'Failed to fetch view data',
            message: error.message
        };
    }
}

