CREATE DATABASE IF NOT EXISTS mydb;
USE mydb;

-- products table
CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image_path VARCHAR(255) NOT NULL
);

-- Insert 10 carpet products
INSERT INTO products (name, description, price, image_path) VALUES
('Persian Classic', 'A handcrafted Persian carpet with intricate floral patterns.', 1299.99, 'carpet0.jpeg'),
('Modern Abstract', 'A stylish modern carpet with abstract geometric designs.', 799.99, 'carpet1.jpeg'),
('Vintage Oriental', 'A vintage-style oriental carpet with rich colors and a traditional motif.', 999.99, 'carpet2.jpeg'),
('Shaggy Comfort', 'A high-pile shaggy carpet for ultimate softness and comfort.', 349.99, 'carpet3.jpeg'),
('Bohemian Chic', 'A boho-inspired carpet with tribal patterns and vibrant colors.', 599.99, 'carpet4.jpeg'),
('Minimalist Grey', 'A minimalist grey carpet with a subtle texture, perfect for modern interiors.', 449.99, 'carpet5.jpeg'),
('Luxury Silk', 'A premium silk-blend carpet with a smooth texture and elegant finish.', 1999.99, 'carpet6.jpeg'),
('Traditional Turkish', 'A classic Turkish carpet with historical patterns and premium wool.', 1099.99, 'carpet7.jpeg'),
('Kids Play Rug', 'A colorful, playful carpet designed for children’s rooms.', 199.99, 'carpet8.jpeg'),
('Outdoor Durable', 'A weather-resistant outdoor carpet suitable for patios and gardens.', 299.99, 'carpet9.jpeg');


-- Users table
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);

-- Insert two users (admin and user)
INSERT INTO users (username, password, role) VALUES
('admin', '$2a$12$VZnGdT1uV3P5YBEP35EQBOSui8KEdWOkIBf6jhyHC1DJ8b2CBSzAq', 'ADMIN'),
('user', '$2a$12$mac/IvgOIeiOyNFZ/GGNS.IPASbzmJScgi4yZ9HBgrkUe9H5Pszqi', 'USER');