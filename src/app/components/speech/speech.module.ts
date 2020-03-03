import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpeechComponent } from "./speech.component";
import { SpeechListComponent } from "./speech-list/speech-list.component";
import { SpeechItemComponent } from "./speech-list/speech-item/speech-item.component";
import { SpeechFormComponent } from "./speech-form/speech-form.component";
import { SpeechRoutingModule } from "./speech-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SpeechSearchComponent } from "./speech-search/speech-search.component";
import { SpeechViewComponent } from "./speech-view/speech-view.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SpeechFilterPipe } from "src/app/pipes/speech-filter.pipe";

@NgModule({
  declarations: [
    SpeechComponent,
    SpeechListComponent,
    SpeechItemComponent,
    SpeechFormComponent,
    SpeechSearchComponent,
    SpeechViewComponent,
    SpeechFilterPipe
  ],
  imports: [
    CommonModule,
    SpeechRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  exports: [
    SpeechComponent,
    SpeechListComponent,
    SpeechItemComponent,
    SpeechFormComponent
  ]
})
export class SpeechModule {}
