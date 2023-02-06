const url = "employees.json";

// Promises
const getEmployeesPromise = () => {
  // Fetching an api
  fetch(url)
    // If the connection succeded, the result will be converted into a json and stored in result
    .then((result) => result.json())
    // Then, the result is an array of employees, which will be destructured into an array
    .then((data) => {
      const { employees } = data;

      // Finally, we will print every employee´s info
      employees.forEach((employee) => {
        console.log(
          `${employee.id}. ${employee.name} works as a ${employee.position}`
        );
      });
    });
};

// Async/Await
const getEmployeesAsyncAwait = async () => {
  // This works almost the same way as getEmployeesPromise()
  const result = await fetch(url);
  const data = await result.json();
  const { employees } = data;
  employees.forEach((employee) => {
    console.log(
      `${employee.id}. ${employee.name} works as a ${employee.position}`
    );
  });
};

// Fetching an api with promises
getEmployeesPromise();
// Fetching an api with async/await
getEmployeesAsyncAwait();
