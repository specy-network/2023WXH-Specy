#!/bin/bash

# Configure predefined mnemonic pharses
BINARY=rly
CHAIN_DIR=./network/data
CHAINID_1=specy-test-102
CHAINID_2=osmosis-testnet-5
RELAYER_DIR=./relayer
MNEMONIC_1="alley afraid soup fall idea toss can goose become valve initial strong forward bright dish figure check leopard decide warfare hub unusual join cart"
MNEMONIC_2="record gift you once hip style during joke field prize dust unique length more pencil transfer quit train device arrive energy sort steak upset"

# Ensure rly is installed
if ! [ -x "$(command -v $BINARY)" ]; then
    echo "$BINARY is required to run this script..."
    echo "You can download at https://github.com/cosmos/relayer"
    exit 1
fi

echo "Initializing $BINARY..."
$BINARY config init --home $CHAIN_DIR/$RELAYER_DIR

echo "Adding configurations for both chains..."
$BINARY chains add-dir ./network/osmosis-local/relayer/interchain-acc-config/chains --home $CHAIN_DIR/$RELAYER_DIR
$BINARY paths add $CHAINID_1 $CHAINID_2 test1-test2 --file ./network/osmosis-local/relayer/interchain-acc-config/paths/test1-test2.json --home $CHAIN_DIR/$RELAYER_DIR

echo "Restoring accounts..."
$BINARY keys restore $CHAINID_1 testkey1 "$MNEMONIC_1" --home $CHAIN_DIR/$RELAYER_DIR
$BINARY keys restore $CHAINID_2 testkey2 "$MNEMONIC_2" --home $CHAIN_DIR/$RELAYER_DIR

