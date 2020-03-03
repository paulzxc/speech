import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SpeechService } from "./speech.service";
import { Speech } from "../models/speech.model";
import { tap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataStorageService {
  constructor(private http: HttpClient, private speechService: SpeechService) {}

  fetchSpeeches() {
    return this.http
      .get<Speech[]>("assets/data/speech.json")
      .pipe(tap(speeches => (this.speechService.speeches = speeches)));
  }
}
