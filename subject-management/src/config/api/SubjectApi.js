const SubjectApi = {
    getSubjects: () => {
        return fetch("http://localhost:9090/subjects")
    },
    getSubject: (id) => {
        return fetch("http://localhost:9090/subjects/" + id)
    }
}

export default SubjectApi;