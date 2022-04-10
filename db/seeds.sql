INSERT INTO department (name)
VALUES ("Web Development"),
       ("Data Science"),
       ("Math"),
       ("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES ("Front End", 70000, 1),
       ("Front End Manager", 100000, 1),
       ("Back End", 80000, 2),
       ("Back End Manager", 120000, 2),
       ("Analyst", 75000, 3),
       ("Analyst Manager", 110000, 3),
       ("Human Resources Rep", 50000, 4),
       ("HR Manager", 90000, 4),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Nathan", "Millburn", 2, NULL),
       ("Any", "Cho", 1, 1),
       ("Taylor", "Thompson", 4, NULL),
       ("Vinnie", "Lopez", 3, 3),
       ("David", "Kelly", 6, NULL),
       ("Austin", "Powers", 5, 5),
       ("Sammy", "Sosa", 8, NULL),
       ("Dylan", "Webs", 7, 7),

       


