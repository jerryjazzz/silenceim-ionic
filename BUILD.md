
## Dev builds

```bash
ionic build andorid
ionic build osx
```

### Android Release build 

```bash
cordova build --release android
# Sign
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/.key/my-release-key.keystore android-release-unsigned.apk alias_name
# Pack
$ANDROID_HOME/build-tools/24.0.2/zipalign -v 4 android-release-unsigned.apk android.apk
```

### Ubuntu 
Copy default icon from `.resources/` to `ww/img/logo.png` (it is cordova-ubuntu plugin hardcode) 

```bash
cordova build --release ubuntu
```
