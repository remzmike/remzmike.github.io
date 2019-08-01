## How I program ##

I hope this will help people better understand my programming style and background.

I learned procedural programming before I learned object-oriented programming.

I wrote [Telix SALT](https://en.wikipedia.org/wiki/Telix) scripts, [RoboTalk](https://en.wikipedia.org/wiki/RoboWar) bots and feature patches for [DikuMUD](https://en.wikipedia.org/wiki/DikuMUD) in C.

Then I learned this new thing called Java at school. I loved it. OO made good sense to me.

I saw OO as a formalization of similar techniques already being used in C.

I also picked up three new languages to fill gaps where Java was not a good fit; Delphi, Python and Lua.

This was around the turn of the century, so I was using Python 1.6 and Lua 4.

Using these other languages I found I was able to be more naturally productive.

I realized an insistence on thinking from a 'pure' OO perspective was holding me back.

So, I started looking for a better path, and that path led me to the old mollyrocket dev forums.

There I found a group of people who were already well aware of the problem I was experiencing.

Most of these people would become more and more well known for their programming ability.

This is when I started re-learning how to program.

What did I learn?

All of this and more:

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

> If you’re not used to programming like this, you may think I’m exaggerating, but you’ll just have to trust me, it’s true. I spend exactly zero time thinking about “objects” or what goes where. The fallacy of “object-oriented programming” is exactly that: that code is at all “object-oriented”. It isn’t. Code is procedurally oriented, and the “objects” are simply constructs that arise that allow procedures to be reused. So if you just let that happen instead of trying to force everything to work backwards, programming becomes immensely more pleasant.

* ['Best Practices' and the inverted U curve](http://www.opowell.com/post/best-practices-and-the-inverted-u-curve/)  
Oliver Powell talks about balance and extremes.

> In the words of Won Chun, “Be skeptical of blind dogma. Expertise is nuanced.” Expertise is finding the point on that curve where you derive enough of the benefits from following that ‘best practice’ to make it worth your while.

* [Casey Muratori on clean code](http://www.opowell.com/post/casey-muratori-on-clean-code/)  
Oliver Powell writing about Casey's on-stream comments.

> It’s easy to gravitate towards the path of least resistance, and focus on things that are superficial, under the belief that they are more useful than they actually are. It’s far harder to focus on what actually matters.

* [Clean code vs good code](https://remzmike.github.io/texts/2018-09-12-clean-vs-good-code-casey-muratori/)  
My transcription of the very same on-stream comments from Casey.  
I learned of Oliver's similar post afterward.

> But, prematurely cleaning it is actually worse than just wasting time. It may lead us down the wrong paths and end up making us have to do gyrations to make stuff work together because we segregated it in a bad way too early on.

* [Software Quality: A new definition](http://www.opowell.com/post/software-quality/) - Oliver Powell

> 1. It solves the problem you set out to solve, and ideally, ONLY that problem.
2. It does so, while efficiently using the hardware underneath you.
3. It is written in a reasonable amount of time

* [Trust yourself](http://www.opowell.com/post/trust-yourself/) - Oliver Powell

> Good programmers tend to have vastly different styles and approaches. There’s no single way to approach programming well. All roads lead to Rome. What’s more important is finding what works for you, and you can only do that by learning to trust your own judgment.

* [Thirteen Years of Bad Game Code](http://etodd.io/2017/03/29/thirteen-years-of-bad-game-code/)  
A programming post by Evan Todd. Not a gamedev post.

> Yes, systems, not objects. Don't shoehorn every problem into an object-oriented abstraction when another abstraction might be a better fit.

* [Execution in the Kingdom of Nouns](https://steve-yegge.blogspot.com/2006/03/execution-in-kingdom-of-nouns.html)  
A detailed Java-oriented perspective from 2006 by Steve Yegge.

> The difference is that when Verbs are allowed to exist independently, you don't need to invent new Noun concepts to hold them.

> I've really come around to what Perl folks were telling me 8 or 9 years ago: "Dude, not everything is an object."

* [Why bad scientific code beats code following "best practices"](http://yosefk.com/blog/why-bad-scientific-code-beats-code-following-best-practices.html) - Yossi Kreinin  
Basically, overengineered code is worse than dumb code.

> Simple-minded, care-free near-incompetence can be better than industrial-strength good intentions paving a superhighway to hell. The "real world" outside the computer is full of such examples.

> Oh, and one really mean observation that I'm afraid is too true to be omitted: idleness is the source of much trouble. A scientist has his science to worry about so he doesn't have time to complexify the code needlessly. Many programmers have no real substance in their work – the job is trivial – so they have too much time on their hands, which they use to dwell on "API design" and thus monstrosities are born.

* ['best practices' ycombinator thread](https://news.ycombinator.com/item?id=12377385)  
Community discussion and arguments from all sides for careful consideration.

> For ages now, I've been telling people that the best best code, produced by the most experienced people, tends to look like novice code that happens to work --- no unnecessary abstractions, limited anticipated extensibility points, encapsulation only where it makes sense. "Best practices", blindly applied, need to die. The GoF book is a bestiary, not an example of sterling software design. IME, it's much more expensive to deal with unnecessary abstraction than to add abstractions as necessary.

> People, think for yourselves! Don't just blindly do what some "Effective $Language" book tells you to do.

* [Software and Mind](http://www.softwareandmind.com/) - Andrei Sorin  
A whole book on 'mechanistic ideology'.

>  Whether addressing programmers or software users, an honest development system simply provides low-level elements and the means to combine them so as to create the higher levels. The low levels come (for programmers, at least) in the form of general-purpose programming languages; and, when practical,
higher levels are available through existing subroutines. Systems that provide only high levels, and claim that it is possible to create any application in this manner, are dishonest: they invariably end up reinstating the low levels in a different, and more complicated, form. These systems are for programming what language machines are for writing: not useful tools, but means of deception and exploitation. Their purpose, we saw, is to induce ignorance and dependence, by consuming our time and preventing us from improving our skills.

> Honest systems allow us to create the higher levels on our own, and to select any subroutines we like. With honest systems, therefore, we can choose any combination of low-level elements and built-in operations. Dishonest systems provide an environment with high starting levels, and add the low levels as a special feature. The software charlatans have reversed, in effect, the principles of programming: instead of a simple system based on low levels, where we can create the high levels independently, they give us a complicated environment based on high levels, where the low levels are provided as “enhancements.” What we had all along in any programming language – the low levels – is presented now as a new and powerful feature of their high-level environment. Instead of programming being the standard development method, and the high levels a natural outcome, they make the high levels the standard method, and turn programming into a complicated extension.

* [The Evolution of a Software Engineer](https://medium.com/@webseanhickey/the-evolution-of-a-software-engineer-db854689243)  
A humorous but still accurate perspective from Sean Hickey.

By now you might be wondering, &ldquo;_Does this methodology have a name?_&rdquo;

I don't think so. I keep calling it different things over the years. So do others.

But the thing is, I think it's just regular programming and we forgot that.

-- 20190730 --

See also: [Software Development Quotes](../2019-08-01-software-development-quotes)