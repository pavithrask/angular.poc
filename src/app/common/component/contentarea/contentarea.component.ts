import { Component, OnInit, AfterViewInit, ContentChildren, QueryList } from '@angular/core';
import { ContentComponent } from "app/common/component/base/content.component";

@Component({
  selector: 'content-area',
  templateUrl: './contentarea.component.html',
  styleUrls: ['./contentarea.component.scss']
})
export class ContentAreaComponent implements OnInit, AfterViewInit {

  @ContentChildren(ContentComponent) 
  editors: QueryList<ContentComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // throw new Error("Method not implemented.");
  }

}
