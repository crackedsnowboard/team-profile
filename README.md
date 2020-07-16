# Template for creating Team profiles
I am builiding a node.js script that will generate a template for a our teams profile that will be displayed in HTML. This should help us have relevenat bio information for our team displayed in a user friendly format as we continue to add additional team members. 

## User Story
As a manager, I want to generate a webpage that displays my team's basic info so that I have quick access to emails and GitHub profiles.

* Every user will have their name, email, and ID number displayed
* Managers will also have their office number displayed
* Engineers will also have their Github pages linked
* Interns will also have their school displayed

## Installation
I used node.js to automate the generation of a team profile using the inquier libary to capture user input from the command line. 

Check out inquirer [Inquirer](https://www.npmjs.com/package/inquirer)
and File Service [FSwrite-node](https://nodejs.org/api/fs.html)

A few key code snippets that helped to build the program:

Using the switch case in the app.js file
```
inquirer
        .prompt([
            {
                type: "list",
                message: "What is your role?",
                name: "teamGenerator",
                choices: ["Manager", "Engineer", "Intern", "Done"]
            },
        ]).then(teamMember => {
            switch (teamMember.teamGenerator) {
                case "Engineer":
                    engineer();
                    break;
                case "Manager":
                    manager();
                    break;
                case "Intern":
                    intern();
                    break;
                case "Done":
                    createTeamList();
                    break;
```

Using a file service library of node.js in app.js to render the collected information to our html file. 
```
function createTeamList () {
     if(!fs.existsSync(OUTPUT_DIR)){
         fs.mkdirSync(OUTPUT_DIR)
     }
     fs.writeFileSync(outputPath, render(createTeam), "utf-8");
     }
```

OOP programming with class and extends in Employee.js file
```
 class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    
```


### Link to deployed Team Profile generator
[Team-Generator](https://github.com/crackedsnowboard/team-profile)

#### GIF of Applicaton

![App](https://media.giphy.com/media/kFBWbKJlNNzQBVVAe3/giphy.gif)


#### Author Links
[LinkedIn](linkedin.com/in/joel-mathen/) <br>
[GitHub](https://github.com/crackedsnowboard)


