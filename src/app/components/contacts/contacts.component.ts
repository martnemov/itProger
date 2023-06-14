import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  hasError = false;
  error: string;
  comments: string[];
  names: string[];

  ngOnInit(): void {
    this.comments = [];
    this.names = []
  }

  addComment(comment, name){
    if(comment.length < 3 || name.length < 3){
      this.hasError = true;
      this.error = 'Имя или сообщение слишком маленькое!';
    } else{
      this.hasError = false;
      this.error = '';
    this.names.push(name)
    this.comments.push(comment)}
    return false;
  }
}
