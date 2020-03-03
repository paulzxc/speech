import { Component, OnInit } from "@angular/core";
import { SpeechService } from "src/app/services/speech.service";
import { Subscription } from "rxjs";
import { Speech } from "src/app/models/speech.model";

@Component({
  selector: "app-speech-view",
  templateUrl: "./speech-view.component.html",
  styleUrls: ["./speech-view.component.scss"]
})
export class SpeechViewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
