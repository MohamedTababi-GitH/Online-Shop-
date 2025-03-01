package com.backend.Aladdin.service;


import com.backend.Aladdin.model.Product;
import com.backend.Aladdin.repo.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Get all customers
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Get customer by ID
    public Product getProductById(int id) {
        return productRepository.findById(id).orElse(null); // Returns null if not found
    }

    // Add a new customer
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    // Delete customer by ID
    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }
}
