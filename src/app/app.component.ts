import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  items: any = [
    { id: 1, name: "item1" },
    { id: 2, name: "item2" },
    { id: 3, name: "item3" }
  ];
  addedItems: any = [];
  checkbox: boolean;

  addItems(item: string) {
    if (item) {
      this.addedItems.push(item);
      this.checkbox = true;
      alert("added");
    }
  }
  deleteItems(deletedItem: string) {
    this.addedItems.splice(this.addedItems.indexOf(deletedItem), 1);
    this.checkbox = false;
    console.log(this.addedItems);
    alert("deleted");
  }
}
export interface AddedItems {
  id: string;
  name: string;
}
