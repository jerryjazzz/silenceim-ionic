![](https://david-dm.org/jesus-hear-you/silenceim-ionic.svg)

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

SilenceIM uses [**AES**](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) Rijndael 256 -> [**RC4**](https://en.wikipedia.org/wiki/RC4) (for symmetric encryption) -> [**PGP**](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) 4096 bit (for asymmetric encryption) in client side (browser) and transfers your messages to companions via HTTPS(wss) without store or any processing in a server side.

### Advantages over Cryptocat

| Feature        | SilenceIM           | Cryptocat | Notes |
| ------------- |:------------- | ----- | ----- |
| Anonymous      | **true** | **true** |  |
| No history     | **true** | false | Cryptocat saves messages in a server for a 30 minutes |
| [End-to-end encryption](https://en.wikipedia.org/wiki/End-to-end_encryption) | **full** | partial | |
| Transparency | **true** | false | •
| Web | **true** | false | |
| Mobile | **true** | false | |
| Desktop | true | true | |

* Unlike SilenceIM, where you can choose cryptography algorithms & exchange passwords/keys manually, Cryptocat password exchange is automatic and based on Diffie-Hellman protocol, which is not transparent for user and causes a [potetntial risk](https://tobtu.com/decryptocat.php).
