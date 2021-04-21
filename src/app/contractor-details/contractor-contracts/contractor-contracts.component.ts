import { ContractorContractsService } from './../../shared/contractor-contracts.service';
import { Component, OnInit } from '@angular/core';
import { ContractorDetailService } from 'src/app/shared/contractor-detail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contractor-contracts',
  templateUrl: './contractor-contracts.component.html',
  styles: [
  ]
})
export class ContractorContractsComponent implements OnInit {
  contracts;
  constructor(private contractsservice:ContractorContractsService, public contactorservice:ContractorDetailService) { 
    this.contracts = contractsservice.formData;    
  }

  ngOnInit(): void {    
    this.resetContractsForm();
  }

  resetContractsForm(form?:NgForm){
    this.contactorservice.getContractorList();
    this.contractsservice.getContractorContractsList();
    if(form !=null){
      form.resetForm();
    }
    this.contracts = {
      id:0,
      contractor1Id:'',
      contractorOneId:0,
      contractorOneName:'',
      contractor2Id:'',
      contractorTwoId:0,
      contractorTwoName:''
    };    
  }

  onSubmit(form:NgForm){
    var id1 = parseInt(form.value.contractor1Id);
    var id2 = parseInt(form.value.contractor2Id);
    if(id1 != id2){
      form.value.contractorOneId = id1;
      form.value.contractorTwoId = id2;

      this.contractsservice.postContractDetail(form.value).subscribe(
        res => {          
          this.reloadPage();
        },
        err => {
          alert("Error! Couldn't Save Contract");
        }
      )
    }else{
      alert("You cannot create a contract between the same person!");
    }
  };

  reloadPage() {
    window.location.reload();
  }

  checkContractChain(){
    var data = this.contracts;
    var id1 = parseInt(data.contractor1Id);
    var id2 = parseInt(data.contractor2Id);

    this.contractsservice.getShortestChain(id1, id2);
    var msgInfo = this.contractsservice.contractChain;
    if(msgInfo != undefined){
      var msg = msgInfo.chain   
      if(msg != ''){           
        alert(msg);
        this.reloadPage();
      }
    }
  }
}
