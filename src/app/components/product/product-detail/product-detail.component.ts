import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { IProduct } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productDetail = 'Detalle del producto';
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productDetail += `: ${id}`;
      this.GetProductById(Number(id));
    }
  }

  GetProductById(id: number): void {
    this.productService.GetProductbyId(id).subscribe(
      (data: any) => {
        this.product = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  Back(): void {
    this.router.navigate(['product']);
  }
}
