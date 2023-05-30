import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DefaultLayoutComponent } from "./layouts/default-layout/default-layout.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ProductsPageComponent } from "./pages/products-page/products-page.component";
import { ProductsManagerComponent } from "./pages/products-manager/products-manager.component";
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';

@NgModule({
	declarations: [
		AppComponent,
		DefaultLayoutComponent,
		AdminLayoutComponent,
		HomePageComponent,
		ProductsPageComponent,
		ProductsManagerComponent,
  ProductDetailsComponent,
  ProductAddComponent,
  ProductUpdateComponent,
	],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
