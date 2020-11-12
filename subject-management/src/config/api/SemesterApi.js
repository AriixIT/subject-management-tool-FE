const SemesterApi = {
    getSemesters: () => {
        return fetch("http://localhost:9090/semesters")
    },
    getSemester: (id) => {
        return fetch("http://localhost:9090/semesters/" + id)
    }
}

export default SemesterApi;