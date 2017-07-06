import { Component, OnInit, forwardRef } from '@angular/core';
import { ContentComponent } from "app/common/component/base/content.component";

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [{ provide: ContentComponent, useExisting: forwardRef(() => FormComponent) }]
})
export class FormComponent extends ContentComponent implements OnInit {

  constructor() {
    super("formComponent");
  }

  ngOnInit() {
  }

}
