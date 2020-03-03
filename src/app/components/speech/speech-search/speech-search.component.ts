import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { SpeechService } from "src/app/services/speech.service";
import { Speech } from "src/app/models/speech.model";

@Component({
  selector: "app-speech-search",
  templateUrl: "./speech-search.component.html",
  styleUrls: ["./speech-search.component.scss"]
})
export class SpeechSearchComponent implements OnInit, OnDestroy {
  query: string;
  subscription: Subscription;
  speeches: Speech[];
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

  excerpt(string: string) {
    return string.slice(0, 100);
  }
}
