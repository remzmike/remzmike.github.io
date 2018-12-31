---
layout: post
title: "My experience with CI/CD"
date: 2018-09-04
---

# My experience with CI/CD

I am a software developer. This document describes my CI/CD experience.

## TL;DR -- My CI/CD scorecard

1. Using version control<br>
	* YES, over 10 years of experience

2. Commit/Merge frequently
	* YES, over 10 years of experience

3. Automated builds
	* YES, over 10 years of experience<br>
	* scripts written by me
	* tfs triggered builds configured by someone else

4. Automated testing on every commit
	* NO, I have not done this
	* I run tests manually in my personal development
	* I have never worked at a company that ran automated tests after commit-triggered successful builds

5. Automated deployment
	* YES, over 10 years of experience
	* via custom scripts, and once with Microsoft ClickOnce for a desktop app
	* NO experience with any other systems used for automated deployment
    
## Version control tools I have used
 
Ordered by relevance, mostly reverse-chronological.

* TFS
	* about 5 years experience with 3 or more companies between 2009 and the present (2018)
* git
	* I currently use this for personal and contract work
	* I have not used it in a full-time professional setting
* mercurial
	* one year professional experience using mercurial from an ubuntu linux workstation
        * I also used this for a short time before migrating to bazaar vcs for my personal development in the mid 2000s.
	* I performed a comprehensive feature and efficiency comparison of darcs, codeville, mercurial, and bazaar in 2006
		* git was excluded from this round of tests because it wasn't available in Windows at the time
* bazaar vcs
	* Early competitor to mercurial and git.
	* I contributed Windows bug fixes when this was early in development.
        * I used this as my primary personal version control as far back as 2005 until git took over in recent years.
* custom rsync + python
	* rudimentary custom version control powered by python and rsync
	* I developed this for Microbilt Corporation since they had no version control
	* It solved big problems between different teams working on the same product
* subversion SVN    
	* I used this in my early professional development for a few different companies
	* I also used it on a couple of occasions personally
* VAX/VMS versioning filesystem
	* The second command-line interface I learned heavily after MS-DOS
	* I became familiar with this versioning filesystem in the mid-90s
	* I learned software development on this system and took sensible advantage of the automatic versioning of all files over my college years
	* This was an obscure legacy system that I was happy to explore

## Addendum: What is CI/CD?

I believe strongly in definitions, but I often lag behind in knowing what people mean when they use the latest buzzwords. This is deliberate. A term is most at risk of wide misinterpretation while it is gaining popularity. I also find most new terms are just new names and groupings for old things. So, I generally wait for their definition to come to me, like now.

Quotes from the top four google results:

---

Microsoft -- https://docs.microsoft.com/en-us/azure/devops/learn/what-is-continuous-delivery

> "Continuous Integration (CI) is the process of automating the build and testing of code every time a team member commits changes to version control. CI encourages developers to share their code and unit tests by merging their changes into a shared version control repository after every small task completion. Committing code triggers an automated build system to grab the latest code from the shared repository and to build, test, and validate the full master branch (also known as the trunk or main)."

> "Continuous Delivery (CD) is the process to build, test, configure and deploy from a build to a production environment. Multiple testing or staging environments create a Release Pipeline to automate the creation of infrastructure and deployment of applications."

---

Amazon -- https://aws.amazon.com/devops/continuous-integration/

> "Continuous integration is a DevOps software development practice where developers regularly merge their code changes into a central repository, after which automated builds and tests are run. Continuous integration most often refers to the build or integration stage of the software release process and entails both an automation component (e.g. a CI or build service) and a cultural component (e.g. learning to integrate frequently)."

> "Why is Continuous Integration Needed?
In the past, developers on a team might work in isolation for an extended period of time and only merge their changes to the master branch once their work was completed. This made merging code changes difficult and time-consuming, and also resulted in bugs accumulating for a long time without correction. These factors made it harder to deliver updates to customers quickly."

> "With continuous delivery, code changes are automatically built, tested, and prepared for a release to production. Continuous delivery expands upon continuous integration by deploying all code changes to a testing environment and/or a production environment after the build stage."

<img src="/assets/20180904-cicd-microsoft.png">

---

Wikipedia -- https://en.wikipedia.org/wiki/Continuous_delivery
> "In software engineering, continuous integration (CI) is the practice of merging all developer working copies to a shared mainline several times a day.[1] Grady Booch first proposed the term CI in his 1991 method,[2] although he did not advocate integrating several times a day. Extreme programming (XP) adopted the concept of CI and did advocate integrating more than once per day – perhaps as many as tens of times per day."

> "Continuous delivery (CD) is a software engineering approach in which teams produce software in short cycles, ensuring that the software can be reliably released at any time.[1] It aims at building, testing, and releasing software with greater speed and frequency. The approach helps reduce the cost, time, and risk of delivering changes by allowing for more incremental updates to applications in production. A straightforward and repeatable deployment process is important for continuous delivery."

https://en.wikipedia.org/wiki/Continuous_delivery#Relationship_to_continuous_deployment
> "Continuous delivery is sometimes confused with continuous deployment. Some people even use these two terms interchangeably. However, most practitioners tend to clearly distinguish these two terms. The distinction is that under Continuous Deployment we deploy any change to production that passes a series of tests. In contrast, under Continuous Delivery, we ensure that the software can be reliably released at any time, but it is up to a human to decide when to release, usually based on business reasons.[5] In order to do continuous deployment one must be doing continuous delivery.[6]"

<img src="/assets/20180904-cicd-wikipedia.png">

> "Continuous delivery treats the commonplace notion of a deployment pipeline[7] as a lean Poka-Yoke:[8] a set of validations through which a piece of software must pass on its way to release. Code is compiled if necessary and then packaged by a build server every time a change is committed to a source control repository, then tested by a number of different techniques (possibly including manual testing) before it can be marked as releasable."

> "Developers used to a long cycle time may need to change their mindset when working in a CD environment. It is important to understand that any code commit may be released to customers at any point. Patterns such as feature toggles can be very useful for committing code early which is not yet ready for use by end users. Using NoSQL can eliminate the step of data migrations and schema changes, often manual steps or exceptions to a continuous delivery workflow.[9] Other useful techniques for developing code in isolation such as code branching are not obsolete in a CD world, but must be adapted to fit the principles of CD - for example, running multiple long-lived code branches can prove impractical, as a releasable artifact must be built early in the CD process from a single code branch if it is to pass through all phases of the pipeline."

Thoughtworks -- https://www.thoughtworks.com/continuous-integration
> "Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early."

> "Continuous Deployment is closely related to Continuous Integration and refers to the release into production of software that passes the automated tests."

> "Essentially, it is the practice of releasing every good build to users”
    
## Personal perspective on CI/CD experience requirements for software developers


#### Am I going to be defining CI/CD systems or just using them?

* If I am just using them then I am fully confident I would be able to do that.

* If I am defining them, that's fine too. In that case I would do some light research in my spare time and then copy a prototypal workflow of industry best practices. I assume such a thing exists and I assume this is how most people would solve this problem. I do not expect a company would want me to do anything else unless that was their business.