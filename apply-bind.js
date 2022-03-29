
const teacher = {
    firstName: 'Vi',
    lastName: 'Ly',
    getFullName() {
       
        console.log(`${this.firstName} ${this.lastName}`);
    }
}


const button = document.querySelector('button');
console.log(button);

button.onclick = function() {
    console.dir('on click');
    console.log(teacher.getFullName());
}

button.onclick =  teacher.getFullName.bind(teacher);

// chu y: 
// tren chrome ko the hien
// tren firefox thi co xuat hien console.log
