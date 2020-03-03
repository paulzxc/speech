import { Component, OnInit, Input } from "@angular/core";
import { Speech } from "src/app/models/speech.model";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-speech-item",
  templateUrl: "./speech-item.component.html",
  styleUrls: ["./speech-item.component.scss"]
})
export class SpeechItemComponent implements OnInit {
  @Input("speech") speech: Speech;
  public id: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
    });
  }
}
