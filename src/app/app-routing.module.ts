import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./components/common/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "speech",
    loadChildren: () =>
      import("./components/speech/speech.module").then(m => m.SpeechModule)
  },
  {
    path: "",
    redirectTo: "/speech",
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
