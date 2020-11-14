const url = "http://localhost:9090/semesters";


const SemesterApi = {
    getSemesters: () => {
        return fetch(url)
    },
    getSemester: (id) => {
        return fetch(url + "/" + id)
    },
    addSemester: (semester) => {
        return fetch(url, {
            body: JSON.stringify(semester),
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            }
        })
    },
    updateSemester: (id, semester) => {
        return fetch(url + "/" + id, {
            body: JSON.stringify(semester),
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            }
        })
    },
    deleteSemester: (id) => {
        return fetch(url + "/" + id, {
            method: 'DELETE'
        })
    }
}

export default SemesterApi;