import { Component, OnInit, Input } from '@angular/core';
import { CertificateModel, Model } from 'src/app/model';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent{
  constructor(public dialog: MatDialog, private translateService: TranslateService) {}

  // public parentCrewId: number = 0;
  openDialog(crewId: number, crewCertificates: CertificateModel[]) {
    this.dialog.open(ModalComponent,{ data: {id: crewId, modalCertif:  crewCertificates}});
  }
  
  model = new Model()

  getCrewList(){
    return this.model.crewList
  }
  public selectLanguage(event: any){
     this.translateService.use(event.target.value)
  }
}


// export class HomePageComponent implements OnInit {
 
//   crew: CrewModel = new CrewModel();
//   crew1: CrewModel = new CrewModel();
//   crew2: CrewModel = new CrewModel();
//   @Input() crewList: CrewModel[] = [];

//   constructor() {}

//   ngOnInit(): void {
//     this.createCrew();
//   }
//   createCrew() {
//     this.crew.id = 1;
//     this.crew.firstName = 'Emre';
//     this.crew.lastName = 'Bahar';
//     this.crew.nationality = 'Tr';
//     this.crew.title = 'Junior';
//     this.crewList.push(this.crew);
//     this.crew1.id = 2;
//     this.crew1.firstName = 'Hasan';
//     this.crew1.lastName = 'Kaplan';
//     this.crew1.nationality = 'Tr';
//     this.crew1.title = 'Senior';
//     this.crewList.push(this.crew1);
//     this.crew2.id = 3;
//     this.crew2.firstName = 'Arda';
//     this.crew2.lastName = 'Gorur';
//     this.crew2.nationality = 'En';
//     this.crew2.title = 'Senior-Mid';
//     this.crewList.push(this.crew2);
//   }
// }


