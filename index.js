module.exports = function(k, s, x) {
    s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//developers.kakao.com/sdk/js/kakao.min.js';
    s.onload = function() {
        Kakao.init(k);
    };
    x = document.getElementsByTagName('script')[0];
    if (!x) {
        document.head.appendChild(s)
    } else {
        x.parent.insertBefore(s, x);
    }
};
