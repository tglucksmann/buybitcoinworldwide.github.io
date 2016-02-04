---
layout: wallet
title:  "GreenAddress"
wallet: greenaddress
permalink: /wallets/greenaddress/
img: greenaddress.png
desc: GreenAddress is a multisignature Bitcoin wallet available on the web, desktop, Android, and iOS. 
thumb: greenaddress.png
cat: web, desktop, hot
seotitle: "GreenAddress Review: Features, Privacy and Security"
lang: en
website: greenaddress.it
website_url: https://greenaddress.it/
web_wallet: yes
create: yes
create_url: https://greenaddress.it/en/
open_source: yes
open_source_url: https://github.com/greenaddress/WalletCrx
control_priv_keys: yes
download_ios: yes
download_ios_url: https://itunes.apple.com/us/app/greenaddress/id889740745?mt=8#
download_android: yes
download_android_url: https://play.google.com/store/apps/details?id=it.greenaddress.cordova
contribute: greenaddress
tags: web, hw1h, ledgernanoh, trezorh, multisig, hotwallet, bip70, cspending, bip44, bip39, bip32
summary: GreenAddress is a multisignature Bitcoin wallet available on the web, desktop, Android, and iOS. GreenAddress is compatible with hardware wallets like TREZOR, Ledger Nano, and the HW.1. 
weight: 5
---

GreenAddress is a multisignature [Bitcoin wallet](/wallets/) available on the web, desktop, Android, and iOS.

By default GA is a 2 of 2 wallet, which means you control one private key, and GA the other. GreenAddress must sign every transaction. This forces you to rely on GA, but offers true 2-factor authentication.

GA claims it will never sign a double-spend transaction. You can send & receive to other GA users and receive instant confirmations, but this only works if both parties trust GreenAddress.

You can log into your GA account in watch-only mode. The account balance can be viewed and payments requested, but funds cannot be spent.

Users may add spending limits to their accounts. Because GreenAdress controls one key, it can prevent all transactions which request more than the set limit.

GreenAddress’s servers provide transaction data, but also use Electrum servers for extra verification.

## Security
{: .security .wallet-sections}
GreenAddress offers a unique setup with its options of 2-2 wallets and 2-3 wallets.

In a 2 of 2 wallet, you control one key and GreenAddress the other. If GreenAddress’s servers go down, you cannot immediately spend funds because it would be impossible to access GA’s signature. GreenAddress solves this by providing nLocktime transactions, which release funds after a chosen period of time.

GreenAddress has a PIN feature that is required to access funds. After three incorrect guesses, the wallet is erased from GA servers and recovery must be done with the seed.

## Privacy
{: .privacy .wallet-sections}
Users in need of privacy should avoid linking their social networks to their account. GreenAddress plans to add CoinJoin in a future update. GA knows your IP address and balance.

As an HD wallet, GreenAddress generates a new address for every transaction and does not re-use addresses. Using a new address for each transaction helps prevent spying on your payments and funds.