---
layout: kb
lang: en
author: jordantuwiner
permalink: "/kb/what-tor-does-doesnt-do-privacy/"
seotitle: "What Tor Does and Doesn't do for Bitcoin Privacy"
title: "What Tor Does and Doesn't do for Bitcoin Privacy"
desc: Tor helps hide your location and IP address, but still presents problems when used with wallets that rely on centralized servers for data. 
faq: tor
categories: 
- kb
- wallets
- privacy
---
Bitcoin wallets need to both transmit and query data from the blockchain. Because Bitcoin is a peer-to-peer network, your IP address is often exposed in the process of sending or requesting data when using a [Bitcoin wallet](/wallets/).

Tor is a web browser that prevents websites from connecting your browsing activity to your real-world location and IP address by rotating your connection through a global network of nodes. Many Bitcoin wallets allow you to route your traffic through Tor. While Tor does help protect your privacy and identity somewhat, it isn't always the perfect solution.

Tor is useful when paired with Bitcoin because it shields your node or wallet's real IP address and real-world location from network peers. A node run through Tor also prevents an ISP from seeing any Bitcoin related activity.

In order to understand how Tor improves Bitcoin privacy, we’ll look at a few specific wallets to see what Tor does and doesn’t do.

## Bitcoin Core

Bitcoin Core wallets download the entire blockchain, so there is no need to request address balances or transaction data from other sources. This eliminates the major problem most wallets have. Since you aren’t requesting data, other servers can't determine which addresses might belong to you, or which transactions are yours.

Bitcoin Core offers privacy because it relays other user's transactions in the same way it relays your own. Other nodes and ISPs can still understand that a certain IP is a full node and is involved with Bitcoin, but Tor prevents this from happening. Tor with Bitcoin Core is one of the most private ways to use Bitcoin.

## Mycelium

[Mycelium](/wallets/mycelium/) uses a central server to provide blockchain data and has the ability to see the IP addresses of users connected. The company claims not to log any data, but there is no way to know for sure. The Mycelium wallet will request a list of addresses and their balances from the company's servers. Mycelium can, if it wants, connect a list of addresses to an IP address.

Mycelium wallet data can be routed through Orbot--the Android version of Tor. Orbot shields your real IP address from Mycelium, but the company still knows, if they want, that an entire list of addresses belongs to the same person.

Let’s say you post one of your Mycelium addresses on Twitter. Even with Tor enabled, Mycelium could gather this data from your Twitter profile. If the address from your Twitter was also requested from Mycelium’s servers, the company could know which additional addresses belong to you.

## Electrum

[Electrum](/wallets/electrum/) is different from Mycelium in that it doesn't connect to one central server. It connects to many different servers setup by users all over the world. All of the servers can see your IP address when connected. Like Mycelium, these servers know that a list of addresses belongs to one person and can connect your IP to a list of your addresses.

By default Electrum switches servers constantly to find the most updated one, so many servers receive your IP address and the addresses connected to it. You can choose to connect only to a specific server, which makes Electrum function more like Mycelium. Using one specific server prevents many servers from getting a list of addresses owned by one identity. Many servers claim not to log data, but, again, there is no way to be certain.

Using Electrum through Tor would shield your IP address from the servers, but the servers would still know that an entire list of addresses belongs to the same person, which has the same risks that come with Mycelium.

You can setup your own [Electrum server](https://github.com/spesmilo/electrum-server/blob/master/HOWTO.md), which offers better privacy because all blockchain data is stored on your computer and you don't need to pull data from other servers.

## Tor Helps, But Not Perfect

With Electrum and Mycelium, your privacy is somewhat hidden, but you might not be very far away from being discovered. If you post one address from your wallet on a social profile, Mycelium or an Electrum server could technically then understand who the entire list of addresses belongs to, even if Tor was used.

Tor helps hide your location and IP address, but still presents problems when used with wallets that rely on centralized servers for data. Use Bitcoin Core, Armory, or your own Electrum server if complete privacy is essential.