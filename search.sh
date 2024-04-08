#!/bin/bash

set -euo pipefail -v

function genme() {

    local package_json_files
    package_json_files=$(
        find . -type f -name 'package.json' | grep -v node_modules
    )

    local package_name=()

    for file in $package_json_files; do
        package_name=$(jq -r '.name' "$file")
        package_names+=("$package_name")
    done

    local all_packages=$(printf '%s\n' "${package_names[@]}" | jq -R . | jq -s 'map({name: .})')

    echo "Getting all packages in workspace..."
    local get_workspace=$(echo "${all_packages}" | jq -r 'map(select(.name != null)) | .[] | "\(.name)"')
    local selected_workspace=$(echo "$get_workspace" | fzf)

    local workspace=$(echo "$selected_workspace" | cut -d' ' -f1)

    local package=$1
    local output=$(pnpm search --json ${package} | jq -r --arg WORKSPACE "$workspace" 'map( { name, description, command: ("pnpm add " + .name + " --filter " + .workspace)} )')

    local fzf_input=$(echo "${output}" | jq -r '.[] | "\(.name) - \(.description)"')
    local selected=$(echo "$fzf_input" | fzf)

    # If nothing was selected, exit
    if [[ -z "$selected" ]]; then
        echo "No package selected."
        return
    fi

    local selected_name=$(echo "$selected" | cut -d' ' -f1)
    local command=$(echo "${output}" | jq -r --arg PACKAGE "$selected_name" '.[] | select(.name == $PACKAGE) | .command')

    echo "You selected: $command"
}

genme "$@"
