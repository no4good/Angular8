import {
  Component,
  Input,
  OnInit,
  ElementRef,
  ContentChild,
  OnChanges,
  DoCheck,
  SimpleChanges,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from "@angular/core";
import { Post } from "../app.component";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit, OnChanges, DoCheck {
  @Input() post: Post;
  @Output() onRemove = new EventEmitter<number>();
  @ContentChild("info", { static: false }) infoRef: ElementRef;
  removePost() {
    this.onRemove.emit(this.post.id);
  }

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {}
  ngDoCheck(): void {}
  ngOnInit() {}
}
