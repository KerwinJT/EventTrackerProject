import { Component, OnInit } from '@angular/core';
import { PhotoshootListComponent } from '../photoshoot-list/photoshoot-list.component';
import { Router } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  template:`<app-photoshoot-list>[searchList]="searchList"</app-photoshoot-list>`,
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router,
    private psServ: PhotoService) { }

  searchList = null;
  keyword = '';

  ngOnInit(): void {
  }
  // public index(){
  //   this.router.navigateByUrl(`/index`);
  // }

  public keywordName(keyword){
    this.searchList = null;
    this.psServ.searchName(keyword).subscribe(
      results => {
      this.searchList = results;
      }, err=>{
        console.log('Error attemping to search by name and keyword.' + keyword);
      }

    )
  }
}
