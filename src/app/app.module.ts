import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/common/header/header.component";
import { PageNotFoundComponent } from "./components/common/page-not-found/page-not-found.component";

import { SpeechModule } from "./components/speech/speech.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SpeechModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
