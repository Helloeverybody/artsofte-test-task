import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit{
  text = "вставить текст"
  ngOnInit(){
  }
  imgPath = "https://avatars.mds.yandex.net/get-zen_doc/248942/pub_5d3390aeddfef600ad9495fb_5d33997a46f4ff00aedad285/scale_1200"
  flag = false
  warhammer = "warhammer"
  onClick(){
    if (this.flag) {
      this.flag = false
      this.text = 'измененный текст'
    } else {
      this.text = 'изначальный текст'
      this.flag = true
    }
  }
}
