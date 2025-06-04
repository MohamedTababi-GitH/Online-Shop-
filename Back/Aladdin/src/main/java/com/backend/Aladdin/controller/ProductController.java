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
            // Convert the product JSON string to Product object
            ObjectMapper objectMapper = new ObjectMapper();
            Product product = objectMapper.readValue(productJson, Product.class);

            // Save the image and set the image path
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
            return ResponseEntity.ok(updatedProduct); // Return updated product
        }
        return ResponseEntity.notFound().build(); // Return 404 if product not found
    }



    // Image upload
//    @PostMapping("/upload")
//    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
//        try {
//            // Save the file to the directory
//            String filePath = saveImage(file);
//            return ResponseEntity.ok("Image uploaded successfully: " + filePath);
//        } catch (IOException e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error uploading image");
//        }
//    }

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
