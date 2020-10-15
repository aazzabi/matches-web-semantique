import { Component, OnInit } from '@angular/core';
import {GetdataService} from '../getdata.service';
import { Http } from '@angular/http';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgControl } from '@angular/forms';
import { timer } from 'rxjs/observable/timer';
import { Injectable, EventEmitter } from "@angular/core";
declare type GeoLocationServiceState = "disabled" | "searching" | "tracking";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  //****************************************************************************************//
    latpar: number = 35.85124383942946;
  lngpar: number = 10.597083302385158;

estimation=false

  markerspar: markerpar[] = [
   
  ];

///****************map set center
zoom=7
  protected map: any;

 protected mapReady(map) {
    this.map = map;
  }
//****************************
markpar={
  lat: 0.0 ,
      lng:0.0,
      iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
}
  subscription: any;
   table:any
   //***************************************************************************************//
  
  notificationgaz=0

 

//capteur gaz












notificationbtn=0
deletetro(){
  this.notificationbtn=0;
}

 

 
//////// tempurature

////////

  source2 = timer(1000,30000);
//output: 0


  
    dir=false
   lat: number = 35.85124383942946;
  lng: number = 10.597083302385158;

 direction: marker1[] = []

direction1: marker1[] = []
  
  

par={lat:0.0,lng:0.0}
par1={lat:0.0,lng:0.0,time:0}
par2={lat:0.0,lng:0.0,time:0,speed:0}
par3={lat:0.0,lng:0.0}
mark={
  lat: 0.0 ,
      lng:0.0,
      info:'',
      tel:'',
      iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
}

mark1={
  lat: 0.0 ,
      lng:0.0,
      info:'',
      tel:'',
      iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
}
    constructor(public http:Http,public a:GetdataService ,public router:Router ) {
       this.watchNumber = -1;
        this.positionChanged = new EventEmitter();
        this.state = "disabled";
        this.startWatching();
 

//***************************************************************************************************//

    
this.getDirectionpar()
//***************************************************************************************************//

     
     

 if (this.parcours){
   this.getDirection()
   this.startWatching()
   this.direc()
 }

else if (this.position)
this.getposition()
}

    ngOnInit() {
//16/10/2018     


    // Change global volume.
   
//16/10/2018     

  this.getDirectionpar()

    }




getDirection() {
       this.estimation=false
       this.startWatching()

 this.dir=true



 
}
getposition(){
       this.estimation=false
       this.startWatching()


}
    private getUserLocation() {
     /// locate the user
     if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
         this.lat = position.coords.latitude;
         this.lng = position.coords.longitude;

       });
     }
   }

//16/10/2018  
public origin={ lat: 35.85124383942946, lng: 10.597083302385158 }
public destination= { lat: 35.8235112, lng: 10.612969300000032 }
public origin1={ lat: 35.8235112, lng: 10.612969300000032 }

public destination1= { lat: 35.8235112, lng: 10.612969300000032 }

choix = [
     
       {id: 2, name: "position"},
       {id: 3, name: "parcours"},
      
     ];
     selectedValue
    
     position=false
     parcours=false
    

     choix1(){
       switch (this.selectedValue.name) {
        
         case "position":
        
           this.position=true
           this.parcours=false
      

           break;
           case "parcours":
    
           this.position=false
           this.parcours=true
           this.getDirection()

           break; 
           
         default:
           // code...
           break;
       }
     }





depart :0.00
arriver:0.00




//************************************************************************************************//
private getUserLocationpar() {
     /// locate the user
     if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
         this.latpar = position.coords.latitude;
         this.lngpar = position.coords.longitude;

       });
     }
   }


//16/10/2018  
public originpar: any
public destinationpar: any


getDirectionpar() {
  this.originpar = { lat: 36.843990999999995, lng: 10.221934899999999 }
  this.destinationpar = { lat: 34.739822, lng: 10.760019599999964 }
 



}



directionpar: marker1par[] = [{lat: 36.8064948 ,
      lng:10.181531599999971,iconUrl:'https://www.google.tn/imgres?imgurl=https%3A%2F%2Fm.translink.ca%2F-%2Fmedia%2FImages%2Fmobile%2Ficonnextbus.png&imgrefurl=https%3A%2F%2Fm.translink.ca%2F&docid=DdvvmI_RvHHQ4M&tbnid=tjdPPQ8RSrG9qM%3A&vet=10ahUKEwjUxprt_d7eAhUryIUKHe2kAN0QMwgvKAAwAA..i&w=126&h=126&hl=fr&bih=657&biw=1366&q=image%20de%20bus%20icon&ved=0ahUKEwjUxprt_d7eAhUryIUKHe2kAN0QMwgvKAAwAA&iact=mrc&uact=8'
    },{lat: 36.4512893 ,
      lng:10.735663400000021,iconUrl:''
    },{lat: 35.8245029 ,
      lng:10.634584000000018,iconUrl:''
    },{lat: 34.739822 ,
      lng:10.760019599999964,iconUrl:''
    } ]
//***************************************************************************************************//
public getState(): GeoLocationServiceState {
        return this.state;
    }

    public enable() {
        switch (this.state) {
            case "disabled":
                this.startWatching();
                return;
            case "searching":
            case "tracking":
                return;

        }
    }
    public disable() {
        switch (this.state) {
        case "disabled":
            return;
        case "searching":
        case "tracking":
            this.stopWatching();
            return;
        }
    }


    private stopWatching() {
        if (this.watchNumber !== -1) {
            window.navigator.geolocation.clearWatch(this.watchNumber);
            this.watchNumber = -1;
            this.state = "disabled";
        }
    }
 private state: GeoLocationServiceState;
    private watchNumber: number;

    public positionChanged: EventEmitter<Position>;
private startWatching() {
        if (window.navigator && window.navigator.geolocation) {
            this.state = "searching";
            this.watchNumber = window.navigator.geolocation.watchPosition(
                (position) => {
                  console.log("positon lat: "+position.coords.latitude+"lng:"+position.coords.longitude)
                   this.lat=position.coords.latitude;
                   this.origin1.lat=position.coords.latitude;
                   this.origin1.lng=position.coords.longitude
                   this.lng=position.coords.longitude
                    this.state = "tracking";
                    this.positionChanged.next(position);
                },
                (error) => {
                    // sending error will terminate the stream
                    this.positionChanged.next(null);
                    this.disable();
                },
                {
                    enableHighAccuracy: true,
                    timeout: 5000
                });
        }
    }
    direc(){
      this.dir=true
    }
bonjour(){
	console.log('hello')
	this.router.navigate(['/stade']);
}
 }
 interface marker {
  lat: number;
  lng: number;
  info: string;
  tel:string;
  iconUrl?: string;
}
 interface marker1 {
  lat: number;
  lng: number;
}
interface vit1 {
  lat: number;
  lng: number;








  speed:number;
}
///*******************************************//
 interface marker1par {
  lat: number;
  lng: number;
  iconUrl?: string;
}
 interface markerpar {
  lat: number;
  lng: number;
  iconUrl?: string;
}
//*******************************************************//