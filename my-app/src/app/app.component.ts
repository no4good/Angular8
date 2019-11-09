import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  // title = "Dinamic title";
  // arr = [1, 2, 3];
  // inputValue = "";
  // img = "https://i.ebayimg.com/images/g/VR4AAOSwb1ldcWBb/s-l300.jpg";
  // constructor() {
  //   setTimeout(() => {
  //     this.img = "https://i.ytimg.com/vi/65rkTCuFtjo/hqdefault.jpg";
  //   }, 5000);
  // }
  // onInput(event?: any) {
  //   this.inputValue = event.target.value;
  // }
  // onClick() {
  //   console.log(`Click`);
  // }

  //bgToggle = false;
  // Toggle = false;
  arr = [1, 1, 2, 3, 5, 8, 13];
  obj = [
    {
      title: "post1",
      auth: "Vlad",
      coments: [
        { name: "Max1", text: "lorem1" },
        { name: "Max2", text: "lorem2" },
        { name: "Max3", text: "lorem3" }
      ]
    },
    {
      title: "post2",
      auth: "Vlad2",
      coments: [
        { name: "Max11", text: "1lorem1" },
        { name: "Max22", text: "2lorem2" },
        { name: "Max33", text: "3lorem3" }
      ]
    }
  ];
}
