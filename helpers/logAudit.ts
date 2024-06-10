const knex = require('../config/db-config.js')

async function logAudit(adminId: string, action: string, details: string) {
    await knex('audit_logs').insert({
        admin_id: adminId,
        action,
        details,
        created_at: new Date().toISOString()
    });
}

module.exports = logAudit;
