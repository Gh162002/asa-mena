@echo off
echo Synchronisation des images hero...
copy /Y "images\hero\*.jpeg" "frontend\public\images\hero\"
copy /Y "images\hero\*.jpg" "frontend\public\images\hero\"
copy /Y "images\hero\*.png" "frontend\public\images\hero\"
echo Done!
pause
