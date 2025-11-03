import {Component, OnInit} from '@angular/core';
import {Blog} from "../../../models/Blog";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{

  currentBlog!:Blog;


  ngOnInit(): void {
  }



}
