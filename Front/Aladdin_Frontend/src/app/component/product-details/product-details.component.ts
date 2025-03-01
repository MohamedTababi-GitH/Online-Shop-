import { Component, OnInit } from '@angular/core';
import { ProductsLoaderService } from '../../service/product loader/products-loader.service';
import { Product } from '../../data/product';
import { ActivatedRoute } from '@angular/router';
import { ImageLoaderService } from '../../service/image loader/image-loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    image_path: '',
    imageUrl: ''
  };

  constructor(
    private productService: ProductsLoaderService, 
    private route: ActivatedRoute,
    private imageService: ImageLoaderService
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));

    if (productId) {
      this.productService.getProductDetails(productId).subscribe(product => {
        this.product = product;

        // Fetch image using ImageLoaderService
        this.imageService.getImage(product.image_path).subscribe(imageBlob => {
          this.product.imageUrl = URL.createObjectURL(imageBlob);
        });
      });
    }
  }
}
