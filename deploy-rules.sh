#!/usr/bin/env bash
# Envoie les règles de sécurité à Firebase. Usage : ./deploy-rules.sh ton-projet
set -e
PROJECT="${1:?Usage: ./deploy-rules.sh <id-projet-firebase>}"
npx --yes firebase-tools login
npx --yes firebase-tools deploy --only database --project "$PROJECT"
