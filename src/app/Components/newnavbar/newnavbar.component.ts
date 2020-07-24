import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newnavbar',
  templateUrl: './newnavbar.component.html',
  styleUrls: ['./newnavbar.component.scss']
})
export class NewnavbarComponent implements OnInit {

  constructor() { }

  public show :boolean = true
  ngOnInit(): void {    
 this.show =   JSON.parse(localStorage.getItem('user'))
  }

  onLogout(){
    
    localStorage.clear();
  }
}
