---
layout: wallet
wallet: electrum
title:  "Electrum"
permalink: "/wallets/electrum/"
desc: Electrum is a desktop Bitcoin wallet built for speed and security. Its simple interface and advanced features make it a good option for new & advanced users.
thumb: electrum.png
cat: desktop, hot
seotitle: "Electrum Review: Features, Privacy and Security"
lang: en
website: electrum.org
website_url: http://electrum.org/
desktop_wallet: yes
open_source: yes
open_source_url: https://github.com/spesmilo/electrum
control_priv_keys: yes
download_desktop: yes
download_desktop_url: https://electrum.org/#download
contribute: electrum
tags: desktop, mac, coldstorage, windows, linux, trezorh, ledgernanoh, hw1h
summary: Electrum is a light weight Bitcoin wallet for Mac, Linux, and Windows. It was created in November 2011. The main features of Electrum are support for hardware wallets TREZOR, Ledger Nano and HW1, secure cold storage using an offline computer, and decentralized verification using SPV. Electrum is a good option for both beginners and advanced users. 
weight: 8
---
Electrum is a light weight [Bitcoin wallet](/wallets/) for Mac, Linux, and Windows. It was created in November 2011.

The main features of Electrum are support for hardware wallets [TREZOR](/wallets/trezor/), [Ledger Nano](/wallets/ledger-nano/) and HW1, secure cold storage using an offline computer, and decentralized verification using SPV.

## Security
{: .security .wallet-sections}
Electrum functions as a hot wallet or cold storage. For both wallet types, a 12 word seed is generated which allows you to backup and restore the entire wallet and its keys.

For cold storage, a seed is generated on a secure offline computer and written to a piece of paper. A master public key is created from the seed and imported into a separate Electrum install on your everyday computer. You can now view the wallet balance, accept payments, and create new addresses on a hot computer without the risk of funds being stolen. All transactions must be signed by the offline computer.

All Electrum private keys are encrypted and never leave your computer. Electrum wallets not using an offline computer should be treated as a hot wallet, as it’s still possible to have malware steal funds.

Although Electrum relies on third-party servers, the worst attack possible is the faking of transaction data. The Electrum servers have no way of accessing funds.
 
## Privacy
{: .privacy .wallet-sections}
Electrum is a lightweight Bitcoin client, and uses servers created by users to get transaction and balance information. A server has no way of knowing your actual identity, but does know your IP address, wallet addresses, and balance.

Tor can be used to prevent the server from knowing your IP address, but cannot prevent the server from knowing that a list of addresses belong to one entity.

Some servers claim to not log or store information, but it is impossible to know for sure without setting up your own Electrum server.

As an HD wallet, Electrum generates a new address for every transaction and does not re-use addresses. Using a new address for each transaction helps prevent spying on your payments and funds.

Electrum received a score of 46 out of 100 from the Open Bitcoin Privacy Project’s [Spring 2015 report](http://www.openbitcoinprivacyproject.org/2015/05/spring-2015-wallet-privacy-rating-report/).

## Features
Electrum offers support for many different wallet types, like hardware wallets, offline cold storage, watch-only, and multisig. 