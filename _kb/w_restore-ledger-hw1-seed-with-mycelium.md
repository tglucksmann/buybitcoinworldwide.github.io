---
layout: kb
title: "Restore Ledger HW.1 Seed with Mycelium (Android)"
seotitle: "Restore Ledger HW.1 Seed with Mycelium (Android)"
permalink: /kb/restore-ledger-hw1-seed-mycelium-android/
description: How to resore a Ledger HW.1 recovery seed with Mycelium. Quickly gain access to funds if a Nano is lost, stolen, or damaged.
desc: How to resore a Ledger HW.1 recovery seed with Mycelium. Quickly gain access to funds if a Nano is lost, stolen, or damaged.
categories: 
- kb
- wallets
- restore
lang: en
---
If your Ledger HW.1 has been lost or stolen, your funds can still be accessed by importing the recovery seed into [Mycelium](/wallets/mycelium/) for Android.

A fresh install of Mycelium is required. If you already have Mycelium installed, backup your wallet and reinstall the application.

When opening Mycelium, you’ll be given two options: *Restore Backup* and *Create New*. Select *Restore Backup*.

![Welcome to Mycelium][welcome]{: .img-responsive .kb-helper .android-img-kb}

All Ledger seeds are 24 words, so select *24 words*:

![Mycelium words][numwords]{: .img-responsive .kb-helper .android-img-kb}

Mycelium will have you enter the words one at a time.

![Mycelium words][wordlist]{: .img-responsive .kb-helper .android-img-kb}

You can now send any funds that were stored on your Ledger HW.1.

{:refdef: .note}
Note that the private keys from your Ledger HW.1 seed are now stored in Mycelium. Your funds should immediately be moved to cold storage. The old HW.1 seed is now insecure and should not be reused.
{: refdef}

[welcome]: /img/kb/welcomemycelium.png
[numwords]: /img/kb/numberwords.png
[wordlist]: /img/kb/wordlist.png