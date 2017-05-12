import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'topbar',
  templateUrl: 'topbar.component.html',
  styleUrls:['topbar.component.css'],
   
})
export class TopbarComponent {


 user={
   'firstName':'Mario',
   'lastName':'Rossi'
 }

 toggleMenu(){
    console.log("toggleMenu");
    if($("#topbar-container-id .inner-menu-wrapper").is(":visible")){
      $(".user-info i").removeClass("fa-chevron-up");
      $(".user-info i").addClass("fa-chevron-down");
      $("#topbar-container-id .inner-menu-wrapper").slideUp( 400 );
    }else{
      $(".user-info i").removeClass("fa-chevron-down");
      $(".user-info i").addClass("fa-chevron-up");  
      $("#topbar-container-id .inner-menu-wrapper").slideDown( 400 );
    }
 }

 hideMenu(){
    console.log("hideMenu");
    $(".user-info i").removeClass("fa-chevron-up");
    $(".user-info i").addClass("fa-chevron-down");
    $("#topbar-container-id .inner-menu-wrapper").slideUp( 400 );
 }
}