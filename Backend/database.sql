CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    original_price DECIMAL(10, 2) NOT NULL,
    discount VARCHAR(50),
    img1 VARCHAR(255) NOT NULL,
    img2 VARCHAR(255) NOT NULL
);

INSERT INTO products (name, price, original_price, discount, img1, img2) VALUES
('Handwoven Storage Basket', 8.00, 9.20, '-15%', '/assets/products/Storage_Basket.jpg', '/assets/products/Storage_Basket_2.jpg'),
('Textured Armchair', 55.00, 65.00, '-15%', '/assets/products/p_sofa.webp', '/assets/products/p_sofa_2.webp'),
('Wooden Plant Stand', 23.00, 25.00, '-15%', '/assets/products/plant.webp', '/assets/products/plant2.webp'),
('Wooden Accent Chair', 22.00, 25.00, '-15%', '/assets/products/accent.webp', '/assets/products/accent2.webp'),
('Cozy Wooden Sofa', 18.00, 20.00, '-15%', '/assets/products/cozy.webp', '/assets/products/cozy2.jpg'),
('Modern Textured Chair', 18.00, 20.00, '-15%', '/assets/products/modern.webp', '/assets/products/modern2.webp'),
('Hanging Storage Basket', 39.00, 45.00, '-15%', '/assets/products/storage.webp', '/assets/products/storage2.jpg'),
('Vintage Gear Clock', 15.00, 17.00, '-15%', '/assets/products/clock.webp', '/assets/products/clock2.webp');
