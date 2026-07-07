# ================================
# Compare Local vs Live Website
# Type "ok" to open next page
# Type "exit" to quit
# ================================

$localhost = "http://localhost:3000"
$live = "https://spacehr.net"

$edge = "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
if (!(Test-Path $edge)) {
    $edge = "${env:ProgramFiles}\Microsoft\Edge\Application\msedge.exe"
}

$chrome = "${env:ProgramFiles}\Google\Chrome\Application\chrome.exe"
if (!(Test-Path $chrome)) {
    $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe"
}

$pages = @(
    "/"
    "/hrms"
    "/employee-self-service-hrms"
    "/best-hcm-software"
    "/best-hr-software-small-business"
    "/industries/construction"

    "/features/payroll"
    "/features/attendance"
    "/features/leave-management"
    "/features/goals"

    "/regions/india"
    "/regions/uk"
    "/regions/singapore"
    "/regions/canada"
    "/regions/united-states"

    "/compare/adp"
    "/compare/bamboohr"
    "/compare/darwinbox"
    "/compare/freshteam"
    "/compare/gusto"
    "/compare/leena-ai"
    "/compare/microsoft-copilot"
    "/compare/moveworks"
    "/compare/orangehrm"
    "/compare/rippling"
    "/compare/sap-successfactors"
    "/compare/servicenow"
    "/compare/workday"
)

foreach ($page in $pages) {

    Write-Host ""
    Write-Host "===================================="
    Write-Host "Page: $page"
    Write-Host "Edge   : $localhost$page"
    Write-Host "Chrome : $live$page"
    Write-Host "===================================="

    # Open pages
    $edgeProcess = Start-Process $edge "$localhost$page" -PassThru
    $chromeProcess = Start-Process $chrome "$live$page" -PassThru

    while ($true) {

        $input = Read-Host "Type 'ok' for next page or 'exit'"

        if ($input -eq "ok") {

            try {
                Stop-Process -Id $edgeProcess.Id -ErrorAction SilentlyContinue
            } catch {}

            try {
                Stop-Process -Id $chromeProcess.Id -ErrorAction SilentlyContinue
            } catch {}

            break
        }

        if ($input -eq "exit") {
            exit
        }
    }
}

Write-Host ""
Write-Host "All pages completed!"