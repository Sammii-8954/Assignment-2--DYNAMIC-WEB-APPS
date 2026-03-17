 let employee = [];

            async function fetchEmployees() {
                try {
                    const response = await fetch('Employees.json');
                    const data = await response.json();
                   allemployee = data.employees;
                  processEmployees(allEmployees);
                } catch (error) {
                    console.error("Fetch Error:", error);
                }
            }

            function processEmployees(data) {

                const sorted = [...data].sort((a,b) => a.age - b.age);

                const fullNames = sorted.map(({ firstName, lastName}) => `${firstName} ${lastName}`);
                console.log("Full Name:", fullNames);

                const totalSalary = sorted.reduce((acc, curr) => acc + curr.salary, 0);
                document.getElementById('totalSalaryDisplay').innerText = `Total Salary: $${totalSalary}`;

                const highEarners = sorted.filter(emp => emp.salary > 55000);
                console.log("High Earners:", highEarners.map(e => e.firstName));

                const demoDiv = document.getElementById('demo');
                demoDiv.innerHTML = '<ul>' + sortedData.map(emp =>
                    '<li>${emp.firstName} ${emp.lastName} - Age: ${emp.age} ($${emp.salary})}</li>'
                ).join('') + '</ul>';

                    localStorage.setItem('sortedEmployees', JSON.stringify(sorted));
            }

            document.getElementById('searchBar').addEventListener('input' , (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const filtered = allEmployees.filter(emp =>
                    emp.firstName.toLowerCase().includes(searchTerm) ||
                    emp.lastName.toLowerCase().includes(searchTerm)
                );
                processEmployees(filtered);
            });

            function checkStorage() {
                console.log(JSON.parse(localStorage.getItem('sortedEmployees'))); }
                function clearStorage() { localStorage.clear(); console.log("Storage Cleared"); }
                
            fetchEmployees();

        
            

            