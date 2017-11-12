---
layout: post
title:  "Building a Web Presence (with Jekyll)!"
date:   2017-10-19
description: The site is now completely moved over to [Jekyll](https://jekyllrb.com/). This is my first time building a blog with jekyll, and for the most part it was surprisingly idiot-proof. Plus, not having to deal with a paid CMS is a small blessing.
image: drjekyll.jpg
imagetext: Jekyll, Hyde. What's the diff?
---

The site is now completely moved over to [Jekyll](https://jekyllrb.com/). This is my first time building a blog with jekyll, and for the most part it was surprisingly idiot-proof. Plus, not having to deal with a paid CMS is a small blessing.

That said, I did have one little problem.

### Pagination Outside Index.html

Apparently pagination is supposed to work like this:

{% highlight liquid %}
{% raw %}{% for post in paginator.posts %}
<li>
    <h3>{{ post.title }}</h3>
</li>
{% endfor %}{% endraw %}
{% endhighlight %}

And it does, as long as the snippet is in index.html, because I guess everyone is suppose to have their blog posts featured prominently on page one.

As we can see, my main page is a welcome page and my blog posts are over on /blog. I quickly found out that what I want is [not expected behaviour](https://github.com/jekyll/jekyll/issues/267).

For now I've edited the line to be `{%raw%}{% for post in site.posts %}{% endraw %}` which at least displays all posts. I'll have to come back and edit with a solution once I have enough posts that I actually need the pagination.