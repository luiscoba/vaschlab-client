import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productTitle = 'Lista de productos';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  listFilter = '';
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ShowImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.GetProducts().subscribe(
      (data: IProduct[]) => {
        this.products = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
