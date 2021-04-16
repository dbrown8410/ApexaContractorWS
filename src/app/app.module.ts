import { ContractorDetailService } from './shared/contractor-detail.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContractorDetailsComponent } from './contractor-details/contractor-details.component';
import { ContractorDetailComponent } from './contractor-details/contractor-detail/contractor-detail.component';
import { ContractorListComponent } from './contractor-details/contractor-list/contractor-list.component';
import { ContractorContractsComponent } from './contractor-details/contractor-contracts/contractor-contracts.component';
import { ContractorContractsListComponent } from './contractor-details/contractor-contracts-list/contractor-contracts-list.component';
import { ContractorContractsService } from './shared/contractor-contracts.service';

@NgModule({
  declarations: [
    AppComponent,
    ContractorDetailsComponent,
    ContractorDetailComponent,
    ContractorListComponent,
    ContractorContractsComponent,
    ContractorContractsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContractorDetailService,ContractorContractsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
