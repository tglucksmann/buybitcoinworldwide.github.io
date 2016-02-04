---
layout: kb
lang: en
author: stevenhay
permalink: "/kb/how-does-bitcoin-work/"
seotitle: "How Does Bitcoin Work?"
title: "How Does Bitcoin Work?"
desc: 
faq: whatisbitcoin
categories: 
- kb
- faq
weight: 8
---
Bitcoin as an advanced payment system and computing network is undeniably complex but, fortunately, using Bitcoin is fairly simple. Just like you don’t need to understand how credit card processing works to use one, you can safely use Bitcoin without in-depth technical knowledge. That being said, the more you learn about Bitcoin, the easier it is to trust it with your hard-earned money.

<iframe width="560" height="315" src="https://www.youtube.com/embed/t5JGQXCTe3c" frameborder="0" allowfullscreen></iframe>

## How is Bitcoin Received?

All that’s needed to receive payments is a [Bitcoin wallet](/kb/what-is-a-bitcoin-wallet/) and an address. There’s a wide selection of [Bitcoin wallets available for free download](/wallets/), suitable for all major devices and operating systems. After installing the wallet, generating or selecting a receiving address is the first step to receiving payments.

Addresses may be securely shared, with anyone and everyone. An address can be communicated as either a 34 character strings beginning with a 1 or 3, as in _1SAWZzCfWMGPqJUGA1thfrKiRMkP5c8Vh_, or as a QR code of that same address:

![bitcoin address](/img/kb/address.png){: .img-responsive .kb-helper .kb-medium-img}

Once payment is made, your wallet will initially report an incoming payment as pending or unconfirmed. The payment should receive its first confirmation within half an hour. As it receives further confirmations over time, it’s increasingly safe to assume that payment has been properly made and settled.

* Table of Contents
{:toc}

## How is Bitcoin Sent?

Paying someone in Bitcoin is straight-forward. Simply enter their address or QR code into your wallet and transmit the money. Note that all Bitcoin payments are irreversible, so ensure that you send the correct amount to the correct address.

## Proof of Payment

If you’d like to show a particular transaction to someone, find its 64 character Transaction ID within the wallet. Next, enter this string into any blockchain explorer site; Blockchain.info or Blocktrail.com are popular choices. That URL may then be safely shared, as in [this link](https://blockchain.info/address/1BaKkvW6oyVcvqdiUPYwA3ZFBn2WsZXN3x) which shows 40.0 BTC received by the above-mentioned address on the 27<sup>th</sup> of November, 2015.

Keep in mind that anyone exploring the Transaction ID or your address will discover the total amount of bitcoins sent to [that receiving address](https://blockchain.info/address/37CB9zG2yGyM4xZYacGKwn1728QtuZEyJj), all payments made from the address and its current balance. It’s therefore better for privacy reasons to share a fresh address for each new transaction. Note that no personally identifying information is associated with an address within the Bitcoin network but that such information may be determined through other means. For example, if on Facebook you request payment or donations to a certain address, your name will become linked to that particular address.

## How do Wallets Track Bitcoin Balances?

Somewhat counter-intuitively, software wallets don’t contain bitcoins as physical wallets hold coins or notes. Ownership of all bitcoins is instead recorded in the shared public ledger known as the blockchain. What a wallet holds is the private key which allows spending bitcoins from its associated addresses. Thus, the balance and transactional history of an address is public information but the ability to send bitcoins from that address is restricted to whoever owns its private key. Whenever you run your Bitcoin wallet, it connects to the network to check the balance of all addresses it’s keyed to - and the total is your Bitcoin balance!

Unlike a bank account, your Bitcoin balance can never go below zero.

## Bitcoin Wallet Security

A wallet’s owner is entirely responsible for its security. The most important point is to [back up your private key](/kb/what-is-a-bitcoin-private-key/), without which the wallet’s bitcoins cannot be spent. Many wallets will allow you to protect this private key with a password, which is recommended.

If you accumulate a significant amount of bitcoins, it’s really essential that you backup your wallet in a secure way. [Consult our guide for further information on wallet security](/kb/how-to-store-and-protect-bitcoins/), as well as your specific wallet’s documentation for detailed instructions on password protection and backup creation.

## Bitcoin Network Security

Even the highest level of wallet security would be useless if the Bitcoin network wasn’t secure. Fortunately, security is an area in which Bitcoin excels. [By some estimates](http://qntra.net/2015/11/venture-capital-fuels-stupidity-in-bitcoin-not-innovation/), nearly half a million dollars is spent daily to verify and record Bitcoin transactions. This sum covers electricity costs alone and not the initial investment in computing hardware, which is sufficient to make Bitcoin the world’s most powerful decentralised supercomputer.

The greatest vulnerability in Bitcoin remains the inexperienced user. The [greatest protection against scammers](/kb/avoid-bitcoin-scams/), hackers and accidental loss is education.

## How does the Bitcoin Network Work?

The process is best understood by breaking it down into steps, starting from a simple payment:

**Step 1 - Spending**

When you pay bitcoins to an address, your wallet accesses its private key (and requests a password, if set) to authorize the transaction.

**Step 2 - Announcement**

Your wallet then announces the transaction to all other wallet users (termed _nodes_) with which it’s connected. Nodes check to ensure the transaction is valid according to Bitcoin’s rules. For example, the rules state that a wallet can’t spend coins it doesn’t own or spend the same coins more than once.

**Step 3 - Propagation**

If valid, nodes then broadcast the transaction to _their_ connected nodes and so on, until the whole network becomes aware of the payment.

**Step 4 - Miners Process the Transaction**

The transaction information soon reaches a special kind of node called a _miner_. Miners are special nodes which record transactions. Miners bundle all the new transactions they hear about into so-called blocks. Miners race against each other to solve a mathematical problem which allows them to solve the current block.

**Step 5 - Transaction Enters the Blockchain**

The first miner to solve the block receives a Bitcoin reward and gets to record the block into the Bitcoin blockchain. The blockchain is an ever-lengthening series of blocks which, in its entirety, describes every single Bitcoin transaction ever made.

The blockchain can thus be compared to a shared public ledger and each block a page in that ledger. To continue the analogy, miners are like competing accountants who get paid for being first to complete an accurate ledger page.

The mining process is addressed in greater technical detail in our topic, [What is Bitcoin Mining?](/kb/what-is-bitcoin-mining/)