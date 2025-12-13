const pool = require('./db');

const seedDatabase = async () => {
    try {
        // Drop table if exists
        await pool.query('DROP TABLE IF EXISTS products');

        // Create table
        await pool.query(`
            CREATE TABLE products (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                price VARCHAR(50),
                original_price VARCHAR(50),
                discount VARCHAR(50),
                img1 VARCHAR(255),
                img2 VARCHAR(255)
            );
        `);
        console.log("Table created successfully");

        // Insert data
        const products = [
            {
                name: "Bamboo Knife Block",
                price: "$46.00",
                original_price: "$55.00",
                discount: "-14%",
                img1: "http://localhost:5000/images/knife.webp",
                img2: "http://localhost:5000/images/knife2.webp"
            },
            {
                name: "Chic Nightstand",
                price: "$15.00",
                original_price: "$18.00",
                discount: "-14%",
                img1: "http://localhost:5000/images/chic.webp",
                img2: "http://localhost:5000/images/chic2.webp"
            },
            {
                name: "Classic Wooden Nightstand",
                price: "$13.00",
                original_price: "$18.00",
                discount: "-14%",
                img1: "http://localhost:5000/images/nightstand.webp",
                img2: "http://localhost:5000/images/nightstand2.webp"
            },
            {
                name: "Functional Wooden Desk",
                price: "$44.00",
                original_price: "$55.00",
                discount: "-14%",
                img1: "http://localhost:5000/images/wdesk.webp",
                img2: "http://localhost:5000/images/wdesk2.webp"
            },
            {
                name: "Natural Wood Plant Pot",
                price: "$38.00",
                original_price: "$40.00",
                discount: "-14%",
                img1: "http://localhost:5000/images/pot.webp",
                img2: "http://localhost:5000/images/pot2.webp"
            },
            {
                name: "Stylish Wooden Bed",
                price: "$199.00",
                original_price: "$220.00",
                discount: "-14%",
                img1: "http://localhost:5000/images/stylish.webp",
                img2: "http://localhost:5000/images/stylish2.webp"
            },
            {
                name: "Stylish Wooden Sideboard",
                price: "$32.00",
                original_price: "$35.00",
                discount: "-14%",
                img1: "http://localhost:5000/images/drawer.webp",
                img2: "http://localhost:5000/images/drawer2.webp"
            },
            {
                name: "Modern Teal Armchair",
                price: "$90.00",
                original_price: "$100.00",
                discount: "-14%",
                img1: "http://localhost:5000/images/teal.webp",
                img2: "http://localhost:5000/images/teal2.webp"
            },
            {
                name: "Elegant Accent Chair",
                price: "$22.00",
                original_price: "$30.00",
                discount: "-15%",
                img1: "http://localhost:5000/images/accent.webp",
                img2: "http://localhost:5000/images/accent2.webp"
            },
            {
                name: "Handwoven Storage Basket",
                price: "$08.00",
                original_price: "$10.00",
                discount: "-15%",
                img1: "http://localhost:5000/images/Storage_Basket.jpg",
                img2: "http://localhost:5000/images/Storage_Basket_2.jpg"
            },
            {
                name: "Textured Armchair",
                price: "$55.00",
                original_price: "$60.00",
                discount: "-15%",
                img1: "http://localhost:5000/images/p_sofa.webp",
                img2: "http://localhost:5000/images/p_sofa_2.webp"
            },
            {
                name: "Wooden Plant Stand",
                price: "$23.00",
                original_price: "$25.00",
                discount: "-15%",
                img1: "http://localhost:5000/images/plant.webp",
                img2: "http://localhost:5000/images/plant2.webp"
            },
            {
                name: "Vintage Gear Clock",
                price: "$15.00",
                original_price: "$20.00",
                discount: "-15%",
                img1: "http://localhost:5000/images/clock.webp",
                img2: "http://localhost:5000/images/clock2.webp"
            },
            {
                name: "Cozy Wooden Sofa",
                price: "$25.00",
                original_price: "$30.00",
                discount: "-15%",
                img1: "http://localhost:5000/images/cozy.webp",
                img2: "http://localhost:5000/images/cozy2.jpg"
            },
            {
                name: "Modern Texture Chair",
                price: "$30.00",
                original_price: "$35.00",
                discount: "-15%",
                img1: "http://localhost:5000/images/modern.webp",
                img2: "http://localhost:5000/images/modern2.webp"
            },
            {
                name: "Hanging Storage Baskets",
                price: "$39.00",
                original_price: "$45.00",
                discount: "-15%",
                img1: "http://localhost:5000/images/storage.webp",
                img2: "http://localhost:5000/images/storage2.jpg"
            },

        ];

        for (const product of products) {
            await pool.query(
                'INSERT INTO products (name, price, original_price, discount, img1, img2) VALUES ($1, $2, $3, $4, $5, $6)',
                [product.name, product.price, product.original_price, product.discount, product.img1, product.img2]
            );
        }
        console.log("Data inserted successfully");

    } catch (err) {
        console.error("Error seeding database:", err);
    } finally {
        pool.end();
    }
};

seedDatabase();
