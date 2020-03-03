import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SpeechComponent } from "./speech.component";
import { SpeechFormComponent } from "./speech-form/speech-form.component";
import { SpeechViewComponent } from "./speech-view/speech-view.component";
import { SpeechSearchComponent } from "./speech-search/speech-search.component";
import { SpeechesResolverService } from "src/app/services/speeches-resolver.service";

const routes: Routes = [
  {
    path: "",
    component: SpeechComponent,
    resolve: [SpeechesResolverService],
    children: [
      {
        path: "",
        component: SpeechViewComponent
      },
      {
        path: "new",
        component: SpeechFormComponent
      },
      {
        path: "search",
        component: SpeechSearchComponent
      },
      {
        path: ":id",
        component: SpeechViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeechRoutingModule {}
