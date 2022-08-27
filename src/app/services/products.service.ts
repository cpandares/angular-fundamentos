import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http'
import { Product, CreateProductDTO, UpdateProductDTO } from '../models/product.model';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = `${environment.API_URL}/api/products`;

  constructor(
    private http: HttpClient
  ) { }

  getProductsByPage(limit:number, offset:number){
    return this.http.get<Product[]>(this.apiUrl,{
      params:{limit, offset}
    })
  }

  getProducts (limit?:number, offset?:number){
    let params = new HttpParams();
    if(limit && offset){
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
   return this.http.get<Product[]>(this.apiUrl, { params })

  }

  getProduct(id:string){
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError((error:HttpErrorResponse)=>{
        if(error.status === 500){
          return throwError('Ups internal error server ')
        }
        if(error.status === 404){
          return throwError('Producto no encontrado')
        }

        return throwError('Error no controlado')
      })
    )
  }

  create(dto:CreateProductDTO){
      return this.http.post<Product>(this.apiUrl, dto)
  }

  update(id:string, dto: UpdateProductDTO){
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto)
  }

  delete(id:string){
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`)
  }
}
