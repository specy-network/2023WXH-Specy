/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "osmosis.accum.v1beta1";

/**
 * AccumulatorContent is the state-entry for the global accumulator.
 * It contains the name of the global accumulator and the total value of
 * shares belonging to it from all positions.
 */
export interface AccumulatorContent {
  accumValue: DecCoin[];
  totalShares: string;
}

export interface Options {
}

/**
 * Record corresponds to an individual position value belonging to the
 * global accumulator.
 */
export interface Record {
  /**
   * num_shares is the number of shares belonging to the position associated
   * with this record.
   */
  numShares: string;
  /**
   * accum_value_per_share is the subset of coins per shar of the global
   * accumulator value that allows to infer how much a position is entitled to
   * per share that it owns.
   *
   * In the default case with no intervals, this value equals to the global
   * accumulator value at the time of the position creation, the last update or
   * reward claim.
   *
   * In the interval case such as concentrated liquidity, this value equals to
   * the global growth of rewards inside the interval during one of: the time of
   * the position creation, the last update or reward claim. Note, that
   * immediately prior to claiming or updating rewards, this value must be
   * updated to "the growth inside at the time of last update + the growth
   * outside at the time of the current block". This is so that the claiming
   * logic can subtract this updated value from the global accumulator value to
   * get the growth inside the interval from the time of last update up until
   * the current block time.
   */
  accumValuePerShare: DecCoin[];
  /**
   * unclaimed_rewards_total is the total amount of unclaimed rewards that the
   * position is entitled to. This value is updated whenever shares are added or
   * removed from an existing position. We also expose API for manually updating
   * this value for some custom use cases such as merging pre-existing positions
   * into a single one.
   */
  unclaimedRewardsTotal: DecCoin[];
  options: Options | undefined;
}

function createBaseAccumulatorContent(): AccumulatorContent {
  return { accumValue: [], totalShares: "" };
}

export const AccumulatorContent = {
  encode(message: AccumulatorContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accumValue) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalShares !== "") {
      writer.uint32(18).string(message.totalShares);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccumulatorContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccumulatorContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accumValue.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalShares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccumulatorContent {
    return {
      accumValue: Array.isArray(object?.accumValue) ? object.accumValue.map((e: any) => DecCoin.fromJSON(e)) : [],
      totalShares: isSet(object.totalShares) ? String(object.totalShares) : "",
    };
  },

  toJSON(message: AccumulatorContent): unknown {
    const obj: any = {};
    if (message.accumValue) {
      obj.accumValue = message.accumValue.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.accumValue = [];
    }
    message.totalShares !== undefined && (obj.totalShares = message.totalShares);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccumulatorContent>, I>>(object: I): AccumulatorContent {
    const message = createBaseAccumulatorContent();
    message.accumValue = object.accumValue?.map((e) => DecCoin.fromPartial(e)) || [];
    message.totalShares = object.totalShares ?? "";
    return message;
  },
};

function createBaseOptions(): Options {
  return {};
}

export const Options = {
  encode(_: Options, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Options {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptions();
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

  fromJSON(_: any): Options {
    return {};
  },

  toJSON(_: Options): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Options>, I>>(_: I): Options {
    const message = createBaseOptions();
    return message;
  },
};

function createBaseRecord(): Record {
  return { numShares: "", accumValuePerShare: [], unclaimedRewardsTotal: [], options: undefined };
}

export const Record = {
  encode(message: Record, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numShares !== "") {
      writer.uint32(10).string(message.numShares);
    }
    for (const v of message.accumValuePerShare) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.unclaimedRewardsTotal) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.options !== undefined) {
      Options.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Record {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numShares = reader.string();
          break;
        case 2:
          message.accumValuePerShare.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.unclaimedRewardsTotal.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.options = Options.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Record {
    return {
      numShares: isSet(object.numShares) ? String(object.numShares) : "",
      accumValuePerShare: Array.isArray(object?.accumValuePerShare)
        ? object.accumValuePerShare.map((e: any) => DecCoin.fromJSON(e))
        : [],
      unclaimedRewardsTotal: Array.isArray(object?.unclaimedRewardsTotal)
        ? object.unclaimedRewardsTotal.map((e: any) => DecCoin.fromJSON(e))
        : [],
      options: isSet(object.options) ? Options.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: Record): unknown {
    const obj: any = {};
    message.numShares !== undefined && (obj.numShares = message.numShares);
    if (message.accumValuePerShare) {
      obj.accumValuePerShare = message.accumValuePerShare.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.accumValuePerShare = [];
    }
    if (message.unclaimedRewardsTotal) {
      obj.unclaimedRewardsTotal = message.unclaimedRewardsTotal.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.unclaimedRewardsTotal = [];
    }
    message.options !== undefined && (obj.options = message.options ? Options.toJSON(message.options) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Record>, I>>(object: I): Record {
    const message = createBaseRecord();
    message.numShares = object.numShares ?? "";
    message.accumValuePerShare = object.accumValuePerShare?.map((e) => DecCoin.fromPartial(e)) || [];
    message.unclaimedRewardsTotal = object.unclaimedRewardsTotal?.map((e) => DecCoin.fromPartial(e)) || [];
    message.options = (object.options !== undefined && object.options !== null)
      ? Options.fromPartial(object.options)
      : undefined;
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
