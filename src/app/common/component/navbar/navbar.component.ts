import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from "app/common/component/navbar/manu.item.model";

@Component({
  selector: 'vertical-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input()
  menuItems: MenuItem[];;

  @Output()
  menuItemSelectedEvent = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit() { }

  onMenuItemSelected(itemClickEvent: MouseEvent) {
    this.menuItemSelectedEvent.emit(itemClickEvent);
  }
}
