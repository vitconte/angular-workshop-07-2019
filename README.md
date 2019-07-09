# angular-workshop-07-2019
# Angular workshop 

## Prerequisites
>Node.js, npm and git

## Install json-server
npm install -g json-server

## Clone Repository
>git clone https://github.com/vitconte/angular-workshop-07-2019.git  NLWeb <br/>
>cd todoapp

## Install npm packages
>npm install

## RUN WITHOUT API
In todos.component.ts uncomment constructor with MockTodoService and comment the other one.
> constructor(private todoService:MockTodoService) { } <br/>
> //constructor(private todoService:TodoService) { } 

### RUN
> ng serve

## RUN WITH API - JSON SERVER
In todos.component.ts uncomment constructor with TodoService and comment the other one.
> //constructor(private todoService:MockTodoService) { } <br/>
> constructor(private todoService:TodoService) { }

### RUN
> json-server --watch db.json <br/>
> ng serve

## HAVE FUN!
