
const handleOnClick = () => {
    const searchValue = document.getElementById('search').value;
    
    const desiredData = entireData.filter((student) => {
        return student.nama_lengkap.toLowerCase().indexOf(searchValue) !== -1;
    });

    // reset element
    const listOfStudents = document.getElementById('list-of-students');
    listOfStudents.innerHTML = desiredData.length > 0 ? '' : 'Data Tidak Ditemukan!';

    for (const student of desiredData) {
        listOfStudents.append(buildTable(student));
    }
}