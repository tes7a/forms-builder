import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PortalModule } from '@angular/cdk/portal';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { DragSectionComponent } from './drag-section/drag-section.component';
import { AuthComponent } from './auth/auth.component';
import { RoutingModule } from './routing.module';
import { BuilderComponent } from './builder/builder.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    FormBuilderComponent,
    DragSectionComponent,
    AuthComponent,
    BuilderComponent,
  ],
  imports: [
    BrowserModule,
    PortalModule,
    RouterModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
