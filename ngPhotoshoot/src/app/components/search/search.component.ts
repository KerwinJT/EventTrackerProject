import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
import { Photoshoot } from 'src/app/model/photoshoot';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResults: Photoshoot[] = null;
  constructor(
    private router: Router,
    private psServ: PhotoService
  ) { }

  ngOnInit(): void {
  }

  public name(keyword){
    this.searchResults = null;
    this.psServ.searchName(keyword).subscribe(
      success => {
        console.log('Roundtrip search |name| was successfull');
        this.searchResults = success;

      }, err =>{
        console.log('Could not complete search |name| request')
      }
    )
  }

}
