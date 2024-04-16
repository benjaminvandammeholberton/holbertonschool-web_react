interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Benjamin",
  lastName: "Vandamme",
  age: 34,
  location: "Laval",
};

const student2: Student = {
  firstName: "Camille",
  lastName: "Galodé",
  age: 28,
  location: "Saint-Ouen-Des-Toîts",
};

const studentList: Student[] = [student1, student2];

const table = document.createElement("Table");
const tr = document.createElement("tr");
const th1 = document.createElement("th");
th1.textContent = "firstname";
tr.appendChild(th1);
const th2 = document.createElement("th");
th2.textContent = "lastname";
tr.appendChild(th2);
const th3 = document.createElement("th");
th3.textContent = "age";
tr.appendChild(th3);
const th4 = document.createElement("th");
th4.textContent = "location";
tr.appendChild(th4);
table.appendChild(tr);

for (const student of studentList) {
  const tr = document.createElement("tr");

  Object.values(student).forEach((value) => {
    const td = document.createElement("td");
    td.textContent = value;
    tr.appendChild(td);
  });
  table.appendChild(tr);
}

document.body.appendChild(table);
