-- CREATE DATABASE
CREATE DATABASE IF NOT EXISTS authentication;
USE authentication;

-- CREATE TABLE
CREATE TABLE users (
  ID INT(11) NOT NULL AUTO_INCREMENT,
  Username VARCHAR(100) NOT NULL,
  Email VARCHAR(150) NOT NULL,
  Password VARCHAR(255) NOT NULL,
  PhotoURL VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (ID),
  UNIQUE (Username),
  UNIQUE (Email)
);

-- INSERT DATA
INSERT INTO users (Username, Email, Password, PhotoURL) VALUES
('bopi', 'bopi@gmail.com', '123', 'https://example.com/profile.jpg'),
('Arun', 'arun@gmail.com', '$2b$10$ZSIzux75j.Tp1K2crbpqx.MPBO3wpZeMrM63N.LeLixp8qSe7Hqc6', NULL),
('Admin', 'Admin@gamil.com', '$2b$10$YaTVVsVAvt/4PexEfzfVNek946P/g2GeK7k9TWPbGsuTS2vew5qXy', NULL),
('Admi', 'Admi@gamil.com', '$2b$10$jmWFTfemdvk3lRfw0hCSUuD7wctFoH9CX7jMWbS46Do66z8dreNsy', NULL),
('Adminn', 'Adminn@gamil.com', '$2b$10$fXyHAltY2qVxtOhsWQqSdemm1tEMbWZt6N.XKuBI0NW6PIUmVxKju', NULL);