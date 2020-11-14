const url = "http://localhost:9090/subjects";

const SubjectApi = {
    getSubjects: () => {
        return fetch(url)
    },
    getSubject: (id) => {
        return fetch(url + "/" + id)
    },
    addSubject: (subject) => {
        return fetch(url, {
            body: JSON.stringify(subject),
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            }
        })
    },
    updateSubject: (id, subject) => {
        return fetch(url + "/" + id, {
            body: JSON.stringify(subject),
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            }
        })
    },
    deleteSubject: (id) => {
        return fetch(url + "/" + id, {
            method: 'DELETE'
        })
    }
}

export default SubjectApi;