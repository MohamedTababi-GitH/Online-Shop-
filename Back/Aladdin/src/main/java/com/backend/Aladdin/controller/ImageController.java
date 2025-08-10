package com.backend.Aladdin.controller;

import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class ImageController {

    @CrossOrigin(origins = "*")
    @GetMapping("/images/{imageName}")
    public ResponseEntity<Resource> getImage(@PathVariable String imageName) throws IOException {
        // Load the image file from the uploads/images directory
        Resource resource = new FileSystemResource("uploads/images/" + imageName);


        // Check if the file exists
        if (!resource.exists()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        // Determine the content type
        String contentType = "image/jpeg"; // default JPEG
        if (imageName.endsWith(".png")) {
            contentType = "image/png";
        } else if (imageName.endsWith(".gif")) {
            contentType = "image/gif";
        }

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE, contentType)
                .body(resource);
    }
}
