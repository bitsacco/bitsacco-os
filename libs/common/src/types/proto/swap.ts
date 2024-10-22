// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.4
//   protoc               v3.21.12
// source: swap.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const protobufPackage = 'swap';

/** Currency: Enum representing supported currencies. */
export enum Currency {
  BTC = 0,
  KES = 1,
  UNRECOGNIZED = -1,
}

/** SwapStatus: Enum representing the possible statuses of a swap. */
export enum SwapStatus {
  PENDING = 0,
  COMPLETED = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

/** Empty: Represents an empty message. */
export interface Empty {}

/** QuoteRequest: Represents a request for a currency swap quote. */
export interface QuoteRequest {
  /** Currency to swap from */
  from: Currency;
  /** Currency to swap to */
  to: Currency;
  /**
   * Optional amount to quote for
   * If provided, the service will return a quote for the specified amount
   */
  amount?: string | undefined;
}

/** QuoteResponse: Represents the response for a currency swap quote. */
export interface QuoteResponse {
  /** Unique identifier for the quote */
  id: string;
  /** Currency being swapped from */
  from: Currency;
  /** Currency being swapped to */
  to: Currency;
  /** Exchange rate for the swap */
  rate: string;
  /** Expiry time (UNIX) for the quote */
  expiry: string;
  /**
   * Optional amount to for a quote
   * Only available if amount was specified
   */
  amount?: string | undefined;
  /**
   * Optional fee for the swap
   * Only available if amount was specified
   */
  fee?: string | undefined;
}

/** Quote: Represents a currency swap quote. */
export interface Quote {
  /**
   * Optional quote ID to reference a quote.
   * If not specified, the service will create a new quote for the swap
   */
  id: string;
  /**
   * If the quote is expired, allow the service can refresh the quote
   * should it expire before swap
   */
  refreshIfExpired: boolean;
}

/** OnrampSwapRequest: Represents a request to create an onramp swap. */
export interface OnrampSwapRequest {
  /**
   * Optional reference to a quote.
   * If not specified, the service will create a new quote for the swap
   */
  quote?: Quote | undefined;
  /** If provided, the service will attempt mobile money onramp */
  phone?: string | undefined;
  /** Amount to swap */
  amount: string;
}

/** OnrampSwapResponse: Represents the response for an onramp swap. */
export interface OnrampSwapResponse {
  /** Unique identifier for the swap */
  id: string;
  /** Exchange rate used for the swap */
  rate: string;
  /** Current status of the swap */
  status: SwapStatus;
}

/** FindSwapRequest: Represents a request to find a swap. */
export interface FindSwapRequest {
  /** Unique identifier for the swap */
  id: string;
}

export const SWAP_PACKAGE_NAME = 'swap';

/** SwapService: Defines the main service for handling swap operations. */

export interface SwapServiceClient {
  /** GetQuote: Retrieves a quote for a currency swap. */

  getQuote(request: QuoteRequest): Observable<QuoteResponse>;

  /** CreateOnrampSwap: Initiates an onramp swap transaction. */

  createOnrampSwap(request: OnrampSwapRequest): Observable<OnrampSwapResponse>;

  /** FindOnrampSwap: Finds and returns a single onramp swap. */

  findOnrampSwap(request: FindSwapRequest): Observable<OnrampSwapResponse>;
}

/** SwapService: Defines the main service for handling swap operations. */

export interface SwapServiceController {
  /** GetQuote: Retrieves a quote for a currency swap. */

  getQuote(
    request: QuoteRequest,
  ): Promise<QuoteResponse> | Observable<QuoteResponse> | QuoteResponse;

  /** CreateOnrampSwap: Initiates an onramp swap transaction. */

  createOnrampSwap(
    request: OnrampSwapRequest,
  ):
    | Promise<OnrampSwapResponse>
    | Observable<OnrampSwapResponse>
    | OnrampSwapResponse;

  /** FindOnrampSwap: Finds and returns a single onramp swap. */

  findOnrampSwap(
    request: FindSwapRequest,
  ):
    | Promise<OnrampSwapResponse>
    | Observable<OnrampSwapResponse>
    | OnrampSwapResponse;
}

export function SwapServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'getQuote',
      'createOnrampSwap',
      'findOnrampSwap',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('SwapService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('SwapService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const SWAP_SERVICE_NAME = 'SwapService';
