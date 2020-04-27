import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Photoshoot } from '../model/photoshoot';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { logging } from 'protractor';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  photoshot = null;
  photoshootList: Photoshoot[] = [];

  private url = environment.baseUrl + 'api/photoshoots'
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  public index() {
    return this.http.get<Photoshoot[]>(this.url + "/index")
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Could not retrive index of photoshoots')
        })
      );

  }
  public photoshotById(id: number) {
    return this.http.get<Photoshoot>(this.url + "/" + id)
      .pipe(

        catchError((err: any) => {
          console.log(err);
          return throwError("Could not display photoshoot by id: " + id);
        })
      );


  }

  public deleteById(id: number) {
    return this.http.delete<any>(this.url + "/" + id)
      .pipe(
        catchError((err: any) => {
          return throwError("Could not delete photoshoot: " + id)
        })
      );
  }
  public createPhotoshoot(ps: Photoshoot) {
    return this.http.post<any>(this.url, ps)
      .pipe(
        catchError((err: any) => {
          return throwError("Could not create new Photoshoot")
        })
      );
  }

  public updatePhotoshoot(ps: Photoshoot){
    return this.http.put<any>(this.url + '/' + ps.id, ps)
      .pipe(
        catchError((err: any) =>{
          return throwError("Could not update photoshoot: " + ps.id);
        })
      );
  }

  public searchComments(keyword: string){
    return this.http.get<Photoshoot[]>(this.url + "/search/comments/" + keyword)
      .pipe(
        catchError((err: any) =>{
          return throwError("No search results found with keyword: " + keyword);
        })
      );
  }
  public searchName(keyword: string){
    return this.http.get<Photoshoot[]>(this.url + "/search/name/" + keyword)
      .pipe(
        catchError((err: any) =>{
          return throwError("No search results found with keyword: " + keyword);
        })
      );
  }
  public searchLocation(keyword: string){
    return this.http.get<Photoshoot[]>(this.url + "/search/location/" + keyword)
      .pipe(
        catchError((err: any) =>{
          return throwError("No search results found with keyword: " + keyword);
        })
      );
  }
  public searchLensesUsed(keyword: string){
    return this.http.get<Photoshoot[]>(this.url + "/search/lenses/" + keyword)
      .pipe(
        catchError((err: any) =>{
          return throwError("No search results found with keyword: " + keyword);
        })
      );
  }
}
