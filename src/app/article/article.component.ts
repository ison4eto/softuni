import { Component, OnInit, Input } from '@angular/core';
import Article from '../models/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private symbols: number = 250
  @Input() article: Article
  @Input() articleDesc: string
  descToShow: string
  articleDescLen: number
  showReadMoreBtn: boolean = true
  showHideBtn: boolean = false
  imageIsShown: boolean = false
  imageButtonTitle: string = 'Show Image'
  constructor() {
    this.articleDescLen = 0
    this.descToShow = ''
  }

  readMore(): void {
    this.articleDescLen += this.symbols
    if (this.articleDescLen >= this.articleDesc.length) {
      this.showHideBtn = true
      this.showReadMoreBtn = false
    } else {
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen)
    }
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown
    if (this.imageButtonTitle === 'Show Image')
      this.imageButtonTitle = 'Hide Image'
    else
      this.imageButtonTitle = 'Show Image'
  }

  hideDesc(): void {
    this.articleDesc = ''
    this.articleDescLen = 0
    this.showReadMoreBtn = true
    this.showHideBtn = false
  }

  ngOnInit() {
  }

}
