import { Component } from "@angular/core";
import { ProductService } from "src/app/services/product.service";

@Component({
	selector: "app-products-manager",
	templateUrl: "./products-manager.component.html",
	styleUrls: ["./products-manager.component.scss"],
})
export class ProductsManagerComponent {
	products: any = [];

	constructor(private productService: ProductService) {
		this.productService.getProducts().subscribe((data) => (this.products = data));
	}

	onRemove(id: string) {
		this.productService
			.deleteProduct(id)
			.subscribe((data) => (this.products = this.products.filter((product: any) => product.id != id)));
	}
}
