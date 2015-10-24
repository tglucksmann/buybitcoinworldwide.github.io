---
layout: kb
title: "How to Use Ledger HW.1 with GreenBits (Android)"
seotitle: "How to Use Ledger HW.1 with Greenbits"
permalink: /kb/ledger-hw1-greenbits/
date: October 17, 2015
description: How to pair a Ledger HW.1 with GreenBits for Android. 
desc: Learn how to pair a Ledger HW.1 with GreenBits for Android for secure multisignature payments while on the go. 
lang: en
categories: 
- kb
- wallets
- usinghws
---
{:refdef: .note}
This article details how to use a previously initialized Ledger HW.1 with [GreenBits](/wallets/greenbits/). Your HW.1 must be setup before use with GreenBits. Note that you won't be able to use your accounts from the Ledger Chrome wallet. GreenBits is a multisignature wallet and can't use the same addresses that are used in the Ledger Chrome app. With GreenBits and the Ledger HW.1, the HW.1 acts as more of a login device that signs transactions. Again, accounts from the Ledger Chrome wallet cannot be used with GreenBits. 
{: refdef}

First, make sure you have the latest version of GreenBits installed on your Android device. Plugin your HW.1 via OTG cable and you will receive a pop-up message. Tap "OK".  

![plugin Ledger hw1 greenbits][1]{: .img-responsive .kb-helper .android-img-kb}

Type in the pin code you set when you initialized your HW.1 in the Ledger Desktop wallet. The pin code is the only thing carries over from other accounts or wallets on the HW.1. 

![ledger hw1 pin greenbits][2]{: .img-responsive .kb-helper .android-img-kb}

That's it. You'll now see the GreenBits wallet home page. All transactions with this wallet must be signed by your Ledger HW.1. 

![greenbits][3]{: .img-responsive .kb-helper .android-img-kb}

{:refdef: .note}
There is no watch-only mode. If you unplug your HW.1, you'll only be able to receive payments upon plugging it in against. 
{: refdef}

[1]: /img/kb/plugin.png
[2]: /img/kb/ledgerpin.png
[3]: /img/kb/greenbits.png