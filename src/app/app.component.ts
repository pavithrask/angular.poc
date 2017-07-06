import { Component } from '@angular/core';
import { MenuItem } from "app/common/component/navbar/manu.item.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuItems: Array<MenuItem>
  constructor() {

    let home21 = MenuItem.createMenuItem('{"name": "home21", "label" : "Home21"}');
    let home22 = new MenuItem("home21", "Home21", []);
    let movie21 = new MenuItem("movie21", "Movie21", []);
    let movie22 = new MenuItem("movie21", "Movie21", []);
    let tv21 = new MenuItem("tv21", "TV21", []);
    let tv22 = new MenuItem("tv21", "TV21", []);

    let home = new MenuItem("home", "Home", [home21, home22]);
    let movie = new MenuItem("movie", "Movie", [movie21, movie22]);
    let tv = new MenuItem("tv", "TV", [tv21, tv22]);
    this.menuItems = [home, movie, tv];

    // this.menuItems = [
    //   {
    //     name: "home",
    //     label: "Home",
    //     menuItems: [{
    //       name: "home21",
    //       label: "Home21"
          
    //     }, {
    //       name: "home22",
    //       label: "Home22"
          
    //     }]
    //   },
    //   {
    //     name: "movies",
    //     label: "Movies",
    //     menuItems: [{
    //       name: "movies21",
    //       label: "Movies21"
    //     }, {
    //       name: "movies22",
    //       label: "Movies22"
    //     }]
    //   },
    //   {
    //     name: "tv",
    //     label: "TV",
    //     menuItems: [{
    //       name: "tv21",
    //       label: "TV21"
    //     }, {
    //       name: "tv22",
    //       label: "TVddd22"
    //     }]
    //   }

    // ];

    // this.parseJson('[{"name": "1", "label" : "Home21", "menuItems": [{"name": "11", "label" : "Home22"},{"name": "12", "label" : "Home22"}]}, {"name": "2", "label" : "Home22"}]');
  }

  menuItemClidk(e: MouseEvent) {
    console.log(e.currentTarget);
    console.log(e);
  }

  // parseJson(data: string): MenuItem[] {
  //   let jsonData: MenuItem[] = JSON.parse(data);
  //   console.log(jsonData[0].menuItems[0].name);
  //   return jsonData;
  // }
}
