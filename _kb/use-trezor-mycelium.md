---
layout: kb
title: "How to Use TREZOR with Mycelium"
seotitle: "How to Use TREZOR with Mycelium"
permalink: /kb/trezor-mycelium/
date: October 17, 2015
description: How to pair a TREZOR with Mycelium for Android. 
desc: Learn how to pair a TREZOR with Mycelium for Android for secure Bitcoin payments while on the go. 
lang: en
---
{:refdef: .note}
This article details how to use a previously initialized [TREZOR](/wallets/trezor/) with Mycelium. Your TREZOR must be setup before use with Mycelium.
{: refdef}

First, make sure you have the latest version of [Mycelium](/wallets/mycelium/) installed on your Android device. Open Mycelium and select "new account". If you already have Mycelium installed then skip this step.

![New Mycelium account][1]{: .img-responsive .kb-helper .android-img-kb}

Swipe right to move over to the "Accounts" tab. Click the key on the top right to add a new account. 

![mycelium accounts][2]{: .img-responsive .kb-helper .android-img-kb}

Click "Advanced". 

![mycelium advanced][3]{: .img-responsive .kb-helper .android-img-kb}

Under "Import a Trezor-HD account" tap "Trezor". 

![trezor mycelium][4]{: .img-responsive .kb-helper .android-img-kb}

Plug in an OTG cable to your Android device and plug in your TREZOR to the OTG cable. 

![plugin trezor mycelium][5]{: .img-responsive .kb-helper .android-img-kb}

Enter your TREZOR pin code. The numbers will be displayed on your TREZOR's screen.

![trezor pin mycelium][6]{: .img-responsive .kb-helper .android-img-kb}

Enter your TREZOR passphrase if you have one. **Any passphrase will create a valid wallet.** If your wallet shows a zero balance, restart the process and double check that the passphrase was entered correctly.

![trezor passphrase mycelium][7]{: .img-responsive .kb-helper .android-img-kb}

Mycelium will scan for accounts on your TREZOR.

![mycelium scan][8]{: .img-responsive .kb-helper .android-img-kb}

In this case we have one account based on the passphease entered. Click on an account to load that account, or tap "Import next unused account" to add a new account. 

![accounts trezor mycelium][9]{: .img-responsive .kb-helper .android-img-kb}

Name your TREZOR account. This is how it will be displayed in the Mycelium app. 

![name trezor mycelium][10]{: .img-responsive .kb-helper .android-img-kb}

You can now send payments from your TREZOR with Mycelium.

{:refdef: .note}
Even if the TREZOR is removed after use, the wallet and its addresses will still be viewable in watch-only mode. This way you can still view your balance, generate new addresses, and receive payments. 
{: refdef}

[1]: /img/kb/1new.png
[2]: /img/kb/2add.png
[3]: /img/kb/3advanced.png
[4]: /img/kb/4unrelated.png
[5]: /img/kb/importtrezor.png
[6]: /img/kb/trezpin.png
[7]: /img/kb/phrasetrez.png
[8]: /img/kb/scanningt.png
[9]: /img/kb/trezaccount.png
[10]: /img/kb/nametrez.png
