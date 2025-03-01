-- Create the database and table
CREATE DATABASE IF NOT EXISTS mydb;
USE mydb;

-- Create products table
CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image_path VARCHAR(255) NOT NULL
);

-- Insert 10 carpet products
INSERT INTO products (name, description, price, image_path) VALUES
('Persian Classic', 'A handcrafted Persian carpet with intricate floral patterns.', 1299.99, 'http://localhost:8080/images/carpet0.jpeg'),
('Modern Abstract', 'A stylish modern carpet with abstract geometric designs.', 799.99, 'http://localhost:8080/images/carpet1.jpeg'),
('Vintage Oriental', 'A vintage-style oriental carpet with rich colors and a traditional motif.', 999.99, 'http://localhost:8080/images/carpet2.jpeg'),
('Shaggy Comfort', 'A high-pile shaggy carpet for ultimate softness and comfort.', 349.99, 'http://localhost:8080/images/carpet3.jpeg'),
('Bohemian Chic', 'A boho-inspired carpet with tribal patterns and vibrant colors.', 599.99, 'http://localhost:8080/images/carpet4.jpeg'),
('Minimalist Grey', 'A minimalist grey carpet with a subtle texture, perfect for modern interiors.', 449.99, '/images/minimalist_grey.jpg'),
('Luxury Silk', 'A premium silk-blend carpet with a smooth texture and elegant finish.', 1999.99, '/images/luxury_silk.jpg'),
('Traditional Turkish', 'A classic Turkish carpet with historical patterns and premium wool.', 1099.99, '/images/traditional_turkish.jpg'),
('Kids Play Rug', 'A colorful, playful carpet designed for children’s rooms.', 199.99, '/images/kids_play_rug.jpg'),
('Outdoor Durable', 'A weather-resistant outdoor carpet suitable for patios and gardens.', 299.99, '/images/outdoor_durable.jpg');


-- Create Users table
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Insert two users (admin and caesar)
INSERT INTO users (username, password) VALUES
('admin', 'admin123'),
('caesar', 'caesar123');