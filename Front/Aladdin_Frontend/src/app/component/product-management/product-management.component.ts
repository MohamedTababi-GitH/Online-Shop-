import { Component, OnInit } from '@angular/core';
import { ProductsLoaderService } from '../../service/product loader/products-loader.service';
import { Product } from '../../data/product';
import { ImageLoaderService } from '../../service/image loader/image-loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-management',
  imports: [CommonModule],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.css'
})
export class ProductManagementComponent implements OnInit{

   productList : Product[] = [];
    imagePaths: string[] = [];
  
    constructor(
      private productService: ProductsLoaderService,
      private imageService: ImageLoaderService,
  
  
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


}
