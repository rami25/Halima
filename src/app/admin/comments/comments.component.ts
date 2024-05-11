import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments! : any[]
  p: number = 1;
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
