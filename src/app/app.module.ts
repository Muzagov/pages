import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './res/view/header/header.component';
import { Cont1Component } from './first-page/res/view/cont1/cont1.component';
import { Cont2Component } from './first-page/res/view/cont2/cont2.component';
import { Cont3Component } from './first-page/res/view/cont3/cont3.component';
import { Cont4Component } from './first-page/res/view/cont4/cont4.component';
import { Cont5Component } from './first-page/res/view/cont5/cont5.component';
import { Cont6Component } from './first-page/res/view/cont6/cont6.component';
import { FooterComponent } from './res/view/footer/footer.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { Cont7Component } from './second-page/res/view/cont7/cont7.component';
import { Cont8Component } from './second-page/res/view/cont8/cont8.component';
import { Cont9Component } from './second-page/res/view/cont9/cont9.component';
import { Cont10Component } from './second-page/res/view/cont10/cont10.component';
import { Cont11Component } from './second-page/res/view/cont11/cont11.component';
import { Cont12Component } from './second-page/res/view/cont12/cont12.component';
import { Cont13Component } from './second-page/res/view/cont13/cont13.component';
import { Cont14Component } from './second-page/res/view/cont14/cont14.component';
import { Cont15Component } from './second-page/res/view/cont15/cont15.component';
import { Cont16Component } from './second-page/res/view/cont16/cont16.component';
import { Cont17Component } from './second-page/res/view/cont17/cont17.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Cont1Component,
    Cont2Component,
    Cont3Component,
    Cont4Component,
    Cont5Component,
    Cont6Component,
    FooterComponent,
    FirstPageComponent,
    SecondPageComponent,
    Cont7Component,
    Cont8Component,
    Cont9Component,
    Cont10Component,
    Cont11Component,
    Cont12Component,
    Cont13Component,
    Cont14Component,
    Cont15Component,
    Cont16Component,
    Cont17Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
