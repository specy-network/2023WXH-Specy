package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	"github.com/specy-network/specy/x/specy/types"
)

// SetExecutor set a specific executor in the store from its index
func (k Keeper) SetExecutor(ctx sdk.Context, executor types.Executor) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExecutorKeyPrefix))
	b := k.cdc.MustMarshal(&executor)
	store.Set(types.ExecutorKey(
		executor.Address,
	), b)
}

// GetExecutor returns a executor from its index
func (k Keeper) GetExecutor(
	ctx sdk.Context,
	address string,

) (val types.Executor, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExecutorKeyPrefix))

	b := store.Get(types.ExecutorKey(
		address,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveExecutor removes a executor from the store
func (k Keeper) RemoveExecutor(
	ctx sdk.Context,
	address string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExecutorKeyPrefix))
	store.Delete(types.ExecutorKey(
		address,
	))
}

// GetAllExecutor returns all executor
func (k Keeper) GetAllExecutor(ctx sdk.Context) (list []types.Executor) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExecutorKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Executor
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func (k Keeper) ExecutorSelection(ctx sdk.Context, val stakingtypes.ValidatorI) {
	//Use the presenter of the current block as the executor for the next stage
	params := k.GetParams(ctx)
	currentExecutorStatus, found := k.GetCurrentExecutorStatus(ctx)
	if !found {
		currentExecutorStatus = types.CurrentExecutorStatus{
			CurrentExecutor: val.GetOperator().String(),

			ChangeHeight: ctx.BlockHeight() + int64(params.IntervalBlock),
		}

	}
	currentExecutorStatus.ChangeHeight = currentExecutorStatus.ChangeHeight + int64(params.IntervalBlock)
	currentExecutorStatus.CurrentExecutor = val.GetOperator().String()

	k.SetCurrentExecutorStatus(ctx, currentExecutorStatus)
}
