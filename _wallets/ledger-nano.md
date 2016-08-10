---
layout: wallet
lang: en
permalink: "/wallets/ledger-nano/"
seotitle: "Ledger Wallet Nano Review: Bitcoin USB Wallet"
title: "Ledger Nano"
desc: Ledger Nano is a Bitcoin wallet on a smartcard device, small format and low weight. Comfortable and simple to use.
wallet: ledger_nano
cat: hardware
thumb: ledger.png
tags: [bip39, bip44, hdwallet, multiaccounts, pincode, offlinesigning, coldstorage, myceliumas, coinkites, greenaddresss, greenbitss, electrums, copays, hardware]
website: ledgerwallet.com
website_url: https://www.ledgerwallet.com/
hardware_wallet: yes
open_source: yes
open_source_url: https://github.com/ledgerHQ/
control_priv_keys: yes
buy: yes
buy_url: http://buybitcoinww.co/Ledger_Nano 
contribute: ledger-nano
summary: Ledger is a Bitcoin security company based in Paris, France. The Ledger Nano, built upon a CC EAL5+ smartcard, is one of Ledger's three Bitcoin hardware walelts. The Nano is a small, key-sized device that connects to your computer's USB port. It stores your Bitcoin private keys offline and signs transactions in its secure environment. It can be safely used on a malware infected computer if setup correctly. The Nano can be used on any computer or on an Android device with an OTG cable. 
pro1: Affordable pricing at 29€ ($31)
pro2: Sleek design, integration with a number of multisig wallets
pro3: 7 software integrations available
con1: Lack of screen requires offline computer to be used for setup
con2: Security card can be confusing and not as user-friendly as a screen
weight: 9
screen: no
released: Dec 2014
price: $31
sidebardesc: The Ledger Nano is a key-sized USB device. It securely stores private keys offline and signs transactions in its smartcard's secure environment.
pic: ledgernano.png
---
## Price
The <a rel="nofollow" href="http://buybitcoinww.co/Ledger_Nano">Ledger Nano</a> costs 29€ for one or 41.5€ for the duo pack (two). One may want to purchase the duo pack if they plan to use the devices as part of a multisignature wallet.

* Table of Contents
{:toc}

## Security
The Ledger Nano is an HD Bitcoin wallet, meaning the 24 word seed generated on setup is all that's needed to backup the entire wallet. The original 24-word seed is generated using RNG from the device and the computer. This spreads out the source of entropy. 

The HD seed is then generated offline on the Nano's smartcard and displayed on your computer’s screen. This is the main problem with the Ledger Nano: it doesn't have a screen. Since the seed is displayed on your computer’s screen, setup your Nano on an offline computer or bootable operating system. Ledger offers a <a rel="nofollow" href="http://buybitcoinww.co/ledgerstarter">USB drive called Ledger Starter</a> which you can use to setup your Nano securely. 

A 4-digit pin code is added on setup. The pin code is required to view balances when plugged into any computer and for each transaction. Three incorrect guesses of the pin code will wipe the device.

The Ledger Nano comes with a security card that provides extra two factor authentication and prevents man in the middle attacks. The Nano uses the security card as 2-factor authentication because it lacks a screen. 

Each time you need to send a payment you will be asked to input some of the letters or numbers from the recipient address using the security card. 

![ledger security card][sc]{: .img-responsive .kb-helper}

Using the example security card shown above,  *b* equals *9* while *x* is *1*. Each security card is unique and provides two-factor authentication in the case that your Nano is stolen. If someone has your Nano and your pin code, but not the securty card, they won’t be able to send your funds.

Ledger Nano uses an CC EAL5+ smartcard to securely sign Bitcoin transactions.


## Setup and Initialization

To setup your Ledger Wallet you will need to use the [Ledger Wallet Chrome extension](https://chrome.google.com/webstore/detail/ledger-wallet/kkdpmhnladdopljabkgpacgpliggeeaf) or the <a rel="nofollow" href="http://buybitcoinww.co/ledgerstarter">Ledger Starter</a>. Using the Starter is more secure because it creates your seed in a secure enviroment. 

<iframe width="690" height="388" src="https://www.youtube.com/embed/6_Zdw1f1Los?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

## Privacy

As with any hardware wallet, using your device is only as private as the software wallet it’s used with. Many software wallets have support for the Nano: Electrum, [Mycelium](/mycelium/#how-to-use-ledger-nano-or-hw1-with-mycelium-android), Copay, GreenBits, GreenAddress, Coinkite, and the Ledger Chrome wallet. Electrum, Mycelium and Coinkite support Tor and can offer additional privacy. Copay can be used with a Bitcore full node which is also a very private way to use your Nano. 

## Ledger Wallet Mobile Apps

Unlike the TREZOR or KeepKey, the Nano doesn't have a screen that can be used to verify outgoing transactions. Instead, Ledger's [iPhone app](https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=960196441&mt=8) or [Android app](https://play.google.com/store/apps/details?id=co.ledger.wallet) can be used a screen to confirm payments. This isn't ideal, as the mobile apps will in most cases run on internet-connected devices. It is, however, a decent solution for a hardware wallet with no screen. 


## Ledger Wallet Nano vs. TREZOR 

TREZOR and the Nano are often compared. The main difference is TREZOR offers a screen, the ability to add a passphrase to the HD seed, and offline setup by default. The Ledger Nano wins in terms of price. 

## Ledger Wallet Nano vs. KeepKey

The main difference between the Nano and KK is that KeepKey has a screen, while the Ledger Nano does not.

## Ledger Wallet vs. Paper Wallet

The Ledger Nano may be better than a paper wallet for less technical users. Paper wallets can be hard to setup and it's easy to make mistakes. The Nano makes creating secure offline storage easy. Although paper wallets are just as secure if created correctly. 

## Promo Code

There are currently no Ledger promo codes available. If a coupon or discount code becomes available, we'll update this post. 

## Does the Ledger Nano Work with Litecoin?

The Nano can be used to store Litecoin, DASH, and other altcoins. It's up to software wallet developers to integrate support--the device itself is compatible with any altcoin. 

[sc]: /img/wallets/ledgercard.png