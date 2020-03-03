import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { DataStorageService } from "./data-storage.service";
import { Speech } from "../models/speech.model";

@Injectable({
  providedIn: "root"
})
export class SpeechesResolverService implements Resolve<Speech[]> {
  constructor(private dataStorage: DataStorageService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dataStorage.fetchSpeeches();
  }
}
