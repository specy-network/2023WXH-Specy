package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/specy-network/specy/x/specy/types"
	"github.com/spf13/cobra"
)

func CmdListTask() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-task",
		Short: "list all task",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllTaskRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.TaskAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowTask() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-task [owner] [name]",
		Short: "shows a task",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argOwner := args[0]
			argName := args[1]

			params := &types.QueryGetTaskRequest{
				Owner: argOwner,
				Name:  argName,
			}

			res, err := queryClient.Task(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
