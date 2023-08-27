import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../json-placeholder.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: any[] = [];

  constructor(private jsonPlaceholderService: JsonPlaceholderService) { }

  ngOnInit(): void {
    this.jsonPlaceholderService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
