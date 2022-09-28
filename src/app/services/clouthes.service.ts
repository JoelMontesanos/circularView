import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClouthesService {

  //API_URI = 'https://circularm360.herokuapp.com/clouthes'; // This is a http get request to my API
  API_URI = 'http://localhost:3000/clouthes';
  constructor(private http: HttpClient) { }

  getClouthes(){ // Gets all products
    return this.http.get(`${this.API_URI}/all`);// This is a http get request to my API, TESTED
  }

  getClouthe(id:string){ //Gets a product with its properties, Working
    return this.http.get(`${this.API_URI}/${id}`); 
  }

  getSingleProduct(idMarca:string,idTipo:string){ //Gets a single property from a product
    return this.http.get(`${this.API_URI}/marca/${idMarca}/tipo/${idTipo}`); 
  }

  saveProduct(product:Product){//Creates a new Product in the db, Working
    return this.http.post(`${this.API_URI}/`,product);
  }

  deleteProduct(id:string){//Deletes a new Product in the db
    return this.http.delete(`${this.API_URI}/${id}`);
  }

  updateProduct(id:string | number, updatedProduct:Product){// Updates a product 
    return this.http.put(`${this.API_URI}/${id}`,updatedProduct);
  }
}