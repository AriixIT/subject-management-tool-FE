const ExamApi = {
    getExams: () => {
        return fetch("http://localhost:9090/exams")
    },
    getExam: (id) => {
        return fetch("http://localhost:9090/exams/" + id)
    }
}

export default ExamApi;