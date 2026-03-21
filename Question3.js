
$(document).ready(function() {
    $('#myTable').DataTable({
        "ajax": {  
            "url": "Employees.json",
            "dataSrc": "employees"
        },
        "columns": [
            { "data": "id" },
            { "data": "firstName" },
            { "data": "lastName" },
            { "data": "age" },
            { "data": "department" },
            { "data": "salary" }
        ]
    });
});