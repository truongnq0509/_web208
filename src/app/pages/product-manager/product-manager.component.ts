import { Component } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";

@Component({
	selector: "app-product-manager",
	templateUrl: "./product-manager.component.html",
	styleUrls: ["./product-manager.component.scss"],
})
export class ProductManagerComponent {
	products: any = [];

	constructor(private productService: ProductsService) {
		this.productService.getProducts().subscribe((data) => (this.products = data));
	}

	onRemove(id: string) {
		this.productService
			.deleteProduct(id)
			.subscribe((data) => (this.products = this.products.filter((product: any) => product.id != id)));
	}
}
