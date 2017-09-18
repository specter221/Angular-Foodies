import { Injectable } from '@angular/core';
import { Headers, Http , Response} from '@angular/http';
import { RequestOptions } from '@angular/http';
@Injectable()
export class SearchService {
   constructor(private http: Http) {};
   restaurants = [];
   cuisine:any;
   getResturant(cuisine:HTMLInputElement, city:HTMLInputElement){
       
       let headers = new Headers({ 'user-key' : '0c8a4b66d6232c9480ccb9a9f240c165' });//api key
       let requestOpt = new RequestOptions({ headers: headers });
     
       var apiLink = 'https://developers.zomato.com/api/v2.1/search?entity_id='+(city.value)
       +'&entity_type=city&cuisines=' + (cuisine.value); 
       this.http.get(apiLink, requestOpt)// observable is used
       .subscribe((res: Response) => {
         this.restaurants = res.json().restaurants;
       });
 }

 getCuisine(city:HTMLInputElement):any{
   let headers = new Headers({ 'user-key' : '0c8a4b66d6232c9480ccb9a9f240c165' });
   let requestOpt = new RequestOptions({ headers: headers });
   var apiLink = 'https://developers.zomato.com/api/v2.1/cuisines?city_id='+(city.value);
   return this.http.get(apiLink, requestOpt);
 }
}