import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: IProduct[], args: string): IProduct[] {
    const filter: string = args ? args.toLocaleLowerCase() : '';
    return filter
      ? value.filter(
          (product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filter) != -1
        )
      : value;
  }
}
