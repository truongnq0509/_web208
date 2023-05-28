import { Component } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";

@Component({
	selector: "app-product-list",
	templateUrl: "./product-list.component.html",
	styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent {
	products: any = [];

	constructor(private productService: ProductsService) {
		this.productService.getProducts().subscribe((data) => (this.products = data));
	}
}
