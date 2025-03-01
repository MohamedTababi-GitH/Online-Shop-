package com.backend.Aladdin;

import com.backend.Aladdin.model.Product;
import com.backend.Aladdin.service.ProductService;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ApplicationContext;

import java.util.List;

public class Try {

    public static void main(String[] args) {

        // Initialize Spring Boot context
        ApplicationContext context = SpringApplication.run(AladdinApplication.class, args);

        // Retrieve the CustomerService bean from the Spring context
        ProductService productService = context.getBean(ProductService.class);

        // Use the service to get all customers
        List<Product> products = productService.getAllProducts();
        // Print the customer details to the console
        for (Product product : products) {
            System.out.println("Product ID: " + product.getId());
            System.out.println("Name: " + product.getName());
            System.out.println("Descript: " + product.getDescription());
            System.out.println("Price: " + product.getPrice());
            System.out.println("Path: " + product.getImage_path());
            System.out.println("-------------------------------");
        }

    }
}
