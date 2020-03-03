import { Component, OnInit } from "@angular/core";
import { Speech } from "src/app/models/speech.model";
import { SpeechService } from "src/app/services/speech.service";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router, Params } from "@angular/router";

@Component({
  selector: "app-speech",
  templateUrl: "./speech.component.html",
  styleUrls: ["./speech.component.scss"]
})
export class SpeechComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
