import { Component, OnInit } from '@angular/core';
import { ICustomEvent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  { 
  
  users = [
    {
      firstName: 'Ivan',
      lastName: 'Ivanov'
    },
    {
      firstName: 'Petar',
      lastName: 'Petrov'
    },
  ];

  selectedUserIndex:null| number = null;

  showLastName = true;

  get showSelectedIndex (): boolean {
      return (this.selectedUserIndex === null ? -1: this.selectedUserIndex) >= 0
    }

    constructor() {}

    handleClickEvent( event: MouseEvent) {
      console.log(event)
       this.showLastName = !this.showLastName;
      //console.log('CLICKED!')
    }

    ListItemClickHandler(index:number){
      if(this.selectedUserIndex === index){
        this.selectedUserIndex = null;
        return
      }
      this.selectedUserIndex = index;
    }

    custumEventHandler($event: ICustomEvent) {
      console.log($event)
    }

    
 

}
