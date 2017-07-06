import { Component, OnInit, forwardRef } from '@angular/core';
import { ContentComponent } from "app/common/component/base/content.component";

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers: [{ provide: ContentComponent, useExisting: forwardRef(() => ViewComponent) }]
})
export class ViewComponent extends ContentComponent implements OnInit {

  constructor() {
    super("viewComponent");
  }

  ngOnInit() {
  }

}
