// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

//Create the lunr index for the search

var index = elasticlunr(function () {
  this.addField('title')
  this.addField('author')
  this.addField('layout')
  this.addField('content')
  this.setRef('id')
});

//Add to this index the proper metadata from the Jekyll content



index.addDoc({
  title: "Self Employment",
  author: null,
  layout: "post",
  content: "\n\nSelf Employment\n\nMy name is Mike and I am sometimes self-employed.\n\nIn fact, I have many years of experience working as a self-employed software developer.\n\nThere are two parts to my self-employment:\n\n\n  Product development and licensing, as Efflare Systems.\n  Custom software contracting and consulting, as myself.\n\n\nIn 2015 I separated these two parts, mostly ending my association with Efflare Systems.\n\nCritical Response\n\n\n\n\n  “But wait, how can that be true!?”\n“I DEMAND TO SEE YOUR CLIENT LIST SIR!”\n\n\nI have done contract work for dozens of clients.\nI have also licensed my software to hundreds of customers.\n\nI will attempt to satisfy your skepticism by providing additional details.\n\nSome details will be left out for legal and professional reasons.\n\nI have split this information into three parts.\n\n\n  Contracts\n  Testimonials\n  Licensees\n\n\nThis is the first time much of this information has been released.\n\nPlease contact me if you would like to be removed from this document.\n\nContracts\n\n\n  \n    Edouard J, Microscript, Belgium\nPDF API wrapper using official Adobe API\n  \n  \n    Amy R, President/CEO, Wedding Window\nServer-side Flash rasterization\n  \n  \n    Robert D, Web Agency, Inc.\n24-bit Javascript color picker\n  \n  \n    Ed O, Webmaster, PING\nLossless encoding of 32-bit image data into SWF\n  \n  \n    Lance M, ProSites, Inc.\nEmbedded Lua engine in .NET\n  \n  \n    Alexandre B, EuroTV\nAuto Cropping solution\n  \n  \n    Jeff M, optonline\nBatch processing AJAX solution\n  \n  \n    Chad G, Senior Developer, Carey Color Inc.\nICC Color Profile processing\n  \n  \n    Bethany S, Project Manager, World Wide Internet Publishing Ltd.\nBack-end image generation\n  \n  \n    Josen R, Director of Internet Development, Motorsport Marketing, Inc.\nMultiple image processing solutions\n  \n  \n    Ruben C, President, Sandtex International Corp.\nPython Tcl/Tk UPS desktop tool\n  \n\n\nTestimonials\n\nCarey Color Inc.\nChad Gray, Senior Developer, http://www.careyweb.com/\n\n\n\n  As a long time customer of Efflare’s I can vouch for their expertise and customer service. We first purchased ImageCR and gFont back in 2001.\n\n  Carey Color Inc. is a prepress house.  We organize and distribute millions of digital images for our clients.  We have written many custom digital asset management web applications for our clients and ImageCR, gFont and ImageFlare are at the heart of nearly each one.\n\n  I remember the first time I tried ImageCR back in the Cold Fusion 4.5 days. I could not believe Efflare was recommending running the CFX tag without the &lt;cflock&gt; tag.  This was a sign of a well programmed tool.\n\n  ImageCR, gFont and ImageFlare have proven their worth over an over again with their robust architecture.  They have not missed a beat and I don’t have to worry about them, which leaves me more time to program better applications.\n\n  Efflare as a company has been there every step of the way. Their customer support is top notch and they listen to their customers needs.  I highly recommend Efflare.\n\n\nMotorsport Marketing, Inc.\nJosen Ruiseco, Director of Internet Development, http://www.GoMotorBids.com\n\n\n\n  GoMotorBids.com is the 4th largest auction website on the Internet,\nspecializing in all types of Automotive Memorabilia. We post over 1000\nnew custom images to our website every day. Before we found Efflare, we\nhad to make multiple sizes of each image, then sort them into different\ndirectories. It was a complete nightmare!\n\n  With the help of Efflare’s ImageCR3 and ImageFlare products we now\nupload one image and we’re done. Efflare does all the rest. Their\ncomponents are efficient, easy to use, and very fast. Thanks Efflare.\nI’m a customer for life!\n\n\nWorld Wide Internet Publishing Ltd.\nBethany Smith, Project Manager, http://www.WWIP.com/\n\n\n\n  We have relied on Efflare custom tags for years to resize and watermark images.\nThese tags have dramatically streamlined our web applications.\n\n  On several occasions we’ve needed custom development and Efflare has always impressed with their ability to turn out work quickly and deliver exactly what we needed.\n\n  Without Efflare, we could not provide our customers the solutions we do,\nparticularly in dynamic image manipulation.\n\n  We sincerely recommend Efflare!\n\n\nBall Enterprises\nAnthony Webb, Web Developer\n\n\n\n  I have been using Coldfusion for several years now and have \ntried nearly every image tag out there. One day I came across the\nImageCR tag and decided to try it out. I was absolutely \nblown away at the foresight and thought put into this tag.\nI am by no means a wealthy man and don’t usually buy custom  tags at all,\nbut I must say this tag is without a doubt worth every penny!\n\n  The staff at Efflare are unbelievably helpful and responsive.\nI have never seen such a great team dedicated to making sure you\nfully understand the tag and use it to its full potential.\nThe service and support I got alone justified the purchase of the tag.\n\n  Furthermore, ImageCR is being updated and enhanced daily, as Efflare\nimplements many of the suggestions customers send. Other\ntags simply aren’t as user friendly, and don’t produce near the same\nquality in images while still providing the smallest file size possible.\nI am an extremely satisfied customer and would strongly recommend ImageCR\nto anyone looking for a solution to their imaging needs.\n\n\nSandtex International Corp.\nRuben C, President, http://www.sandtextusa.com/\n\n\n\n  Mike has excellent communication skills, he will work to figure out exactly what you want. He will then provide it before the agreed upon time. Excellent.\n\n\nLicensees\n\nIn addition to custom contracting, I also developed and licensed a niche back-end image processing solution.\n\nHere are some notable clients I picked from my user records.\n\n\n  NASA, USPS, AIG, Bushnell, Ping Golf, Fleer, Crayola, Woodward\n\n\nYou can additionally read an article detailing NASA’s use of my software.\n\n\n  NASA develops style sheets, tools for Web sites\n\n\nFinally, here is a graph of licensees by geoip resolution.\n\n\n",
  id: 0
});
index.addDoc({
  title: "Clean code vs good code",
  author: null,
  layout: "post",
  content: "Clean code vs good code.\n\n\n  “A BIG difference between good programmers and bad programmers is whether they understand this or not.”\n\n\nHere is an on-stream response Casey Muratori gave to complaints about the perception of “messy” code.\n\nTL;DR – “messy code” is not necessarily “bad code”\n\n\n  Somebody was saying on the forums a while back that they felt the code was too messy.\n\n\n\n  And, again, I really wanna stress the fact that I don’t really wanna try to tell people that the way that they code is wrong, because, you know, I feel like\nthat just leads to a lot of pedantic arguments that aren’t particularly constructive.\n\n\n\n  But what I can say is…\n\n\n\n  In my mind nobody should be thinking that this code is messy. This code is exactly what it should be. It’s code that we are writing to figure out how we want to structure our program. And if you’re spending time right now thinking about how to make this code not messy, whatever that means to you, then essentially what you’re doing is you’re wasting time.\n\n\n\n  Right?\n\n\n\n  You’re spending time, that should have been spent thinking about the problem, thinking about the code. And the end state, the end goal, of your program is NOT to have clean code. It’s to have GOOD working code. Cleanliness has nothing to do with those things.\n\n\n\n  If you have the ugliest code in the world that someone would look at and call very messy, but it has no bugs and runs great…\n\n\n\n  Then, it didn’t matter. Right?\n\n\n\n  And so, to the point that we care about how clean code is, we only care about that in so far as it has an effect on our end product.\n\n\n\n  And what we know right now is what we’re trying to do is just define the structure of the code.\n\n\n\n  So none of the code will ship in the game and if it does it’s because it got pulled out and changed around a little, and, you know, put in its proper place.\n\n\n\n  And so, we know that it will clean up over time as we know what it will be.\n\n\n\n  But, prematurely cleaning it is actually worse than just wasting time. It may lead us down the wrong paths and end up making us have to do gyrations to make stuff work together because we segregated it in a bad way too early on.\n\n\n\n  And so I really wanna stress that fact, that like, if the way you look at code is that you think of it as messy or clean, that is a VERY bad habit in my opinion.\n\n\n\n  And so, all I can really do is say as friendly as possible, “Stop thinking that way.”\n\n\n\n  Instead, think about the problem you are trying to solve. When you are done, and to your satisfaction, solving that problem in however messy a way as you can, then that is the time to start thinking about cleanliness of code.\n\n\n\n  And what we mean when we say cleanliness of code there is:\n\n\n\n  \n    Can I find the bugs in it easily?\n    Is it easy for me to understand?\n    Is it easy for me to re-use in the places that I need to re-use it?\n  \n\n\n\n  Those sorts of things; and NEVER some set of prescribed things that somebody said was clean code, because there is no such thing. There is no set of rules that tells you whether a particular set of code is clean based on what the code looks like.\n\n\n\n  It’s only based on what the usage looks like and what the debugging process looks like that actually tells you whether a piece of code is clean or not.\n\n\n\n  And I really can’t stress that enough.\n\n\n\n  A BIG difference between good programmers and bad programmers is whether they understand this or not.\n\n\n–20180912–\n\nSee Also: Semantic Compression\n",
  id: 1
});
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)


var store = [{
  "title": "Self Employment",
  "author": null,
  "layout": "post",
  "link": "/texts/2017-01-17-self-employment/",
}
,{
  "title": "Clean code vs good code",
  "author": null,
  "layout": "post",
  "link": "/texts/2018-09-12-clean-vs-good-code-casey-muratori/",
}
]

//Query

var qd = {}; //Gets values from the URL
location.search.substr(1).split("&").forEach(function(item) {
    var s = item.split("="),
        k = s[0],
        v = s[1] && decodeURIComponent(s[1]);
    (k in qd) ? qd[k].push(v) : qd[k] = [v]
});

function doSearch() {
  var resultdiv = $('#results');
  var query = $('input#search').val();

  //The search is then launched on the index built with Lunr
  var result = index.search(query);
  resultdiv.empty();
  if (result.length == 0) {
    resultdiv.append('<p class="">No results found.</p>');
  } else if (result.length == 1) {
    resultdiv.append('<p class="">Found '+result.length+' result</p>');
  } else {
    resultdiv.append('<p class="">Found '+result.length+' results</p>');
  }
  //Loop through, match, and add results
  for (var item in result) {
    var ref = result[item].ref;
    var searchitem = '<div class="result"><p><a href="'+store[ref].link+'?q='+query+'">'+store[ref].title+'</a></p></div>';
    resultdiv.append(searchitem);
  }
}

$(document).ready(function() {
  if (qd.q) {
    $('input#search').val(qd.q[0]);
    doSearch();
  }
  $('input#search').on('keyup', doSearch);
});
