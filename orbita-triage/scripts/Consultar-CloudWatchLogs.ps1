<#
.SYNOPSIS
  Filtra eventos de un grupo de logs de CloudWatch (AWS CLI v2). Uso en fase INVESTIGACIÓN del playbook.

.DESCRIPTION
  Requiere AWS CLI configurado. No modifica infraestructura. Los tiempos son epoch milisegundos (UTC).

.EXAMPLE
  .\Consultar-CloudWatchLogs.ps1 -LogGroupName "/aws/lambda/mi-funcion" -FilterPattern "ERROR" -MinutesBack 30
#>
[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [string] $LogGroupName,

    [Parameter(Mandatory = $false)]
    [string] $FilterPattern = "",

    [Parameter(Mandatory = $false)]
    [int] $MinutesBack = 15
)

$ErrorActionPreference = "Stop"

if (-not (Get-Command aws -ErrorAction SilentlyContinue)) {
    Write-Error "AWS CLI no está en PATH. Instálalo y ejecuta 'aws configure' o usa SSO."
}

$end = [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds()
$start = ([DateTimeOffset]::UtcNow.AddMinutes(-$MinutesBack)).ToUnixTimeMilliseconds()

$args = @(
    "logs", "filter-log-events",
    "--log-group-name", $LogGroupName,
    "--start-time", "$start",
    "--end-time", "$end",
    "--output", "json"
)

if ($FilterPattern) {
    $args += @("--filter-pattern", $FilterPattern)
}

Write-Host "Consultando CloudWatch Logs: $LogGroupName (UTC últimos $MinutesBack min)..." -ForegroundColor Cyan
& aws @args
