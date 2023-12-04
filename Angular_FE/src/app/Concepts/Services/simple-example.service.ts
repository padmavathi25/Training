
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleExampleService {

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  private apiurl : string ='../../../assets/departments.json'

  constructor( private  http : HttpClient) {}


  getDepartmentList(): Observable<any> {
    return this.http.get(this.apiurl);
  }

  fetchDepartments(): void {
    const departmentData = this.getDepartmentList();
    // Handle departmentData as needed
    console.log(departmentData);
  }

}
