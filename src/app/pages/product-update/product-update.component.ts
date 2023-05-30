import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "src/app/services/product.service";

@Component({
	selector: "app-product-update",
	templateUrl: "./product-update.component.html",
	styleUrls: ["./product-update.component.scss"],
})
export class ProductUpdateComponent {
	product: any = {};
	id: any = null;

	constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
		this.route.paramMap.subscribe((params) => {
			const id = params.get("id");
			this.id = id;
			this.productService.getProduct(id as string).subscribe((data) => (this.product = data));
		});
	}

	onSubmit() {
		this.productService
			.updateProduct(this.product, this.id as string)
			.subscribe(() => this.router.navigate(["/admin/products"]));
	}
}
