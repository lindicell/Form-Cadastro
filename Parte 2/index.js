let contributorsUrl = ""
document.addEventListener('DOMContentLoaded', async () => {
    const repos = document.getElementById("repos")
    
    try {
        let responseRepos = await fetch("https://api.github.com/orgs/twbs/repos");
        let dataRepos = await responseRepos.json()
        contributorsUrl = dataRepos[0].contributors_url
        dataRepos.map(repository => {
            const newElement = document.createElement("li");
            newElement.innerText = repository.name
            repos.appendChild(newElement)
        })
    } catch (error) {
        console.error(error);
    }

    getContributors(contributorsUrl)
    getClosedIssues()
    getOpenIssues()

})

const getContributors = async (contributorsUrl) => {
    const contributorsElement = document.getElementById("contributors")
    try {
        let responseContributors = await fetch(contributorsUrl);
        let dataContributors = await responseContributors.json()

        dataContributors.map(contributors => {
            const newElement = document.createElement("li");
            newElement.innerText = contributors.login
            contributorsElement.appendChild(newElement)
        })
    } catch (error) {
        console.error(error);
    }
}

const getClosedIssues = async() =>{
    const closedIssuesElement = document.getElementById("closed-issues")
    try {
        let responseClosedIssues = await fetch("https://api.github.com/repos/twbs/bootstrap/issues?state=closed");
        let dataClosedIssues = await responseClosedIssues.json()

        dataClosedIssues.map(issues => {
            const newElement = document.createElement("li");
            newElement.innerText = issues.title
            closedIssuesElement.appendChild(newElement)
        })
    } catch (error) {
        console.error(error);
    }

}

const getOpenIssues = async() =>{
    const openIssuesElement = document.getElementById("open-issues")
    try {
        let responseOpenIssues = await fetch("https://api.github.com/repos/twbs/bootstrap/issues?state=open");
        let dataOpenIssues = await responseOpenIssues.json()

        dataOpenIssues.map(issues => {
            const newElement = document.createElement("li");
            newElement.innerText = issues.title
            openIssuesElement.appendChild(newElement)
        })
    } catch (error) {
        console.error(error);
    }

}