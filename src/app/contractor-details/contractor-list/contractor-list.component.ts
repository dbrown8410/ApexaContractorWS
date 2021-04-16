import { Component, OnInit } from '@angular/core';
import { ContractorDetailService } from 'src/app/shared/contractor-detail.service';

@Component({
  selector: 'app-contractor-list',
  templateUrl: './contractor-list.component.html',
  styles: [
  ]
})
export class ContractorListComponent implements OnInit {
  
  constructor(public service:ContractorDetailService) { 
  }

  ngOnInit(): void {
    this.service.getContractorList();
  }

}
