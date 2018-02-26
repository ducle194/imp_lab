class Point
{
   constructor( given_x_coordinate,
                given_y_coordinate )
   {
      this.x = given_x_coordinate ;
      this.y = given_y_coordinate ;
   }
}

var starting_points  =  [] ;
var ending_points    =  [] ;
var new_starting_point  = null ;
var new_ending_point  = null ;

var paint = false ;

var mouse_is_over_canvas = false ;

function on_mouse_over( event )
{
   // The mouse was brought over the canvas element.

   mouse_is_over_canvas = true ;

   draw_on_canvas() ;
}

function on_mouse_out( event )
{
   // The mouse was moved out from the canvas element.

   mouse_is_over_canvas = false ;

   draw_on_canvas() ;
}

function on_mouse_down( event )
{
   // The mouse or some other pointing device was
   // pressed down in the canvas area.
   if (mouse_is_over_canvas == true){
     var pointer_position_x = event.offsetX ;
     var pointer_position_y = event.offsetY ;

     if ( event.ctrlKey == true )
      {
           starting_points.pop() ;
           ending_points.pop() ;
      }


      new_starting_point = new Point( pointer_position_x,
                                      pointer_position_y ) ;

      paint = true ;

      draw_on_canvas() ;
    }
}


function on_mouse_move( event )
{
   if ( paint == true )
   {
      var pointer_position_x = event.offsetX ;
      var pointer_position_y = event.offsetY ;

      new_ending_point = new Point( pointer_position_x,
                                   pointer_position_y ) ;

      draw_on_canvas() ;
   }
}

function on_mouse_up( event )
{
   if ( paint == true )
   {
      var pointer_position_x = event.offsetX ;
      var pointer_position_y = event.offsetY ;

      // The drawing of a new line is finished now. The start and
      // end points of the new line will be pushed to the end
      // of the arrays.

      starting_points.push( new_starting_point ) ;
      ending_points.push( new Point( pointer_position_x,
                                     pointer_position_y ) ) ;
      paint = false ;
      new_starting_point = null ;
      new_ending_point   = null ;

      draw_on_canvas() ;
   }
}

//  The following function, which is called from
//  draw_on_canvas(), adjusts coordinates so that the rectangle
//  is shown "in a correct way" in relation to the mouse movement.

function addLine( given_context,
                  starting_point,
                  ending_point)
{
   var upperX= starting_point.x ;
   var upperY = starting_point.y ;
   var lowerX  = ending_point.x ;
   var lowerY = ending_point.y ;

   given_context.save() ;

   given_context.strokeStyle = "black" ;

   given_context.lineWidth = 2 ;

   given_context.beginPath() ;

   given_context.moveTo( upperX,upperY) ;

   given_context.lineTo( lowerX,lowerY ) ;

   given_context.closePath() ;

   given_context.stroke() ;

   given_context.restore() ;
}

function draw_on_canvas()
{
   var canvas = document.getElementById( "canvas" ) ;
   var context = canvas.getContext("2d") ;

   context.globalAlpha = 1.0 ;

   if ( mouse_is_over_canvas == true )
   {
      context.fillStyle = "LightSkyBlue" ;
   }
   else
   {
      context.fillStyle = "Beige" ;
   }
   context.fillRect( 0, 0, canvas.width, canvas.height ) ;

   context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

   for ( var index  =  0 ;
             index  <  starting_points.length ;
             index  ++ )
   {
      addLine( context,
                starting_points[ index ],
                ending_points[ index ]) ;
   }

   /*if ( new_ending_point != null )
   {
      // We will draw a not-yet-finished rectangle.

      addLine( context,
                             new_starting_point,
                             new_ending_point,
                             "Snow" ) ;  // Almost white
   }*/
}
