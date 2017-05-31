var  radii = [ 1, 1/3, 1/3, 1/3, 1/3, 1/3, 1/3 ]
  , speeds = [ -Math.PI/300, 3*Math.PI/300, 9*-Math.PI/300, 27*Math.PI/300, 81*-Math.PI/300, 81*3*Math.PI/300 ]
  , toDraw = [ 0, 0, 0, 0, 0, 1 ];

$(function() {
  $( '#sliders div' ).each( function( ix, div ){
    function onChange( ev, ui ){ radii[ ix + 1 ] = ui.value / 100; }

    $( '<div></div>' ).appendTo( div ).slider({
      orientation : 'vertical'
      ,   animate : true
      ,     value : 100 * radii[ ix + 1 ]
      ,     slide : onChange
      ,    change : onChange
      ,      step : .01
    });
    
    $( div ).find( 'input' ).on( 'change', function(){
      toDraw[ ix ] = !!this.checked;
    });
  });
  
  $( '#speeds div' ).each( function( ix, div ){
    function onSpeed( ev, ui ){
      speeds[ ix ] = 5* ( ( ui.value / 100 ) - .5 ); 
    }
    
    $( div ).slider({
      orientation : 'vertical'
      ,   animate : true
      ,     value : 50 + ( 100 * speeds[ ix ] / 5 )
      ,     slide : onSpeed
      ,    change : onSpeed
      ,      step : .01
    });
  });
});

var fractal = document.getElementById( 'fractal' )
  , circles = document.getElementById( 'circles' )
  ,    fCtx = fractal.getContext( '2d' )
  ,    cCtx = circles.getContext( '2d' )
  ,   width = circles.width
  ,  height = circles.height
  ,  rotate = [ 0, 0, 0, 0, 0, 0, 0 ]
  ,      pX = 0
  ,      pY = 0
  ,  rCount = 0
  ,       r = 255
  ,       g = 255
  ,       b = 0
  ,      rD = -5
  ,      gD = -5
  ,      bD = 5
;

fCtx.strokeStyle = '#99FFFF';
fCtx.fillStyle   = 'rgba( 0, 0, 0, .05 )';
fCtx.lineWidth   = 2;

cCtx.strokeStyle = '#FFFFFF';
cCtx.lineWidth   = 2;

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

(function animloop(){
  requestAnimFrame(animloop);
  render();
})();

function render(){
  var x = width  / 2
    , y = height / 2
    , r = Math.min( width, height ) / 2
    , r2
    ;

  // change stroke color
  b += bD;
  if( !b || ( 255 === b ) ){
    bD *= -1;
    g += gD;
    if( !g || ( 255 === g ) ){
      gD *= -1;
      r += rD;
      if( !r || ( 255 === r ) ){
        rD *= -1;
      }
    }
  }
  fCtx.strokeStyle = '#' + ( ( 1<<24 ) + ( r<<16 ) + ( g<<8 ) + b ).toString(16).substr(1);

  // partially erase the line
  if( !( ++rCount % 20 ) ){
    fCtx.fillRect( 0, 0, width, height );
  }
  
  // clear the circles
  cCtx.clearRect( 0, 0, width, height );

  // draw one circle
  function drawCircle( ix ){
    cCtx.beginPath();
    cCtx.arc( x, y, r, 0, 2 * Math.PI, false );
    cCtx.stroke();
    
    if( toDraw[ ix - 1 ] ){
      fCtx.beginPath();
      if( pX || pY ){
        fCtx.moveTo( pX, pY );
        fCtx.lineTo( x, y );
        fCtx.stroke();
      }
      pX = x;
      pY = y;
    }
  }

  // draw the circles
  for( var i=0, l=rotate.length; i<l; i++ ){
    drawCircle( i );
    r2 = r * radii[i+1]; // shrink each circle
    rotate[ i ] += .1 * speeds[ i ] * 10;
    x += ( r - r2 ) * Math.cos( rotate[ i ] );
    y += ( r - r2 ) * Math.sin( rotate[ i ] );
    r = r2;
  }
}