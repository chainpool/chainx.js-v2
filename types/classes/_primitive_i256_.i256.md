[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/I256"](../modules/_primitive_i256_.md) › [I256](_primitive_i256_.i256.md)

# Class: I256

**`name`** I256

**`description`** 
A 256-bit signed integer

## Hierarchy

  ↳ [Int](_codec_int_.int.md)

  ↳ **I256**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Interfaces

* [MPrime](../interfaces/_primitive_i256_.i256.mprime.md)
* [ReductionContext](../interfaces/_primitive_i256_.i256.reductioncontext.md)

### Type aliases

* [Endianness](_primitive_i256_.i256.md#static-endianness)
* [IPrimeName](_primitive_i256_.i256.md#static-iprimename)

### Constructors

* [constructor](_primitive_i256_.i256.md#constructor)

### Methods

* [with](_primitive_i256_.i256.md#static-with)

## Type aliases

### `Static` Endianness

Ƭ **Endianness**: *"le" | "be"*

Defined in node_modules/@types/bn.js/index.d.ts:11

___

### `Static` IPrimeName

Ƭ **IPrimeName**: *"k256" | "p224" | "p192" | "p25519"*

Defined in node_modules/@types/bn.js/index.d.ts:12

## Constructors

###  constructor

\+ **new I256**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value`: [AnyNumber](../modules/_types_helpers_.md#anynumber), `bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength), `isHexJson`: boolean): *[I256](_primitive_i256_.i256.md)*

*Inherited from [Int](_codec_int_.int.md).[constructor](_codec_int_.int.md#constructor)*

*Defined in [packages/types/src/codec/Int.ts:19](https://github.com/polkadot-js/api/blob/908d0fcf52/packages/types/src/codec/Int.ts#L19)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) | - |
`value` | [AnyNumber](../modules/_types_helpers_.md#anynumber) | 0 |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) | DEFAULT_UINT_BITS |
`isHexJson` | boolean | true |

**Returns:** *[I256](_primitive_i256_.i256.md)*

## Methods

### `Static` with

▸ **with**(`bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength), `typeName?`: undefined | string): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Int](_codec_int_.int.md)›*

*Inherited from [Int](_codec_int_.int.md).[with](_codec_int_.int.md#static-with)*

*Defined in [packages/types/src/codec/Int.ts:24](https://github.com/polkadot-js/api/blob/908d0fcf52/packages/types/src/codec/Int.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |
`typeName?` | undefined &#124; string |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Int](_codec_int_.int.md)›*