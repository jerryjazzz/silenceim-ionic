```bash
ionic build andorid
ionic build osx
```

![](https://david-dm.org/jesus-hear-you/silenceim-ionic.svg)


SilenceIM uses [**AES**](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) Rijndael 256 -> [**RC4**](https://en.wikipedia.org/wiki/RC4) (for symmetric encryption) -> [**PGP**](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) 4096 bit (for asymmetric encryption) in client side (browser) and transfers your messages to companions via HTTPS(wss) without store or any processing in a server side.

### Advantages over Cryptocat

| Feature        | SilenceIM           | Cryptocat | Notes |
| ------------- |:------------- | ----- | ----- |
| Anonymous      | **true** | **true** |  |
| No history     | **true** | false | Cryptocat saves messages in a server for a 30 minutes |
| [End-to-end encryption](https://en.wikipedia.org/wiki/End-to-end_encryption) | **full** | partial | |
| Transparency | **true** | false | •
| Web client | **true** | false | |

* Unlike SilenceIM, where you can choose cryptography algorithms & exchange passwords/keys manually, Cryptocat password exchange is automatic and based on Diffie-Hellman protocol, which is not transparent for user and causes a [potetntial risk](https://tobtu.com/decryptocat.php).
