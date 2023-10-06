import { Component } from '@angular/core';

interface  Word {
  word: string;
  times: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  text: string = ''

  resultArray: Word[] = []

  error: boolean = false
  showTable: boolean = false

  translate(){

    this.resultArray = [];
    let splittedText: string[] = [];

    if(this.text !== ''){
      this.error = false;
      this.showTable = true;
      splittedText = (this.text.trim().toLowerCase().replace(/[?.!,"\(\)]/g, "").replace(/[ ]{2,}/g, "").split(' '));
    }else{
      this.error = true;
    }

    for(let word of splittedText){
      let existinWord = this.resultArray.find(item => item.word === word)

      if(existinWord){
        existinWord.times++
      } else {
        this.resultArray.push({word: word, times: 1})
      }
    }
    this.resultArray.sort((a, b) => b.times - a.times);
  }

}
