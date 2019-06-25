import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-newspage',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewspageComponent implements OnInit {
  newsFeed :any[] =[]
  constructor(private route: ActivatedRoute,public dataService:DataService) { 
   
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataService.newsFeed(params['id']).subscribe(res => {
        console.log(res);
        this.newsFeed = res.articles;
    });
   });
  }

}
