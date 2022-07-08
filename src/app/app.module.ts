import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PortalModule } from '@angular/cdk/portal';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { DragSectionComponent } from './drag-section/drag-section.component';
import { AuthComponent } from './auth/auth.component';
import { RoutingModule } from './routing.module';
import { BuilderComponent } from './builder/builder.component';
import { ErrComponent } from './err/err.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    FormBuilderComponent,
    DragSectionComponent,
    AuthComponent,
    BuilderComponent,
    ErrComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
