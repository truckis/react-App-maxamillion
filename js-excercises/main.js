

/* Callback is what you call when the result of an asyncrounous operation is ready 
The {id: id, git...} is the result in this case*/
function getUser(id, callabck) { 
    setTimeout(() => {
        console.log("Reading users from database")
        callabck({id: id, githubusername: "mdb"})
    }, 2000)
};



/* INVOKING THE FUNCTION getUser */
getUser(1, getRepositories);

// Naming functions to Next them easier 

function getRepositories(user) {
    getRepositories(user.gitHubUserName, getCommits)
}

function getCommits(repos) {
    getCommits(repo, displayCommits)
}

function displayCommits(commits) {
    console.log(commits)
}