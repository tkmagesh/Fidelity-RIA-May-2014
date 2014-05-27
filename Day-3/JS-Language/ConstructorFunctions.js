function Employee(id,name,salary){
   if (this.constructor.name !== "Employee")
      return new Employee(id,name,salary);
   this.id = id;
   this.name = name;
   this.salary = salary;
}