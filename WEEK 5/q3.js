class Person{
    constructor(name,age,dob,gender,address,father,mother,city){
        console.log("Constructor called");
        this.name=name;
        this.age=age;
        this.dob=dob;
        this.gender=gender;
        this.father=father;
        this.mother=mother;
        this.address=address;
        this.city=city;
    }
}
const c=new Person("siva",20,"20-nov-2004","male","83A-1,ganga nagar","deva","sudha","cbe");
