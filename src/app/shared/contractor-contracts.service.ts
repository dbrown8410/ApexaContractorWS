import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContractingChain } from './contracting-chain.model';
import { ContractorContracts } from './contractor-contracts.model';

@Injectable({
  providedIn: 'root'
})
export class ContractorContractsService {
  formData: ContractorContracts;
  

  private readonly rootUrl = 'http://localhost:5000/api/contractor';
  contracts : ContractorContracts[];
  contractChain : ContractingChain;

  constructor(private http:HttpClient) { 
  }

  getContractorContractsList(){
    this.http.get(this.rootUrl+'/contractscontractslist')
    .toPromise()
    .then(res => this.contracts = res as ContractorContracts[])
  }

  getShortestChain(id1, id2){
    this.http.get(this.rootUrl+'/shortestchain/'+id1+"/"+id2)
    .toPromise()
    .then(res => this.contractChain = res as ContractingChain)
  }

  postContractDetail(formData:ContractorContracts){
    return this.http.post(this.rootUrl+'/savecontract',formData);
  }

  deleteContractDetail(id){
    return this.http.delete(this.rootUrl+'/deletecontract/'+id);
  }

  getContractList(){
    this.http.get(this.rootUrl+'/contractlist')
    .toPromise()
    .then(res => this.contracts = res as ContractorContracts[])
  }
}
