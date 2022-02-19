document.getElementById('simulate-button').onclick = function() {
    var button = document.getElementById('simulate-button').style.display="none";

    var div = document.createElement('div');
    div.setAttribute('id', 'div-simulate');
    div.setAttribute('style', 'position:absolute;width:500px;height:793px;display:flex;left:0;right:0;margin-left:auto;margin-right:auto;top:60px;');

    var p = document.createElement('p');
    p.setAttribute('id', 'p-simulate');
    p.setAttribute('style', 'position: absolute;top: 10px;right: 30px;');
    p.append( document.createTextNode( "X" ));

    var iframe = document.createElement('iframe');
    iframe.src = 'http://localhost:3000/izidev/minimal';
    iframe.setAttribute('id', 'iframe-simulate');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('frameBorder', '0');
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('style', 'display:flex;overflow:hidden;margin:0 auto;height:793px;width:500px');
    
    div.appendChild(iframe);
    div.appendChild(p);
    document.body.appendChild(div);
} 
