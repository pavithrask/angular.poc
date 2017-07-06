import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from "app/common/component/navbar/manu.item.model";


@Component({
  selector: 'tree-view',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss']
})
export class TreeViewComponent implements OnInit {

  @Input() menuItems: Array<MenuItem>;
  @Input() parentId: String;

  ulClass: string;

  @Output()
  menuItemSelectedEvent = new EventEmitter<MouseEvent>();

  hasParent: boolean = false;

  onSelectMenuItem(itemClickEvent: MouseEvent) {
    this.menuItemSelectedEvent.emit(itemClickEvent);
  }

  ngOnInit(): void {
    this.determineParent();
  }



  determineParent(): void {
    if (this.parentId == undefined) {
      this.parentId = "";
    } else {
      this.parentId = "/" + this.parentId;
      this.hasParent = true;
    }
  }

  isParent(): boolean {
    if (this.parentId == "")
      return true
    else {
      return false;
    }
  }

  
}
