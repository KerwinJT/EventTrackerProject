import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Photoshoot } from 'src/app/model/photoshoot';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photoshoot-list',
  template: '{{searchList}}',
  templateUrl: './photoshoot-list.component.html',
  styleUrls: ['./photoshoot-list.component.css']
})
export class PhotoshootListComponent implements OnInit {
  editPS: Photoshoot = null;
  @Input() searchList: Photoshoot[];
  photoshotList: Photoshoot[] = [];
  selected: Photoshoot = null;
  locationUrl: string = '';
  constructor(
    private photoServ: PhotoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.selected === null && this.editPS === null){
      this.index();
    }

    // if (!this.selected && this.route.snapshot.paramMap.get('id')) {
    //   const photoshootId = parseInt(this.route.snapshot.paramMap.get('id'));
    //   this.photoServ.photoshootById(photoshootId).subscribe(
    //     data => {
    //       this.selected = data;
    //     },
    //       error =>{
    //         console.log(error);
    //         this.router.navigateByUrl('**');

    //       }


    //   );
    // }
  }

  public index() {
    console.log(this.searchList);

    this.searchList = null;
    this.photoServ.index().subscribe(
      data => {
        console.log("entered data from index in photo service");
        this.photoshotList = data;
        // this.selected = null;
        this.locationUrl = '';
      }, error => {
        console.log('Photoshoot-List Component - Could not retrieve photoshoot index');
        console.log(error);


      })
  }
  public displayById(ps) {
    this.photoServ.photoshotById(ps.id).subscribe(
      dataId => {
        this.selected = dataId;
        this.router.navigateByUrl(`/photoshoot/${ps.id}`)
        if (typeof this.selected.latitude === 'number' && typeof this.selected.longitude === 'number') {
          this.locationUrl = "https://maps.google.com/maps?q=" + dataId.latitude + "," + dataId.longitude;

        }

        // this.photoshotList = null;
      }, errorId => {
        console.log(errorId);

      }
    )
  }

  public deleteId(id: number){
    this.photoServ.deleteById(id).subscribe(
      success => {
        console.log(success);
        console.log('Deleted photoshoot:' + id);
        this.index();


      }, err => {
        console.log(err);
        console.log('Failed to delete photoshoot: ' + id);


      }
    )
  }

  setEditPhotoshoot(ps: Photoshoot) {

      this.editPS = Object.assign({}, ps);
      this.router.navigateByUrl('/photoshoot/edit/' + ps.id)
      console.log(this.editPS);

  }
  updatePhotoshoot(ps: Photoshoot){
    this.selected = null;
    this.photoServ.updatePhotoshoot(ps).subscribe(
      success => {
        this.index();
        console.log(success);
        console.log('Photoshoot successfully updated');
      }, err => {
        console.log(err);
        console.log('Could not update photoshoot');
      }
    );
    this.editPS = null;
  }

}
