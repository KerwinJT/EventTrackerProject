## Event Tracker Project

#### Week 12 Homework for Skill Distillery

### Overview
This application focuses on developing RESTful API endpoints. It has a simple database that allows a user to track Photoshoots and to provide comments. From this, the user will be able to understand how their shoot went and to use these lessons in future shoots. As the user develops a larger record of their events, they will be able to query the database and search by name, keyword, location, and comments.

#### Table of REST Endpoints
Get - api/photoshoots/index - Display all records
Get - api/photoshoots/{id} - Find record by ID
Post - api/photoshoots - Create Photoshoot record
Delete - api/photoshoots/{id} - Delete a record
Put - api/photoshoots/{id} - Update a record
Get - api/photoshoots/name/{keyword} - Find event by name
Get - api/photoshoots/lenses/{keyword} - Find event by lenses used
Get - api/photoshoots/location/{keyword} - Find event by location
Get - api/photoshoots/comments/{keyword} - Find event by comments

### How to Use
To use, the user can use PostMan to query the system using the provided REST Endpoints. These Endpoints provide flexibility in searching for specific photoshoots. The keyword search is simply a string query and will look through the provided field and display any record that contains the keyword string.

### Technologies Used
Eclipse - Atom - MySQL WorkBench - AWS - EC2 - Git - GitHub

### Lessons Learned
From this project, I learned to make RESTful endpoints specific and recognizable. Having these endpoints organized by a common pattern made testing these endpoints through postmant easy. 
