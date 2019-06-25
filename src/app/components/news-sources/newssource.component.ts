import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './newssource.component.html',
  styleUrls: ['./newssource.component.css']
})
export class HomepageComponent implements OnInit {
  loadspinner: boolean = false;
  sources:any[];
  
  constructor(public dataService:DataService) { }

  ngOnInit() {
    this.loadspinner = true;
    this.dataService.getSources().subscribe(sources => {
      this.loadspinner = false;
      console.log(sources);
      this.sources = sources.sources;
  });
  }

}
