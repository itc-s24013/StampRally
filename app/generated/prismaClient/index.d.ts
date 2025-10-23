
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Answers
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Answers = $Result.DefaultSelection<Prisma.$AnswersPayload>
/**
 * Model Questions
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type Questions = $Result.DefaultSelection<Prisma.$QuestionsPayload>
/**
 * Model Stamps
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Stamps = $Result.DefaultSelection<Prisma.$StampsPayload>
/**
 * Model Students
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Students = $Result.DefaultSelection<Prisma.$StudentsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Answers
 * const answers = await prisma.answers.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Answers
   * const answers = await prisma.answers.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.answers`: Exposes CRUD operations for the **Answers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answers.findMany()
    * ```
    */
  get answers(): Prisma.AnswersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questions`: Exposes CRUD operations for the **Questions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.questions.findMany()
    * ```
    */
  get questions(): Prisma.QuestionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stamps`: Exposes CRUD operations for the **Stamps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stamps
    * const stamps = await prisma.stamps.findMany()
    * ```
    */
  get stamps(): Prisma.StampsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.students`: Exposes CRUD operations for the **Students** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.students.findMany()
    * ```
    */
  get students(): Prisma.StudentsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Answers: 'Answers',
    Questions: 'Questions',
    Stamps: 'Stamps',
    Students: 'Students'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "answers" | "questions" | "stamps" | "students"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Answers: {
        payload: Prisma.$AnswersPayload<ExtArgs>
        fields: Prisma.AnswersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload>
          }
          findFirst: {
            args: Prisma.AnswersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload>
          }
          findMany: {
            args: Prisma.AnswersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload>[]
          }
          create: {
            args: Prisma.AnswersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload>
          }
          createMany: {
            args: Prisma.AnswersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload>[]
          }
          delete: {
            args: Prisma.AnswersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload>
          }
          update: {
            args: Prisma.AnswersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload>
          }
          deleteMany: {
            args: Prisma.AnswersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload>[]
          }
          upsert: {
            args: Prisma.AnswersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswersPayload>
          }
          aggregate: {
            args: Prisma.AnswersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswers>
          }
          groupBy: {
            args: Prisma.AnswersGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswersGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswersCountArgs<ExtArgs>
            result: $Utils.Optional<AnswersCountAggregateOutputType> | number
          }
        }
      }
      Questions: {
        payload: Prisma.$QuestionsPayload<ExtArgs>
        fields: Prisma.QuestionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          findFirst: {
            args: Prisma.QuestionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          findMany: {
            args: Prisma.QuestionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>[]
          }
          create: {
            args: Prisma.QuestionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          createMany: {
            args: Prisma.QuestionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>[]
          }
          delete: {
            args: Prisma.QuestionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          update: {
            args: Prisma.QuestionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          deleteMany: {
            args: Prisma.QuestionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>[]
          }
          upsert: {
            args: Prisma.QuestionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          aggregate: {
            args: Prisma.QuestionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestions>
          }
          groupBy: {
            args: Prisma.QuestionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionsCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionsCountAggregateOutputType> | number
          }
        }
      }
      Stamps: {
        payload: Prisma.$StampsPayload<ExtArgs>
        fields: Prisma.StampsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StampsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StampsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampsPayload>
          }
          findFirst: {
            args: Prisma.StampsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StampsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampsPayload>
          }
          findMany: {
            args: Prisma.StampsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampsPayload>[]
          }
          create: {
            args: Prisma.StampsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampsPayload>
          }
          createMany: {
            args: Prisma.StampsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StampsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampsPayload>[]
          }
          delete: {
            args: Prisma.StampsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampsPayload>
          }
          update: {
            args: Prisma.StampsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampsPayload>
          }
          deleteMany: {
            args: Prisma.StampsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StampsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StampsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampsPayload>[]
          }
          upsert: {
            args: Prisma.StampsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StampsPayload>
          }
          aggregate: {
            args: Prisma.StampsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStamps>
          }
          groupBy: {
            args: Prisma.StampsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StampsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StampsCountArgs<ExtArgs>
            result: $Utils.Optional<StampsCountAggregateOutputType> | number
          }
        }
      }
      Students: {
        payload: Prisma.$StudentsPayload<ExtArgs>
        fields: Prisma.StudentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          findFirst: {
            args: Prisma.StudentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          findMany: {
            args: Prisma.StudentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>[]
          }
          create: {
            args: Prisma.StudentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          createMany: {
            args: Prisma.StudentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>[]
          }
          delete: {
            args: Prisma.StudentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          update: {
            args: Prisma.StudentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          deleteMany: {
            args: Prisma.StudentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>[]
          }
          upsert: {
            args: Prisma.StudentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          aggregate: {
            args: Prisma.StudentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudents>
          }
          groupBy: {
            args: Prisma.StudentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentsCountArgs<ExtArgs>
            result: $Utils.Optional<StudentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    answers?: AnswersOmit
    questions?: QuestionsOmit
    stamps?: StampsOmit
    students?: StudentsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type QuestionsCountOutputType
   */

  export type QuestionsCountOutputType = {
    Answers: number
  }

  export type QuestionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Answers?: boolean | QuestionsCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionsCountOutputType
     */
    select?: QuestionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Answers
   */

  export type AggregateAnswers = {
    _count: AnswersCountAggregateOutputType | null
    _avg: AnswersAvgAggregateOutputType | null
    _sum: AnswersSumAggregateOutputType | null
    _min: AnswersMinAggregateOutputType | null
    _max: AnswersMaxAggregateOutputType | null
  }

  export type AnswersAvgAggregateOutputType = {
    id: number | null
    question_id: number | null
  }

  export type AnswersSumAggregateOutputType = {
    id: bigint | null
    question_id: bigint | null
  }

  export type AnswersMinAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    question_id: bigint | null
    answer: string | null
    answered_at: Date | null
  }

  export type AnswersMaxAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    question_id: bigint | null
    answer: string | null
    answered_at: Date | null
  }

  export type AnswersCountAggregateOutputType = {
    id: number
    user_id: number
    question_id: number
    answer: number
    answered_at: number
    _all: number
  }


  export type AnswersAvgAggregateInputType = {
    id?: true
    question_id?: true
  }

  export type AnswersSumAggregateInputType = {
    id?: true
    question_id?: true
  }

  export type AnswersMinAggregateInputType = {
    id?: true
    user_id?: true
    question_id?: true
    answer?: true
    answered_at?: true
  }

  export type AnswersMaxAggregateInputType = {
    id?: true
    user_id?: true
    question_id?: true
    answer?: true
    answered_at?: true
  }

  export type AnswersCountAggregateInputType = {
    id?: true
    user_id?: true
    question_id?: true
    answer?: true
    answered_at?: true
    _all?: true
  }

  export type AnswersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to aggregate.
     */
    where?: AnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswersOrderByWithRelationInput | AnswersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswersMaxAggregateInputType
  }

  export type GetAnswersAggregateType<T extends AnswersAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswers[P]>
      : GetScalarType<T[P], AggregateAnswers[P]>
  }




  export type AnswersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswersWhereInput
    orderBy?: AnswersOrderByWithAggregationInput | AnswersOrderByWithAggregationInput[]
    by: AnswersScalarFieldEnum[] | AnswersScalarFieldEnum
    having?: AnswersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswersCountAggregateInputType | true
    _avg?: AnswersAvgAggregateInputType
    _sum?: AnswersSumAggregateInputType
    _min?: AnswersMinAggregateInputType
    _max?: AnswersMaxAggregateInputType
  }

  export type AnswersGroupByOutputType = {
    id: bigint
    user_id: string
    question_id: bigint
    answer: string
    answered_at: Date | null
    _count: AnswersCountAggregateOutputType | null
    _avg: AnswersAvgAggregateOutputType | null
    _sum: AnswersSumAggregateOutputType | null
    _min: AnswersMinAggregateOutputType | null
    _max: AnswersMaxAggregateOutputType | null
  }

  type GetAnswersGroupByPayload<T extends AnswersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswersGroupByOutputType[P]>
            : GetScalarType<T[P], AnswersGroupByOutputType[P]>
        }
      >
    >


  export type AnswersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    question_id?: boolean
    answer?: boolean
    answered_at?: boolean
    Questions?: boolean | QuestionsDefaultArgs<ExtArgs>
    Students?: boolean | StudentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answers"]>

  export type AnswersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    question_id?: boolean
    answer?: boolean
    answered_at?: boolean
    Questions?: boolean | QuestionsDefaultArgs<ExtArgs>
    Students?: boolean | StudentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answers"]>

  export type AnswersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    question_id?: boolean
    answer?: boolean
    answered_at?: boolean
    Questions?: boolean | QuestionsDefaultArgs<ExtArgs>
    Students?: boolean | StudentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answers"]>

  export type AnswersSelectScalar = {
    id?: boolean
    user_id?: boolean
    question_id?: boolean
    answer?: boolean
    answered_at?: boolean
  }

  export type AnswersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "question_id" | "answer" | "answered_at", ExtArgs["result"]["answers"]>
  export type AnswersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Questions?: boolean | QuestionsDefaultArgs<ExtArgs>
    Students?: boolean | StudentsDefaultArgs<ExtArgs>
  }
  export type AnswersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Questions?: boolean | QuestionsDefaultArgs<ExtArgs>
    Students?: boolean | StudentsDefaultArgs<ExtArgs>
  }
  export type AnswersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Questions?: boolean | QuestionsDefaultArgs<ExtArgs>
    Students?: boolean | StudentsDefaultArgs<ExtArgs>
  }

  export type $AnswersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answers"
    objects: {
      Questions: Prisma.$QuestionsPayload<ExtArgs>
      Students: Prisma.$StudentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: string
      question_id: bigint
      answer: string
      answered_at: Date | null
    }, ExtArgs["result"]["answers"]>
    composites: {}
  }

  type AnswersGetPayload<S extends boolean | null | undefined | AnswersDefaultArgs> = $Result.GetResult<Prisma.$AnswersPayload, S>

  type AnswersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswersCountAggregateInputType | true
    }

  export interface AnswersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answers'], meta: { name: 'Answers' } }
    /**
     * Find zero or one Answers that matches the filter.
     * @param {AnswersFindUniqueArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswersFindUniqueArgs>(args: SelectSubset<T, AnswersFindUniqueArgs<ExtArgs>>): Prisma__AnswersClient<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswersFindUniqueOrThrowArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswersFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswersClient<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersFindFirstArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswersFindFirstArgs>(args?: SelectSubset<T, AnswersFindFirstArgs<ExtArgs>>): Prisma__AnswersClient<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersFindFirstOrThrowArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswersFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswersFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswersClient<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answers.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answersWithIdOnly = await prisma.answers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswersFindManyArgs>(args?: SelectSubset<T, AnswersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answers.
     * @param {AnswersCreateArgs} args - Arguments to create a Answers.
     * @example
     * // Create one Answers
     * const Answers = await prisma.answers.create({
     *   data: {
     *     // ... data to create a Answers
     *   }
     * })
     * 
     */
    create<T extends AnswersCreateArgs>(args: SelectSubset<T, AnswersCreateArgs<ExtArgs>>): Prisma__AnswersClient<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswersCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answers = await prisma.answers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswersCreateManyArgs>(args?: SelectSubset<T, AnswersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswersCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answers = await prisma.answers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answersWithIdOnly = await prisma.answers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswersCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answers.
     * @param {AnswersDeleteArgs} args - Arguments to delete one Answers.
     * @example
     * // Delete one Answers
     * const Answers = await prisma.answers.delete({
     *   where: {
     *     // ... filter to delete one Answers
     *   }
     * })
     * 
     */
    delete<T extends AnswersDeleteArgs>(args: SelectSubset<T, AnswersDeleteArgs<ExtArgs>>): Prisma__AnswersClient<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answers.
     * @param {AnswersUpdateArgs} args - Arguments to update one Answers.
     * @example
     * // Update one Answers
     * const answers = await prisma.answers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswersUpdateArgs>(args: SelectSubset<T, AnswersUpdateArgs<ExtArgs>>): Prisma__AnswersClient<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswersDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswersDeleteManyArgs>(args?: SelectSubset<T, AnswersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answers = await prisma.answers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswersUpdateManyArgs>(args: SelectSubset<T, AnswersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswersUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answers = await prisma.answers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answersWithIdOnly = await prisma.answers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnswersUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answers.
     * @param {AnswersUpsertArgs} args - Arguments to update or create a Answers.
     * @example
     * // Update or create a Answers
     * const answers = await prisma.answers.upsert({
     *   create: {
     *     // ... data to create a Answers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answers we want to update
     *   }
     * })
     */
    upsert<T extends AnswersUpsertArgs>(args: SelectSubset<T, AnswersUpsertArgs<ExtArgs>>): Prisma__AnswersClient<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answers.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswersCountArgs>(
      args?: Subset<T, AnswersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnswersAggregateArgs>(args: Subset<T, AnswersAggregateArgs>): Prisma.PrismaPromise<GetAnswersAggregateType<T>>

    /**
     * Group by Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnswersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswersGroupByArgs['orderBy'] }
        : { orderBy?: AnswersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnswersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answers model
   */
  readonly fields: AnswersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Questions<T extends QuestionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionsDefaultArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Students<T extends StudentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentsDefaultArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Answers model
   */
  interface AnswersFieldRefs {
    readonly id: FieldRef<"Answers", 'BigInt'>
    readonly user_id: FieldRef<"Answers", 'String'>
    readonly question_id: FieldRef<"Answers", 'BigInt'>
    readonly answer: FieldRef<"Answers", 'String'>
    readonly answered_at: FieldRef<"Answers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Answers findUnique
   */
  export type AnswersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where: AnswersWhereUniqueInput
  }

  /**
   * Answers findUniqueOrThrow
   */
  export type AnswersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where: AnswersWhereUniqueInput
  }

  /**
   * Answers findFirst
   */
  export type AnswersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswersOrderByWithRelationInput | AnswersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * Answers findFirstOrThrow
   */
  export type AnswersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswersOrderByWithRelationInput | AnswersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * Answers findMany
   */
  export type AnswersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswersOrderByWithRelationInput | AnswersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * Answers create
   */
  export type AnswersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    /**
     * The data needed to create a Answers.
     */
    data: XOR<AnswersCreateInput, AnswersUncheckedCreateInput>
  }

  /**
   * Answers createMany
   */
  export type AnswersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswersCreateManyInput | AnswersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answers createManyAndReturn
   */
  export type AnswersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswersCreateManyInput | AnswersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answers update
   */
  export type AnswersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    /**
     * The data needed to update a Answers.
     */
    data: XOR<AnswersUpdateInput, AnswersUncheckedUpdateInput>
    /**
     * Choose, which Answers to update.
     */
    where: AnswersWhereUniqueInput
  }

  /**
   * Answers updateMany
   */
  export type AnswersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswersUpdateManyMutationInput, AnswersUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswersWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answers updateManyAndReturn
   */
  export type AnswersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswersUpdateManyMutationInput, AnswersUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswersWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answers upsert
   */
  export type AnswersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    /**
     * The filter to search for the Answers to update in case it exists.
     */
    where: AnswersWhereUniqueInput
    /**
     * In case the Answers found by the `where` argument doesn't exist, create a new Answers with this data.
     */
    create: XOR<AnswersCreateInput, AnswersUncheckedCreateInput>
    /**
     * In case the Answers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswersUpdateInput, AnswersUncheckedUpdateInput>
  }

  /**
   * Answers delete
   */
  export type AnswersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    /**
     * Filter which Answers to delete.
     */
    where: AnswersWhereUniqueInput
  }

  /**
   * Answers deleteMany
   */
  export type AnswersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswersWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answers without action
   */
  export type AnswersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
  }


  /**
   * Model Questions
   */

  export type AggregateQuestions = {
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  export type QuestionsAvgAggregateOutputType = {
    id: number | null
  }

  export type QuestionsSumAggregateOutputType = {
    id: bigint | null
  }

  export type QuestionsMinAggregateOutputType = {
    id: bigint | null
    question_text: string | null
    correct_answer: string | null
    created_at: Date | null
    updated_at: Date | null
    password: string | null
    option_a: string | null
    option_b: string | null
    option_c: string | null
    option_d: string | null
  }

  export type QuestionsMaxAggregateOutputType = {
    id: bigint | null
    question_text: string | null
    correct_answer: string | null
    created_at: Date | null
    updated_at: Date | null
    password: string | null
    option_a: string | null
    option_b: string | null
    option_c: string | null
    option_d: string | null
  }

  export type QuestionsCountAggregateOutputType = {
    id: number
    question_text: number
    correct_answer: number
    created_at: number
    updated_at: number
    password: number
    option_a: number
    option_b: number
    option_c: number
    option_d: number
    _all: number
  }


  export type QuestionsAvgAggregateInputType = {
    id?: true
  }

  export type QuestionsSumAggregateInputType = {
    id?: true
  }

  export type QuestionsMinAggregateInputType = {
    id?: true
    question_text?: true
    correct_answer?: true
    created_at?: true
    updated_at?: true
    password?: true
    option_a?: true
    option_b?: true
    option_c?: true
    option_d?: true
  }

  export type QuestionsMaxAggregateInputType = {
    id?: true
    question_text?: true
    correct_answer?: true
    created_at?: true
    updated_at?: true
    password?: true
    option_a?: true
    option_b?: true
    option_c?: true
    option_d?: true
  }

  export type QuestionsCountAggregateInputType = {
    id?: true
    question_text?: true
    correct_answer?: true
    created_at?: true
    updated_at?: true
    password?: true
    option_a?: true
    option_b?: true
    option_c?: true
    option_d?: true
    _all?: true
  }

  export type QuestionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to aggregate.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionsMaxAggregateInputType
  }

  export type GetQuestionsAggregateType<T extends QuestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestions[P]>
      : GetScalarType<T[P], AggregateQuestions[P]>
  }




  export type QuestionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionsWhereInput
    orderBy?: QuestionsOrderByWithAggregationInput | QuestionsOrderByWithAggregationInput[]
    by: QuestionsScalarFieldEnum[] | QuestionsScalarFieldEnum
    having?: QuestionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionsCountAggregateInputType | true
    _avg?: QuestionsAvgAggregateInputType
    _sum?: QuestionsSumAggregateInputType
    _min?: QuestionsMinAggregateInputType
    _max?: QuestionsMaxAggregateInputType
  }

  export type QuestionsGroupByOutputType = {
    id: bigint
    question_text: string
    correct_answer: string
    created_at: Date
    updated_at: Date
    password: string
    option_a: string
    option_b: string
    option_c: string
    option_d: string
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  type GetQuestionsGroupByPayload<T extends QuestionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
        }
      >
    >


  export type QuestionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_text?: boolean
    correct_answer?: boolean
    created_at?: boolean
    updated_at?: boolean
    password?: boolean
    option_a?: boolean
    option_b?: boolean
    option_c?: boolean
    option_d?: boolean
    Answers?: boolean | Questions$AnswersArgs<ExtArgs>
    Stamps?: boolean | Questions$StampsArgs<ExtArgs>
    _count?: boolean | QuestionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>

  export type QuestionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_text?: boolean
    correct_answer?: boolean
    created_at?: boolean
    updated_at?: boolean
    password?: boolean
    option_a?: boolean
    option_b?: boolean
    option_c?: boolean
    option_d?: boolean
  }, ExtArgs["result"]["questions"]>

  export type QuestionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_text?: boolean
    correct_answer?: boolean
    created_at?: boolean
    updated_at?: boolean
    password?: boolean
    option_a?: boolean
    option_b?: boolean
    option_c?: boolean
    option_d?: boolean
  }, ExtArgs["result"]["questions"]>

  export type QuestionsSelectScalar = {
    id?: boolean
    question_text?: boolean
    correct_answer?: boolean
    created_at?: boolean
    updated_at?: boolean
    password?: boolean
    option_a?: boolean
    option_b?: boolean
    option_c?: boolean
    option_d?: boolean
  }

  export type QuestionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question_text" | "correct_answer" | "created_at" | "updated_at" | "password" | "option_a" | "option_b" | "option_c" | "option_d", ExtArgs["result"]["questions"]>
  export type QuestionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Answers?: boolean | Questions$AnswersArgs<ExtArgs>
    Stamps?: boolean | Questions$StampsArgs<ExtArgs>
    _count?: boolean | QuestionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuestionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuestionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Questions"
    objects: {
      Answers: Prisma.$AnswersPayload<ExtArgs>[]
      Stamps: Prisma.$StampsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      question_text: string
      correct_answer: string
      created_at: Date
      updated_at: Date
      password: string
      option_a: string
      option_b: string
      option_c: string
      option_d: string
    }, ExtArgs["result"]["questions"]>
    composites: {}
  }

  type QuestionsGetPayload<S extends boolean | null | undefined | QuestionsDefaultArgs> = $Result.GetResult<Prisma.$QuestionsPayload, S>

  type QuestionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionsCountAggregateInputType | true
    }

  export interface QuestionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Questions'], meta: { name: 'Questions' } }
    /**
     * Find zero or one Questions that matches the filter.
     * @param {QuestionsFindUniqueArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionsFindUniqueArgs>(args: SelectSubset<T, QuestionsFindUniqueArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Questions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionsFindUniqueOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionsFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindFirstArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionsFindFirstArgs>(args?: SelectSubset<T, QuestionsFindFirstArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindFirstOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionsFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.questions.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.questions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionsWithIdOnly = await prisma.questions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionsFindManyArgs>(args?: SelectSubset<T, QuestionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Questions.
     * @param {QuestionsCreateArgs} args - Arguments to create a Questions.
     * @example
     * // Create one Questions
     * const Questions = await prisma.questions.create({
     *   data: {
     *     // ... data to create a Questions
     *   }
     * })
     * 
     */
    create<T extends QuestionsCreateArgs>(args: SelectSubset<T, QuestionsCreateArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionsCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionsCreateManyArgs>(args?: SelectSubset<T, QuestionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionsCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionsWithIdOnly = await prisma.questions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionsCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Questions.
     * @param {QuestionsDeleteArgs} args - Arguments to delete one Questions.
     * @example
     * // Delete one Questions
     * const Questions = await prisma.questions.delete({
     *   where: {
     *     // ... filter to delete one Questions
     *   }
     * })
     * 
     */
    delete<T extends QuestionsDeleteArgs>(args: SelectSubset<T, QuestionsDeleteArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Questions.
     * @param {QuestionsUpdateArgs} args - Arguments to update one Questions.
     * @example
     * // Update one Questions
     * const questions = await prisma.questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionsUpdateArgs>(args: SelectSubset<T, QuestionsUpdateArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionsDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionsDeleteManyArgs>(args?: SelectSubset<T, QuestionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionsUpdateManyArgs>(args: SelectSubset<T, QuestionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionsUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionsWithIdOnly = await prisma.questions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionsUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Questions.
     * @param {QuestionsUpsertArgs} args - Arguments to update or create a Questions.
     * @example
     * // Update or create a Questions
     * const questions = await prisma.questions.upsert({
     *   create: {
     *     // ... data to create a Questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questions we want to update
     *   }
     * })
     */
    upsert<T extends QuestionsUpsertArgs>(args: SelectSubset<T, QuestionsUpsertArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.questions.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionsCountArgs>(
      args?: Subset<T, QuestionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionsAggregateArgs>(args: Subset<T, QuestionsAggregateArgs>): Prisma.PrismaPromise<GetQuestionsAggregateType<T>>

    /**
     * Group by Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionsGroupByArgs['orderBy'] }
        : { orderBy?: QuestionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Questions model
   */
  readonly fields: QuestionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Questions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Answers<T extends Questions$AnswersArgs<ExtArgs> = {}>(args?: Subset<T, Questions$AnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Stamps<T extends Questions$StampsArgs<ExtArgs> = {}>(args?: Subset<T, Questions$StampsArgs<ExtArgs>>): Prisma__StampsClient<$Result.GetResult<Prisma.$StampsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Questions model
   */
  interface QuestionsFieldRefs {
    readonly id: FieldRef<"Questions", 'BigInt'>
    readonly question_text: FieldRef<"Questions", 'String'>
    readonly correct_answer: FieldRef<"Questions", 'String'>
    readonly created_at: FieldRef<"Questions", 'DateTime'>
    readonly updated_at: FieldRef<"Questions", 'DateTime'>
    readonly password: FieldRef<"Questions", 'String'>
    readonly option_a: FieldRef<"Questions", 'String'>
    readonly option_b: FieldRef<"Questions", 'String'>
    readonly option_c: FieldRef<"Questions", 'String'>
    readonly option_d: FieldRef<"Questions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Questions findUnique
   */
  export type QuestionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions findUniqueOrThrow
   */
  export type QuestionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions findFirst
   */
  export type QuestionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Questions findFirstOrThrow
   */
  export type QuestionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Questions findMany
   */
  export type QuestionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Questions create
   */
  export type QuestionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Questions.
     */
    data: XOR<QuestionsCreateInput, QuestionsUncheckedCreateInput>
  }

  /**
   * Questions createMany
   */
  export type QuestionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionsCreateManyInput | QuestionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Questions createManyAndReturn
   */
  export type QuestionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionsCreateManyInput | QuestionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Questions update
   */
  export type QuestionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Questions.
     */
    data: XOR<QuestionsUpdateInput, QuestionsUncheckedUpdateInput>
    /**
     * Choose, which Questions to update.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions updateMany
   */
  export type QuestionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionsWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Questions updateManyAndReturn
   */
  export type QuestionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionsWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Questions upsert
   */
  export type QuestionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Questions to update in case it exists.
     */
    where: QuestionsWhereUniqueInput
    /**
     * In case the Questions found by the `where` argument doesn't exist, create a new Questions with this data.
     */
    create: XOR<QuestionsCreateInput, QuestionsUncheckedCreateInput>
    /**
     * In case the Questions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionsUpdateInput, QuestionsUncheckedUpdateInput>
  }

  /**
   * Questions delete
   */
  export type QuestionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter which Questions to delete.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions deleteMany
   */
  export type QuestionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionsWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Questions.Answers
   */
  export type Questions$AnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    where?: AnswersWhereInput
    orderBy?: AnswersOrderByWithRelationInput | AnswersOrderByWithRelationInput[]
    cursor?: AnswersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * Questions.Stamps
   */
  export type Questions$StampsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stamps
     */
    select?: StampsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stamps
     */
    omit?: StampsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampsInclude<ExtArgs> | null
    where?: StampsWhereInput
  }

  /**
   * Questions without action
   */
  export type QuestionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
  }


  /**
   * Model Stamps
   */

  export type AggregateStamps = {
    _count: StampsCountAggregateOutputType | null
    _avg: StampsAvgAggregateOutputType | null
    _sum: StampsSumAggregateOutputType | null
    _min: StampsMinAggregateOutputType | null
    _max: StampsMaxAggregateOutputType | null
  }

  export type StampsAvgAggregateOutputType = {
    id: number | null
    questions_id: number | null
  }

  export type StampsSumAggregateOutputType = {
    id: bigint | null
    questions_id: bigint | null
  }

  export type StampsMinAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    questions_id: bigint | null
    obtained: boolean | null
    obtained_at: Date | null
  }

  export type StampsMaxAggregateOutputType = {
    id: bigint | null
    user_id: string | null
    questions_id: bigint | null
    obtained: boolean | null
    obtained_at: Date | null
  }

  export type StampsCountAggregateOutputType = {
    id: number
    user_id: number
    questions_id: number
    obtained: number
    obtained_at: number
    _all: number
  }


  export type StampsAvgAggregateInputType = {
    id?: true
    questions_id?: true
  }

  export type StampsSumAggregateInputType = {
    id?: true
    questions_id?: true
  }

  export type StampsMinAggregateInputType = {
    id?: true
    user_id?: true
    questions_id?: true
    obtained?: true
    obtained_at?: true
  }

  export type StampsMaxAggregateInputType = {
    id?: true
    user_id?: true
    questions_id?: true
    obtained?: true
    obtained_at?: true
  }

  export type StampsCountAggregateInputType = {
    id?: true
    user_id?: true
    questions_id?: true
    obtained?: true
    obtained_at?: true
    _all?: true
  }

  export type StampsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stamps to aggregate.
     */
    where?: StampsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stamps to fetch.
     */
    orderBy?: StampsOrderByWithRelationInput | StampsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StampsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stamps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stamps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stamps
    **/
    _count?: true | StampsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StampsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StampsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StampsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StampsMaxAggregateInputType
  }

  export type GetStampsAggregateType<T extends StampsAggregateArgs> = {
        [P in keyof T & keyof AggregateStamps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStamps[P]>
      : GetScalarType<T[P], AggregateStamps[P]>
  }




  export type StampsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StampsWhereInput
    orderBy?: StampsOrderByWithAggregationInput | StampsOrderByWithAggregationInput[]
    by: StampsScalarFieldEnum[] | StampsScalarFieldEnum
    having?: StampsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StampsCountAggregateInputType | true
    _avg?: StampsAvgAggregateInputType
    _sum?: StampsSumAggregateInputType
    _min?: StampsMinAggregateInputType
    _max?: StampsMaxAggregateInputType
  }

  export type StampsGroupByOutputType = {
    id: bigint
    user_id: string
    questions_id: bigint
    obtained: boolean
    obtained_at: Date
    _count: StampsCountAggregateOutputType | null
    _avg: StampsAvgAggregateOutputType | null
    _sum: StampsSumAggregateOutputType | null
    _min: StampsMinAggregateOutputType | null
    _max: StampsMaxAggregateOutputType | null
  }

  type GetStampsGroupByPayload<T extends StampsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StampsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StampsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StampsGroupByOutputType[P]>
            : GetScalarType<T[P], StampsGroupByOutputType[P]>
        }
      >
    >


  export type StampsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    questions_id?: boolean
    obtained?: boolean
    obtained_at?: boolean
    Questions?: boolean | QuestionsDefaultArgs<ExtArgs>
    Students?: boolean | StudentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stamps"]>

  export type StampsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    questions_id?: boolean
    obtained?: boolean
    obtained_at?: boolean
    Questions?: boolean | QuestionsDefaultArgs<ExtArgs>
    Students?: boolean | StudentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stamps"]>

  export type StampsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    questions_id?: boolean
    obtained?: boolean
    obtained_at?: boolean
    Questions?: boolean | QuestionsDefaultArgs<ExtArgs>
    Students?: boolean | StudentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stamps"]>

  export type StampsSelectScalar = {
    id?: boolean
    user_id?: boolean
    questions_id?: boolean
    obtained?: boolean
    obtained_at?: boolean
  }

  export type StampsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "questions_id" | "obtained" | "obtained_at", ExtArgs["result"]["stamps"]>
  export type StampsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Questions?: boolean | QuestionsDefaultArgs<ExtArgs>
    Students?: boolean | StudentsDefaultArgs<ExtArgs>
  }
  export type StampsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Questions?: boolean | QuestionsDefaultArgs<ExtArgs>
    Students?: boolean | StudentsDefaultArgs<ExtArgs>
  }
  export type StampsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Questions?: boolean | QuestionsDefaultArgs<ExtArgs>
    Students?: boolean | StudentsDefaultArgs<ExtArgs>
  }

  export type $StampsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stamps"
    objects: {
      Questions: Prisma.$QuestionsPayload<ExtArgs>
      Students: Prisma.$StudentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: string
      questions_id: bigint
      obtained: boolean
      obtained_at: Date
    }, ExtArgs["result"]["stamps"]>
    composites: {}
  }

  type StampsGetPayload<S extends boolean | null | undefined | StampsDefaultArgs> = $Result.GetResult<Prisma.$StampsPayload, S>

  type StampsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StampsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StampsCountAggregateInputType | true
    }

  export interface StampsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stamps'], meta: { name: 'Stamps' } }
    /**
     * Find zero or one Stamps that matches the filter.
     * @param {StampsFindUniqueArgs} args - Arguments to find a Stamps
     * @example
     * // Get one Stamps
     * const stamps = await prisma.stamps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StampsFindUniqueArgs>(args: SelectSubset<T, StampsFindUniqueArgs<ExtArgs>>): Prisma__StampsClient<$Result.GetResult<Prisma.$StampsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stamps that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StampsFindUniqueOrThrowArgs} args - Arguments to find a Stamps
     * @example
     * // Get one Stamps
     * const stamps = await prisma.stamps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StampsFindUniqueOrThrowArgs>(args: SelectSubset<T, StampsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StampsClient<$Result.GetResult<Prisma.$StampsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stamps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StampsFindFirstArgs} args - Arguments to find a Stamps
     * @example
     * // Get one Stamps
     * const stamps = await prisma.stamps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StampsFindFirstArgs>(args?: SelectSubset<T, StampsFindFirstArgs<ExtArgs>>): Prisma__StampsClient<$Result.GetResult<Prisma.$StampsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stamps that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StampsFindFirstOrThrowArgs} args - Arguments to find a Stamps
     * @example
     * // Get one Stamps
     * const stamps = await prisma.stamps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StampsFindFirstOrThrowArgs>(args?: SelectSubset<T, StampsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StampsClient<$Result.GetResult<Prisma.$StampsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stamps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StampsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stamps
     * const stamps = await prisma.stamps.findMany()
     * 
     * // Get first 10 Stamps
     * const stamps = await prisma.stamps.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stampsWithIdOnly = await prisma.stamps.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StampsFindManyArgs>(args?: SelectSubset<T, StampsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StampsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stamps.
     * @param {StampsCreateArgs} args - Arguments to create a Stamps.
     * @example
     * // Create one Stamps
     * const Stamps = await prisma.stamps.create({
     *   data: {
     *     // ... data to create a Stamps
     *   }
     * })
     * 
     */
    create<T extends StampsCreateArgs>(args: SelectSubset<T, StampsCreateArgs<ExtArgs>>): Prisma__StampsClient<$Result.GetResult<Prisma.$StampsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stamps.
     * @param {StampsCreateManyArgs} args - Arguments to create many Stamps.
     * @example
     * // Create many Stamps
     * const stamps = await prisma.stamps.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StampsCreateManyArgs>(args?: SelectSubset<T, StampsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stamps and returns the data saved in the database.
     * @param {StampsCreateManyAndReturnArgs} args - Arguments to create many Stamps.
     * @example
     * // Create many Stamps
     * const stamps = await prisma.stamps.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stamps and only return the `id`
     * const stampsWithIdOnly = await prisma.stamps.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StampsCreateManyAndReturnArgs>(args?: SelectSubset<T, StampsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StampsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stamps.
     * @param {StampsDeleteArgs} args - Arguments to delete one Stamps.
     * @example
     * // Delete one Stamps
     * const Stamps = await prisma.stamps.delete({
     *   where: {
     *     // ... filter to delete one Stamps
     *   }
     * })
     * 
     */
    delete<T extends StampsDeleteArgs>(args: SelectSubset<T, StampsDeleteArgs<ExtArgs>>): Prisma__StampsClient<$Result.GetResult<Prisma.$StampsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stamps.
     * @param {StampsUpdateArgs} args - Arguments to update one Stamps.
     * @example
     * // Update one Stamps
     * const stamps = await prisma.stamps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StampsUpdateArgs>(args: SelectSubset<T, StampsUpdateArgs<ExtArgs>>): Prisma__StampsClient<$Result.GetResult<Prisma.$StampsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stamps.
     * @param {StampsDeleteManyArgs} args - Arguments to filter Stamps to delete.
     * @example
     * // Delete a few Stamps
     * const { count } = await prisma.stamps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StampsDeleteManyArgs>(args?: SelectSubset<T, StampsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stamps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StampsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stamps
     * const stamps = await prisma.stamps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StampsUpdateManyArgs>(args: SelectSubset<T, StampsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stamps and returns the data updated in the database.
     * @param {StampsUpdateManyAndReturnArgs} args - Arguments to update many Stamps.
     * @example
     * // Update many Stamps
     * const stamps = await prisma.stamps.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stamps and only return the `id`
     * const stampsWithIdOnly = await prisma.stamps.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StampsUpdateManyAndReturnArgs>(args: SelectSubset<T, StampsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StampsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stamps.
     * @param {StampsUpsertArgs} args - Arguments to update or create a Stamps.
     * @example
     * // Update or create a Stamps
     * const stamps = await prisma.stamps.upsert({
     *   create: {
     *     // ... data to create a Stamps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stamps we want to update
     *   }
     * })
     */
    upsert<T extends StampsUpsertArgs>(args: SelectSubset<T, StampsUpsertArgs<ExtArgs>>): Prisma__StampsClient<$Result.GetResult<Prisma.$StampsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stamps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StampsCountArgs} args - Arguments to filter Stamps to count.
     * @example
     * // Count the number of Stamps
     * const count = await prisma.stamps.count({
     *   where: {
     *     // ... the filter for the Stamps we want to count
     *   }
     * })
    **/
    count<T extends StampsCountArgs>(
      args?: Subset<T, StampsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StampsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stamps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StampsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StampsAggregateArgs>(args: Subset<T, StampsAggregateArgs>): Prisma.PrismaPromise<GetStampsAggregateType<T>>

    /**
     * Group by Stamps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StampsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StampsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StampsGroupByArgs['orderBy'] }
        : { orderBy?: StampsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StampsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStampsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stamps model
   */
  readonly fields: StampsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stamps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StampsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Questions<T extends QuestionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionsDefaultArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Students<T extends StudentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentsDefaultArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stamps model
   */
  interface StampsFieldRefs {
    readonly id: FieldRef<"Stamps", 'BigInt'>
    readonly user_id: FieldRef<"Stamps", 'String'>
    readonly questions_id: FieldRef<"Stamps", 'BigInt'>
    readonly obtained: FieldRef<"Stamps", 'Boolean'>
    readonly obtained_at: FieldRef<"Stamps", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stamps findUnique
   */
  export type StampsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stamps
     */
    select?: StampsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stamps
     */
    omit?: StampsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampsInclude<ExtArgs> | null
    /**
     * Filter, which Stamps to fetch.
     */
    where: StampsWhereUniqueInput
  }

  /**
   * Stamps findUniqueOrThrow
   */
  export type StampsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stamps
     */
    select?: StampsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stamps
     */
    omit?: StampsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampsInclude<ExtArgs> | null
    /**
     * Filter, which Stamps to fetch.
     */
    where: StampsWhereUniqueInput
  }

  /**
   * Stamps findFirst
   */
  export type StampsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stamps
     */
    select?: StampsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stamps
     */
    omit?: StampsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampsInclude<ExtArgs> | null
    /**
     * Filter, which Stamps to fetch.
     */
    where?: StampsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stamps to fetch.
     */
    orderBy?: StampsOrderByWithRelationInput | StampsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stamps.
     */
    cursor?: StampsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stamps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stamps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stamps.
     */
    distinct?: StampsScalarFieldEnum | StampsScalarFieldEnum[]
  }

  /**
   * Stamps findFirstOrThrow
   */
  export type StampsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stamps
     */
    select?: StampsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stamps
     */
    omit?: StampsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampsInclude<ExtArgs> | null
    /**
     * Filter, which Stamps to fetch.
     */
    where?: StampsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stamps to fetch.
     */
    orderBy?: StampsOrderByWithRelationInput | StampsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stamps.
     */
    cursor?: StampsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stamps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stamps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stamps.
     */
    distinct?: StampsScalarFieldEnum | StampsScalarFieldEnum[]
  }

  /**
   * Stamps findMany
   */
  export type StampsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stamps
     */
    select?: StampsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stamps
     */
    omit?: StampsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampsInclude<ExtArgs> | null
    /**
     * Filter, which Stamps to fetch.
     */
    where?: StampsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stamps to fetch.
     */
    orderBy?: StampsOrderByWithRelationInput | StampsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stamps.
     */
    cursor?: StampsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stamps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stamps.
     */
    skip?: number
    distinct?: StampsScalarFieldEnum | StampsScalarFieldEnum[]
  }

  /**
   * Stamps create
   */
  export type StampsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stamps
     */
    select?: StampsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stamps
     */
    omit?: StampsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampsInclude<ExtArgs> | null
    /**
     * The data needed to create a Stamps.
     */
    data: XOR<StampsCreateInput, StampsUncheckedCreateInput>
  }

  /**
   * Stamps createMany
   */
  export type StampsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stamps.
     */
    data: StampsCreateManyInput | StampsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stamps createManyAndReturn
   */
  export type StampsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stamps
     */
    select?: StampsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stamps
     */
    omit?: StampsOmit<ExtArgs> | null
    /**
     * The data used to create many Stamps.
     */
    data: StampsCreateManyInput | StampsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stamps update
   */
  export type StampsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stamps
     */
    select?: StampsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stamps
     */
    omit?: StampsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampsInclude<ExtArgs> | null
    /**
     * The data needed to update a Stamps.
     */
    data: XOR<StampsUpdateInput, StampsUncheckedUpdateInput>
    /**
     * Choose, which Stamps to update.
     */
    where: StampsWhereUniqueInput
  }

  /**
   * Stamps updateMany
   */
  export type StampsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stamps.
     */
    data: XOR<StampsUpdateManyMutationInput, StampsUncheckedUpdateManyInput>
    /**
     * Filter which Stamps to update
     */
    where?: StampsWhereInput
    /**
     * Limit how many Stamps to update.
     */
    limit?: number
  }

  /**
   * Stamps updateManyAndReturn
   */
  export type StampsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stamps
     */
    select?: StampsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stamps
     */
    omit?: StampsOmit<ExtArgs> | null
    /**
     * The data used to update Stamps.
     */
    data: XOR<StampsUpdateManyMutationInput, StampsUncheckedUpdateManyInput>
    /**
     * Filter which Stamps to update
     */
    where?: StampsWhereInput
    /**
     * Limit how many Stamps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stamps upsert
   */
  export type StampsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stamps
     */
    select?: StampsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stamps
     */
    omit?: StampsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampsInclude<ExtArgs> | null
    /**
     * The filter to search for the Stamps to update in case it exists.
     */
    where: StampsWhereUniqueInput
    /**
     * In case the Stamps found by the `where` argument doesn't exist, create a new Stamps with this data.
     */
    create: XOR<StampsCreateInput, StampsUncheckedCreateInput>
    /**
     * In case the Stamps was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StampsUpdateInput, StampsUncheckedUpdateInput>
  }

  /**
   * Stamps delete
   */
  export type StampsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stamps
     */
    select?: StampsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stamps
     */
    omit?: StampsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampsInclude<ExtArgs> | null
    /**
     * Filter which Stamps to delete.
     */
    where: StampsWhereUniqueInput
  }

  /**
   * Stamps deleteMany
   */
  export type StampsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stamps to delete
     */
    where?: StampsWhereInput
    /**
     * Limit how many Stamps to delete.
     */
    limit?: number
  }

  /**
   * Stamps without action
   */
  export type StampsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stamps
     */
    select?: StampsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stamps
     */
    omit?: StampsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampsInclude<ExtArgs> | null
  }


  /**
   * Model Students
   */

  export type AggregateStudents = {
    _count: StudentsCountAggregateOutputType | null
    _avg: StudentsAvgAggregateOutputType | null
    _sum: StudentsSumAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  export type StudentsAvgAggregateOutputType = {
    total_time: number | null
  }

  export type StudentsSumAggregateOutputType = {
    total_time: bigint | null
  }

  export type StudentsMinAggregateOutputType = {
    id: string | null
    emeil: string | null
    created_at: Date | null
    total_time: bigint | null
  }

  export type StudentsMaxAggregateOutputType = {
    id: string | null
    emeil: string | null
    created_at: Date | null
    total_time: bigint | null
  }

  export type StudentsCountAggregateOutputType = {
    id: number
    emeil: number
    created_at: number
    total_time: number
    _all: number
  }


  export type StudentsAvgAggregateInputType = {
    total_time?: true
  }

  export type StudentsSumAggregateInputType = {
    total_time?: true
  }

  export type StudentsMinAggregateInputType = {
    id?: true
    emeil?: true
    created_at?: true
    total_time?: true
  }

  export type StudentsMaxAggregateInputType = {
    id?: true
    emeil?: true
    created_at?: true
    total_time?: true
  }

  export type StudentsCountAggregateInputType = {
    id?: true
    emeil?: true
    created_at?: true
    total_time?: true
    _all?: true
  }

  export type StudentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to aggregate.
     */
    where?: StudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentsMaxAggregateInputType
  }

  export type GetStudentsAggregateType<T extends StudentsAggregateArgs> = {
        [P in keyof T & keyof AggregateStudents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudents[P]>
      : GetScalarType<T[P], AggregateStudents[P]>
  }




  export type StudentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentsWhereInput
    orderBy?: StudentsOrderByWithAggregationInput | StudentsOrderByWithAggregationInput[]
    by: StudentsScalarFieldEnum[] | StudentsScalarFieldEnum
    having?: StudentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentsCountAggregateInputType | true
    _avg?: StudentsAvgAggregateInputType
    _sum?: StudentsSumAggregateInputType
    _min?: StudentsMinAggregateInputType
    _max?: StudentsMaxAggregateInputType
  }

  export type StudentsGroupByOutputType = {
    id: string
    emeil: string
    created_at: Date
    total_time: bigint | null
    _count: StudentsCountAggregateOutputType | null
    _avg: StudentsAvgAggregateOutputType | null
    _sum: StudentsSumAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  type GetStudentsGroupByPayload<T extends StudentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentsGroupByOutputType[P]>
            : GetScalarType<T[P], StudentsGroupByOutputType[P]>
        }
      >
    >


  export type StudentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emeil?: boolean
    created_at?: boolean
    total_time?: boolean
    Answers?: boolean | Students$AnswersArgs<ExtArgs>
    Stamps?: boolean | Students$StampsArgs<ExtArgs>
  }, ExtArgs["result"]["students"]>

  export type StudentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emeil?: boolean
    created_at?: boolean
    total_time?: boolean
  }, ExtArgs["result"]["students"]>

  export type StudentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emeil?: boolean
    created_at?: boolean
    total_time?: boolean
  }, ExtArgs["result"]["students"]>

  export type StudentsSelectScalar = {
    id?: boolean
    emeil?: boolean
    created_at?: boolean
    total_time?: boolean
  }

  export type StudentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "emeil" | "created_at" | "total_time", ExtArgs["result"]["students"]>
  export type StudentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Answers?: boolean | Students$AnswersArgs<ExtArgs>
    Stamps?: boolean | Students$StampsArgs<ExtArgs>
  }
  export type StudentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Students"
    objects: {
      Answers: Prisma.$AnswersPayload<ExtArgs> | null
      Stamps: Prisma.$StampsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      emeil: string
      created_at: Date
      total_time: bigint | null
    }, ExtArgs["result"]["students"]>
    composites: {}
  }

  type StudentsGetPayload<S extends boolean | null | undefined | StudentsDefaultArgs> = $Result.GetResult<Prisma.$StudentsPayload, S>

  type StudentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentsCountAggregateInputType | true
    }

  export interface StudentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Students'], meta: { name: 'Students' } }
    /**
     * Find zero or one Students that matches the filter.
     * @param {StudentsFindUniqueArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentsFindUniqueArgs>(args: SelectSubset<T, StudentsFindUniqueArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Students that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentsFindUniqueOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentsFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsFindFirstArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentsFindFirstArgs>(args?: SelectSubset<T, StudentsFindFirstArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Students that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsFindFirstOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentsFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.students.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.students.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentsWithIdOnly = await prisma.students.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentsFindManyArgs>(args?: SelectSubset<T, StudentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Students.
     * @param {StudentsCreateArgs} args - Arguments to create a Students.
     * @example
     * // Create one Students
     * const Students = await prisma.students.create({
     *   data: {
     *     // ... data to create a Students
     *   }
     * })
     * 
     */
    create<T extends StudentsCreateArgs>(args: SelectSubset<T, StudentsCreateArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentsCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const students = await prisma.students.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentsCreateManyArgs>(args?: SelectSubset<T, StudentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentsCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const students = await prisma.students.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentsWithIdOnly = await prisma.students.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentsCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Students.
     * @param {StudentsDeleteArgs} args - Arguments to delete one Students.
     * @example
     * // Delete one Students
     * const Students = await prisma.students.delete({
     *   where: {
     *     // ... filter to delete one Students
     *   }
     * })
     * 
     */
    delete<T extends StudentsDeleteArgs>(args: SelectSubset<T, StudentsDeleteArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Students.
     * @param {StudentsUpdateArgs} args - Arguments to update one Students.
     * @example
     * // Update one Students
     * const students = await prisma.students.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentsUpdateArgs>(args: SelectSubset<T, StudentsUpdateArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentsDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.students.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentsDeleteManyArgs>(args?: SelectSubset<T, StudentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentsUpdateManyArgs>(args: SelectSubset<T, StudentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentsUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentsWithIdOnly = await prisma.students.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentsUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Students.
     * @param {StudentsUpsertArgs} args - Arguments to update or create a Students.
     * @example
     * // Update or create a Students
     * const students = await prisma.students.upsert({
     *   create: {
     *     // ... data to create a Students
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Students we want to update
     *   }
     * })
     */
    upsert<T extends StudentsUpsertArgs>(args: SelectSubset<T, StudentsUpsertArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.students.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentsCountArgs>(
      args?: Subset<T, StudentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentsAggregateArgs>(args: Subset<T, StudentsAggregateArgs>): Prisma.PrismaPromise<GetStudentsAggregateType<T>>

    /**
     * Group by Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentsGroupByArgs['orderBy'] }
        : { orderBy?: StudentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Students model
   */
  readonly fields: StudentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Students.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Answers<T extends Students$AnswersArgs<ExtArgs> = {}>(args?: Subset<T, Students$AnswersArgs<ExtArgs>>): Prisma__AnswersClient<$Result.GetResult<Prisma.$AnswersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Stamps<T extends Students$StampsArgs<ExtArgs> = {}>(args?: Subset<T, Students$StampsArgs<ExtArgs>>): Prisma__StampsClient<$Result.GetResult<Prisma.$StampsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Students model
   */
  interface StudentsFieldRefs {
    readonly id: FieldRef<"Students", 'String'>
    readonly emeil: FieldRef<"Students", 'String'>
    readonly created_at: FieldRef<"Students", 'DateTime'>
    readonly total_time: FieldRef<"Students", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Students findUnique
   */
  export type StudentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where: StudentsWhereUniqueInput
  }

  /**
   * Students findUniqueOrThrow
   */
  export type StudentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where: StudentsWhereUniqueInput
  }

  /**
   * Students findFirst
   */
  export type StudentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * Students findFirstOrThrow
   */
  export type StudentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * Students findMany
   */
  export type StudentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * Students create
   */
  export type StudentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Students.
     */
    data: XOR<StudentsCreateInput, StudentsUncheckedCreateInput>
  }

  /**
   * Students createMany
   */
  export type StudentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentsCreateManyInput | StudentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Students createManyAndReturn
   */
  export type StudentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentsCreateManyInput | StudentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Students update
   */
  export type StudentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Students.
     */
    data: XOR<StudentsUpdateInput, StudentsUncheckedUpdateInput>
    /**
     * Choose, which Students to update.
     */
    where: StudentsWhereUniqueInput
  }

  /**
   * Students updateMany
   */
  export type StudentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentsUpdateManyMutationInput, StudentsUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentsWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Students updateManyAndReturn
   */
  export type StudentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentsUpdateManyMutationInput, StudentsUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentsWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Students upsert
   */
  export type StudentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Students to update in case it exists.
     */
    where: StudentsWhereUniqueInput
    /**
     * In case the Students found by the `where` argument doesn't exist, create a new Students with this data.
     */
    create: XOR<StudentsCreateInput, StudentsUncheckedCreateInput>
    /**
     * In case the Students was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentsUpdateInput, StudentsUncheckedUpdateInput>
  }

  /**
   * Students delete
   */
  export type StudentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter which Students to delete.
     */
    where: StudentsWhereUniqueInput
  }

  /**
   * Students deleteMany
   */
  export type StudentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentsWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Students.Answers
   */
  export type Students$AnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answers
     */
    select?: AnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answers
     */
    omit?: AnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswersInclude<ExtArgs> | null
    where?: AnswersWhereInput
  }

  /**
   * Students.Stamps
   */
  export type Students$StampsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stamps
     */
    select?: StampsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stamps
     */
    omit?: StampsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StampsInclude<ExtArgs> | null
    where?: StampsWhereInput
  }

  /**
   * Students without action
   */
  export type StudentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AnswersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    question_id: 'question_id',
    answer: 'answer',
    answered_at: 'answered_at'
  };

  export type AnswersScalarFieldEnum = (typeof AnswersScalarFieldEnum)[keyof typeof AnswersScalarFieldEnum]


  export const QuestionsScalarFieldEnum: {
    id: 'id',
    question_text: 'question_text',
    correct_answer: 'correct_answer',
    created_at: 'created_at',
    updated_at: 'updated_at',
    password: 'password',
    option_a: 'option_a',
    option_b: 'option_b',
    option_c: 'option_c',
    option_d: 'option_d'
  };

  export type QuestionsScalarFieldEnum = (typeof QuestionsScalarFieldEnum)[keyof typeof QuestionsScalarFieldEnum]


  export const StampsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    questions_id: 'questions_id',
    obtained: 'obtained',
    obtained_at: 'obtained_at'
  };

  export type StampsScalarFieldEnum = (typeof StampsScalarFieldEnum)[keyof typeof StampsScalarFieldEnum]


  export const StudentsScalarFieldEnum: {
    id: 'id',
    emeil: 'emeil',
    created_at: 'created_at',
    total_time: 'total_time'
  };

  export type StudentsScalarFieldEnum = (typeof StudentsScalarFieldEnum)[keyof typeof StudentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AnswersWhereInput = {
    AND?: AnswersWhereInput | AnswersWhereInput[]
    OR?: AnswersWhereInput[]
    NOT?: AnswersWhereInput | AnswersWhereInput[]
    id?: BigIntFilter<"Answers"> | bigint | number
    user_id?: UuidFilter<"Answers"> | string
    question_id?: BigIntFilter<"Answers"> | bigint | number
    answer?: StringFilter<"Answers"> | string
    answered_at?: DateTimeNullableFilter<"Answers"> | Date | string | null
    Questions?: XOR<QuestionsScalarRelationFilter, QuestionsWhereInput>
    Students?: XOR<StudentsScalarRelationFilter, StudentsWhereInput>
  }

  export type AnswersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    question_id?: SortOrder
    answer?: SortOrder
    answered_at?: SortOrderInput | SortOrder
    Questions?: QuestionsOrderByWithRelationInput
    Students?: StudentsOrderByWithRelationInput
  }

  export type AnswersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    user_id?: string
    AND?: AnswersWhereInput | AnswersWhereInput[]
    OR?: AnswersWhereInput[]
    NOT?: AnswersWhereInput | AnswersWhereInput[]
    question_id?: BigIntFilter<"Answers"> | bigint | number
    answer?: StringFilter<"Answers"> | string
    answered_at?: DateTimeNullableFilter<"Answers"> | Date | string | null
    Questions?: XOR<QuestionsScalarRelationFilter, QuestionsWhereInput>
    Students?: XOR<StudentsScalarRelationFilter, StudentsWhereInput>
  }, "id" | "id" | "user_id">

  export type AnswersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    question_id?: SortOrder
    answer?: SortOrder
    answered_at?: SortOrderInput | SortOrder
    _count?: AnswersCountOrderByAggregateInput
    _avg?: AnswersAvgOrderByAggregateInput
    _max?: AnswersMaxOrderByAggregateInput
    _min?: AnswersMinOrderByAggregateInput
    _sum?: AnswersSumOrderByAggregateInput
  }

  export type AnswersScalarWhereWithAggregatesInput = {
    AND?: AnswersScalarWhereWithAggregatesInput | AnswersScalarWhereWithAggregatesInput[]
    OR?: AnswersScalarWhereWithAggregatesInput[]
    NOT?: AnswersScalarWhereWithAggregatesInput | AnswersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Answers"> | bigint | number
    user_id?: UuidWithAggregatesFilter<"Answers"> | string
    question_id?: BigIntWithAggregatesFilter<"Answers"> | bigint | number
    answer?: StringWithAggregatesFilter<"Answers"> | string
    answered_at?: DateTimeNullableWithAggregatesFilter<"Answers"> | Date | string | null
  }

  export type QuestionsWhereInput = {
    AND?: QuestionsWhereInput | QuestionsWhereInput[]
    OR?: QuestionsWhereInput[]
    NOT?: QuestionsWhereInput | QuestionsWhereInput[]
    id?: BigIntFilter<"Questions"> | bigint | number
    question_text?: StringFilter<"Questions"> | string
    correct_answer?: StringFilter<"Questions"> | string
    created_at?: DateTimeFilter<"Questions"> | Date | string
    updated_at?: DateTimeFilter<"Questions"> | Date | string
    password?: StringFilter<"Questions"> | string
    option_a?: StringFilter<"Questions"> | string
    option_b?: StringFilter<"Questions"> | string
    option_c?: StringFilter<"Questions"> | string
    option_d?: StringFilter<"Questions"> | string
    Answers?: AnswersListRelationFilter
    Stamps?: XOR<StampsNullableScalarRelationFilter, StampsWhereInput> | null
  }

  export type QuestionsOrderByWithRelationInput = {
    id?: SortOrder
    question_text?: SortOrder
    correct_answer?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    password?: SortOrder
    option_a?: SortOrder
    option_b?: SortOrder
    option_c?: SortOrder
    option_d?: SortOrder
    Answers?: AnswersOrderByRelationAggregateInput
    Stamps?: StampsOrderByWithRelationInput
  }

  export type QuestionsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    password?: string
    AND?: QuestionsWhereInput | QuestionsWhereInput[]
    OR?: QuestionsWhereInput[]
    NOT?: QuestionsWhereInput | QuestionsWhereInput[]
    question_text?: StringFilter<"Questions"> | string
    correct_answer?: StringFilter<"Questions"> | string
    created_at?: DateTimeFilter<"Questions"> | Date | string
    updated_at?: DateTimeFilter<"Questions"> | Date | string
    option_a?: StringFilter<"Questions"> | string
    option_b?: StringFilter<"Questions"> | string
    option_c?: StringFilter<"Questions"> | string
    option_d?: StringFilter<"Questions"> | string
    Answers?: AnswersListRelationFilter
    Stamps?: XOR<StampsNullableScalarRelationFilter, StampsWhereInput> | null
  }, "id" | "id" | "password">

  export type QuestionsOrderByWithAggregationInput = {
    id?: SortOrder
    question_text?: SortOrder
    correct_answer?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    password?: SortOrder
    option_a?: SortOrder
    option_b?: SortOrder
    option_c?: SortOrder
    option_d?: SortOrder
    _count?: QuestionsCountOrderByAggregateInput
    _avg?: QuestionsAvgOrderByAggregateInput
    _max?: QuestionsMaxOrderByAggregateInput
    _min?: QuestionsMinOrderByAggregateInput
    _sum?: QuestionsSumOrderByAggregateInput
  }

  export type QuestionsScalarWhereWithAggregatesInput = {
    AND?: QuestionsScalarWhereWithAggregatesInput | QuestionsScalarWhereWithAggregatesInput[]
    OR?: QuestionsScalarWhereWithAggregatesInput[]
    NOT?: QuestionsScalarWhereWithAggregatesInput | QuestionsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Questions"> | bigint | number
    question_text?: StringWithAggregatesFilter<"Questions"> | string
    correct_answer?: StringWithAggregatesFilter<"Questions"> | string
    created_at?: DateTimeWithAggregatesFilter<"Questions"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Questions"> | Date | string
    password?: StringWithAggregatesFilter<"Questions"> | string
    option_a?: StringWithAggregatesFilter<"Questions"> | string
    option_b?: StringWithAggregatesFilter<"Questions"> | string
    option_c?: StringWithAggregatesFilter<"Questions"> | string
    option_d?: StringWithAggregatesFilter<"Questions"> | string
  }

  export type StampsWhereInput = {
    AND?: StampsWhereInput | StampsWhereInput[]
    OR?: StampsWhereInput[]
    NOT?: StampsWhereInput | StampsWhereInput[]
    id?: BigIntFilter<"Stamps"> | bigint | number
    user_id?: UuidFilter<"Stamps"> | string
    questions_id?: BigIntFilter<"Stamps"> | bigint | number
    obtained?: BoolFilter<"Stamps"> | boolean
    obtained_at?: DateTimeFilter<"Stamps"> | Date | string
    Questions?: XOR<QuestionsScalarRelationFilter, QuestionsWhereInput>
    Students?: XOR<StudentsScalarRelationFilter, StudentsWhereInput>
  }

  export type StampsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    questions_id?: SortOrder
    obtained?: SortOrder
    obtained_at?: SortOrder
    Questions?: QuestionsOrderByWithRelationInput
    Students?: StudentsOrderByWithRelationInput
  }

  export type StampsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    user_id?: string
    questions_id?: bigint | number
    AND?: StampsWhereInput | StampsWhereInput[]
    OR?: StampsWhereInput[]
    NOT?: StampsWhereInput | StampsWhereInput[]
    obtained?: BoolFilter<"Stamps"> | boolean
    obtained_at?: DateTimeFilter<"Stamps"> | Date | string
    Questions?: XOR<QuestionsScalarRelationFilter, QuestionsWhereInput>
    Students?: XOR<StudentsScalarRelationFilter, StudentsWhereInput>
  }, "id" | "id" | "user_id" | "questions_id">

  export type StampsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    questions_id?: SortOrder
    obtained?: SortOrder
    obtained_at?: SortOrder
    _count?: StampsCountOrderByAggregateInput
    _avg?: StampsAvgOrderByAggregateInput
    _max?: StampsMaxOrderByAggregateInput
    _min?: StampsMinOrderByAggregateInput
    _sum?: StampsSumOrderByAggregateInput
  }

  export type StampsScalarWhereWithAggregatesInput = {
    AND?: StampsScalarWhereWithAggregatesInput | StampsScalarWhereWithAggregatesInput[]
    OR?: StampsScalarWhereWithAggregatesInput[]
    NOT?: StampsScalarWhereWithAggregatesInput | StampsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Stamps"> | bigint | number
    user_id?: UuidWithAggregatesFilter<"Stamps"> | string
    questions_id?: BigIntWithAggregatesFilter<"Stamps"> | bigint | number
    obtained?: BoolWithAggregatesFilter<"Stamps"> | boolean
    obtained_at?: DateTimeWithAggregatesFilter<"Stamps"> | Date | string
  }

  export type StudentsWhereInput = {
    AND?: StudentsWhereInput | StudentsWhereInput[]
    OR?: StudentsWhereInput[]
    NOT?: StudentsWhereInput | StudentsWhereInput[]
    id?: UuidFilter<"Students"> | string
    emeil?: StringFilter<"Students"> | string
    created_at?: DateTimeFilter<"Students"> | Date | string
    total_time?: BigIntNullableFilter<"Students"> | bigint | number | null
    Answers?: XOR<AnswersNullableScalarRelationFilter, AnswersWhereInput> | null
    Stamps?: XOR<StampsNullableScalarRelationFilter, StampsWhereInput> | null
  }

  export type StudentsOrderByWithRelationInput = {
    id?: SortOrder
    emeil?: SortOrder
    created_at?: SortOrder
    total_time?: SortOrderInput | SortOrder
    Answers?: AnswersOrderByWithRelationInput
    Stamps?: StampsOrderByWithRelationInput
  }

  export type StudentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    emeil?: string
    AND?: StudentsWhereInput | StudentsWhereInput[]
    OR?: StudentsWhereInput[]
    NOT?: StudentsWhereInput | StudentsWhereInput[]
    created_at?: DateTimeFilter<"Students"> | Date | string
    total_time?: BigIntNullableFilter<"Students"> | bigint | number | null
    Answers?: XOR<AnswersNullableScalarRelationFilter, AnswersWhereInput> | null
    Stamps?: XOR<StampsNullableScalarRelationFilter, StampsWhereInput> | null
  }, "id" | "emeil">

  export type StudentsOrderByWithAggregationInput = {
    id?: SortOrder
    emeil?: SortOrder
    created_at?: SortOrder
    total_time?: SortOrderInput | SortOrder
    _count?: StudentsCountOrderByAggregateInput
    _avg?: StudentsAvgOrderByAggregateInput
    _max?: StudentsMaxOrderByAggregateInput
    _min?: StudentsMinOrderByAggregateInput
    _sum?: StudentsSumOrderByAggregateInput
  }

  export type StudentsScalarWhereWithAggregatesInput = {
    AND?: StudentsScalarWhereWithAggregatesInput | StudentsScalarWhereWithAggregatesInput[]
    OR?: StudentsScalarWhereWithAggregatesInput[]
    NOT?: StudentsScalarWhereWithAggregatesInput | StudentsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Students"> | string
    emeil?: StringWithAggregatesFilter<"Students"> | string
    created_at?: DateTimeWithAggregatesFilter<"Students"> | Date | string
    total_time?: BigIntNullableWithAggregatesFilter<"Students"> | bigint | number | null
  }

  export type AnswersCreateInput = {
    id?: bigint | number
    answer: string
    answered_at?: Date | string | null
    Questions: QuestionsCreateNestedOneWithoutAnswersInput
    Students: StudentsCreateNestedOneWithoutAnswersInput
  }

  export type AnswersUncheckedCreateInput = {
    id?: bigint | number
    user_id: string
    question_id: bigint | number
    answer: string
    answered_at?: Date | string | null
  }

  export type AnswersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    answer?: StringFieldUpdateOperationsInput | string
    answered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Questions?: QuestionsUpdateOneRequiredWithoutAnswersNestedInput
    Students?: StudentsUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    question_id?: BigIntFieldUpdateOperationsInput | bigint | number
    answer?: StringFieldUpdateOperationsInput | string
    answered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnswersCreateManyInput = {
    id?: bigint | number
    user_id: string
    question_id: bigint | number
    answer: string
    answered_at?: Date | string | null
  }

  export type AnswersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    answer?: StringFieldUpdateOperationsInput | string
    answered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnswersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    question_id?: BigIntFieldUpdateOperationsInput | bigint | number
    answer?: StringFieldUpdateOperationsInput | string
    answered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuestionsCreateInput = {
    id?: bigint | number
    question_text: string
    correct_answer: string
    created_at?: Date | string
    updated_at?: Date | string
    password: string
    option_a: string
    option_b: string
    option_c: string
    option_d: string
    Answers?: AnswersCreateNestedManyWithoutQuestionsInput
    Stamps?: StampsCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionsUncheckedCreateInput = {
    id?: bigint | number
    question_text: string
    correct_answer: string
    created_at?: Date | string
    updated_at?: Date | string
    password: string
    option_a: string
    option_b: string
    option_c: string
    option_d: string
    Answers?: AnswersUncheckedCreateNestedManyWithoutQuestionsInput
    Stamps?: StampsUncheckedCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    option_a?: StringFieldUpdateOperationsInput | string
    option_b?: StringFieldUpdateOperationsInput | string
    option_c?: StringFieldUpdateOperationsInput | string
    option_d?: StringFieldUpdateOperationsInput | string
    Answers?: AnswersUpdateManyWithoutQuestionsNestedInput
    Stamps?: StampsUpdateOneWithoutQuestionsNestedInput
  }

  export type QuestionsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    option_a?: StringFieldUpdateOperationsInput | string
    option_b?: StringFieldUpdateOperationsInput | string
    option_c?: StringFieldUpdateOperationsInput | string
    option_d?: StringFieldUpdateOperationsInput | string
    Answers?: AnswersUncheckedUpdateManyWithoutQuestionsNestedInput
    Stamps?: StampsUncheckedUpdateOneWithoutQuestionsNestedInput
  }

  export type QuestionsCreateManyInput = {
    id?: bigint | number
    question_text: string
    correct_answer: string
    created_at?: Date | string
    updated_at?: Date | string
    password: string
    option_a: string
    option_b: string
    option_c: string
    option_d: string
  }

  export type QuestionsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    option_a?: StringFieldUpdateOperationsInput | string
    option_b?: StringFieldUpdateOperationsInput | string
    option_c?: StringFieldUpdateOperationsInput | string
    option_d?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    option_a?: StringFieldUpdateOperationsInput | string
    option_b?: StringFieldUpdateOperationsInput | string
    option_c?: StringFieldUpdateOperationsInput | string
    option_d?: StringFieldUpdateOperationsInput | string
  }

  export type StampsCreateInput = {
    id?: bigint | number
    obtained?: boolean
    obtained_at: Date | string
    Questions: QuestionsCreateNestedOneWithoutStampsInput
    Students: StudentsCreateNestedOneWithoutStampsInput
  }

  export type StampsUncheckedCreateInput = {
    id?: bigint | number
    user_id: string
    questions_id: bigint | number
    obtained?: boolean
    obtained_at: Date | string
  }

  export type StampsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    obtained?: BoolFieldUpdateOperationsInput | boolean
    obtained_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Questions?: QuestionsUpdateOneRequiredWithoutStampsNestedInput
    Students?: StudentsUpdateOneRequiredWithoutStampsNestedInput
  }

  export type StampsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    questions_id?: BigIntFieldUpdateOperationsInput | bigint | number
    obtained?: BoolFieldUpdateOperationsInput | boolean
    obtained_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StampsCreateManyInput = {
    id?: bigint | number
    user_id: string
    questions_id: bigint | number
    obtained?: boolean
    obtained_at: Date | string
  }

  export type StampsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    obtained?: BoolFieldUpdateOperationsInput | boolean
    obtained_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StampsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    questions_id?: BigIntFieldUpdateOperationsInput | bigint | number
    obtained?: BoolFieldUpdateOperationsInput | boolean
    obtained_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentsCreateInput = {
    id?: string
    emeil: string
    created_at?: Date | string
    total_time?: bigint | number | null
    Answers?: AnswersCreateNestedOneWithoutStudentsInput
    Stamps?: StampsCreateNestedOneWithoutStudentsInput
  }

  export type StudentsUncheckedCreateInput = {
    id?: string
    emeil: string
    created_at?: Date | string
    total_time?: bigint | number | null
    Answers?: AnswersUncheckedCreateNestedOneWithoutStudentsInput
    Stamps?: StampsUncheckedCreateNestedOneWithoutStudentsInput
  }

  export type StudentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emeil?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Answers?: AnswersUpdateOneWithoutStudentsNestedInput
    Stamps?: StampsUpdateOneWithoutStudentsNestedInput
  }

  export type StudentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emeil?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Answers?: AnswersUncheckedUpdateOneWithoutStudentsNestedInput
    Stamps?: StampsUncheckedUpdateOneWithoutStudentsNestedInput
  }

  export type StudentsCreateManyInput = {
    id?: string
    emeil: string
    created_at?: Date | string
    total_time?: bigint | number | null
  }

  export type StudentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emeil?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type StudentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    emeil?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type QuestionsScalarRelationFilter = {
    is?: QuestionsWhereInput
    isNot?: QuestionsWhereInput
  }

  export type StudentsScalarRelationFilter = {
    is?: StudentsWhereInput
    isNot?: StudentsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnswersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    question_id?: SortOrder
    answer?: SortOrder
    answered_at?: SortOrder
  }

  export type AnswersAvgOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
  }

  export type AnswersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    question_id?: SortOrder
    answer?: SortOrder
    answered_at?: SortOrder
  }

  export type AnswersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    question_id?: SortOrder
    answer?: SortOrder
    answered_at?: SortOrder
  }

  export type AnswersSumOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AnswersListRelationFilter = {
    every?: AnswersWhereInput
    some?: AnswersWhereInput
    none?: AnswersWhereInput
  }

  export type StampsNullableScalarRelationFilter = {
    is?: StampsWhereInput | null
    isNot?: StampsWhereInput | null
  }

  export type AnswersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionsCountOrderByAggregateInput = {
    id?: SortOrder
    question_text?: SortOrder
    correct_answer?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    password?: SortOrder
    option_a?: SortOrder
    option_b?: SortOrder
    option_c?: SortOrder
    option_d?: SortOrder
  }

  export type QuestionsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuestionsMaxOrderByAggregateInput = {
    id?: SortOrder
    question_text?: SortOrder
    correct_answer?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    password?: SortOrder
    option_a?: SortOrder
    option_b?: SortOrder
    option_c?: SortOrder
    option_d?: SortOrder
  }

  export type QuestionsMinOrderByAggregateInput = {
    id?: SortOrder
    question_text?: SortOrder
    correct_answer?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    password?: SortOrder
    option_a?: SortOrder
    option_b?: SortOrder
    option_c?: SortOrder
    option_d?: SortOrder
  }

  export type QuestionsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StampsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    questions_id?: SortOrder
    obtained?: SortOrder
    obtained_at?: SortOrder
  }

  export type StampsAvgOrderByAggregateInput = {
    id?: SortOrder
    questions_id?: SortOrder
  }

  export type StampsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    questions_id?: SortOrder
    obtained?: SortOrder
    obtained_at?: SortOrder
  }

  export type StampsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    questions_id?: SortOrder
    obtained?: SortOrder
    obtained_at?: SortOrder
  }

  export type StampsSumOrderByAggregateInput = {
    id?: SortOrder
    questions_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type AnswersNullableScalarRelationFilter = {
    is?: AnswersWhereInput | null
    isNot?: AnswersWhereInput | null
  }

  export type StudentsCountOrderByAggregateInput = {
    id?: SortOrder
    emeil?: SortOrder
    created_at?: SortOrder
    total_time?: SortOrder
  }

  export type StudentsAvgOrderByAggregateInput = {
    total_time?: SortOrder
  }

  export type StudentsMaxOrderByAggregateInput = {
    id?: SortOrder
    emeil?: SortOrder
    created_at?: SortOrder
    total_time?: SortOrder
  }

  export type StudentsMinOrderByAggregateInput = {
    id?: SortOrder
    emeil?: SortOrder
    created_at?: SortOrder
    total_time?: SortOrder
  }

  export type StudentsSumOrderByAggregateInput = {
    total_time?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type QuestionsCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionsCreateWithoutAnswersInput, QuestionsUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionsCreateOrConnectWithoutAnswersInput
    connect?: QuestionsWhereUniqueInput
  }

  export type StudentsCreateNestedOneWithoutAnswersInput = {
    create?: XOR<StudentsCreateWithoutAnswersInput, StudentsUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: StudentsCreateOrConnectWithoutAnswersInput
    connect?: StudentsWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type QuestionsUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionsCreateWithoutAnswersInput, QuestionsUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionsCreateOrConnectWithoutAnswersInput
    upsert?: QuestionsUpsertWithoutAnswersInput
    connect?: QuestionsWhereUniqueInput
    update?: XOR<XOR<QuestionsUpdateToOneWithWhereWithoutAnswersInput, QuestionsUpdateWithoutAnswersInput>, QuestionsUncheckedUpdateWithoutAnswersInput>
  }

  export type StudentsUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<StudentsCreateWithoutAnswersInput, StudentsUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: StudentsCreateOrConnectWithoutAnswersInput
    upsert?: StudentsUpsertWithoutAnswersInput
    connect?: StudentsWhereUniqueInput
    update?: XOR<XOR<StudentsUpdateToOneWithWhereWithoutAnswersInput, StudentsUpdateWithoutAnswersInput>, StudentsUncheckedUpdateWithoutAnswersInput>
  }

  export type AnswersCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<AnswersCreateWithoutQuestionsInput, AnswersUncheckedCreateWithoutQuestionsInput> | AnswersCreateWithoutQuestionsInput[] | AnswersUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: AnswersCreateOrConnectWithoutQuestionsInput | AnswersCreateOrConnectWithoutQuestionsInput[]
    createMany?: AnswersCreateManyQuestionsInputEnvelope
    connect?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
  }

  export type StampsCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<StampsCreateWithoutQuestionsInput, StampsUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: StampsCreateOrConnectWithoutQuestionsInput
    connect?: StampsWhereUniqueInput
  }

  export type AnswersUncheckedCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<AnswersCreateWithoutQuestionsInput, AnswersUncheckedCreateWithoutQuestionsInput> | AnswersCreateWithoutQuestionsInput[] | AnswersUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: AnswersCreateOrConnectWithoutQuestionsInput | AnswersCreateOrConnectWithoutQuestionsInput[]
    createMany?: AnswersCreateManyQuestionsInputEnvelope
    connect?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
  }

  export type StampsUncheckedCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<StampsCreateWithoutQuestionsInput, StampsUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: StampsCreateOrConnectWithoutQuestionsInput
    connect?: StampsWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AnswersUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<AnswersCreateWithoutQuestionsInput, AnswersUncheckedCreateWithoutQuestionsInput> | AnswersCreateWithoutQuestionsInput[] | AnswersUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: AnswersCreateOrConnectWithoutQuestionsInput | AnswersCreateOrConnectWithoutQuestionsInput[]
    upsert?: AnswersUpsertWithWhereUniqueWithoutQuestionsInput | AnswersUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: AnswersCreateManyQuestionsInputEnvelope
    set?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
    disconnect?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
    delete?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
    connect?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
    update?: AnswersUpdateWithWhereUniqueWithoutQuestionsInput | AnswersUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: AnswersUpdateManyWithWhereWithoutQuestionsInput | AnswersUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: AnswersScalarWhereInput | AnswersScalarWhereInput[]
  }

  export type StampsUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<StampsCreateWithoutQuestionsInput, StampsUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: StampsCreateOrConnectWithoutQuestionsInput
    upsert?: StampsUpsertWithoutQuestionsInput
    disconnect?: StampsWhereInput | boolean
    delete?: StampsWhereInput | boolean
    connect?: StampsWhereUniqueInput
    update?: XOR<XOR<StampsUpdateToOneWithWhereWithoutQuestionsInput, StampsUpdateWithoutQuestionsInput>, StampsUncheckedUpdateWithoutQuestionsInput>
  }

  export type AnswersUncheckedUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<AnswersCreateWithoutQuestionsInput, AnswersUncheckedCreateWithoutQuestionsInput> | AnswersCreateWithoutQuestionsInput[] | AnswersUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: AnswersCreateOrConnectWithoutQuestionsInput | AnswersCreateOrConnectWithoutQuestionsInput[]
    upsert?: AnswersUpsertWithWhereUniqueWithoutQuestionsInput | AnswersUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: AnswersCreateManyQuestionsInputEnvelope
    set?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
    disconnect?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
    delete?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
    connect?: AnswersWhereUniqueInput | AnswersWhereUniqueInput[]
    update?: AnswersUpdateWithWhereUniqueWithoutQuestionsInput | AnswersUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: AnswersUpdateManyWithWhereWithoutQuestionsInput | AnswersUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: AnswersScalarWhereInput | AnswersScalarWhereInput[]
  }

  export type StampsUncheckedUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<StampsCreateWithoutQuestionsInput, StampsUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: StampsCreateOrConnectWithoutQuestionsInput
    upsert?: StampsUpsertWithoutQuestionsInput
    disconnect?: StampsWhereInput | boolean
    delete?: StampsWhereInput | boolean
    connect?: StampsWhereUniqueInput
    update?: XOR<XOR<StampsUpdateToOneWithWhereWithoutQuestionsInput, StampsUpdateWithoutQuestionsInput>, StampsUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuestionsCreateNestedOneWithoutStampsInput = {
    create?: XOR<QuestionsCreateWithoutStampsInput, QuestionsUncheckedCreateWithoutStampsInput>
    connectOrCreate?: QuestionsCreateOrConnectWithoutStampsInput
    connect?: QuestionsWhereUniqueInput
  }

  export type StudentsCreateNestedOneWithoutStampsInput = {
    create?: XOR<StudentsCreateWithoutStampsInput, StudentsUncheckedCreateWithoutStampsInput>
    connectOrCreate?: StudentsCreateOrConnectWithoutStampsInput
    connect?: StudentsWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type QuestionsUpdateOneRequiredWithoutStampsNestedInput = {
    create?: XOR<QuestionsCreateWithoutStampsInput, QuestionsUncheckedCreateWithoutStampsInput>
    connectOrCreate?: QuestionsCreateOrConnectWithoutStampsInput
    upsert?: QuestionsUpsertWithoutStampsInput
    connect?: QuestionsWhereUniqueInput
    update?: XOR<XOR<QuestionsUpdateToOneWithWhereWithoutStampsInput, QuestionsUpdateWithoutStampsInput>, QuestionsUncheckedUpdateWithoutStampsInput>
  }

  export type StudentsUpdateOneRequiredWithoutStampsNestedInput = {
    create?: XOR<StudentsCreateWithoutStampsInput, StudentsUncheckedCreateWithoutStampsInput>
    connectOrCreate?: StudentsCreateOrConnectWithoutStampsInput
    upsert?: StudentsUpsertWithoutStampsInput
    connect?: StudentsWhereUniqueInput
    update?: XOR<XOR<StudentsUpdateToOneWithWhereWithoutStampsInput, StudentsUpdateWithoutStampsInput>, StudentsUncheckedUpdateWithoutStampsInput>
  }

  export type AnswersCreateNestedOneWithoutStudentsInput = {
    create?: XOR<AnswersCreateWithoutStudentsInput, AnswersUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: AnswersCreateOrConnectWithoutStudentsInput
    connect?: AnswersWhereUniqueInput
  }

  export type StampsCreateNestedOneWithoutStudentsInput = {
    create?: XOR<StampsCreateWithoutStudentsInput, StampsUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: StampsCreateOrConnectWithoutStudentsInput
    connect?: StampsWhereUniqueInput
  }

  export type AnswersUncheckedCreateNestedOneWithoutStudentsInput = {
    create?: XOR<AnswersCreateWithoutStudentsInput, AnswersUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: AnswersCreateOrConnectWithoutStudentsInput
    connect?: AnswersWhereUniqueInput
  }

  export type StampsUncheckedCreateNestedOneWithoutStudentsInput = {
    create?: XOR<StampsCreateWithoutStudentsInput, StampsUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: StampsCreateOrConnectWithoutStudentsInput
    connect?: StampsWhereUniqueInput
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type AnswersUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<AnswersCreateWithoutStudentsInput, AnswersUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: AnswersCreateOrConnectWithoutStudentsInput
    upsert?: AnswersUpsertWithoutStudentsInput
    disconnect?: AnswersWhereInput | boolean
    delete?: AnswersWhereInput | boolean
    connect?: AnswersWhereUniqueInput
    update?: XOR<XOR<AnswersUpdateToOneWithWhereWithoutStudentsInput, AnswersUpdateWithoutStudentsInput>, AnswersUncheckedUpdateWithoutStudentsInput>
  }

  export type StampsUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<StampsCreateWithoutStudentsInput, StampsUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: StampsCreateOrConnectWithoutStudentsInput
    upsert?: StampsUpsertWithoutStudentsInput
    disconnect?: StampsWhereInput | boolean
    delete?: StampsWhereInput | boolean
    connect?: StampsWhereUniqueInput
    update?: XOR<XOR<StampsUpdateToOneWithWhereWithoutStudentsInput, StampsUpdateWithoutStudentsInput>, StampsUncheckedUpdateWithoutStudentsInput>
  }

  export type AnswersUncheckedUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<AnswersCreateWithoutStudentsInput, AnswersUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: AnswersCreateOrConnectWithoutStudentsInput
    upsert?: AnswersUpsertWithoutStudentsInput
    disconnect?: AnswersWhereInput | boolean
    delete?: AnswersWhereInput | boolean
    connect?: AnswersWhereUniqueInput
    update?: XOR<XOR<AnswersUpdateToOneWithWhereWithoutStudentsInput, AnswersUpdateWithoutStudentsInput>, AnswersUncheckedUpdateWithoutStudentsInput>
  }

  export type StampsUncheckedUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<StampsCreateWithoutStudentsInput, StampsUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: StampsCreateOrConnectWithoutStudentsInput
    upsert?: StampsUpsertWithoutStudentsInput
    disconnect?: StampsWhereInput | boolean
    delete?: StampsWhereInput | boolean
    connect?: StampsWhereUniqueInput
    update?: XOR<XOR<StampsUpdateToOneWithWhereWithoutStudentsInput, StampsUpdateWithoutStudentsInput>, StampsUncheckedUpdateWithoutStudentsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type QuestionsCreateWithoutAnswersInput = {
    id?: bigint | number
    question_text: string
    correct_answer: string
    created_at?: Date | string
    updated_at?: Date | string
    password: string
    option_a: string
    option_b: string
    option_c: string
    option_d: string
    Stamps?: StampsCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionsUncheckedCreateWithoutAnswersInput = {
    id?: bigint | number
    question_text: string
    correct_answer: string
    created_at?: Date | string
    updated_at?: Date | string
    password: string
    option_a: string
    option_b: string
    option_c: string
    option_d: string
    Stamps?: StampsUncheckedCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionsCreateOrConnectWithoutAnswersInput = {
    where: QuestionsWhereUniqueInput
    create: XOR<QuestionsCreateWithoutAnswersInput, QuestionsUncheckedCreateWithoutAnswersInput>
  }

  export type StudentsCreateWithoutAnswersInput = {
    id?: string
    emeil: string
    created_at?: Date | string
    total_time?: bigint | number | null
    Stamps?: StampsCreateNestedOneWithoutStudentsInput
  }

  export type StudentsUncheckedCreateWithoutAnswersInput = {
    id?: string
    emeil: string
    created_at?: Date | string
    total_time?: bigint | number | null
    Stamps?: StampsUncheckedCreateNestedOneWithoutStudentsInput
  }

  export type StudentsCreateOrConnectWithoutAnswersInput = {
    where: StudentsWhereUniqueInput
    create: XOR<StudentsCreateWithoutAnswersInput, StudentsUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionsUpsertWithoutAnswersInput = {
    update: XOR<QuestionsUpdateWithoutAnswersInput, QuestionsUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionsCreateWithoutAnswersInput, QuestionsUncheckedCreateWithoutAnswersInput>
    where?: QuestionsWhereInput
  }

  export type QuestionsUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionsWhereInput
    data: XOR<QuestionsUpdateWithoutAnswersInput, QuestionsUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionsUpdateWithoutAnswersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    option_a?: StringFieldUpdateOperationsInput | string
    option_b?: StringFieldUpdateOperationsInput | string
    option_c?: StringFieldUpdateOperationsInput | string
    option_d?: StringFieldUpdateOperationsInput | string
    Stamps?: StampsUpdateOneWithoutQuestionsNestedInput
  }

  export type QuestionsUncheckedUpdateWithoutAnswersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    option_a?: StringFieldUpdateOperationsInput | string
    option_b?: StringFieldUpdateOperationsInput | string
    option_c?: StringFieldUpdateOperationsInput | string
    option_d?: StringFieldUpdateOperationsInput | string
    Stamps?: StampsUncheckedUpdateOneWithoutQuestionsNestedInput
  }

  export type StudentsUpsertWithoutAnswersInput = {
    update: XOR<StudentsUpdateWithoutAnswersInput, StudentsUncheckedUpdateWithoutAnswersInput>
    create: XOR<StudentsCreateWithoutAnswersInput, StudentsUncheckedCreateWithoutAnswersInput>
    where?: StudentsWhereInput
  }

  export type StudentsUpdateToOneWithWhereWithoutAnswersInput = {
    where?: StudentsWhereInput
    data: XOR<StudentsUpdateWithoutAnswersInput, StudentsUncheckedUpdateWithoutAnswersInput>
  }

  export type StudentsUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    emeil?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Stamps?: StampsUpdateOneWithoutStudentsNestedInput
  }

  export type StudentsUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    emeil?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Stamps?: StampsUncheckedUpdateOneWithoutStudentsNestedInput
  }

  export type AnswersCreateWithoutQuestionsInput = {
    id?: bigint | number
    answer: string
    answered_at?: Date | string | null
    Students: StudentsCreateNestedOneWithoutAnswersInput
  }

  export type AnswersUncheckedCreateWithoutQuestionsInput = {
    id?: bigint | number
    user_id: string
    answer: string
    answered_at?: Date | string | null
  }

  export type AnswersCreateOrConnectWithoutQuestionsInput = {
    where: AnswersWhereUniqueInput
    create: XOR<AnswersCreateWithoutQuestionsInput, AnswersUncheckedCreateWithoutQuestionsInput>
  }

  export type AnswersCreateManyQuestionsInputEnvelope = {
    data: AnswersCreateManyQuestionsInput | AnswersCreateManyQuestionsInput[]
    skipDuplicates?: boolean
  }

  export type StampsCreateWithoutQuestionsInput = {
    id?: bigint | number
    obtained?: boolean
    obtained_at: Date | string
    Students: StudentsCreateNestedOneWithoutStampsInput
  }

  export type StampsUncheckedCreateWithoutQuestionsInput = {
    id?: bigint | number
    user_id: string
    obtained?: boolean
    obtained_at: Date | string
  }

  export type StampsCreateOrConnectWithoutQuestionsInput = {
    where: StampsWhereUniqueInput
    create: XOR<StampsCreateWithoutQuestionsInput, StampsUncheckedCreateWithoutQuestionsInput>
  }

  export type AnswersUpsertWithWhereUniqueWithoutQuestionsInput = {
    where: AnswersWhereUniqueInput
    update: XOR<AnswersUpdateWithoutQuestionsInput, AnswersUncheckedUpdateWithoutQuestionsInput>
    create: XOR<AnswersCreateWithoutQuestionsInput, AnswersUncheckedCreateWithoutQuestionsInput>
  }

  export type AnswersUpdateWithWhereUniqueWithoutQuestionsInput = {
    where: AnswersWhereUniqueInput
    data: XOR<AnswersUpdateWithoutQuestionsInput, AnswersUncheckedUpdateWithoutQuestionsInput>
  }

  export type AnswersUpdateManyWithWhereWithoutQuestionsInput = {
    where: AnswersScalarWhereInput
    data: XOR<AnswersUpdateManyMutationInput, AnswersUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type AnswersScalarWhereInput = {
    AND?: AnswersScalarWhereInput | AnswersScalarWhereInput[]
    OR?: AnswersScalarWhereInput[]
    NOT?: AnswersScalarWhereInput | AnswersScalarWhereInput[]
    id?: BigIntFilter<"Answers"> | bigint | number
    user_id?: UuidFilter<"Answers"> | string
    question_id?: BigIntFilter<"Answers"> | bigint | number
    answer?: StringFilter<"Answers"> | string
    answered_at?: DateTimeNullableFilter<"Answers"> | Date | string | null
  }

  export type StampsUpsertWithoutQuestionsInput = {
    update: XOR<StampsUpdateWithoutQuestionsInput, StampsUncheckedUpdateWithoutQuestionsInput>
    create: XOR<StampsCreateWithoutQuestionsInput, StampsUncheckedCreateWithoutQuestionsInput>
    where?: StampsWhereInput
  }

  export type StampsUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: StampsWhereInput
    data: XOR<StampsUpdateWithoutQuestionsInput, StampsUncheckedUpdateWithoutQuestionsInput>
  }

  export type StampsUpdateWithoutQuestionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    obtained?: BoolFieldUpdateOperationsInput | boolean
    obtained_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Students?: StudentsUpdateOneRequiredWithoutStampsNestedInput
  }

  export type StampsUncheckedUpdateWithoutQuestionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    obtained?: BoolFieldUpdateOperationsInput | boolean
    obtained_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionsCreateWithoutStampsInput = {
    id?: bigint | number
    question_text: string
    correct_answer: string
    created_at?: Date | string
    updated_at?: Date | string
    password: string
    option_a: string
    option_b: string
    option_c: string
    option_d: string
    Answers?: AnswersCreateNestedManyWithoutQuestionsInput
  }

  export type QuestionsUncheckedCreateWithoutStampsInput = {
    id?: bigint | number
    question_text: string
    correct_answer: string
    created_at?: Date | string
    updated_at?: Date | string
    password: string
    option_a: string
    option_b: string
    option_c: string
    option_d: string
    Answers?: AnswersUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type QuestionsCreateOrConnectWithoutStampsInput = {
    where: QuestionsWhereUniqueInput
    create: XOR<QuestionsCreateWithoutStampsInput, QuestionsUncheckedCreateWithoutStampsInput>
  }

  export type StudentsCreateWithoutStampsInput = {
    id?: string
    emeil: string
    created_at?: Date | string
    total_time?: bigint | number | null
    Answers?: AnswersCreateNestedOneWithoutStudentsInput
  }

  export type StudentsUncheckedCreateWithoutStampsInput = {
    id?: string
    emeil: string
    created_at?: Date | string
    total_time?: bigint | number | null
    Answers?: AnswersUncheckedCreateNestedOneWithoutStudentsInput
  }

  export type StudentsCreateOrConnectWithoutStampsInput = {
    where: StudentsWhereUniqueInput
    create: XOR<StudentsCreateWithoutStampsInput, StudentsUncheckedCreateWithoutStampsInput>
  }

  export type QuestionsUpsertWithoutStampsInput = {
    update: XOR<QuestionsUpdateWithoutStampsInput, QuestionsUncheckedUpdateWithoutStampsInput>
    create: XOR<QuestionsCreateWithoutStampsInput, QuestionsUncheckedCreateWithoutStampsInput>
    where?: QuestionsWhereInput
  }

  export type QuestionsUpdateToOneWithWhereWithoutStampsInput = {
    where?: QuestionsWhereInput
    data: XOR<QuestionsUpdateWithoutStampsInput, QuestionsUncheckedUpdateWithoutStampsInput>
  }

  export type QuestionsUpdateWithoutStampsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    option_a?: StringFieldUpdateOperationsInput | string
    option_b?: StringFieldUpdateOperationsInput | string
    option_c?: StringFieldUpdateOperationsInput | string
    option_d?: StringFieldUpdateOperationsInput | string
    Answers?: AnswersUpdateManyWithoutQuestionsNestedInput
  }

  export type QuestionsUncheckedUpdateWithoutStampsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    option_a?: StringFieldUpdateOperationsInput | string
    option_b?: StringFieldUpdateOperationsInput | string
    option_c?: StringFieldUpdateOperationsInput | string
    option_d?: StringFieldUpdateOperationsInput | string
    Answers?: AnswersUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type StudentsUpsertWithoutStampsInput = {
    update: XOR<StudentsUpdateWithoutStampsInput, StudentsUncheckedUpdateWithoutStampsInput>
    create: XOR<StudentsCreateWithoutStampsInput, StudentsUncheckedCreateWithoutStampsInput>
    where?: StudentsWhereInput
  }

  export type StudentsUpdateToOneWithWhereWithoutStampsInput = {
    where?: StudentsWhereInput
    data: XOR<StudentsUpdateWithoutStampsInput, StudentsUncheckedUpdateWithoutStampsInput>
  }

  export type StudentsUpdateWithoutStampsInput = {
    id?: StringFieldUpdateOperationsInput | string
    emeil?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Answers?: AnswersUpdateOneWithoutStudentsNestedInput
  }

  export type StudentsUncheckedUpdateWithoutStampsInput = {
    id?: StringFieldUpdateOperationsInput | string
    emeil?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Answers?: AnswersUncheckedUpdateOneWithoutStudentsNestedInput
  }

  export type AnswersCreateWithoutStudentsInput = {
    id?: bigint | number
    answer: string
    answered_at?: Date | string | null
    Questions: QuestionsCreateNestedOneWithoutAnswersInput
  }

  export type AnswersUncheckedCreateWithoutStudentsInput = {
    id?: bigint | number
    question_id: bigint | number
    answer: string
    answered_at?: Date | string | null
  }

  export type AnswersCreateOrConnectWithoutStudentsInput = {
    where: AnswersWhereUniqueInput
    create: XOR<AnswersCreateWithoutStudentsInput, AnswersUncheckedCreateWithoutStudentsInput>
  }

  export type StampsCreateWithoutStudentsInput = {
    id?: bigint | number
    obtained?: boolean
    obtained_at: Date | string
    Questions: QuestionsCreateNestedOneWithoutStampsInput
  }

  export type StampsUncheckedCreateWithoutStudentsInput = {
    id?: bigint | number
    questions_id: bigint | number
    obtained?: boolean
    obtained_at: Date | string
  }

  export type StampsCreateOrConnectWithoutStudentsInput = {
    where: StampsWhereUniqueInput
    create: XOR<StampsCreateWithoutStudentsInput, StampsUncheckedCreateWithoutStudentsInput>
  }

  export type AnswersUpsertWithoutStudentsInput = {
    update: XOR<AnswersUpdateWithoutStudentsInput, AnswersUncheckedUpdateWithoutStudentsInput>
    create: XOR<AnswersCreateWithoutStudentsInput, AnswersUncheckedCreateWithoutStudentsInput>
    where?: AnswersWhereInput
  }

  export type AnswersUpdateToOneWithWhereWithoutStudentsInput = {
    where?: AnswersWhereInput
    data: XOR<AnswersUpdateWithoutStudentsInput, AnswersUncheckedUpdateWithoutStudentsInput>
  }

  export type AnswersUpdateWithoutStudentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    answer?: StringFieldUpdateOperationsInput | string
    answered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Questions?: QuestionsUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswersUncheckedUpdateWithoutStudentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_id?: BigIntFieldUpdateOperationsInput | bigint | number
    answer?: StringFieldUpdateOperationsInput | string
    answered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StampsUpsertWithoutStudentsInput = {
    update: XOR<StampsUpdateWithoutStudentsInput, StampsUncheckedUpdateWithoutStudentsInput>
    create: XOR<StampsCreateWithoutStudentsInput, StampsUncheckedCreateWithoutStudentsInput>
    where?: StampsWhereInput
  }

  export type StampsUpdateToOneWithWhereWithoutStudentsInput = {
    where?: StampsWhereInput
    data: XOR<StampsUpdateWithoutStudentsInput, StampsUncheckedUpdateWithoutStudentsInput>
  }

  export type StampsUpdateWithoutStudentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    obtained?: BoolFieldUpdateOperationsInput | boolean
    obtained_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Questions?: QuestionsUpdateOneRequiredWithoutStampsNestedInput
  }

  export type StampsUncheckedUpdateWithoutStudentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    questions_id?: BigIntFieldUpdateOperationsInput | bigint | number
    obtained?: BoolFieldUpdateOperationsInput | boolean
    obtained_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswersCreateManyQuestionsInput = {
    id?: bigint | number
    user_id: string
    answer: string
    answered_at?: Date | string | null
  }

  export type AnswersUpdateWithoutQuestionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    answer?: StringFieldUpdateOperationsInput | string
    answered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Students?: StudentsUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswersUncheckedUpdateWithoutQuestionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    answered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnswersUncheckedUpdateManyWithoutQuestionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    answered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}