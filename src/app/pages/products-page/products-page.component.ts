import { Component } from "@angular/core";
import { ProductService } from "src/app/services/product.service";

@Component({
	selector: "app-products-page",
	templateUrl: "./products-page.component.html",
	styleUrls: ["./products-page.component.scss"],
})
export class ProductsPageComponent {
	products: any = [];

	constructor(private productService: ProductService) {
		this.productService.getProducts().subscribe((data) => (this.products = data));
	}
}
