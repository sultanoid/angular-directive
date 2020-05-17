import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directives',
  templateUrl: './ng-for-directives.component.html',
  styleUrls: ['./ng-for-directives.component.css']
})
export class NgForDirectivesComponent implements OnInit {
 title: string = "We are working with *ngFor directives"; 
   movies: Movie[]=[
     {title: 'baba keno asami',director:'Aslam Chowdhury',cast:'Dhaka',releaseDate:'17/05/2020'},
     {title: 'mon bose ba training session e',director:'Mukul Ahmed',cast:'Rajshahi',releaseDate:'17/05/2020'},
     {title: 'training session is so boring',director:'Aslam Chowdhury',cast:'Dhaka',releaseDate:'17/05/2020'},
     {title: 'Angular is also boring',director:'Mukul Ahmed',cast:'Chittagong',releaseDate:'17/05/2020'},
   ];

  constructor() { }

  ngOnInit(): void {
  }

}

class Movie{
  title: string;
  director: string;
  cast: string; 
  releaseDate: string; 
}
