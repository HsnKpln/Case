import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model } from 'src/app/model';
import { CrewCardPageModel } from './models/crew-card-page-model';

@Component({
  selector: 'app-crew-card-page',
  templateUrl: './crew-card-page.component.html',
  styleUrls: ['./crew-card-page.component.scss'],
})
export class CrewCardPageComponent implements OnInit {
  // crewListDetails: CrewCardPageModel[] = [];
  // crew: CrewModel = new CrewModel();

  crewId: number = 0;
  model = new Model()

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      this.crewId = res.id;
    });
  }

  getCrewId(){
    return this.crewId
  }

  getDeneme(){
    return this.model.crewList.filter(item => item.id == this.crewId)
  }

  getCrew(){
    return this.model.crewList
  }
}
