---
layout: wallet
title:  "Blockchain.info"
permalink: /wallets/blockchain-info/
wallet: blockchaininfo
desc: Blockchain.info is the world's most popular blockchain explorer, but also offers a simple Bitcoin wallet for Android, iOS, and the web.
thumb: blockchain.png
redirect_from:
  - "/blockchain-info/"
cat: hot, web, mobile
seotitle: "Blockchain.info Wallet Review: Features and Security"
lang: en
website: blockchain.info
website_url: https://blockchain.info/wallet
web_wallet: yes
create: yes
create_url: https://blockchain.info/wallet
open_source: yes
open_source_url: https://github.com/blockchain/My-Wallet
control_priv_keys: yes
download_ios: yes
download_ios_url: https://itunes.apple.com/us/app/blockchain-bitcoin-wallet/id493253309?mt=8
download_android: yes
download_android_url: https://play.google.com/store/apps/details?id=piuk.blockchain.android&hl=en
contribute: blockchaininfo
tags: web, watchonly
summary: Blockchain.info is a simple Bitcoin web wallet. Its simplicity makes it a good choice for people opening their first Bitcoin wallet. Blockchain.info wallets can be accessed from any web browser, apps for iPhone and Android, and browser extensions for Firefox and Chrome. 
weight: 5
---
Blockchain.info is the world’s most popular blockchain explorer, and also offers a simple Bitcoin web wallet.

Blockchain.info wallets can be accessed from any web browser, apps for iPhone and Android, and browser extensions for Firefox and Chrome.

##Security
{: .security .wallet-sections}
Blockchain.info encrypts your wallet in the browser and then stores it as a JSON on its server.  Blockchain.info has no access to funds and only your password can decrypt the file with your private keys.

A wallet backup can be stored anywhere, but its security is only as strong as the password used for encryption.

Blockchain.info is not an HD wallet, so each new address is generated with RNG. Over [300 BTC were lost](http://www.coinsetter.com/bitcoin-news/2014/12/14/300-bitcoins-swept-blockchain-info-wallets-1992) and luckily returned to BI users due to a weak RNG generator.

Users have had [funds stolen](http://www.bitcoinaffiliatenetwork.com/blog/bryan/how-hackers-used-tor-to-rob-blockchain-info-and-localbitcoins-users/) when using their wallet with Tor. Users who want to access through Tor should only do so through Blockchain.info’s hidden service: [https://blockchainbdgpzk.onion/](https://blockchainbdgpzk.onion/)

Blockchain.info wallets should be accessed through the browser extensions or mobile apps for improved security.

##Privacy
{: .privacy .wallet-sections}
A password is the only information required to create a Blockchain.info wallet. A unique identifier is then created which allows you to login from other locations.

Blockchain.info allows you to use an email address or phone number for two-factor authentication. If notifications are active, BI must track your wallet’s public keys in order to issue alerts. Blockchain.info can connect email addresses or phone numbers to addresses if alerts are enabled.

Blockchain.info claims to only store a hash of the IP address a wallet was created with. Accessing its website through the Tor hidden service prevents leaking your IP address.

You must manually generate a new address for each transaction, which helps prevent spying or tracking of your payments.

Blockchain.info received two scores from the Open Bitcoin Privacy Project’s [Spring 2015 report](http://openbitcoinprivacyproject.org/2015/05/spring-2015-wallet-privacy-rating-report/). Its web wallet received a score of 22 out of 100, and its Android app 14 out of 100.