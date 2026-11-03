#!/bin/sh
set -eu
repo=$(CDPATH= cd -- "$(dirname -- "$0")/../.." && pwd)
mkdir -p "$repo/build/packages" "$repo/build/arch-makepkg"
cd "$repo/packaging/arch"
export PKGDEST="$repo/build/packages" BUILDDIR="$repo/build/arch-makepkg"
exec makepkg --cleanbuild --force "$@"
