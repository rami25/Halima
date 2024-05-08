import { Component, OnInit } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments! : any[]
  p: number = 1;
  collection: any[] = [1];
  faAdd = faAdd;
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.getComments()
  }
  getComments(){
    this.authService.getComments()
    .subscribe(comments => {
      console.log(comments)
      this.comments = comments
    }) 
  }

}
