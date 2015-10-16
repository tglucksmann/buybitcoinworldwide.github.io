---
layout: wallet
title:  "GreenBits"
wallet: greenbits
permalink: /wallets/greenbits/
desc: GreenBits Bitcoin wallet is the native Android version of GreenAddress. Its a multi-signature wallet that supports hardware wallets like TREZOR and Ledger.
thumb: greenbits.png
cat: mobile, hot
seotitle: "GreenBits Review: Features, Privacy and Security"
lang: en
---

GreenBits is the native Android version of [GreenAddress](/wallets/greenaddress/). It’s a multi-signature wallet that supports hardware wallets like TREZOR and Ledger. Seeds created with GreenAddress can be imported into GreenBits.

By default, GreenBits is a 2 of 2 multisignature wallet. In this case, you control one private key and GreenAddress the other. GreenAddress must sign every transaction.

GreenAddress claims that it will never sign a double-spend transaction. Users can send & receive to other GreenAddress and GreenBits users and receive instant confirmations, but this only works if the other party trusts GreenAddress.

Some features, like disabling 2FA and spending limits, must be set using GreenAddress and not GreenBits.

##Security
{: .security .wallet-sections}
A mobile wallet is only as secure as the device it’s running on. GreenBits encrypts all your data and keys. An unrooted Android device should be used.

A backup is made by writing down the 24 word seed provided in the app. If the phone is reset or lost, all funds can be recovered by re-entering the seed.

GreenBits offers a unique setup with its options of 2-2 wallets and 2-3 wallets.

In a 2 of 2 wallet, you control one key and GreenBits controls the other. If GreenBit’s servers go down funds cannot be spent immediately because it would be impossible to access GB’s signature. GreenBits solves this by providing nLocktime transactions, which release funds after a chosen period of time. You must set this up using GreenAddress.

GreenBits relies on GreenAddress’s servers for transaction data, and also uses Electrum servers for extra verification.

A user-set PIN is required to open your wallet each time.

##Privacy
{: .privacy .wallet-sections}
GreenAddress plans to add CoinJoin to GreenBits in a future update. GreenBits/GreenAddress know your IP address, balance, and addresses.

As an HD wallet, GreenBits generates a new address for every transaction and does not re-use addresses. Using a new address for each transaction helps prevent spying on your payments and funds.