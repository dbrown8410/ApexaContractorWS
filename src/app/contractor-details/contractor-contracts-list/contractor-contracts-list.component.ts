import { ContractorContractsService } from './../../shared/contractor-contracts.service';
import { Component, OnInit } from '@angular/core';
import { ContractorDetailService } from 'src/app/shared/contractor-detail.service';

@Component({
  selector: 'app-contractor-contracts-list',
  templateUrl: './contractor-contracts-list.component.html',
  styles: [
  ]
})
export class ContractorContractsListComponent implements OnInit {

  constructor(public contractsservice:ContractorContractsService) { }

  ngOnInit(): void {
    this.contractsservice.getContractorContractsList();
  }

  removeContract(id){
    if(confirm("Are you sure you want to remove contract?")){
      this.contractsservice.deleteContractDetail(id).subscribe(
        res => {
          this.contractsservice.getContractorContractsList();
          alert("Successfully removed");
        }, 
        err => {
          alert("Error found while removing contract");
        }
      );
    }
  }

}
