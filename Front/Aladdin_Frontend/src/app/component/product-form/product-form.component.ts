import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsLoaderService } from '../../service/product loader/products-loader.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../data/product';

@Component({
  selector: 'app-product-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  productForm: FormGroup;
  imageUrl: string | undefined = undefined;
  isEditMode = false;
  productId: number | null = null;
  selectedFile: File | null = null;
  

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductsLoaderService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: [''],
     
    });

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.productId = id ? +id : null;
      if (this.productId) {
        this.isEditMode = true;
        this.loadProductData(this.productId);
      }
    });
  }

  loadProductData(id: number) {
    this.productService.getProductDetails(id).subscribe((product) => {
      this.productForm.patchValue({
        name: product.name,
        price: product.price,
        description: product.description,
        imageUrl: product.imageUrl,
      });
      this.imageUrl = product.imageUrl;
    });
  }

 
  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  // Handle file selection and preview
  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
      this.selectedFile = file;
    }
  }

  // Submit form (add or edit product)
  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;

      
  
      // Check if a file is selected, if not, set it to null
      const fileToSend = this.selectedFile || null;
  
      if (this.isEditMode) {
        // If editing an existing product, send the product data and selected file (if any)
        // this.productService.updateProduct(this.productId!, productData, fileToSend).subscribe(() => {
        //   this.router.navigate(['/product-management']);
        // });
      } else {
        // If adding a new product, send the product data and selected file (if any)
        this.productService.addProduct(productData, fileToSend).subscribe((createdProduct) => {
          
          this.router.navigate(['/admin-panel/product-management']);
        });
      }
    }
  }

  
  
}
