package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/specy-network/specy/x/specy/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group specy queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdListTask())
	cmd.AddCommand(CmdShowTask())
	cmd.AddCommand(CmdListExecutor())
	cmd.AddCommand(CmdShowExecutor())
	cmd.AddCommand(CmdListDeposit())
	cmd.AddCommand(CmdShowDeposit())
	cmd.AddCommand(CmdShowCurrentExecutorStatus())
	cmd.AddCommand(CmdPool())

	cmd.AddCommand(CmdTaskAllByOwner())

	cmd.AddCommand(CmdShowHistoryExecuteCount())
	cmd.AddCommand(CmdListExecuteRecord())
	cmd.AddCommand(CmdShowExecuteRecord())
	cmd.AddCommand(CmdExecuteRecordAllByOwnerAndName())

	// this line is used by starport scaffolding # 1

	return cmd
}
