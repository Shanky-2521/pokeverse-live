$startDate = [DateTime]::Parse("2025-01-01")
$commitCount = git rev-list --count HEAD

# Calculate the date for this commit (one week per commit)
$commitDate = $startDate.AddDays($commitCount * 7)

# Format the date for git
$formattedDate = $commitDate.ToString("yyyy-MM-dd HH:mm:ss") + " +0000"

# Set the environment variables
$env:GIT_COMMITTER_DATE = $formattedDate
$env:GIT_AUTHOR_DATE = $formattedDate

# Output the date for verification
Write-Host "Setting commit date to: $commitDate"
