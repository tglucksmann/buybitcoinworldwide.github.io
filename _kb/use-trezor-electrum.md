---
layout: kb
title: "How to Use TREZOR with Electrum"
seotitle: "How to Use TREZOR with Electrum"
permalink: /kb/trezor-electrum/
description: How to spend from and use an initialized TREZOR with Electrum 2.0.
desc: How to spend from and use an initialized TREZOR with Electrum 2.0. An already initialized TREZOR is required.
lang: en
---
{:refdef: .note}
This article details how to use a previously initialized TREZOR with Electrum. Your TREZOR must be setup before use with Electrum.
{: refdef}

TREZOR can only be used with Electrum 2.0+. Make sure you have the latest version installed.

Plugin your TREZOR and open Electrum. Select Create new wallet and Hardware wallet. The Restore or import a wallet option is for restoring a TREZOR seed if the device was lost, stolen or damaged.

![add TREZOR Electrum][create]{: .img-responsive .kb-helper}

TREZOR is the only hardware wallet supported by Electrum and will be automatically selected in the next step.

![hardware Electrum][hardware]{: .img-responsive .kb-helper}

Enter your TREZOR pin.

![Electrum PIN code][pin]{: .img-responsive .kb-helper}

Input your passphrase if you used one. **Any passphrase will create a valid wallet**. If your wallet shows a zero balance, restart the process and double check that the passphrase was entered correctly.

![Electrum PIN code][password]{: .img-responsive .kb-helper}

You can now spend from your TREZOR with Electrum.

{:refdef: .note}
Even if the TREZOR is removed after use, the wallet will still be viewable in watch-only mode.
{: refdef}

[pin]: /assets/img/kb/pin.png
[password]: /img/kb/password.png
[hardware]: /img/kb/hardware.png
[create]: /img/kb/create.png