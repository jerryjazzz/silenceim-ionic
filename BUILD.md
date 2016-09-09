
## Dev builds

```bash
cordova build andorid
cordova build osx 
cordova build ios
cordova build blackberry10
```

### Android Release  

```bash
cordova build --release android
# Sign
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/.key/my-release-key.keystore android-release-unsigned.apk alias_name
# Pack
$ANDROID_HOME/build-tools/24.0.2/zipalign -v 4 android-release-unsigned.apk android.apk
```

### Ubuntu (not yet working)
Copy default icon from `.resources/` to `ww/img/logo.png` (it is cordova-ubuntu plugin hardcode) 

```bash
cordova build --release ubuntu
```
