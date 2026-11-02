#!/bin/sh
set -eu
project_dir=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
native_binary="$project_dir/build/native-qt/vivo-connect-qt"
cmake -S "$project_dir/native-qt" -B "$project_dir/build/native-qt" -DCMAKE_BUILD_TYPE=MinSizeRel
cmake --build "$project_dir/build/native-qt" -j2
exec "$native_binary" "$@"
