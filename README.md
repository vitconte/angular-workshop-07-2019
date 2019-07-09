# angular-workshop-07-2019
# Angular workshop 

## Prerequisites
>Node.js, npm and git

## Install json-server
npm install -g json-server

## Clone Repository
>git clone https://viconte@production.eng.it/gitlab/viconte/sgc.git  NLWeb 

>cd todoapp

## Install npm packages
>npm install

## RUN WITHOUT API JSON SERVER
In todos.component.ts uncomment constructor with MockTodoService and comment the other one. 
constructor(private todoService:MockTodoService) { }
//constructor(private todoService:TodoService) { }

### RUN
ng serve

## RUN WITH API - JSON SERVER
In todos.component.ts uncomment constructor with TodoService and comment the other one. 
//constructor(private todoService:MockTodoService) { }
constructor(private todoService:TodoService) { }

### RUN
json-server --watch db.json
ng serve

## HAVE FUN!
