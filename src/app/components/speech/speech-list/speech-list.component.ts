import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Speech } from "src/app/models/speech.model";
import { SpeechService } from "src/app/services/speech.service";

@Component({
  selector: "app-speech-list",
  templateUrl: "./speech-list.component.html",
  styleUrls: ["./speech-list.component.scss"]
})
export class SpeechListComponent implements OnInit, OnDestroy {
  public speeches: Speech[];
  private subscription: Subscription;

  constructor(private speechService: SpeechService) {}

  ngOnInit() {
    this.subscription = this.speechService.speechesChanged.subscribe(
      speeches => (this.speeches = this.speeches)
    );
    this.speeches = this.speechService.speeches;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
