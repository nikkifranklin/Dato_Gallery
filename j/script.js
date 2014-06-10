// JavaScript Document

var gallery = {
		
	init: function(e)
	{
		//collect all anchor tags inside of nav
		//add event handler on to each 
		var links = document.querySelectorAll('#main a');
		for(var i=0;i < links.length; i++){
			links[i].onclick = gallery.changePic;
		}	
		
		//set up links in albums
		var albums = document.querySelectorAll('#albums a');
		for(var j=0; j < albums.length; j++)
		{
			albums[j].onclick = gallery.changeAlbum;
		}
		
		//hide pic links
		var divs = document.querySelectorAll('#main div');
		for(var k=0; k < divs.length; k++)
		{
			divs[k].classList.add('hide');
		}
			divs[0].classList.remove('hide');
	},

	
	changePic: function(e)
	{
		e.preventDefault();
		var pic = document.querySelector('#pic');
		var caption = document.getElementById('caption');
		pic.src = e.target.href;
		caption.firstChild.nodeValue = e.target.title;
	},


	setStatus: function(e, selector) 
	{
		e.preventDefault();
		var target = e.target;
		var links = document.querySelectorAll(selector);
	
		if (target.parentNode.id === 'albums') 
		{
			var href = '#' + et.target.href.split('#')[1];
			var album = document.querySelector(href);
			target = album.getElementsByTagName('a')[0];}
			
			
    for (var b = 0, g = links.length; b < g; b++) 
    {
        links[b].className = 'off';
    }

    target.className = 'on';
    },

  
	
		
	changeAlbum: function(e)
	{
		e.preventDefault();
		
		//hide all album divs
		var divs = document.querySelectorAll('#main div');
		for(var i = 0; i < divs.length; i++){
			divs[i].classList.add('hide');
		}
		
		//show selected album
		var album = e.target.href.split('#')[1];
		document.getElementById(album).classList.remove('hide');
		
		//show first pic in album
		var pic = document.querySelector('#pic');
		var caption = document.getElementById('caption');
		var firstpic = document.getElementById(album).querySelectorAll('a')[0];
		
		pic.src = firstpic.href;
		caption = firstChild.nodeValue = firstpic.title;
		setStatus(e, '#albums a');
	}
	
}

		window.onload = gallery.init;