import { Component } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
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

	constructor(private router: Router, private productService: ProductsService) {}

	onSubmit() {
		this.productService.createProduct(this.product).subscribe((data) => this.router.navigate(["/admin/products"]));
	}
}
