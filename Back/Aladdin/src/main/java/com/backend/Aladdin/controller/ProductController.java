package com.backend.Aladdin.controller;

import com.backend.Aladdin.service.ProductService;
import com.backend.Aladdin.model.Product;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ProductController {

    @Value("${file.upload-dir}")
    private String uploadDir;

    @Autowired
    private ProductService service;

    @GetMapping("/")
    public String home() {
        return "Aladdin_backend";
    }

    @GetMapping("/products")
    List<Product> all() {
        return service.getAllProducts();
    }

    @GetMapping("/products/{id}")
    Product productDetails(@PathVariable int id) {

        return service.getProductById(id);
    }

    @DeleteMapping("/products/{id}")
    void deleteProduct(@PathVariable int id) {
        service.deleteProduct(id);
    }

    @PostMapping("/products")
    public ResponseEntity<Product> addProduct(
            @RequestParam("product") String productJson,
            @RequestParam("file") MultipartFile file) {
        try {
          
            ObjectMapper objectMapper = new ObjectMapper();
            Product product = objectMapper.readValue(productJson, Product.class);
            String filePath = saveImage(file);
            product.setImage_path(filePath);

            return ResponseEntity.ok(service.addProduct(product));
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }


    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable int id, @RequestBody Product product) {
        Product updatedProduct = service.updateProduct(id, product);
        if (updatedProduct != null) {
            return ResponseEntity.ok(updatedProduct); 
        }
        return ResponseEntity.notFound().build(); 
    }


    private String saveImage(MultipartFile file) throws IOException {
        Path uploadPath = Paths.get(uploadDir);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        String fileName = file.getOriginalFilename();
        Path filePath = uploadPath.resolve(fileName);
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        return fileName;
    }

}
