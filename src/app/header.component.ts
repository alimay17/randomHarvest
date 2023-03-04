import { Component } from '@angular/core';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // properties
  title = 'Random Harvest';

  //constructor
  constructor(
    private dataService: DataStorageService
  ){}

  // methods
  onSaveData(){
    this.dataService.putAllItems();
  }

  onFetchData(){
    this.dataService.fetchAllItems().subscribe();
  }
}
