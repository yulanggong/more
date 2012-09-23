How to use it?
--------------

Create a new bookmark, and paste the code below in the Address(URL) input.
	
	javascript:m=20;if(R=/(.*?)(\d{1,16})(\D*)$/.exec(location))l=R[2][L="length"],D=function(c){C="";z=c+m;c=0<c?c:0;U="<a%20href=javascript:D(";T="<hr><center>"+(c?U+(c-m)+")><"+c+"</a>":C)+"<input%20onchange=D(+this.value)>"+U+z+")>"+z+"></a><hr>";for(i=c;i<z;i++){p="";for(t=(i+p)[L];p[L]<l-t;)p+="0";i==b&&(h=l-t);a(p+i);!h&&l>t&&a(i)}document.body.innerHTML=T+C+T},a=function(c){C+="<img%20style=position:static%20onerror=this.parentNode.removeChild(this)%20src="+R[1]+c+R[3]+">"},D(b=+R[2])

Name it as `setGen` or what you like.

When you browse some images with numbers in the URL, press the bookmarklet. And the bookmarklet will try to fetch more images with the similar URL. If the URL looks like this 
	
	http://example.com/..../abc-001.jpg
	
The bookmarklet will try to fetch this list of images

	http://example.com/..../abc-001.jpg
	http://example.com/..../abc-002.jpg
	http://example.com/..../abc-003.jpg
	http://example.com/..../abc-004.jpg
	http://example.com/..../abc-005.jpg
	and even more