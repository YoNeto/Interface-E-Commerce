import { Component, OnInit } from '@angular/core';
import { bookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;
  bookservice: bookService

  constructor(bookService: bookService) {
    this.bookservice = bookService;
   }

  ngOnInit(): void {
    this.livros = this.bookservice.getBack().subscribe(data => {
      this.livros = data;
    })
  }

}
