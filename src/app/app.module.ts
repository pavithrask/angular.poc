import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/component/navbar/navbar.component';
import { TreeViewComponent } from './common/component/navbar/treeview/treeview.component';
import { MenuItemComponent } from './common/component/navbar/treeview/menuitem/menuitem.component';
import { ContentAreaComponent } from './common/component/contentarea/contentarea.component';
import { ItemInfoComponent } from './common/component/iteminfo/iteminfo.component';
import { ViewComponent } from './common/component/view/view.component';
import { FormComponent } from './common/component/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TreeViewComponent,
    MenuItemComponent,
    ContentAreaComponent,
    ItemInfoComponent,
    ViewComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
