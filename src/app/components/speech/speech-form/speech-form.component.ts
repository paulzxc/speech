import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { SpeechService } from "src/app/services/speech.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  NgbModal,
  NgbCalendar,
  NgbActiveModal
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-speech-form",
  templateUrl: "./speech-form.component.html",
  styleUrls: ["./speech-form.component.scss"]
})
export class SpeechFormComponent implements OnInit {
  private id: number;
  editMode: boolean = false;
  newMode: boolean = false;
  speechUpdated: boolean = false;
  showConfirmationModal: boolean = false;
  speechForm: FormGroup;
  alertMessage: string;
  isAlertVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private speechService: SpeechService,
    private modalService: NgbModal,
    private calendar: NgbCalendar
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (
        params["id"] != null &&
        this.speechService.getSpeech(params["id"]) == null
      ) {
        this.router.navigate(["404"]);
      } else {
        this.id = +params["id"];
        this.editMode = params["id"] != null;
        this.newMode = String(this.router.url).includes("new");
        this.initForm();
      }
    });
  }

  onFormSave() {
    if (this.speechForm.valid) {
      this.speechService.speech = this.speechForm.value;
      this.speechForm.markAsPristine();
      this.speechUpdated = true;
      this.alertMessage = "Speech has been successfully saved!";
      this.showSuccessAlert();
    }
  }

  onFormAdd() {
    this.speechService.addSpeech(this.speechForm.value);
    this.speechForm.reset();
    this.alertMessage = "Speech has been successfully added!";
    this.showSuccessAlert();
  }

  onFormReset() {
    this.speechForm.reset();
  }

  onFormDelete(modal: NgbActiveModal) {
    modal.close();
    this.speechService.deleteSpeech(this.speechForm.controls.id.value);
    this.router.navigate(["speech"]);
  }

  onFormShare() {
    console.log(this.speechService.speeches);
  }

  private initForm() {
    let speechId;
    let speechTitle = "";
    let speechContent = "";
    let speechAuthor = "";
    let speechKeywords = "";
    let speechDate = "";

    if (this.editMode) {
      let speech = this.speechService.getSpeech(this.id);
      speechId = speech.id;
      speechTitle = speech.title;
      speechContent = speech.content;
      speechAuthor = speech.author;
      speechKeywords = speech.keywords;
      speechDate = speech.date;
    }

    if (this.newMode) {
      speechId = this.speechService.getNextSpeechID();
    }

    this.speechForm = new FormGroup({
      id: new FormControl(speechId),
      title: new FormControl(speechTitle, Validators.required),
      content: new FormControl(speechContent, Validators.required),
      author: new FormControl(speechAuthor, Validators.required),
      keywords: new FormControl(speechKeywords, Validators.required),
      date: new FormControl(speechDate, [
        Validators.required,
        Validators.pattern(
          /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
        )
      ])
    });
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }

  private showSuccessAlert() {
    this.isAlertVisible = true;
    setTimeout(() => {
      this.isAlertVisible = false;
    }, 3000);
  }
}
