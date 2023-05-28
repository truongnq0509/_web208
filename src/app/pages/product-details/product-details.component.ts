import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "src/app/services/products.service";

@Component({
	selector: "app-product-details",
	templateUrl: "./product-details.component.html",
	styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent {
	product: any = {};

	constructor(private route: ActivatedRoute, private productService: ProductsService) {
		this.route.paramMap.subscribe((params) => {
			const id = params.get("id");
			this.productService.getProduct(id as string).subscribe((data) => (this.product = data));
		});
	}
}
