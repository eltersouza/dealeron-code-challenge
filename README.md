# DealeronSalesUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `npm install` to install all dependencies of Angular.
Then, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Purpose

This project was created as a brief demonstration of skill and expertise as a result of a code challenge proposed by DealerOn.  
The objective here is to showcase a simple solution for one of the proposed challenges.  
For I have chosen the **Problem Two: Sales Taxes** (for details, please look into _"Description of the problem"_ section). For me it was the closest code challenge related to the companies activities as I've researched about. So it made more sense for me to showcase this.

## TL;DR;

The idea here is pretty straightforward. I wanted to showcase a simple UI that mimics a whole project where the services are providing data locally, but It could easily change the approach to get data from a server. Originally I wanted to create a full project featuring both front and backend applications, but It would take a long time to finish and I'm still on a full time project so it really gives me a limit of how much I can do during the week. Additionally, it would require a long time for DealerOn's staff to evalute it, so I decided to keep it simple.

I kept the idea of a **One Day Project**. I spent 7 hours to do this.  
I really wasn't aiming for a fast paced development, but I wanted to focus on the UI idea while doing what was asked.

The project was created in Angular 13 using Bootstrap 5 as UI framework.

The architecture is pretty simple, easy to understand, easy to maintain and highly expandable. (for details please look into _"Technical Information"_ section)

## Description of the problem

There are a variety of items for sale at a store. When a customer purchases items, they receive a receipt. The receipt lists all of the items purchased, the sales price of each item (with taxes included), the total sales taxes for all items, and the total sales price.

Basic sales tax applies to all items at a rate of 10% of the item’s list price, with the exception of books, food, and medical products, which are exempt from basic sales tax. An import duty (import tax) applies to all imported items at a rate of 5% of the shelf price, with no exceptions.

Write an application that takes input for shopping baskets and returns receipts in the format shown below, calculating all taxes and totals correctly. When calculating the sales tax, round the value up to the nearest 5 cents. For example, if a taxable item costs $5.60, an exact 10% tax would be $0.56, and the final price after adding the rounded tax of $0.60 should be $6.20.

## Technical Information

I need to start this section with some professional philosophy: KEEP IT SIMPLE. I value this principle and I always try to keep stuff as simple as it gets. High complexity code should only be an option when it's necessary.

So, that been said, I prefer to use an Evolutive Architecture approach when I design a project. It means that I start simple and constantly evaluate if a particular item of the project needs to be more complex than It is. Than this higher complexity piece gets broken in more manageable and understandle parts.  
For example: When we need to design a software of high-availability and highly scalable, almost instantly we think in MicroServices. And sometimes we tend to start a microservices project from scratch, that might be a problem in some cases leading to a slower and way more complex development cicle than it should be. Sometimes not all the project will have a high-availability need. Sometimes it's just a piece of the software, so would I make a whole project using microservices approach instead of just breaking up the part that needs to more complexity and let all the simple stuff in a simpler project. So, in that case, I think we should start a project as a Monolith and than break apart the complex parts as microservices. That way we can get all the benefits for both approaches.

When I make a project I always follow good practices of the market to design and develop a highly standartised code that is easy to be maintained by lots of developers. Therefore, SOLID Principles and Design Patterns are always in mind during the development process.

## Architecture

Beginning from the "app" folder, we find (at least) 5 folders: components, pages, models, helpers and services. They are all self explainatory folders, but they create a well organized structure that is easy keep organized while the project grows.  
I'm always following the Single Responsibility Principle, in order to make things simple and maintainable.  
If the project was in another language and framework I would use another approach, like Clean Architecture on C# .Net (core and newer).

## Technologies

*   Angular 13 (w/ Angular CLI)
*   Bootstrap 5.1