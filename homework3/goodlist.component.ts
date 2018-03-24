import { Component, OnInit } from '@angular/core';
import { Http,Jsonp, Headers} from '@angular/http';  

@Component({
  selector: 'app-goodlist',
  templateUrl: './goodlist.component.html',
  styleUrls: ['./goodlist.component.css']
})
export class GoodlistComponent implements OnInit {

  constructor(public http:Http ,public jsonp:Jsonp){  }
  //headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
  arr=[];
  ngOnInit() {
    // this.http.get('http://datainfo.duapp.com/shopdata/getGoods.php').subscribe( data=>{ 
    //   console.log(typeof data._body);
    //   console.log(data._body);
    //   var a = data._body;
    //   console.log(JSON.parse(a));
    //  } );
    // this.http.get('http://datainfo.duapp.com/shopdata/datainfo.html').subscribe( data=>{ 
    //   console.log(data);
    //   //console.log(JSON.parse(data['_body']));
    //   //this.list = JSON.parse(data['_body]);
    //  },err=>{
    //    console.log(err);
    //  });
    // this.jsonp.get().subscribe(data=>{
    //    console.log(data);
    //   });
      this.jsonp.get( 'http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK' ).subscribe( data=>{ 

        this.arr=data['_body'];

      } );

     //this.http.post('http://datainfo.duapp.com/shopdata/datainfo.html','', {headers:this.headers} ).subscribe(  );    
  }

}
