import { Component, OnInit } from '@angular/core';
import { ProductsLoaderService } from '../../service/product loader/products-loader.service';
import { ImageLoaderService } from '../../service/image loader/image-loader.service'; // Import the new ImageLoaderService
import { Product } from '../../data/product';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  productList : Product[] = [];
  imagePaths: string[] = [];

  constructor(
    private productService: ProductsLoaderService,
    private imageService: ImageLoaderService,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.productList = products;
  
      this.productList.forEach(product => {
        this.imageService.getImage(product.image_path).subscribe((imageBlob) => {
          const imageUrl = URL.createObjectURL(imageBlob);
          product.imageUrl = imageUrl;  
        });
      });
    });
  }

  viewProductDetails(productId: number): void {
    this.router.navigate(['/products', productId]); 
  }
  
}
