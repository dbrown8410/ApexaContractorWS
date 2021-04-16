import { ContractorDetail } from './contractor-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContractorDetailService {
  formData:ContractorDetail;
  types = ["Advisor","Carrier", "MGA"];
  private readonly rootUrl = 'http://localhost:5000/api/contractor';
  list : ContractorDetail[];

  constructor(private http:HttpClient) { 
  }

  postContractorDetail(formData:ContractorDetail){
    return this.http.post(this.rootUrl+'/savecontractor',formData);
  }

  getContractorList(){
    this.http.get(this.rootUrl+'/contractorlist')
    .toPromise()
    .then(res => this.list = res as ContractorDetail[])
  }
}
