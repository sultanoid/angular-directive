import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-directives',
  templateUrl: './ng-if-directives.component.html',
  styleUrls: ['./ng-if-directives.component.css']
})
export class NgIfDirectivesComponent implements OnInit {

  show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
