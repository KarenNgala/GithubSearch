import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchTerm:string;
  @Output() searchWord = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  
  getSearchItem(){
    this.searchWord.emit(this.searchTerm);
    this.searchTerm="";
  }

}
