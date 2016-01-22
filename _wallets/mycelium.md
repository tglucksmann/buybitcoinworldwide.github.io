---
layout: wallet
wallet: mycelium
title:  "Mycelium"
permalink: /wallets/mycelium/
desc: Mycelium is an advanced yet simple mobile wallet available for both Android and iOS devices and gives you full control of your private keys.
thumb: mycelium.png
cat: mobile, hot
seotitle: "Mycelium Review: Features, Privacy and Security"
lang: en
website: Mycelium.com
website_url: https://mycelium.com/
mobile_wallet: yes
desktop_wallet: no
web_wallet: no
hardware_wallet: no
open_source: yes
open_source_url: https://github.com/mycelium-com
control_priv_keys: yes
download_ios: yes
download_ios_url: https://itunes.apple.com/us/app/mycelium-bitcoin-wallet/id943912290?mt=8
download_android: yes
download_android_url: https://play.google.com/store/apps/details?id=com.mycelium.wallet
contribute: mycelium
tags: android, trezorh, ledgernanoh, hw1h, mobile, watchonly, watchonlyxpub, privatekeyimport, pincode, multiaccounts, hdwallet, customfee, bip38, bip39, hwh, coinapult, csspending, bip44, bip70
summary: Mycelium, founded in 2008, is a Bitcoin company with 35 employees located in Europe, Asia, and America. Mycelium offers mobile wallets for iPhone and Android. Mycelium is a good option for beginners, with features like watch-only addresses, cold storage spending, and HD accounts. Advanced features include TREZOR & Ledger support, xpub/xpriv key exports, and decrypting BIP38 keys. Mycelium can also restore hardware wallet seeds from TREZOR or Ledger. Mycelium is the most popular Bitcoin wallet on Android. 
weight: 9
---
Mycelium, founded in 2008, is a Bitcoin company with 35 employees located in Europe, Asia, and America. Mycelium offers mobile wallets for iPhone and Android. All of Mycelium’s applications are open source.

Mycelium is a good option for new users, with basic features like watch-only addresses, cold storage spending, and HD accounts. Advanced options include TREZOR support, xpub/xpriv key exports, and decrypting BIP38 keys. Mycelium can also be used to [restore a TREZOR seed](/kb/restore-trezor-seed-mycelium-android/).

##Security
{: .security .wallet-sections}
A [mobile Bitcoin wallet](/wallets/) is only as secure as the device it’s running on. Mycelium encrypts all your data and keys. An unrooted (Android)/non-jailbroken (iOS) device should be used.

Users can create a backup by writing down the 12 word seed provided in the app. If the phone is reset or lost, all funds can be recovered by re-entering the seed.

Mycelium is a hot wallet and should not be used to store a significant amount of funds.

##Privacy
{: .privacy .wallet-sections}
Both the iOS and Android apps connect directly to the Mycelium’s servers. Directly connecting to Mycelium’s servers allows for instant connection to the Bitcoin network, but reduces privacy.

Mycelium’s servers can view your IP address and wallet balance. The [company website claims](https://www.mycelium.com/wallet/FAQ.html#q019) to not log IP information, but there is no way to be sure. Orbot/Tor can be used to hide your IP address from Mycelium.

As an HD wallet, a new address is created for every transaction and addresses are not re-used. Using a new address for each transaction helps prevent spying on your payments and funds.

The Mycelium developers recognized that users value their privacy, and plan to implement CoinJoin in future updates.

Mycelium received a score of 50 out of 100 from the Open Bitcoin Privacy Project’s [Spring 2015 report](http://www.openbitcoinprivacyproject.org/2015/05/spring-2015-wallet-privacy-rating-report/).