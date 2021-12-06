let studentdata = fetch('https://raw.githubusercontent.com/reterw/reterw.github.io/main/student.json')
    function showstudent() {
        studentdata

            .then((response) => {
                console.log(response.status)
                return response
            })
            .then((response) => response.json())

            .then(data => {
                document.getElementById("fn").innerText = data.Name.firstname;
                document.getElementById("ln").innerText = data.Name.lastname;
            })

    }