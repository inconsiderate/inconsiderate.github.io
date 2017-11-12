---
layout: post
title:  "Adding Disqus Comment Count to Jekyll"
date: 2017-11-21
description: I had some trouble initially setting up comment counts for Disqus. Turns out my mistake was actually pretty small, but it screwed me up for awhile. Here's the process that worked for me.
image: internettroll.jpg
imagetext: This photograph was inspired by true events.
---
I had some trouble initially setting up comment counts for Disqus. Turns out my mistake was actually pretty small, but it screwed me up for awhile. Here's the process that worked for me.

This post assumes that you already have commenting enabled for your posts. If not, you can check out my post [Adding Disqus Comments to Jekyll]({{ site.baseurl }}{% post_url 2017-10-26-adding-disqus-comments-to-jekyll %}) which covers exactly that.

#### Add in the Disqus script.
Disqus says this should go right before your closing `body` tag, so I've inserted it in my `scripts.html` template, which is itself included right before the closing `body` tag inside my `_layouts/default.html` template.

{% highlight javascript %}
{% raw %}
// this should be inserted right before your closing </body> tag
<script id="dsq-count-scr" src="//michaelkant.disqus.com/count.js" async></script>
{% endraw %}
{% endhighlight %}

#### Get counts on the index page
If everything is set up right, you should be able to add the following line to the post loop of your index.html or blog.html file, and everything should be working just fine.

{% highlight liquid %}
{% raw %}{% for post in site.posts %}
 <li>
     <h3><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>

     <!--  below is the new line we are adding, if you hadn't figured that out -->
     <a href="{{ post.url }}#disqus_thread" data-disqus-identifier="{{post.id}}">0 comments</a>

     <p class="description">{{ post.description | strip_html | strip_newlines | truncate: 250 }}</p>
 </li>
{% endfor %}{% endraw %}
{% endhighlight %}

If you add a new comment and find that it's not working, wait for a minute or two. It seems that sometimes Disqus takes a minute to start showing updated comments. It's okay. They've got a lot going on over there.
If it's still not working, check where you're including the Disqus script in your `post.html` template, and ensure that you have the page identifier set. Without this variable, nothing is going to work right.

#### Get counts on the individual post pages
Just like before, we're adding an almost identical line to `posts.html` to display the comment count at the top of the page.
The only different here is that the post is the current page, so we're using the current url and and id of the page instead of post.

It should be something along these lines:

{% highlight liquid %}
{% raw %}<h1 class="postTitle">{{ page.title }}</h1>
<p class="meta">{{ page.date | date: '%B %d, %Y' }} |
    <span>
        <a href="{{ page.url }}#disqus_thread" data-disqus-identifier="{{page.id}}">0 Comments</a>
    </span> |
<span class="time">{{ page.content | number_of_words | divided_by:180 }}</span> Min Read
</p>{% endraw %}
{% endhighlight %}

Congratulations, you should now have comments, all counted up and displayed grandly on your page.
