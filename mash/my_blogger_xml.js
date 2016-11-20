var my_blogger_xml = `<?xml version='1.0' encoding='UTF-8'?><?xml-stylesheet href="https://www.blogger.com/styles/atom.css" type="text/css"?><feed xmlns='http://www.w3.org/2005/Atom' xmlns:openSearch='http://a9.com/-/spec/opensearchrss/1.0/' xmlns:gd='http://schemas.google.com/g/2005' xmlns:thr='http://purl.org/syndication/thread/1.0' xmlns:georss='http://www.georss.org/georss'><id>tag:blogger.com,1999:blog-957628289710453858.archive</id><updated>2016-11-10T12:15:00.951-05:00</updated><title type='text'>experiments</title><link rel='http://schemas.google.com/g/2005#feed' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/archive'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/archive'/><link rel='http://schemas.google.com/g/2005#post' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/archive'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/'/><author><name>Mike</name><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><generator version='7.00' uri='https://www.blogger.com'>Blogger</generator><entry><id>tag:blogger.com,1999:blog-957628289710453858.layout</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#template'/><title type='text'>Template: experiments</title><content type='text'>&lt;?xml version="1.0" encoding="UTF-8" ?&gt;
&lt;!DOCTYPE html&gt;
&lt;html b:version='2' class='v2' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'&gt;
  &lt;head&gt;
    &lt;meta expr:content='data:blog.isMobile         ? &amp;quot;width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0&amp;quot;         : &amp;quot;width=1100&amp;quot;' name='viewport'/&gt;
    &lt;b:include data='blog' name='all-head-content'/&gt;
    &lt;title&gt;&lt;data:blog.pageTitle/&gt;&lt;/title&gt;

    &lt;b:skin&gt;&lt;![CDATA[/*
-----------------------------------------------
Blogger Template Style
Name:     Simple
Designer: Josh Peterson
URL:      www.noaesthetic.com
----------------------------------------------- */

/* Variable definitions
   ====================
   &lt;Variable name="keycolor" description="Main Color" type="color" default="#66bbdd" value="#ffffff"/&gt;

   &lt;Group description="Page Text" selector="body"&gt;
     &lt;Variable name="body.font" description="Font" type="font"
         default="normal normal 12px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal normal 12px &amp;#39;Trebuchet MS&amp;#39;, Trebuchet, Verdana, sans-serif"/&gt;
     &lt;Variable name="body.text.color" description="Text Color" type="color" default="#222222" value="#666666"/&gt;
   &lt;/Group&gt;

   &lt;Group description="Backgrounds" selector=".body-fauxcolumns-outer"&gt;
     &lt;Variable name="body.background.color" description="Outer Background" type="color" default="#66bbdd" value="#ffffff"/&gt;
     &lt;Variable name="content.background.color" description="Main Background" type="color" default="#ffffff" value="#ffffff"/&gt;
     &lt;Variable name="header.background.color" description="Header Background" type="color" default="transparent" value="transparent"/&gt;
   &lt;/Group&gt;

   &lt;Group description="Links" selector=".main-outer"&gt;
     &lt;Variable name="link.color" description="Link Color" type="color" default="#2288bb" value="#2288bb"/&gt;
     &lt;Variable name="link.visited.color" description="Visited Color" type="color" default="#888888" value="#888888"/&gt;
     &lt;Variable name="link.hover.color" description="Hover Color" type="color" default="#33aaff" value="#33aaff"/&gt;
   &lt;/Group&gt;

   &lt;Group description="Blog Title" selector=".header h1"&gt;
     &lt;Variable name="header.font" description="Font" type="font"
         default="normal normal 60px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal normal 40px &amp;#39;Trebuchet MS&amp;#39;,Trebuchet,Verdana,sans-serif"/&gt;
     &lt;Variable name="header.text.color" description="Title Color" type="color" default="#3399bb"  value="#000000"/&gt;
   &lt;/Group&gt;

   &lt;Group description="Blog Description" selector=".header .description"&gt;
     &lt;Variable name="description.text.color" description="Description Color" type="color"
         default="#777777"  value="#000000"/&gt;
   &lt;/Group&gt;

   &lt;Group description="Tabs Text" selector=".tabs-inner .widget li a"&gt;
     &lt;Variable name="tabs.font" description="Font" type="font"
         default="normal normal 14px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal normal 12px &amp;#39;Trebuchet MS&amp;#39;, Trebuchet, Verdana, sans-serif"/&gt;
     &lt;Variable name="tabs.text.color" description="Text Color" type="color" default="#999999" value="#000000"/&gt;
     &lt;Variable name="tabs.selected.text.color" description="Selected Color" type="color" default="#000000" value="#000000"/&gt;
   &lt;/Group&gt;

   &lt;Group description="Tabs Background" selector=".tabs-outer .PageList"&gt;
     &lt;Variable name="tabs.background.color" description="Background Color" type="color" default="#f5f5f5" value="transparent"/&gt;
     &lt;Variable name="tabs.selected.background.color" description="Selected Color" type="color" default="#eeeeee" value="#eeeeee"/&gt;
   &lt;/Group&gt;

   &lt;Group description="Post Title" selector="h3.post-title, .comments h4"&gt;
     &lt;Variable name="post.title.font" description="Font" type="font"
         default="normal normal 22px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal normal 22px &amp;#39;Trebuchet MS&amp;#39;,Trebuchet,Verdana,sans-serif"/&gt;
   &lt;/Group&gt;

   &lt;Group description="Date Header" selector=".date-header"&gt;
     &lt;Variable name="date.header.color" description="Text Color" type="color"
         default="$(body.text.color)" value="#ffffff"/&gt;
     &lt;Variable name="date.header.background.color" description="Background Color" type="color"
         default="transparent" value="#bbbbbb"/&gt;
     &lt;Variable name="date.header.font" description="Text Font" type="font"
         default="normal bold 11px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal bold 11px Arial, Tahoma, Helvetica, FreeSans, sans-serif"/&gt;
     &lt;Variable name="date.header.padding" description="Date Header Padding" type="string" default="inherit" value="0.4em"/&gt;
     &lt;Variable name="date.header.letterspacing" description="Date Header Letter Spacing" type="string" default="inherit" value="3px"/&gt;
     &lt;Variable name="date.header.margin" description="Date Header Margin" type="string" default="inherit" value="inherit"/&gt;
   &lt;/Group&gt;

   &lt;Group description="Post Footer" selector=".post-footer"&gt;
     &lt;Variable name="post.footer.text.color" description="Text Color" type="color" default="#666666" value="#666666"/&gt;
     &lt;Variable name="post.footer.background.color" description="Background Color" type="color"
         default="#f9f9f9" value="#eeeeee"/&gt;
     &lt;Variable name="post.footer.border.color" description="Shadow Color" type="color" default="#eeeeee" value="#eeeeee"/&gt;
   &lt;/Group&gt;

   &lt;Group description="Gadgets" selector="h2"&gt;
     &lt;Variable name="widget.title.font" description="Title Font" type="font"
         default="normal bold 11px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal bold 11px &amp;#39;Trebuchet MS&amp;#39;,Trebuchet,Verdana,sans-serif"/&gt;
     &lt;Variable name="widget.title.text.color" description="Title Color" type="color" default="#000000" value="#000000"/&gt;
     &lt;Variable name="widget.alternate.text.color" description="Alternate Color" type="color" default="#999999" value="#999999"/&gt;
   &lt;/Group&gt;

   &lt;Group description="Images" selector=".main-inner"&gt;
     &lt;Variable name="image.background.color" description="Background Color" type="color" default="#ffffff" value="#ffffff"/&gt;
     &lt;Variable name="image.border.color" description="Border Color" type="color" default="#eeeeee" value="#eeeeee"/&gt;
     &lt;Variable name="image.text.color" description="Caption Text Color" type="color" default="$(body.text.color)" value="#666666"/&gt;
   &lt;/Group&gt;

   &lt;Group description="Accents" selector=".content-inner"&gt;
     &lt;Variable name="body.rule.color" description="Separator Line Color" type="color" default="#eeeeee" value="transparent"/&gt;
     &lt;Variable name="tabs.border.color" description="Tabs Border Color" type="color" default="$(body.rule.color)" value="#dddddd"/&gt;
   &lt;/Group&gt;

   &lt;Variable name="body.background" description="Body Background" type="background"
       color="$(body.background.color)" default="$(color) none repeat scroll top left" value="$(color) none repeat scroll top left"/&gt;
   &lt;Variable name="body.background.override" description="Body Background Override" type="string" default="" value=""/&gt;

   &lt;Variable name="body.background.gradient.cap" description="Body Gradient Cap" type="url"
       default="url(https://resources.blogblog.com/blogblog/data/1kt/simple/gradients_light.png)" value="none"/&gt;
   &lt;Variable name="body.background.gradient.tile" description="Body Gradient Tile" type="url"
       default="url(https://resources.blogblog.com/blogblog/data/1kt/simple/body_gradient_tile_light.png)" value="none"/&gt;

   &lt;Variable name="content.background.color.selector" description="Content Background Color Selector" type="string" default=".content-inner" value=".content-inner"/&gt;
   &lt;Variable name="content.padding" description="Content Padding" type="length" default="10px" min="0" max="100px" value="10px"/&gt;
   &lt;Variable name="content.padding.horizontal" description="Content Horizontal Padding" type="length" default="$(content.padding)" min="0" max="100px" value="40px"/&gt;
   &lt;Variable name="content.shadow.spread" description="Content Shadow Spread" type="length" default="40px" min="0" max="100px" value="0"/&gt;
   &lt;Variable name="content.shadow.spread.webkit" description="Content Shadow Spread (WebKit)" type="length" default="5px" min="0" max="100px" value="0"/&gt;
   &lt;Variable name="content.shadow.spread.ie" description="Content Shadow Spread (IE)" type="length" default="10px" min="0" max="100px" value="0"/&gt;

   &lt;Variable name="main.border.width" description="Main Border Width" type="length" default="0" min="0" max="10px" value="0"/&gt;

   &lt;Variable name="header.background.gradient" description="Header Gradient" type="url" default="none" value="none"/&gt;
   &lt;Variable name="header.shadow.offset.left" description="Header Shadow Offset Left" type="length" default="-1px" min="-50px" max="50px" value="0"/&gt;
   &lt;Variable name="header.shadow.offset.top" description="Header Shadow Offset Top" type="length" default="-1px" min="-50px" max="50px" value="0"/&gt;
   &lt;Variable name="header.shadow.spread" description="Header Shadow Spread" type="length" default="1px" min="0" max="100px" value="0"/&gt;
   &lt;Variable name="header.padding" description="Header Padding" type="length" default="30px" min="0" max="100px" value="0"/&gt;

   &lt;Variable name="header.border.size" description="Header Border Size" type="length" default="1px" min="0" max="10px" value="1px"/&gt;
   &lt;Variable name="header.bottom.border.size" description="Header Bottom Border Size" type="length" default="$(header.border.size)" min="0" max="10px" value="0"/&gt;
   &lt;Variable name="header.border.horizontalsize" description="Header Horizontal Border Size" type="length" default="0" min="0" max="10px" value="1px"/&gt;

   &lt;Variable name="description.text.size" description="Description Text Size" type="string" default="140%" value="18px"/&gt;

   &lt;Variable name="tabs.margin.top" description="Tabs Margin Top" type="length" default="0" min="0" max="100px" value="0"/&gt;
   &lt;Variable name="tabs.margin.side" description="Tabs Side Margin" type="length" default="30px" min="0" max="100px" value="30px"/&gt;
   &lt;Variable name="tabs.background.gradient" description="Tabs Background Gradient" type="url"
       default="url(https://resources.blogblog.com/blogblog/data/1kt/simple/gradients_light.png)" value="none"/&gt;
   &lt;Variable name="tabs.border.width" description="Tabs Border Width" type="length" default="1px" min="0" max="10px" value="1px"/&gt;
   &lt;Variable name="tabs.bevel.border.width" description="Tabs Bevel Border Width" type="length" default="1px" min="0" max="10px" value="1px"/&gt;

   &lt;Variable name="post.margin.bottom" description="Post Bottom Margin" type="length" default="25px" min="0" max="100px" value="45px"/&gt;

   &lt;Variable name="image.border.small.size" description="Image Border Small Size" type="length" default="2px" min="0" max="10px" value="2px"/&gt;
   &lt;Variable name="image.border.large.size" description="Image Border Large Size" type="length" default="5px" min="0" max="10px" value="5px"/&gt;

   &lt;Variable name="page.width.selector" description="Page Width Selector" type="string" default=".region-inner" value=".region-inner"/&gt;
   &lt;Variable name="page.width" description="Page Width" type="string" default="auto" value="auto"/&gt;

   &lt;Variable name="main.section.margin" description="Main Section Margin" type="length" default="15px" min="0" max="100px" value="1em"/&gt;
   &lt;Variable name="main.padding" description="Main Padding" type="length" default="15px" min="0" max="100px" value="0"/&gt;
   &lt;Variable name="main.padding.top" description="Main Padding Top" type="length" default="30px" min="0" max="100px" value="35px"/&gt;
   &lt;Variable name="main.padding.bottom" description="Main Padding Bottom" type="length" default="30px" min="0" max="100px" value="65px"/&gt;

   &lt;Variable name="paging.background"
       color="$(content.background.color)"
       description="Background of blog paging area" type="background"
       default="transparent none no-repeat scroll top center" value="transparent url(https://resources.blogblog.com/blogblog/data/1kt/simple/paging_dot.png) repeat-x scroll top center"/&gt;

   &lt;Variable name="footer.bevel" description="Bevel border length of footer" type="length" default="0" min="0" max="10px" value="1px"/&gt;

   &lt;Variable name="mobile.background.overlay" description="Mobile Background Overlay" type="string"
       default="transparent none repeat scroll top left" value="transparent none repeat scroll top left"/&gt;
   &lt;Variable name="mobile.background.size" description="Mobile Background Size" type="string" default="auto" value="auto"/&gt;
   &lt;Variable name="mobile.button.color" description="Mobile Button Color" type="color" default="#ffffff"  value="#ffffff"/&gt;

   &lt;Variable name="startSide" description="Side where text starts in blog language" type="automatic" default="left" value="left"/&gt;
   &lt;Variable name="endSide" description="Side where text ends in blog language" type="automatic" default="right" value="right"/&gt;
*/

/* Content
----------------------------------------------- */
body {
  font: $(body.font);
  color: $(body.text.color);
  background: $(body.background);
  padding: 0 $(content.shadow.spread) $(content.shadow.spread) $(content.shadow.spread);
  $(body.background.override)
}

html body $(page.width.selector) {
  min-width: 0;
  max-width: 100%;
  width: $(page.width);
}

h2 {
  font-size: 22px;
}

a:link {
  text-decoration:none;
  color: $(link.color);
}

a:visited {
  text-decoration:none;
  color: $(link.visited.color);
}

a:hover {
  text-decoration:underline;
  color: $(link.hover.color);
}

.body-fauxcolumn-outer .fauxcolumn-inner {
  background: transparent $(body.background.gradient.tile) repeat scroll top left;
  _background-image: none;
}

.body-fauxcolumn-outer .cap-top {
  position: absolute;
  z-index: 1;
  height: 400px;
  width: 100%;
}

.body-fauxcolumn-outer .cap-top .cap-left {
  width: 100%;
  background: transparent $(body.background.gradient.cap) repeat-x scroll top left;
  _background-image: none;
}

.content-outer {
  -moz-box-shadow: 0 0 $(content.shadow.spread) rgba(0, 0, 0, .15);
  -webkit-box-shadow: 0 0 $(content.shadow.spread.webkit) rgba(0, 0, 0, .15);
  -goog-ms-box-shadow: 0 0 $(content.shadow.spread.ie) #333333;
  box-shadow: 0 0 $(content.shadow.spread) rgba(0, 0, 0, .15);

  margin-bottom: 1px;
}

.content-inner {
  padding: $(content.padding) $(content.padding.horizontal);
}

$(content.background.color.selector) {
  background-color: $(content.background.color);
}

/* Header
----------------------------------------------- */
.header-outer {
  background: $(header.background.color) $(header.background.gradient) repeat-x scroll 0 -400px;
  _background-image: none;
}

.Header h1 {
  font: $(header.font);
  color: $(header.text.color);
  text-shadow: $(header.shadow.offset.left) $(header.shadow.offset.top) $(header.shadow.spread) rgba(0, 0, 0, .2);
}

.Header h1 a {
  color: $(header.text.color);
}

.Header .description {
  font-size: $(description.text.size);
  color: $(description.text.color);
}

.header-inner .Header .titlewrapper {
  padding: 22px $(header.padding);
}

.header-inner .Header .descriptionwrapper {
  padding: 0 $(header.padding);
}

/* Tabs
----------------------------------------------- */
.tabs-inner .section:first-child {
  border-top: $(header.bottom.border.size) solid $(tabs.border.color);
}

.tabs-inner .section:first-child ul {
  margin-top: -$(header.border.size);
  border-top: $(header.border.size) solid $(tabs.border.color);
  border-left: $(header.border.horizontalsize) solid $(tabs.border.color);
  border-right: $(header.border.horizontalsize) solid $(tabs.border.color);
}

.tabs-inner .widget ul {
  background: $(tabs.background.color) $(tabs.background.gradient) repeat-x scroll 0 -800px;
  _background-image: none;
  border-bottom: $(tabs.border.width) solid $(tabs.border.color);

  margin-top: $(tabs.margin.top);
  margin-left: -$(tabs.margin.side);
  margin-right: -$(tabs.margin.side);
}

.tabs-inner .widget li a {
  display: inline-block;

  padding: .6em 1em;

  font: $(tabs.font);
  color: $(tabs.text.color);

  border-$startSide: $(tabs.border.width) solid $(content.background.color);
  border-$endSide: $(tabs.bevel.border.width) solid $(tabs.border.color);
}

.tabs-inner .widget li:first-child a {
  border-$startSide: none;
}

.tabs-inner .widget li.selected a, .tabs-inner .widget li a:hover {
  color: $(tabs.selected.text.color);
  background-color: $(tabs.selected.background.color);
  text-decoration: none;
}

/* Columns
----------------------------------------------- */
.main-outer {
  border-top: $(main.border.width) solid $(body.rule.color);
}

.fauxcolumn-left-outer .fauxcolumn-inner {
  border-right: 1px solid $(body.rule.color);
}

.fauxcolumn-right-outer .fauxcolumn-inner {
  border-left: 1px solid $(body.rule.color);
}

/* Headings
----------------------------------------------- */
div.widget &gt; h2,
div.widget h2.title {
  margin: 0 0 1em 0;

  font: $(widget.title.font);
  color: $(widget.title.text.color);
}

/* Widgets
----------------------------------------------- */
.widget .zippy {
  color: $(widget.alternate.text.color);
  text-shadow: 2px 2px 1px rgba(0, 0, 0, .1);
}

.widget .popular-posts ul {
  list-style: none;
}

/* Posts
----------------------------------------------- */
h2.date-header {
  font: $(date.header.font);
}

.date-header span {
  background-color: $(date.header.background.color);
  color: $(date.header.color);
  padding: $(date.header.padding);
  letter-spacing: $(date.header.letterspacing);
  margin: $(date.header.margin);
}

.main-inner {
  padding-top: $(main.padding.top);
  padding-bottom: $(main.padding.bottom);
}

.main-inner .column-center-inner {
  padding: 0 $(main.padding);
}

.main-inner .column-center-inner .section {
  margin: 0 $(main.section.margin);
}

.post {
  margin: 0 0 $(post.margin.bottom) 0;
}

h3.post-title, .comments h4 {
  font: $(post.title.font);
  margin: .75em 0 0;
}

.post-body {
  font-size: 110%;
  line-height: 1.4;
  position: relative;
}

.post-body img, .post-body .tr-caption-container, .Profile img, .Image img,
.BlogList .item-thumbnail img {
  padding: $(image.border.small.size);

  background: $(image.background.color);
  border: 1px solid $(image.border.color);

  -moz-box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);
  -webkit-box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);
}

.post-body img, .post-body .tr-caption-container {
  padding: $(image.border.large.size);
}

.post-body .tr-caption-container {
  color: $(image.text.color);
}

.post-body .tr-caption-container img {
  padding: 0;

  background: transparent;
  border: none;

  -moz-box-shadow: 0 0 0 rgba(0, 0, 0, .1);
  -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, .1);
  box-shadow: 0 0 0 rgba(0, 0, 0, .1);
}

.post-header {
  margin: 0 0 1.5em;

  line-height: 1.6;
  font-size: 90%;
}

.post-footer {
  margin: 20px -2px 0;
  padding: 5px 10px;

  color: $(post.footer.text.color);
  background-color: $(post.footer.background.color);
  border-bottom: 1px solid $(post.footer.border.color);

  line-height: 1.6;
  font-size: 90%;
}

#comments .comment-author {
  padding-top: 1.5em;

  border-top: 1px solid $(body.rule.color);
  background-position: 0 1.5em;
}

#comments .comment-author:first-child {
  padding-top: 0;
  border-top: none;
}

.avatar-image-container {
  margin: .2em 0 0;
}

#comments .avatar-image-container img {
  border: 1px solid $(image.border.color);
}

/* Comments
----------------------------------------------- */
.comments .comments-content .icon.blog-author {
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB9sLFwMeCjjhcOMAAAD+SURBVDjLtZSvTgNBEIe/WRRnm3U8RC1neQdsm1zSBIU9VVF1FkUguQQsD9ITmD7ECZIJSE4OZo9stoVjC/zc7ky+zH9hXwVwDpTAWWLrgS3QAe8AZgaAJI5zYAmc8r0G4AHYHQKVwII8PZrZFsBFkeRCABYiMh9BRUhnSkPTNCtVXYXURi1FpBDgArj8QU1eVXUzfnjv7yP7kwu1mYrkWlU33vs1QNu2qU8pwN0UpKoqokjWwCztrMuBhEhmh8bD5UDqur75asbcX0BGUB9/HAMB+r32hznJgXy2v0sGLBcyAJ1EK3LFcbo1s91JeLwAbwGYu7TP/3ZGfnXYPgAVNngtqatUNgAAAABJRU5ErkJggg==);
}

.comments .comments-content .loadmore a {
  border-top: 1px solid $(widget.alternate.text.color);
  border-bottom: 1px solid $(widget.alternate.text.color);
}

.comments .comment-thread.inline-thread {
  background-color: $(post.footer.background.color);
}

.comments .continue {
  border-top: 2px solid $(widget.alternate.text.color);
}

/* Accents
---------------------------------------------- */
.section-columns td.columns-cell {
  border-$startSide: 1px solid $(body.rule.color);
}

.blog-pager {
  background: $(paging.background);
}

.blog-pager-older-link, .home-link,
.blog-pager-newer-link {
  background-color: $(content.background.color);
  padding: 5px;
}

.footer-outer {
  border-top: $(footer.bevel) dashed #bbbbbb;
}

/* Mobile
----------------------------------------------- */
body.mobile  {
  background-size: $(mobile.background.size);
}

.mobile .body-fauxcolumn-outer {
  background: $(mobile.background.overlay);
}

.mobile .body-fauxcolumn-outer .cap-top {
  background-size: 100% auto;
}

.mobile .content-outer {
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, .15);
  box-shadow: 0 0 3px rgba(0, 0, 0, .15);
}

.mobile .tabs-inner .widget ul {
  margin-left: 0;
  margin-right: 0;
}

.mobile .post {
  margin: 0;
}

.mobile .main-inner .column-center-inner .section {
  margin: 0;
}

.mobile .date-header span {
  padding: 0.1em 10px;
  margin: 0 -10px;
}

.mobile h3.post-title {
  margin: 0;
}

.mobile .blog-pager {
  background: transparent none no-repeat scroll top center;
}

.mobile .footer-outer {
  border-top: none;
}

.mobile .main-inner, .mobile .footer-inner {
  background-color: $(content.background.color);
}

.mobile-index-contents {
  color: $(body.text.color);
}

.mobile-link-button {
  background-color: $(link.color);
}

.mobile-link-button a:link, .mobile-link-button a:visited {
  color: $(mobile.button.color);
}

.mobile .tabs-inner .section:first-child {
  border-top: none;
}

.mobile .tabs-inner .PageList .widget-content {
  background-color: $(tabs.selected.background.color);
  color: $(tabs.selected.text.color);
  border-top: $(tabs.border.width) solid $(tabs.border.color);
  border-bottom: $(tabs.border.width) solid $(tabs.border.color);
}

.mobile .tabs-inner .PageList .widget-content .pagelist-arrow {
  border-$startSide: 1px solid $(tabs.border.color);
}
]]&gt;&lt;/b:skin&gt;

    &lt;b:template-skin&gt;
      &lt;b:variable default='960px' name='content.width' type='length'/&gt;
      &lt;b:variable default='0' name='main.column.left.width' type='length'/&gt;
      &lt;b:variable default='310px' name='main.column.right.width' type='length'/&gt;

      &lt;![CDATA[
      body {
        min-width: $(content.width);
      }

      .content-outer, .content-fauxcolumn-outer, .region-inner {
        min-width: $(content.width);
        max-width: $(content.width);
        _width: $(content.width);
      }

      .main-inner .columns {
        padding-left: $(main.column.left.width);
        padding-right: $(main.column.right.width);
      }

      .main-inner .fauxcolumn-center-outer {
        left: $(main.column.left.width);
        right: $(main.column.right.width);
        /* IE6 does not respect left and right together */
        _width: expression(this.parentNode.offsetWidth -
            parseInt("$(main.column.left.width)") -
            parseInt("$(main.column.right.width)") + 'px');
      }

      .main-inner .fauxcolumn-left-outer {
        width: $(main.column.left.width);
      }

      .main-inner .fauxcolumn-right-outer {
        width: $(main.column.right.width);
      }

      .main-inner .column-left-outer {
        width: $(main.column.left.width);
        right: 100%;
        margin-left: -$(main.column.left.width);
      }

      .main-inner .column-right-outer {
        width: $(main.column.right.width);
        margin-right: -$(main.column.right.width);
      }

      #layout {
        min-width: 0;
      }

      #layout .content-outer {
        min-width: 0;
        width: 800px;
      }

      #layout .region-inner {
        min-width: 0;
        width: auto;
      }

      body#layout div.add_widget {
        padding: 8px;
      }

      body#layout div.add_widget a {
        margin-left: 32px;
      }
      ]]&gt;
    &lt;/b:template-skin&gt;

    &lt;b:if cond='data:skin.vars.body_background.image.isResizable and data:features.responsiveBackgrounds'&gt;
      &lt;b:include cond='not data:view.isPreview' data='{                          image: data:skin.vars.body_background.image,                          selector: &amp;quot;body&amp;quot;                        }' name='responsiveImageStyle'/&gt;
    &lt;/b:if&gt;

    &lt;b:include data='blog' name='google-analytics'/&gt;

    &lt;!-- mk  --&gt;
    &lt;script src='http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js'/&gt;
    &lt;link href='http://sites.google.com/site/remzmike/pygments.css?attredirects=0' rel='stylesheet' title='style' type='text/css'/&gt;

  &lt;/head&gt;

  &lt;body expr:class='&amp;quot;loading&amp;quot; + data:blog.mobileClass'&gt;
  &lt;b:section class='navbar' id='navbar' maxwidgets='1' name='Navbar' showaddelement='no'&gt;
    &lt;b:widget id='Navbar1' locked='true' title='Navbar' type='Navbar' visible='true'&gt;
      &lt;b:includable id='main'&gt;&amp;lt;script type=&amp;quot;text/javascript&amp;quot;&amp;gt;
    function setAttributeOnload(object, attribute, val) {
      if(window.addEventListener) {
        window.addEventListener(&amp;#39;load&amp;#39;,
          function(){ object[attribute] = val; }, false);
      } else {
        window.attachEvent(&amp;#39;onload&amp;#39;, function(){ object[attribute] = val; });
      }
    }
  &amp;lt;/script&amp;gt;
&amp;lt;div id=&amp;quot;navbar-iframe-container&amp;quot;&amp;gt;&amp;lt;/div&amp;gt;
&amp;lt;script type=&amp;quot;text/javascript&amp;quot; src=&amp;quot;https://apis.google.com/js/plusone.js&amp;quot;&amp;gt;&amp;lt;/script&amp;gt;
&amp;lt;script type=&amp;quot;text/javascript&amp;quot;&amp;gt;
      gapi.load(&amp;quot;gapi.iframes:gapi.iframes.style.bubble&amp;quot;, function() {
        if (gapi.iframes &amp;amp;&amp;amp; gapi.iframes.getContext) {
          gapi.iframes.getContext().openChild({
              url: &amp;#39;https://www.blogger.com/navbar.g?targetBlogID\x3d957628289710453858\x26blogName\x3dexperiments\x26publishMode\x3dPUBLISH_MODE_BLOGSPOT\x26navbarType\x3dLIGHT\x26layoutType\x3dLAYOUTS\x26searchRoot\x3dhttps://remzmike.blogspot.com/search\x26blogLocale\x3den\x26v\x3d2\x26homepageUrl\x3dhttps://remzmike.blogspot.com/\x26vt\x3d2917720499467673694&amp;#39;,
              where: document.getElementById(&amp;quot;navbar-iframe-container&amp;quot;),
              id: &amp;quot;navbar-iframe&amp;quot;
          });
        }
      });
    &amp;lt;/script&amp;gt;&amp;lt;script type=&amp;quot;text/javascript&amp;quot;&amp;gt;
(function() {
var script = document.createElement(&amp;#39;script&amp;#39;);
script.type = &amp;#39;text/javascript&amp;#39;;
script.src = &amp;#39;//pagead2.googlesyndication.com/pagead/js/google_top_exp.js&amp;#39;;
var head = document.getElementsByTagName(&amp;#39;head&amp;#39;)[0];
if (head) {
head.appendChild(script);
}})();
&amp;lt;/script&amp;gt;
&lt;/b:includable&gt;
    &lt;/b:widget&gt;
  &lt;/b:section&gt;

  &lt;b:if cond='data:blog.pageType == &amp;quot;index&amp;quot;'&gt;
    &lt;div itemscope='itemscope' itemtype='http://schema.org/Blog' style='display: none;'&gt;
      &lt;meta expr:content='data:blog.title' itemprop='name'/&gt;
      &lt;b:if cond='data:blog.metaDescription'&gt;
        &lt;meta expr:content='data:blog.metaDescription' itemprop='description'/&gt;
      &lt;/b:if&gt;
    &lt;/div&gt;
  &lt;/b:if&gt;

  &lt;div class='body-fauxcolumns'&gt;
    &lt;div class='fauxcolumn-outer body-fauxcolumn-outer'&gt;
    &lt;div class='cap-top'&gt;
      &lt;div class='cap-left'/&gt;
      &lt;div class='cap-right'/&gt;
    &lt;/div&gt;
    &lt;div class='fauxborder-left'&gt;
    &lt;div class='fauxborder-right'/&gt;
    &lt;div class='fauxcolumn-inner'&gt;
    &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class='cap-bottom'&gt;
      &lt;div class='cap-left'/&gt;
      &lt;div class='cap-right'/&gt;
    &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div class='content'&gt;
  &lt;div class='content-fauxcolumns'&gt;
    &lt;div class='fauxcolumn-outer content-fauxcolumn-outer'&gt;
    &lt;div class='cap-top'&gt;
      &lt;div class='cap-left'/&gt;
      &lt;div class='cap-right'/&gt;
    &lt;/div&gt;
    &lt;div class='fauxborder-left'&gt;
    &lt;div class='fauxborder-right'/&gt;
    &lt;div class='fauxcolumn-inner'&gt;
    &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class='cap-bottom'&gt;
      &lt;div class='cap-left'/&gt;
      &lt;div class='cap-right'/&gt;
    &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div class='content-outer'&gt;
  &lt;div class='content-cap-top cap-top'&gt;
    &lt;div class='cap-left'/&gt;
    &lt;div class='cap-right'/&gt;
  &lt;/div&gt;
  &lt;div class='fauxborder-left content-fauxborder-left'&gt;
  &lt;div class='fauxborder-right content-fauxborder-right'/&gt;
  &lt;div class='content-inner'&gt;

    &lt;header&gt;
    &lt;div class='header-outer'&gt;
    &lt;div class='header-cap-top cap-top'&gt;
      &lt;div class='cap-left'/&gt;
      &lt;div class='cap-right'/&gt;
    &lt;/div&gt;
    &lt;div class='fauxborder-left header-fauxborder-left'&gt;
    &lt;div class='fauxborder-right header-fauxborder-right'/&gt;
    &lt;div class='region-inner header-inner'&gt;
      &lt;b:section class='header' id='header' maxwidgets='1' name='Header' showaddelement='no'&gt;
        &lt;b:widget id='Header1' locked='true' title='experiments (Header)' type='Header' visible='true'&gt;
          &lt;b:includable id='main'&gt;

  &lt;b:if cond='data:useImage'&gt;
    &lt;b:if cond='data:imagePlacement == &amp;quot;BEHIND&amp;quot;'&gt;
      &lt;!--
      Show image as background to text. You can't really calculate the width
      reliably in JS because margins are not taken into account by any of
      clientWidth, offsetWidth or scrollWidth, so we don't force a minimum
      width if the user is using shrink to fit.
      This results in a margin-width's worth of pixels being cropped. If the
      user is not using shrink to fit then we expand the header.
      --&gt;
      &lt;b:if cond='data:mobile'&gt;
        &lt;div id='header-inner'&gt;
          &lt;div class='titlewrapper' style='background: transparent'&gt;
            &lt;h1 class='title' style='background: transparent; border-width: 0px'&gt;
              &lt;b:include name='title'/&gt;
            &lt;/h1&gt;
          &lt;/div&gt;
          &lt;b:include name='description'/&gt;
        &lt;/div&gt;
      &lt;b:else/&gt;
        &lt;div expr:style='&amp;quot;background-image: url(\&amp;quot;&amp;quot; + data:sourceUrl + &amp;quot;\&amp;quot;); &amp;quot;                      + &amp;quot;background-position: &amp;quot;                      + data:backgroundPositionStyleStr + &amp;quot;; &amp;quot;                      + data:widthStyleStr                      + &amp;quot;min-height: &amp;quot; + data:height                      + &amp;quot;_height: &amp;quot; + data:height                      + &amp;quot;background-repeat: no-repeat; &amp;quot;' id='header-inner'&gt;
          &lt;div class='titlewrapper' style='background: transparent'&gt;
            &lt;h1 class='title' style='background: transparent; border-width: 0px'&gt;
              &lt;b:include name='title'/&gt;
            &lt;/h1&gt;
          &lt;/div&gt;
          &lt;b:include name='description'/&gt;
        &lt;/div&gt;
      &lt;/b:if&gt;
    &lt;b:else/&gt;
      &lt;!--Show the image only--&gt;
      &lt;div id='header-inner'&gt;
        &lt;a expr:href='data:blog.homepageUrl' style='display: block'&gt;
          &lt;img expr:alt='data:title' expr:height='data:height' expr:id='data:widget.instanceId + &amp;quot;_headerimg&amp;quot;' expr:src='data:sourceUrl' expr:width='data:width' style='display: block'/&gt;
        &lt;/a&gt;
        &lt;!--Show the description--&gt;
        &lt;b:if cond='data:imagePlacement == &amp;quot;BEFORE_DESCRIPTION&amp;quot;'&gt;
          &lt;b:include name='description'/&gt;
        &lt;/b:if&gt;
      &lt;/div&gt;
    &lt;/b:if&gt;
  &lt;b:else/&gt;
    &lt;!--No header image --&gt;
    &lt;div id='header-inner'&gt;
      &lt;div class='titlewrapper'&gt;
        &lt;h1 class='title'&gt;
          &lt;b:include name='title'/&gt;
        &lt;/h1&gt;
      &lt;/div&gt;
      &lt;b:include name='description'/&gt;
    &lt;/div&gt;
  &lt;/b:if&gt;
&lt;/b:includable&gt;
          &lt;b:includable id='description'&gt;
  &lt;div class='descriptionwrapper'&gt;
    &lt;p class='description'&gt;&lt;span&gt;&lt;data:description/&gt;&lt;/span&gt;&lt;/p&gt;
  &lt;/div&gt;
&lt;/b:includable&gt;
          &lt;b:includable id='title'&gt;
  &lt;b:if cond='data:blog.url == data:blog.homepageUrl'&gt;
    &lt;data:title/&gt;
  &lt;b:else/&gt;
    &lt;a expr:href='data:blog.homepageUrl'&gt;&lt;data:title/&gt;&lt;/a&gt;
  &lt;/b:if&gt;
&lt;/b:includable&gt;
        &lt;/b:widget&gt;
      &lt;/b:section&gt;
    &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class='header-cap-bottom cap-bottom'&gt;
      &lt;div class='cap-left'/&gt;
      &lt;div class='cap-right'/&gt;
    &lt;/div&gt;
    &lt;/div&gt;
    &lt;/header&gt;

    &lt;div class='tabs-outer'&gt;
    &lt;div class='tabs-cap-top cap-top'&gt;
      &lt;div class='cap-left'/&gt;
      &lt;div class='cap-right'/&gt;
    &lt;/div&gt;
    &lt;div class='fauxborder-left tabs-fauxborder-left'&gt;
    &lt;div class='fauxborder-right tabs-fauxborder-right'/&gt;
    &lt;div class='region-inner tabs-inner'&gt;
      &lt;b:section class='tabs' id='crosscol' maxwidgets='1' name='Cross-Column' showaddelement='yes'/&gt;
      &lt;b:section class='tabs' id='crosscol-overflow' name='Cross-Column 2' showaddelement='no'/&gt;
    &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class='tabs-cap-bottom cap-bottom'&gt;
      &lt;div class='cap-left'/&gt;
      &lt;div class='cap-right'/&gt;
    &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class='main-outer'&gt;
    &lt;div class='main-cap-top cap-top'&gt;
      &lt;div class='cap-left'/&gt;
      &lt;div class='cap-right'/&gt;
    &lt;/div&gt;

    &lt;div class='fauxborder-left main-fauxborder-left'&gt;
    &lt;div class='fauxborder-right main-fauxborder-right'/&gt;
    &lt;div class='region-inner main-inner'&gt;

      &lt;div class='columns fauxcolumns'&gt;

        &lt;div class='fauxcolumn-outer fauxcolumn-center-outer'&gt;
        &lt;div class='cap-top'&gt;
          &lt;div class='cap-left'/&gt;
          &lt;div class='cap-right'/&gt;
        &lt;/div&gt;
        &lt;div class='fauxborder-left'&gt;
        &lt;div class='fauxborder-right'/&gt;
        &lt;div class='fauxcolumn-inner'&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class='cap-bottom'&gt;
          &lt;div class='cap-left'/&gt;
          &lt;div class='cap-right'/&gt;
        &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class='fauxcolumn-outer fauxcolumn-left-outer'&gt;
        &lt;div class='cap-top'&gt;
          &lt;div class='cap-left'/&gt;
          &lt;div class='cap-right'/&gt;
        &lt;/div&gt;
        &lt;div class='fauxborder-left'&gt;
        &lt;div class='fauxborder-right'/&gt;
        &lt;div class='fauxcolumn-inner'&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class='cap-bottom'&gt;
          &lt;div class='cap-left'/&gt;
          &lt;div class='cap-right'/&gt;
        &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class='fauxcolumn-outer fauxcolumn-right-outer'&gt;
        &lt;div class='cap-top'&gt;
          &lt;div class='cap-left'/&gt;
          &lt;div class='cap-right'/&gt;
        &lt;/div&gt;
        &lt;div class='fauxborder-left'&gt;
        &lt;div class='fauxborder-right'/&gt;
        &lt;div class='fauxcolumn-inner'&gt;
        &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class='cap-bottom'&gt;
          &lt;div class='cap-left'/&gt;
          &lt;div class='cap-right'/&gt;
        &lt;/div&gt;
        &lt;/div&gt;

        &lt;!-- corrects IE6 width calculation --&gt;
        &lt;div class='columns-inner'&gt;

        &lt;div class='column-center-outer'&gt;
        &lt;div class='column-center-inner'&gt;
          &lt;b:section class='main' id='main' name='Main' showaddelement='no'&gt;
            &lt;b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' visible='true'&gt;
              &lt;b:includable id='main' var='top'&gt;
  &lt;b:if cond='!data:mobile'&gt;
    &lt;!-- posts --&gt;
    &lt;div class='blog-posts hfeed'&gt;

      &lt;b:include data='top' name='status-message'/&gt;

      &lt;b:loop values='data:posts' var='post'&gt;
        &lt;b:if cond='data:post.isDateStart and not data:post.isFirstPost'&gt;
          &amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;
        &lt;/b:if&gt;
        &lt;b:if cond='data:post.isDateStart'&gt;
          &amp;lt;div class=&amp;quot;date-outer&amp;quot;&amp;gt;
        &lt;/b:if&gt;
        &lt;b:if cond='data:post.dateHeader'&gt;
          &lt;h2 class='date-header'&gt;&lt;span&gt;&lt;data:post.dateHeader/&gt;&lt;/span&gt;&lt;/h2&gt;
        &lt;/b:if&gt;
        &lt;b:if cond='data:post.isDateStart'&gt;
          &amp;lt;div class=&amp;quot;date-posts&amp;quot;&amp;gt;
        &lt;/b:if&gt;
        &lt;div class='post-outer'&gt;
          &lt;b:include data='post' name='post'/&gt;
          &lt;b:include cond='data:blog.pageType in {&amp;quot;static_page&amp;quot;,&amp;quot;item&amp;quot;}' data='post' name='comment_picker'/&gt;
        &lt;/div&gt;

        &lt;!-- Ad --&gt;
        &lt;b:if cond='data:post.includeAd'&gt;
          &lt;div class='inline-ad'&gt;
            &lt;data:adCode/&gt;
          &lt;/div&gt;
        &lt;/b:if&gt;
      &lt;/b:loop&gt;
      &lt;b:if cond='data:numPosts != 0'&gt;
        &amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;
      &lt;/b:if&gt;
    &lt;/div&gt;

    &lt;!-- navigation --&gt;
    &lt;b:include name='nextprev'/&gt;

    &lt;!-- feed links --&gt;
    &lt;b:include name='feedLinks'/&gt;

  &lt;b:else/&gt;
    &lt;b:include name='mobile-main'/&gt;
  &lt;/b:if&gt;

  &lt;b:if cond='data:top.showPlusOne'&gt;
    &lt;data:top.googlePlusBootstrap/&gt;
  &lt;/b:if&gt;

&lt;/b:includable&gt;
              &lt;b:includable id='backlinkDeleteIcon' var='backlink'&gt;
  &lt;span expr:class='&amp;quot;item-control &amp;quot; + data:backlink.adminClass'&gt;
    &lt;a expr:href='data:backlink.deleteUrl' expr:title='data:top.deleteBacklinkMsg'&gt;
      &lt;img src='https://resources.blogblog.com/img/icon_delete13.gif'/&gt;
    &lt;/a&gt;
  &lt;/span&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='backlinks' var='post'&gt;
  &lt;a name='links'/&gt;&lt;h4&gt;&lt;data:post.backlinksLabel/&gt;&lt;/h4&gt;
  &lt;b:if cond='data:post.numBacklinks != 0'&gt;
    &lt;dl class='comments-block' id='comments-block'&gt;
      &lt;b:loop values='data:post.backlinks' var='backlink'&gt;
        &lt;div class='collapsed-backlink backlink-control'&gt;
          &lt;dt class='comment-title'&gt;
            &lt;span class='backlink-toggle-zippy'&gt;&amp;#160;&lt;/span&gt;
            &lt;a expr:href='data:backlink.url' rel='nofollow'&gt;&lt;data:backlink.title/&gt;&lt;/a&gt;
            &lt;b:include data='backlink' name='backlinkDeleteIcon'/&gt;
          &lt;/dt&gt;
          &lt;dd class='comment-body collapseable'&gt;
            &lt;data:backlink.snippet/&gt;
          &lt;/dd&gt;
          &lt;dd class='comment-footer collapseable'&gt;
            &lt;span class='comment-author'&gt;&lt;data:post.authorLabel/&gt; &lt;data:backlink.author/&gt;&lt;/span&gt;
            &lt;span class='comment-timestamp'&gt;&lt;data:post.timestampLabel/&gt; &lt;data:backlink.timestamp/&gt;&lt;/span&gt;
          &lt;/dd&gt;
        &lt;/div&gt;
      &lt;/b:loop&gt;
    &lt;/dl&gt;
  &lt;/b:if&gt;
  &lt;p class='comment-footer'&gt;
    &lt;a class='comment-link' expr:href='data:post.createLinkUrl' expr:id='data:widget.instanceId + &amp;quot;_backlinks-create-link&amp;quot;' target='_blank'&gt;&lt;data:post.createLinkLabel/&gt;&lt;/a&gt;
  &lt;/p&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='comment-form' var='post'&gt;
  &lt;div class='comment-form'&gt;
    &lt;a name='comment-form'/&gt;
    &lt;b:if cond='data:mobile'&gt;
      &lt;h4 id='comment-post-message'&gt;
        &lt;a expr:id='data:widget.instanceId + &amp;quot;_comment-editor-toggle-link&amp;quot;' href='javascript:void(0)'&gt;&lt;data:postCommentMsg/&gt;&lt;/a&gt;&lt;/h4&gt;
      &lt;p&gt;&lt;data:blogCommentMessage/&gt;&lt;/p&gt;
      &lt;data:blogTeamBlogMessage/&gt;
      &lt;a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/&gt;
      &lt;iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/&gt;
    &lt;b:else/&gt;
      &lt;h4 id='comment-post-message'&gt;&lt;data:postCommentMsg/&gt;&lt;/h4&gt;
      &lt;p&gt;&lt;data:blogCommentMessage/&gt;&lt;/p&gt;
      &lt;data:blogTeamBlogMessage/&gt;
      &lt;a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/&gt;
      &lt;iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/&gt;
    &lt;/b:if&gt;
    &lt;data:post.cmtfpIframe/&gt;
    &lt;script type='text/javascript'&gt;
      BLOG_CMT_createIframe(&amp;#39;&lt;data:post.appRpcRelayPath/&gt;&amp;#39;);
    &lt;/script&gt;
  &lt;/div&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='commentDeleteIcon' var='comment'&gt;
  &lt;span expr:class='&amp;quot;item-control &amp;quot; + data:comment.adminClass'&gt;
    &lt;b:if cond='data:showCmtPopup'&gt;
      &lt;div class='goog-toggle-button'&gt;
        &lt;div class='goog-inline-block comment-action-icon'/&gt;
      &lt;/div&gt;
    &lt;b:else/&gt;
      &lt;a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:top.deleteCommentMsg'&gt;
        &lt;img src='https://resources.blogblog.com/img/icon_delete13.gif'/&gt;
      &lt;/a&gt;
    &lt;/b:if&gt;
  &lt;/span&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='comment_count_picker' var='post'&gt;
  &lt;b:if cond='data:post.commentSource == 1'&gt;
    &lt;span class='cmt_count_iframe_holder' expr:data-count='data:post.numComments' expr:data-onclick='data:post.addCommentOnclick' expr:data-post-url='data:post.url' expr:data-url='data:post.url.canonical.http'&gt;
    &lt;/span&gt;
  &lt;b:else/&gt;
    &lt;a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'&gt;
      &lt;data:post.commentLabelFull/&gt;:
    &lt;/a&gt;
  &lt;/b:if&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='comment_picker' var='post'&gt;
  &lt;b:if cond='data:post.commentSource == 1'&gt;
    &lt;b:include data='post' name='iframe_comments'/&gt;
  &lt;b:elseif cond='data:post.showThreadedComments'/&gt;
    &lt;b:include data='post' name='threaded_comments'/&gt;
  &lt;b:else/&gt;
    &lt;b:include data='post' name='comments'/&gt;
  &lt;/b:if&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='comments' var='post'&gt;
  &lt;div class='comments' id='comments'&gt;
    &lt;a name='comments'/&gt;
    &lt;b:if cond='data:post.allowComments'&gt;
      &lt;h4&gt;&lt;data:post.commentLabelFull/&gt;:&lt;/h4&gt;

      &lt;b:if cond='data:post.commentPagingRequired'&gt;
        &lt;span class='paging-control-container'&gt;
          &lt;b:if cond='data:post.hasOlderLinks'&gt;
            &lt;a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'&gt;&lt;data:post.oldestLinkText/&gt;&lt;/a&gt;
              &amp;#160;
            &lt;a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'&gt;&lt;data:post.olderLinkText/&gt;&lt;/a&gt;
              &amp;#160;
          &lt;/b:if&gt;

          &lt;data:post.commentRangeText/&gt;

          &lt;b:if cond='data:post.hasNewerLinks'&gt;
            &amp;#160;
            &lt;a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'&gt;&lt;data:post.newerLinkText/&gt;&lt;/a&gt;
            &amp;#160;
            &lt;a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'&gt;&lt;data:post.newestLinkText/&gt;&lt;/a&gt;
          &lt;/b:if&gt;
        &lt;/span&gt;
      &lt;/b:if&gt;

      &lt;div expr:id='data:widget.instanceId + &amp;quot;_comments-block-wrapper&amp;quot;'&gt;
        &lt;dl expr:class='data:post.avatarIndentClass' id='comments-block'&gt;
          &lt;b:loop values='data:post.comments' var='comment'&gt;
            &lt;dt expr:class='&amp;quot;comment-author &amp;quot; + data:comment.authorClass' expr:id='data:comment.anchorName'&gt;
              &lt;b:if cond='data:comment.favicon'&gt;
                &lt;img expr:src='data:comment.favicon' height='16px' style='margin-bottom:-2px;' width='16px'/&gt;
              &lt;/b:if&gt;
              &lt;a expr:name='data:comment.anchorName'/&gt;
              &lt;b:if cond='data:blog.enabledCommentProfileImages'&gt;
                &lt;data:comment.authorAvatarImage/&gt;
              &lt;/b:if&gt;
              &lt;b:if cond='data:comment.authorUrl'&gt;
                &lt;a expr:href='data:comment.authorUrl' rel='nofollow'&gt;&lt;data:comment.author/&gt;&lt;/a&gt;
              &lt;b:else/&gt;
                &lt;data:comment.author/&gt;
              &lt;/b:if&gt;
              &lt;data:commentPostedByMsg/&gt;
            &lt;/dt&gt;
            &lt;dd class='comment-body' expr:id='data:widget.instanceId + data:comment.cmtBodyIdPostfix'&gt;
              &lt;b:if cond='data:comment.isDeleted'&gt;
                &lt;span class='deleted-comment'&gt;&lt;data:comment.body/&gt;&lt;/span&gt;
              &lt;b:else/&gt;
                &lt;p&gt;
                  &lt;data:comment.body/&gt;
                &lt;/p&gt;
              &lt;/b:if&gt;
            &lt;/dd&gt;
            &lt;dd class='comment-footer'&gt;
              &lt;span class='comment-timestamp'&gt;
                &lt;a expr:href='data:comment.url' title='comment permalink'&gt;
                  &lt;data:comment.timestamp/&gt;
                &lt;/a&gt;
                &lt;b:include data='comment' name='commentDeleteIcon'/&gt;
              &lt;/span&gt;
            &lt;/dd&gt;
          &lt;/b:loop&gt;
        &lt;/dl&gt;
      &lt;/div&gt;

      &lt;b:if cond='data:post.commentPagingRequired'&gt;
        &lt;span class='paging-control-container'&gt;
          &lt;a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'&gt;
            &lt;data:post.oldestLinkText/&gt;
          &lt;/a&gt;
          &lt;a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'&gt;
            &lt;data:post.olderLinkText/&gt;
          &lt;/a&gt;
          &amp;#160;
          &lt;data:post.commentRangeText/&gt;
          &amp;#160;
          &lt;a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'&gt;
            &lt;data:post.newerLinkText/&gt;
          &lt;/a&gt;
          &lt;a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'&gt;
            &lt;data:post.newestLinkText/&gt;
          &lt;/a&gt;
        &lt;/span&gt;
      &lt;/b:if&gt;

      &lt;p class='comment-footer'&gt;
        &lt;b:if cond='data:post.embedCommentForm'&gt;
          &lt;b:if cond='data:post.allowNewComments'&gt;
            &lt;b:include data='post' name='comment-form'/&gt;
          &lt;b:else/&gt;
            &lt;data:post.noNewCommentsText/&gt;
          &lt;/b:if&gt;
        &lt;b:elseif cond='data:post.allowComments'/&gt;
          &lt;a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'&gt;&lt;data:postCommentMsg/&gt;&lt;/a&gt;
        &lt;/b:if&gt;
      &lt;/p&gt;
    &lt;/b:if&gt;
    &lt;b:if cond='data:showCmtPopup'&gt;
      &lt;div id='comment-popup'&gt;
        &lt;iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'&gt;
        &lt;/iframe&gt;
      &lt;/div&gt;
    &lt;/b:if&gt;

    &lt;div id='backlinks-container'&gt;
    &lt;div expr:id='data:widget.instanceId + &amp;quot;_backlinks-container&amp;quot;'&gt;
       &lt;b:include cond='data:post.showBacklinks' data='post' name='backlinks'/&gt;
    &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='feedLinks'&gt;
  &lt;b:if cond='data:blog.pageType != &amp;quot;item&amp;quot;'&gt; &lt;!-- Blog feed links --&gt;
    &lt;b:if cond='data:feedLinks'&gt;
      &lt;div class='blog-feeds'&gt;
        &lt;b:include data='feedLinks' name='feedLinksBody'/&gt;
      &lt;/div&gt;
    &lt;/b:if&gt;

  &lt;b:else/&gt; &lt;!--Post feed links --&gt;
    &lt;div class='post-feeds'&gt;
      &lt;b:loop values='data:posts' var='post'&gt;
        &lt;b:include cond='data:post.allowComments and data:post.feedLinks' data='post.feedLinks' name='feedLinksBody'/&gt;
      &lt;/b:loop&gt;
    &lt;/div&gt;
  &lt;/b:if&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='feedLinksBody' var='links'&gt;
  &lt;div class='feed-links'&gt;
  &lt;data:feedLinksMsg/&gt;
  &lt;b:loop values='data:links' var='f'&gt;
     &lt;a class='feed-link' expr:href='data:f.url' expr:type='data:f.mimeType' target='_blank'&gt;&lt;data:f.name/&gt; (&lt;data:f.feedType/&gt;)&lt;/a&gt;
  &lt;/b:loop&gt;
  &lt;/div&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='iframe_comments' var='post'&gt;

  &lt;b:if cond='data:post.allowIframeComments'&gt;
    &lt;script expr:src='data:post.iframeCommentSrc' type='text/javascript'/&gt;
    &lt;div class='cmt_iframe_holder' expr:data-href='data:post.url.canonical' expr:data-viewtype='data:post.viewType'/&gt;

    &lt;b:if cond='data:post.embedCommentForm == &amp;quot;false&amp;quot;'&gt;
      &lt;a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'&gt;&lt;data:postCommentMsg/&gt;&lt;/a&gt;
    &lt;/b:if&gt;
  &lt;/b:if&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='mobile-index-post' var='post'&gt;
  &lt;div class='mobile-date-outer date-outer'&gt;
    &lt;b:if cond='data:post.dateHeader'&gt;
      &lt;div class='date-header'&gt;
        &lt;span&gt;&lt;data:post.dateHeader/&gt;&lt;/span&gt;
      &lt;/div&gt;
    &lt;/b:if&gt;

    &lt;div class='mobile-post-outer'&gt;
      &lt;a expr:href='data:post.url'&gt;
        &lt;h3 class='mobile-index-title entry-title' itemprop='name'&gt;
          &lt;data:post.title/&gt;
        &lt;/h3&gt;

        &lt;div class='mobile-index-arrow'&gt;&amp;amp;rsaquo;&lt;/div&gt;

        &lt;div class='mobile-index-contents'&gt;
          &lt;b:if cond='data:post.thumbnailUrl'&gt;
            &lt;div class='mobile-index-thumbnail'&gt;
              &lt;div class='Image'&gt;
                &lt;img expr:src='data:post.thumbnailUrl'/&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/b:if&gt;

          &lt;div class='post-body'&gt;
            &lt;b:if cond='data:post.snippet'&gt;&lt;data:post.snippet/&gt;&lt;/b:if&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        &lt;div style='clear: both;'/&gt;
      &lt;/a&gt;

      &lt;div class='mobile-index-comment'&gt;
        &lt;b:include cond='data:blog.pageType != &amp;quot;static_page&amp;quot;                          and data:post.allowComments                          and data:post.numComments != 0' data='post' name='comment_count_picker'/&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='mobile-main' var='top'&gt;
    &lt;!-- posts --&gt;
    &lt;div class='blog-posts hfeed'&gt;

      &lt;b:include data='top' name='status-message'/&gt;

      &lt;b:if cond='data:blog.pageType == &amp;quot;index&amp;quot;'&gt;
        &lt;b:loop values='data:posts' var='post'&gt;
          &lt;b:include data='post' name='mobile-index-post'/&gt;
        &lt;/b:loop&gt;
      &lt;b:else/&gt;
        &lt;b:loop values='data:posts' var='post'&gt;
          &lt;b:include data='post' name='mobile-post'/&gt;
        &lt;/b:loop&gt;
      &lt;/b:if&gt;
    &lt;/div&gt;

   &lt;b:include name='mobile-nextprev'/&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='mobile-nextprev'&gt;
  &lt;div class='blog-pager' id='blog-pager'&gt;
    &lt;b:if cond='data:newerPageUrl'&gt;
      &lt;div class='mobile-link-button' id='blog-pager-newer-link'&gt;
      &lt;a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &amp;quot;_blog-pager-newer-link&amp;quot;' expr:title='data:newerPageTitle'&gt;&amp;amp;lsaquo;&lt;/a&gt;
      &lt;/div&gt;
    &lt;/b:if&gt;

    &lt;b:if cond='data:olderPageUrl'&gt;
      &lt;div class='mobile-link-button' id='blog-pager-older-link'&gt;
      &lt;a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &amp;quot;_blog-pager-older-link&amp;quot;' expr:title='data:olderPageTitle'&gt;&amp;amp;rsaquo;&lt;/a&gt;
      &lt;/div&gt;
    &lt;/b:if&gt;

    &lt;div class='mobile-link-button' id='blog-pager-home-link'&gt;
    &lt;a class='home-link' expr:href='data:blog.homepageUrl'&gt;&lt;data:homeMsg/&gt;&lt;/a&gt;
    &lt;/div&gt;

    &lt;div class='mobile-desktop-link'&gt;
      &lt;a class='home-link' expr:href='data:desktopLinkUrl'&gt;&lt;data:desktopLinkMsg/&gt;&lt;/a&gt;
    &lt;/div&gt;

  &lt;/div&gt;
  &lt;div class='clear'/&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='mobile-post' var='post'&gt;
  &lt;div class='date-outer'&gt;
    &lt;b:if cond='data:post.dateHeader'&gt;
      &lt;h2 class='date-header'&gt;&lt;span&gt;&lt;data:post.dateHeader/&gt;&lt;/span&gt;&lt;/h2&gt;
    &lt;/b:if&gt;
    &lt;div class='date-posts'&gt;
      &lt;div class='post-outer'&gt;

        &lt;div class='post hentry uncustomized-post-template' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'&gt;
          &lt;b:if cond='data:post.thumbnailUrl'&gt;
            &lt;meta expr:content='data:post.thumbnailUrl' itemprop='image_url'/&gt;
          &lt;/b:if&gt;
          &lt;meta expr:content='data:blog.blogId' itemprop='blogId'/&gt;
          &lt;meta expr:content='data:post.id' itemprop='postId'/&gt;

          &lt;a expr:name='data:post.id'/&gt;
          &lt;b:if cond='data:post.title'&gt;
            &lt;h3 class='post-title entry-title' itemprop='name'&gt;
              &lt;b:if cond='data:post.link'&gt;
                &lt;a expr:href='data:post.link'&gt;&lt;data:post.title/&gt;&lt;/a&gt;
              &lt;b:elseif cond='data:post.url and data:blog.url != data:post.url'/&gt;
                &lt;a expr:href='data:post.url'&gt;&lt;data:post.title/&gt;&lt;/a&gt;
              &lt;b:else/&gt;
                &lt;data:post.title/&gt;
              &lt;/b:if&gt;
            &lt;/h3&gt;
          &lt;/b:if&gt;

          &lt;div class='post-header'&gt;
            &lt;div class='post-header-line-1'/&gt;
          &lt;/div&gt;

          &lt;div class='post-body entry-content' expr:id='&amp;quot;post-body-&amp;quot; + data:post.id' itemprop='articleBody'&gt;
            &lt;data:post.body/&gt;
            &lt;div style='clear: both;'/&gt; &lt;!-- clear for photos floats --&gt;
          &lt;/div&gt;

          &lt;div class='post-footer'&gt;
            &lt;div class='post-footer-line post-footer-line-1'&gt;
              &lt;span class='post-author vcard'&gt;
                &lt;b:if cond='data:top.showAuthor'&gt;
                  &lt;b:if cond='data:post.authorProfileUrl'&gt;
                    &lt;span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'&gt;
                      &lt;meta expr:content='data:post.authorProfileUrl' itemprop='url'/&gt;
                      &lt;a expr:href='data:post.authorProfileUrl' rel='author' title='author profile'&gt;
                        &lt;span itemprop='name'&gt;&lt;data:post.author/&gt;&lt;/span&gt;
                      &lt;/a&gt;
                    &lt;/span&gt;
                  &lt;b:else/&gt;
                    &lt;span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'&gt;
                      &lt;span itemprop='name'&gt;&lt;data:post.author/&gt;&lt;/span&gt;
                    &lt;/span&gt;
                  &lt;/b:if&gt;
                &lt;/b:if&gt;
              &lt;/span&gt;

              &lt;span class='post-timestamp'&gt;
                &lt;b:if cond='data:top.showTimestamp'&gt;
                  &lt;data:top.timestampLabel/&gt;
                  &lt;b:if cond='data:post.url'&gt;
                    &lt;meta expr:content='data:post.url.canonical' itemprop='url'/&gt;
                    &lt;a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'&gt;&lt;abbr class='published' expr:title='data:post.timestampISO8601' itemprop='datePublished'&gt;&lt;data:post.timestamp/&gt;&lt;/abbr&gt;&lt;/a&gt;
                  &lt;/b:if&gt;
                &lt;/b:if&gt;
              &lt;/span&gt;

              &lt;span class='post-comment-link'&gt;
                &lt;b:include cond='data:blog.pageType not in {&amp;quot;item&amp;quot;,&amp;quot;static_page&amp;quot;}                                  and data:post.allowComments' data='post' name='comment_count_picker'/&gt;
              &lt;/span&gt;
            &lt;/div&gt;

            &lt;div class='post-footer-line post-footer-line-2'&gt;
              &lt;b:if cond='data:top.showMobileShare'&gt;
                &lt;div class='mobile-link-button goog-inline-block' id='mobile-share-button'&gt;
                  &lt;a href='javascript:void(0);'&gt;&lt;data:shareMsg/&gt;&lt;/a&gt;
                &lt;/div&gt;
              &lt;/b:if&gt;
              &lt;b:if cond='data:top.showDummy'&gt;
                &lt;div class='goog-inline-block dummy-container'&gt;&lt;data:post.dummyTag/&gt;&lt;/div&gt;
              &lt;/b:if&gt;
            &lt;/div&gt;

          &lt;/div&gt;
        &lt;/div&gt;

        &lt;b:include cond='data:blog.pageType in {&amp;quot;static_page&amp;quot;,&amp;quot;item&amp;quot;}' data='post' name='comment_picker'/&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='nextprev'&gt;
  &lt;div class='blog-pager' id='blog-pager'&gt;
    &lt;b:if cond='data:newerPageUrl'&gt;
      &lt;span id='blog-pager-newer-link'&gt;
      &lt;a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &amp;quot;_blog-pager-newer-link&amp;quot;' expr:title='data:newerPageTitle'&gt;&lt;data:newerPageTitle/&gt;&lt;/a&gt;
      &lt;/span&gt;
    &lt;/b:if&gt;

    &lt;b:if cond='data:olderPageUrl'&gt;
      &lt;span id='blog-pager-older-link'&gt;
      &lt;a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &amp;quot;_blog-pager-older-link&amp;quot;' expr:title='data:olderPageTitle'&gt;&lt;data:olderPageTitle/&gt;&lt;/a&gt;
      &lt;/span&gt;
    &lt;/b:if&gt;

    &lt;a class='home-link' expr:href='data:blog.homepageUrl'&gt;&lt;data:homeMsg/&gt;&lt;/a&gt;

    &lt;b:if cond='data:mobileLinkUrl'&gt;
      &lt;div class='blog-mobile-link'&gt;
        &lt;a expr:href='data:mobileLinkUrl'&gt;&lt;data:mobileLinkMsg/&gt;&lt;/a&gt;
      &lt;/div&gt;
    &lt;/b:if&gt;

  &lt;/div&gt;
  &lt;div class='clear'/&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='post' var='post'&gt;
  &lt;div class='post hentry uncustomized-post-template' itemprop='blogPost' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'&gt;
    &lt;b:if cond='data:post.firstImageUrl'&gt;
      &lt;meta expr:content='data:post.firstImageUrl' itemprop='image_url'/&gt;
    &lt;/b:if&gt;
    &lt;meta expr:content='data:blog.blogId' itemprop='blogId'/&gt;
    &lt;meta expr:content='data:post.id' itemprop='postId'/&gt;

    &lt;a expr:name='data:post.id'/&gt;
    &lt;b:if cond='data:post.title'&gt;
      &lt;h3 class='post-title entry-title' itemprop='name'&gt;
      &lt;b:if cond='data:post.link or (data:post.url and data:blog.url != data:post.url)'&gt;
        &lt;a expr:href='data:post.link ? data:post.link : data:post.url'&gt;&lt;data:post.title/&gt;&lt;/a&gt;
      &lt;b:else/&gt;
        &lt;data:post.title/&gt;
      &lt;/b:if&gt;
      &lt;/h3&gt;
    &lt;/b:if&gt;

    &lt;div class='post-header'&gt;
    &lt;div class='post-header-line-1'/&gt;
    &lt;/div&gt;

    &lt;!-- Then use the post body as the schema.org description, for good G+/FB snippeting. --&gt;
    &lt;div class='post-body entry-content' expr:id='&amp;quot;post-body-&amp;quot; + data:post.id' expr:itemprop='(data:blog.metaDescription ? &amp;quot;&amp;quot; : &amp;quot;description &amp;quot;) + &amp;quot;articleBody&amp;quot;'&gt;
      &lt;data:post.body/&gt;
      &lt;div style='clear: both;'/&gt; &lt;!-- clear for photos floats --&gt;
    &lt;/div&gt;

    &lt;b:if cond='data:post.hasJumpLink'&gt;
      &lt;div class='jump-link'&gt;
        &lt;a expr:href='data:post.url + &amp;quot;#more&amp;quot;' expr:title='data:post.title'&gt;&lt;data:post.jumpText/&gt;&lt;/a&gt;
      &lt;/div&gt;
    &lt;/b:if&gt;

    &lt;div class='post-footer'&gt;
    &lt;div class='post-footer-line post-footer-line-1'&gt;
      &lt;span class='post-author vcard'&gt;
        &lt;b:if cond='data:top.showAuthor'&gt;
          &lt;data:top.authorLabel/&gt;
            &lt;b:if cond='data:post.authorProfileUrl'&gt;
              &lt;span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'&gt;
                &lt;meta expr:content='data:post.authorProfileUrl' itemprop='url'/&gt;
                &lt;a class='g-profile' expr:href='data:post.authorProfileUrl' rel='author' title='author profile'&gt;
                  &lt;span itemprop='name'&gt;&lt;data:post.author/&gt;&lt;/span&gt;
                &lt;/a&gt;
              &lt;/span&gt;
            &lt;b:else/&gt;
              &lt;span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'&gt;
                &lt;span itemprop='name'&gt;&lt;data:post.author/&gt;&lt;/span&gt;
              &lt;/span&gt;
            &lt;/b:if&gt;
        &lt;/b:if&gt;
      &lt;/span&gt;

      &lt;span class='post-timestamp'&gt;
        &lt;b:if cond='data:top.showTimestamp'&gt;
          &lt;data:top.timestampLabel/&gt;
          &lt;b:if cond='data:post.url'&gt;
            &lt;meta expr:content='data:post.url.canonical' itemprop='url'/&gt;
            &lt;a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'&gt;&lt;abbr class='published' expr:title='data:post.timestampISO8601' itemprop='datePublished'&gt;&lt;data:post.timestamp/&gt;&lt;/abbr&gt;&lt;/a&gt;
          &lt;/b:if&gt;
        &lt;/b:if&gt;
      &lt;/span&gt;

      &lt;span class='reaction-buttons'&gt;
        &lt;b:if cond='data:top.showReactions'&gt;
          &lt;table border='0' cellpadding='0' cellspacing='0' width='100%'&gt;&lt;tr&gt;
            &lt;td class='reactions-label-cell' nowrap='nowrap' valign='top' width='1%'&gt;
              &lt;span class='reactions-label'&gt;
              &lt;data:top.reactionsLabel/&gt;&lt;/span&gt;&amp;#160;&lt;/td&gt;
            &lt;td&gt;&lt;iframe allowtransparency='true' class='reactions-iframe' expr:src='data:post.reactionsUrl' frameborder='0' name='reactions' scrolling='no'/&gt;&lt;/td&gt;
           &lt;/tr&gt;&lt;/table&gt;
        &lt;/b:if&gt;
      &lt;/span&gt;

      &lt;span class='post-comment-link'&gt;
        &lt;b:include cond='data:blog.pageType not in {&amp;quot;item&amp;quot;,&amp;quot;static_page&amp;quot;}                          and data:post.allowComments' data='post' name='comment_count_picker'/&gt;
      &lt;/span&gt;

       &lt;!-- backlinks --&gt;
       &lt;span class='post-backlinks post-comment-link'&gt;
         &lt;b:if cond='data:blog.pageType not in {&amp;quot;item&amp;quot;,&amp;quot;static_page&amp;quot;}                      and data:post.showBacklinks'&gt;
           &lt;a class='comment-link' expr:href='data:post.url + &amp;quot;#links&amp;quot;'&gt;&lt;data:top.backlinkLabel/&gt;&lt;/a&gt;
         &lt;/b:if&gt;
       &lt;/span&gt;

      &lt;span class='post-icons'&gt;
        &lt;!-- email post links --&gt;
        &lt;b:if cond='data:post.emailPostUrl'&gt;
          &lt;span class='item-action'&gt;
          &lt;a expr:href='data:post.emailPostUrl' expr:title='data:top.emailPostMsg'&gt;
            &lt;img alt='' class='icon-action' height='13' src='https://resources.blogblog.com/img/icon18_email.gif' width='18'/&gt;
          &lt;/a&gt;
          &lt;/span&gt;
        &lt;/b:if&gt;

        &lt;!-- quickedit pencil --&gt;
        &lt;b:include data='post' name='postQuickEdit'/&gt;
      &lt;/span&gt;

      &lt;!-- share buttons --&gt;
      &lt;div class='post-share-buttons goog-inline-block'&gt;
        &lt;b:include cond='data:post.sharePostUrl' data='post' name='shareButtons'/&gt;
      &lt;/div&gt;

      &lt;/div&gt;

      &lt;div class='post-footer-line post-footer-line-2'&gt;
      &lt;span class='post-labels'&gt;
        &lt;b:if cond='data:top.showPostLabels and data:post.labels'&gt;
          &lt;data:postLabelsLabel/&gt;
          &lt;b:loop values='data:post.labels' var='label'&gt;
            &lt;a expr:href='data:label.url' rel='tag'&gt;&lt;data:label.name/&gt;&lt;/a&gt;&lt;b:if cond='not data:label.isLast'&gt;,&lt;/b:if&gt;
          &lt;/b:loop&gt;
        &lt;/b:if&gt;
      &lt;/span&gt;
      &lt;/div&gt;

      &lt;div class='post-footer-line post-footer-line-3'&gt;
      &lt;span class='post-location'&gt;
        &lt;b:if cond='data:top.showLocation and data:post.location'&gt;
          &lt;data:postLocationLabel/&gt;
          &lt;a expr:href='data:post.location.mapsUrl' target='_blank'&gt;&lt;data:post.location.name/&gt;&lt;/a&gt;
        &lt;/b:if&gt;
      &lt;/span&gt;
      &lt;/div&gt;
      &lt;b:if cond='data:post.authorAboutMe'&gt;
        &lt;div class='author-profile' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'&gt;
          &lt;b:if cond='data:post.authorPhoto.url'&gt;
            &lt;img expr:src='data:post.authorPhoto.url' itemprop='image' width='50px'/&gt;
          &lt;/b:if&gt;
          &lt;div&gt;
            &lt;a class='g-profile' expr:href='data:post.authorProfileUrl' itemprop='url' rel='author' title='author profile'&gt;
              &lt;span itemprop='name'&gt;&lt;data:post.author/&gt;&lt;/span&gt;
            &lt;/a&gt;
          &lt;/div&gt;
          &lt;span itemprop='description'&gt;&lt;data:post.authorAboutMe/&gt;&lt;/span&gt;
        &lt;/div&gt;
      &lt;/b:if&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='postQuickEdit' var='post'&gt;
  &lt;b:if cond='data:post.editUrl'&gt;
    &lt;span expr:class='&amp;quot;item-control &amp;quot; + data:post.adminClass'&gt;
      &lt;a expr:href='data:post.editUrl' expr:title='data:top.editPostMsg'&gt;
        &lt;img alt='' class='icon-action' height='18' src='https://resources.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/&gt;
      &lt;/a&gt;
    &lt;/span&gt;
  &lt;/b:if&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='shareButtons' var='post'&gt;
  &lt;b:if cond='data:top.showEmailButton'&gt;&lt;a class='goog-inline-block share-button sb-email' expr:href='data:post.sharePostUrl + &amp;quot;&amp;amp;target=email&amp;quot;' expr:title='data:top.emailThisMsg' target='_blank'&gt;&lt;span class='share-button-link-text'&gt;&lt;data:top.emailThisMsg/&gt;&lt;/span&gt;&lt;/a&gt;&lt;/b:if&gt;&lt;b:if cond='data:top.showBlogThisButton'&gt;&lt;a class='goog-inline-block share-button sb-blog' expr:href='data:post.sharePostUrl + &amp;quot;&amp;amp;target=blog&amp;quot;' expr:onclick='&amp;quot;window.open(this.href, \&amp;quot;_blank\&amp;quot;, \&amp;quot;height=270,width=475\&amp;quot;); return false;&amp;quot;' expr:title='data:top.blogThisMsg' target='_blank'&gt;&lt;span class='share-button-link-text'&gt;&lt;data:top.blogThisMsg/&gt;&lt;/span&gt;&lt;/a&gt;&lt;/b:if&gt;&lt;b:if cond='data:top.showTwitterButton'&gt;&lt;a class='goog-inline-block share-button sb-twitter' expr:href='data:post.sharePostUrl + &amp;quot;&amp;amp;target=twitter&amp;quot;' expr:title='data:top.shareToTwitterMsg' target='_blank'&gt;&lt;span class='share-button-link-text'&gt;&lt;data:top.shareToTwitterMsg/&gt;&lt;/span&gt;&lt;/a&gt;&lt;/b:if&gt;&lt;b:if cond='data:top.showFacebookButton'&gt;&lt;a class='goog-inline-block share-button sb-facebook' expr:href='data:post.sharePostUrl + &amp;quot;&amp;amp;target=facebook&amp;quot;' expr:onclick='&amp;quot;window.open(this.href, \&amp;quot;_blank\&amp;quot;, \&amp;quot;height=430,width=640\&amp;quot;); return false;&amp;quot;' expr:title='data:top.shareToFacebookMsg' target='_blank'&gt;&lt;span class='share-button-link-text'&gt;&lt;data:top.shareToFacebookMsg/&gt;&lt;/span&gt;&lt;/a&gt;&lt;/b:if&gt;&lt;b:if cond='data:top.showPinterestButton'&gt;&lt;a class='goog-inline-block share-button sb-pinterest' expr:href='data:post.sharePostUrl + &amp;quot;&amp;amp;target=pinterest&amp;quot;' expr:title='data:top.shareToPinterestMsg' target='_blank'&gt;&lt;span class='share-button-link-text'&gt;&lt;data:top.shareToPinterestMsg/&gt;&lt;/span&gt;&lt;/a&gt;&lt;/b:if&gt;&lt;b:if cond='data:top.showPlusOne'&gt;&lt;div class='goog-inline-block google-plus-share-container'&gt;&lt;data:post.googlePlusShareTag/&gt;&lt;/div&gt;&lt;/b:if&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='status-message'&gt;
  &lt;b:if cond='data:navMessage'&gt;
  &lt;div class='status-msg-wrap'&gt;
    &lt;div class='status-msg-body'&gt;
      &lt;data:navMessage/&gt;
    &lt;/div&gt;
    &lt;div class='status-msg-border'&gt;
      &lt;div class='status-msg-bg'&gt;
        &lt;div class='status-msg-hidden'&gt;&lt;data:navMessage/&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div style='clear: both;'/&gt;
  &lt;/b:if&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='threaded-comment-form' var='post'&gt;
  &lt;div class='comment-form'&gt;
    &lt;a name='comment-form'/&gt;
    &lt;b:if cond='data:mobile'&gt;
      &lt;p&gt;&lt;data:blogCommentMessage/&gt;&lt;/p&gt;
      &lt;data:blogTeamBlogMessage/&gt;
      &lt;a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/&gt;
      &lt;iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/&gt;
    &lt;b:else/&gt;
      &lt;p&gt;&lt;data:blogCommentMessage/&gt;&lt;/p&gt;
      &lt;data:blogTeamBlogMessage/&gt;
      &lt;a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/&gt;
      &lt;iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/&gt;
    &lt;/b:if&gt;
    &lt;data:post.cmtfpIframe/&gt;
    &lt;script type='text/javascript'&gt;
      BLOG_CMT_createIframe(&amp;#39;&lt;data:post.appRpcRelayPath/&gt;&amp;#39;);
    &lt;/script&gt;
  &lt;/div&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='threaded_comment_js' var='post'&gt;
  &lt;script async='async' expr:src='data:post.commentSrc' type='text/javascript'/&gt;

  &lt;script type='text/javascript'&gt;
    (function() {
      var items = &lt;data:post.commentJso/&gt;;
      var msgs = &lt;data:post.commentMsgs/&gt;;
      var config = &lt;data:post.commentConfig/&gt;;

// &lt;![CDATA[
      var cursor = null;
      if (items &amp;&amp; items.length &gt; 0) {
        cursor = parseInt(items[items.length - 1].timestamp) + 1;
      }

      var bodyFromEntry = function(entry) {
        if (entry.gd$extendedProperty) {
          for (var k in entry.gd$extendedProperty) {
            if (entry.gd$extendedProperty[k].name == 'blogger.contentRemoved') {
              return '&lt;span class="deleted-comment"&gt;' + entry.content.$t + '&lt;/span&gt;';
            }
          }
        }
        return entry.content.$t;
      }

      var parse = function(data) {
        cursor = null;
        var comments = [];
        if (data &amp;&amp; data.feed &amp;&amp; data.feed.entry) {
          for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
            var comment = {};
            // comment ID, parsed out of the original id format
            var id = /blog-(\d+).post-(\d+)/.exec(entry.id.$t);
            comment.id = id ? id[2] : null;
            comment.body = bodyFromEntry(entry);
            comment.timestamp = Date.parse(entry.published.$t) + '';
            if (entry.author &amp;&amp; entry.author.constructor === Array) {
              var auth = entry.author[0];
              if (auth) {
                comment.author = {
                  name: (auth.name ? auth.name.$t : undefined),
                  profileUrl: (auth.uri ? auth.uri.$t : undefined),
                  avatarUrl: (auth.gd$image ? auth.gd$image.src : undefined)
                };
              }
            }
            if (entry.link) {
              if (entry.link[2]) {
                comment.link = comment.permalink = entry.link[2].href;
              }
              if (entry.link[3]) {
                var pid = /.*comments\/default\/(\d+)\?.*/.exec(entry.link[3].href);
                if (pid &amp;&amp; pid[1]) {
                  comment.parentId = pid[1];
                }
              }
            }
            comment.deleteclass = 'item-control blog-admin';
            if (entry.gd$extendedProperty) {
              for (var k in entry.gd$extendedProperty) {
                if (entry.gd$extendedProperty[k].name == 'blogger.itemClass') {
                  comment.deleteclass += ' ' + entry.gd$extendedProperty[k].value;
                } else if (entry.gd$extendedProperty[k].name == 'blogger.displayTime') {
                  comment.displayTime = entry.gd$extendedProperty[k].value;
                }
              }
            }
            comments.push(comment);
          }
        }
        return comments;
      };

      var paginator = function(callback) {
        if (hasMore()) {
          var url = config.feed + '?alt=json&amp;v=2&amp;orderby=published&amp;reverse=false&amp;max-results=50';
          if (cursor) {
            url += '&amp;published-min=' + new Date(cursor).toISOString();
          }
          window.bloggercomments = function(data) {
            var parsed = parse(data);
            cursor = parsed.length &lt; 50 ? null
                : parseInt(parsed[parsed.length - 1].timestamp) + 1
            callback(parsed);
            window.bloggercomments = null;
          }
          url += '&amp;callback=bloggercomments';
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = url;
          document.getElementsByTagName('head')[0].appendChild(script);
        }
      };
      var hasMore = function() {
        return !!cursor;
      };
      var getMeta = function(key, comment) {
        if ('iswriter' == key) {
          var matches = !!comment.author
              &amp;&amp; comment.author.name == config.authorName
              &amp;&amp; comment.author.profileUrl == config.authorUrl;
          return matches ? 'true' : '';
        } else if ('deletelink' == key) {
          return config.baseUri + '/delete-comment.g?blogID='
               + config.blogId + '&amp;postID=' + comment.id;
        } else if ('deleteclass' == key) {
          return comment.deleteclass;
        }
        return '';
      };

      var replybox = null;
      var replyUrlParts = null;
      var replyParent = undefined;

      var onReply = function(commentId, domId) {
        if (replybox == null) {
          // lazily cache replybox, and adjust to suit this style:
          replybox = document.getElementById('comment-editor');
          if (replybox != null) {
            replybox.height = '250px';
            replybox.style.display = 'block';
            replyUrlParts = replybox.src.split('#');
          }
        }
        if (replybox &amp;&amp; (commentId !== replyParent)) {
          replybox.src = '';
          document.getElementById(domId).insertBefore(replybox, null);
          replybox.src = replyUrlParts[0]
              + (commentId ? '&amp;parentID=' + commentId : '')
              + '#' + replyUrlParts[1];
          replyParent = commentId;
        }
      };

      var hash = (window.location.hash || '#').substring(1);
      var startThread, targetComment;
      if (/^comment-form_/.test(hash)) {
        startThread = hash.substring('comment-form_'.length);
      } else if (/^c[0-9]+$/.test(hash)) {
        targetComment = hash.substring(1);
      }

      // Configure commenting API:
      var configJso = {
        'maxDepth': config.maxThreadDepth
      };
      var provider = {
        'id': config.postId,
        'data': items,
        'loadNext': paginator,
        'hasMore': hasMore,
        'getMeta': getMeta,
        'onReply': onReply,
        'rendered': true,
        'initComment': targetComment,
        'initReplyThread': startThread,
        'config': configJso,
        'messages': msgs
      };

      var render = function() {
        if (window.goog &amp;&amp; window.goog.comments) {
          var holder = document.getElementById('comment-holder');
          window.goog.comments.render(holder, provider);
        }
      };

      // render now, or queue to render when library loads:
      if (window.goog &amp;&amp; window.goog.comments) {
        render();
      } else {
        window.goog = window.goog || {};
        window.goog.comments = window.goog.comments || {};
        window.goog.comments.loadQueue = window.goog.comments.loadQueue || [];
        window.goog.comments.loadQueue.push(render);
      }
    })();
// ]]&gt;
  &lt;/script&gt;
&lt;/b:includable&gt;
              &lt;b:includable id='threaded_comments' var='post'&gt;
  &lt;div class='comments' id='comments'&gt;
    &lt;a name='comments'/&gt;
    &lt;h4&gt;&lt;data:post.commentLabelFull/&gt;:&lt;/h4&gt;

    &lt;div class='comments-content'&gt;
      &lt;b:include cond='data:post.embedCommentForm' data='post' name='threaded_comment_js'/&gt;
      &lt;div id='comment-holder'&gt;
         &lt;data:post.commentHtml/&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;p class='comment-footer'&gt;
      &lt;b:if cond='data:post.allowNewComments'&gt;
        &lt;b:include data='post' name='threaded-comment-form'/&gt;
      &lt;b:else/&gt;
        &lt;data:post.noNewCommentsText/&gt;
      &lt;/b:if&gt;
    &lt;/p&gt;

    &lt;b:if cond='data:showCmtPopup'&gt;
      &lt;div id='comment-popup'&gt;
        &lt;iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'&gt;
        &lt;/iframe&gt;
      &lt;/div&gt;
    &lt;/b:if&gt;

    &lt;div id='backlinks-container'&gt;
    &lt;div expr:id='data:widget.instanceId + &amp;quot;_backlinks-container&amp;quot;'&gt;
      &lt;b:include cond='data:post.showBacklinks' data='post' name='backlinks'/&gt;
    &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/b:includable&gt;
            &lt;/b:widget&gt;
          &lt;/b:section&gt;
        &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class='column-left-outer'&gt;
        &lt;div class='column-left-inner'&gt;
          &lt;aside&gt;
          &lt;macro:include id='main-column-left-sections' name='sections'&gt;
            &lt;macro:param default='0' name='num'/&gt;
            &lt;macro:param default='sidebar-left' name='idPrefix'/&gt;
            &lt;macro:param default='sidebar' name='class'/&gt;
            &lt;macro:param default='true' name='includeBottom'/&gt;
          &lt;/macro:include&gt;
          &lt;/aside&gt;
        &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class='column-right-outer'&gt;
        &lt;div class='column-right-inner'&gt;
          &lt;aside&gt;
          &lt;macro:include id='main-column-right-sections' name='sections'&gt;
            &lt;macro:param default='2' name='num'/&gt;
            &lt;macro:param default='sidebar-right' name='idPrefix'/&gt;
            &lt;macro:param default='sidebar' name='class'/&gt;
            &lt;macro:param default='true' name='includeBottom'/&gt;
          &lt;/macro:include&gt;
          &lt;/aside&gt;
        &lt;/div&gt;
        &lt;/div&gt;

        &lt;/div&gt;

        &lt;div style='clear: both'/&gt;
      &lt;!-- columns --&gt;
      &lt;/div&gt;

    &lt;!-- main --&gt;
    &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class='main-cap-bottom cap-bottom'&gt;
      &lt;div class='cap-left'/&gt;
      &lt;div class='cap-right'/&gt;
    &lt;/div&gt;
    &lt;/div&gt;

    &lt;footer&gt;
    &lt;div class='footer-outer'&gt;
    &lt;div class='footer-cap-top cap-top'&gt;
      &lt;div class='cap-left'/&gt;
      &lt;div class='cap-right'/&gt;
    &lt;/div&gt;
    &lt;div class='fauxborder-left footer-fauxborder-left'&gt;
    &lt;div class='fauxborder-right footer-fauxborder-right'/&gt;
    &lt;div class='region-inner footer-inner'&gt;
      &lt;macro:include id='footer-sections' name='sections'&gt;
        &lt;macro:param default='2' name='num'/&gt;
        &lt;macro:param default='footer' name='idPrefix'/&gt;
        &lt;macro:param default='foot' name='class'/&gt;
        &lt;macro:param default='false' name='includeBottom'/&gt;
      &lt;/macro:include&gt;
      &lt;!-- outside of the include in order to lock Attribution widget --&gt;
      &lt;b:section class='foot' id='footer-3' name='Footer' showaddelement='no'&gt;
        &lt;b:widget id='Attribution1' locked='true' title='' type='Attribution' visible='true'&gt;
          &lt;b:includable id='main'&gt;
    &lt;div class='widget-content' style='text-align: center;'&gt;
      &lt;b:if cond='data:attribution != &amp;quot;&amp;quot;'&gt;
       &lt;data:attribution/&gt;
      &lt;/b:if&gt;
    &lt;/div&gt;

    &lt;b:include name='quickedit'/&gt;
  &lt;/b:includable&gt;
        &lt;/b:widget&gt;
      &lt;/b:section&gt;
    &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class='footer-cap-bottom cap-bottom'&gt;
      &lt;div class='cap-left'/&gt;
      &lt;div class='cap-right'/&gt;
    &lt;/div&gt;
    &lt;/div&gt;
    &lt;/footer&gt;

  &lt;!-- content --&gt;
  &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class='content-cap-bottom cap-bottom'&gt;
    &lt;div class='cap-left'/&gt;
    &lt;div class='cap-right'/&gt;
  &lt;/div&gt;
  &lt;/div&gt;
  &lt;/div&gt;

  &lt;script type='text/javascript'&gt;
    window.setTimeout(function() {
        document.body.className = document.body.className.replace(&amp;#39;loading&amp;#39;, &amp;#39;&amp;#39;);
      }, 10);
  &lt;/script&gt;
&lt;/body&gt;

&lt;macro:includable id='sections' var='col'&gt;
  &lt;macro:if cond='data:col.num == 0'&gt;
  &lt;macro:else/&gt;
    &lt;b:section mexpr:class='data:col.class' mexpr:id='data:col.idPrefix + &amp;quot;-1&amp;quot;' preferred='yes' showaddelement='yes'/&gt;

    &lt;macro:if cond='data:col.num &amp;gt;= 2'&gt;
      &lt;table border='0' cellpadding='0' cellspacing='0' mexpr:class='&amp;quot;section-columns columns-&amp;quot; + data:col.num'&gt;
      &lt;tbody&gt;
      &lt;tr&gt;
        &lt;td class='first columns-cell'&gt;
          &lt;b:section mexpr:class='data:col.class' mexpr:id='data:col.idPrefix + &amp;quot;-2-1&amp;quot;'/&gt;
        &lt;/td&gt;

        &lt;td class='columns-cell'&gt;
          &lt;b:section mexpr:class='data:col.class' mexpr:id='data:col.idPrefix + &amp;quot;-2-2&amp;quot;'/&gt;
        &lt;/td&gt;

        &lt;macro:if cond='data:col.num &amp;gt;= 3'&gt;
          &lt;td class='columns-cell'&gt;
            &lt;b:section mexpr:class='data:col.class' mexpr:id='data:col.idPrefix + &amp;quot;-2-3&amp;quot;'/&gt;
          &lt;/td&gt;
        &lt;/macro:if&gt;

        &lt;macro:if cond='data:col.num &amp;gt;= 4'&gt;
          &lt;td class='columns-cell'&gt;
            &lt;b:section mexpr:class='data:col.class' mexpr:id='data:col.idPrefix + &amp;quot;-2-4&amp;quot;'/&gt;
          &lt;/td&gt;
        &lt;/macro:if&gt;
      &lt;/tr&gt;
      &lt;/tbody&gt;
      &lt;/table&gt;

      &lt;macro:if cond='data:col.includeBottom'&gt;
        &lt;b:section mexpr:class='data:col.class' mexpr:id='data:col.idPrefix + &amp;quot;-3&amp;quot;' showaddelement='no'/&gt;
      &lt;/macro:if&gt;
    &lt;/macro:if&gt;
  &lt;/macro:if&gt;
&lt;/macro:includable&gt;

&lt;b:section-contents id='sidebar-right-1'&gt;
  &lt;b:widget id='Profile1' locked='false' title='' type='Profile' visible='true'&gt;
    &lt;b:includable id='main'&gt;
    &lt;b:if cond='data:title != &amp;quot;&amp;quot;'&gt;
      &lt;h2&gt;&lt;data:title/&gt;&lt;/h2&gt;
    &lt;/b:if&gt;
    &lt;div class='widget-content'&gt;
    &lt;b:if cond='data:team'&gt; &lt;!-- team blog profile --&gt;
      &lt;ul&gt;
        &lt;b:loop values='data:authors' var='i'&gt;
          &lt;li&gt;&lt;a class='profile-name-link g-profile' expr:href='data:i.userUrl' expr:style='&amp;quot;background-image: url(&amp;quot; + data:i.profileLogo + &amp;quot;);&amp;quot;'&gt;&lt;data:i.display-name/&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;/b:loop&gt;
      &lt;/ul&gt;

    &lt;b:else/&gt; &lt;!-- normal blog profile --&gt;

      &lt;b:if cond='data:photo.url != &amp;quot;&amp;quot;'&gt;
        &lt;a expr:href='data:userUrl'&gt;&lt;img class='profile-img' expr:alt='data:messages.myPhoto' expr:height='data:photo.height' expr:src='data:photo.url' expr:width='data:photo.width'/&gt;&lt;/a&gt;
      &lt;/b:if&gt;

      &lt;dl class='profile-datablock'&gt;
        &lt;dt class='profile-data'&gt;
          &lt;a class='profile-name-link g-profile' expr:href='data:userUrl' expr:style='&amp;quot;background-image: url(&amp;quot; + data:profileLogo + &amp;quot;);&amp;quot;' rel='author'&gt;
            &lt;data:displayname/&gt;
          &lt;/a&gt;
          &lt;b:if cond='data:hasgoogleprofile'&gt;
            &lt;br/&gt;
            &lt;div class='g-follow' data-annotation='bubble' data-height='20' expr:data-href='data:userUrl'/&gt;
          &lt;/b:if&gt;
        &lt;/dt&gt;

        &lt;b:if cond='data:showlocation'&gt;
          &lt;dd class='profile-data'&gt;&lt;data:location/&gt;&lt;/dd&gt;
        &lt;/b:if&gt;

        &lt;b:if cond='data:aboutme != &amp;quot;&amp;quot;'&gt;&lt;dd class='profile-textblock'&gt;&lt;data:aboutme/&gt;&lt;/dd&gt;&lt;/b:if&gt;
      &lt;/dl&gt;
      &lt;a class='profile-link' expr:href='data:userUrl' rel='author'&gt;&lt;data:viewProfileMsg/&gt;&lt;/a&gt;
    &lt;/b:if&gt;

     &lt;b:include name='quickedit'/&gt;
    &lt;/div&gt;
  &lt;/b:includable&gt;
  &lt;/b:widget&gt;
  &lt;b:widget id='BlogSearch1' locked='false' title='Search This Blog' type='BlogSearch' visible='true'&gt;
    &lt;b:includable id='main'&gt;
    &lt;!-- only display title if it's non-empty --&gt;
    &lt;b:if cond='data:title != &amp;quot;&amp;quot;'&gt;
      &lt;h2 class='title'&gt;&lt;data:title/&gt;&lt;/h2&gt;
    &lt;/b:if&gt;

    &lt;div class='widget-content'&gt;
      &lt;div expr:id='data:widget.instanceId + &amp;quot;_form&amp;quot;'&gt;
        &lt;form class='gsc-search-box' expr:action='data:blog.searchUrl'&gt;
          &lt;table cellpadding='0' cellspacing='0' class='gsc-search-box'&gt;
            &lt;tbody&gt;
              &lt;tr&gt;
                &lt;td class='gsc-input'&gt;
                  &lt;input autocomplete='off' class='gsc-input' expr:value='data:view.isSearch ? data:view.search.query.escaped : &amp;quot;&amp;quot;' name='q' size='10' title='search' type='text'/&gt;
                &lt;/td&gt;
                &lt;td class='gsc-search-button'&gt;
                  &lt;input class='gsc-search-button' expr:value='data:messages.search' title='search' type='submit'/&gt;
                &lt;/td&gt;
              &lt;/tr&gt;
            &lt;/tbody&gt;
          &lt;/table&gt;
        &lt;/form&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;b:include name='quickedit'/&gt;
  &lt;/b:includable&gt;
  &lt;/b:widget&gt;
  &lt;b:widget id='Label3' locked='false' title='Labels' type='Label' visible='true'&gt;
    &lt;b:includable id='main'&gt;
  &lt;b:if cond='data:title != &amp;quot;&amp;quot;'&gt;
    &lt;h2&gt;&lt;data:title/&gt;&lt;/h2&gt;
  &lt;/b:if&gt;
  &lt;div expr:class='&amp;quot;widget-content &amp;quot; + data:display + &amp;quot;-label-widget-content&amp;quot;'&gt;
    &lt;b:if cond='data:display == &amp;quot;list&amp;quot;'&gt;
      &lt;ul&gt;
        &lt;b:loop values='data:labels' var='label'&gt;
          &lt;li&gt;
            &lt;b:if cond='data:blog.url == data:label.url'&gt;
              &lt;span expr:dir='data:blog.languageDirection'&gt;&lt;data:label.name/&gt;&lt;/span&gt;
            &lt;b:else/&gt;
              &lt;a expr:dir='data:blog.languageDirection' expr:href='data:label.url'&gt;&lt;data:label.name/&gt;&lt;/a&gt;
            &lt;/b:if&gt;
            &lt;b:if cond='data:showFreqNumbers'&gt;
              &lt;span dir='ltr'&gt;(&lt;data:label.count/&gt;)&lt;/span&gt;
            &lt;/b:if&gt;
          &lt;/li&gt;
        &lt;/b:loop&gt;
      &lt;/ul&gt;
    &lt;b:else/&gt;
      &lt;b:loop values='data:labels' var='label'&gt;
        &lt;span expr:class='&amp;quot;label-size label-size-&amp;quot; + data:label.cssSize'&gt;
          &lt;b:if cond='data:blog.url == data:label.url'&gt;
            &lt;span expr:dir='data:blog.languageDirection'&gt;&lt;data:label.name/&gt;&lt;/span&gt;
          &lt;b:else/&gt;
            &lt;a expr:dir='data:blog.languageDirection' expr:href='data:label.url'&gt;&lt;data:label.name/&gt;&lt;/a&gt;
          &lt;/b:if&gt;
          &lt;b:if cond='data:showFreqNumbers'&gt;
            &lt;span class='label-count' dir='ltr'&gt;(&lt;data:label.count/&gt;)&lt;/span&gt;
          &lt;/b:if&gt;
        &lt;/span&gt;
      &lt;/b:loop&gt;
    &lt;/b:if&gt;
    &lt;b:include name='quickedit'/&gt;
  &lt;/div&gt;
&lt;/b:includable&gt;
  &lt;/b:widget&gt;
  &lt;b:widget id='PopularPosts2' locked='false' title='Popular Posts' type='PopularPosts' visible='true'&gt;
    &lt;b:includable id='main'&gt;
  &lt;b:if cond='data:title != &amp;quot;&amp;quot;'&gt;&lt;h2&gt;&lt;data:title/&gt;&lt;/h2&gt;&lt;/b:if&gt;
  &lt;div class='widget-content popular-posts'&gt;
    &lt;ul&gt;
      &lt;b:loop values='data:posts' var='post'&gt;
      &lt;li&gt;
        &lt;b:if cond='!data:showThumbnails'&gt;
          &lt;b:if cond='!data:showSnippets'&gt;
            &lt;!-- (1) No snippet/thumbnail --&gt;
            &lt;a expr:href='data:post.href'&gt;&lt;data:post.title/&gt;&lt;/a&gt;
          &lt;b:else/&gt;
            &lt;!-- (2) Show only snippets --&gt;
            &lt;div class='item-title'&gt;&lt;a expr:href='data:post.href'&gt;&lt;data:post.title/&gt;&lt;/a&gt;&lt;/div&gt;
            &lt;div class='item-snippet'&gt;&lt;data:post.snippet/&gt;&lt;/div&gt;
          &lt;/b:if&gt;
        &lt;b:else/&gt;
          &lt;!-- (3) Show only thumbnails or (4) Snippets and thumbnails. --&gt;
          &lt;div expr:class='data:showSnippets ? &amp;quot;item-content&amp;quot; : &amp;quot;item-thumbnail-only&amp;quot;'&gt;
            &lt;b:if cond='data:post.featuredImage.isResizable or data:post.thumbnail'&gt;
              &lt;div class='item-thumbnail'&gt;
                &lt;a expr:href='data:post.href' target='_blank'&gt;
                  &lt;b:with value='data:post.featuredImage.isResizable                                  ? resizeImage(data:post.featuredImage, 72, &amp;quot;1:1&amp;quot;)                                  : data:post.thumbnail' var='image'&gt;
                    &lt;img alt='' border='0' expr:src='data:image'/&gt;
                  &lt;/b:with&gt;
                &lt;/a&gt;
              &lt;/div&gt;
            &lt;/b:if&gt;
            &lt;div class='item-title'&gt;&lt;a expr:href='data:post.href'&gt;&lt;data:post.title/&gt;&lt;/a&gt;&lt;/div&gt;
            &lt;b:if cond='data:showSnippets'&gt;
              &lt;div class='item-snippet'&gt;&lt;data:post.snippet/&gt;&lt;/div&gt;
            &lt;/b:if&gt;
          &lt;/div&gt;
          &lt;div style='clear: both;'/&gt;
        &lt;/b:if&gt;
      &lt;/li&gt;
      &lt;/b:loop&gt;
    &lt;/ul&gt;
    &lt;b:include name='quickedit'/&gt;
  &lt;/div&gt;
&lt;/b:includable&gt;
  &lt;/b:widget&gt;
  &lt;b:widget id='BlogArchive1' locked='false' title='Archive' type='BlogArchive' visible='true'&gt;
    &lt;b:includable id='main'&gt;
  &lt;b:if cond='data:title != &amp;quot;&amp;quot;'&gt;
    &lt;h2&gt;&lt;data:title/&gt;&lt;/h2&gt;
  &lt;/b:if&gt;
  &lt;div class='widget-content'&gt;
  &lt;div id='ArchiveList'&gt;
  &lt;div expr:id='data:widget.instanceId + &amp;quot;_ArchiveList&amp;quot;'&gt;
    &lt;b:include cond='data:style == &amp;quot;HIERARCHY&amp;quot;' data='data' name='interval'/&gt;
    &lt;b:include cond='data:style == &amp;quot;FLAT&amp;quot;' data='data' name='flat'/&gt;
    &lt;b:include cond='data:style == &amp;quot;MENU&amp;quot;' data='data' name='menu'/&gt;
  &lt;/div&gt;
  &lt;/div&gt;
  &lt;b:include name='quickedit'/&gt;
  &lt;/div&gt;
&lt;/b:includable&gt;
    &lt;b:includable id='flat' var='data'&gt;
  &lt;ul class='flat'&gt;
    &lt;b:loop values='data:data' var='i'&gt;
      &lt;li class='archivedate'&gt;
        &lt;a expr:href='data:i.url'&gt;&lt;data:i.name/&gt;&lt;/a&gt; (&lt;data:i.post-count/&gt;)
      &lt;/li&gt;
    &lt;/b:loop&gt;
  &lt;/ul&gt;
&lt;/b:includable&gt;
    &lt;b:includable id='interval' var='intervalData'&gt;
  &lt;b:loop values='data:intervalData' var='interval'&gt;
    &lt;ul class='hierarchy'&gt;
      &lt;li expr:class='&amp;quot;archivedate &amp;quot; + data:interval.expclass'&gt;
        &lt;b:include cond='data:interval.toggleId' data='interval' name='toggle'/&gt;
        &lt;a class='post-count-link' expr:href='data:interval.url'&gt;
          &lt;data:interval.name/&gt;
        &lt;/a&gt;
        &lt;span class='post-count' dir='ltr'&gt;(&lt;data:interval.post-count/&gt;)&lt;/span&gt;
        &lt;b:include cond='data:interval.data' data='interval.data' name='interval'/&gt;
        &lt;b:include cond='data:interval.posts' data='interval.posts' name='posts'/&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/b:loop&gt;
&lt;/b:includable&gt;
    &lt;b:includable id='menu' var='data'&gt;
  &lt;select expr:id='data:widget.instanceId + &amp;quot;_ArchiveMenu&amp;quot;'&gt;
    &lt;option value=''&gt;&lt;data:title/&gt;&lt;/option&gt;
    &lt;b:loop values='data:data' var='i'&gt;
      &lt;option expr:value='data:i.url'&gt;&lt;data:i.name/&gt; (&lt;data:i.post-count/&gt;)&lt;/option&gt;
    &lt;/b:loop&gt;
  &lt;/select&gt;
&lt;/b:includable&gt;
    &lt;b:includable id='posts' var='posts'&gt;
  &lt;ul class='posts'&gt;
    &lt;b:loop values='data:posts' var='post'&gt;
      &lt;li&gt;&lt;a expr:href='data:post.url'&gt;&lt;data:post.title/&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;/b:loop&gt;
  &lt;/ul&gt;
&lt;/b:includable&gt;
    &lt;b:includable id='toggle' var='interval'&gt;
  &lt;a class='toggle' href='javascript:void(0)'&gt;
    &lt;span expr:class='&amp;quot;zippy&amp;quot; + (data:interval.expclass == &amp;quot;expanded&amp;quot; ? &amp;quot; toggle-open&amp;quot; : &amp;quot;&amp;quot;)'&gt;
      &lt;b:if cond='data:interval.expclass == &amp;quot;expanded&amp;quot;'&gt;
        &amp;#9660;&amp;#160;
      &lt;b:elseif cond='data:blog.languageDirection == &amp;quot;rtl&amp;quot;'/&gt;
        &amp;#9668;&amp;#160;
      &lt;b:else/&gt;
        &amp;#9658;&amp;#160;
      &lt;/b:if&gt;
    &lt;/span&gt;
  &lt;/a&gt;
&lt;/b:includable&gt;
  &lt;/b:widget&gt;
&lt;/b:section-contents&gt;&lt;b:section-contents id='sidebar-right-2-1'/&gt;&lt;b:section-contents id='sidebar-right-2-2'/&gt;&lt;b:section-contents id='sidebar-right-3'&gt;
  &lt;b:widget id='FollowByEmail1' locked='false' title='Follow by Email' type='FollowByEmail' visible='true'&gt;
    &lt;b:includable id='main'&gt;
  &lt;b:if cond='data:title != &amp;quot;&amp;quot;'&gt;&lt;h2 class='title'&gt;&lt;data:title/&gt;&lt;/h2&gt;&lt;/b:if&gt;
  &lt;div class='widget-content'&gt;
    &lt;div class='follow-by-email-inner'&gt;
      &lt;form action='https://feedburner.google.com/fb/a/mailverify' expr:onsubmit='&amp;quot;window.open(\&amp;quot;https://feedburner.google.com/fb/a/mailverify?uri=&amp;quot; + data:feedPath + &amp;quot;\&amp;quot;, \&amp;quot;popupwindow\&amp;quot;, \&amp;quot;scrollbars=yes,width=550,height=520\&amp;quot;); return true&amp;quot;' method='post' target='popupwindow'&gt;
        &lt;table width='100%'&gt;
          &lt;tr&gt;
            &lt;td&gt;
              &lt;input class='follow-by-email-address' name='email' placeholder='Email address...' type='text'/&gt;
            &lt;/td&gt;
            &lt;td width='64px'&gt;
              &lt;input class='follow-by-email-submit' type='submit' value='Submit'/&gt;
            &lt;/td&gt;
          &lt;/tr&gt;
        &lt;/table&gt;
        &lt;input expr:value='data:feedPath' name='uri' type='hidden'/&gt;
        &lt;input name='loc' type='hidden' value='en_US'/&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;span class='item-control blog-admin'&gt;
    &lt;b:include name='quickedit'/&gt;
  &lt;/span&gt;
&lt;/b:includable&gt;
  &lt;/b:widget&gt;
&lt;/b:section-contents&gt;&lt;b:section-contents id='footer-1'/&gt;&lt;b:section-contents id='footer-2-1'/&gt;&lt;b:section-contents id='footer-2-2'/&gt;&lt;/html&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/template/default'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/template/default'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_PUBLISHING_MODE</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>The type of publishing done for this blog.</title><content type='text'>PUBLISH_MODE_BLOGSPOT</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_PUBLISHING_MODE'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_PUBLISHING_MODE'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_ADMIN_PERMISSION</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>The list of administrators' emails for the blog.</title><content type='text'>remzmike@gmail.com</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_ADMIN_PERMISSION'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_ADMIN_PERMISSION'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_ADULT_CONTENT</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Whether this blog contains adult content</title><content type='text'>false</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_ADULT_CONTENT'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_ADULT_CONTENT'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_ALTERNATE_JSRENDER_ALLOWED</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Whether alternate JS renderings are allowed</title><content type='text'>true</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_ALTERNATE_JSRENDER_ALLOWED'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_ALTERNATE_JSRENDER_ALLOWED'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_ANALYTICS_ACCOUNT_NUMBER</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Blog's Google Analytics account number</title><content type='text'></content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_ANALYTICS_ACCOUNT_NUMBER'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_ANALYTICS_ACCOUNT_NUMBER'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_ARCHIVE_DATE_FORMAT</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>The number of the archive index date format</title><content type='text'>9</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_ARCHIVE_DATE_FORMAT'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_ARCHIVE_DATE_FORMAT'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_ARCHIVE_FREQUENCY</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>How frequently this blog should be archived</title><content type='text'>MONTHLY</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_ARCHIVE_FREQUENCY'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_ARCHIVE_FREQUENCY'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_AUTHOR_PERMISSION</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>The list of authors' emails who have permission to publish.</title><content type='text'></content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_AUTHOR_PERMISSION'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_AUTHOR_PERMISSION'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_BACKLINKS_ALLOWED</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Whether to show comment backlinks on the blog</title><content type='text'>false</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_BACKLINKS_ALLOWED'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_BACKLINKS_ALLOWED'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_BY_POST_ARCHIVING</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Whether to provide an archive page for each post</title><content type='text'>true</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_BY_POST_ARCHIVING'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_BY_POST_ARCHIVING'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_COMMENT_ACCESS</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Who can comment</title><content type='text'>REGISTERED</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENT_ACCESS'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENT_ACCESS'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_COMMENT_CAPTCHA</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Whether to require commenters to complete a Captcha</title><content type='text'>true</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENT_CAPTCHA'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENT_CAPTCHA'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_COMMENT_EMAIL</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>List of e-mail addresses to send notifications of new comments to</title><content type='text'>remzmike@gmail.com</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENT_EMAIL'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENT_EMAIL'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_COMMENT_FEED</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>The type of feed to provide for blog comments</title><content type='text'>FULL</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENT_FEED'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENT_FEED'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_COMMENT_FORM_LOCATION</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Blog comment form location</title><content type='text'>EMBEDDED_IFRAME</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENT_FORM_LOCATION'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENT_FORM_LOCATION'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_COMMENT_MESSAGE</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Blog comment message</title><content type='text'></content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENT_MESSAGE'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENT_MESSAGE'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_COMMENT_MODERATION</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Whether to enable comment moderation</title><content type='text'>DISABLED</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENT_MODERATION'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENT_MODERATION'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_COMMENT_MODERATION_DELAY</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Number of days after which new comments are subject to moderation</title><content type='text'>14</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENT_MODERATION_DELAY'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENT_MODERATION_DELAY'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_COMMENT_MODERATION_EMAIL</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Email address to send notifications of new comments needing moderation to</title><content type='text'></content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENT_MODERATION_EMAIL'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENT_MODERATION_EMAIL'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_COMMENT_PROFILE_IMAGES</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Whether to show profile images in comments</title><content type='text'>true</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENT_PROFILE_IMAGES'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENT_PROFILE_IMAGES'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_COMMENTS_ALLOWED</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Whether to show comments</title><content type='text'>false</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENTS_ALLOWED'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENTS_ALLOWED'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_COMMENTS_TIME_STAMP_FORMAT</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Comment time stamp format number</title><content type='text'>29</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENTS_TIME_STAMP_FORMAT'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_COMMENTS_TIME_STAMP_FORMAT'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_CONVERT_LINE_BREAKS</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Whether to convert line breaks into &lt;br /&gt; tags in post editor</title><content type='text'>true</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_CONVERT_LINE_BREAKS'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_CONVERT_LINE_BREAKS'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_CUSTOM_PAGE_NOT_FOUND</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>The content served when the requested post or page is not found.</title><content type='text'></content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_CUSTOM_PAGE_NOT_FOUND'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_CUSTOM_PAGE_NOT_FOUND'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_CUSTOM_ROBOTS_TXT</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>The custom robots.txt content of the blog served to search engines.</title><content type='text'></content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_CUSTOM_ROBOTS_TXT'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_CUSTOM_ROBOTS_TXT'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_CUSTOM_ROBOTS_TXT_ENABLED</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Whether this blog serves custom robots.txt content to search engines.</title><content type='text'>false</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_CUSTOM_ROBOTS_TXT_ENABLED'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_CUSTOM_ROBOTS_TXT_ENABLED'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_DATE_FORMAT</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>The number of the date header format</title><content type='text'>26</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_DATE_FORMAT'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_DATE_FORMAT'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_DEFAULT_BACKLINKS_MODE</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Default backlinks mode for posts</title><content type='text'>DEFAULT_HAVE_BACKLINKS</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_DEFAULT_BACKLINKS_MODE'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_DEFAULT_BACKLINKS_MODE'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_DEFAULT_COMMENTS_MODE</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Default comment mode for posts</title><content type='text'>DEFAULT_HAVE_COMMENTS</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_DEFAULT_COMMENTS_MODE'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_DEFAULT_COMMENTS_MODE'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_DESCRIPTION</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>A description of the blog</title><content type='text'>♪ I write code for a living, but this is not that code. ♪</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_DESCRIPTION'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_DESCRIPTION'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_EMAIL_POST_LINKS</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Whether to show a link for users to e-mail posts</title><content type='text'>false</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_EMAIL_POST_LINKS'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_EMAIL_POST_LINKS'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_FEED_REDIRECT_URL</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>URL to redirect post feed requests to</title><content type='text'></content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_FEED_REDIRECT_URL'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_FEED_REDIRECT_URL'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_FLOAT_ALIGNMENT</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Whether float alignment is enabled for the blog</title><content type='text'>true</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_FLOAT_ALIGNMENT'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_FLOAT_ALIGNMENT'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_LOCALE</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Language for this blog</title><content type='text'>en</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_LOCALE'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_LOCALE'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_M2B_WHITELIST_EMAIL</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>List of email addresses that can post to the blog via email.</title><content type='text'></content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_M2B_WHITELIST_EMAIL'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_M2B_WHITELIST_EMAIL'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_MAX_NUM</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Maximum number of things to show on the main page"</title><content type='text'>7</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_MAX_NUM'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_MAX_NUM'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_MAX_UNIT</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Unit of things to show on the main page</title><content type='text'>POSTS</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_MAX_UNIT'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_MAX_UNIT'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_META_DESCRIPTION</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>The meta description of the blog served to search engines.</title><content type='text'></content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_META_DESCRIPTION'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_META_DESCRIPTION'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_META_DESCRIPTION_ENABLED</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Whether this blog is served with meta descriptions.</title><content type='text'>false</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_META_DESCRIPTION_ENABLED'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_META_DESCRIPTION_ENABLED'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_NAME</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>The name of the blog</title><content type='text'>experiments</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_NAME'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_NAME'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_PER_POST_FEED</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>The type of feed to provide for per-post comments</title><content type='text'>FULL</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_PER_POST_FEED'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_PER_POST_FEED'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_POST_FEED</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>The type of feed to provide for blog posts</title><content type='text'>FULL</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_POST_FEED'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_POST_FEED'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_POST_FEED_FOOTER</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Footer to append to the end of each entry in the post feed</title><content type='text'></content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_POST_FEED_FOOTER'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_POST_FEED_FOOTER'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_POST_TEMPLATE</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>The template for blog posts</title><content type='text'></content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_POST_TEMPLATE'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_POST_TEMPLATE'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_PROMOTED</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Whether this blog can be promoted on Blogger</title><content type='text'>true</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_PROMOTED'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_PROMOTED'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_QUICK_EDITING</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Whether Quick Editing is enabled</title><content type='text'>false</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_QUICK_EDITING'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_QUICK_EDITING'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_READ_ACCESS_MODE</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>The access type for the readers of the blog.</title><content type='text'>PUBLIC</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_READ_ACCESS_MODE'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_READ_ACCESS_MODE'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_READER_PERMISSION</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>The list of emails for users who have permission to read the blog.</title><content type='text'></content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_READER_PERMISSION'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_READER_PERMISSION'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_SEARCHABLE</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Whether this blog should be indexed by search engines</title><content type='text'>true</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_SEARCHABLE'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_SEARCHABLE'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_SEND_EMAIL</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Comma separated list of emails to send new blog posts to</title><content type='text'></content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_SEND_EMAIL'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_SEND_EMAIL'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_SHOW_TITLE</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Whether to show the title field</title><content type='text'>true</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_SHOW_TITLE'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_SHOW_TITLE'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_SHOW_URL</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Whether to show a related link box in the post composer</title><content type='text'>false</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_SHOW_URL'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_SHOW_URL'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_SUBDOMAIN</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>The BlogSpot subdomain under which to publish your blog</title><content type='text'>remzmike</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_SUBDOMAIN'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_SUBDOMAIN'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_TIME_STAMP_FORMAT</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>The number of the time stamp format</title><content type='text'>26</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_TIME_STAMP_FORMAT'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_TIME_STAMP_FORMAT'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_TIME_ZONE</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>The time zone for this blog</title><content type='text'>America/New_York</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_TIME_ZONE'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_TIME_ZONE'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.settings.BLOG_USE_LIGHTBOX</id><published>2016-01-13T10:52:57.130-05:00</published><updated>2016-11-10T12:15:00.951-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#settings'/><title type='text'>Whether to show images in the Lightbox when clicked</title><content type='text'>true</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_USE_LIGHTBOX'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/settings/BLOG_USE_LIGHTBOX'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-5469015150672540886</id><published>2016-10-08T11:45:00.002-04:00</published><updated>2016-11-02T14:10:11.222-04:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='javascript'/><category scheme='http://www.blogger.com/atom/ns#' term='ui'/><title type='text'>simpleui.js</title><content type='html'>&lt;p&gt;By day: Convince people I can iterate an array.&lt;/p&gt; &lt;p&gt;By night: Write an html5 canvas ui toolkit in plain javascript, ecma 3, no libraries.&lt;/p&gt; &lt;div style="width:100%; overflow:hidden; height:400px;"&gt; &lt;a href="https://4.bp.blogspot.com/-xPwlKxkwgFw/WAAdG1OQKKI/AAAAAAAABgA/Y1jj7KT86sUkcgnDepLW6442ilyeaeX3QCLcB/s1600/simpleui-js-alpha-20161013b-crop.png" imageanchor="1" &gt;&lt;img border="0" src="https://4.bp.blogspot.com/-xPwlKxkwgFw/WAAdG1OQKKI/AAAAAAAABgA/Y1jj7KT86sUkcgnDepLW6442ilyeaeX3QCLcB/s1600/simpleui-js-alpha-20161013b-crop.png" /&gt;&lt;/a&gt; &lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/5469015150672540886'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/5469015150672540886'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2016/10/simpleuijs-alpha-2.html' title='simpleui.js'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><media:thumbnail xmlns:media='http://search.yahoo.com/mrss/' url='https://4.bp.blogspot.com/-xPwlKxkwgFw/WAAdG1OQKKI/AAAAAAAABgA/Y1jj7KT86sUkcgnDepLW6442ilyeaeX3QCLcB/s72-c/simpleui-js-alpha-20161013b-crop.png' height='72' width='72'/><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-7536605669439246809</id><published>2016-03-23T13:59:00.000-04:00</published><updated>2016-10-16T21:24:15.267-04:00</updated><category scheme='http://www.blogger.com/atom/ns#' term='security'/><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='python'/><title type='text'>kports</title><content type='html'>&lt;p&gt;My tcp and udp port scanner, using non-blocking sockets. &lt;/p&gt; &lt;a href="https://github.com/remzmike/python-kports-portscanner/blob/master/kports.py"&gt;https://github.com/remzmike &amp;gt; kports.py&lt;/a&gt; &lt;p&gt;The tcp scan is a simple connect scan using epoll. &lt;/p&gt; &lt;p&gt;The udp scan is more complicated. A closed port is one where subsequent sends throw an ECONNREFUSED errno. This is effectively detecting ICMP "Destination Unreachable" type 3 code 3 errors. An open port is one where a udp response is received. A port may also be "possibly open" due to the lack of a response or error from the target. These are returned as a separate list by udp_scan_ex. &lt;/p&gt; &lt;p&gt;The advanced udp scan also accounts for rate-limiting of ICMP port unreachable errors at the target. Because of this, advanced scanning of 1024 udp ports can take around 20 minutes using udp_scan_ex with the default arguments. &lt;/p&gt; &lt;p&gt;HOWEVER, this script will do a faster udp scan by default, checking for responsive, obviously open ports. The udp_scan function makes a special call to udp_scan_ex effectively disabling the advanced scanning features. &lt;/p&gt; &lt;p&gt;This udp scanning technique is called the "lame" udp scan by nmap. &lt;/p&gt; &lt;p&gt;You can modify some of this behavior using the global constants. &lt;/p&gt; &lt;pre&gt;&lt;br /&gt;Examples:&lt;br /&gt;1) python kports.py 1.2.3.4&lt;br /&gt;{&lt;br /&gt;                'target': '64.157.211.4',&lt;br /&gt;                'status': 'valid ip',&lt;br /&gt;                'tcp': [22,23,80,443],&lt;br /&gt;                'udp': [ ]&lt;br /&gt;}&lt;br /&gt;&lt;br /&gt;2) python kports.py www.ibm.com&lt;br /&gt;{&lt;br /&gt;                'target': 'www.ibm.com',&lt;br /&gt;                'status': 'fqdn resolves',&lt;br /&gt;                'tcp': [22,23,80,443],&lt;br /&gt;                'udp': [53]&lt;br /&gt;}&lt;br /&gt;&lt;br /&gt;3) python kports.py www.sdsds.xxz&lt;br /&gt;{&lt;br /&gt;                'target': 'www.sdsds.xxz',&lt;br /&gt;                'status': 'fqdn does not resolve'&lt;br /&gt;}&lt;br /&gt;&lt;/pre&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/7536605669439246809'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/7536605669439246809'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2016/03/kports.html' title='kports'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-7922142652097871997</id><published>2016-03-14T15:22:00.000-04:00</published><updated>2016-10-16T21:24:20.486-04:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='lua'/><category scheme='http://www.blogger.com/atom/ns#' term='win32'/><title type='text'>sendinput</title><content type='html'>&lt;p&gt;Released SendInput lua libraries.&lt;/p&gt; &lt;p&gt;SendInput - send mouse and keyboard events to windows processes&lt;/p&gt;&lt;p&gt;SendInputScheduled - sleep-free mouse/keyboard scheduling&lt;/p&gt;&lt;ul&gt;&lt;li&gt;Mirrors and wraps my SendInput.lua api.&lt;/li&gt;&lt;li&gt;Adds one function, wait(ms), which delays all subsequently scheduled events.&lt;/li&gt;&lt;/ul&gt; &lt;p&gt;&lt;a href="https://github.com/remzmike/lua-sendinput"&gt;https://github.com/remzmike/lua-sendinput&lt;/a&gt;&lt;/p&gt; &lt;p&gt;Example, opens notepad and sends test events:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;span class="nx"&gt;require&lt;/span&gt; &lt;span class="s1"&gt;&amp;#39;SKeys&amp;#39;&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;print&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;testing...&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;local&lt;/span&gt; &lt;span class="nx"&gt;p&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nx"&gt;winapi&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;spawn_process&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;notepad&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;p&lt;/span&gt;&lt;span class="o"&gt;:&lt;/span&gt;&lt;span class="nx"&gt;wait_for_input_idle&lt;/span&gt;&lt;span class="p"&gt;()&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;local&lt;/span&gt; &lt;span class="nx"&gt;w&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nx"&gt;winapi&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;find_window_match&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;Untitled&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;w&lt;/span&gt;&lt;span class="o"&gt;:&lt;/span&gt;&lt;span class="nx"&gt;show&lt;/span&gt;&lt;span class="p"&gt;()&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;w&lt;/span&gt;&lt;span class="o"&gt;:&lt;/span&gt;&lt;span class="nx"&gt;set_foreground&lt;/span&gt;&lt;span class="p"&gt;()&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;winapi&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;send_to_window&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;testing...&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;M&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;key_press&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;SKeys&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;Return&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;M&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;key_down&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;SKeys&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;LShift&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;M&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;key_press&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;SKeys&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;H&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;M&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;key_up&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;SKeys&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;LShift&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;M&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;key_press&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;SKeys&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;E&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="mi"&gt;200&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;M&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;key_press&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;SKeys&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;L&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="mi"&gt;200&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;M&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;key_press&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;SKeys&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;L&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="mi"&gt;200&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;winapi&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;send_to_window&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;o&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;M&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;key_press&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;SKeys&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;Return&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;M&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;mouse_move&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="nx"&gt;i&lt;/span&gt;&lt;span class="o"&gt;=&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;10&lt;/span&gt; &lt;span class="k"&gt;do&lt;/span&gt;&lt;br /&gt;    &lt;span class="nx"&gt;winapi&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;sleep&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;10&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;        &lt;br /&gt;    &lt;span class="nx"&gt;M&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;mouse_move_relative&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;10&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;10&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="nx"&gt;M&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;mouse_press&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;right&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="mi"&gt;200&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;end&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;winapi&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;sleep&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;200&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;M&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;mouse_move&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;winapi&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;sleep&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;200&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;M&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;mouse_move&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;100&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="mi"&gt;100&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;M&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;mouse_press&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;right&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="mi"&gt;600&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;/pre&gt;&lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/7922142652097871997'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/7922142652097871997'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2016/03/sendinput.html' title='sendinput'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-650799544780995895</id><published>2012-12-01T12:31:00.000-05:00</published><updated>2016-10-20T14:31:03.010-04:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='numbers'/><category scheme='http://www.blogger.com/atom/ns#' term='graphics'/><category scheme='http://www.blogger.com/atom/ns#' term='python'/><title type='text'>unique user glyphs</title><content type='html'>&lt;img border="0" src="https://3.bp.blogspot.com/-kG_ydDqPfjM/VpfX2APlN5I/AAAAAAAAA8A/Y2ij7gwA_yEaQfSLkvLxDwiQEt6iJ5cwgCPcB/s1600/_postthumb_unique-user-glyphs.png" style="display:none;" /&gt; &lt;div id="content"&gt;         &lt;br /&gt;Wrote code to make unique user glyphs, after staring at gravatar identicons.&lt;br /&gt;&lt;img height="16" src="https://sites.google.com/site/remzmike/source.png?attredirects=0" width="16" /&gt; &lt;a href="https://bitbucket.org/remzmike/misc/src/10378889a6560b47318c9d976b423237d3e23f75/weblog2012/userglyph.py?at=default"&gt;userglyph.py&lt;/a&gt;&lt;br /&gt;My current glyphset yields 4,373,111,808 unique images.&lt;br /&gt;&lt;img height="16" src="https://sites.google.com/site/remzmike/image.png?attredirects=0" width="16" /&gt; &lt;a href="https://sites.google.com/site/remzmike/userglyph_glyphset.png?attredirects=0"&gt;my glyphset&lt;/a&gt;&lt;br /&gt;Example outputs:&lt;br /&gt;&lt;!--img('userglyph-307_281_383_011.png)--&gt; &lt;br /&gt;&lt;!--img('userglyph-024_164_003_000.png)--&gt; &lt;!--img('userglyph-250_311_169_008.png)--&gt; &lt;br /&gt;&lt;img height="64" src="https://sites.google.com/site/remzmike/userglyph-0_23_20_1.png?attredirects=0" width="64" /&gt; &lt;img height="64" src="https://sites.google.com/site/remzmike/userglyph-107_28_132_3.png?attredirects=0" width="64" /&gt; &lt;img height="64" src="https://sites.google.com/site/remzmike/userglyph-21_29_87_1a.png?attredirects=0" width="64" /&gt; &lt;img height="64" src="https://sites.google.com/site/remzmike/userglyph-23_11_41_1.png?attredirects=0" width="64" /&gt; &lt;img height="64" src="https://sites.google.com/site/remzmike/userglyph-26_29_45_2.png?attredirects=0" width="64" /&gt; &lt;br /&gt;&lt;img height="64" src="https://sites.google.com/site/remzmike/userglyph-28_52_70_1.png?attredirects=0" width="64" /&gt; &lt;img height="64" src="https://sites.google.com/site/remzmike/userglyph-47_24_110_3.z.png?attredirects=0" width="64" /&gt; &lt;img height="64" src="https://sites.google.com/site/remzmike/userglyph-82_63_85_2.png?attredirects=0" width="64" /&gt; &lt;img height="64" src="https://sites.google.com/site/remzmike/userglyph-83_30_94_2.png?attredirects=0" width="64" /&gt; &lt;img height="64" src="https://sites.google.com/site/remzmike/userglyph-99_16_2_3.png?attredirects=0" width="64" /&gt; &lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/650799544780995895'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/650799544780995895'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2012/12/unique-user-glyphs.html' title='unique user glyphs'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><media:thumbnail xmlns:media='http://search.yahoo.com/mrss/' url='https://3.bp.blogspot.com/-kG_ydDqPfjM/VpfX2APlN5I/AAAAAAAAA8A/Y2ij7gwA_yEaQfSLkvLxDwiQEt6iJ5cwgCPcB/s72-c/_postthumb_unique-user-glyphs.png' height='72' width='72'/><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-8844459023545640127</id><published>2012-11-15T12:31:00.000-05:00</published><updated>2016-10-20T14:28:13.896-04:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='python'/><title type='text'>parse more sansa ratings</title><content type='html'>&lt;div id="content"&gt;                          &lt;p&gt;Modified &lt;a href="http://remzmike.blogspot.com/2012/07/parse-sansa-clip-ratings.html"&gt;my sansa parser&lt;/a&gt; and &lt;a href="http://remzmike.blogspot.com/2012/08/msansa.html"&gt;msansa&lt;/a&gt; to support Clip+ and Clip Zip.&lt;/p&gt;&lt;img src="https://sites.google.com/site/remzmike/source.png?attredirects=0" width="16" height="16"&gt; &lt;a href="https://bitbucket.org/remzmike/misc/src/10378889a6560b47318c9d976b423237d3e23f75/weblog2012/sansa_triple.py?at=default&amp;fileviewer=file-view-default"&gt;sansa_triple.py&lt;/a&gt;&lt;br&gt;&lt;p&gt;Both unicode and ascii strings are written in character pairs and double null terminated.&lt;br /&gt;The last character in ascii strings of uneven length is paired with a null byte.&lt;br /&gt;So, ascii strings of uneven length will have three nulls after their last character.&lt;/p&gt;&lt;p&gt;Item index begins at:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;clip: 0x27&lt;/li&gt;&lt;li&gt;clip+: 0x23&lt;/li&gt;&lt;li&gt;clip zip: 0x2f&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Stop reading items when starting bytes are 0x0000.&lt;/p&gt;&lt;p&gt;An item:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;1 byte   : a&lt;br /&gt;1 byte   : b&lt;br /&gt;15 bytes (7 bytes on clip zip)&lt;br /&gt;string   : pathname&lt;br /&gt;string   : filename&lt;br /&gt;string   : title&lt;br /&gt;string   : artist&lt;br /&gt;string   : album&lt;br /&gt;2 bytes  : 0xffff -or- extra string (if first bytes are not 0xffff)&lt;br /&gt;string   : genre&lt;br /&gt;13 bytes -or- 7 bytes (if first byte is 0x00)&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;  &lt;p&gt;Meta index is at:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;clip: 0x148238 in MTABLE.SYS&lt;/li&gt;&lt;li&gt;clip+: 0x77d in RES_INFO.SYS&lt;/li&gt;&lt;li&gt;clip zip: 0x77d in RES_INFO.SYS&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Stop reading metas when starting byte is not 0x80.&lt;/p&gt;&lt;p&gt;A meta record:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;1 byte : 0x80&lt;br /&gt;1 byte : rating&lt;br /&gt;1 byte : meta b&lt;br /&gt;1 byte : meta c&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;         &lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/8844459023545640127'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/8844459023545640127'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2012/11/parse-more-sansa-ratings.html' title='parse more sansa ratings'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-3922580033483919719</id><published>2012-11-14T12:30:00.000-05:00</published><updated>2016-11-02T14:15:13.756-04:00</updated><category scheme='http://www.blogger.com/atom/ns#' term='fsm'/><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='python'/><title type='text'>irc client one</title><content type='html'>&lt;div id="content"&gt;                          &lt;p&gt;Wrote an irc client from scratch in standard python. Single thread. Synchronous IO. ~400 lines.&lt;/p&gt;&lt;div style="width:100%;overflow:auto;"&gt;&lt;img src="https://sites.google.com/site/remzmike/irc.png?attredirects=0" width="987" height="487"&gt;&lt;/div&gt;&lt;p&gt;Snippet:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="k"&gt;def&lt;/span&gt; &lt;span class="nf"&gt;recv&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;cx&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;size&lt;/span&gt;&lt;span class="o"&gt;=&lt;/span&gt;&lt;span class="mi"&gt;1024&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;try&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;data&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;cx&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;recv&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;size&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;except&lt;/span&gt; &lt;span class="n"&gt;socket&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;error&lt;/span&gt; &lt;span class="k"&gt;as&lt;/span&gt; &lt;span class="n"&gt;ex&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;data&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="bp"&gt;None&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="n"&gt;ex&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;errno&lt;/span&gt; &lt;span class="o"&gt;==&lt;/span&gt; &lt;span class="mi"&gt;10035&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;pass&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;else&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;raise&lt;/span&gt; &lt;span class="n"&gt;ex&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="n"&gt;data&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="o"&gt;...&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="k"&gt;while&lt;/span&gt; &lt;span class="ow"&gt;not&lt;/span&gt; &lt;span class="n"&gt;_exiting&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="n"&gt;data_recv&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;recv&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;cx&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="n"&gt;data_recv&lt;/span&gt; &lt;span class="o"&gt;!=&lt;/span&gt; &lt;span class="bp"&gt;None&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;        &lt;span class="o"&gt;...&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="k"&gt;while&lt;/span&gt; &lt;span class="n"&gt;kbhit&lt;/span&gt;&lt;span class="p"&gt;():&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;        &lt;span class="o"&gt;...&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="n"&gt;sleep&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mf"&gt;0.1&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="n"&gt;cx&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;close&lt;/span&gt;&lt;span class="p"&gt;()&lt;/span&gt;   &lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;         &lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/3922580033483919719'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/3922580033483919719'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2012/11/irc-client-one.html' title='irc client one'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-6609525446196490737</id><published>2012-10-29T12:29:00.000-04:00</published><updated>2016-10-20T14:28:31.043-04:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='python'/><category scheme='http://www.blogger.com/atom/ns#' term='processing'/><title type='text'>imgencode</title><content type='html'> &lt;div id="content"&gt;                         &lt;p&gt;Wrote code to encode data in images. No obvious visual difference. No research.&lt;/p&gt;&lt;p&gt;First technique: Encode data as the difference between two images. &lt;/p&gt;&lt;img src="https://sites.google.com/site/remzmike/source.png?attredirects=0" width="16" height="16"&gt; &lt;a href="https://bitbucket.org/remzmike/misc/src/10378889a6560b47318c9d976b423237d3e23f75/weblog2012/imgencode.py?at=default&amp;fileviewer=file-view-default"&gt;imgencode.py&lt;/a&gt;&lt;br&gt;&lt;img src="https://sites.google.com/site/remzmike/image.png?attredirects=0" width="16" height="16"&gt; &lt;a href="https://sites.google.com/site/remzmike/imgencode-input.png?attredirects=0"&gt;imgencode-input.png&lt;/a&gt;&lt;br&gt;&lt;img src="https://sites.google.com/site/remzmike/image.png?attredirects=0" width="16" height="16"&gt; &lt;a href="https://sites.google.com/site/remzmike/imgencode-output.png?attredirects=0"&gt;imgencode-output.png&lt;/a&gt;&lt;br&gt;&lt;p&gt;Side by side:&lt;/p&gt;&lt;img src="https://sites.google.com/site/remzmike/imgencode-input.png?attredirects=0" width="275" height="297"&gt; &lt;img src="https://sites.google.com/site/remzmike/imgencode-output.png?attredirects=0" width="275" height="297"&gt; &lt;p&gt;Second technique: Store the same data as byte parity in a single image.&lt;/p&gt;&lt;img src="https://sites.google.com/site/remzmike/source.png?attredirects=0" width="16" height="16"&gt; &lt;a href="https://bitbucket.org/remzmike/misc/src/10378889a6560b47318c9d976b423237d3e23f75/weblog2012/imgencode2.py?at=default&amp;fileviewer=file-view-default"&gt;imgencode2.py&lt;/a&gt;&lt;br&gt;&lt;img src="https://sites.google.com/site/remzmike/image.png?attredirects=0" width="16" height="16"&gt; &lt;a href="https://sites.google.com/site/remzmike/imgencode-output2.png?attredirects=0"&gt;imgencode-output2.png&lt;/a&gt;&lt;br&gt;&lt;p&gt;These images are "full" of encoded data, 6125 instances of the string "hello".&lt;/p&gt;&lt;p&gt;Snippet:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="k"&gt;def&lt;/span&gt; &lt;span class="nf"&gt;encode_into_image&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;img&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;msg&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="n"&gt;img&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;img&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;convert&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;quot;RGBA&amp;quot;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="ow"&gt;not&lt;/span&gt; &lt;span class="n"&gt;can_fit_message&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;img&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;msg&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;raise&lt;/span&gt; &lt;span class="ne"&gt;Exception&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;quot;message too large to be encoded in this image&amp;quot;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="n"&gt;data&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;img&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;getdata&lt;/span&gt;&lt;span class="p"&gt;()&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="n"&gt;newdata&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;list&lt;/span&gt;&lt;span class="p"&gt;()&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;bits&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;get_bits&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;msg&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;    &lt;br /&gt;    &lt;span class="n"&gt;bits&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;extend&lt;/span&gt;&lt;span class="p"&gt;([&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;span class="o"&gt;*&lt;/span&gt;&lt;span class="mi"&gt;8&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="c"&gt;# delimit with null byte&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;bitcount&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="mi"&gt;0&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;px&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="n"&gt;data&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;idx&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;val&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="nb"&gt;enumerate&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;px&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="n"&gt;idx&lt;/span&gt; &lt;span class="o"&gt;==&lt;/span&gt; &lt;span class="mi"&gt;3&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt; &lt;span class="k"&gt;continue&lt;/span&gt; &lt;span class="c"&gt;# skip alpha&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="n"&gt;bitcount&lt;/span&gt; &lt;span class="o"&gt;&amp;lt;&lt;/span&gt; &lt;span class="nb"&gt;len&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;bits&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;                &lt;span class="n"&gt;bit&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;bits&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="n"&gt;bitcount&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;br /&gt;                &lt;span class="n"&gt;bitcount&lt;/span&gt; &lt;span class="o"&gt;+=&lt;/span&gt; &lt;span class="mi"&gt;1&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;else&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;                &lt;span class="n"&gt;bit&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="bp"&gt;None&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;            &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="n"&gt;bit&lt;/span&gt; &lt;span class="o"&gt;!=&lt;/span&gt; &lt;span class="bp"&gt;None&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;                &lt;span class="n"&gt;rand&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;random&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;choice&lt;/span&gt;&lt;span class="p"&gt;([&lt;/span&gt;&lt;span class="o"&gt;-&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;])&lt;/span&gt;&lt;br /&gt;                &lt;span class="n"&gt;newval&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;val&lt;/span&gt;&lt;br /&gt;                &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="n"&gt;bit&lt;/span&gt; &lt;span class="o"&gt;==&lt;/span&gt; &lt;span class="mi"&gt;1&lt;/span&gt; &lt;span class="ow"&gt;and&lt;/span&gt; &lt;span class="n"&gt;val&lt;/span&gt; &lt;span class="o"&gt;%&lt;/span&gt; &lt;span class="mi"&gt;2&lt;/span&gt; &lt;span class="o"&gt;==&lt;/span&gt; &lt;span class="mi"&gt;0&lt;/span&gt; \&lt;br /&gt;                &lt;span class="ow"&gt;or&lt;/span&gt; &lt;span class="n"&gt;bit&lt;/span&gt; &lt;span class="o"&gt;==&lt;/span&gt; &lt;span class="mi"&gt;0&lt;/span&gt; &lt;span class="ow"&gt;and&lt;/span&gt; &lt;span class="n"&gt;val&lt;/span&gt; &lt;span class="o"&gt;%&lt;/span&gt; &lt;span class="mi"&gt;2&lt;/span&gt; &lt;span class="o"&gt;==&lt;/span&gt; &lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;                    &lt;span class="n"&gt;newval&lt;/span&gt; &lt;span class="o"&gt;+=&lt;/span&gt; &lt;span class="n"&gt;rand&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;                &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="n"&gt;newval&lt;/span&gt; &lt;span class="o"&gt;&amp;gt;&lt;/span&gt; &lt;span class="mi"&gt;255&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;                    &lt;span class="n"&gt;newval&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="mi"&gt;254&lt;/span&gt;&lt;br /&gt;                &lt;span class="k"&gt;elif&lt;/span&gt; &lt;span class="n"&gt;newval&lt;/span&gt; &lt;span class="o"&gt;&amp;lt;&lt;/span&gt; &lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;                    &lt;span class="n"&gt;newval&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="mi"&gt;1&lt;/span&gt;&lt;br /&gt;                &lt;span class="n"&gt;px&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;list&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;px&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;                &lt;span class="n"&gt;px&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="n"&gt;idx&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;newval&lt;/span&gt;&lt;br /&gt;                &lt;span class="n"&gt;px&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;tuple&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;px&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;        &lt;span class="n"&gt;newdata&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;append&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;px&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="n"&gt;img&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;putdata&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;newdata&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="n"&gt;img&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;         &lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/6609525446196490737'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/6609525446196490737'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2012/10/imgencode.html' title='imgencode'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-2528686884254796125</id><published>2012-10-25T12:28:00.000-04:00</published><updated>2016-10-20T14:28:39.294-04:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='javascript'/><category scheme='http://www.blogger.com/atom/ns#' term='c#'/><category scheme='http://www.blogger.com/atom/ns#' term='php'/><title type='text'>message relay</title><content type='html'> &lt;div id="content"&gt;Wrote code to relay messages received on a remote instant messenger.&lt;br /&gt;1) javascript plugin on remote messenger submits messages to a url&lt;br /&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="kd"&gt;function&lt;/span&gt; &lt;span class="nx"&gt;OnEvent_ChatWndReceiveMessage&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;pChatWnd&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="nx"&gt;sOrigin&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="nx"&gt;sMessage&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="nx"&gt;nKind&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;...&lt;/span&gt;&lt;br /&gt;    &lt;span class="nx"&gt;SubmitMessage&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;sOrigin&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="nx"&gt;sMessage&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;...&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="kd"&gt;function&lt;/span&gt; &lt;span class="nx"&gt;SubmitMessage&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;origin&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="nx"&gt;message&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;...&lt;/span&gt;&lt;br /&gt;    &lt;span class="nx"&gt;DownloadFile&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;url&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="kd"&gt;function&lt;/span&gt; &lt;span class="nx"&gt;OnEvent_DownloadFileComplete&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;Url&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="nx"&gt;OutFile&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="nx"&gt;Success&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;if&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;Success&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;        &lt;span class="c1"&gt;//Delete the temporary file&lt;/span&gt;&lt;br /&gt;        &lt;span class="kd"&gt;var&lt;/span&gt; &lt;span class="nx"&gt;File&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="k"&gt;new&lt;/span&gt; &lt;span class="nx"&gt;ActiveXObject&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s2"&gt;"Scripting.FileSystemObject"&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;        &lt;span class="nx"&gt;File&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;DeleteFile&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;OutFile&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;2) php script accepts input, provides output, via http&lt;br /&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="cp"&gt;&amp;lt;?&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$action&lt;/span&gt;&lt;span class="o"&gt;==&lt;/span&gt;&lt;span class="k"&gt;null&lt;/span&gt; &lt;span class="o"&gt;||&lt;/span&gt; &lt;span class="nv"&gt;$action&lt;/span&gt;&lt;span class="o"&gt;==&lt;/span&gt;&lt;span class="s1"&gt;'view'&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;  &lt;span class="nv"&gt;$data&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nx"&gt;readfromfile&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$logpath&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;  &lt;span class="k"&gt;echo&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s1"&gt;'&amp;lt;pre&amp;gt;'&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="nv"&gt;$data&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="s1"&gt;'&amp;lt;/pre&amp;gt;'&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;else&lt;/span&gt; &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$action&lt;/span&gt;&lt;span class="o"&gt;==&lt;/span&gt;&lt;span class="s1"&gt;'submit'&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;  &lt;span class="nv"&gt;$timestamp&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;date&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s1"&gt;'l, F j, Y @ h:i:s A'&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;  &lt;span class="nv"&gt;$logline&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nv"&gt;$timestamp&lt;/span&gt; &lt;span class="o"&gt;.&lt;/span&gt; &lt;span class="s1"&gt;' - '&lt;/span&gt; &lt;span class="o"&gt;.&lt;/span&gt; &lt;span class="nv"&gt;$origin&lt;/span&gt; &lt;span class="o"&gt;.&lt;/span&gt; &lt;span class="s1"&gt;' - '&lt;/span&gt; &lt;span class="o"&gt;.&lt;/span&gt; &lt;span class="nv"&gt;$message&lt;/span&gt; &lt;span class="o"&gt;.&lt;/span&gt; &lt;span class="s2"&gt;"&lt;/span&gt;&lt;span class="se"&gt;\n&lt;/span&gt;&lt;span class="s2"&gt;"&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;  &lt;span class="nx"&gt;writetofile&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s1"&gt;'ab'&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="nv"&gt;$logpath&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="nv"&gt;$logline&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;else&lt;/span&gt; &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$action&lt;/span&gt;&lt;span class="o"&gt;==&lt;/span&gt;&lt;span class="s1"&gt;'pop'&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;  &lt;span class="nv"&gt;$fp&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;fopen&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$logpath&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="s1"&gt;'r+b'&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;  &lt;span class="nb"&gt;flock&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$fp&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="nx"&gt;LOCK_EX&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;  &lt;span class="nv"&gt;$logsize&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;filesize&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$logpath&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;  &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$logsize&lt;/span&gt; &lt;span class="o"&gt;&amp;gt;&lt;/span&gt; &lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;  &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;    &lt;span class="nv"&gt;$data&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;fread&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$fp&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="nv"&gt;$logsize&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;echo&lt;/span&gt; &lt;span class="nv"&gt;$data&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;    &lt;span class="nv"&gt;$keep&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nx"&gt;url_get_param&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s1"&gt;'keep'&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$keep&lt;/span&gt;&lt;span class="o"&gt;!=&lt;/span&gt;&lt;span class="s1"&gt;'1'&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;      &lt;span class="nb"&gt;ftruncate&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$fp&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;  &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;  &lt;span class="nb"&gt;flock&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$fp&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="nx"&gt;LOCK_UN&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;  &lt;span class="nb"&gt;fclose&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$fp&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;span class="cp"&gt;?&amp;gt;&lt;/span&gt;&lt;span class="x"&gt;&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;3) c# tasktray app notifies of new messages&lt;br /&gt;&lt;img height="181" src="https://sites.google.com/site/remzmike/messages.png?attredirects=0" width="446" /&gt;         &lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/2528686884254796125'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/2528686884254796125'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2012/10/message-relay.html' title='message relay'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-2934284209019936999</id><published>2012-08-01T12:25:00.000-04:00</published><updated>2016-01-13T15:40:46.534-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='c#'/><title type='text'>msansa</title><content type='html'>&lt;div id="content"&gt;                          &lt;p&gt;Automatically copy appropriate data files from Sansa Clip, Clip+ and Clip Zip when inserted. Tasktray.&lt;/p&gt;&lt;img src="https://sites.google.com/site/remzmike/msansa.png?attredirects=0" width="526" height="476"&gt;&lt;p&gt;Using Win32 message WM_DEVICECHANGE.&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;m&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="n"&gt;Msg&lt;/span&gt; &lt;span class="p"&gt;==&lt;/span&gt; &lt;span class="n"&gt;WM_DEVICECHANGE&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;m&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="n"&gt;WParam&lt;/span&gt; &lt;span class="p"&gt;==&lt;/span&gt; &lt;span class="n"&gt;P_DBT_DEVICEARRIVAL&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;DEV_BROADCAST_HDR&lt;/span&gt; &lt;span class="n"&gt;hdr&lt;/span&gt; &lt;span class="p"&gt;=&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;DEV_BROADCAST_HDR&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;span class="n"&gt;m&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="n"&gt;GetLParam&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="k"&gt;typeof&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;DEV_BROADCAST_HDR&lt;/span&gt;&lt;span class="p"&gt;));&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;hdr&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="n"&gt;dbch_DeviceType&lt;/span&gt; &lt;span class="p"&gt;==&lt;/span&gt; &lt;span class="n"&gt;DBT_DEVTYP_VOLUME&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;        &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;            &lt;span class="n"&gt;DEV_BROADCAST_VOLUME&lt;/span&gt; &lt;span class="n"&gt;vol&lt;/span&gt; &lt;span class="p"&gt;=&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;DEV_BROADCAST_VOLUME&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;span class="n"&gt;m&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="n"&gt;GetLParam&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="k"&gt;typeof&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;DEV_BROADCAST_VOLUME&lt;/span&gt;&lt;span class="p"&gt;));&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;((&lt;/span&gt;&lt;span class="n"&gt;vol&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="n"&gt;dbcv_flags&lt;/span&gt; &lt;span class="p"&gt;&amp;amp;&lt;/span&gt; &lt;span class="n"&gt;DBTF_MEDIA&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="p"&gt;==&lt;/span&gt; &lt;span class="m"&gt;0&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;            &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;                &lt;span class="kt"&gt;var&lt;/span&gt; &lt;span class="n"&gt;unitmask&lt;/span&gt; &lt;span class="p"&gt;=&lt;/span&gt; &lt;span class="n"&gt;vol&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="n"&gt;dbcv_unitmask&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;                &lt;span class="kt"&gt;var&lt;/span&gt; &lt;span class="n"&gt;letters&lt;/span&gt; &lt;span class="p"&gt;=&lt;/span&gt; &lt;span class="n"&gt;GetDriveLettersFromMask&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;unitmask&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;                &lt;span class="n"&gt;CheckDriveLetters&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;letters&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;            &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;        &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;  &lt;p&gt;And some interesting bitmasking to get drive letters.&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="k"&gt;public&lt;/span&gt; &lt;span class="n"&gt;List&lt;/span&gt;&lt;span class="p"&gt;&amp;lt;&lt;/span&gt;&lt;span class="kt"&gt;char&lt;/span&gt;&lt;span class="p"&gt;&amp;gt;&lt;/span&gt; &lt;span class="n"&gt;GetDriveLettersFromMask&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;UInt32&lt;/span&gt; &lt;span class="n"&gt;unitmask&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;    &lt;span class="kt"&gt;var&lt;/span&gt; &lt;span class="n"&gt;result&lt;/span&gt; &lt;span class="p"&gt;=&lt;/span&gt; &lt;span class="k"&gt;new&lt;/span&gt; &lt;span class="n"&gt;List&lt;/span&gt;&lt;span class="p"&gt;&amp;lt;&lt;/span&gt;&lt;span class="kt"&gt;char&lt;/span&gt;&lt;span class="p"&gt;&amp;gt;();&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="kt"&gt;var&lt;/span&gt; &lt;span class="n"&gt;i&lt;/span&gt; &lt;span class="p"&gt;=&lt;/span&gt; &lt;span class="m"&gt;0&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt; &lt;span class="n"&gt;i&lt;/span&gt; &lt;span class="p"&gt;&amp;lt;&lt;/span&gt; &lt;span class="m"&gt;26&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt; &lt;span class="n"&gt;i&lt;/span&gt;&lt;span class="p"&gt;++)&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;((&lt;/span&gt;&lt;span class="n"&gt;unitmask&lt;/span&gt; &lt;span class="p"&gt;&amp;amp;&lt;/span&gt; &lt;span class="m"&gt;0&lt;/span&gt;&lt;span class="n"&gt;x1&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="p"&gt;==&lt;/span&gt; &lt;span class="m"&gt;1&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;        &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;            &lt;span class="kt"&gt;var&lt;/span&gt; &lt;span class="n"&gt;letter&lt;/span&gt; &lt;span class="p"&gt;=&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="kt"&gt;char&lt;/span&gt;&lt;span class="p"&gt;)(&lt;/span&gt;&lt;span class="n"&gt;i&lt;/span&gt; &lt;span class="p"&gt;+&lt;/span&gt; &lt;span class="m"&gt;65&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;            &lt;span class="n"&gt;result&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="n"&gt;Add&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;letter&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;        &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;unitmask&lt;/span&gt; &lt;span class="p"&gt;=&lt;/span&gt; &lt;span class="n"&gt;unitmask&lt;/span&gt; &lt;span class="p"&gt;&amp;gt;&amp;gt;&lt;/span&gt; &lt;span class="m"&gt;1&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="n"&gt;result&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;  &lt;p&gt;Notes:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;11/5/2012 - Updated to support Clip Zip&lt;/li&gt;&lt;li&gt;11/15/2012 - Updated to support Clip+&lt;/li&gt;&lt;/ul&gt;         &lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/2934284209019936999'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/2934284209019936999'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2012/08/msansa.html' title='msansa'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-710960763349677058</id><published>2012-07-25T12:24:00.000-04:00</published><updated>2016-10-20T14:28:52.646-04:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='python'/><title type='text'>parse sansa clip ratings</title><content type='html'> &lt;div id="content"&gt;         &lt;p&gt;Reverse engineered the Sansa Clip MTABLE.SYS file so I can get ratings data.&lt;/p&gt;&lt;img src="https://044ddf27-a-62cb3a1a-s-sites.googlegroups.com/site/remzmike/source.png?attachauth=ANoY7cqBXo4CugUUmgaYrzVbmfDkx1JvU_rHHHc607J4Y63MYqaBtJ5kSIIgYhAvFgfEeba0d4GX-TPkMvMTKFU8aGSqNpfMPfV5GsTGR8qJn5Dnmmwgbg8D8tHaZjGSMXUXTdUuMeeQQjlow9WVRv1jB97UiW4u7aoSgcTGH7KDupw3xWvAdoCzIb7cKmsuW_YTbSLHuWIxNCkL4m76qT-JH9dESv1Elw%3D%3D&amp;attredirects=0" width="16" height="16"&gt; &lt;a href="https://bitbucket.org/remzmike/misc/src/10378889a6560b47318c9d976b423237d3e23f75/weblog2012/sansa.py?at=default&amp;fileviewer=file-view-default"&gt;sansa.py&lt;/a&gt;&lt;br&gt;&lt;p&gt;Both unicode and ascii strings are written in character pairs and double null terminated.&lt;br /&gt;The last character in ascii strings of uneven length is paired with a null byte.&lt;br /&gt;So, ascii strings of uneven length will have three nulls after their last character.&lt;/p&gt;&lt;p&gt;Item index begins at 40th byte.&lt;/p&gt;&lt;p&gt;Stop reading items when starting bytes are 0x0000.&lt;/p&gt;&lt;p&gt;An item:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;1 byte   : a&lt;br /&gt;1 byte   : b&lt;br /&gt;15 bytes &lt;br /&gt;string   : pathname&lt;br /&gt;string   : filename&lt;br /&gt;string   : title&lt;br /&gt;string   : artist&lt;br /&gt;string   : album&lt;br /&gt;2 bytes  : 0xffff -or- extra string (if first bytes are not 0xffff)&lt;br /&gt;string   : genre&lt;br /&gt;13 bytes -or- 7 bytes (if first byte is 0x00)&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;  &lt;p&gt;Meta index begins at 0x148238.&lt;/p&gt;&lt;p&gt;Stop reading metas when starting byte is not 0x80.&lt;/p&gt;&lt;p&gt;A meta record:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;1 byte : 0x80&lt;br /&gt;1 byte : rating&lt;br /&gt;1 byte : meta b&lt;br /&gt;1 byte : meta c&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;         &lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/710960763349677058'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/710960763349677058'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2012/07/parse-sansa-clip-ratings.html' title='parse sansa clip ratings'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-1153513474147407970</id><published>2012-05-22T12:19:00.000-04:00</published><updated>2016-10-20T14:28:59.939-04:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='python'/><category scheme='http://www.blogger.com/atom/ns#' term='web'/><title type='text'>slow image</title><content type='html'> &lt;div id="content"&gt;Artificially slow image streaming in python flask.&lt;br /&gt;&lt;br /&gt;&lt;div class="separator" style="clear: both; text-align: center;"&gt;&lt;iframe width="128" height="160" class="YOUTUBE-iframe-video" data-thumbnail-src="https://i.ytimg.com/vi/Uiiz-60KcXU/0.jpg" src="https://www.youtube.com/embed/Uiiz-60KcXU?feature=player_embedded" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;br /&gt;Snippet:&lt;br /&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="k"&gt;def&lt;/span&gt; &lt;span class="nf"&gt;iter_image&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;fn&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;yields&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;seconds&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;data&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;open&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;'static/'&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="n"&gt;fn&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="s"&gt;'rb'&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;read&lt;/span&gt;&lt;span class="p"&gt;()&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;size&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;len&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;data&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;gen&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;iter_image_generator&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;data&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;yields&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;seconds&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;response&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;make_response&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;gen&lt;/span&gt; &lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="s"&gt;"200 OK"&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;response&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;content_length&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;size&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;response&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;mimetype&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="s"&gt;'image/png'&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;response&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;cache_control&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;no_cache&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="bp"&gt;True&lt;/span&gt;    &lt;br /&gt;    &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="n"&gt;response&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="k"&gt;def&lt;/span&gt; &lt;span class="nf"&gt;iter_image_generator&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;data&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;yields&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;seconds&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;size&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;len&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;data&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;span&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;int&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt; &lt;span class="n"&gt;math&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;ceil&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt; &lt;span class="n"&gt;size&lt;/span&gt; &lt;span class="o"&gt;/&lt;/span&gt; &lt;span class="n"&gt;yields&lt;/span&gt; &lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;sleeptime&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;seconds&lt;/span&gt; &lt;span class="o"&gt;/&lt;/span&gt; &lt;span class="n"&gt;yields&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;i&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="nb"&gt;range&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;yields&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;a&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;i&lt;/span&gt;&lt;span class="o"&gt;*&lt;/span&gt;&lt;span class="n"&gt;span&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;b&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;a&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="n"&gt;span&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;block&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;data&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="n"&gt;a&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;span class="n"&gt;b&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt; &lt;span class="c"&gt;# overslice&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;yield&lt;/span&gt; &lt;span class="n"&gt;block&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;time&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;sleep&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;sleeptime&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;&lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/1153513474147407970'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/1153513474147407970'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2012/05/slow-image.html' title='slow image'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><media:thumbnail xmlns:media='http://search.yahoo.com/mrss/' url='https://img.youtube.com/vi/Uiiz-60KcXU/default.jpg' height='72' width='72'/><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-2090660491481095207</id><published>2012-05-13T12:18:00.000-04:00</published><updated>2016-01-13T14:36:56.248-05:00</updated><category scheme='http://www.blogger.com/atom/ns#' term='cpp'/><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='graphics'/><category scheme='http://www.blogger.com/atom/ns#' term='c'/><category scheme='http://www.blogger.com/atom/ns#' term='ui'/><title type='text'>linestar ui</title><content type='html'>&lt;div id="content"&gt;         &lt;p&gt;Made this with C++, using the Anti-Grain Geometry library. Download &lt;a href="https://bitbucket.org/remzmike/misc/downloads/linestar_ui.exe"&gt;linestar_ui.exe&lt;/a&gt;. 3 hours, with breakfast.&lt;/p&gt;&lt;img src="http://1.bp.blogspot.com/-mTWVVjMabpk/Vpam1NVrLFI/AAAAAAAAAzU/Vj6NhiEo3oE/s1600/linestar-ui.png" width="606" height="725"&gt;         &lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/2090660491481095207'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/2090660491481095207'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2012/05/linestar-ui.html' title='linestar ui'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><media:thumbnail xmlns:media='http://search.yahoo.com/mrss/' url='http://1.bp.blogspot.com/-mTWVVjMabpk/Vpam1NVrLFI/AAAAAAAAAzU/Vj6NhiEo3oE/s72-c/linestar-ui.png' height='72' width='72'/><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-7588316116254268764</id><published>2012-05-03T12:16:00.000-04:00</published><updated>2016-01-14T11:46:24.258-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='numbers'/><category scheme='http://www.blogger.com/atom/ns#' term='python'/><title type='text'>change for a dollar</title><content type='html'>&lt;img border="0" src="http://1.bp.blogspot.com/-mc41VE4mBm8/VpfQ0l-lAuI/AAAAAAAAA6k/G2zLA7HbLZM/s1600/_postthumb_change-for-dolla.png" style="display:none;" /&gt; &lt;div id="content"&gt;     &lt;p&gt;Snapple Real Fact #804: There are 293 ways to make change for a dollar.&lt;/p&gt;&lt;img src="http://3.bp.blogspot.com/-B9rhEW6Yi94/VpaMKKzOzXI/AAAAAAAAAwM/2T3zqVlHODE/s1600/source.png" width="16" height="16"&gt; &lt;a href="https://bitbucket.org/remzmike/misc/src/10378889a6560b47318c9d976b423237d3e23f75/weblog2012/change.py?at=default&amp;fileviewer=file-view-default"&gt;change.py&lt;/a&gt;&lt;br&gt;&lt;p&gt;Basically:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="k"&gt;def&lt;/span&gt; &lt;span class="nf"&gt;a1&lt;/span&gt;&lt;span class="p"&gt;():&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="n"&gt;combinations&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="p"&gt;[]&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;a&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="nb"&gt;xrange&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;100&lt;/span&gt;&lt;span class="o"&gt;//&lt;/span&gt;&lt;span class="mi"&gt;100&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;b&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="nb"&gt;xrange&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;100&lt;/span&gt;&lt;span class="o"&gt;//&lt;/span&gt;&lt;span class="mi"&gt;50&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;c&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="nb"&gt;xrange&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;100&lt;/span&gt;&lt;span class="o"&gt;//&lt;/span&gt;&lt;span class="mi"&gt;25&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;                &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;d&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="nb"&gt;xrange&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;100&lt;/span&gt;&lt;span class="o"&gt;//&lt;/span&gt;&lt;span class="mi"&gt;10&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;                    &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;e&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="nb"&gt;xrange&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;100&lt;/span&gt;&lt;span class="o"&gt;//&lt;/span&gt;&lt;span class="mi"&gt;5&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;                        &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;f&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="nb"&gt;xrange&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;100&lt;/span&gt;&lt;span class="o"&gt;//&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;                            &lt;span class="n"&gt;amt&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;a&lt;/span&gt; &lt;span class="o"&gt;*&lt;/span&gt; &lt;span class="mi"&gt;100&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="n"&gt;b&lt;/span&gt; &lt;span class="o"&gt;*&lt;/span&gt; &lt;span class="mi"&gt;50&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="n"&gt;c&lt;/span&gt; &lt;span class="o"&gt;*&lt;/span&gt; &lt;span class="mi"&gt;25&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="n"&gt;d&lt;/span&gt; &lt;span class="o"&gt;*&lt;/span&gt; &lt;span class="mi"&gt;10&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="n"&gt;e&lt;/span&gt; &lt;span class="o"&gt;*&lt;/span&gt; &lt;span class="mi"&gt;5&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="n"&gt;f&lt;/span&gt; &lt;span class="o"&gt;*&lt;/span&gt; &lt;span class="mi"&gt;1&lt;/span&gt;&lt;br /&gt;                            &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="n"&gt;amt&lt;/span&gt;&lt;span class="o"&gt;==&lt;/span&gt;&lt;span class="mi"&gt;100&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;                                &lt;span class="n"&gt;combinations&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;append&lt;/span&gt;&lt;span class="p"&gt;([&lt;/span&gt;&lt;span class="n"&gt;a&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;b&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;c&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;d&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;e&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;f&lt;/span&gt;&lt;span class="p"&gt;])&lt;/span&gt;&lt;br /&gt;                                &lt;span class="k"&gt;break&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="n"&gt;combinations&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;  &lt;p&gt;Microbench:&lt;/p&gt;&lt;table&gt;&lt;thead&gt;&lt;tr&gt;&lt;th&gt;fn&lt;/th&gt;&lt;th align="right"&gt;cpython&lt;/th&gt;&lt;th align="right"&gt;pypy 1.7&lt;/th&gt;&lt;th align="right"&gt;pypy 1.8&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;a1&lt;/td&gt;&lt;td align="right"&gt;2467x&lt;/td&gt;&lt;td align="right"&gt;98x&lt;/td&gt;&lt;td align="right"&gt;24x&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;a2&lt;/td&gt;&lt;td align="right"&gt;81x&lt;/td&gt;&lt;td align="right"&gt;1.5x&lt;/td&gt;&lt;td align="right"&gt;3.6x&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;a3&lt;/td&gt;&lt;td align="right"&gt;8x&lt;/td&gt;&lt;td align="right"&gt;1.3x&lt;/td&gt;&lt;td align="right"&gt;1.5x&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;a4&lt;/td&gt;&lt;td align="right"&gt;8x&lt;/td&gt;&lt;td align="right"&gt;&lt;b&gt;1.0x&lt;/b&gt;&lt;/td&gt;&lt;td align="right"&gt;1.5x&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;p&gt;And for people who thought this was about math:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="k"&gt;def&lt;/span&gt; &lt;span class="nf"&gt;donk&lt;/span&gt;&lt;span class="p"&gt;():&lt;/span&gt;    &lt;br /&gt;    &lt;span class="n"&gt;kvalues&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="p"&gt;[]&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;k&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="nb"&gt;range&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;20&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;value&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;floor&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;k&lt;/span&gt;&lt;span class="o"&gt;/&lt;/span&gt;&lt;span class="mi"&gt;2&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;kvalues&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;append&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;value&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;q&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="p"&gt;[]&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;v&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="nb"&gt;range&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;4&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;)[::&lt;/span&gt;&lt;span class="o"&gt;-&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;]:&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;q&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;append&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nb"&gt;sum&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;kvalues&lt;/span&gt;&lt;span class="p"&gt;[:&lt;/span&gt;&lt;span class="n"&gt;v&lt;/span&gt;&lt;span class="o"&gt;*&lt;/span&gt;&lt;span class="mi"&gt;5&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;]))&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;x&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;q&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="n"&gt;q&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="n"&gt;q&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="mi"&gt;2&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="n"&gt;q&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="mi"&gt;3&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="n"&gt;q&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="mi"&gt;4&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="n"&gt;q&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="mi"&gt;2&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="n"&gt;q&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="mi"&gt;3&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="n"&gt;q&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="mi"&gt;4&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="n"&gt;q&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="mi"&gt;4&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="mi"&gt;1&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="nb"&gt;int&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;x&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;  &lt;p&gt;Or, found online, where d is number of dollars:&lt;/p&gt;&lt;p&gt;&lt;code&gt;(1 + d) * (6 + 121 * d + 362 * d**2 + 310 * d**3 + 80 * d**4 ) / 6&lt;/code&gt;&lt;/p&gt;&lt;p&gt;See the second half of &lt;a href="https://bitbucket.org/remzmike/misc/src/10378889a6560b47318c9d976b423237d3e23f75/weblog2012/change.py?at=default&amp;fileviewer=file-view-default"&gt;the code&lt;/a&gt; for more, and &lt;a href="http://www.wolframalpha.com/input/?i=Series[1%2F%28+%281-x%29*%281-x^5%29*%281-x^10%29*%281-x^25%29*%281-x^50%29*%281-x^100%29+%29%2C+{x%2C+0%2C+100}]"&gt;wolfram|alpha&lt;/a&gt;, 100th coefficient.&lt;/p&gt;         &lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/7588316116254268764'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/7588316116254268764'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2012/05/change-for-dollar.html' title='change for a dollar'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><media:thumbnail xmlns:media='http://search.yahoo.com/mrss/' url='http://1.bp.blogspot.com/-mc41VE4mBm8/VpfQ0l-lAuI/AAAAAAAAA6k/G2zLA7HbLZM/s72-c/_postthumb_change-for-dolla.png' height='72' width='72'/><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-5458265792203941014</id><published>2012-04-27T12:15:00.000-04:00</published><updated>2016-01-13T14:22:48.567-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='graphics'/><category scheme='http://www.blogger.com/atom/ns#' term='python'/><title type='text'>geo sales</title><content type='html'>&lt;div id="content"&gt;                     &lt;p&gt;Wrote code to draw this.&lt;/p&gt;&lt;!-- todo: solution for this, with the same border on flvs --&gt; &lt;!-- [![](/weblog/static/geo-sales-preview.png)](/weblog/static/geo-sales.png) ([click for full-size](/weblog/static/geo-sales.png)) --&gt;&lt;div style="width:100%;overflow:auto;"&gt;&lt;img src="http://3.bp.blogspot.com/-cC4y629mtkI/Vpaj5t32t4I/AAAAAAAAAyw/rn6JQjxKy8U/s1600/geo-sales.png" width="1080" height="540"&gt;&lt;/div&gt;&lt;p&gt;Input:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;list of email addresses&lt;/li&gt;&lt;li&gt;country border data&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Vector drawn, robinson projection, gray dns resolution, circles in log scale.&lt;/p&gt;&lt;p&gt;Snippet:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="k"&gt;def&lt;/span&gt; &lt;span class="nf"&gt;lerp&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;x1&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;x2&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;p&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="n"&gt;x1&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt; &lt;span class="n"&gt;x2&lt;/span&gt; &lt;span class="o"&gt;-&lt;/span&gt; &lt;span class="n"&gt;x1&lt;/span&gt; &lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="o"&gt;*&lt;/span&gt; &lt;span class="n"&gt;p&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="k"&gt;def&lt;/span&gt; &lt;span class="nf"&gt;get_plen_pdfe&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;latitude&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;latitude&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;abs&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;latitude&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;i&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;row&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="nb"&gt;enumerate&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;table&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;deg1&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;plen1&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;pdfe1&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;row&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="n"&gt;latitude&lt;/span&gt; &lt;span class="o"&gt;&amp;gt;=&lt;/span&gt; &lt;span class="n"&gt;deg1&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;            &lt;span class="n"&gt;deg2&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;plen2&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;pdfe2&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;table&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="n"&gt;i&lt;/span&gt;&lt;span class="o"&gt;-&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;br /&gt;            &lt;span class="n"&gt;p&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;latitude&lt;/span&gt;&lt;span class="o"&gt;-&lt;/span&gt;&lt;span class="n"&gt;deg1&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;span class="o"&gt;/&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;deg2&lt;/span&gt;&lt;span class="o"&gt;-&lt;/span&gt;&lt;span class="n"&gt;deg1&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;            &lt;span class="n"&gt;plen&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;lerp&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;plen1&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;plen2&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;p&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;            &lt;span class="n"&gt;pdfe&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;lerp&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;pdfe1&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;pdfe2&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;p&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="n"&gt;plen&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;pdfe&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="c"&gt;# get robinson projection x, y&lt;/span&gt;&lt;br /&gt;&lt;span class="c"&gt;# origin is middle left, for now&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;def&lt;/span&gt; &lt;span class="nf"&gt;get_robinson_coord&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;longitude&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;latitude&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;assert&lt;/span&gt; &lt;span class="n"&gt;longitude&lt;/span&gt; &lt;span class="o"&gt;&amp;lt;=&lt;/span&gt; &lt;span class="mi"&gt;1&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;assert&lt;/span&gt; &lt;span class="n"&gt;latitude&lt;/span&gt; &lt;span class="o"&gt;&amp;lt;=&lt;/span&gt; &lt;span class="mi"&gt;1&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;plen&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;pdfe&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;get_plen_pdfe&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;latitude&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="n"&gt;long_start&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt; &lt;span class="o"&gt;-&lt;/span&gt; &lt;span class="n"&gt;plen&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="o"&gt;/&lt;/span&gt; &lt;span class="mi"&gt;2&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;x&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;long_start&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="n"&gt;longitude&lt;/span&gt; &lt;span class="o"&gt;*&lt;/span&gt; &lt;span class="n"&gt;plen&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;y&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;pdfe&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="n"&gt;latitude&lt;/span&gt;&lt;span class="o"&gt;&amp;lt;&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;y&lt;/span&gt; &lt;span class="o"&gt;*=&lt;/span&gt; &lt;span class="o"&gt;-&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="n"&gt;x&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;y&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;  &lt;!-- http://xkcd.com/713/ --&gt;         &lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/5458265792203941014'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/5458265792203941014'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2012/04/geo-sales.html' title='geo sales'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><media:thumbnail xmlns:media='http://search.yahoo.com/mrss/' url='http://3.bp.blogspot.com/-cC4y629mtkI/Vpaj5t32t4I/AAAAAAAAAyw/rn6JQjxKy8U/s72-c/geo-sales.png' height='72' width='72'/><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-3559421715879516763</id><published>2012-04-23T12:15:00.000-04:00</published><updated>2016-01-14T11:44:10.935-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='numbers'/><category scheme='http://www.blogger.com/atom/ns#' term='python'/><title type='text'>increment unique</title><content type='html'>&lt;img border="0" src="http://2.bp.blogspot.com/-DjoDXZ0AIuk/VpfQSnh9yVI/AAAAAAAAA6Y/PX0G3hw82XE/s1600/_postthumb_increment-unique.png" style="display:none;" /&gt; &lt;div id="content"&gt;         &lt;p&gt;Make increments less obvious. All places change. Same range, same values. First guess.&lt;/p&gt;&lt;img src="http://3.bp.blogspot.com/-B9rhEW6Yi94/VpaMKKzOzXI/AAAAAAAAAwM/2T3zqVlHODE/s1600/source.png" width="16" height="16"&gt; &lt;a href="https://bitbucket.org/remzmike/misc/src/b749d7e44de4e401d5281b2e76bda7c5e305a7e4/weblog2012/increment_unique.py?at=default&amp;fileviewer=file-view-default"&gt;increment_unique.py&lt;/a&gt;&lt;br&gt;&lt;p&gt;Simply:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="k"&gt;def&lt;/span&gt; &lt;span class="nf"&gt;cycle&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;x&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;leap&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;mod&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;val&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;x&lt;/span&gt; &lt;span class="o"&gt;*&lt;/span&gt; &lt;span class="n"&gt;leap&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="o"&gt;%&lt;/span&gt; &lt;span class="n"&gt;mod&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="n"&gt;val&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;  &lt;p&gt;Example:&lt;/p&gt;&lt;table&gt;&lt;thead&gt;&lt;tr&gt;&lt;th align="left"&gt;value&lt;/th&gt;&lt;th align="left"&gt;normal&lt;/th&gt;&lt;th align="left"&gt;obfuscated&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td align="left"&gt;1000&lt;/td&gt;&lt;td align="left"&gt;&lt;code&gt;bmm&lt;/code&gt;&lt;/td&gt;&lt;td align="left"&gt;&lt;code&gt;qac&lt;/code&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td align="left"&gt;1001&lt;/td&gt;&lt;td align="left"&gt;&lt;code&gt;bmn&lt;/code&gt;&lt;/td&gt;&lt;td align="left"&gt;&lt;code&gt;jqv&lt;/code&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td align="left"&gt;1002&lt;/td&gt;&lt;td align="left"&gt;&lt;code&gt;bmo&lt;/code&gt;&lt;/td&gt;&lt;td align="left"&gt;&lt;code&gt;ljt&lt;/code&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td align="left"&gt;1003&lt;/td&gt;&lt;td align="left"&gt;&lt;code&gt;bmp&lt;/code&gt;&lt;/td&gt;&lt;td align="left"&gt;&lt;code&gt;sid&lt;/code&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td align="left"&gt;1004&lt;/td&gt;&lt;td align="left"&gt;&lt;code&gt;bmq&lt;/code&gt;&lt;/td&gt;&lt;td align="left"&gt;&lt;code&gt;ply&lt;/code&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td align="left"&gt;1005&lt;/td&gt;&lt;td align="left"&gt;&lt;code&gt;bmr&lt;/code&gt;&lt;/td&gt;&lt;td align="left"&gt;&lt;code&gt;esh&lt;/code&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td align="left"&gt;1006&lt;/td&gt;&lt;td align="left"&gt;&lt;code&gt;bms&lt;/code&gt;&lt;/td&gt;&lt;td align="left"&gt;&lt;code&gt;npb&lt;/code&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td align="left"&gt;1007&lt;/td&gt;&lt;td align="left"&gt;&lt;code&gt;bmt&lt;/code&gt;&lt;/td&gt;&lt;td align="left"&gt;&lt;code&gt;xer&lt;/code&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td align="left"&gt;1008&lt;/td&gt;&lt;td align="left"&gt;&lt;code&gt;bmu&lt;/code&gt;&lt;/td&gt;&lt;td align="left"&gt;&lt;code&gt;kno&lt;/code&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td align="left"&gt;1009&lt;/td&gt;&lt;td align="left"&gt;&lt;code&gt;bmv&lt;/code&gt;&lt;/td&gt;&lt;td align="left"&gt;&lt;code&gt;mxz&lt;/code&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;         &lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/3559421715879516763'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/3559421715879516763'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2012/04/increment-unique.html' title='increment unique'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><media:thumbnail xmlns:media='http://search.yahoo.com/mrss/' url='http://2.bp.blogspot.com/-DjoDXZ0AIuk/VpfQSnh9yVI/AAAAAAAAA6Y/PX0G3hw82XE/s72-c/_postthumb_increment-unique.png' height='72' width='72'/><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-6971693143621097504</id><published>2012-04-17T12:11:00.000-04:00</published><updated>2016-10-16T21:25:23.308-04:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='javascript'/><title type='text'>bugmenot webfiltered </title><content type='html'>&lt;img border="0" src="https://4.bp.blogspot.com/-_liUJJ-AoTk/VpfOW8mE8mI/AAAAAAAAA58/WkHGeAnJ3dQ/s1600/_postthumb_bugmenot-webfilt.png" style="display:none;"&gt; &lt;div id="content"&gt;                          &lt;p&gt;Access bugmenot logins on webfiltered network, using a shell account. 10 minutes.&lt;/p&gt;&lt;p&gt;1) Use lynx to view bugmenot source, finding:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="nx"&gt;key&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="o"&gt;-&lt;/span&gt;&lt;span class="mi"&gt;52&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt; &lt;span class="c1"&gt;// unique to each page&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="c1"&gt;// inlined username/password encode&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;d&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;VkNVZ3lueXRuc2lmbXR6eGpFbHJmbnEzaHRy&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;d&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;Z2ViYllueXRuc2lmbXR6eGo5&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;  &lt;p&gt;2) Use wget to get /inc/library.js?2&lt;/p&gt;&lt;p&gt;3) Interactive:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="nx"&gt;d&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;&lt;span class="cm"&gt;/*&lt;/span&gt;&lt;br /&gt;&lt;span class="cm"&gt;function d(strInput) {&lt;/span&gt;&lt;br /&gt;&lt;span class="cm"&gt;    strInput = decoder(strInput);&lt;/span&gt;&lt;br /&gt;&lt;span class="cm"&gt;    var strOutput = &amp;quot;&amp;quot;;&lt;/span&gt;&lt;br /&gt;&lt;span class="cm"&gt;    var intOffset = (key + 112) / 12;&lt;/span&gt;&lt;br /&gt;&lt;span class="cm"&gt;    for (i = 4; i &amp;lt; strInput.length; i++) {&lt;/span&gt;&lt;br /&gt;&lt;span class="cm"&gt;        thisLetter = strInput.charAt(i);&lt;/span&gt;&lt;br /&gt;&lt;span class="cm"&gt;        thisCharCode = strInput.charCodeAt(i);&lt;/span&gt;&lt;br /&gt;&lt;span class="cm"&gt;        newCharCode = thisCharCode - intOffset;&lt;/span&gt;&lt;br /&gt;&lt;span class="cm"&gt;        strOutput += String.fromCharCode(newCharCode);&lt;/span&gt;&lt;br /&gt;&lt;span class="cm"&gt;    }&lt;/span&gt;&lt;br /&gt;&lt;span class="cm"&gt;    document.write(strOutput);&lt;/span&gt;&lt;br /&gt;&lt;span class="cm"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;span class="cm"&gt;*/&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="nx"&gt;d&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;VkNVZ3lueXRuc2lmbXR6eGpFbHJmbnEzaHRy&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;&lt;span class="c1"&gt;// console:1       ReferenceError: key is not defined&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="nx"&gt;key&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="o"&gt;-&lt;/span&gt;&lt;span class="mi"&gt;52&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="nx"&gt;d&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;VkNVZ3lueXRuc2lmbXR6eGpFbHJmbnEzaHRy&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;&lt;span class="c1"&gt;// console:1       ReferenceError: document is not defined&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="nb"&gt;document&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="p"&gt;{};&lt;/span&gt;&lt;br /&gt;&lt;span class="nb"&gt;document&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="nx"&gt;write&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nx"&gt;print&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="nx"&gt;d&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;VkNVZ3lueXRuc2lmbXR6eGpFbHJmbnEzaHRy&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;&lt;span class="c1"&gt;// username print here&lt;/span&gt;&lt;br /&gt;&lt;span class="nx"&gt;d&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;Z2ViYllueXRuc2lmbXR6eGo5&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;&lt;span class="c1"&gt;// password print here&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;         &lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/6971693143621097504'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/6971693143621097504'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2012/04/bugmenot-webfiltered.html' title='bugmenot webfiltered '/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><media:thumbnail xmlns:media='http://search.yahoo.com/mrss/' url='https://4.bp.blogspot.com/-_liUJJ-AoTk/VpfOW8mE8mI/AAAAAAAAA58/WkHGeAnJ3dQ/s72-c/_postthumb_bugmenot-webfilt.png' height='72' width='72'/><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-1376984502931035423</id><published>2012-03-27T12:09:00.000-04:00</published><updated>2016-11-02T13:27:53.114-04:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='c#'/><category scheme='http://www.blogger.com/atom/ns#' term='ui'/><title type='text'>imui</title><content type='html'>&lt;img border="0" src="https://2.bp.blogspot.com/-AhAePKgEnaM/VpfETvs2CzI/AAAAAAAAA4s/Y4MczZ3riYo/s1600/_postthumb_imui.png" style="display:none;"&gt;  &lt;div id="content"&gt;&lt;p&gt;This is a low memory, no objects, "code is data", reactive, functional, vector-scaling, immediate mode user interface library. It is written in c#, running in mono, on a cairo canvas, with vector drawn controls.&lt;/p&gt; &lt;p&gt;The controls look a lot like native Windows controls, by design, but they are not.&lt;/p&gt; &lt;p&gt;What does this mean?&lt;/p&gt; &lt;p&gt;It means I wrote a cross-platform ui toolkit that looks familiar, can scale to different dot pitch displays, and can be used in both traditional event-driven desktop applications as well as architectures based on straightforward loops (ie. multimedia &amp; games). The instance shown here is driven by mono+gtk user input events, not a multimedia loop.&lt;/p&gt; &lt;p&gt;And in case you're wondering, this is not enough to consider me a capable c# developer. Isn't that wild?&lt;/p&gt; &lt;br /&gt;&lt;div class="separator" style="clear: both; text-align: center;"&gt;&lt;iframe width="119" height="208" class="YOUTUBE-iframe-video" data-thumbnail-src="https://i.ytimg.com/vi/DrN4ZqaJGdU/0.jpg" src="https://www.youtube.com/embed/DrN4ZqaJGdU?feature=player_embedded" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/1376984502931035423'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/1376984502931035423'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2012/03/imui.html' title='imui'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><media:thumbnail xmlns:media='http://search.yahoo.com/mrss/' url='https://2.bp.blogspot.com/-AhAePKgEnaM/VpfETvs2CzI/AAAAAAAAA4s/Y4MczZ3riYo/s72-c/_postthumb_imui.png' height='72' width='72'/><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-3540153414292929720</id><published>2012-03-13T12:05:00.000-04:00</published><updated>2016-01-13T14:04:25.735-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='python'/><category scheme='http://www.blogger.com/atom/ns#' term='processing'/><title type='text'>memorize data</title><content type='html'>&lt;div id="content"&gt; &lt;!-- http://2.bp.blogspot.com/-N5KA-78P7cA/VpadnL3vRCI/AAAAAAAAAw8/Pcgz5E6IpII/s1600/memorize-e.png --&gt;                      &lt;p&gt;Detect data from finite set with minimal reads at detection-time. No research.&lt;/p&gt;&lt;ol&gt;&lt;li&gt;Preprocess: Determine the key elements I need to read for a dataset.&lt;/li&gt;&lt;li&gt;Detection: Read key elements and match to dictionary key.&lt;/li&gt;&lt;/ol&gt;&lt;p&gt;Basically:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="c"&gt;# find the unique element for this dataset&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;def&lt;/span&gt; &lt;span class="nf"&gt;findunique1&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;dataset&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;datalen&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;len&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;dataset&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;])&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;datacount&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;len&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;dataset&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;i&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="nb"&gt;range&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;datalen&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;values&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;set&lt;/span&gt;&lt;span class="p"&gt;()&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;data&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="n"&gt;dataset&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;            &lt;br /&gt;            &lt;span class="n"&gt;values&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;add&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;data&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="n"&gt;i&lt;/span&gt;&lt;span class="p"&gt;])&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="nb"&gt;len&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;values&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="o"&gt;==&lt;/span&gt; &lt;span class="n"&gt;datacount&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;            &lt;span class="c"&gt;#print &amp;#39;key element found&amp;#39;, i&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="n"&gt;i&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="bp"&gt;None&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="n"&gt;x&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="mi"&gt;2&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="mi"&gt;3&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;br /&gt;&lt;span class="n"&gt;y&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;br /&gt;&lt;span class="n"&gt;z&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="mi"&gt;2&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;    &lt;br /&gt;&lt;span class="n"&gt;dataset&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="n"&gt;x&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;y&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;z&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;assert&lt;/span&gt; &lt;span class="n"&gt;findunique1&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;dataset&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="o"&gt;==&lt;/span&gt; &lt;span class="mi"&gt;2&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;&lt;p&gt;But with composite keys:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="c"&gt;# find the unique element pair for this dataset&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;def&lt;/span&gt; &lt;span class="nf"&gt;findunique2&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;dataset&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;datalen&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;len&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;dataset&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;])&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;datacount&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;len&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;dataset&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;i&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="nb"&gt;range&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;datalen&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;j&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="nb"&gt;range&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;datalen&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;            &lt;span class="n"&gt;values&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;set&lt;/span&gt;&lt;span class="p"&gt;()&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;data&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="n"&gt;dataset&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;            &lt;br /&gt;                &lt;span class="n"&gt;value&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;data&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="n"&gt;i&lt;/span&gt;&lt;span class="p"&gt;],&lt;/span&gt; &lt;span class="n"&gt;data&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="n"&gt;j&lt;/span&gt;&lt;span class="p"&gt;])&lt;/span&gt;&lt;br /&gt;                &lt;span class="n"&gt;values&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;add&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;value&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="nb"&gt;len&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;values&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="o"&gt;==&lt;/span&gt; &lt;span class="n"&gt;datacount&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;                &lt;span class="c"&gt;#print &amp;#39;key element pair found&amp;#39;, i, j&lt;/span&gt;&lt;br /&gt;                &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="n"&gt;i&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;j&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="bp"&gt;None&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="n"&gt;x&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;2&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;3&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;4&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;5&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;6&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;7&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;8&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;br /&gt;&lt;span class="n"&gt;y&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;2&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;3&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;4&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;5&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;6&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;7&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;9&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;br /&gt;&lt;span class="n"&gt;z&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;2&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;3&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;5&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;6&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;7&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;8&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;9&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;br /&gt;&lt;span class="n"&gt;dataset&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="n"&gt;x&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;y&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;z&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;assert&lt;/span&gt; &lt;span class="n"&gt;findunique2&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;dataset&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="o"&gt;==&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;4&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;8&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;&lt;p&gt;Final generic version:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="k"&gt;def&lt;/span&gt; &lt;span class="nf"&gt;findunique_inner&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;dataset&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;stem&lt;/span&gt;&lt;span class="o"&gt;=&lt;/span&gt;&lt;span class="p"&gt;[],&lt;/span&gt; &lt;span class="n"&gt;indexes&lt;/span&gt;&lt;span class="o"&gt;=&lt;/span&gt;&lt;span class="bp"&gt;None&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;datalen&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;len&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;dataset&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;])&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;datacount&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;len&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;dataset&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="n"&gt;indexes&lt;/span&gt;&lt;span class="o"&gt;==&lt;/span&gt;&lt;span class="bp"&gt;None&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;indexes&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;range&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;datalen&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;count&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="nb"&gt;range&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;datalen&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;i&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;indexes&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="n"&gt;count&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;values&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;set&lt;/span&gt;&lt;span class="p"&gt;()&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;data&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="n"&gt;dataset&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;                            &lt;br /&gt;            &lt;span class="n"&gt;stemvalues&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="n"&gt;data&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="n"&gt;j&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt; &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;j&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="n"&gt;stem&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;br /&gt;            &lt;span class="n"&gt;value&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;stemvalues&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="n"&gt;data&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="n"&gt;i&lt;/span&gt;&lt;span class="p"&gt;]]&lt;/span&gt;&lt;br /&gt;            &lt;span class="n"&gt;values&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;add&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nb"&gt;tuple&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;value&lt;/span&gt;&lt;span class="p"&gt;))&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="nb"&gt;len&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;values&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="o"&gt;==&lt;/span&gt; &lt;span class="n"&gt;datacount&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;            &lt;span class="n"&gt;index&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;tuple&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt; &lt;span class="n"&gt;stem&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="n"&gt;i&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt; &lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;            &lt;span class="c"&gt;#print &amp;#39;key element group found&amp;#39;, index&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="n"&gt;index&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="bp"&gt;None&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;&lt;h3&gt;Example&lt;/h3&gt;&lt;img src="http://2.bp.blogspot.com/-3HbQAGF0bCI/VpadmhCWVPI/AAAAAAAAAxI/xzcnyuOch8I/s1600/memorize-a.png" width="24" height="24"&gt; &lt;img src="http://2.bp.blogspot.com/-TZGRrjD0WM0/VpadmtU0nxI/AAAAAAAAAw0/DaZUpoBCbbs/s1600/memorize-b.png" width="24" height="24"&gt; &lt;img src="http://4.bp.blogspot.com/-lHDYEGqGse4/VpadmnEZx5I/AAAAAAAAAww/yBvv9A9FbwE/s1600/memorize-c.png" width="24" height="24"&gt; &lt;img src="http://3.bp.blogspot.com/-KFoQKWnPZzk/Vpadm4ua8MI/AAAAAAAAAw4/y1fP1RaAPgs/s1600/memorize-d.png" width="24" height="24"&gt; &lt;p&gt;Running my code on this dataset, I can find a single key pixel, pixel 249, at 9, 10.&lt;/p&gt;&lt;p&gt;Values at this pixel:&lt;/p&gt;&lt;p&gt;a @ 249 == (51, 50, 48)&lt;br /&gt;b @ 249 == (0, 0, 0)&lt;br /&gt;c @ 249 == (130, 115, 96)&lt;br /&gt;d @ 249 == (193, 186, 180)      &lt;br /&gt;&lt;/p&gt;&lt;img src="http://4.bp.blogspot.com/-qYHfznfuRIQ/VpadnYmWzvI/AAAAAAAAAxA/_zOJI-bQvLE/s1600/memorize-enlarged-a-1.png" width="100" height="100"&gt; &lt;img src="http://1.bp.blogspot.com/-14wisfsjFaQ/VpadnmTPqDI/AAAAAAAAAxQ/djN5chUJT1U/s1600/memorize-enlarged-b-1.png" width="100" height="100"&gt; &lt;img src="http://1.bp.blogspot.com/-D7_t8A2Abt0/Vpadn7KvC4I/AAAAAAAAAxY/KqFiF5RPcZE/s1600/memorize-enlarged-c-1.png" width="100" height="100"&gt; &lt;img src="http://3.bp.blogspot.com/-G0U_-8IMwRI/VpadoTmdbqI/AAAAAAAAAxc/TSptlyJoejI/s1600/memorize-enlarged-d-1.png" width="100" height="100"&gt; &lt;p&gt;I can detect any of these four by reading this pixel.&lt;/p&gt;&lt;p&gt;Add another image to the set, deliberately created to force a composite key.&lt;/p&gt;&lt;p&gt;This image, e, has the same value at 9, 10 as image c.&lt;/p&gt;&lt;p&gt;e @ 249 == (130, 115, 96)&lt;/p&gt;&lt;img src="http://1.bp.blogspot.com/-T-_If6fRcfU/VpadoqqtQDI/AAAAAAAAAxg/EeBPiz2v7gY/s1600/memorize-enlarged-e-1.png" width="100" height="100"&gt; &lt;p&gt;Preprocess again and the composite key is pixel 0 and pixel 296 (8, 12).&lt;/p&gt;&lt;p&gt;a @ 0 == (221, 217, 216)&lt;br /&gt;b @ 0 == (221, 217, 216)&lt;br /&gt;c @ 0 == (136, 123, 104)&lt;br /&gt;d @ 0 == (221, 217, 216)&lt;br /&gt;e @ 0 == (136, 123, 104)&lt;/p&gt;&lt;p&gt;a @ 296 == (172, 165, 159)&lt;br /&gt;b @ 296 == (0, 0, 0)&lt;br /&gt;c @ 296 == (184, 158, 131)&lt;br /&gt;d @ 296 == (184, 158, 131)&lt;br /&gt;e @ 296 == (172, 165, 159)&lt;/p&gt;&lt;img src="http://4.bp.blogspot.com/-9QirKmUx-uo/VpadnsuR66I/AAAAAAAAAxE/5hfOPWQ5IGs/s1600/memorize-enlarged-a-2.png" width="100" height="100"&gt; &lt;img src="http://2.bp.blogspot.com/-kAYkVyPQS2A/Vpadn6gBLJI/AAAAAAAAAxM/QSuN76cWaak/s1600/memorize-enlarged-b-2.png" width="100" height="100"&gt; &lt;img src="http://2.bp.blogspot.com/-dqApAiCOvaI/VpadoNfPJtI/AAAAAAAAAxU/maDOygxeCtU/s1600/memorize-enlarged-c-2.png" width="100" height="100"&gt; &lt;img src="http://2.bp.blogspot.com/-22O5WuimJvo/VpadoWFuO0I/AAAAAAAAAxo/USJiJpIJVxY/s1600/memorize-enlarged-d-2.png" width="100" height="100"&gt; &lt;img src="http://4.bp.blogspot.com/-A_PSZpw4pJA/VpadojSU8qI/AAAAAAAAAxk/zQ-MOFPBEHI/s1600/memorize-enlarged-e-2.png" width="100" height="100"&gt; &lt;p&gt;Now I can detect any of these five using two pixel reads.&lt;/p&gt;         &lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/3540153414292929720'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/3540153414292929720'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2012/03/memorize-data.html' title='memorize data'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><media:thumbnail xmlns:media='http://search.yahoo.com/mrss/' url='http://2.bp.blogspot.com/-3HbQAGF0bCI/VpadmhCWVPI/AAAAAAAAAxI/xzcnyuOch8I/s72-c/memorize-a.png' height='72' width='72'/><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-4530063333112839174</id><published>2012-03-05T12:02:00.000-05:00</published><updated>2016-01-13T13:48:46.621-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='c#'/><category scheme='http://www.blogger.com/atom/ns#' term='win32'/><title type='text'>mclip</title><content type='html'>&lt;div id="content"&gt;         &lt;p&gt;Wrote mclip. Automatically converts all copied text to plain text, from the task tray.&lt;/p&gt;&lt;img src="http://1.bp.blogspot.com/-km_4-_Aws-8/Vpab2cu3JYI/AAAAAAAAAwk/SUNqUYlXEHo/s1600/mclip.png" width="128" height="160"&gt;&lt;p&gt;Win32 api:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;static extern int SetClipboardViewer(int hWndNewViewer);&lt;br /&gt;static extern bool ChangeClipboardChain(IntPtr hWndRemove, IntPtr hWndNewNext);&lt;br /&gt;static extern int SendMessage(IntPtr hwnd, int wMsg, IntPtr wParam, IntPtr lParam);&lt;br /&gt;static extern IntPtr GetClipboardOwner();&lt;br /&gt;static extern uint GetWindowThreadProcessId(IntPtr hWnd, IntPtr ProcessId);&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;         &lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/4530063333112839174'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/4530063333112839174'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2012/03/mclip.html' title='mclip'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><media:thumbnail xmlns:media='http://search.yahoo.com/mrss/' url='http://1.bp.blogspot.com/-km_4-_Aws-8/Vpab2cu3JYI/AAAAAAAAAwk/SUNqUYlXEHo/s72-c/mclip.png' height='72' width='72'/><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-581718449610618540</id><published>2012-02-04T11:55:00.000-05:00</published><updated>2016-10-20T14:29:50.291-04:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='optimization'/><category scheme='http://www.blogger.com/atom/ns#' term='c#'/><title type='text'>freedom to use lines in c# </title><content type='html'>&lt;img border="0" src="https://3.bp.blogspot.com/-uUSXTHO84HA/VpfGlAXpFNI/AAAAAAAAA5A/Osv5MH-6rJE/s1600/_postthumb_freedom-to-use-l.png" style="display:none;" /&gt; &lt;div id="content"&gt;A simple test, for critics.&lt;br /&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="k"&gt;static&lt;/span&gt; &lt;span class="kt"&gt;int&lt;/span&gt; &lt;span class="nf"&gt;OneLine&lt;/span&gt;&lt;span class="p"&gt;()&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="m"&gt;1&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;static&lt;/span&gt; &lt;span class="kt"&gt;int&lt;/span&gt; &lt;span class="nf"&gt;TwoLine&lt;/span&gt;&lt;span class="p"&gt;()&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;    &lt;span class="kt"&gt;var&lt;/span&gt; &lt;span class="n"&gt;x&lt;/span&gt; &lt;span class="p"&gt;=&lt;/span&gt; &lt;span class="m"&gt;2&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="n"&gt;x&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;IL:&lt;br /&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="nl"&gt;OneLine:&lt;/span&gt;&lt;br /&gt;&lt;span class="nl"&gt;IL_0000:&lt;/span&gt;  &lt;span class="nf"&gt;ldc.i4.1&lt;/span&gt;    &lt;br /&gt;&lt;span class="nl"&gt;IL_0001:&lt;/span&gt;  &lt;span class="nf"&gt;ret&lt;/span&gt;         &lt;br /&gt;&lt;br /&gt;&lt;span class="nl"&gt;TwoLine:&lt;/span&gt;&lt;br /&gt;&lt;span class="nl"&gt;IL_0000:&lt;/span&gt;  &lt;span class="nf"&gt;ldc.i4.2&lt;/span&gt;    &lt;br /&gt;&lt;span class="nl"&gt;IL_0001:&lt;/span&gt;  &lt;span class="nf"&gt;stloc.0&lt;/span&gt;     &lt;br /&gt;&lt;span class="nl"&gt;IL_0002:&lt;/span&gt;  &lt;span class="nf"&gt;ldloc.0&lt;/span&gt;     &lt;br /&gt;&lt;span class="nl"&gt;IL_0003:&lt;/span&gt;  &lt;span class="nf"&gt;ret&lt;/span&gt;         &lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;JIT optimized assembly:&lt;br /&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="c1"&gt;; return OneLine();&lt;/span&gt;&lt;br /&gt;&lt;span class="err"&gt;00000000&lt;/span&gt;  &lt;span class="nf"&gt;mov&lt;/span&gt;         &lt;span class="nb"&gt;eax&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt; &lt;br /&gt;&lt;span class="err"&gt;00000005&lt;/span&gt;  &lt;span class="nf"&gt;ret&lt;/span&gt; &lt;br /&gt;&lt;br /&gt;&lt;span class="c1"&gt;; return TwoLine();&lt;/span&gt;&lt;br /&gt;&lt;span class="err"&gt;00000000&lt;/span&gt;  &lt;span class="nf"&gt;mov&lt;/span&gt;         &lt;span class="nb"&gt;eax&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;2&lt;/span&gt; &lt;br /&gt;&lt;span class="err"&gt;00000005&lt;/span&gt;  &lt;span class="nf"&gt;ret&lt;/span&gt; &lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;Another example, &lt;code&gt;A&lt;/code&gt; adds one, &lt;code&gt;B&lt;/code&gt; squares.&lt;br /&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="kt"&gt;int&lt;/span&gt; &lt;span class="n"&gt;a&lt;/span&gt; &lt;span class="p"&gt;=&lt;/span&gt; &lt;span class="n"&gt;A&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;B&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="m"&gt;2&lt;/span&gt;&lt;span class="p"&gt;));&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="n"&gt;a&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;vs.&lt;br /&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="kt"&gt;int&lt;/span&gt; &lt;span class="n"&gt;b&lt;/span&gt; &lt;span class="p"&gt;=&lt;/span&gt; &lt;span class="n"&gt;B&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="m"&gt;2&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;&lt;span class="kt"&gt;int&lt;/span&gt; &lt;span class="n"&gt;a&lt;/span&gt; &lt;span class="p"&gt;=&lt;/span&gt; &lt;span class="n"&gt;A&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;b&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="n"&gt;a&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;Compiles to:&lt;br /&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="c1"&gt;; int a = A(B(2));&lt;/span&gt;&lt;br /&gt;&lt;span class="c1"&gt;; return a;&lt;/span&gt;&lt;br /&gt;&lt;span class="err"&gt;00000000&lt;/span&gt;  &lt;span class="nf"&gt;mov&lt;/span&gt;         &lt;span class="nb"&gt;eax&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;5&lt;/span&gt; &lt;br /&gt;&lt;span class="err"&gt;00000005&lt;/span&gt;  &lt;span class="nf"&gt;ret&lt;/span&gt; &lt;br /&gt;&lt;br /&gt;&lt;span class="c1"&gt;; int b = B(2);&lt;/span&gt;&lt;br /&gt;&lt;span class="c1"&gt;; int a = A(b);&lt;/span&gt;&lt;br /&gt;&lt;span class="c1"&gt;; return a;&lt;/span&gt;&lt;br /&gt;&lt;span class="err"&gt;00000000&lt;/span&gt;  &lt;span class="nf"&gt;mov&lt;/span&gt;         &lt;span class="nb"&gt;eax&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;5&lt;/span&gt; &lt;br /&gt;&lt;span class="err"&gt;00000005&lt;/span&gt;  &lt;span class="nf"&gt;ret&lt;/span&gt; &lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;Feel free to use lines.&lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/581718449610618540'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/581718449610618540'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2012/02/freedom-to-use-lines-in-c.html' title='freedom to use lines in c# '/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><media:thumbnail xmlns:media='http://search.yahoo.com/mrss/' url='https://3.bp.blogspot.com/-uUSXTHO84HA/VpfGlAXpFNI/AAAAAAAAA5A/Osv5MH-6rJE/s72-c/_postthumb_freedom-to-use-l.png' height='72' width='72'/><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-4959864594881190776</id><published>2012-01-17T11:51:00.000-05:00</published><updated>2016-01-14T10:59:36.240-05:00</updated><category scheme='http://www.blogger.com/atom/ns#' term='fsm'/><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='javascript'/><title type='text'>js calculator </title><content type='html'>&lt;img border="0" src="http://1.bp.blogspot.com/-c0gyM-HTFlg/VpfF2Y6p3fI/AAAAAAAAA44/KD2xD-EhHsA/s1600/_postthumb_jscalculator.png" style="display:none;" /&gt; &lt;div id="content"&gt;Javascript calculator in 1.5 hours. Impromptu response to more complicated renditions.&lt;br /&gt;&lt;!--&lt;img border="0" src="http://1.bp.blogspot.com/-P8gNEoSROf8/VpaMKLUcTFI/AAAAAAAAAwQ/9Z79GzcqXzY/s1600/image.png" /&gt;&lt;a href="https://www.blogger.com/weblog/static/jscalculator.html"&gt;live example&lt;/a&gt;&lt;br /&gt;--&gt;&lt;img border="0" src="http://3.bp.blogspot.com/-B9rhEW6Yi94/VpaMKKzOzXI/AAAAAAAAAwM/2T3zqVlHODE/s1600/source.png" /&gt;&lt;a href="https://bitbucket.org/remzmike/misc/src/7a1c06ddee69519f3b0c348def69f883e5d19bbd/weblog2012/jscalculator.html?at=default&amp;amp;fileviewer=file-view-default"&gt;full code&lt;/a&gt;&lt;br /&gt;Core function:&lt;br /&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="kd"&gt;function&lt;/span&gt; &lt;span class="nx"&gt;go&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;    &lt;span class="c1"&gt;// r1 - first operand&lt;/span&gt;&lt;br /&gt;    &lt;span class="c1"&gt;// r2 - second operand&lt;/span&gt;&lt;br /&gt;    &lt;span class="c1"&gt;// op - operator&lt;/span&gt;&lt;br /&gt;    &lt;span class="c1"&gt;// eq - equals&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;switch&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;state&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;case&lt;/span&gt; &lt;span class="s1"&gt;'r1'&lt;/span&gt;&lt;span class="o"&gt;:&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;isinput&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;))&lt;/span&gt;&lt;br /&gt;            &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;                &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;r1&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="s1"&gt;''&lt;/span&gt;&lt;span class="o"&gt;==&lt;/span&gt;&lt;span class="s1"&gt;'0'&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="nx"&gt;r1&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="s1"&gt;''&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;                &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;isdupedot&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="nx"&gt;r1&lt;/span&gt;&lt;span class="p"&gt;))&lt;/span&gt; &lt;span class="k"&gt;break&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;r1&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nx"&gt;r1&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="s1"&gt;''&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;display&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;r1&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;                    &lt;br /&gt;            &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;else&lt;/span&gt; &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;isop&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;))&lt;/span&gt;&lt;br /&gt;            &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;state&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="s1"&gt;'op'&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;go&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;            &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;break&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;case&lt;/span&gt; &lt;span class="s1"&gt;'op'&lt;/span&gt;&lt;span class="o"&gt;:&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;isinput&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;))&lt;/span&gt;                &lt;br /&gt;            &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;state&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="s1"&gt;'r2'&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;go&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;                    &lt;br /&gt;            &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;else&lt;/span&gt; &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;isop&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;))&lt;/span&gt;&lt;br /&gt;            &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;opch&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;            &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;break&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;case&lt;/span&gt; &lt;span class="s1"&gt;'r2'&lt;/span&gt;&lt;span class="o"&gt;:&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;isinput&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;))&lt;/span&gt;&lt;br /&gt;            &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;                &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;r2&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="s1"&gt;''&lt;/span&gt;&lt;span class="o"&gt;==&lt;/span&gt;&lt;span class="s1"&gt;'0'&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="nx"&gt;r2&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="s1"&gt;''&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;                &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;isdupedot&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="nx"&gt;r2&lt;/span&gt;&lt;span class="p"&gt;))&lt;/span&gt; &lt;span class="k"&gt;break&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;r2&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nx"&gt;r2&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="s1"&gt;''&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;display&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;r2&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;            &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;else&lt;/span&gt; &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;isop&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;))&lt;/span&gt;&lt;br /&gt;            &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;r1&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nx"&gt;calc&lt;/span&gt;&lt;span class="p"&gt;();&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;r2&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;display&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;r1&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;state&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="s1"&gt;'op'&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;go&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;            &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;else&lt;/span&gt; &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;iseq&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;))&lt;/span&gt;&lt;br /&gt;            &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;state&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="s1"&gt;'eq'&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;go&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;            &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;break&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;case&lt;/span&gt; &lt;span class="s1"&gt;'eq'&lt;/span&gt;&lt;span class="o"&gt;:&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;isinput&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;))&lt;/span&gt;&lt;br /&gt;            &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;r1&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;state&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="s1"&gt;'r1'&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;go&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;            &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;else&lt;/span&gt; &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;isop&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;))&lt;/span&gt;&lt;br /&gt;            &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;state&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="s1"&gt;'op'&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;go&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;            &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;else&lt;/span&gt; &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;iseq&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;ch&lt;/span&gt;&lt;span class="p"&gt;))&lt;/span&gt;&lt;br /&gt;            &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;r1&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nx"&gt;calc&lt;/span&gt;&lt;span class="p"&gt;();&lt;/span&gt;                    &lt;br /&gt;                &lt;span class="nx"&gt;r2&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;                &lt;span class="nx"&gt;display&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nx"&gt;r1&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;                    &lt;br /&gt;            &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;break&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;&lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/4959864594881190776'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/4959864594881190776'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2012/01/js-calculator.html' title='js calculator '/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><media:thumbnail xmlns:media='http://search.yahoo.com/mrss/' url='http://1.bp.blogspot.com/-c0gyM-HTFlg/VpfF2Y6p3fI/AAAAAAAAA44/KD2xD-EhHsA/s72-c/_postthumb_jscalculator.png' height='72' width='72'/><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-8066389789234483851</id><published>2012-01-09T11:37:00.000-05:00</published><updated>2016-01-14T10:48:29.175-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='c#'/><category scheme='http://www.blogger.com/atom/ns#' term='xna'/><category scheme='http://www.blogger.com/atom/ns#' term='multimedia'/><title type='text'>k7 animation &amp; overall tests </title><content type='html'>&lt;img border="0" src="http://1.bp.blogspot.com/-4Hxg1Haxdzg/VpfDQByLMrI/AAAAAAAAA4U/xzPHJX0_iS4/s1600/_postthumb_k7-animation-overall-tests.png" style="display:none;"/&gt; &lt;div id="content"&gt;Testing animation, interpolation, input stream, gamestate. Cropped.&lt;br /&gt;&lt;br /&gt;&lt;div class="separator" style="clear: both; text-align: center;"&gt;&lt;iframe allowfullscreen="" class="YOUTUBE-iframe-video" data-thumbnail-src="https://i.ytimg.com/vi/xIqyz7djjXA/0.jpg" frameborder="0" height="190" src="https://www.youtube.com/embed/xIqyz7djjXA?feature=player_embedded" width="300"&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;br /&gt;Snippet:&lt;br /&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="k"&gt;public&lt;/span&gt; &lt;span class="k"&gt;static&lt;/span&gt; &lt;span class="n"&gt;IEnumerator&lt;/span&gt;&lt;span class="p"&gt;&amp;lt;&lt;/span&gt;&lt;span class="kt"&gt;float&lt;/span&gt;&lt;span class="p"&gt;&amp;gt;&lt;/span&gt; &lt;span class="n"&gt;Interpolator&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="kt"&gt;float&lt;/span&gt; &lt;span class="n"&gt;start&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="kt"&gt;float&lt;/span&gt; &lt;span class="n"&gt;end&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="kt"&gt;float&lt;/span&gt; &lt;span class="n"&gt;duration&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;FnInterp&lt;/span&gt; &lt;span class="n"&gt;fn&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;    &lt;span class="kt"&gt;var&lt;/span&gt; &lt;span class="n"&gt;dt&lt;/span&gt; &lt;span class="p"&gt;=&lt;/span&gt; &lt;span class="n"&gt;g&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="n"&gt;dt&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;    &lt;span class="kt"&gt;double&lt;/span&gt; &lt;span class="n"&gt;time&lt;/span&gt; &lt;span class="p"&gt;=&lt;/span&gt; &lt;span class="m"&gt;0&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;    &lt;span class="kt"&gt;double&lt;/span&gt; &lt;span class="k"&gt;value&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;while&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;time&lt;/span&gt; &lt;span class="p"&gt;+&lt;/span&gt; &lt;span class="n"&gt;dt&lt;/span&gt; &lt;span class="p"&gt;&amp;lt;&lt;/span&gt; &lt;span class="n"&gt;duration&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;time&lt;/span&gt; &lt;span class="p"&gt;+=&lt;/span&gt; &lt;span class="n"&gt;dt&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;value&lt;/span&gt; &lt;span class="p"&gt;=&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;time&lt;/span&gt; &lt;span class="p"&gt;/&lt;/span&gt; &lt;span class="n"&gt;duration&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="p"&gt;*&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;end&lt;/span&gt; &lt;span class="p"&gt;-&lt;/span&gt; &lt;span class="n"&gt;start&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;yield&lt;/span&gt; &lt;span class="nf"&gt;return&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="kt"&gt;float&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;span class="k"&gt;value&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;yield&lt;/span&gt; &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="n"&gt;end&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="p"&gt;...&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="k"&gt;public&lt;/span&gt; &lt;span class="k"&gt;static&lt;/span&gt; &lt;span class="kt"&gt;float&lt;/span&gt; &lt;span class="nf"&gt;pingpong&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;FnInterp&lt;/span&gt; &lt;span class="n"&gt;fn&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="kt"&gt;float&lt;/span&gt; &lt;span class="n"&gt;start&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="kt"&gt;float&lt;/span&gt; &lt;span class="n"&gt;end&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="kt"&gt;float&lt;/span&gt; &lt;span class="n"&gt;time&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;time&lt;/span&gt; &lt;span class="p"&gt;&amp;lt;&lt;/span&gt; &lt;span class="m"&gt;0.5&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;time&lt;/span&gt; &lt;span class="p"&gt;=&lt;/span&gt; &lt;span class="n"&gt;time&lt;/span&gt; &lt;span class="p"&gt;*&lt;/span&gt; &lt;span class="m"&gt;2&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="nf"&gt;interpolate&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;start&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;end&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;time&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;fn&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;else&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;time&lt;/span&gt; &lt;span class="p"&gt;=&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="kt"&gt;float&lt;/span&gt;&lt;span class="p"&gt;)(&lt;/span&gt;&lt;span class="n"&gt;time&lt;/span&gt; &lt;span class="p"&gt;-&lt;/span&gt; &lt;span class="m"&gt;0.5&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="p"&gt;*&lt;/span&gt; &lt;span class="m"&gt;2&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="nf"&gt;interpolate&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;end&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;start&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;time&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;fn&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;                &lt;br /&gt;    &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;&lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/8066389789234483851'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/8066389789234483851'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2012/01/k7-animation-overall-tests.html' title='k7 animation &amp; overall tests '/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><media:thumbnail xmlns:media='http://search.yahoo.com/mrss/' url='http://1.bp.blogspot.com/-4Hxg1Haxdzg/VpfDQByLMrI/AAAAAAAAA4U/xzPHJX0_iS4/s72-c/_postthumb_k7-animation-overall-tests.png' height='72' width='72'/><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-8287023133244069227</id><published>2012-01-01T11:02:00.000-05:00</published><updated>2016-01-14T10:47:59.394-05:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='opengl'/><category scheme='http://www.blogger.com/atom/ns#' term='python'/><category scheme='http://www.blogger.com/atom/ns#' term='multimedia'/><title type='text'>k8</title><content type='html'>&lt;img border="0" src="http://3.bp.blogspot.com/-xJR5D_r1S4o/VpfDIQ2SfjI/AAAAAAAAA4M/IlAYTn1OJ4M/s1600/_postthumb_k8.png" style="display:none;"/&gt; &lt;div id="content"&gt;Conglomerated testing of quadtree, messaging, loops, cython. Lights Out logic.&lt;br /&gt;&lt;br /&gt;&lt;div class="separator" style="clear: both; text-align: center;"&gt;&lt;iframe allowfullscreen="" class="YOUTUBE-iframe-video" data-thumbnail-src="https://i.ytimg.com/vi/KIaNc7AJYo0/0.jpg" frameborder="0" height="480" src="https://www.youtube.com/embed/KIaNc7AJYo0?feature=player_embedded" width="480"&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;br /&gt;Snippet:&lt;br /&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="k"&gt;def&lt;/span&gt; &lt;span class="nf"&gt;make_message_tile_toggle&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;f&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;t&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;spread&lt;/span&gt;&lt;span class="o"&gt;=&lt;/span&gt;&lt;span class="bp"&gt;True&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;def&lt;/span&gt; &lt;span class="nf"&gt;message_tile_toggle&lt;/span&gt;&lt;span class="p"&gt;():&lt;/span&gt;&lt;br /&gt;        &lt;span class="n"&gt;t&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;lit&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="ow"&gt;not&lt;/span&gt; &lt;span class="n"&gt;t&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;lit&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="n"&gt;t&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;lit&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;            &lt;span class="n"&gt;t&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;sprite&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;color&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;t&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;litcolor&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;else&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;            &lt;span class="n"&gt;t&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;sprite&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;color&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;t&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;unlitcolor&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="n"&gt;spread&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;            &lt;span class="c"&gt;# also send messages to neighbors&lt;/span&gt;&lt;br /&gt;            &lt;span class="c"&gt;# 678&lt;/span&gt;&lt;br /&gt;            &lt;span class="c"&gt;# 345&lt;/span&gt;&lt;br /&gt;            &lt;span class="c"&gt;# 012&lt;/span&gt;&lt;br /&gt;            &lt;span class="n"&gt;neighbormap&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;                &lt;span class="mi"&gt;0&lt;/span&gt; &lt;span class="p"&gt;:&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;3&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;),&lt;/span&gt;&lt;br /&gt;                &lt;span class="mi"&gt;1&lt;/span&gt; &lt;span class="p"&gt;:&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;4&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;2&lt;/span&gt;&lt;span class="p"&gt;),&lt;/span&gt;&lt;br /&gt;                &lt;span class="mi"&gt;2&lt;/span&gt; &lt;span class="p"&gt;:&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;5&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;),&lt;/span&gt;&lt;br /&gt;                &lt;span class="mi"&gt;3&lt;/span&gt; &lt;span class="p"&gt;:&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;6&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;4&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;),&lt;/span&gt;&lt;br /&gt;                &lt;span class="mi"&gt;4&lt;/span&gt; &lt;span class="p"&gt;:&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;3&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;5&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;7&lt;/span&gt;&lt;span class="p"&gt;),&lt;/span&gt;&lt;br /&gt;                &lt;span class="mi"&gt;5&lt;/span&gt; &lt;span class="p"&gt;:&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;2&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;4&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;8&lt;/span&gt;&lt;span class="p"&gt;),&lt;/span&gt;&lt;br /&gt;                &lt;span class="mi"&gt;6&lt;/span&gt; &lt;span class="p"&gt;:&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;3&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;7&lt;/span&gt;&lt;span class="p"&gt;),&lt;/span&gt;&lt;br /&gt;                &lt;span class="mi"&gt;7&lt;/span&gt; &lt;span class="p"&gt;:&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;4&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;6&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;8&lt;/span&gt;&lt;span class="p"&gt;),&lt;/span&gt;&lt;br /&gt;                &lt;span class="mi"&gt;8&lt;/span&gt; &lt;span class="p"&gt;:&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;5&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;7&lt;/span&gt;&lt;span class="p"&gt;),&lt;/span&gt;&lt;br /&gt;            &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;i&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="n"&gt;neighbormap&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="n"&gt;t&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;num&lt;/span&gt;&lt;span class="p"&gt;]:&lt;/span&gt;&lt;br /&gt;                &lt;span class="n"&gt;neighbor&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;Game&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;actors&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="s"&gt;'tiles'&lt;/span&gt;&lt;span class="p"&gt;][&lt;/span&gt;&lt;span class="n"&gt;i&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;br /&gt;                &lt;span class="n"&gt;neighbor&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;messages&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;append&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;make_message_tile_toggle&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;t&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;neighbor&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="bp"&gt;False&lt;/span&gt;&lt;span class="p"&gt;))&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="n"&gt;message_tile_toggle&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;&lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/8287023133244069227'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/8287023133244069227'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2012/01/k8.html' title='k8'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><media:thumbnail xmlns:media='http://search.yahoo.com/mrss/' url='http://3.bp.blogspot.com/-xJR5D_r1S4o/VpfDIQ2SfjI/AAAAAAAAA4M/IlAYTn1OJ4M/s72-c/_postthumb_k8.png' height='72' width='72'/><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-1922292702348137828</id><published>2008-09-03T17:00:00.000-04:00</published><updated>2016-10-31T17:02:47.811-04:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='graphics'/><category scheme='http://www.blogger.com/atom/ns#' term='python'/><title type='text'>pathfinding through perlin noise</title><content type='html'>a* pathfinding through perlin noise in python&lt;br&gt; &lt;a href="https://4.bp.blogspot.com/-Nw1X7Ir5LFw/WBew5Rp_HUI/AAAAAAAACNM/iw20ZbFYYpgESVA079TAuawpEq4gUV80wCLcB/s1600/astar-generic-noise-perlin.png" imageanchor="1" &gt;&lt;img border="0" src="https://4.bp.blogspot.com/-Nw1X7Ir5LFw/WBew5Rp_HUI/AAAAAAAACNM/iw20ZbFYYpgESVA079TAuawpEq4gUV80wCLcB/s1600/astar-generic-noise-perlin.png" /&gt;&lt;/a&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/1922292702348137828'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/1922292702348137828'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2008/09/blog-post.html' title='pathfinding through perlin noise'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><media:thumbnail xmlns:media='http://search.yahoo.com/mrss/' url='https://4.bp.blogspot.com/-Nw1X7Ir5LFw/WBew5Rp_HUI/AAAAAAAACNM/iw20ZbFYYpgESVA079TAuawpEq4gUV80wCLcB/s72-c/astar-generic-noise-perlin.png' height='72' width='72'/><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-95431752115580269</id><published>2006-01-01T11:09:00.000-05:00</published><updated>2016-08-14T11:10:23.963-04:00</updated><category scheme='http://www.blogger.com/atom/ns#' term='music'/><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='python'/><category scheme='http://www.blogger.com/atom/ns#' term='desktop'/><title type='text'>bmuse</title><content type='html'>    &lt;p&gt;Python mp3 player.&lt;/p&gt;&lt;p&gt;Features:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;familiar foobar2000 ui&lt;/li&gt;&lt;li&gt;run with Tk or Qt ui&lt;/li&gt;&lt;li&gt;fmodex sound support&lt;/li&gt;&lt;li&gt;spectrum visualizer&lt;/li&gt;&lt;li&gt;yml playlists&lt;/li&gt;&lt;li&gt;listening statistics&lt;/li&gt;&lt;li&gt;song id by hash&lt;/li&gt;&lt;li&gt;pyrex optimizations&lt;/li&gt;&lt;li&gt;ui focus on playlists&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Todo:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;acoustid fingerprint instead of custom hash&lt;/li&gt;&lt;li&gt;gapless playback with setSubSoundSentence&lt;/li&gt;&lt;li&gt;interactive interpreter/debug console&lt;/li&gt;&lt;li&gt;"new" qt 4.2 systrayicon support&lt;/li&gt;&lt;li&gt;select many tracks, show total duration in status bar&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Screenshot:&lt;/p&gt;&lt;p&gt;&lt;img alt="bmuse screenshot" src="https://044ddf27-a-62cb3a1a-s-sites.googlegroups.com/site/remzmike/bmuse.png?attachauth=ANoY7cqvAuM8a2UwJB8dsh9ZbMLevl74kHadeimlk1Hw3KeoQG1GQ1bKF4nBC6a3Ay7uetM6AeFLo9e3CJJQHw2IcG_G07lWbPFWjh8C6HC7zRI3-_nFAmOeI1ujXaLcGkwnbHMxV96udSxHlkShJvgftmMSBa1krMyrgJHBu6jwCUUbvMpYWuSIuqqJ_bjdnsZ_M9AV0rto7reS_6c6IOuo47DEMhR_Sg%3D%3D&amp;attredirects=0" /&gt;&lt;/p&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/95431752115580269'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/95431752115580269'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2006/01/bmuse.html' title='bmuse'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-1907337612323635526</id><published>2004-04-21T16:54:00.000-04:00</published><updated>2016-10-31T17:03:34.261-04:00</updated><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='graphics'/><category scheme='http://www.blogger.com/atom/ns#' term='javascript'/><title type='text'>color picker</title><content type='html'>24-bit javascript colorpicker from scratch&lt;br&gt; &lt;a href="https://1.bp.blogspot.com/-omq_nV5LkIc/WBevdwNTnLI/AAAAAAAACM4/frl7El27jE4S1e8gW65IZXPeeWIzoXp9ACLcB/s1600/colorpicker_2004_safe.png" imageanchor="1" &gt;&lt;img border="0" src="https://1.bp.blogspot.com/-omq_nV5LkIc/WBevdwNTnLI/AAAAAAAACM4/frl7El27jE4S1e8gW65IZXPeeWIzoXp9ACLcB/s1600/colorpicker_2004_safe.png" /&gt;&lt;/a&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/1907337612323635526'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/1907337612323635526'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2004/04/blog-post.html' title='color picker'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><media:thumbnail xmlns:media='http://search.yahoo.com/mrss/' url='https://1.bp.blogspot.com/-omq_nV5LkIc/WBevdwNTnLI/AAAAAAAACM4/frl7El27jE4S1e8gW65IZXPeeWIzoXp9ACLcB/s72-c/colorpicker_2004_safe.png' height='72' width='72'/><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-3330316973429787806</id><published>2004-04-20T11:03:00.000-04:00</published><updated>2016-08-14T11:03:57.300-04:00</updated><category scheme='http://www.blogger.com/atom/ns#' term='c++'/><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='plugin'/><category scheme='http://www.blogger.com/atom/ns#' term='c'/><title type='text'>becky scrollview plugin</title><content type='html'>                        &lt;p&gt;My mail client for many years, &lt;a href="http://www.rimarts.co.jp/becky.htm"&gt;Becky! Internet Mail&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;A simple plugin to scroll the message view while you are in the message list.&lt;/p&gt;&lt;p&gt;ALT-DOWN and ALT-UP - Scroll message by line&lt;br /&gt;ALT-PAGEUP and ALT-PAGEDOWN - Scroll message by page&lt;/p&gt;&lt;p&gt;This mirrors the keyboard convention of other apps.&lt;/p&gt;&lt;p&gt;Snippet:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="kt"&gt;int&lt;/span&gt; &lt;span class="n"&gt;WINAPI&lt;/span&gt; &lt;span class="n"&gt;BKC_OnKeyDispatch&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;HWND&lt;/span&gt; &lt;span class="n"&gt;hWnd&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="kt"&gt;int&lt;/span&gt; &lt;span class="n"&gt;nKey&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="kt"&gt;int&lt;/span&gt; &lt;span class="n"&gt;nShift&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;HWND&lt;/span&gt; &lt;span class="n"&gt;lphMain&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;lphTree&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;lphList&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="n"&gt;lphView&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;    &lt;span class="kt"&gt;int&lt;/span&gt; &lt;span class="n"&gt;result&lt;/span&gt;&lt;span class="o"&gt;=&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;bka&lt;/span&gt;&lt;span class="p"&gt;.&lt;/span&gt;&lt;span class="n"&gt;GetWindowHandles&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="o"&gt;&amp;amp;&lt;/span&gt;&lt;span class="n"&gt;lphMain&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="o"&gt;&amp;amp;&lt;/span&gt;&lt;span class="n"&gt;lphTree&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="o"&gt;&amp;amp;&lt;/span&gt;&lt;span class="n"&gt;lphList&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="o"&gt;&amp;amp;&lt;/span&gt;&lt;span class="n"&gt;lphView&lt;/span&gt;&lt;span class="p"&gt;))&lt;/span&gt; &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;nShift&lt;/span&gt;&lt;span class="o"&gt;==&lt;/span&gt;&lt;span class="mh"&gt;0xfe&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;            &lt;span class="k"&gt;switch&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;nKey&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;                &lt;span class="k"&gt;case&lt;/span&gt; &lt;span class="mi"&gt;38&lt;/span&gt;&lt;span class="o"&gt;:&lt;/span&gt;     &lt;span class="n"&gt;SendMessage&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;lphView&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;WM_VSCROLL&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;span class="n"&gt;result&lt;/span&gt;&lt;span class="o"&gt;=&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;span class="k"&gt;break&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;                &lt;span class="k"&gt;case&lt;/span&gt; &lt;span class="mi"&gt;40&lt;/span&gt;&lt;span class="o"&gt;:&lt;/span&gt;     &lt;span class="n"&gt;SendMessage&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;lphView&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;WM_VSCROLL&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;span class="n"&gt;result&lt;/span&gt;&lt;span class="o"&gt;=&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;span class="k"&gt;break&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;                &lt;span class="k"&gt;case&lt;/span&gt; &lt;span class="mi"&gt;33&lt;/span&gt;&lt;span class="o"&gt;:&lt;/span&gt;     &lt;span class="n"&gt;SendMessage&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;lphView&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;WM_VSCROLL&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;2&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;span class="n"&gt;result&lt;/span&gt;&lt;span class="o"&gt;=&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;span class="k"&gt;break&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;                &lt;span class="k"&gt;case&lt;/span&gt; &lt;span class="mi"&gt;34&lt;/span&gt;&lt;span class="o"&gt;:&lt;/span&gt;     &lt;span class="n"&gt;SendMessage&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;lphView&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;WM_VSCROLL&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;3&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;span class="n"&gt;result&lt;/span&gt;&lt;span class="o"&gt;=&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;span class="k"&gt;break&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;            &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;        &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;}&lt;/span&gt; &lt;span class="k"&gt;else&lt;/span&gt; &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;        &lt;span class="c1"&gt;// MessageBox(NIL,&amp;#39;bkScrollView : GetWindowHandles Failed&amp;#39;,&amp;#39;bkScrollView Error&amp;#39;,MB_OK);&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="n"&gt;result&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt; </content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/3330316973429787806'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/3330316973429787806'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2004/04/bkscrollview.html' title='becky scrollview plugin'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-8839250692179848915</id><published>2004-02-05T11:01:00.000-05:00</published><updated>2016-08-14T11:01:56.707-04:00</updated><category scheme='http://www.blogger.com/atom/ns#' term='delphi'/><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='plugin'/><category scheme='http://www.blogger.com/atom/ns#' term='python'/><title type='text'>tbpyxie</title><content type='html'>    &lt;p&gt;Embedded python scripting for The Bat email client.&lt;/p&gt;&lt;p&gt;First, a python module, named tb, written in Delphi, giving python access to The Bat's template engine.&lt;/p&gt;&lt;p&gt;Functions:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;itemcount - return TB template item count&lt;/li&gt;&lt;li&gt;get - get TB template value&lt;/li&gt;&lt;li&gt;set - set TB template value&lt;/li&gt;&lt;li&gt;geti - get TB template int value&lt;/li&gt;&lt;li&gt;seti - set TB template int value&lt;/li&gt;&lt;li&gt;macro - execute TB macro&lt;/li&gt;&lt;li&gt;param - get TB parameter to this macro call&lt;/li&gt;&lt;li&gt;paramcount - return TB parameter count&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Second, four macros added to the template engine.&lt;/p&gt;&lt;ul&gt;&lt;li&gt;PY - Execute Python code, redirects print&lt;/li&gt;&lt;li&gt;PYX - Evaluate Python expression, return result&lt;/li&gt;&lt;li&gt;EXEC - Execute DOS command, return output&lt;/li&gt;&lt;li&gt;TRIM - Trim whitespace, return result&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;The python module is automatically imported for PY and PYX macros.&lt;/p&gt;&lt;p&gt;Example/tests:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="o"&gt;%&lt;/span&gt;&lt;span class="n"&gt;Py&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;quot;&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;print&lt;/span&gt; &lt;span class="n"&gt;tb&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;seti&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;cursorbody&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;123&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;print&lt;/span&gt; &lt;span class="n"&gt;tb&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;geti&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;cursorbody&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;span class="o"&gt;*&lt;/span&gt;&lt;span class="mi"&gt;2&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;print&lt;/span&gt; &lt;span class="n"&gt;tb&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;seti&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;xyz&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="mi"&gt;111&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;print&lt;/span&gt; &lt;span class="n"&gt;tb&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;geti&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;xyz&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;span class="o"&gt;*&lt;/span&gt;&lt;span class="mi"&gt;2&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;print&lt;/span&gt; &lt;span class="n"&gt;tb&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;geti&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;cursorbody&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;span class="o"&gt;*&lt;/span&gt;&lt;span class="mi"&gt;2&lt;/span&gt;&lt;br /&gt;&lt;span class="s"&gt;&amp;quot;)&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="o"&gt;%&lt;/span&gt;&lt;span class="n"&gt;Exec&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;quot;uptime&amp;quot;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="o"&gt;%&lt;/span&gt;&lt;span class="n"&gt;Py&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;quot;&lt;/span&gt;&lt;br /&gt;&lt;span class="n"&gt;tb&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;set&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;from&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;foonus@example.com&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;print&lt;/span&gt; &lt;span class="n"&gt;tb&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;get&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;from&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;print&lt;/span&gt; &lt;span class="n"&gt;tb&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;get&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;215&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="s"&gt;&amp;quot;)&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="o"&gt;%&lt;/span&gt;&lt;span class="n"&gt;Py&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;quot;&lt;/span&gt;&lt;br /&gt;&lt;span class="n"&gt;tb&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;set&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;215&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;set@example.com&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="s"&gt;&amp;quot;)&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="o"&gt;%&lt;/span&gt;&lt;span class="n"&gt;Py&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;quot;&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;print&lt;/span&gt; &lt;span class="s"&gt;&amp;#39;m:&amp;#39;&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="n"&gt;tb&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;macro&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;&lt;/span&gt;&lt;span class="si"&gt;%%&lt;/span&gt;&lt;span class="s"&gt;FROM&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;print&lt;/span&gt; &lt;span class="s"&gt;&amp;#39;v:&amp;#39;&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="n"&gt;tb&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;value&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;FROM&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;print&lt;/span&gt; &lt;span class="s"&gt;&amp;#39;g:&amp;#39;&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="n"&gt;tb&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;get&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;215&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;print&lt;/span&gt; &lt;span class="s"&gt;&amp;#39;g:&amp;#39;&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="n"&gt;tb&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;get&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;from&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="s"&gt;&amp;quot;)&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="o"&gt;%&lt;/span&gt;&lt;span class="n"&gt;Py&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;quot;phi = 1.618&amp;quot;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="o"&gt;%&lt;/span&gt;&lt;span class="n"&gt;Py&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;quot;print phi&amp;quot;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="o"&gt;%&lt;/span&gt;&lt;span class="n"&gt;Pyx&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;quot;phi&amp;quot;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="o"&gt;%&lt;/span&gt;&lt;span class="n"&gt;Pyx&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;quot;5**5&amp;quot;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="o"&gt;%&lt;/span&gt;&lt;span class="n"&gt;Py&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;quot;&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;x&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="nb"&gt;range&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;10&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;  &lt;span class="k"&gt;print&lt;/span&gt; &lt;span class="nb"&gt;str&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;x&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="s"&gt;&amp;quot;)&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="o"&gt;%&lt;/span&gt;&lt;span class="n"&gt;Py&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;quot;&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;i&lt;/span&gt; &lt;span class="ow"&gt;in&lt;/span&gt; &lt;span class="nb"&gt;range&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;tb&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;paramcount&lt;/span&gt;&lt;span class="p"&gt;()):&lt;/span&gt;&lt;br /&gt;  &lt;span class="k"&gt;print&lt;/span&gt; &lt;span class="s"&gt;&amp;#39;&lt;/span&gt;&lt;span class="si"&gt;%%&lt;/span&gt;&lt;span class="s"&gt;d=&lt;/span&gt;&lt;span class="si"&gt;%%&lt;/span&gt;&lt;span class="s"&gt;s&amp;#39;&lt;/span&gt; &lt;span class="o"&gt;%%&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;i&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;tb&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;param&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;i&lt;/span&gt;&lt;span class="p"&gt;))&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="s"&gt;&amp;quot;,123,456)&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="o"&gt;%&lt;/span&gt;&lt;span class="n"&gt;Py&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;br /&gt;&lt;span class="s"&gt;&amp;quot;&lt;/span&gt;&lt;br /&gt;&lt;span class="kn"&gt;import&lt;/span&gt; &lt;span class="nn"&gt;os&lt;/span&gt;&lt;span class="o"&gt;,&lt;/span&gt; &lt;span class="nn"&gt;sys&lt;/span&gt;&lt;br /&gt;&lt;span class="n"&gt;os&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;environ&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;TMDAHOST&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="s"&gt;&amp;#39;yourmailserver.com&amp;#39;&lt;/span&gt;&lt;br /&gt;&lt;span class="n"&gt;os&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;environ&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;TMDANAME&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="s"&gt;&amp;#39;yourname&amp;#39;&lt;/span&gt;&lt;br /&gt;&lt;span class="n"&gt;os&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;environ&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;TMDAUSER&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="s"&gt;&amp;#39;yourname&amp;#39;&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="kn"&gt;from&lt;/span&gt; &lt;span class="nn"&gt;TMDA.Address&lt;/span&gt; &lt;span class="kn"&gt;import&lt;/span&gt; &lt;span class="n"&gt;DatedAddress&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="n"&gt;tb&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;set&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;replyto&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="nb"&gt;str&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;DatedAddress&lt;/span&gt;&lt;span class="p"&gt;()&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;create&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;yourmail@example.com&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;5d&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)))&lt;/span&gt;&lt;br /&gt;&lt;span class="s"&gt;&amp;quot;&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/8839250692179848915'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/8839250692179848915'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2004/02/tbpyxie.html' title='tbpyxie'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-569121270912234001</id><published>2004-01-01T10:55:00.000-05:00</published><updated>2016-08-14T10:57:29.643-04:00</updated><category scheme='http://www.blogger.com/atom/ns#' term='netflix'/><category scheme='http://www.blogger.com/atom/ns#' term='regex'/><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='python'/><category scheme='http://www.blogger.com/atom/ns#' term='web'/><title type='text'>netflix</title><content type='html'>  &lt;p&gt;Netflix website automation.&lt;/p&gt;&lt;p&gt;1) This script orders your queue by recommendation rating.&lt;/p&gt;&lt;p&gt;&lt;img alt="source glyph" src="https://044ddf27-a-62cb3a1a-s-sites.googlegroups.com/site/remzmike/source.png?attachauth=ANoY7cooUzAG1wlPje1HGXPwu5S7Z4v_3a_Os4Iiz-vqqueu0rrgc60JBO7_YQWz77FxOI6ZCTR1lXprcQ2a1RIq1xewTeNm_yG8-xxr97vnFsIpBllcJpcCfkAvbpYIJX8eVUGPyRHNLIXQnDrWLUhP4evVOxH76Vdu7CBe3oy_ZsbkByqpcAgQ-kXi3X_6A-LJKeo_MoTKpAjYerLxJvwMVnhNTAWDsQ%3D%3D&amp;attredirects=0" /&gt; &lt;a href="https://bitbucket.org/remzmike/misc/src/828ae838955ceea42cd8668231235ad1cfb06dec/weblog2012/orderq.py?at=default&amp;fileviewer=file-view-default"&gt;orderq.py&lt;/a&gt;&lt;/p&gt;&lt;p&gt;2) Browser.py - 100 lines of header/cookie/session handling. Mimic a real browser.&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="n"&gt;web&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;Browser&lt;/span&gt;&lt;span class="p"&gt;()&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="n"&gt;web&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;visit&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;https://www.netflix.com/Login&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;span class="n"&gt;body&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;  &lt;span class="s"&gt;&amp;#39;nextpage&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;https://www.netflix.com/Default&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;br /&gt;  &lt;span class="s"&gt;&amp;#39;email&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;span class="n"&gt;username&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;br /&gt;  &lt;span class="s"&gt;&amp;#39;movieid&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;br /&gt;  &lt;span class="s"&gt;&amp;#39;trkid&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;    &lt;br /&gt;  &lt;span class="s"&gt;&amp;#39;password1&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;span class="n"&gt;password&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;br /&gt;  &lt;span class="s"&gt;&amp;#39;SubmitButton&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;Click Here to Continue&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;br /&gt;&lt;span class="p"&gt;}&lt;/span&gt;  &lt;br /&gt;&lt;span class="n"&gt;web&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;visit&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;https://www.netflix.com/Login&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;POST&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;body&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="n"&gt;web&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;visit&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;https://www.netflix.com/Queue&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;  &lt;p&gt;3) NetflixQueue - 30 lines, parse netflix queue and movie properties from html with regex.&lt;/p&gt;&lt;p&gt;&lt;img alt="source glyph" src="https://044ddf27-a-62cb3a1a-s-sites.googlegroups.com/site/remzmike/source.png?attachauth=ANoY7cooUzAG1wlPje1HGXPwu5S7Z4v_3a_Os4Iiz-vqqueu0rrgc60JBO7_YQWz77FxOI6ZCTR1lXprcQ2a1RIq1xewTeNm_yG8-xxr97vnFsIpBllcJpcCfkAvbpYIJX8eVUGPyRHNLIXQnDrWLUhP4evVOxH76Vdu7CBe3oy_ZsbkByqpcAgQ-kXi3X_6A-LJKeo_MoTKpAjYerLxJvwMVnhNTAWDsQ%3D%3D&amp;attredirects=0" /&gt; &lt;a href="https://bitbucket.org/remzmike/misc/src/828ae838955ceea42cd8668231235ad1cfb06dec/weblog2012/NetflixMovieRX.txt?at=default&amp;fileviewer=file-view-default"&gt;NetflixMovieRX.txt&lt;/a&gt;&lt;br /&gt;&lt;img alt="source glyph" src="https://044ddf27-a-62cb3a1a-s-sites.googlegroups.com/site/remzmike/source.png?attachauth=ANoY7cooUzAG1wlPje1HGXPwu5S7Z4v_3a_Os4Iiz-vqqueu0rrgc60JBO7_YQWz77FxOI6ZCTR1lXprcQ2a1RIq1xewTeNm_yG8-xxr97vnFsIpBllcJpcCfkAvbpYIJX8eVUGPyRHNLIXQnDrWLUhP4evVOxH76Vdu7CBe3oy_ZsbkByqpcAgQ-kXi3X_6A-LJKeo_MoTKpAjYerLxJvwMVnhNTAWDsQ%3D%3D&amp;attredirects=0" /&gt; &lt;a href="https://bitbucket.org/remzmike/misc/src/828ae838955ceea42cd8668231235ad1cfb06dec/weblog2012/NetflixQueueRX.txt?at=default&amp;fileviewer=file-view-default"&gt;NetflixQueueRX.txt&lt;/a&gt;&lt;/p&gt; </content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/569121270912234001'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/569121270912234001'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2004/01/netflix.html' title='netflix'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-6679918532934632533</id><published>2003-11-01T10:51:00.000-05:00</published><updated>2016-08-14T10:52:25.029-04:00</updated><category scheme='http://www.blogger.com/atom/ns#' term='c++'/><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='plugin'/><category scheme='http://www.blogger.com/atom/ns#' term='c'/><title type='text'>playtime for foobar</title><content type='html'>    &lt;p&gt;Rewrite of my playtime winamp plugins for foobar2000, in the required C++.&lt;/p&gt;&lt;p&gt;Stores listening statistics, ratings, and comments in MSSQL via ADO.&lt;/p&gt;&lt;p&gt;The usual hotkey mapping via foobar configuration.&lt;/p&gt;&lt;!--![foo_playtime](/weblog/static/foo_playtime.png)--&gt; &lt;div style="width:100%;overflow:auto;"&gt;&lt;img src='https://044ddf27-a-62cb3a1a-s-sites.googlegroups.com/site/remzmike/foo_playtime.png?attachauth=ANoY7cqbWazVbygXT49WQAjGSL33DKrv1eq4B5VGHak1Xvw8Cqq3peR-dqwjzv0--4-tG5qCctLUsf1VInRXpOP3zARmxW5be7m-N0Rtdap9sTLN4x9WXjW-WxnSdu2tPzHJtY73UqQH76EdVkVkgm2qnQjaMnzDDPtB9PDl-MmF2voYQILc0GmIH71Cx1xHZpNhddOGn-MroqJf01us3VnVAP7sRcKQLA%3D%3D&amp;attredirects=0'&gt;&lt;/div&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/6679918532934632533'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/6679918532934632533'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2003/11/playtime-for-foobar.html' title='playtime for foobar'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-1869997427242431631</id><published>2003-10-21T10:47:00.000-04:00</published><updated>2016-08-14T10:48:36.291-04:00</updated><category scheme='http://www.blogger.com/atom/ns#' term='delphi'/><category scheme='http://www.blogger.com/atom/ns#' term='regex'/><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='c'/><category scheme='http://www.blogger.com/atom/ns#' term='python'/><category scheme='http://www.blogger.com/atom/ns#' term='lua'/><category scheme='http://www.blogger.com/atom/ns#' term='php'/><category scheme='http://www.blogger.com/atom/ns#' term='visualization'/><title type='text'>hattrick overviewer</title><content type='html'>                     &lt;p&gt;Display realtime hattrick match visuals from finite set live text commentary.&lt;/p&gt;&lt;p&gt;Combined lots of my existing software for quick results.&lt;/p&gt;&lt;p&gt;Original process, using pre-existing components:&lt;/p&gt;&lt;ol&gt;&lt;li&gt;Internet Explorer plugin, ieFilter, written in Delphi&lt;/li&gt;&lt;li&gt;IE plugin pipes through local php runtime&lt;/li&gt;&lt;li&gt;PHP generates Lua-like script and calls webservice&lt;/li&gt;&lt;li&gt;Coldfusion webservice runs Delphi CF plugin&lt;/li&gt;&lt;li&gt;Delphi CF plugin, via embedded Lua, modified in C, runs script&lt;/li&gt;&lt;li&gt;Lua-like script creates image using wrapped Delphi code&lt;/li&gt;&lt;/ol&gt;&lt;p&gt;Later process, simplified with newer components:&lt;/p&gt;&lt;ol&gt;&lt;li&gt;Internet Explorer plugin, ieSnake, written in Delphi&lt;/li&gt;&lt;li&gt;IE plugin, via embedded Python, calls CDLL&lt;/li&gt;&lt;li&gt;Delphi CDLL, via embedded Lua, modified in C, runs script&lt;/li&gt;&lt;li&gt;Lua-like script creates image using wrapped Delphi code&lt;/li&gt;&lt;/ol&gt;&lt;p&gt;And lots of regular expressions.&lt;/p&gt;&lt;style&gt;#legend .swatch {     display:inline-block;     width:20px;     height:10px;     border:1px solid gray; } &lt;/style&gt; &lt;h3&gt;Legend&lt;/h3&gt;&lt;p id=legend&gt;Lines:&lt;br&gt;&lt;br&gt;&lt;span class=swatch style="background-color:rgb(255,255,255)"&gt;&lt;/span&gt; pass&lt;br&gt;&lt;span class=swatch style="background-color:rgb(255,255,0)"&gt;&lt;/span&gt; set piece&lt;br&gt;&lt;span class=swatch style="background-color:rgb(161,27,27)"&gt;&lt;/span&gt; home goal&lt;br&gt;&lt;span class=swatch style="background-color:rgb(0,102,204)"&gt;&lt;/span&gt; away goal&lt;br&gt;&lt;span class=swatch style="background-color:rgb(48,48,48)"&gt;&lt;/span&gt; miss/block/stop&lt;br&gt; &lt;br&gt; Rings:&lt;br&gt;&lt;br&gt;&lt;span class=swatch style="background-color:rgb(255,255,0)"&gt;&lt;/span&gt; yellow card&lt;br&gt;&lt;span class=swatch style="background-color:rgb(255,0,0)"&gt;&lt;/span&gt; red card&lt;br&gt;&lt;span class=swatch style="background-color:rgb(169,86,200)"&gt;&lt;/span&gt; bruised&lt;br&gt;&lt;span class=swatch style="background-color:rgb(255,0,0); width:10px; padding:0; margin:0; border-right:0;"&gt;&lt;/span&gt;&lt;span class=swatch style="background-color:rgb(255,255,255); width:10px; padding:0; margin:0;"&gt;&lt;/span&gt; injured&lt;br&gt;&lt;span class=swatch style="background-color:rgb(159,182,159)"&gt;&lt;/span&gt; low stamina&lt;br&gt;&lt;span class=swatch style="background-color:rgb(198,255,129)"&gt;&lt;/span&gt; low experience&lt;br&gt;&lt;span class=swatch style="background-color:rgb(0,0,0)"&gt;&lt;/span&gt; player could not be replaced&lt;br&gt;&lt;/p&gt; &lt;h3&gt;Results&lt;/h3&gt;&lt;!--![](/weblog/static/hattrick-overviewer-4584566.png) ![](/weblog/static/hattrick-overviewer-4058685.png) ![](/weblog/static/hattrick-overviewer-3612151.png) ![](/weblog/static/hattrick-overviewer-4904365.png)--&gt; &lt;p&gt;&lt;img alt="" src="https://044ddf27-a-62cb3a1a-s-sites.googlegroups.com/site/remzmike/hattrick-overviewer-4922492.png?attachauth=ANoY7cq9yFpiNJ0pYeQrj9bj4YZ5YkEO1amgtlz1XfJAHTSFU6-WeYdxsOqPQGnLmXwAnQ6fB2qmP1jnHgBDSFbXz7Vb1AEGsq1pbamfH-e9SWgSen0yto-mKI5LTqRGxefKiwjhPI70lKBjDZ0OC25z4PNFWGNirRwrGI2BBqhAuQ-iJe-TZsqpd3RmnhkkMOBclP5Thf7zeAH9KT5pdAg--As-UZAYkXKHLBvw4hKRwd-G00yEG9I%3D&amp;attredirects=0" /&gt;&lt;/p&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/1869997427242431631'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/1869997427242431631'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2016/08/hattrick-overviewer.html' title='hattrick overviewer'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-8406197504648955157</id><published>2003-02-23T10:41:00.000-05:00</published><updated>2016-08-14T10:42:59.338-04:00</updated><category scheme='http://www.blogger.com/atom/ns#' term='delphi'/><category scheme='http://www.blogger.com/atom/ns#' term='regex'/><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='plugin'/><category scheme='http://www.blogger.com/atom/ns#' term='python'/><title type='text'>ieSnake</title><content type='html'>                       &lt;p&gt;Another plugin for IE. Proxy web content with embedded Python.&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="k"&gt;try&lt;/span&gt;&lt;br /&gt;  &lt;span class="n"&gt;S&lt;/span&gt; &lt;span class="o"&gt;:=&lt;/span&gt; &lt;span class="n"&gt;PyModule&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;hook&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="k"&gt;string&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;Url&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;span class="o"&gt;,&lt;/span&gt;&lt;span class="n"&gt;Ts&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;DataString&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;span class="o"&gt;;&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;except&lt;/span&gt;&lt;br /&gt;  &lt;span class="k"&gt;on&lt;/span&gt; &lt;span class="n"&gt;e&lt;/span&gt;&lt;span class="o"&gt;:&lt;/span&gt;&lt;span class="n"&gt;Exception&lt;/span&gt; &lt;span class="k"&gt;do&lt;/span&gt; &lt;span class="k"&gt;begin&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;S&lt;/span&gt; &lt;span class="o"&gt;:=&lt;/span&gt; &lt;span class="s"&gt;&amp;#39;&amp;lt;b&amp;gt;&amp;#39;&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="n"&gt;e&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;Message&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="s"&gt;&amp;#39;&amp;lt;/b&amp;gt;&amp;#39;&lt;/span&gt;&lt;span class="o"&gt;;&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;for&lt;/span&gt; &lt;span class="n"&gt;i&lt;/span&gt;&lt;span class="o"&gt;:=&lt;/span&gt; &lt;span class="n"&gt;Py&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;Traceback&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;ItemCount&lt;/span&gt;&lt;span class="o"&gt;-&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt; &lt;span class="k"&gt;downto&lt;/span&gt; &lt;span class="mi"&gt;0&lt;/span&gt; &lt;span class="k"&gt;do&lt;/span&gt; &lt;span class="k"&gt;begin&lt;/span&gt;&lt;br /&gt;      &lt;span class="n"&gt;S&lt;/span&gt; &lt;span class="o"&gt;:=&lt;/span&gt; &lt;span class="n"&gt;S&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="s"&gt;&amp;#39;&amp;lt;br&amp;gt;&amp;#39;&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="n"&gt;Py&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;Traceback&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;Items&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="n"&gt;i&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;FileName&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="s"&gt;&amp;#39; (&amp;#39;&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="nb"&gt;inttostr&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;Py&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;Traceback&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;Items&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="n"&gt;i&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;LineNo&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="s"&gt;&amp;#39;) : &amp;#39;&lt;/span&gt; &lt;span class="o"&gt;+&lt;/span&gt; &lt;span class="n"&gt;Py&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;Traceback&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;Items&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="n"&gt;i&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;Context&lt;/span&gt;&lt;span class="o"&gt;;&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;end&lt;/span&gt;&lt;span class="o"&gt;;&lt;/span&gt;&lt;br /&gt;  &lt;span class="k"&gt;end&lt;/span&gt;&lt;span class="o"&gt;;&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;end&lt;/span&gt;&lt;span class="o"&gt;;&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;  &lt;p&gt;Yahoo groups hook:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="kn"&gt;import&lt;/span&gt; &lt;span class="nn"&gt;re&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="k"&gt;def&lt;/span&gt; &lt;span class="nf"&gt;main&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;urlv&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;html&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;  &lt;span class="c"&gt;# automatic continue to message&lt;/span&gt;&lt;br /&gt;  &lt;span class="n"&gt;m&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;re&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;search&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;&amp;lt;a href=&amp;quot;(.*)&amp;quot;&amp;gt;Continue to message&amp;lt;/a&amp;gt;&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;html&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;  &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="n"&gt;m&lt;/span&gt; &lt;span class="o"&gt;!=&lt;/span&gt; &lt;span class="bp"&gt;None&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;html&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;html&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;replace&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;m&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;group&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;),&lt;/span&gt;&lt;span class="n"&gt;m&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;group&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;[ieFilter AUTOMATED]&amp;lt;script&amp;gt;location.href=&amp;quot;&amp;#39;&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="n"&gt;m&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;group&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;1&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;&amp;quot;;&amp;lt;/script&amp;gt;&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;  &lt;span class="c"&gt;# get rid of advertisements&lt;/span&gt;&lt;br /&gt;  &lt;span class="n"&gt;m&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;re&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;search&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;&amp;lt;table border=0 cellpadding=0 cellspacing=0&amp;gt;.*?ADVERTISEMENT.*?&amp;lt;/table&amp;gt;&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;html&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;  &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="n"&gt;m&lt;/span&gt; &lt;span class="o"&gt;!=&lt;/span&gt; &lt;span class="bp"&gt;None&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;html&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;html&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;replace&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;m&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;group&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;),&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;...&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;  &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="n"&gt;html&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;  &lt;p&gt;More elaborate hook:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="kn"&gt;import&lt;/span&gt; &lt;span class="nn"&gt;os.path&lt;/span&gt;&lt;br /&gt;&lt;span class="kn"&gt;import&lt;/span&gt; &lt;span class="nn"&gt;sys&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="k"&gt;def&lt;/span&gt; &lt;span class="nf"&gt;main&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;urlv&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;html&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;  &lt;span class="c"&gt;# if hook exists for this urlv[&amp;#39;path&amp;#39;], call it&lt;/span&gt;&lt;br /&gt;  &lt;span class="n"&gt;moduledir&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;os&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;path&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;dirname&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;sys&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;modules&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="n"&gt;__name__&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;__file__&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;  &lt;span class="n"&gt;hookfile&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;moduledir&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;/hattrick/&amp;#39;&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="n"&gt;urlv&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;path&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;.py&amp;#39;&lt;/span&gt;&lt;br /&gt;  &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="n"&gt;os&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;path&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;isfile&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;hookfile&lt;/span&gt;&lt;span class="p"&gt;):&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;namespace&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="p"&gt;{&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;html&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;span class="n"&gt;html&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;moduledir&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;:&lt;/span&gt;&lt;span class="n"&gt;moduledir&lt;/span&gt;&lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;    &lt;span class="nb"&gt;execfile&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;hookfile&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="n"&gt;namespace&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;html&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="n"&gt;namespace&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;html&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;  &lt;span class="k"&gt;return&lt;/span&gt; &lt;span class="n"&gt;html&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="n"&gt;replace&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;onload=&amp;quot;changeBanner();&amp;quot;&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;  &lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;  &lt;p&gt;Providing custom player details in hattrick:&lt;br /&gt;&lt;img alt="" src="https://044ddf27-a-62cb3a1a-s-sites.googlegroups.com/site/remzmike/ieSnake-hattrick1.png?attachauth=ANoY7cquiI8_nupYSUbDut73mblweDkyfmE7YjTeNm58J11WJ_z5LyZcATZYesDNGxsV--gAGrfgG8vJw_evzxxPZz_wm-krb-3WJlIeIf5a2Bs6ZI3oJjvW884OqDoDrKOWQ8GppHpi2BLeUVUFjotqOFIPYSosddpo3mArgjQ49wjgYk3ur34nJIBiWxhX0d_lN5mn5RFnP6rUP6SHruADXX_uAwN9gA%3D%3D&amp;attredirects=0" /&gt;&lt;/p&gt;&lt;p&gt;And a custom transfer list:&lt;br /&gt;&lt;img alt="" src="https://044ddf27-a-62cb3a1a-s-sites.googlegroups.com/site/remzmike/ieSnake-hattrick2.png?attachauth=ANoY7cpqygwqhUV7nyQ79l82HdoRZRRQ6bS-OpPomNwcDj0xCI6QFkXFXeAfY-olyPK3jGSRLOmEgRZyFtKLMd7Db_7OYxPjIur7Da2xRIhdUF7Y2RJIlAOlu1F-Kz96l92RrzOcDF5jmQ3oC0li1RovJ8XbCdeOEJXuhE-njbUdaPQq02lfiGxy0katu2xMFplUGDJ-VuRknnQYjndpYUGVG3SCgrmUJA%3D%3D&amp;attredirects=0" /&gt;&lt;/p&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/8406197504648955157'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/8406197504648955157'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2003/02/iesnake.html' title='ieSnake'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-3047788349435826851</id><published>2002-12-25T10:39:00.000-05:00</published><updated>2016-08-14T10:49:52.397-04:00</updated><category scheme='http://www.blogger.com/atom/ns#' term='delphi'/><category scheme='http://www.blogger.com/atom/ns#' term='regex'/><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='plugin'/><category scheme='http://www.blogger.com/atom/ns#' term='php'/><title type='text'>ieFilter</title><content type='html'>    &lt;p&gt;A plugin for IE. Pipe web content through local php runtime.&lt;/p&gt;&lt;p&gt;Example, custom hattrick interface:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="cp"&gt;&amp;lt;?&lt;/span&gt; &lt;span class="k"&gt;require_once&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$_SERVER&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;DOCUMENT_ROOT&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;/hattrick/lib/player.php&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt; &lt;span class="cp"&gt;?&amp;gt;&lt;/span&gt;&lt;span class="x"&gt;&lt;/span&gt;&lt;br /&gt;&lt;span class="cp"&gt;&amp;lt;?&lt;/span&gt; &lt;span class="k"&gt;require_once&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$_SERVER&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;DOCUMENT_ROOT&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;/hattrick/lib/skills.php&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt; &lt;span class="cp"&gt;?&amp;gt;&lt;/span&gt;&lt;span class="x"&gt;&lt;/span&gt;&lt;br /&gt;&lt;span class="cp"&gt;&amp;lt;?&lt;/span&gt; &lt;span class="k"&gt;require_once&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$_SERVER&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;DOCUMENT_ROOT&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;]&lt;/span&gt;&lt;span class="o"&gt;.&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;/hattrick/lib/positions.php&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt; &lt;span class="cp"&gt;?&amp;gt;&lt;/span&gt;&lt;span class="x"&gt;&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="cp"&gt;&amp;lt;?&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="nv"&gt;$data&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nv"&gt;$_POST&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;data&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;];&lt;/span&gt; &lt;br /&gt;&lt;br /&gt;    &lt;span class="c1"&gt;// find start&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt; &lt;span class="nb"&gt;preg_match&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;^([0-9]+)(\.)m&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="nv"&gt;$data&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="nv"&gt;$m&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;        &lt;span class="nv"&gt;$data&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nx"&gt;substr&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$data&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="nb"&gt;strpos&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$data&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt;&lt;span class="nv"&gt;$m&lt;/span&gt;&lt;span class="p"&gt;[&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;]));&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;    &lt;span class="nv"&gt;$entries&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="nb"&gt;preg_split&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s1"&gt;&amp;#39;^([0-9]+)(\.)m&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;,&lt;/span&gt; &lt;span class="nv"&gt;$data&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;    &lt;span class="nb"&gt;array_shift&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$entries&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;    &lt;span class="k"&gt;foreach&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt; &lt;span class="nv"&gt;$entries&lt;/span&gt; &lt;span class="k"&gt;as&lt;/span&gt; &lt;span class="nv"&gt;$key&lt;/span&gt; &lt;span class="o"&gt;=&amp;gt;&lt;/span&gt; &lt;span class="nv"&gt;$value&lt;/span&gt; &lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;        &lt;span class="nv"&gt;$player&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="k"&gt;new&lt;/span&gt; &lt;span class="nx"&gt;Player&lt;/span&gt;&lt;span class="p"&gt;;&lt;/span&gt;&lt;br /&gt;        &lt;span class="nv"&gt;$player&lt;/span&gt;&lt;span class="o"&gt;-&amp;gt;&lt;/span&gt;&lt;span class="na"&gt;importfromtransferlist&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$value&lt;/span&gt;&lt;span class="p"&gt;);&lt;/span&gt;&lt;br /&gt;        &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="nv"&gt;$player&lt;/span&gt;&lt;span class="o"&gt;-&amp;gt;&lt;/span&gt;&lt;span class="na"&gt;getage&lt;/span&gt;&lt;span class="p"&gt;()&lt;/span&gt;&lt;span class="o"&gt;&amp;gt;&lt;/span&gt;&lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="p"&gt;{&lt;/span&gt;&lt;br /&gt;            &lt;span class="nv"&gt;$player&lt;/span&gt;&lt;span class="o"&gt;-&amp;gt;&lt;/span&gt;&lt;span class="na"&gt;printdetails&lt;/span&gt;&lt;span class="p"&gt;();&lt;/span&gt;&lt;br /&gt;        &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;    &lt;span class="p"&gt;}&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class="cp"&gt;?&amp;gt;&lt;/span&gt;&lt;span class="x"&gt;&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;  &lt;p&gt;Output:&lt;/p&gt;&lt;p&gt;&lt;img alt="" src="https://044ddf27-a-62cb3a1a-s-sites.googlegroups.com/site/remzmike/ieFilter-hattrick.png?attachauth=ANoY7cqwQ400f7jv5rHjFAXSRws-JQ5Mzz8TX-k8NJyEe2gJUb5RTw76ByMXcSAqgXohMOTvwDmSKoBJC7OpclWmCKLfnKh02pC2ZdIrGnjzt_V5Q3hr_iQLKQfTjelfhFPZ-mm_Ua2LdNtDW6JVcFMq4J7l33XYxAVgfEzEVEplT3CNgCABlrJGrm3VUky_Flf17r9arMWEoXq9BIu0ne_Yfg8dbbHZ-g%3D%3D&amp;attredirects=0" /&gt;&lt;/p&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/3047788349435826851'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/3047788349435826851'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2002/12/a-plugin-for-ie.html' title='ieFilter'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-2834755932273917468</id><published>2002-01-01T10:37:00.000-05:00</published><updated>2016-08-14T10:37:40.479-04:00</updated><category scheme='http://www.blogger.com/atom/ns#' term='delphi'/><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='desktop'/><title type='text'>remind</title><content type='html'>    &lt;p&gt;Focus friendly reminder. My most used free app. Xml data file.&lt;/p&gt;&lt;p&gt;&lt;img alt="" src="https://044ddf27-a-62cb3a1a-s-sites.googlegroups.com/site/remzmike/remind.png?attachauth=ANoY7cqMdkceJxwQyxohfSD6fP1TZ05HPySooQJcwN0FuNyxTv4MAUniOiuf9GvdRaGde5Q8dW4SQqgJpncR158FV4-EiUKqXbL9rlOB0nXK8gfm91gvJ9ovny00gKnDgGkhYtxXldXUA-imrlZ0Jl7fb_9vbsZbD_gKxSD4_w2DrFhYDeymaQNNjnqmNuWXlg75Nn-AGOc_pd3ognG7XlHevZVYFU8VDQ%3D%3D&amp;attredirects=0" /&gt;&lt;/p&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/2834755932273917468'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/2834755932273917468'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2002/01/remind.html' title='remind'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-2277407735706193708</id><published>2001-06-15T10:35:00.000-04:00</published><updated>2016-08-14T10:35:38.355-04:00</updated><category scheme='http://www.blogger.com/atom/ns#' term='delphi'/><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='desktop'/><title type='text'>silva</title><content type='html'>       &lt;p&gt;Autosaving rtf/text notekeeping. Folders are folders. Files are files. Map root directories in ini.&lt;/p&gt;&lt;p&gt;&lt;img alt="" src="https://044ddf27-a-62cb3a1a-s-sites.googlegroups.com/site/remzmike/silva.png?attachauth=ANoY7cp968BVVH39OptvhBkgDgNmwc3gENhQq8qS3tuH1sP7beaSYqxgqeCQBX_5By_pYmdNRZxoW0n8v5E7QAQbCf76AnWu3CDWpUyUfHSjqGBaVvba2r-Z57AsmIm9G9whtp1o9hYGQZAR9DkWewBq5eq3fjbhPP7rSQoxN3tiRgkred0IBvT_osjgiZVLo26keu9NLHr_PVj67B2Bdi68GIZLt8zuCg%3D%3D&amp;attredirects=0" /&gt;&lt;/p&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/2277407735706193708'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/2277407735706193708'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2001/06/silva.html' title='silva'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-7172256662793564918</id><published>2001-05-22T10:31:00.000-04:00</published><updated>2016-08-14T10:33:14.566-04:00</updated><category scheme='http://www.blogger.com/atom/ns#' term='delphi'/><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='pascal'/><category scheme='http://www.blogger.com/atom/ns#' term='plugin'/><category scheme='http://www.blogger.com/atom/ns#' term='win32'/><title type='text'>WinampZ</title><content type='html'>   &lt;p&gt;Two scripts for the Bersirc IRC client in Object Pascal Script.&lt;/p&gt;&lt;p&gt;&lt;a href="https://bitbucket.org/remzmike/misc/src/dfe4dd82100fa262392eb8241cc8191c02d04c05/weblog2012/winampz/WinampAPI.ops?at=default&amp;fileviewer=file-view-default"&gt;WinampAPI.ops&lt;/a&gt; &amp;ndash; General purpose Winamp 2 API wrapper.&lt;/p&gt;&lt;p&gt;&lt;a href="https://bitbucket.org/remzmike/misc/src/dfe4dd82100fa262392eb8241cc8191c02d04c05/weblog2012/winampz/WinampZ.ops?at=default&amp;fileviewer=file-view-default"&gt;WinampZ.ops&lt;/a&gt; &amp;ndash; The minimal WinampZ script itself.&lt;/p&gt;&lt;p&gt;Commands Introduced:&lt;/p&gt;&lt;p&gt;Announce track: /song, /z&lt;br /&gt;Advertise track: /songa, /za&lt;br /&gt;Play random track: /rand, /zr&lt;br /&gt;Open winamp file dialog: /open, /zz&lt;br /&gt;Send track to nick: /send &lt;nick&gt;, /zs &lt;nick&gt;&lt;br /&gt;Get track from advertiser: /ctcp &lt;advertisernick&gt; !ZGET&lt;br /&gt;Toggle zget functionality: /zget      &lt;br /&gt;&lt;/p&gt;&lt;p&gt;Snippet:&lt;/p&gt;&lt;div class="source"&gt;&lt;pre&gt;&lt;code&gt;&lt;span class="c1"&gt;// Random Play&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;procedure&lt;/span&gt; &lt;span class="nf"&gt;zr&lt;/span&gt;&lt;span class="o"&gt;;&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;var&lt;/span&gt; &lt;span class="n"&gt;oldShuffle&lt;/span&gt;&lt;span class="o"&gt;:&lt;/span&gt; &lt;span class="kt"&gt;boolean&lt;/span&gt;&lt;span class="o"&gt;;&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;begin&lt;/span&gt;&lt;br /&gt;  &lt;span class="c1"&gt;// open winamp if it is not already&lt;/span&gt;&lt;br /&gt;  &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;WA_IsRunning&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="k"&gt;then&lt;/span&gt;&lt;br /&gt;  &lt;span class="k"&gt;begin&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;WA_Start&lt;/span&gt;&lt;span class="o"&gt;;&lt;/span&gt;&lt;br /&gt;    &lt;span class="nb"&gt;Sleep&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;WA_DELAY_START&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;span class="o"&gt;;&lt;/span&gt;&lt;br /&gt;  &lt;span class="k"&gt;end&lt;/span&gt;&lt;span class="o"&gt;;&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;  &lt;span class="c1"&gt;// do the shuffle&lt;/span&gt;&lt;br /&gt;  &lt;span class="n"&gt;oldShuffle&lt;/span&gt; &lt;span class="o"&gt;:=&lt;/span&gt; &lt;span class="n"&gt;WA_GetShuffle&lt;/span&gt;&lt;span class="o"&gt;;&lt;/span&gt;&lt;br /&gt;  &lt;span class="k"&gt;if&lt;/span&gt; &lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;WA_GetShuffle&lt;/span&gt; &lt;span class="o"&gt;=&lt;/span&gt; &lt;span class="mi"&gt;0&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt; &lt;span class="k"&gt;then&lt;/span&gt;&lt;br /&gt;    &lt;span class="n"&gt;WA_SetShuffle&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="k"&gt;true&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;span class="o"&gt;;&lt;/span&gt;&lt;br /&gt;  &lt;span class="n"&gt;WA_TrackNext&lt;/span&gt;&lt;span class="o"&gt;;&lt;/span&gt;&lt;br /&gt;  &lt;span class="n"&gt;WZ_OutputInfo&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;Randomized to [&amp;#39;&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="n"&gt;WA_GetTitle&lt;/span&gt;&lt;span class="o"&gt;+&lt;/span&gt;&lt;span class="s"&gt;&amp;#39;]&amp;#39;&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;span class="o"&gt;;&lt;/span&gt;&lt;br /&gt;  &lt;span class="n"&gt;WA_SetShuffle&lt;/span&gt;&lt;span class="p"&gt;(&lt;/span&gt;&lt;span class="n"&gt;oldShuffle&lt;/span&gt;&lt;span class="p"&gt;)&lt;/span&gt;&lt;span class="o"&gt;;&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;  &lt;span class="c1"&gt;// start playing, necessary when winamp was closed or not playing&lt;/span&gt;&lt;br /&gt;  &lt;span class="n"&gt;WA_TrackPlay&lt;/span&gt;&lt;span class="o"&gt;;&lt;/span&gt;&lt;br /&gt;&lt;span class="k"&gt;end&lt;/span&gt;&lt;span class="o"&gt;;&lt;/span&gt;&lt;br /&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt; </content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/7172256662793564918'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/7172256662793564918'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2001/05/winampz.html' title='WinampZ'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-6886691635742825521</id><published>2001-04-10T10:26:00.000-04:00</published><updated>2016-08-14T10:29:03.689-04:00</updated><category scheme='http://www.blogger.com/atom/ns#' term='delphi'/><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='plugin'/><title type='text'>playtime for winamp</title><content type='html'>    &lt;p&gt;Winamp plugin. Logs winamp activity, metadata and ratings. Configurable hotkey.&lt;/p&gt;&lt;p&gt;v1 - 4/10/2001 - log to delimited text&lt;br /&gt;v2 - 4/23/2001 - log to embedded database, odbc/ado access&lt;/p&gt;&lt;p&gt;&lt;img alt="gen_playtime_2.0_config" src="https://044ddf27-a-62cb3a1a-s-sites.googlegroups.com/site/remzmike/gen_playtime_2.0_config.gif?attachauth=ANoY7cogh0jCfCbFA4M0y__pAH69ehCBsXrKx5XKk604ddyG9uRyuhJasepxQe3vWetR44pFBw0yXCftDdi4ksv1J82mBFLGHmCFRtaN4i_4vEuUc57CPajt0jiU4H1i5ptr5VSpFRByIVCEhIh7CoG56pwfczqLMPdik2TFNRas4lTXyA__vvrBlaWVeIv3QEXnMGDEpIerGMwOdEAHfrGMudpze7Us3uZ42SGm9f-5LNtStzpw17U%3D&amp;attredirects=0" /&gt; &lt;img alt="gen_playtime_2.0_rate" src="https://044ddf27-a-62cb3a1a-s-sites.googlegroups.com/site/remzmike/gen_playtime_2.0_rate.gif?attachauth=ANoY7crKYbVL3E1WMzAp3Vd-9-eIJ-uDEdWlQyTWarhf_gDuYbrj5sW_oTaApqk9AzkdiJHxmcIL-7Td0OMqfHbcuiPJm7uB_oB0TX7f9VqO3iNmlmrW4Oceo9fvv80oMxhyh2zOxKNilQnhKRaBAeg0DyCGJYWyUetUPN6_rSbMPZInwzsbZrNpKCWIMRSwsgKJdAncSWGlvZAlhG71QYNQIewhgFzCdkn7yi9H79M7Jh13iZ0N--g%3D&amp;attredirects=0" /&gt;&lt;/p&gt;</content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/6886691635742825521'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/6886691635742825521'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2001/04/playtime-for-winamp.html' title='playtime for winamp'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-9111851898208270867</id><published>2000-08-11T10:25:00.000-04:00</published><updated>2016-08-14T10:25:58.179-04:00</updated><category scheme='http://www.blogger.com/atom/ns#' term='delphi'/><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><title type='text'>recurse</title><content type='html'>    &lt;p&gt;Perform recursive batch command-line operations.&lt;/p&gt;&lt;p&gt;&lt;img alt="" src="https://044ddf27-a-62cb3a1a-s-sites.googlegroups.com/site/remzmike/recurse.gif?attachauth=ANoY7cqy681rTvSq9ZaSLmKhhtrCi9qJslWTjWOm7YgZmC26YrxakzaUFps3PGkT3KBXG-m0aSne3vJ1f-ZmHxaWY2iV5dIJIJ7hdb28v-qCBMqVxCg2GX-HudxGujmgRJQMooKXthBj1R-MztHttElixnw4WaqLIQOXob0LU4TfzCcHoosLec7m22JxuaVIR6yZiTJjsLpDhvXSI9XdTwv_SfIwloTb-g%3D%3D&amp;attredirects=0" /&gt;&lt;/p&gt; </content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/9111851898208270867'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/9111851898208270867'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2000/08/recurse.html' title='recurse'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry><entry><id>tag:blogger.com,1999:blog-957628289710453858.post-7314677303727625947</id><published>2000-08-01T09:56:00.000-04:00</published><updated>2016-08-14T09:57:38.854-04:00</updated><category scheme='http://www.blogger.com/atom/ns#' term='delphi'/><category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/><category scheme='http://www.blogger.com/atom/ns#' term='desktop'/><title type='text'>playlister</title><content type='html'>    &lt;p&gt;Make per-directory playlists recursively. Threaded for ui updates.&lt;/p&gt;&lt;p&gt;&lt;img alt="" src="https://044ddf27-a-62cb3a1a-s-sites.googlegroups.com/site/remzmike/playlister.png?attachauth=ANoY7cp1CcXqSWwKwzAXaunHy3CU4YHp5vdievyKxP8aJcNFJj5CoIACnKu82igDD_Ktf4KJQOQxXG1j0K_Ge0fMLGt8_G12AJVjWiuQ0FOi9rgNclrH5GIa3JHbvy0RdF0oNXt3bNjSpA9--_dY96Jxz7qPphgkNvfaFFR-SwE3_42xE8ZpNS654TgmaqaQJtwG5aXFmR4ApCSc72sPNwzxAhGmV17bhQ%3D%3D&amp;attredirects=0" /&gt;&lt;/p&gt; </content><link rel='edit' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/7314677303727625947'/><link rel='self' type='application/atom+xml' href='https://www.blogger.com/feeds/957628289710453858/posts/default/7314677303727625947'/><link rel='alternate' type='text/html' href='http://remzmike.blogspot.com/2000/08/playlister_1.html' title='playlister'/><author><name>Mike</name><uri>https://plus.google.com/106408498143479538065</uri><email>noreply@blogger.com</email><gd:image rel='http://schemas.google.com/g/2005#thumbnail' width='32' height='32' src='//lh4.googleusercontent.com/-LmKdUuUyzjQ/AAAAAAAAAAI/AAAAAAAACHA/d4K5NadaYDk/s32-c/photo.jpg'/></author><gd:extendedProperty name='commentSource' value='1'/><gd:extendedProperty name='commentModerationMode' value='FILTERED_POSTMOD'/></entry></feed>`