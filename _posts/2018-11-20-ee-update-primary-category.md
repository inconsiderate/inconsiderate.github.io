---
title: EE Add-On Upgrade - Primary Category
layout: post
description: In this series of posts, I pick an old add-on and update it to work in newer versions of EE. Not because I want to, but because I have to.
image: explosion.jpg
imagetext: Cool kids don't look at explosions.
---

## Intro

In this series of posts, I pick an old add-on and update it to work in newer versions of EE. Not because I want to, but because I have to.

### Problem

A site running EE2 needs to be updated to EE4. Sigh. It must be Tuesday...
The client has articles with multiple Categories assigned, and is using the Primary Category add-on to choose one of those categories to be... the primary category. Clever name.

This add-on was abandoned during EE2 and there's no clear migration path. But it's a good add-on with solid business logic, so we want to keep the functionality.

### Proposal

This add-on isn't crazy complicated, but why do a bunch of hard work if you don't need to? I found another add-on called [WB Category Select](https://github.com/wesbaker/category_select.ee2_addon) which looks to do exactly the same thing, and it was last updated to work with EE3, which suits just fine. So let's just replace this thing.

A little investigation into the old Primary Category add-on shows that categories are mapped to entries in a simple two column table `exp_primary_category`. We should be able to install WB Category Select, figure out how it records the same mapping, and then write a SQL query to copy the data over.

### Solution

- Install [WB Category Select](https://github.com/wesbaker/category_select.ee2_addon)

- Create a new field for WB Category Select, and set it up with the same category groups that Primary Category had (if any).

- Get in the database, and in the `exp_channel_fields` table, locate the `field_id` for the wb_category field we just made. Mine was `285`. We could fetch this as part of our insert query, but since this is a single-use query we'll never use again - so who cares.

- Run the following queries using phpmyadmin or connect directly with your favprite DB tool (HeidiSQL is the best). Replace `285` with the your own `field_id` from step 3.

`NOTE: Do not run these queries using the EE Query Tool. For some reason it tries to post multiple times and inserts two or three duplicate rows. I don't know why this happens. Maybe it won't happen to you, but I saw it a bunch of times.`

{% highlight sql %}
INSERT INTO exp_channel_data_field_285 (entry_id, field_id_285)
SELECT entry_id, primary_category_id FROM exp_primary_category;

UPDATE exp_channel_data_field_285 SET field_ft_285 = 'XHTML';
{% endhighlight %}

- Verify data integrity. You should have exactly the same number of rows in `exp_channel_data_field_285` as there are in `exp_primary_category` 

- Uninstall the old Primary_Category addon.

- Update all of your templates!

The old add-on uses the `{primary_categories}` tag, so you'll have to search through all of your templates and replace that logic. The new addon is a Channel field (I named mine `{primary_category}`), so the new logic will look something like:
`{primary_category}{category_name}{/primary_category}`

Don't forget to check your Template Snippets and Template Partials for any hidden away uses of the tag.

### Conclusion

You did it. You're a rock star.