// phuong thuc bind tra ve 1 function moi
// co the nhan doi so nhu ham ban dau

this.firstName = 'Zidane'
this.lastName = 'https://learn-tech-tips.blogspot.com'

const teacher = {
    firstName: 'Vi',
    lastName: 'Ly',
    getFullName(params1, params2) {
        console.log( '-------' );
        console.table(params1, params2)
        return `${this.firstName} ${this.lastName}`;
    }
}

const student = {
    firstName: 'Khoa',
    lastName: 'Nguyen',
}

console.log(teacher.getFullName(11, 22));             // Vi Ly

const getTeacherName = teacher.getFullName.bind(student, 1, 2);   // khoa nguyen

// neu muon dung tham so nay thi ko ben bind nen de vay thoi: teacher.getFullName.bind(student); 
console.log(getTeacherName(100, 200));  


// -------
// 11 22
// Vi Ly
// -------
// 1 2
// Khoa Nguyen