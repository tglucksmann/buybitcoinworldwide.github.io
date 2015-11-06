---
layout: kb
title: "Restore a TREZOR Seed with Mycelium (Android)"
seotitle: "Restore TREZOR Seed with Mycelium (Android)"
permalink: /kb/restore-trezor-seed-mycelium-android/
description: How to import a TREZOR recovery seed into Mycelium and quickly gain access to funds if a TREZOR is lost, stolen, or damaged.
date: July 5, 2015
desc: How to import a TREZOR recovery seed into Mycelium and quickly gain access to funds if a TREZOR is lost, stolen, or damaged.
categories: 
- kb
- restore
lang: en
weight: 9
---
If your [TREZOR](/wallets/trezor/) has been lost or stolen, your funds can still be accessed by importing the recovery seed and passphrase (if used) into [Mycelium](/wallets/mycelium/) for Android.

A fresh install of Mycelium is required. If you already use Mycelium, write down the 12-word backup seed and reinstall the application.

When opening Mycelium, you’ll be given two options: *Restore Backup* and *Create New*. Select *Restore Backup*.

![Welcome to Mycelium][welcome]{: .img-responsive .kb-helper .android-img-kb}

Select the number of words contained in your seed, and check *I have a password* if you used a passphrase:

![Mycelium words][numwords]{: .img-responsive .kb-helper .android-img-kb}

Mycelium will have you enter the words one at a time.

![Mycelium words][wordlist]{: .img-responsive .kb-helper .android-img-kb}

Input your passphrase if you used one. **Any passphrase will create a valid wallet**. If your wallet shows a zero balance, restart the process and double check that the passphrase was entered correctly.

![Mycelium passphrase][pphrase]{: .img-responsive .kb-helper .android-img-kb}

You can now send any funds that were stored on your TREZOR.

{:refdef: .note}
Note that the private keys from your TREZOR seed are now stored in Mycelium. Your funds should immediately be moved to cold storage. The old TREZOR seed is now insecure and should not be reused.
{: refdef}

[welcome]: /img/kb/welcomemycelium.png
[numwords]: /img/kb/numberwords.png
[wordlist]: /img/kb/wordlist.png
[pphrase]: /img/kb/passphrase-mycelium.png