# Windows runtime modules: 7.0.6.0-cn

This directory contains only the small Node.js module closure required by the
Linux client from the vivo Windows client 7.0.6.0-cn. It does not contain the
Windows installer, Windows executables, drivers, proprietary libraries, logo,
or phone APK.

The modules are supplied under their own licenses, preserved in each package's
`LICENSE` file. See `THIRD-PARTY-NOTICES.md`. The rest of the extracted Windows
sample remains a local reverse-engineering input under `samples/windows/` and
is not required to run the Linux client.

The bundled app's Electron 22 compatibility line is Windows 7/8/8.1 and newer;
this is runtime compatibility metadata, not a vendor statement of the product's
minimum supported Windows version. See the sample manifest for details.
