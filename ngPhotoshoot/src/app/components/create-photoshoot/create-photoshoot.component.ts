import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Photoshoot } from 'src/app/model/photoshoot';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-photoshoot',
  templateUrl: './create-photoshoot.component.html',
  styleUrls: ['./create-photoshoot.component.css']
})
export class CreatePhotoshootComponent implements OnInit {
  newPhotoshoot: Photoshoot = new Photoshoot();
  constructor(private psServ: PhotoService,
    private router: Router) { }

  ngOnInit(): void {
  }
  public create(ps: Photoshoot){
    this.psServ.createPhotoshoot(ps).subscribe(
      data => {
        console.log("Photoshoot was successfully created");
        console.log(data);
        this.router.navigateByUrl('/photoshoot')

      }, err => {
        console.log(err);
        console.log('Photoshoot could not be created');
        this.router.navigateByUrl('/photoshoot')

      }
    )
  }

}
