 $(document).ready(function() {
                $('#myTable').DataTable({
                    "ajax": {
                       "url": "Employees.json",
                       "dataSrc":"employees"
                          },

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