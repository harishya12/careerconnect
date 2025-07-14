fetch('http://localhost:5000/jobs')
    .then(response => response.json())
    .then(data => {
        console.log('Jobs:', data);
        // populate job cards here
    })
    .catch(error => {
        console.error('Error fetching jobs:', error);
    });