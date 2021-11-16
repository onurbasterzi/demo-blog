@echo off
powershell -window minimized -command ""
e:
cd e:\ReactDemos\demo-blog
npx json-server --watch data/db.json --port 8000
pause 