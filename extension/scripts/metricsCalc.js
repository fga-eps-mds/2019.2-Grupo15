
function calcPercentCommits(commitsData, userName){
    let totalCommits = 0
    for(user in commitsData)
        totalCommits += commitsData[user].commits

    let userCommits = commitsData.filter((user)=>{
        return user.name === userName
    })

    

    let percent = ((+userCommits[0].commits) / (+totalCommits)).toString() * 100    
    return [totalCommits, userCommits[0].commits, percent]
}


function calcPercentOpenedIssues(rankingData , userName){
    let totalOpenedIssues = 0
    for(user in rankingData){
        if (rankingData[user].opened_issues != undefined)
            totalOpenedIssues += rankingData[user].opened_issues
    }
    let userOpenedIssues = rankingData.filter((user)=>{
        return user.name === userName
    })
    let percent = ((+userOpenedIssues[0].opened_issues) / (+totalOpenedIssues)).toString() * 100

    return [totalOpenedIssues, userOpenedIssues[0].opened_issues, percent]
}

//closed_issues always 0 in the server response
function calcPercentClosedIssues(rankingData, userName){
    let totalClosedIssues = 0

    for(user in rankingData){
        if(rankingData[user].closed_issues != undefined)
            totalClosedIssues += rankingData[user].closed_issues
    }

    let userClosedIssues = rankingData.filter((user)=>{
        return user.name === userName
    })

    let percent = ((+userClosedIssues[0].closed_issues) / (+totalClosedIssues)).toString() * 100

    return [percent]
}


function calcPercentMergedPullRequest(rankingData , userName){
    let totalPrMerged = 0
    for(user in rankingData){
        if(rankingData[user].merged_pull_requests != undefined)
            totalPrMerged += rankingData[user].merged_pull_requests
    }

    let userMergedPrs = rankingData.filter((user)=>{
        return user.name === userName
    })

  
    let percent = ((+userMergedPrs[0].merged_pull_requests) / (+totalPrMerged)).toString() * 100

 
    return [totalPrMerged, userMergedPrs[0].merged_pull_requests, percent]

}

function createPercentCommits(data, ctx, userName)
{
    const commitsPercentCharts = new Chart(ctx, 
    {
        type: 'pie',
        data: 
        {
            labels: ['total of commits', 'user commits'],
            datasets: 
            [{
                label: '# of commits',
                fontColor: 'white',
                data: [data[0], data[1]],
                backgroundColor: 
                [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderColor: 
                [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: 
        {
            tooltips:
            {
                titleFontSize: 12,
                bodyFontSize: 12
            },
            maintainAspectRatio: false,
            title:
            {
                fontSize: 12,
                fontColor: 'white',
                display: true,
                text: `Commits from ${userName}`
            },
            scales: 
            {
                ticks: 
                {
                    display: false
                }
            },
            legend: {
                labels: {
                    fontColor: 'white',
                    fontSize: 12
                }
            }
        }
    })
} 
