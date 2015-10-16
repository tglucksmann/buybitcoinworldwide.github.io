---
layout: kb
title: "Restore a TREZOR Seed with Electrum"
seotitle: "Restore TREZOR Seed with Electrum"
permalink: /kb/restore-trezor-seed-electrum/
description: How to import a TREZOR recovery seed into Electrum and quickly gain access to funds if a TREZOR is lost, stolen, or damaged.
desc: How to import a TREZOR recovery seed into Electrum and quickly gain access to funds if a TREZOR is lost, stolen, or damaged.
date: 2015-07-05 16:54:46
categories: 
- kb
lang: en
---
If your TREZOR has been lost or stolen, your funds can still be accessed by importing the recovery seed and passphrase (if used) into Electrum.

When opening Electrum you’ll be greeted with a list of options. (Existing users must navigate to *File > New/Restore*).

Select *Restore or import a wallet* and *Hardware wallet*.

![restore TREZOR seed electrum][restore]{: .img-responsive .kb-helper}

TREZOR is currently the only hardware wallet supported by Electrum and is automatically selected in the next window.

![hardware Electrum][hardware]{: .img-responsive .kb-helper}

Enter your TREZOR recovery seed.

![TREZOR recovery seed][seed]{: .img-responsive .kb-helper}

Input your passphrase if you used one. **Any passphrase will create a valid wallet.** If your wallet shows a zero balance, restart the process and double check that the passphrase was entered correctly.

![TREZOR passphrase][passphrase]{: .img-responsive .kb-helper}

You can now send any funds that were stored on your TREZOR.

{:refdef: .note}
Note that the private keys from your TREZOR seed are now stored in Electrum. Your funds should immediately be moved to cold storage. The old TREZOR seed is now insecure and should not be reused.
{: refdef}

[restore]: /img/kb/restore.png
[passphrase]: /img/kb/passphrase.png
[hardware]: /img/kb/hardware.png
[seed]: /img/kb/enterseed.png