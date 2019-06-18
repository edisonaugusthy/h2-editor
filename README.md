# h2-editor
Code editor with Html live preview Made using electron

##### Install Electron Globally
    npm install electron -g
  or locally
  
    npm install electron --save-dev --save-exact
    
    
#### To Run 
    npm start
    
    
### To Build 
    npm install electron-packager --save-dev
    
###### Then add to package.json
    
    "scripts": {
     "start": "electron .",
     "package-mac": "electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds",
     "package-win": "electron-packager . electron-tutorial-app --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName=\"CryptoApp\"",    
     "package-linux": "electron-packager . electron-tutorial-app --overwrite --asar=true --platform=linux --arch=x64 --icon=assets/icons/png/1024x1024.png --prune=true --out=release-builds"   
     },
  
  
  
#### To Generate Exe
     npm run package-win    (or package-mac, package-linux)
