import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "src/app/services/products.service";

@Component({
	selector: "app-product-update",
	templateUrl: "./product-update.component.html",
	styleUrls: ["./product-update.component.scss"],
})
export class ProductUpdateComponent {
	product: any = {
		name: "",
		price: "",
	};

	id: any = null;

	constructor(private router: Router, private route: ActivatedRoute, private productService: ProductsService) {
		this.route.paramMap.subscribe((params) => {
			const id = params.get("id");
			this.id = id;
			this.productService.getProduct(id as string).subscribe((data) => (this.product = data));
		});
	}

	onSubmit() {
		this.productService
			.updateProduct(this.product, this.id)
			.subscribe((data) => this.router.navigate(["/admin/products"]));
	}
}
