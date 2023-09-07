/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "osmosis.cosmwasmpool.v1beta1";

/** ===================== GetSwapFeeQueryMsg */
export interface GetSwapFeeQueryMsg {
  /** get_swap_fee is the query strcuture to get swap fee. */
  getSwapFee: EmptyStruct | undefined;
}

export interface GetSwapFeeQueryMsgResponse {
  /** swap_fee is the swap fee for this swap estimate. */
  swapFee: string;
}

/** ===================== SpotPriceQueryMsg */
export interface SpotPrice {
  /** quote_asset_denom is the quote asset of the spot query. */
  quoteAssetDenom: string;
  /** base_asset_denom is the base asset of the spot query. */
  baseAssetDenom: string;
}

export interface SpotPriceQueryMsg {
  /**
   * spot_price is the structure containing request field of the spot price
   * query message.
   */
  spotPrice: SpotPrice | undefined;
}

export interface SpotPriceQueryMsgResponse {
  /** spot_price is the spot price returned. */
  spotPrice: string;
}

/** ===================== GetTotalPoolLiquidityQueryMsg */
export interface EmptyStruct {
}

export interface GetTotalPoolLiquidityQueryMsg {
  /**
   * get_total_pool_liquidity is the structure containing request field of the
   * total pool liquidity query message.
   */
  getTotalPoolLiquidity: EmptyStruct | undefined;
}

export interface GetTotalPoolLiquidityQueryMsgResponse {
  /**
   * total_pool_liquidity is the total liquidity in the pool denominated in
   *  coins.
   */
  totalPoolLiquidity: Coin[];
}

/** ===================== GetTotalSharesQueryMsg */
export interface GetTotalSharesQueryMsg {
  /**
   * get_total_shares is the structure containing request field of the
   * total shares query message.
   */
  getTotalShares: EmptyStruct | undefined;
}

export interface GetTotalSharesQueryMsgResponse {
  /** total_shares is the amount of shares returned. */
  totalShares: string;
}

function createBaseGetSwapFeeQueryMsg(): GetSwapFeeQueryMsg {
  return { getSwapFee: undefined };
}

export const GetSwapFeeQueryMsg = {
  encode(message: GetSwapFeeQueryMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.getSwapFee !== undefined) {
      EmptyStruct.encode(message.getSwapFee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSwapFeeQueryMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSwapFeeQueryMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.getSwapFee = EmptyStruct.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSwapFeeQueryMsg {
    return { getSwapFee: isSet(object.getSwapFee) ? EmptyStruct.fromJSON(object.getSwapFee) : undefined };
  },

  toJSON(message: GetSwapFeeQueryMsg): unknown {
    const obj: any = {};
    message.getSwapFee !== undefined
      && (obj.getSwapFee = message.getSwapFee ? EmptyStruct.toJSON(message.getSwapFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetSwapFeeQueryMsg>, I>>(object: I): GetSwapFeeQueryMsg {
    const message = createBaseGetSwapFeeQueryMsg();
    message.getSwapFee = (object.getSwapFee !== undefined && object.getSwapFee !== null)
      ? EmptyStruct.fromPartial(object.getSwapFee)
      : undefined;
    return message;
  },
};

function createBaseGetSwapFeeQueryMsgResponse(): GetSwapFeeQueryMsgResponse {
  return { swapFee: "" };
}

export const GetSwapFeeQueryMsgResponse = {
  encode(message: GetSwapFeeQueryMsgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapFee !== "") {
      writer.uint32(26).string(message.swapFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSwapFeeQueryMsgResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSwapFeeQueryMsgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.swapFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSwapFeeQueryMsgResponse {
    return { swapFee: isSet(object.swapFee) ? String(object.swapFee) : "" };
  },

  toJSON(message: GetSwapFeeQueryMsgResponse): unknown {
    const obj: any = {};
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetSwapFeeQueryMsgResponse>, I>>(object: I): GetSwapFeeQueryMsgResponse {
    const message = createBaseGetSwapFeeQueryMsgResponse();
    message.swapFee = object.swapFee ?? "";
    return message;
  },
};

function createBaseSpotPrice(): SpotPrice {
  return { quoteAssetDenom: "", baseAssetDenom: "" };
}

export const SpotPrice = {
  encode(message: SpotPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quoteAssetDenom !== "") {
      writer.uint32(10).string(message.quoteAssetDenom);
    }
    if (message.baseAssetDenom !== "") {
      writer.uint32(18).string(message.baseAssetDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpotPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quoteAssetDenom = reader.string();
          break;
        case 2:
          message.baseAssetDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpotPrice {
    return {
      quoteAssetDenom: isSet(object.quoteAssetDenom) ? String(object.quoteAssetDenom) : "",
      baseAssetDenom: isSet(object.baseAssetDenom) ? String(object.baseAssetDenom) : "",
    };
  },

  toJSON(message: SpotPrice): unknown {
    const obj: any = {};
    message.quoteAssetDenom !== undefined && (obj.quoteAssetDenom = message.quoteAssetDenom);
    message.baseAssetDenom !== undefined && (obj.baseAssetDenom = message.baseAssetDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpotPrice>, I>>(object: I): SpotPrice {
    const message = createBaseSpotPrice();
    message.quoteAssetDenom = object.quoteAssetDenom ?? "";
    message.baseAssetDenom = object.baseAssetDenom ?? "";
    return message;
  },
};

function createBaseSpotPriceQueryMsg(): SpotPriceQueryMsg {
  return { spotPrice: undefined };
}

export const SpotPriceQueryMsg = {
  encode(message: SpotPriceQueryMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spotPrice !== undefined) {
      SpotPrice.encode(message.spotPrice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpotPriceQueryMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotPriceQueryMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = SpotPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpotPriceQueryMsg {
    return { spotPrice: isSet(object.spotPrice) ? SpotPrice.fromJSON(object.spotPrice) : undefined };
  },

  toJSON(message: SpotPriceQueryMsg): unknown {
    const obj: any = {};
    message.spotPrice !== undefined
      && (obj.spotPrice = message.spotPrice ? SpotPrice.toJSON(message.spotPrice) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpotPriceQueryMsg>, I>>(object: I): SpotPriceQueryMsg {
    const message = createBaseSpotPriceQueryMsg();
    message.spotPrice = (object.spotPrice !== undefined && object.spotPrice !== null)
      ? SpotPrice.fromPartial(object.spotPrice)
      : undefined;
    return message;
  },
};

function createBaseSpotPriceQueryMsgResponse(): SpotPriceQueryMsgResponse {
  return { spotPrice: "" };
}

export const SpotPriceQueryMsgResponse = {
  encode(message: SpotPriceQueryMsgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpotPriceQueryMsgResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotPriceQueryMsgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpotPriceQueryMsgResponse {
    return { spotPrice: isSet(object.spotPrice) ? String(object.spotPrice) : "" };
  },

  toJSON(message: SpotPriceQueryMsgResponse): unknown {
    const obj: any = {};
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpotPriceQueryMsgResponse>, I>>(object: I): SpotPriceQueryMsgResponse {
    const message = createBaseSpotPriceQueryMsgResponse();
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },
};

function createBaseEmptyStruct(): EmptyStruct {
  return {};
}

export const EmptyStruct = {
  encode(_: EmptyStruct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmptyStruct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmptyStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): EmptyStruct {
    return {};
  },

  toJSON(_: EmptyStruct): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EmptyStruct>, I>>(_: I): EmptyStruct {
    const message = createBaseEmptyStruct();
    return message;
  },
};

function createBaseGetTotalPoolLiquidityQueryMsg(): GetTotalPoolLiquidityQueryMsg {
  return { getTotalPoolLiquidity: undefined };
}

export const GetTotalPoolLiquidityQueryMsg = {
  encode(message: GetTotalPoolLiquidityQueryMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.getTotalPoolLiquidity !== undefined) {
      EmptyStruct.encode(message.getTotalPoolLiquidity, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTotalPoolLiquidityQueryMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTotalPoolLiquidityQueryMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.getTotalPoolLiquidity = EmptyStruct.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTotalPoolLiquidityQueryMsg {
    return {
      getTotalPoolLiquidity: isSet(object.getTotalPoolLiquidity)
        ? EmptyStruct.fromJSON(object.getTotalPoolLiquidity)
        : undefined,
    };
  },

  toJSON(message: GetTotalPoolLiquidityQueryMsg): unknown {
    const obj: any = {};
    message.getTotalPoolLiquidity !== undefined && (obj.getTotalPoolLiquidity = message.getTotalPoolLiquidity
      ? EmptyStruct.toJSON(message.getTotalPoolLiquidity)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetTotalPoolLiquidityQueryMsg>, I>>(
    object: I,
  ): GetTotalPoolLiquidityQueryMsg {
    const message = createBaseGetTotalPoolLiquidityQueryMsg();
    message.getTotalPoolLiquidity =
      (object.getTotalPoolLiquidity !== undefined && object.getTotalPoolLiquidity !== null)
        ? EmptyStruct.fromPartial(object.getTotalPoolLiquidity)
        : undefined;
    return message;
  },
};

function createBaseGetTotalPoolLiquidityQueryMsgResponse(): GetTotalPoolLiquidityQueryMsgResponse {
  return { totalPoolLiquidity: [] };
}

export const GetTotalPoolLiquidityQueryMsgResponse = {
  encode(message: GetTotalPoolLiquidityQueryMsgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.totalPoolLiquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTotalPoolLiquidityQueryMsgResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTotalPoolLiquidityQueryMsgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalPoolLiquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTotalPoolLiquidityQueryMsgResponse {
    return {
      totalPoolLiquidity: Array.isArray(object?.totalPoolLiquidity)
        ? object.totalPoolLiquidity.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetTotalPoolLiquidityQueryMsgResponse): unknown {
    const obj: any = {};
    if (message.totalPoolLiquidity) {
      obj.totalPoolLiquidity = message.totalPoolLiquidity.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalPoolLiquidity = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetTotalPoolLiquidityQueryMsgResponse>, I>>(
    object: I,
  ): GetTotalPoolLiquidityQueryMsgResponse {
    const message = createBaseGetTotalPoolLiquidityQueryMsgResponse();
    message.totalPoolLiquidity = object.totalPoolLiquidity?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetTotalSharesQueryMsg(): GetTotalSharesQueryMsg {
  return { getTotalShares: undefined };
}

export const GetTotalSharesQueryMsg = {
  encode(message: GetTotalSharesQueryMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.getTotalShares !== undefined) {
      EmptyStruct.encode(message.getTotalShares, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTotalSharesQueryMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTotalSharesQueryMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.getTotalShares = EmptyStruct.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTotalSharesQueryMsg {
    return { getTotalShares: isSet(object.getTotalShares) ? EmptyStruct.fromJSON(object.getTotalShares) : undefined };
  },

  toJSON(message: GetTotalSharesQueryMsg): unknown {
    const obj: any = {};
    message.getTotalShares !== undefined
      && (obj.getTotalShares = message.getTotalShares ? EmptyStruct.toJSON(message.getTotalShares) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetTotalSharesQueryMsg>, I>>(object: I): GetTotalSharesQueryMsg {
    const message = createBaseGetTotalSharesQueryMsg();
    message.getTotalShares = (object.getTotalShares !== undefined && object.getTotalShares !== null)
      ? EmptyStruct.fromPartial(object.getTotalShares)
      : undefined;
    return message;
  },
};

function createBaseGetTotalSharesQueryMsgResponse(): GetTotalSharesQueryMsgResponse {
  return { totalShares: "" };
}

export const GetTotalSharesQueryMsgResponse = {
  encode(message: GetTotalSharesQueryMsgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalShares !== "") {
      writer.uint32(10).string(message.totalShares);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTotalSharesQueryMsgResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTotalSharesQueryMsgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalShares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTotalSharesQueryMsgResponse {
    return { totalShares: isSet(object.totalShares) ? String(object.totalShares) : "" };
  },

  toJSON(message: GetTotalSharesQueryMsgResponse): unknown {
    const obj: any = {};
    message.totalShares !== undefined && (obj.totalShares = message.totalShares);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetTotalSharesQueryMsgResponse>, I>>(
    object: I,
  ): GetTotalSharesQueryMsgResponse {
    const message = createBaseGetTotalSharesQueryMsgResponse();
    message.totalShares = object.totalShares ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
