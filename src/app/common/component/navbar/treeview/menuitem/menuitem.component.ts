import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from "app/common/component/navbar/manu.item.model";

@Component({
    selector: 'menu-item',
    templateUrl: './menuitem.component.html',
    styleUrls: ['./menuitem.component.scss']
})
export class MenuItemComponent implements OnInit {

    @Input()
    menuItem: MenuItem;
    @Input()
    parentId: String;
    id: String;
    @Output()
    menuItemClickedEvent = new EventEmitter<MouseEvent>();

    constructor() { }

    ngOnInit() {
        this.id = this.parentId + "/" + this.menuItem.label;
    }

    onMenuItemClicked(event: MouseEvent) {
        this.menuItemClickedEvent.emit(event);

    }
    hasChildren() {
        return this.menuItem.menuItems.length > 0 ? true : false;
    }
}
