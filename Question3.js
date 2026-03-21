 $(document).ready(function() {
                $('#myTable').DataTable({
                    "ajax": "Employees.json",
                    "columns": [
                        { "data": "id" },
                        { "data": "first_name" },
                        { "data": "last_name" },
                        { "data": "email" },
                        { "data": "department" },
                        { "data": "salary" }
                    ]
                });
            });