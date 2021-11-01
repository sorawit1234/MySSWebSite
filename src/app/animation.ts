import {
    animation, trigger, animateChild, group,
    transition, animate, style, query
  } from '@angular/animations';
import { Optional } from '@angular/core';
 
 //fade
  export const fader  = 
 trigger('routeAnimations',[
     transition('* <=> *' ,[
         query(':enter,:leave',[
             style({
                 position:'absolute',
                 left:0,
                 width:'100%',
                 opacity:0,
                 transform:'scale(0) translateY()'
             }),
         ],{ optional: true }),
         query(':enter,:leave',[
          animate('900ms ease', style({
                opacity:1,
                width:'100%',
                transform:'scale(0.1) translateY(0)'
            }))  
        ],{ optional: true }),
     ])
 ]);

 export const slider = 
 trigger('routeAnimation',[
     transition('*=>tab',slideTo('tab')),
     transition('*=>tab2',slideTo('tab2')),
     transition('*=>tab3',slideTo('tab3')),
 ]);

 function slideTo(direction:any){
    const optional = {optional:true}
     return [
         query(':enter,:leave',[
             style({
                position:'absolute',
               top:0,
               [direction]:0,
                width:'100%',
                
             })
         ],optional),
         query(':enter,:leave',[
            style({
              [direction]:'-100%',
            })
        ]),
        group([
            query(':enter,:leave',[
                animate('600ms ease', style({
                    [direction]:'100%',
                  }))  
              ],optional),
              query(':enter',[
                animate('600ms ease', style({
                    [direction]:'0%',
                  }))  
              ],optional),
        ]),
         
     ];
 }