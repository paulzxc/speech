import { Injectable } from "@angular/core";
import { Speech } from "../models/speech.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpeechService {
  private _speeches: Speech[];
  public speechesChanged = new Subject<Speech[]>();
  constructor(private http: HttpClient) {}

  get speeches(): Speech[] {
    return this._speeches;
  }

  set speeches(speeches: Speech[]) {
    this._speeches = speeches;
    this.speechesChanged.next(this._speeches);
  }

  getSpeech(id: number) {
    return this._speeches.find(s => s.id == id);
  }

  set speech(speech: Speech) {
    const updateSpeechIndex = this._speeches.findIndex(s => s.id === speech.id);
    this._speeches[updateSpeechIndex] = speech;
    this.speechesChanged.next(this._speeches);
  }

  deleteSpeech(id: number) {
    const deleteSpeechIndex = this._speeches.findIndex(s => s.id == id);
    this._speeches.splice(deleteSpeechIndex, 1);
    this.speechesChanged.next(this._speeches);
  }

  addSpeech(speech: any) {
    this._speeches.push(speech);
    this.speechesChanged.next(this._speeches);
  }

  getNextSpeechID() {
    if (this.speeches.length > 0) {
      return this.speeches[this.speeches.length - 1].id + 1;
    } else {
      return 1;
    }
  }
}
