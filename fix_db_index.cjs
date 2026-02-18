const { createClient } = require('@libsql/client');

const client = createClient({
    url: 'file:dev.sqlite',
});

async function run() {
    try {
        console.log('Dropping conflicting index...');
        await client.execute('DROP INDEX IF EXISTS members_keycloak_id_unique');
        console.log('Index members_keycloak_id_unique dropped successfully.');
    } catch (err) {
        console.error('Error dropping index:', err);
        process.exit(1);
    }
}

run();
