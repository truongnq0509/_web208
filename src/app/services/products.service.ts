import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ProductsService {
	constructor(private http: HttpClient) {}

	getProducts(): Observable<any> {
		return this.http.get("http://localhost:3000/products");
	}
	getProduct(id: string): Observable<any> {
		return this.http.get("http://localhost:3000/products/" + id);
	}
	createProduct(data: any): Observable<any> {
		return this.http.post("http://localhost:3000/products", data);
	}
	updateProduct(data: any, id: string): Observable<any> {
		return this.http.put("http://localhost:3000/products/" + id, data);
	}
	deleteProduct(id: string): Observable<any> {
		return this.http.delete("http://localhost:3000/products/" + id);
	}
}
