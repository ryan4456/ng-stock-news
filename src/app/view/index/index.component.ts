import { Component, OnInit } from '@angular/core';
import Axios from 'axios';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  max_id = -1;

  list: any[] = [];

  constructor(){
    this.loadList()
  }

  ngOnInit(): void {
  }

  async loadList() {
    let url = `https://stock-news-7-24.herokuapp.com/api/index/news?type=2&max_id=${this.max_id}`
    let result = await Axios.get(url)
    let {next_max_id, items} = result.data
    this.max_id = next_max_id
    this.list = this.list.concat(items)
  }

  reloadList(){
    this.max_id = -1
    this.list = []
    this.loadList()
  }

  handleToDetail(url: string): void {
    window.open(url)
  }

}
