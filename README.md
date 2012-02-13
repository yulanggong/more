How to use it?
--------------

Create a new bookmark, and paste the code below in the Address(URL) input.
	
	javascript:m=20;if(R=/(.*?)(\d{1,16})([^\d]*)$/.exec(location))l=R[2][L='length'],D=function(d){C='';z=d+m;d=d>0?d:0;U='<a%20href=javascript:D(';T='<hr><center><form%20onsubmit=D(+this.b.value)>'+(d?U+(d-m)+')><'+d+'</a>':C)+'<input%20name=b>'+U+z+')>'+z+'></a>'+'</form><hr>';for(i=d;i<z;i++){p='';t=(i+p)[L];while(p[L]<l-t)p+='0';i==b?h=l-t:0;a(p+i);!h&&l>t&&a(i)};document.body.innerHTML=T+C+T},a=function(s){C+='<img%20onerror=this.parentNode.removeChild(this)%20src='+R[1]+s+R[3]+'>'},D(b=+R[2])

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