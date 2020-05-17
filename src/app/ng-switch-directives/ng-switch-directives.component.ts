import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-directives',
  templateUrl: './ng-switch-directives.component.html',
  styleUrls: ['./ng-switch-directives.component.css']
})
export class NgSwitchDirectivesComponent implements OnInit {

   items: Item[]=[
     {name: 'One', val: '1'},
     {name: 'Two', val: '2'},
     {name: 'Three', val: '3'}
    ];

    selectedValue: string="One"; 

  constructor() { }

  ngOnInit(): void {
  }

}

class Item{
  name: string;
  val: string; 
}
