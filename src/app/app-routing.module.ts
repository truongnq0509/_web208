import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultLayoutComponent } from "./layouts/default-layout/default-layout.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { ProductsManagerComponent } from "./pages/products-manager/products-manager.component";
import { ProductsPageComponent } from "./pages/products-page/products-page.component";
import { ProductDetailsComponent } from "./pages/product-details/product-details.component";
import { ProductAddComponent } from "./pages/product-add/product-add.component";
import { ProductUpdateComponent } from "./pages/product-update/product-update.component";

const routes: Routes = [
	{
		path: "",
		component: DefaultLayoutComponent,
		children: [
			{
				path: "",
				component: HomePageComponent,
			},
			{
				path: "products",
				component: ProductsPageComponent,
			},
			{
				path: "products/:id",
				component: ProductDetailsComponent,
			},
		],
	},
	{
		path: "admin",
		component: AdminLayoutComponent,
		children: [
			{
				path: "",
				component: HomePageComponent,
			},
			{
				path: "products",
				component: ProductsManagerComponent,
			},
			{
				path: "products/add",
				component: ProductAddComponent,
			},
			{
				path: "products/:id/edit",
				component: ProductUpdateComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
