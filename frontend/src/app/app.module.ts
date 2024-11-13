import { NgModule, ModuleWithProviders } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAnalyticsModule } from "@angular/fire/compat/analytics";
import { environment } from "../environments/environment";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,

    SidebarComponent,
    AngularFireModule.initializeApp(
      environment.firebaseConfig
    ) as ModuleWithProviders<any>,
    AngularFireAnalyticsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
