import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = 'assets/data/products.json';
  constructor(private http: HttpClient) {}

  GetProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl);
  }

  GetProductbyId(id: number): Observable<IProduct | undefined> {
    return this.GetProducts().pipe(
      map((products: IProduct[]) => products.find((p) => p.productId === id))
    );
  }
}
