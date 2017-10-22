---
layout: post
title:  "Building a Web Presence - Jekyll Edition"
date:   2017-10-19
image: drjekyll.jpg
---

The site is now completely moved over to [Jekyll](https://jekyllrb.com/). This is my first time building a blog with jekyll, and for the most part it was surprisingly idiot-proof. Plus, not having to deal with a paid CMS is a small blessing.

That said, I do have a couple little problems.

### Pagination Outside Index.html

Pagination is supposed to work like this:

{% highlight liquid %}
{% raw %}{% for post in paginator.posts %}
<li>
    <span class="date">{{ post.date | date: '%B %d, %Y' }}</span>
    <h3>{{ post.title }}</h3>
</li>
{% endfor %}{% endraw %}
{% endhighlight %}

This code is intended to be in index.html, because I guess everyone is suppose to be running a blog, and the main purpose of a blog is to display blog posts... so that's supposed to be on your main page. Well, that's not how I wanted to operate. As you can see here, my main page is a welcome page and my blog posts are over on /blog.

I quickly found out that what i want is [not expected behaviour](https://github.com/jekyll/jekyll/issues/267).

