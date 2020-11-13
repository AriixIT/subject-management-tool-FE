const url = "http://localhost:9090/exams";

const ExamApi = {
    getExams: () => {
        return fetch(url)
    },
    getExam: (id) => {
        return fetch(url + "/" + id)
    },
    addExam: (exam) => {
        return fetch(url, {
            body: exam,
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            }
        })
    },
    updateExam: (id, exam) => {
        return fetch(url + "/" + id, {
            body: JSON.stringify(exam),
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }
}

export default ExamApi;