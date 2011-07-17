/* SetGen
 * 作者：Yulanggong, yulanggong@gmail.com
 * 更新日期：2011.07.17
 */
m = 20;//一页内图片的最大数量
if (R = /(.*?)(\d{1,16})([^\d]*)$/.exec(location.href)) {//解析当前URL，并判断解析是否成功
	l = R[2].length;//序号长度
	b = R[2] *1;//序号转为数字
	D = function (d) {//主函数，接受一个起始数
		e = C = ' ';//e为空格，C为图片部分的HTML片段
		z = d + m;//结束的序号
		d = d > 0 ? d : 0;
		for (i = d; i < z ; i++) {
			p='';
			t = (i + p).length;
			for (j = 0; j < l-t ; j++) {
				p += '0'//前缀用的“0”
			};
			i==b?h=l-t:0;//如果序号的长度大于解析出的数字的长度说明有前缀
			t<l?(a(p+i),h?0:a(i)):a(i)//如果有前缀就只用补齐，不能判断有没有前缀时两种都试一遍
		};
		U = e+'<a href=# onclick=D(';//用来拼接的字符串，目的是减小代码长度
		V = ')>';
		W = '</a>';
		T = '<hr><center><form onsubmit=D(this.b.value*1)>'+(d ? U + (d - m) + V + '<' + d + W : e) +'<input name=b>'+ U + z + V + z + '>' + W +'</form><hr>';//拼接翻页部分HTML
		document.body.innerHTML=T+C+T//写入
	};
	a = function(s){//生成图片部分HTML的函数，接受一个序号做参数
		C+='<img onerror=this.parentNode.removeChild(this) src=' + R[1] + s + R[3] + '>'
	};
	D(b)
};
void(0)