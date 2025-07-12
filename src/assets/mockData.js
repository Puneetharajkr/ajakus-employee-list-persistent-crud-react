// 📁 src/assets/mockData.js

const departments = ["Engineering", "Marketing", "HR", "Design", "Sales"];
const roles = [
  "Frontend Developer", "Backend Developer", "Fullstack Engineer",
  "UI/UX Designer", "SEO Specialist", "HR Manager",
  "Product Manager", "QA Engineer", "DevOps Engineer"
];

const generateEmployees = (count = 120) => {
  const employees = [];
  for (let i = 1; i <= count; i++) {
    const firstName = `First${i}`;
    const lastName = `Last${i}`;
    const email = `user${i}@example.com`;
    const department = departments[i % departments.length];
    const role = roles[i % roles.length];
    employees.push({
      id: i,
      firstName,
      lastName,
      email,
      department,
      role
    });
  }
  return employees;
};

export const mockEmployees = generateEmployees();
