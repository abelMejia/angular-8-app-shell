import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from './shared/interfaces/products/product.interface';
import { ProductService } from './shared/services/products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angular-app-s';
    products$!: Observable<Product[]>;
    productSearch$!: Observable<Product[]>;

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.products$ = this.productService.getAll().pipe(map(it => it?.products.slice(0, 5) ));

        let httpParams = new HttpParams();
        httpParams = httpParams.append('q', 'laptop');
        
        this.productSearch$ = this.productService.search(httpParams).pipe(map(it => it?.products.slice(0, 5) ));
    }
}
