import { Pipe, PipeTransform } from "@angular/core";
import { Speech } from "../models/speech.model";

@Pipe({
  name: "speechFilter"
})
export class SpeechFilterPipe implements PipeTransform {
  transform(speeches: Speech[], term: string): Speech[] {
    if (!term) {
      return speeches;
    }
    const query = term + "";
    return speeches.filter(speech => {
      return (
        speech.title.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
        speech.author.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
        speech.keywords.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
        speech.content.toLowerCase().indexOf(query.toLowerCase()) > -1
      );
    });
  }
}
