/* SetGen
 * 作者：Yulanggong, yulanggong@gmail.com
 * 更新日期：2011.11.30
 * 
 * 更新日志 2011.11.30
 * 兼容IE6
 */
 
m = 20;//一页内图片的数量 不使用 var 是为了节省代码，IE6 的Bookmarklet有长度限制
if (R = /(.*?)(\d{1,16})([^\d]*)$/.exec(location))//解析当前 URL，并判断解析是否成功
												  //为了省略 {} ,以后的代码使用 ',' 分割
	l = R[2][L = 'length'],//l 为序号字符长度，L 为字符串,可以把以后的".length"写成"[L]"节省代码
	D = function (d) {//主函数，接受一个起始页码参数，必须为数字
		C = '';//C 为图片部分的HTML片段
		z = d + m;//结束的序号
		d=d>0?d:0;//开始的序号不小于 0
		
		U = '<a href=javascript:D(';//用来拼接的字符串，目的是减小代码长度
		T = '<hr><center><form onsubmit=D(+this.b.value)>'//T 为页面上部和下部的翻页控制部分
			+(d ? U + (d - m) + ')><' + d + '</a>' : C) //前翻页链接，当 d==0 时，用空格代替
			+'<input name=b>'//页码输入框
			+ U + z + ')>' + z + '></a>' //前翻页链接
			+'</form><hr>';//拼接翻页部分 HTML
			
		for (i = d; i < z ; i++) {//此循环累加图片部分的 HTML 代码
			p='';
			t = (i + p)[L];// i 的字符长度
			while (p[L] < l-t) p += '0';//生成前缀的0
			i==b//判断是否第一次调用，第一次调用初始化 h，再次调用以后不再改动
			?h=l-t// h 为是否带前缀，如果没有前缀 l-t==0，带前缀是 l-t>0;
			:0;//不执行操作
			a(p+i);//只能判断带前缀，无法判断不带前缀，所以总会生成一个带前缀的链接
			!h&&l>t&&a(i)//如果确定带前缀了，就不用生成不带前缀的了
						 //这里的"&&"可以当做 if 用，当 前两项都为 true 时才会执行 a(i)
		};
		
		document.body.innerHTML=T+C+T//写入到 body
	},
	a = function(s){//生成图片部分HTML的函数，接受一个序号做参数
		C+='<img onerror=this.parentNode.removeChild(this) src=' + R[1] + s + R[3] + '>'
	},
	D(b=+R[2])//第一次调用,'+'号可以把序号字符串转为数字