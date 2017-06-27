/**
 * More
 */
 
m = 20;
// imagesPerPage = 20;

if (R = /(.*?)(\d{1,16})(\D*)$/.exec(location))
// result = /(.*?)(\d{1,16})(\D*)$/.exec(location.href);
// if (result)

    l = R[2][L = 'length'],
    // numLength = result[2].length;

    D = function (d) {
    // main = function (start) {

        C = '';
        z = d + m;
        d = d > 0 ? d : 0;
        // content = '';
        // end = start + imagesPerPage
        // start = start > 0 ? start : 0;
        
        U = '<a href=javascript:D(';
        T = '<hr><center>'
            + (d ? U + (d - m) + ')><' + d + '</a>' : C)
            + '<input onchange=D(+this.value)>'
            + U + z + ')>' + z + '></a><hr>';
        // pagination = ''
            // + '<hr>'
            // + '<center>'
                // + (start ? '<a href=javascript:main(' + (start - imagesPerPage) + ')><' + start + '</a>' : '' )
                // + '<input onchange=main(+this.value)>'
                // + '<a href=javascript:main(' + end + ')>' + end + '></a>'
            // + '<center>'
            // + '<hr>';
            
        for (i = d; i < z ; i++) {
        // for (i = start; i < end; i++) {

            p = '';
            // prefix = '';

            t = (i + p)[L];
            // iLength = (i + '').length;

            while (p[L] < l - t) p += '0';
            // while (prefix.length < numLength - iLength) {
            //     prefix += '0';
            // };

            i == b ? h = l - t : 0;
            // if (i == orginalNum) {
            //     hasPrefix = numLength - iLength
            // }

            a(p + i);
            // img(prefix + i);

            !h && l > t && a(i)
            // if (!hasPrefix && numLength > iLength) {
            //     img(i)
            // }
        };
        
        document.body.innerHTML = T + C + T
        // ocument.body.innerHTML = pagination + content + pagination
    },

    a = function(s){
        C += '<img style=position:static onerror=this.parentNode.removeChild(this) src=' + R[1] + s + R[3] + '>'
    },
    // img = function(num){
    //     content += '<img style=position:static onerror=this.parentNode.removeChild(this) src=' + result[1] + num + result[3] + '>'
    // },

    D(b = +R[2])
    // orginalNum = + result[2],
    // main(orginalNum)
