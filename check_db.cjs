const { createClient } = require('@libsql/client');

const client = createClient({
    url: 'file:dev.sqlite',
});

async function run() {
    try {
        const indexes = await client.execute(
            "SELECT name FROM sqlite_master WHERE type='index' AND tbl_name='members'"
        );
        console.log('Indexes on members:', indexes.rows);

        const count = await client.execute('SELECT count(*) as c FROM members');
        console.log('Member count:', count.rows[0].c);

        const notificationsCount = await client.execute(
            "SELECT count(*) as c FROM sqlite_master WHERE type='table' AND name='notifications'"
        );
        console.log('Notifications table exists:', notificationsCount.rows[0].c > 0);
    } catch (err) {
        console.error('Error querying DB:', err);
    }
}

run();
