## How I program ##

I hope this will help people better understand my programming style and background.

I learned procedural programming before I learned object-oriented programming.

I wrote [Telix SALT](https://en.wikipedia.org/wiki/Telix) scripts, [RoboTalk](https://en.wikipedia.org/wiki/RoboWar) bots and feature patches for [DikuMUD](https://en.wikipedia.org/wiki/DikuMUD) in C.

Then I learned this new thing called Java at school. I loved it. OO made good sense to me.

I saw OO as a formalization of similar techniques already being used in C.

I also picked up three new languages to fill gaps where Java was not a good fit; Delphi, Python and Lua.

This was around the turn of the century, so I was using Python 1.6 and Lua 4.

Using these other languages I found I was able to be more naturally productive.

I realized my insistence on thinking from a 'pure' OO perspective was holding me back.

So, I started looking for a better path, and that path led me to the old mollyrocket forums.

There I found a group of people who were already well aware of the problem I was experiencing.

Most of these people would become more and more well known for their programming ability.

This is when I started re-learning how to program.

What did I learn?

All of this:

* [How to Program](http://the-witness.net/news/2014/05/witness-wednesday-on-how-to-program/)  
Jonathan Blow's reply in the comments is the highlight:

> The fallacy you are falling into is that it matters how people think about things.

> To go to the example in the article, you think about “manager”, “contractor”, “employee” as concrete things too, but that doesn’t mean that some kind of an object hierarchy is the best way to implement them.

> The reason object-oriented programming is a seductive idea, and the reason so many believe it, is because “obviously” you can draw these correspondences to categoric distinctions you recognize, so clearly that is how the program “should” be built.

> But what we have learned is that no, really, that’s not true. There is a wholly different set of purely-implementation-level concerns that determine how the program should be built. They don’t have a lot to do with what you perceive as different objects. They only have to do with what the code actually needs to do in order to function.

> That is what Casey is talking about here: Find out what the code really needs to do in order to function, &ast;then&ast; recognize patterns in that system, &ast;then&ast; build abstractions to simplify those patterns.

> This is in contrast to the usual object-oriented way (and many other schools of thought about how to program) in which you a priori decide on abstractions and then fit things into those abstractions. That almost always makes a mess.

> **What we are saying is that when you first sit down and start typing, you just keep things as simple as you can. Over time you will find patterns. Those patterns may be very different for different programs or systems.**

* [Semantic Compression](https://caseymuratori.com/blog_0015)  
Casey Muratori explains how iterate straight-line code.

* ['Best Practices' and the inverted U curve](http://www.opowell.com/post/best-practices-and-the-inverted-u-curve/)  
Oliver Powell talks about balance and extremes.

* [Casey Muratori on clean code](http://www.opowell.com/post/casey-muratori-on-clean-code/)  
Oliver Powell writing about Casey's on-stream comments.

* [Clean code vs good code](https://remzmike.github.io/texts/2018-09-12-clean-vs-good-code-casey-muratori/)  
My transcription of the very same on-stream comments from Casey.  
I learned of Oliver's similar post afterward.

* [Software Quality: A new definition](http://www.opowell.com/post/software-quality/) - Oliver Powell

* [Trust yourself](http://www.opowell.com/post/trust-yourself/) - Oliver Powell

* [Thirteen Years of Bad Game Code](http://etodd.io/2017/03/29/thirteen-years-of-bad-game-code/)  
A programming post by Evan Todd. Not a gamedev post.

* [Execution in the Kingdom of Nouns](https://steve-yegge.blogspot.com/2006/03/execution-in-kingdom-of-nouns.html)  
A detailed Java-oriented perspective from 2006 by Steve Yegge.

* [The Evolution of a Software Engineer](https://medium.com/@webseanhickey/the-evolution-of-a-software-engineer-db854689243)  
A humorous but still accurate perspective from Sean Hickey.


By now you might be wondering, &ldquo;_Does this methodology have a name?_&rdquo;

I don't think so. I keep calling it different things over the years. So do others.

Here are some of the ways I have referred to it in the past:

* coalescent design  
Organic and iterative, the design coalesces into less amorphous forms over time.

* semantic compression  
Because it's a big part of the idea, but not all of it.  

* objects-come-later oriented programming  
Because the objects grow out of fluent flow-oriented programming.

* regular old programming  
Because people were already writing code this way, decades earlier, even with objects.  

* thinking in data and functions before objects...?  
Because some define the problem as a forced coupling of data and functions.

* data-oriented programming...?  
I never called it this, but I think some people did.  
It shares some ideas, but has a different focus.

* carving out the angel...?   
Not really, but I was reminded of this quote while writing:
> Every block of stone has a statue inside it and it is the task of the sculptor to discover it. I saw the angel in the marble and carved until I set him free. &mdash; Michelangelo

Maybe you know of a better name. I've been meaning to ask around.

Whatever you call it, it's something I consider valuable and important.

I believe these are the techniques that have allowed me to write my best code.

I also hope these things will continue their trend of becoming more well known.

-- 20190730 --