export class Photoshoot {
  id: number;
  name: string;
  location: string;
  date: string;
  latitude: number;
  longitude: number;
  shotsTaken: number;
  commentLocation: string;
  commentPerformance: string;
  lensesUsed: string;

  constructor(
    id?: number,
    name?: string,
    location?: string,
    date?: string,
    latitude?: number,
    longitude?: number,
    shotsTaken?: number,
    commentLocation?: string,
    commentPerfomance?: string,
    lensesUsed?: string
  ){
    this.id = id;
    this.name = name;
    this.location = location;
    this.date = date;
    this.latitude = latitude;
    this.longitude = longitude;
    this.shotsTaken = shotsTaken;
    this.commentLocation = commentLocation;
    this.commentPerformance = commentPerfomance;
    this.lensesUsed = lensesUsed;
  }

}
