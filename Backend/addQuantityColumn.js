const pool = require('./config/db');

const addQuantityColumn = async () => {
    try {
        // Add quantity column if it doesn't exist (won't delete any data)
        await pool.query(`
            ALTER TABLE products 
            ADD COLUMN IF NOT EXISTS quantity INTEGER DEFAULT 50
        `);
        console.log("Quantity column added successfully!");

        // Update all existing products to have quantity = 50 if they have NULL
        await pool.query(`
            UPDATE products SET quantity = 50 WHERE quantity IS NULL
        `);
        console.log("All products updated with quantity = 50");

    } catch (err) {
        console.error("Error adding quantity column:", err);
    } finally {
        pool.end();
    }
};

addQuantityColumn();
