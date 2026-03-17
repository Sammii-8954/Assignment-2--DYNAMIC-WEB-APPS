 $(document).ready(function() {
                $('#myTable').DataTable({
                    "ajax": "MOCK_DATA.json",
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