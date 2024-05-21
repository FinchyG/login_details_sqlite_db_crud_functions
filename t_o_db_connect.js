const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./tournament_organiser_db.db');

// retrieving all row
db.all("SELECT * FROM login_details", (error, rows) => {
    rows.forEach((row) => {
        console.log(row);
    })
});

// retrieving one row
db.all("SELECT username, password FROM login_details where username=$username", {
    $username: 'user1'
    },
    (error, rows) => {
        rows.forEach((row) => {
            console.log(row.username + " " + row.password);
    })
});
/*
// inserting a row
db.run(`INSERT INTO login_details(username, password) VALUES(?,?)`, 
    ['user3', 'password3'],
    function(error){
        console.log("New user added with username " + this.lastID);
    }
);
*/
/*
// update a row (one value)
db.run(`UPDATE login_details SET password = ? WHERE username = ?`,
    ['new_password', 'user1'],
    function(error){
        console.log(`Row(s) updated: ${this.changes}`);
    }  
);
*/
/*
  // update a row (multiple values)
db.run(`UPDATE login_details SET username = ?, password = ? WHERE username = ?`,
    ['new_user1', 'new_password', 'user1'],
    function(error){
        console.log(`Row(s) updated: ${this.changes}`);
    }  
);
*/
/*
// delete a row
db.run(`DELETE FROM login_details WHERE username = ?`,
    ['user3'],
    function(error){
        console.log(`Row(s) deleted ${this.changes}`);
    }  
);
*/