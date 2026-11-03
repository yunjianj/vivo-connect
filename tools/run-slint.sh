#!/bin/sh
set -eu
project_dir=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
native_binary="$project_dir/build/native/release/vivo-connect"
if [ ! -x "$native_binary" ]; then
    cargo build --locked --release -j2 --manifest-path "$project_dir/native/Cargo.toml" --target-dir "$project_dir/build/native"
fi
exec "$native_binary" "$@"
