/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "osmosis.txfees.v1beta1";

/**
 * FeeToken is a struct that specifies a coin denom, and pool ID pair.
 * This marks the token as eligible for use as a tx fee asset in Osmosis.
 * Its price in osmo is derived through looking at the provided pool ID.
 * The pool ID must have osmo as one of its assets.
 */
export interface FeeToken {
  denom: string;
  poolID: number;
}

function createBaseFeeToken(): FeeToken {
  return { denom: "", poolID: 0 };
}

export const FeeToken = {
  encode(message: FeeToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.poolID !== 0) {
      writer.uint32(16).uint64(message.poolID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.poolID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeToken {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      poolID: isSet(object.poolID) ? Number(object.poolID) : 0,
    };
  },

  toJSON(message: FeeToken): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.poolID !== undefined && (obj.poolID = Math.round(message.poolID));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeeToken>, I>>(object: I): FeeToken {
    const message = createBaseFeeToken();
    message.denom = object.denom ?? "";
    message.poolID = object.poolID ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
