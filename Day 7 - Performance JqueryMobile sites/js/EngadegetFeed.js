//$("#rss-styled").rss("http://www.engadget.com/rss.xml", {
	$("#rss-styled").rss("http://dev-skak2000.gotpantheon.com/rss.xml#overlay-context=recipe-rss", {
    limit: 7,
    layoutTemplate: '<span id="entries"><ul>{entries}</span></ul>',
    entryTemplate: '<li><a class="RssLink" href="{url}" target="_blank" >{title}</a></li><br>'
}).show();