---
layout: post
title:  "Adding Disqus Comments to Jekyll"
date: 2017-10-26
description: Straight-forward process to add Disqus comments to your Jekyll blog posts.
---

<figure>
	<img src="{{ '/assets/img/important-business.png' | prepend: site.baseurl }}" alt="">
	<figcaption>Hey, mom! Can I leave bigoted comments on this video too?!</figcaption>
</figure>

Adding Disqus to Jekyll is a very straight-forward process.

* Create a new file under _includes named `disqus.html`
* Paste your [universal embed code](https://disqus.com/admin/universalcode/) to the newly created `disqus.html`. It should look something like this:
{% highlight javascript %}{% raw %}<div id="disqus_thread"></div>
<script>
     var disqus_config = function () {
     this.page.url = "PAGE_URL";  // Replace PAGE_URL with your page's canonical URL variable
     this.page.identifier = "PAGE_IDENTIFIER"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
     };
    (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://[SHORTCODE].disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>{% endraw %}{% endhighlight %}
* Make sure to make the following changes to the above script:
  * Replace the PAGE_URL with the URL for your website. eg http://michaelkant.com
  * Replace the PAGE_IDENTIFIER with `{% raw %}"{{ page.id }}"{% endraw %}`
  * Replace SHORTCODE with the shortcode for your site, as set on disqus.com

* At the bottom of your `_layouts/post.html` template, paste the following line. The placement of this line is where the Disqus comments will be rendered.
  * `{% raw %}{% include disqus.html %}{% endraw %}`

That's it, easy as pie.