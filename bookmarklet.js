javascript:(function(){var c="##",d=document.location.href,a=window.proxiedURL;if(a)window.location.href=a;else if(c){a=document.createElement("form");var b=document.createElement("input");a.method="POST";a.action=c+"index.php";b.type="hidden";b.name="url";b.value=d;a.appendChild(b);document.body.appendChild(a);a.submit()}})();
