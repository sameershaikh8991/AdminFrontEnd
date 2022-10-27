import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
// import { FormGroup,FormBuilder, FormControl,Validator, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  alert:boolean=false;
  flight: Flight = new Flight();


 
  constructor(private flightService:FlightService,private _router:Router) { }



  ngOnInit(): void {

    




  }


  addFlight(){
    
    this.flightService.addFlight(this.flight).subscribe(
      data => {
        //  this._router.navigate(['']);
        // this.alert=true;
        // this.form.reset({})
      } ,
      error => 
      {
        console.log("error occured");
      }
    )

  }

  close(){
    this.alert=false;
  }





}


