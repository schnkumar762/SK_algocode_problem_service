# Algocode Problem Setting Service

========================

## How routing is working in the project

- /api/v1/problems/ping
  - because the api route starts with /api

api -> /v1 -> /problems -> /ping

    apiRouter -> v1Router -> problemRouter -> problemController  -> service layer
