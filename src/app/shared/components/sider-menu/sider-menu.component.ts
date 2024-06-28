import { Component, OnInit } from '@angular/core';


interface MenuItem{
  title:string;
  route:string;
}



@Component({
  selector: 'shared-sider-menu',
  templateUrl: './sider-menu.component.html',
  styleUrls: []
})
export class SiderMenuComponent implements OnInit {


public reactiveMenu:MenuItem[]=[
  {title:'Básicos',route:'./reactive/basic'},
  {title:'Dínamicos',route:'./reactive/dynamic'},
  {title:'Switches',route:'./reactive/switches'},
];

public authMenu:MenuItem[]=[
  {title:'Registros',route:'./auth'},

];

  constructor() { }

  ngOnInit() {
  }

}
