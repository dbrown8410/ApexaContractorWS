import { ContractorContractsService } from './../../shared/contractor-contracts.service';
import { ContractorDetailService } from './../../shared/contractor-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contractor-detail',
  templateUrl: './contractor-detail.component.html',
  styles: [
  ]
})
export class ContractorDetailComponent implements OnInit {
  contractor;
  types;
  
  constructor(private service:ContractorDetailService) { 
    this.contractor = service.formData;
    this.types = service.types;
  }

  ngOnInit(): void {
    this.resetForm();
    
  }

  resetForm(form?:NgForm){
    if(form !=null){
      form.resetForm();
    }
    this.contractor = {
      id : 0,
      name: '',
      address: '',
      phoneNumber: '',
      type:'',
      healthStatus:'' 
    }
  }

  onSubmit(form:NgForm){
    this.service.postContractorDetail(form.value).subscribe(
      res => {
        this.reloadPage();         
      },
      err => {
        alert("Error Found When Trying to Save");
      }
    )
  };

  reloadPage() {
    window.location.reload();
  }
}
