import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  signUp(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/register_user', data)
  }

  signIn(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/login_user', data)
  }


  //signin customer
  staffSignin(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/login_staff', data)
  }


  //signup agency
  signUpAgency(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/partnership_registration', data)
  }


  //signin agency
  signinAgency(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/login_partner', data)
  }

  //customers data
  getCustomers(data: any) {
    return this.httpClient.get('http://127.0.0.1:8000/api/users', data)
  }

  //partners data
  getPartners(data: any) {
    return this.httpClient.get('http://127.0.0.1:8000/api/partners', data)
  }

  //birth CRUD
  birthReg(data: any) { //birth registration method called in birth.ts
    return this.httpClient.post('http://127.0.0.1:8000/api/add_birth', data)
  }

  getBirthData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/births')
  }

  getBirth(id: any) {
    return this.httpClient.get('http://127.0.0.1:8000/api/get_birth/' + id)
  }

  editBirthStatus(id: any, data: any,) {
    return this.httpClient.put('http://127.0.0.1:8000/api/update_birth/' + id, data)
  }

  //marriageCRUD
  marriageReg(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/add_marriage', data)
  }

  getMarriageData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/marriages')
  }

  getMarriage(id: any) {
    return this.httpClient.get('http://127.0.0.1:8000/api/get_marriage/' + id)
  }

  editMarriageStatus(id: any, data: any,) {
    return this.httpClient.put('http://127.0.0.1:8000/api/update_marriage/' + id, data)
  }


  //company request

compRequest(data:any){
  return this.httpClient.post('http://127.0.0.1:8000/api/request', data)

}

getPartnersRequest(data: any){
  return this.httpClient.get('http://127.0.0.1:8000/api/requests', data)

}

  // staffInfo(data:any) {
  //   return this.httpClient.post('http://127.0.0.1:8000/api/staff', data)
  // }

  // signUpStaff(data: any){
  //   return this.httpClient.post('http://127.0.0.1:8000/api/register_staff', data)
  // }





}
