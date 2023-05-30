import { Component } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-product-add",
	templateUrl: "./product-add.component.html",
	styleUrls: ["./product-add.component.scss"],
})
export class ProductAddComponent {
	product: any = {
		name: "",
		price: "",
	};

	constructor(private router: Router, private productService: ProductService) {}

	onSubmit() {
		this.productService.createProduct(this.product).subscribe(() => this.router.navigate(["/admin/products"]));
	}
}
