
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
 * Model cancion
 * 
 */
export type cancion = $Result.DefaultSelection<Prisma.$cancionPayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>
/**
 * Model usuarioscanciones
 * 
 */
export type usuarioscanciones = $Result.DefaultSelection<Prisma.$usuarioscancionesPayload>
/**
 * Model rol
 * 
 */
export type rol = $Result.DefaultSelection<Prisma.$rolPayload>
/**
 * Model album
 * 
 */
export type album = $Result.DefaultSelection<Prisma.$albumPayload>
/**
 * Model genero
 * 
 */
export type genero = $Result.DefaultSelection<Prisma.$generoPayload>
/**
 * Model playlist
 * 
 */
export type playlist = $Result.DefaultSelection<Prisma.$playlistPayload>
/**
 * Model comentario
 * 
 */
export type comentario = $Result.DefaultSelection<Prisma.$comentarioPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cancions
 * const cancions = await prisma.cancion.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Cancions
   * const cancions = await prisma.cancion.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.cancion`: Exposes CRUD operations for the **cancion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cancions
    * const cancions = await prisma.cancion.findMany()
    * ```
    */
  get cancion(): Prisma.cancionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarioscanciones`: Exposes CRUD operations for the **usuarioscanciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarioscanciones
    * const usuarioscanciones = await prisma.usuarioscanciones.findMany()
    * ```
    */
  get usuarioscanciones(): Prisma.usuarioscancionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rol`: Exposes CRUD operations for the **rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.rolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.album`: Exposes CRUD operations for the **album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.albumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genero`: Exposes CRUD operations for the **genero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generos
    * const generos = await prisma.genero.findMany()
    * ```
    */
  get genero(): Prisma.generoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.playlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comentario`: Exposes CRUD operations for the **comentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comentarios
    * const comentarios = await prisma.comentario.findMany()
    * ```
    */
  get comentario(): Prisma.comentarioDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    cancion: 'cancion',
    usuario: 'usuario',
    usuarioscanciones: 'usuarioscanciones',
    rol: 'rol',
    album: 'album',
    genero: 'genero',
    playlist: 'playlist',
    comentario: 'comentario'
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
      modelProps: "cancion" | "usuario" | "usuarioscanciones" | "rol" | "album" | "genero" | "playlist" | "comentario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cancion: {
        payload: Prisma.$cancionPayload<ExtArgs>
        fields: Prisma.cancionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cancionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cancionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cancionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cancionPayload>
          }
          findFirst: {
            args: Prisma.cancionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cancionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cancionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cancionPayload>
          }
          findMany: {
            args: Prisma.cancionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cancionPayload>[]
          }
          create: {
            args: Prisma.cancionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cancionPayload>
          }
          createMany: {
            args: Prisma.cancionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cancionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cancionPayload>
          }
          update: {
            args: Prisma.cancionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cancionPayload>
          }
          deleteMany: {
            args: Prisma.cancionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cancionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cancionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cancionPayload>
          }
          aggregate: {
            args: Prisma.CancionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCancion>
          }
          groupBy: {
            args: Prisma.cancionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CancionGroupByOutputType>[]
          }
          count: {
            args: Prisma.cancionCountArgs<ExtArgs>
            result: $Utils.Optional<CancionCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      usuarioscanciones: {
        payload: Prisma.$usuarioscancionesPayload<ExtArgs>
        fields: Prisma.usuarioscancionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioscancionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioscancionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioscancionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioscancionesPayload>
          }
          findFirst: {
            args: Prisma.usuarioscancionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioscancionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioscancionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioscancionesPayload>
          }
          findMany: {
            args: Prisma.usuarioscancionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioscancionesPayload>[]
          }
          create: {
            args: Prisma.usuarioscancionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioscancionesPayload>
          }
          createMany: {
            args: Prisma.usuarioscancionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuarioscancionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioscancionesPayload>
          }
          update: {
            args: Prisma.usuarioscancionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioscancionesPayload>
          }
          deleteMany: {
            args: Prisma.usuarioscancionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioscancionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuarioscancionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioscancionesPayload>
          }
          aggregate: {
            args: Prisma.UsuarioscancionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarioscanciones>
          }
          groupBy: {
            args: Prisma.usuarioscancionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioscancionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioscancionesCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioscancionesCountAggregateOutputType> | number
          }
        }
      }
      rol: {
        payload: Prisma.$rolPayload<ExtArgs>
        fields: Prisma.rolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          findFirst: {
            args: Prisma.rolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          findMany: {
            args: Prisma.rolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>[]
          }
          create: {
            args: Prisma.rolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          createMany: {
            args: Prisma.rolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          update: {
            args: Prisma.rolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          deleteMany: {
            args: Prisma.rolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.rolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      album: {
        payload: Prisma.$albumPayload<ExtArgs>
        fields: Prisma.albumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.albumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$albumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.albumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$albumPayload>
          }
          findFirst: {
            args: Prisma.albumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$albumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.albumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$albumPayload>
          }
          findMany: {
            args: Prisma.albumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$albumPayload>[]
          }
          create: {
            args: Prisma.albumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$albumPayload>
          }
          createMany: {
            args: Prisma.albumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.albumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$albumPayload>
          }
          update: {
            args: Prisma.albumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$albumPayload>
          }
          deleteMany: {
            args: Prisma.albumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.albumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.albumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$albumPayload>
          }
          aggregate: {
            args: Prisma.AlbumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbum>
          }
          groupBy: {
            args: Prisma.albumGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.albumCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumCountAggregateOutputType> | number
          }
        }
      }
      genero: {
        payload: Prisma.$generoPayload<ExtArgs>
        fields: Prisma.generoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.generoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.generoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generoPayload>
          }
          findFirst: {
            args: Prisma.generoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.generoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generoPayload>
          }
          findMany: {
            args: Prisma.generoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generoPayload>[]
          }
          create: {
            args: Prisma.generoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generoPayload>
          }
          createMany: {
            args: Prisma.generoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.generoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generoPayload>
          }
          update: {
            args: Prisma.generoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generoPayload>
          }
          deleteMany: {
            args: Prisma.generoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.generoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.generoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generoPayload>
          }
          aggregate: {
            args: Prisma.GeneroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenero>
          }
          groupBy: {
            args: Prisma.generoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneroGroupByOutputType>[]
          }
          count: {
            args: Prisma.generoCountArgs<ExtArgs>
            result: $Utils.Optional<GeneroCountAggregateOutputType> | number
          }
        }
      }
      playlist: {
        payload: Prisma.$playlistPayload<ExtArgs>
        fields: Prisma.playlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.playlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.playlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>
          }
          findFirst: {
            args: Prisma.playlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.playlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>
          }
          findMany: {
            args: Prisma.playlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>[]
          }
          create: {
            args: Prisma.playlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>
          }
          createMany: {
            args: Prisma.playlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.playlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>
          }
          update: {
            args: Prisma.playlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>
          }
          deleteMany: {
            args: Prisma.playlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.playlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.playlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.playlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.playlistCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      comentario: {
        payload: Prisma.$comentarioPayload<ExtArgs>
        fields: Prisma.comentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.comentarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.comentarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          findFirst: {
            args: Prisma.comentarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.comentarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          findMany: {
            args: Prisma.comentarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>[]
          }
          create: {
            args: Prisma.comentarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          createMany: {
            args: Prisma.comentarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.comentarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          update: {
            args: Prisma.comentarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          deleteMany: {
            args: Prisma.comentarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.comentarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.comentarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comentarioPayload>
          }
          aggregate: {
            args: Prisma.ComentarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComentario>
          }
          groupBy: {
            args: Prisma.comentarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComentarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.comentarioCountArgs<ExtArgs>
            result: $Utils.Optional<ComentarioCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    cancion?: cancionOmit
    usuario?: usuarioOmit
    usuarioscanciones?: usuarioscancionesOmit
    rol?: rolOmit
    album?: albumOmit
    genero?: generoOmit
    playlist?: playlistOmit
    comentario?: comentarioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CancionCountOutputType
   */

  export type CancionCountOutputType = {
    usuarioscanciones: number
    playlists: number
    comentarios: number
  }

  export type CancionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioscanciones?: boolean | CancionCountOutputTypeCountUsuarioscancionesArgs
    playlists?: boolean | CancionCountOutputTypeCountPlaylistsArgs
    comentarios?: boolean | CancionCountOutputTypeCountComentariosArgs
  }

  // Custom InputTypes
  /**
   * CancionCountOutputType without action
   */
  export type CancionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancionCountOutputType
     */
    select?: CancionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CancionCountOutputType without action
   */
  export type CancionCountOutputTypeCountUsuarioscancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioscancionesWhereInput
  }

  /**
   * CancionCountOutputType without action
   */
  export type CancionCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playlistWhereInput
  }

  /**
   * CancionCountOutputType without action
   */
  export type CancionCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comentarioWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    usuarioscanciones: number
    playlists: number
    comentarios: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioscanciones?: boolean | UsuarioCountOutputTypeCountUsuarioscancionesArgs
    playlists?: boolean | UsuarioCountOutputTypeCountPlaylistsArgs
    comentarios?: boolean | UsuarioCountOutputTypeCountComentariosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountUsuarioscancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioscancionesWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playlistWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comentarioWhereInput
  }


  /**
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    usuarios: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | RolCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
  }


  /**
   * Count Type AlbumCountOutputType
   */

  export type AlbumCountOutputType = {
    canciones: number
  }

  export type AlbumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canciones?: boolean | AlbumCountOutputTypeCountCancionesArgs
  }

  // Custom InputTypes
  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     */
    select?: AlbumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountCancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cancionWhereInput
  }


  /**
   * Count Type GeneroCountOutputType
   */

  export type GeneroCountOutputType = {
    canciones: number
  }

  export type GeneroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canciones?: boolean | GeneroCountOutputTypeCountCancionesArgs
  }

  // Custom InputTypes
  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroCountOutputType
     */
    select?: GeneroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeCountCancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cancionWhereInput
  }


  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    canciones: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canciones?: boolean | PlaylistCountOutputTypeCountCancionesArgs
  }

  // Custom InputTypes
  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountCancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cancionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model cancion
   */

  export type AggregateCancion = {
    _count: CancionCountAggregateOutputType | null
    _avg: CancionAvgAggregateOutputType | null
    _sum: CancionSumAggregateOutputType | null
    _min: CancionMinAggregateOutputType | null
    _max: CancionMaxAggregateOutputType | null
  }

  export type CancionAvgAggregateOutputType = {
    id: number | null
    generoId: number | null
    anioLanzamiento: number | null
    albumId: number | null
  }

  export type CancionSumAggregateOutputType = {
    id: number | null
    generoId: number | null
    anioLanzamiento: number | null
    albumId: number | null
  }

  export type CancionMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    fechaLanzamiento: Date | null
    generoId: number | null
    restriccionEdad: boolean | null
    portada: string | null
    anioLanzamiento: number | null
    albumId: number | null
  }

  export type CancionMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    fechaLanzamiento: Date | null
    generoId: number | null
    restriccionEdad: boolean | null
    portada: string | null
    anioLanzamiento: number | null
    albumId: number | null
  }

  export type CancionCountAggregateOutputType = {
    id: number
    titulo: number
    fechaLanzamiento: number
    generoId: number
    restriccionEdad: number
    portada: number
    anioLanzamiento: number
    albumId: number
    _all: number
  }


  export type CancionAvgAggregateInputType = {
    id?: true
    generoId?: true
    anioLanzamiento?: true
    albumId?: true
  }

  export type CancionSumAggregateInputType = {
    id?: true
    generoId?: true
    anioLanzamiento?: true
    albumId?: true
  }

  export type CancionMinAggregateInputType = {
    id?: true
    titulo?: true
    fechaLanzamiento?: true
    generoId?: true
    restriccionEdad?: true
    portada?: true
    anioLanzamiento?: true
    albumId?: true
  }

  export type CancionMaxAggregateInputType = {
    id?: true
    titulo?: true
    fechaLanzamiento?: true
    generoId?: true
    restriccionEdad?: true
    portada?: true
    anioLanzamiento?: true
    albumId?: true
  }

  export type CancionCountAggregateInputType = {
    id?: true
    titulo?: true
    fechaLanzamiento?: true
    generoId?: true
    restriccionEdad?: true
    portada?: true
    anioLanzamiento?: true
    albumId?: true
    _all?: true
  }

  export type CancionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cancion to aggregate.
     */
    where?: cancionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cancions to fetch.
     */
    orderBy?: cancionOrderByWithRelationInput | cancionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cancionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cancions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cancions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cancions
    **/
    _count?: true | CancionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CancionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CancionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CancionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CancionMaxAggregateInputType
  }

  export type GetCancionAggregateType<T extends CancionAggregateArgs> = {
        [P in keyof T & keyof AggregateCancion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCancion[P]>
      : GetScalarType<T[P], AggregateCancion[P]>
  }




  export type cancionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cancionWhereInput
    orderBy?: cancionOrderByWithAggregationInput | cancionOrderByWithAggregationInput[]
    by: CancionScalarFieldEnum[] | CancionScalarFieldEnum
    having?: cancionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CancionCountAggregateInputType | true
    _avg?: CancionAvgAggregateInputType
    _sum?: CancionSumAggregateInputType
    _min?: CancionMinAggregateInputType
    _max?: CancionMaxAggregateInputType
  }

  export type CancionGroupByOutputType = {
    id: number
    titulo: string
    fechaLanzamiento: Date | null
    generoId: number | null
    restriccionEdad: boolean
    portada: string | null
    anioLanzamiento: number | null
    albumId: number | null
    _count: CancionCountAggregateOutputType | null
    _avg: CancionAvgAggregateOutputType | null
    _sum: CancionSumAggregateOutputType | null
    _min: CancionMinAggregateOutputType | null
    _max: CancionMaxAggregateOutputType | null
  }

  type GetCancionGroupByPayload<T extends cancionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CancionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CancionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CancionGroupByOutputType[P]>
            : GetScalarType<T[P], CancionGroupByOutputType[P]>
        }
      >
    >


  export type cancionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    fechaLanzamiento?: boolean
    generoId?: boolean
    restriccionEdad?: boolean
    portada?: boolean
    anioLanzamiento?: boolean
    albumId?: boolean
    album?: boolean | cancion$albumArgs<ExtArgs>
    genero?: boolean | cancion$generoArgs<ExtArgs>
    usuarioscanciones?: boolean | cancion$usuarioscancionesArgs<ExtArgs>
    playlists?: boolean | cancion$playlistsArgs<ExtArgs>
    comentarios?: boolean | cancion$comentariosArgs<ExtArgs>
    _count?: boolean | CancionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cancion"]>



  export type cancionSelectScalar = {
    id?: boolean
    titulo?: boolean
    fechaLanzamiento?: boolean
    generoId?: boolean
    restriccionEdad?: boolean
    portada?: boolean
    anioLanzamiento?: boolean
    albumId?: boolean
  }

  export type cancionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "fechaLanzamiento" | "generoId" | "restriccionEdad" | "portada" | "anioLanzamiento" | "albumId", ExtArgs["result"]["cancion"]>
  export type cancionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | cancion$albumArgs<ExtArgs>
    genero?: boolean | cancion$generoArgs<ExtArgs>
    usuarioscanciones?: boolean | cancion$usuarioscancionesArgs<ExtArgs>
    playlists?: boolean | cancion$playlistsArgs<ExtArgs>
    comentarios?: boolean | cancion$comentariosArgs<ExtArgs>
    _count?: boolean | CancionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $cancionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cancion"
    objects: {
      album: Prisma.$albumPayload<ExtArgs> | null
      genero: Prisma.$generoPayload<ExtArgs> | null
      usuarioscanciones: Prisma.$usuarioscancionesPayload<ExtArgs>[]
      playlists: Prisma.$playlistPayload<ExtArgs>[]
      comentarios: Prisma.$comentarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      fechaLanzamiento: Date | null
      generoId: number | null
      restriccionEdad: boolean
      portada: string | null
      anioLanzamiento: number | null
      albumId: number | null
    }, ExtArgs["result"]["cancion"]>
    composites: {}
  }

  type cancionGetPayload<S extends boolean | null | undefined | cancionDefaultArgs> = $Result.GetResult<Prisma.$cancionPayload, S>

  type cancionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cancionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CancionCountAggregateInputType | true
    }

  export interface cancionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cancion'], meta: { name: 'cancion' } }
    /**
     * Find zero or one Cancion that matches the filter.
     * @param {cancionFindUniqueArgs} args - Arguments to find a Cancion
     * @example
     * // Get one Cancion
     * const cancion = await prisma.cancion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cancionFindUniqueArgs>(args: SelectSubset<T, cancionFindUniqueArgs<ExtArgs>>): Prisma__cancionClient<$Result.GetResult<Prisma.$cancionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cancion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cancionFindUniqueOrThrowArgs} args - Arguments to find a Cancion
     * @example
     * // Get one Cancion
     * const cancion = await prisma.cancion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cancionFindUniqueOrThrowArgs>(args: SelectSubset<T, cancionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cancionClient<$Result.GetResult<Prisma.$cancionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cancion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cancionFindFirstArgs} args - Arguments to find a Cancion
     * @example
     * // Get one Cancion
     * const cancion = await prisma.cancion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cancionFindFirstArgs>(args?: SelectSubset<T, cancionFindFirstArgs<ExtArgs>>): Prisma__cancionClient<$Result.GetResult<Prisma.$cancionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cancion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cancionFindFirstOrThrowArgs} args - Arguments to find a Cancion
     * @example
     * // Get one Cancion
     * const cancion = await prisma.cancion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cancionFindFirstOrThrowArgs>(args?: SelectSubset<T, cancionFindFirstOrThrowArgs<ExtArgs>>): Prisma__cancionClient<$Result.GetResult<Prisma.$cancionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cancions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cancionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cancions
     * const cancions = await prisma.cancion.findMany()
     * 
     * // Get first 10 Cancions
     * const cancions = await prisma.cancion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cancionWithIdOnly = await prisma.cancion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cancionFindManyArgs>(args?: SelectSubset<T, cancionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cancionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cancion.
     * @param {cancionCreateArgs} args - Arguments to create a Cancion.
     * @example
     * // Create one Cancion
     * const Cancion = await prisma.cancion.create({
     *   data: {
     *     // ... data to create a Cancion
     *   }
     * })
     * 
     */
    create<T extends cancionCreateArgs>(args: SelectSubset<T, cancionCreateArgs<ExtArgs>>): Prisma__cancionClient<$Result.GetResult<Prisma.$cancionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cancions.
     * @param {cancionCreateManyArgs} args - Arguments to create many Cancions.
     * @example
     * // Create many Cancions
     * const cancion = await prisma.cancion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cancionCreateManyArgs>(args?: SelectSubset<T, cancionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cancion.
     * @param {cancionDeleteArgs} args - Arguments to delete one Cancion.
     * @example
     * // Delete one Cancion
     * const Cancion = await prisma.cancion.delete({
     *   where: {
     *     // ... filter to delete one Cancion
     *   }
     * })
     * 
     */
    delete<T extends cancionDeleteArgs>(args: SelectSubset<T, cancionDeleteArgs<ExtArgs>>): Prisma__cancionClient<$Result.GetResult<Prisma.$cancionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cancion.
     * @param {cancionUpdateArgs} args - Arguments to update one Cancion.
     * @example
     * // Update one Cancion
     * const cancion = await prisma.cancion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cancionUpdateArgs>(args: SelectSubset<T, cancionUpdateArgs<ExtArgs>>): Prisma__cancionClient<$Result.GetResult<Prisma.$cancionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cancions.
     * @param {cancionDeleteManyArgs} args - Arguments to filter Cancions to delete.
     * @example
     * // Delete a few Cancions
     * const { count } = await prisma.cancion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cancionDeleteManyArgs>(args?: SelectSubset<T, cancionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cancions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cancionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cancions
     * const cancion = await prisma.cancion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cancionUpdateManyArgs>(args: SelectSubset<T, cancionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cancion.
     * @param {cancionUpsertArgs} args - Arguments to update or create a Cancion.
     * @example
     * // Update or create a Cancion
     * const cancion = await prisma.cancion.upsert({
     *   create: {
     *     // ... data to create a Cancion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cancion we want to update
     *   }
     * })
     */
    upsert<T extends cancionUpsertArgs>(args: SelectSubset<T, cancionUpsertArgs<ExtArgs>>): Prisma__cancionClient<$Result.GetResult<Prisma.$cancionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cancions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cancionCountArgs} args - Arguments to filter Cancions to count.
     * @example
     * // Count the number of Cancions
     * const count = await prisma.cancion.count({
     *   where: {
     *     // ... the filter for the Cancions we want to count
     *   }
     * })
    **/
    count<T extends cancionCountArgs>(
      args?: Subset<T, cancionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CancionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cancion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CancionAggregateArgs>(args: Subset<T, CancionAggregateArgs>): Prisma.PrismaPromise<GetCancionAggregateType<T>>

    /**
     * Group by Cancion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cancionGroupByArgs} args - Group by arguments.
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
      T extends cancionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cancionGroupByArgs['orderBy'] }
        : { orderBy?: cancionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cancionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCancionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cancion model
   */
  readonly fields: cancionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cancion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cancionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    album<T extends cancion$albumArgs<ExtArgs> = {}>(args?: Subset<T, cancion$albumArgs<ExtArgs>>): Prisma__albumClient<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    genero<T extends cancion$generoArgs<ExtArgs> = {}>(args?: Subset<T, cancion$generoArgs<ExtArgs>>): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuarioscanciones<T extends cancion$usuarioscancionesArgs<ExtArgs> = {}>(args?: Subset<T, cancion$usuarioscancionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioscancionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playlists<T extends cancion$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, cancion$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios<T extends cancion$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, cancion$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cancion model
   */
  interface cancionFieldRefs {
    readonly id: FieldRef<"cancion", 'Int'>
    readonly titulo: FieldRef<"cancion", 'String'>
    readonly fechaLanzamiento: FieldRef<"cancion", 'DateTime'>
    readonly generoId: FieldRef<"cancion", 'Int'>
    readonly restriccionEdad: FieldRef<"cancion", 'Boolean'>
    readonly portada: FieldRef<"cancion", 'String'>
    readonly anioLanzamiento: FieldRef<"cancion", 'Int'>
    readonly albumId: FieldRef<"cancion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cancion findUnique
   */
  export type cancionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cancion
     */
    omit?: cancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cancionInclude<ExtArgs> | null
    /**
     * Filter, which cancion to fetch.
     */
    where: cancionWhereUniqueInput
  }

  /**
   * cancion findUniqueOrThrow
   */
  export type cancionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cancion
     */
    omit?: cancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cancionInclude<ExtArgs> | null
    /**
     * Filter, which cancion to fetch.
     */
    where: cancionWhereUniqueInput
  }

  /**
   * cancion findFirst
   */
  export type cancionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cancion
     */
    omit?: cancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cancionInclude<ExtArgs> | null
    /**
     * Filter, which cancion to fetch.
     */
    where?: cancionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cancions to fetch.
     */
    orderBy?: cancionOrderByWithRelationInput | cancionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cancions.
     */
    cursor?: cancionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cancions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cancions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cancions.
     */
    distinct?: CancionScalarFieldEnum | CancionScalarFieldEnum[]
  }

  /**
   * cancion findFirstOrThrow
   */
  export type cancionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cancion
     */
    omit?: cancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cancionInclude<ExtArgs> | null
    /**
     * Filter, which cancion to fetch.
     */
    where?: cancionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cancions to fetch.
     */
    orderBy?: cancionOrderByWithRelationInput | cancionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cancions.
     */
    cursor?: cancionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cancions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cancions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cancions.
     */
    distinct?: CancionScalarFieldEnum | CancionScalarFieldEnum[]
  }

  /**
   * cancion findMany
   */
  export type cancionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cancion
     */
    omit?: cancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cancionInclude<ExtArgs> | null
    /**
     * Filter, which cancions to fetch.
     */
    where?: cancionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cancions to fetch.
     */
    orderBy?: cancionOrderByWithRelationInput | cancionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cancions.
     */
    cursor?: cancionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cancions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cancions.
     */
    skip?: number
    distinct?: CancionScalarFieldEnum | CancionScalarFieldEnum[]
  }

  /**
   * cancion create
   */
  export type cancionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cancion
     */
    omit?: cancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cancionInclude<ExtArgs> | null
    /**
     * The data needed to create a cancion.
     */
    data: XOR<cancionCreateInput, cancionUncheckedCreateInput>
  }

  /**
   * cancion createMany
   */
  export type cancionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cancions.
     */
    data: cancionCreateManyInput | cancionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cancion update
   */
  export type cancionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cancion
     */
    omit?: cancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cancionInclude<ExtArgs> | null
    /**
     * The data needed to update a cancion.
     */
    data: XOR<cancionUpdateInput, cancionUncheckedUpdateInput>
    /**
     * Choose, which cancion to update.
     */
    where: cancionWhereUniqueInput
  }

  /**
   * cancion updateMany
   */
  export type cancionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cancions.
     */
    data: XOR<cancionUpdateManyMutationInput, cancionUncheckedUpdateManyInput>
    /**
     * Filter which cancions to update
     */
    where?: cancionWhereInput
    /**
     * Limit how many cancions to update.
     */
    limit?: number
  }

  /**
   * cancion upsert
   */
  export type cancionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cancion
     */
    omit?: cancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cancionInclude<ExtArgs> | null
    /**
     * The filter to search for the cancion to update in case it exists.
     */
    where: cancionWhereUniqueInput
    /**
     * In case the cancion found by the `where` argument doesn't exist, create a new cancion with this data.
     */
    create: XOR<cancionCreateInput, cancionUncheckedCreateInput>
    /**
     * In case the cancion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cancionUpdateInput, cancionUncheckedUpdateInput>
  }

  /**
   * cancion delete
   */
  export type cancionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cancion
     */
    omit?: cancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cancionInclude<ExtArgs> | null
    /**
     * Filter which cancion to delete.
     */
    where: cancionWhereUniqueInput
  }

  /**
   * cancion deleteMany
   */
  export type cancionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cancions to delete
     */
    where?: cancionWhereInput
    /**
     * Limit how many cancions to delete.
     */
    limit?: number
  }

  /**
   * cancion.album
   */
  export type cancion$albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the album
     */
    omit?: albumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumInclude<ExtArgs> | null
    where?: albumWhereInput
  }

  /**
   * cancion.genero
   */
  export type cancion$generoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    where?: generoWhereInput
  }

  /**
   * cancion.usuarioscanciones
   */
  export type cancion$usuarioscancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioscanciones
     */
    select?: usuarioscancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioscanciones
     */
    omit?: usuarioscancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioscancionesInclude<ExtArgs> | null
    where?: usuarioscancionesWhereInput
    orderBy?: usuarioscancionesOrderByWithRelationInput | usuarioscancionesOrderByWithRelationInput[]
    cursor?: usuarioscancionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioscancionesScalarFieldEnum | UsuarioscancionesScalarFieldEnum[]
  }

  /**
   * cancion.playlists
   */
  export type cancion$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    where?: playlistWhereInput
    orderBy?: playlistOrderByWithRelationInput | playlistOrderByWithRelationInput[]
    cursor?: playlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * cancion.comentarios
   */
  export type cancion$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    where?: comentarioWhereInput
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    cursor?: comentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * cancion without action
   */
  export type cancionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cancion
     */
    omit?: cancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cancionInclude<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    rolId: number | null
    anioInicioCarrera: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    rolId: number | null
    anioInicioCarrera: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    nombre: string | null
    direccion: string | null
    estado: string | null
    fechaNacimiento: Date | null
    nacionalidad: string | null
    sexo: string | null
    apodo: string | null
    foto: string | null
    rolId: number | null
    anioInicioCarrera: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    nombre: string | null
    direccion: string | null
    estado: string | null
    fechaNacimiento: Date | null
    nacionalidad: string | null
    sexo: string | null
    apodo: string | null
    foto: string | null
    rolId: number | null
    anioInicioCarrera: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    password: number
    nombre: number
    direccion: number
    estado: number
    fechaNacimiento: number
    nacionalidad: number
    sexo: number
    apodo: number
    foto: number
    rolId: number
    anioInicioCarrera: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    rolId?: true
    anioInicioCarrera?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    rolId?: true
    anioInicioCarrera?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nombre?: true
    direccion?: true
    estado?: true
    fechaNacimiento?: true
    nacionalidad?: true
    sexo?: true
    apodo?: true
    foto?: true
    rolId?: true
    anioInicioCarrera?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nombre?: true
    direccion?: true
    estado?: true
    fechaNacimiento?: true
    nacionalidad?: true
    sexo?: true
    apodo?: true
    foto?: true
    rolId?: true
    anioInicioCarrera?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nombre?: true
    direccion?: true
    estado?: true
    fechaNacimiento?: true
    nacionalidad?: true
    sexo?: true
    apodo?: true
    foto?: true
    rolId?: true
    anioInicioCarrera?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    email: string
    password: string
    nombre: string
    direccion: string | null
    estado: string | null
    fechaNacimiento: Date | null
    nacionalidad: string | null
    sexo: string | null
    apodo: string | null
    foto: string | null
    rolId: number
    anioInicioCarrera: number | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    direccion?: boolean
    estado?: boolean
    fechaNacimiento?: boolean
    nacionalidad?: boolean
    sexo?: boolean
    apodo?: boolean
    foto?: boolean
    rolId?: boolean
    anioInicioCarrera?: boolean
    rol?: boolean | rolDefaultArgs<ExtArgs>
    usuarioscanciones?: boolean | usuario$usuarioscancionesArgs<ExtArgs>
    playlists?: boolean | usuario$playlistsArgs<ExtArgs>
    comentarios?: boolean | usuario$comentariosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type usuarioSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    direccion?: boolean
    estado?: boolean
    fechaNacimiento?: boolean
    nacionalidad?: boolean
    sexo?: boolean
    apodo?: boolean
    foto?: boolean
    rolId?: boolean
    anioInicioCarrera?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "nombre" | "direccion" | "estado" | "fechaNacimiento" | "nacionalidad" | "sexo" | "apodo" | "foto" | "rolId" | "anioInicioCarrera", ExtArgs["result"]["usuario"]>
  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | rolDefaultArgs<ExtArgs>
    usuarioscanciones?: boolean | usuario$usuarioscancionesArgs<ExtArgs>
    playlists?: boolean | usuario$playlistsArgs<ExtArgs>
    comentarios?: boolean | usuario$comentariosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      rol: Prisma.$rolPayload<ExtArgs>
      usuarioscanciones: Prisma.$usuarioscancionesPayload<ExtArgs>[]
      playlists: Prisma.$playlistPayload<ExtArgs>[]
      comentarios: Prisma.$comentarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      nombre: string
      direccion: string | null
      estado: string | null
      fechaNacimiento: Date | null
      nacionalidad: string | null
      sexo: string | null
      apodo: string | null
      foto: string | null
      rolId: number
      anioInicioCarrera: number | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
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
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol<T extends rolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolDefaultArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuarioscanciones<T extends usuario$usuarioscancionesArgs<ExtArgs> = {}>(args?: Subset<T, usuario$usuarioscancionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioscancionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playlists<T extends usuario$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, usuario$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios<T extends usuario$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, usuario$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id: FieldRef<"usuario", 'Int'>
    readonly email: FieldRef<"usuario", 'String'>
    readonly password: FieldRef<"usuario", 'String'>
    readonly nombre: FieldRef<"usuario", 'String'>
    readonly direccion: FieldRef<"usuario", 'String'>
    readonly estado: FieldRef<"usuario", 'String'>
    readonly fechaNacimiento: FieldRef<"usuario", 'DateTime'>
    readonly nacionalidad: FieldRef<"usuario", 'String'>
    readonly sexo: FieldRef<"usuario", 'String'>
    readonly apodo: FieldRef<"usuario", 'String'>
    readonly foto: FieldRef<"usuario", 'String'>
    readonly rolId: FieldRef<"usuario", 'Int'>
    readonly anioInicioCarrera: FieldRef<"usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario.usuarioscanciones
   */
  export type usuario$usuarioscancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioscanciones
     */
    select?: usuarioscancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioscanciones
     */
    omit?: usuarioscancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioscancionesInclude<ExtArgs> | null
    where?: usuarioscancionesWhereInput
    orderBy?: usuarioscancionesOrderByWithRelationInput | usuarioscancionesOrderByWithRelationInput[]
    cursor?: usuarioscancionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioscancionesScalarFieldEnum | UsuarioscancionesScalarFieldEnum[]
  }

  /**
   * usuario.playlists
   */
  export type usuario$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    where?: playlistWhereInput
    orderBy?: playlistOrderByWithRelationInput | playlistOrderByWithRelationInput[]
    cursor?: playlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * usuario.comentarios
   */
  export type usuario$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    where?: comentarioWhereInput
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    cursor?: comentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Model usuarioscanciones
   */

  export type AggregateUsuarioscanciones = {
    _count: UsuarioscancionesCountAggregateOutputType | null
    _avg: UsuarioscancionesAvgAggregateOutputType | null
    _sum: UsuarioscancionesSumAggregateOutputType | null
    _min: UsuarioscancionesMinAggregateOutputType | null
    _max: UsuarioscancionesMaxAggregateOutputType | null
  }

  export type UsuarioscancionesAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    cancionId: number | null
  }

  export type UsuarioscancionesSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    cancionId: number | null
  }

  export type UsuarioscancionesMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    cancionId: number | null
  }

  export type UsuarioscancionesMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    cancionId: number | null
  }

  export type UsuarioscancionesCountAggregateOutputType = {
    id: number
    usuarioId: number
    cancionId: number
    _all: number
  }


  export type UsuarioscancionesAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    cancionId?: true
  }

  export type UsuarioscancionesSumAggregateInputType = {
    id?: true
    usuarioId?: true
    cancionId?: true
  }

  export type UsuarioscancionesMinAggregateInputType = {
    id?: true
    usuarioId?: true
    cancionId?: true
  }

  export type UsuarioscancionesMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    cancionId?: true
  }

  export type UsuarioscancionesCountAggregateInputType = {
    id?: true
    usuarioId?: true
    cancionId?: true
    _all?: true
  }

  export type UsuarioscancionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarioscanciones to aggregate.
     */
    where?: usuarioscancionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarioscanciones to fetch.
     */
    orderBy?: usuarioscancionesOrderByWithRelationInput | usuarioscancionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioscancionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarioscanciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarioscanciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarioscanciones
    **/
    _count?: true | UsuarioscancionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioscancionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioscancionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioscancionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioscancionesMaxAggregateInputType
  }

  export type GetUsuarioscancionesAggregateType<T extends UsuarioscancionesAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarioscanciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarioscanciones[P]>
      : GetScalarType<T[P], AggregateUsuarioscanciones[P]>
  }




  export type usuarioscancionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioscancionesWhereInput
    orderBy?: usuarioscancionesOrderByWithAggregationInput | usuarioscancionesOrderByWithAggregationInput[]
    by: UsuarioscancionesScalarFieldEnum[] | UsuarioscancionesScalarFieldEnum
    having?: usuarioscancionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioscancionesCountAggregateInputType | true
    _avg?: UsuarioscancionesAvgAggregateInputType
    _sum?: UsuarioscancionesSumAggregateInputType
    _min?: UsuarioscancionesMinAggregateInputType
    _max?: UsuarioscancionesMaxAggregateInputType
  }

  export type UsuarioscancionesGroupByOutputType = {
    id: number
    usuarioId: number
    cancionId: number
    _count: UsuarioscancionesCountAggregateOutputType | null
    _avg: UsuarioscancionesAvgAggregateOutputType | null
    _sum: UsuarioscancionesSumAggregateOutputType | null
    _min: UsuarioscancionesMinAggregateOutputType | null
    _max: UsuarioscancionesMaxAggregateOutputType | null
  }

  type GetUsuarioscancionesGroupByPayload<T extends usuarioscancionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioscancionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioscancionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioscancionesGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioscancionesGroupByOutputType[P]>
        }
      >
    >


  export type usuarioscancionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    cancionId?: boolean
    cancion?: boolean | cancionDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioscanciones"]>



  export type usuarioscancionesSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    cancionId?: boolean
  }

  export type usuarioscancionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "cancionId", ExtArgs["result"]["usuarioscanciones"]>
  export type usuarioscancionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cancion?: boolean | cancionDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $usuarioscancionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarioscanciones"
    objects: {
      cancion: Prisma.$cancionPayload<ExtArgs>
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      cancionId: number
    }, ExtArgs["result"]["usuarioscanciones"]>
    composites: {}
  }

  type usuarioscancionesGetPayload<S extends boolean | null | undefined | usuarioscancionesDefaultArgs> = $Result.GetResult<Prisma.$usuarioscancionesPayload, S>

  type usuarioscancionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioscancionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioscancionesCountAggregateInputType | true
    }

  export interface usuarioscancionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarioscanciones'], meta: { name: 'usuarioscanciones' } }
    /**
     * Find zero or one Usuarioscanciones that matches the filter.
     * @param {usuarioscancionesFindUniqueArgs} args - Arguments to find a Usuarioscanciones
     * @example
     * // Get one Usuarioscanciones
     * const usuarioscanciones = await prisma.usuarioscanciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioscancionesFindUniqueArgs>(args: SelectSubset<T, usuarioscancionesFindUniqueArgs<ExtArgs>>): Prisma__usuarioscancionesClient<$Result.GetResult<Prisma.$usuarioscancionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarioscanciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioscancionesFindUniqueOrThrowArgs} args - Arguments to find a Usuarioscanciones
     * @example
     * // Get one Usuarioscanciones
     * const usuarioscanciones = await prisma.usuarioscanciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioscancionesFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioscancionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioscancionesClient<$Result.GetResult<Prisma.$usuarioscancionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarioscanciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioscancionesFindFirstArgs} args - Arguments to find a Usuarioscanciones
     * @example
     * // Get one Usuarioscanciones
     * const usuarioscanciones = await prisma.usuarioscanciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioscancionesFindFirstArgs>(args?: SelectSubset<T, usuarioscancionesFindFirstArgs<ExtArgs>>): Prisma__usuarioscancionesClient<$Result.GetResult<Prisma.$usuarioscancionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarioscanciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioscancionesFindFirstOrThrowArgs} args - Arguments to find a Usuarioscanciones
     * @example
     * // Get one Usuarioscanciones
     * const usuarioscanciones = await prisma.usuarioscanciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioscancionesFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioscancionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioscancionesClient<$Result.GetResult<Prisma.$usuarioscancionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarioscanciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioscancionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarioscanciones
     * const usuarioscanciones = await prisma.usuarioscanciones.findMany()
     * 
     * // Get first 10 Usuarioscanciones
     * const usuarioscanciones = await prisma.usuarioscanciones.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioscancionesWithIdOnly = await prisma.usuarioscanciones.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuarioscancionesFindManyArgs>(args?: SelectSubset<T, usuarioscancionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioscancionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarioscanciones.
     * @param {usuarioscancionesCreateArgs} args - Arguments to create a Usuarioscanciones.
     * @example
     * // Create one Usuarioscanciones
     * const Usuarioscanciones = await prisma.usuarioscanciones.create({
     *   data: {
     *     // ... data to create a Usuarioscanciones
     *   }
     * })
     * 
     */
    create<T extends usuarioscancionesCreateArgs>(args: SelectSubset<T, usuarioscancionesCreateArgs<ExtArgs>>): Prisma__usuarioscancionesClient<$Result.GetResult<Prisma.$usuarioscancionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarioscanciones.
     * @param {usuarioscancionesCreateManyArgs} args - Arguments to create many Usuarioscanciones.
     * @example
     * // Create many Usuarioscanciones
     * const usuarioscanciones = await prisma.usuarioscanciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioscancionesCreateManyArgs>(args?: SelectSubset<T, usuarioscancionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarioscanciones.
     * @param {usuarioscancionesDeleteArgs} args - Arguments to delete one Usuarioscanciones.
     * @example
     * // Delete one Usuarioscanciones
     * const Usuarioscanciones = await prisma.usuarioscanciones.delete({
     *   where: {
     *     // ... filter to delete one Usuarioscanciones
     *   }
     * })
     * 
     */
    delete<T extends usuarioscancionesDeleteArgs>(args: SelectSubset<T, usuarioscancionesDeleteArgs<ExtArgs>>): Prisma__usuarioscancionesClient<$Result.GetResult<Prisma.$usuarioscancionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarioscanciones.
     * @param {usuarioscancionesUpdateArgs} args - Arguments to update one Usuarioscanciones.
     * @example
     * // Update one Usuarioscanciones
     * const usuarioscanciones = await prisma.usuarioscanciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioscancionesUpdateArgs>(args: SelectSubset<T, usuarioscancionesUpdateArgs<ExtArgs>>): Prisma__usuarioscancionesClient<$Result.GetResult<Prisma.$usuarioscancionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarioscanciones.
     * @param {usuarioscancionesDeleteManyArgs} args - Arguments to filter Usuarioscanciones to delete.
     * @example
     * // Delete a few Usuarioscanciones
     * const { count } = await prisma.usuarioscanciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioscancionesDeleteManyArgs>(args?: SelectSubset<T, usuarioscancionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarioscanciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioscancionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarioscanciones
     * const usuarioscanciones = await prisma.usuarioscanciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioscancionesUpdateManyArgs>(args: SelectSubset<T, usuarioscancionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarioscanciones.
     * @param {usuarioscancionesUpsertArgs} args - Arguments to update or create a Usuarioscanciones.
     * @example
     * // Update or create a Usuarioscanciones
     * const usuarioscanciones = await prisma.usuarioscanciones.upsert({
     *   create: {
     *     // ... data to create a Usuarioscanciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarioscanciones we want to update
     *   }
     * })
     */
    upsert<T extends usuarioscancionesUpsertArgs>(args: SelectSubset<T, usuarioscancionesUpsertArgs<ExtArgs>>): Prisma__usuarioscancionesClient<$Result.GetResult<Prisma.$usuarioscancionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarioscanciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioscancionesCountArgs} args - Arguments to filter Usuarioscanciones to count.
     * @example
     * // Count the number of Usuarioscanciones
     * const count = await prisma.usuarioscanciones.count({
     *   where: {
     *     // ... the filter for the Usuarioscanciones we want to count
     *   }
     * })
    **/
    count<T extends usuarioscancionesCountArgs>(
      args?: Subset<T, usuarioscancionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioscancionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarioscanciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioscancionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioscancionesAggregateArgs>(args: Subset<T, UsuarioscancionesAggregateArgs>): Prisma.PrismaPromise<GetUsuarioscancionesAggregateType<T>>

    /**
     * Group by Usuarioscanciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioscancionesGroupByArgs} args - Group by arguments.
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
      T extends usuarioscancionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioscancionesGroupByArgs['orderBy'] }
        : { orderBy?: usuarioscancionesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuarioscancionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioscancionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarioscanciones model
   */
  readonly fields: usuarioscancionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarioscanciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioscancionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cancion<T extends cancionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cancionDefaultArgs<ExtArgs>>): Prisma__cancionClient<$Result.GetResult<Prisma.$cancionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the usuarioscanciones model
   */
  interface usuarioscancionesFieldRefs {
    readonly id: FieldRef<"usuarioscanciones", 'Int'>
    readonly usuarioId: FieldRef<"usuarioscanciones", 'Int'>
    readonly cancionId: FieldRef<"usuarioscanciones", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * usuarioscanciones findUnique
   */
  export type usuarioscancionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioscanciones
     */
    select?: usuarioscancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioscanciones
     */
    omit?: usuarioscancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioscancionesInclude<ExtArgs> | null
    /**
     * Filter, which usuarioscanciones to fetch.
     */
    where: usuarioscancionesWhereUniqueInput
  }

  /**
   * usuarioscanciones findUniqueOrThrow
   */
  export type usuarioscancionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioscanciones
     */
    select?: usuarioscancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioscanciones
     */
    omit?: usuarioscancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioscancionesInclude<ExtArgs> | null
    /**
     * Filter, which usuarioscanciones to fetch.
     */
    where: usuarioscancionesWhereUniqueInput
  }

  /**
   * usuarioscanciones findFirst
   */
  export type usuarioscancionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioscanciones
     */
    select?: usuarioscancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioscanciones
     */
    omit?: usuarioscancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioscancionesInclude<ExtArgs> | null
    /**
     * Filter, which usuarioscanciones to fetch.
     */
    where?: usuarioscancionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarioscanciones to fetch.
     */
    orderBy?: usuarioscancionesOrderByWithRelationInput | usuarioscancionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarioscanciones.
     */
    cursor?: usuarioscancionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarioscanciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarioscanciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarioscanciones.
     */
    distinct?: UsuarioscancionesScalarFieldEnum | UsuarioscancionesScalarFieldEnum[]
  }

  /**
   * usuarioscanciones findFirstOrThrow
   */
  export type usuarioscancionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioscanciones
     */
    select?: usuarioscancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioscanciones
     */
    omit?: usuarioscancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioscancionesInclude<ExtArgs> | null
    /**
     * Filter, which usuarioscanciones to fetch.
     */
    where?: usuarioscancionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarioscanciones to fetch.
     */
    orderBy?: usuarioscancionesOrderByWithRelationInput | usuarioscancionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarioscanciones.
     */
    cursor?: usuarioscancionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarioscanciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarioscanciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarioscanciones.
     */
    distinct?: UsuarioscancionesScalarFieldEnum | UsuarioscancionesScalarFieldEnum[]
  }

  /**
   * usuarioscanciones findMany
   */
  export type usuarioscancionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioscanciones
     */
    select?: usuarioscancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioscanciones
     */
    omit?: usuarioscancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioscancionesInclude<ExtArgs> | null
    /**
     * Filter, which usuarioscanciones to fetch.
     */
    where?: usuarioscancionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarioscanciones to fetch.
     */
    orderBy?: usuarioscancionesOrderByWithRelationInput | usuarioscancionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarioscanciones.
     */
    cursor?: usuarioscancionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarioscanciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarioscanciones.
     */
    skip?: number
    distinct?: UsuarioscancionesScalarFieldEnum | UsuarioscancionesScalarFieldEnum[]
  }

  /**
   * usuarioscanciones create
   */
  export type usuarioscancionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioscanciones
     */
    select?: usuarioscancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioscanciones
     */
    omit?: usuarioscancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioscancionesInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarioscanciones.
     */
    data: XOR<usuarioscancionesCreateInput, usuarioscancionesUncheckedCreateInput>
  }

  /**
   * usuarioscanciones createMany
   */
  export type usuarioscancionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarioscanciones.
     */
    data: usuarioscancionesCreateManyInput | usuarioscancionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarioscanciones update
   */
  export type usuarioscancionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioscanciones
     */
    select?: usuarioscancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioscanciones
     */
    omit?: usuarioscancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioscancionesInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarioscanciones.
     */
    data: XOR<usuarioscancionesUpdateInput, usuarioscancionesUncheckedUpdateInput>
    /**
     * Choose, which usuarioscanciones to update.
     */
    where: usuarioscancionesWhereUniqueInput
  }

  /**
   * usuarioscanciones updateMany
   */
  export type usuarioscancionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarioscanciones.
     */
    data: XOR<usuarioscancionesUpdateManyMutationInput, usuarioscancionesUncheckedUpdateManyInput>
    /**
     * Filter which usuarioscanciones to update
     */
    where?: usuarioscancionesWhereInput
    /**
     * Limit how many usuarioscanciones to update.
     */
    limit?: number
  }

  /**
   * usuarioscanciones upsert
   */
  export type usuarioscancionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioscanciones
     */
    select?: usuarioscancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioscanciones
     */
    omit?: usuarioscancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioscancionesInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarioscanciones to update in case it exists.
     */
    where: usuarioscancionesWhereUniqueInput
    /**
     * In case the usuarioscanciones found by the `where` argument doesn't exist, create a new usuarioscanciones with this data.
     */
    create: XOR<usuarioscancionesCreateInput, usuarioscancionesUncheckedCreateInput>
    /**
     * In case the usuarioscanciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioscancionesUpdateInput, usuarioscancionesUncheckedUpdateInput>
  }

  /**
   * usuarioscanciones delete
   */
  export type usuarioscancionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioscanciones
     */
    select?: usuarioscancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioscanciones
     */
    omit?: usuarioscancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioscancionesInclude<ExtArgs> | null
    /**
     * Filter which usuarioscanciones to delete.
     */
    where: usuarioscancionesWhereUniqueInput
  }

  /**
   * usuarioscanciones deleteMany
   */
  export type usuarioscancionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarioscanciones to delete
     */
    where?: usuarioscancionesWhereInput
    /**
     * Limit how many usuarioscanciones to delete.
     */
    limit?: number
  }

  /**
   * usuarioscanciones without action
   */
  export type usuarioscancionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarioscanciones
     */
    select?: usuarioscancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarioscanciones
     */
    omit?: usuarioscancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioscancionesInclude<ExtArgs> | null
  }


  /**
   * Model rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolAvgAggregateOutputType = {
    id: number | null
  }

  export type RolSumAggregateOutputType = {
    id: number | null
  }

  export type RolMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type RolMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type RolCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type RolAvgAggregateInputType = {
    id?: true
  }

  export type RolSumAggregateInputType = {
    id?: true
  }

  export type RolMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type RolMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type RolCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rol to aggregate.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type rolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolWhereInput
    orderBy?: rolOrderByWithAggregationInput | rolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: rolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _avg?: RolAvgAggregateInputType
    _sum?: RolSumAggregateInputType
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends rolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type rolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    usuarios?: boolean | rol$usuariosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>



  export type rolSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type rolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion", ExtArgs["result"]["rol"]>
  export type rolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | rol$usuariosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $rolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rol"
    objects: {
      usuarios: Prisma.$usuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type rolGetPayload<S extends boolean | null | undefined | rolDefaultArgs> = $Result.GetResult<Prisma.$rolPayload, S>

  type rolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface rolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rol'], meta: { name: 'rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {rolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolFindUniqueArgs>(args: SelectSubset<T, rolFindUniqueArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolFindUniqueOrThrowArgs>(args: SelectSubset<T, rolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolFindFirstArgs>(args?: SelectSubset<T, rolFindFirstArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolFindFirstOrThrowArgs>(args?: SelectSubset<T, rolFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolWithIdOnly = await prisma.rol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rolFindManyArgs>(args?: SelectSubset<T, rolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {rolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends rolCreateArgs>(args: SelectSubset<T, rolCreateArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {rolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolCreateManyArgs>(args?: SelectSubset<T, rolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rol.
     * @param {rolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends rolDeleteArgs>(args: SelectSubset<T, rolDeleteArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {rolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolUpdateArgs>(args: SelectSubset<T, rolUpdateArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {rolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolDeleteManyArgs>(args?: SelectSubset<T, rolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolUpdateManyArgs>(args: SelectSubset<T, rolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rol.
     * @param {rolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends rolUpsertArgs>(args: SelectSubset<T, rolUpsertArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends rolCountArgs>(
      args?: Subset<T, rolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolGroupByArgs} args - Group by arguments.
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
      T extends rolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolGroupByArgs['orderBy'] }
        : { orderBy?: rolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rol model
   */
  readonly fields: rolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends rol$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, rol$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the rol model
   */
  interface rolFieldRefs {
    readonly id: FieldRef<"rol", 'Int'>
    readonly nombre: FieldRef<"rol", 'String'>
    readonly descripcion: FieldRef<"rol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rol findUnique
   */
  export type rolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol findUniqueOrThrow
   */
  export type rolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol findFirst
   */
  export type rolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol findFirstOrThrow
   */
  export type rolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol findMany
   */
  export type rolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rols to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol create
   */
  export type rolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * The data needed to create a rol.
     */
    data: XOR<rolCreateInput, rolUncheckedCreateInput>
  }

  /**
   * rol createMany
   */
  export type rolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rols.
     */
    data: rolCreateManyInput | rolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rol update
   */
  export type rolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * The data needed to update a rol.
     */
    data: XOR<rolUpdateInput, rolUncheckedUpdateInput>
    /**
     * Choose, which rol to update.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol updateMany
   */
  export type rolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rols.
     */
    data: XOR<rolUpdateManyMutationInput, rolUncheckedUpdateManyInput>
    /**
     * Filter which rols to update
     */
    where?: rolWhereInput
    /**
     * Limit how many rols to update.
     */
    limit?: number
  }

  /**
   * rol upsert
   */
  export type rolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * The filter to search for the rol to update in case it exists.
     */
    where: rolWhereUniqueInput
    /**
     * In case the rol found by the `where` argument doesn't exist, create a new rol with this data.
     */
    create: XOR<rolCreateInput, rolUncheckedCreateInput>
    /**
     * In case the rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolUpdateInput, rolUncheckedUpdateInput>
  }

  /**
   * rol delete
   */
  export type rolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter which rol to delete.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol deleteMany
   */
  export type rolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rols to delete
     */
    where?: rolWhereInput
    /**
     * Limit how many rols to delete.
     */
    limit?: number
  }

  /**
   * rol.usuarios
   */
  export type rol$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    cursor?: usuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * rol without action
   */
  export type rolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
  }


  /**
   * Model album
   */

  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumAvgAggregateOutputType = {
    id: number | null
    anio: number | null
  }

  export type AlbumSumAggregateOutputType = {
    id: number | null
    anio: number | null
  }

  export type AlbumMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    anio: number | null
    portada: string | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    anio: number | null
    portada: string | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    nombre: number
    anio: number
    portada: number
    _all: number
  }


  export type AlbumAvgAggregateInputType = {
    id?: true
    anio?: true
  }

  export type AlbumSumAggregateInputType = {
    id?: true
    anio?: true
  }

  export type AlbumMinAggregateInputType = {
    id?: true
    nombre?: true
    anio?: true
    portada?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    nombre?: true
    anio?: true
    portada?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    nombre?: true
    anio?: true
    portada?: true
    _all?: true
  }

  export type AlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which album to aggregate.
     */
    where?: albumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of albums to fetch.
     */
    orderBy?: albumOrderByWithRelationInput | albumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: albumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type albumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: albumWhereInput
    orderBy?: albumOrderByWithAggregationInput | albumOrderByWithAggregationInput[]
    by: AlbumScalarFieldEnum[] | AlbumScalarFieldEnum
    having?: albumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _avg?: AlbumAvgAggregateInputType
    _sum?: AlbumSumAggregateInputType
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    id: number
    nombre: string
    anio: number
    portada: string | null
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends albumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type albumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    anio?: boolean
    portada?: boolean
    canciones?: boolean | album$cancionesArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>



  export type albumSelectScalar = {
    id?: boolean
    nombre?: boolean
    anio?: boolean
    portada?: boolean
  }

  export type albumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "anio" | "portada", ExtArgs["result"]["album"]>
  export type albumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canciones?: boolean | album$cancionesArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $albumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "album"
    objects: {
      canciones: Prisma.$cancionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      anio: number
      portada: string | null
    }, ExtArgs["result"]["album"]>
    composites: {}
  }

  type albumGetPayload<S extends boolean | null | undefined | albumDefaultArgs> = $Result.GetResult<Prisma.$albumPayload, S>

  type albumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<albumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlbumCountAggregateInputType | true
    }

  export interface albumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['album'], meta: { name: 'album' } }
    /**
     * Find zero or one Album that matches the filter.
     * @param {albumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends albumFindUniqueArgs>(args: SelectSubset<T, albumFindUniqueArgs<ExtArgs>>): Prisma__albumClient<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Album that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {albumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends albumFindUniqueOrThrowArgs>(args: SelectSubset<T, albumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__albumClient<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {albumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends albumFindFirstArgs>(args?: SelectSubset<T, albumFindFirstArgs<ExtArgs>>): Prisma__albumClient<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {albumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends albumFindFirstOrThrowArgs>(args?: SelectSubset<T, albumFindFirstOrThrowArgs<ExtArgs>>): Prisma__albumClient<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {albumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends albumFindManyArgs>(args?: SelectSubset<T, albumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Album.
     * @param {albumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
     */
    create<T extends albumCreateArgs>(args: SelectSubset<T, albumCreateArgs<ExtArgs>>): Prisma__albumClient<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Albums.
     * @param {albumCreateManyArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends albumCreateManyArgs>(args?: SelectSubset<T, albumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Album.
     * @param {albumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
     */
    delete<T extends albumDeleteArgs>(args: SelectSubset<T, albumDeleteArgs<ExtArgs>>): Prisma__albumClient<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Album.
     * @param {albumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends albumUpdateArgs>(args: SelectSubset<T, albumUpdateArgs<ExtArgs>>): Prisma__albumClient<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Albums.
     * @param {albumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends albumDeleteManyArgs>(args?: SelectSubset<T, albumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {albumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends albumUpdateManyArgs>(args: SelectSubset<T, albumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Album.
     * @param {albumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
     */
    upsert<T extends albumUpsertArgs>(args: SelectSubset<T, albumUpsertArgs<ExtArgs>>): Prisma__albumClient<$Result.GetResult<Prisma.$albumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {albumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends albumCountArgs>(
      args?: Subset<T, albumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {albumGroupByArgs} args - Group by arguments.
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
      T extends albumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: albumGroupByArgs['orderBy'] }
        : { orderBy?: albumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, albumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the album model
   */
  readonly fields: albumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__albumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    canciones<T extends album$cancionesArgs<ExtArgs> = {}>(args?: Subset<T, album$cancionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cancionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the album model
   */
  interface albumFieldRefs {
    readonly id: FieldRef<"album", 'Int'>
    readonly nombre: FieldRef<"album", 'String'>
    readonly anio: FieldRef<"album", 'Int'>
    readonly portada: FieldRef<"album", 'String'>
  }
    

  // Custom InputTypes
  /**
   * album findUnique
   */
  export type albumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the album
     */
    omit?: albumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumInclude<ExtArgs> | null
    /**
     * Filter, which album to fetch.
     */
    where: albumWhereUniqueInput
  }

  /**
   * album findUniqueOrThrow
   */
  export type albumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the album
     */
    omit?: albumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumInclude<ExtArgs> | null
    /**
     * Filter, which album to fetch.
     */
    where: albumWhereUniqueInput
  }

  /**
   * album findFirst
   */
  export type albumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the album
     */
    omit?: albumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumInclude<ExtArgs> | null
    /**
     * Filter, which album to fetch.
     */
    where?: albumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of albums to fetch.
     */
    orderBy?: albumOrderByWithRelationInput | albumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for albums.
     */
    cursor?: albumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * album findFirstOrThrow
   */
  export type albumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the album
     */
    omit?: albumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumInclude<ExtArgs> | null
    /**
     * Filter, which album to fetch.
     */
    where?: albumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of albums to fetch.
     */
    orderBy?: albumOrderByWithRelationInput | albumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for albums.
     */
    cursor?: albumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * album findMany
   */
  export type albumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the album
     */
    omit?: albumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumInclude<ExtArgs> | null
    /**
     * Filter, which albums to fetch.
     */
    where?: albumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of albums to fetch.
     */
    orderBy?: albumOrderByWithRelationInput | albumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing albums.
     */
    cursor?: albumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` albums.
     */
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * album create
   */
  export type albumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the album
     */
    omit?: albumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumInclude<ExtArgs> | null
    /**
     * The data needed to create a album.
     */
    data: XOR<albumCreateInput, albumUncheckedCreateInput>
  }

  /**
   * album createMany
   */
  export type albumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many albums.
     */
    data: albumCreateManyInput | albumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * album update
   */
  export type albumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the album
     */
    omit?: albumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumInclude<ExtArgs> | null
    /**
     * The data needed to update a album.
     */
    data: XOR<albumUpdateInput, albumUncheckedUpdateInput>
    /**
     * Choose, which album to update.
     */
    where: albumWhereUniqueInput
  }

  /**
   * album updateMany
   */
  export type albumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update albums.
     */
    data: XOR<albumUpdateManyMutationInput, albumUncheckedUpdateManyInput>
    /**
     * Filter which albums to update
     */
    where?: albumWhereInput
    /**
     * Limit how many albums to update.
     */
    limit?: number
  }

  /**
   * album upsert
   */
  export type albumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the album
     */
    omit?: albumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumInclude<ExtArgs> | null
    /**
     * The filter to search for the album to update in case it exists.
     */
    where: albumWhereUniqueInput
    /**
     * In case the album found by the `where` argument doesn't exist, create a new album with this data.
     */
    create: XOR<albumCreateInput, albumUncheckedCreateInput>
    /**
     * In case the album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<albumUpdateInput, albumUncheckedUpdateInput>
  }

  /**
   * album delete
   */
  export type albumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the album
     */
    omit?: albumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumInclude<ExtArgs> | null
    /**
     * Filter which album to delete.
     */
    where: albumWhereUniqueInput
  }

  /**
   * album deleteMany
   */
  export type albumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which albums to delete
     */
    where?: albumWhereInput
    /**
     * Limit how many albums to delete.
     */
    limit?: number
  }

  /**
   * album.canciones
   */
  export type album$cancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cancion
     */
    omit?: cancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cancionInclude<ExtArgs> | null
    where?: cancionWhereInput
    orderBy?: cancionOrderByWithRelationInput | cancionOrderByWithRelationInput[]
    cursor?: cancionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CancionScalarFieldEnum | CancionScalarFieldEnum[]
  }

  /**
   * album without action
   */
  export type albumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the album
     */
    select?: albumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the album
     */
    omit?: albumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumInclude<ExtArgs> | null
  }


  /**
   * Model genero
   */

  export type AggregateGenero = {
    _count: GeneroCountAggregateOutputType | null
    _avg: GeneroAvgAggregateOutputType | null
    _sum: GeneroSumAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  export type GeneroAvgAggregateOutputType = {
    id: number | null
  }

  export type GeneroSumAggregateOutputType = {
    id: number | null
  }

  export type GeneroMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type GeneroMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type GeneroCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type GeneroAvgAggregateInputType = {
    id?: true
  }

  export type GeneroSumAggregateInputType = {
    id?: true
  }

  export type GeneroMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type GeneroMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type GeneroCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type GeneroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genero to aggregate.
     */
    where?: generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generos to fetch.
     */
    orderBy?: generoOrderByWithRelationInput | generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned generos
    **/
    _count?: true | GeneroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneroMaxAggregateInputType
  }

  export type GetGeneroAggregateType<T extends GeneroAggregateArgs> = {
        [P in keyof T & keyof AggregateGenero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenero[P]>
      : GetScalarType<T[P], AggregateGenero[P]>
  }




  export type generoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: generoWhereInput
    orderBy?: generoOrderByWithAggregationInput | generoOrderByWithAggregationInput[]
    by: GeneroScalarFieldEnum[] | GeneroScalarFieldEnum
    having?: generoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneroCountAggregateInputType | true
    _avg?: GeneroAvgAggregateInputType
    _sum?: GeneroSumAggregateInputType
    _min?: GeneroMinAggregateInputType
    _max?: GeneroMaxAggregateInputType
  }

  export type GeneroGroupByOutputType = {
    id: number
    nombre: string
    _count: GeneroCountAggregateOutputType | null
    _avg: GeneroAvgAggregateOutputType | null
    _sum: GeneroSumAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  type GetGeneroGroupByPayload<T extends generoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneroGroupByOutputType[P]>
            : GetScalarType<T[P], GeneroGroupByOutputType[P]>
        }
      >
    >


  export type generoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    canciones?: boolean | genero$cancionesArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genero"]>



  export type generoSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type generoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["genero"]>
  export type generoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canciones?: boolean | genero$cancionesArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $generoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "genero"
    objects: {
      canciones: Prisma.$cancionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["genero"]>
    composites: {}
  }

  type generoGetPayload<S extends boolean | null | undefined | generoDefaultArgs> = $Result.GetResult<Prisma.$generoPayload, S>

  type generoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<generoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneroCountAggregateInputType | true
    }

  export interface generoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['genero'], meta: { name: 'genero' } }
    /**
     * Find zero or one Genero that matches the filter.
     * @param {generoFindUniqueArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends generoFindUniqueArgs>(args: SelectSubset<T, generoFindUniqueArgs<ExtArgs>>): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {generoFindUniqueOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends generoFindUniqueOrThrowArgs>(args: SelectSubset<T, generoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generoFindFirstArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends generoFindFirstArgs>(args?: SelectSubset<T, generoFindFirstArgs<ExtArgs>>): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generoFindFirstOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends generoFindFirstOrThrowArgs>(args?: SelectSubset<T, generoFindFirstOrThrowArgs<ExtArgs>>): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generos
     * const generos = await prisma.genero.findMany()
     * 
     * // Get first 10 Generos
     * const generos = await prisma.genero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generoWithIdOnly = await prisma.genero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends generoFindManyArgs>(args?: SelectSubset<T, generoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genero.
     * @param {generoCreateArgs} args - Arguments to create a Genero.
     * @example
     * // Create one Genero
     * const Genero = await prisma.genero.create({
     *   data: {
     *     // ... data to create a Genero
     *   }
     * })
     * 
     */
    create<T extends generoCreateArgs>(args: SelectSubset<T, generoCreateArgs<ExtArgs>>): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generos.
     * @param {generoCreateManyArgs} args - Arguments to create many Generos.
     * @example
     * // Create many Generos
     * const genero = await prisma.genero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends generoCreateManyArgs>(args?: SelectSubset<T, generoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genero.
     * @param {generoDeleteArgs} args - Arguments to delete one Genero.
     * @example
     * // Delete one Genero
     * const Genero = await prisma.genero.delete({
     *   where: {
     *     // ... filter to delete one Genero
     *   }
     * })
     * 
     */
    delete<T extends generoDeleteArgs>(args: SelectSubset<T, generoDeleteArgs<ExtArgs>>): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genero.
     * @param {generoUpdateArgs} args - Arguments to update one Genero.
     * @example
     * // Update one Genero
     * const genero = await prisma.genero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends generoUpdateArgs>(args: SelectSubset<T, generoUpdateArgs<ExtArgs>>): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generos.
     * @param {generoDeleteManyArgs} args - Arguments to filter Generos to delete.
     * @example
     * // Delete a few Generos
     * const { count } = await prisma.genero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends generoDeleteManyArgs>(args?: SelectSubset<T, generoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generos
     * const genero = await prisma.genero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends generoUpdateManyArgs>(args: SelectSubset<T, generoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genero.
     * @param {generoUpsertArgs} args - Arguments to update or create a Genero.
     * @example
     * // Update or create a Genero
     * const genero = await prisma.genero.upsert({
     *   create: {
     *     // ... data to create a Genero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genero we want to update
     *   }
     * })
     */
    upsert<T extends generoUpsertArgs>(args: SelectSubset<T, generoUpsertArgs<ExtArgs>>): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generoCountArgs} args - Arguments to filter Generos to count.
     * @example
     * // Count the number of Generos
     * const count = await prisma.genero.count({
     *   where: {
     *     // ... the filter for the Generos we want to count
     *   }
     * })
    **/
    count<T extends generoCountArgs>(
      args?: Subset<T, generoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneroAggregateArgs>(args: Subset<T, GeneroAggregateArgs>): Prisma.PrismaPromise<GetGeneroAggregateType<T>>

    /**
     * Group by Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generoGroupByArgs} args - Group by arguments.
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
      T extends generoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: generoGroupByArgs['orderBy'] }
        : { orderBy?: generoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, generoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the genero model
   */
  readonly fields: generoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for genero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__generoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    canciones<T extends genero$cancionesArgs<ExtArgs> = {}>(args?: Subset<T, genero$cancionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cancionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the genero model
   */
  interface generoFieldRefs {
    readonly id: FieldRef<"genero", 'Int'>
    readonly nombre: FieldRef<"genero", 'String'>
  }
    

  // Custom InputTypes
  /**
   * genero findUnique
   */
  export type generoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * Filter, which genero to fetch.
     */
    where: generoWhereUniqueInput
  }

  /**
   * genero findUniqueOrThrow
   */
  export type generoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * Filter, which genero to fetch.
     */
    where: generoWhereUniqueInput
  }

  /**
   * genero findFirst
   */
  export type generoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * Filter, which genero to fetch.
     */
    where?: generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generos to fetch.
     */
    orderBy?: generoOrderByWithRelationInput | generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for generos.
     */
    cursor?: generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * genero findFirstOrThrow
   */
  export type generoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * Filter, which genero to fetch.
     */
    where?: generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generos to fetch.
     */
    orderBy?: generoOrderByWithRelationInput | generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for generos.
     */
    cursor?: generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * genero findMany
   */
  export type generoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * Filter, which generos to fetch.
     */
    where?: generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generos to fetch.
     */
    orderBy?: generoOrderByWithRelationInput | generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing generos.
     */
    cursor?: generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generos.
     */
    skip?: number
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * genero create
   */
  export type generoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * The data needed to create a genero.
     */
    data: XOR<generoCreateInput, generoUncheckedCreateInput>
  }

  /**
   * genero createMany
   */
  export type generoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many generos.
     */
    data: generoCreateManyInput | generoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * genero update
   */
  export type generoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * The data needed to update a genero.
     */
    data: XOR<generoUpdateInput, generoUncheckedUpdateInput>
    /**
     * Choose, which genero to update.
     */
    where: generoWhereUniqueInput
  }

  /**
   * genero updateMany
   */
  export type generoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update generos.
     */
    data: XOR<generoUpdateManyMutationInput, generoUncheckedUpdateManyInput>
    /**
     * Filter which generos to update
     */
    where?: generoWhereInput
    /**
     * Limit how many generos to update.
     */
    limit?: number
  }

  /**
   * genero upsert
   */
  export type generoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * The filter to search for the genero to update in case it exists.
     */
    where: generoWhereUniqueInput
    /**
     * In case the genero found by the `where` argument doesn't exist, create a new genero with this data.
     */
    create: XOR<generoCreateInput, generoUncheckedCreateInput>
    /**
     * In case the genero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<generoUpdateInput, generoUncheckedUpdateInput>
  }

  /**
   * genero delete
   */
  export type generoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * Filter which genero to delete.
     */
    where: generoWhereUniqueInput
  }

  /**
   * genero deleteMany
   */
  export type generoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which generos to delete
     */
    where?: generoWhereInput
    /**
     * Limit how many generos to delete.
     */
    limit?: number
  }

  /**
   * genero.canciones
   */
  export type genero$cancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cancion
     */
    omit?: cancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cancionInclude<ExtArgs> | null
    where?: cancionWhereInput
    orderBy?: cancionOrderByWithRelationInput | cancionOrderByWithRelationInput[]
    cursor?: cancionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CancionScalarFieldEnum | CancionScalarFieldEnum[]
  }

  /**
   * genero without action
   */
  export type generoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
  }


  /**
   * Model playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type PlaylistSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    usuarioId: number | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    usuarioId: number | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    nombre: number
    usuarioId: number
    _all: number
  }


  export type PlaylistAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type PlaylistSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type PlaylistMinAggregateInputType = {
    id?: true
    nombre?: true
    usuarioId?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    nombre?: true
    usuarioId?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    nombre?: true
    usuarioId?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playlist to aggregate.
     */
    where?: playlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistOrderByWithRelationInput | playlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: playlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type playlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playlistWhereInput
    orderBy?: playlistOrderByWithAggregationInput | playlistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: playlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _avg?: PlaylistAvgAggregateInputType
    _sum?: PlaylistSumAggregateInputType
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: number
    nombre: string
    usuarioId: number
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends playlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type playlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    usuarioId?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    canciones?: boolean | playlist$cancionesArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>



  export type playlistSelectScalar = {
    id?: boolean
    nombre?: boolean
    usuarioId?: boolean
  }

  export type playlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "usuarioId", ExtArgs["result"]["playlist"]>
  export type playlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    canciones?: boolean | playlist$cancionesArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $playlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "playlist"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
      canciones: Prisma.$cancionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      usuarioId: number
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }

  type playlistGetPayload<S extends boolean | null | undefined | playlistDefaultArgs> = $Result.GetResult<Prisma.$playlistPayload, S>

  type playlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<playlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface playlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['playlist'], meta: { name: 'playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {playlistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends playlistFindUniqueArgs>(args: SelectSubset<T, playlistFindUniqueArgs<ExtArgs>>): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {playlistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends playlistFindUniqueOrThrowArgs>(args: SelectSubset<T, playlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends playlistFindFirstArgs>(args?: SelectSubset<T, playlistFindFirstArgs<ExtArgs>>): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends playlistFindFirstOrThrowArgs>(args?: SelectSubset<T, playlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends playlistFindManyArgs>(args?: SelectSubset<T, playlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playlist.
     * @param {playlistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
     */
    create<T extends playlistCreateArgs>(args: SelectSubset<T, playlistCreateArgs<ExtArgs>>): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playlists.
     * @param {playlistCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends playlistCreateManyArgs>(args?: SelectSubset<T, playlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Playlist.
     * @param {playlistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
     */
    delete<T extends playlistDeleteArgs>(args: SelectSubset<T, playlistDeleteArgs<ExtArgs>>): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playlist.
     * @param {playlistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends playlistUpdateArgs>(args: SelectSubset<T, playlistUpdateArgs<ExtArgs>>): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playlists.
     * @param {playlistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends playlistDeleteManyArgs>(args?: SelectSubset<T, playlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends playlistUpdateManyArgs>(args: SelectSubset<T, playlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Playlist.
     * @param {playlistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
     */
    upsert<T extends playlistUpsertArgs>(args: SelectSubset<T, playlistUpsertArgs<ExtArgs>>): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends playlistCountArgs>(
      args?: Subset<T, playlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistGroupByArgs} args - Group by arguments.
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
      T extends playlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: playlistGroupByArgs['orderBy'] }
        : { orderBy?: playlistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, playlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the playlist model
   */
  readonly fields: playlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__playlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    canciones<T extends playlist$cancionesArgs<ExtArgs> = {}>(args?: Subset<T, playlist$cancionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cancionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the playlist model
   */
  interface playlistFieldRefs {
    readonly id: FieldRef<"playlist", 'Int'>
    readonly nombre: FieldRef<"playlist", 'String'>
    readonly usuarioId: FieldRef<"playlist", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * playlist findUnique
   */
  export type playlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * Filter, which playlist to fetch.
     */
    where: playlistWhereUniqueInput
  }

  /**
   * playlist findUniqueOrThrow
   */
  export type playlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * Filter, which playlist to fetch.
     */
    where: playlistWhereUniqueInput
  }

  /**
   * playlist findFirst
   */
  export type playlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * Filter, which playlist to fetch.
     */
    where?: playlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistOrderByWithRelationInput | playlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playlists.
     */
    cursor?: playlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * playlist findFirstOrThrow
   */
  export type playlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * Filter, which playlist to fetch.
     */
    where?: playlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistOrderByWithRelationInput | playlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playlists.
     */
    cursor?: playlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * playlist findMany
   */
  export type playlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * Filter, which playlists to fetch.
     */
    where?: playlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistOrderByWithRelationInput | playlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing playlists.
     */
    cursor?: playlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * playlist create
   */
  export type playlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * The data needed to create a playlist.
     */
    data: XOR<playlistCreateInput, playlistUncheckedCreateInput>
  }

  /**
   * playlist createMany
   */
  export type playlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many playlists.
     */
    data: playlistCreateManyInput | playlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * playlist update
   */
  export type playlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * The data needed to update a playlist.
     */
    data: XOR<playlistUpdateInput, playlistUncheckedUpdateInput>
    /**
     * Choose, which playlist to update.
     */
    where: playlistWhereUniqueInput
  }

  /**
   * playlist updateMany
   */
  export type playlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update playlists.
     */
    data: XOR<playlistUpdateManyMutationInput, playlistUncheckedUpdateManyInput>
    /**
     * Filter which playlists to update
     */
    where?: playlistWhereInput
    /**
     * Limit how many playlists to update.
     */
    limit?: number
  }

  /**
   * playlist upsert
   */
  export type playlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * The filter to search for the playlist to update in case it exists.
     */
    where: playlistWhereUniqueInput
    /**
     * In case the playlist found by the `where` argument doesn't exist, create a new playlist with this data.
     */
    create: XOR<playlistCreateInput, playlistUncheckedCreateInput>
    /**
     * In case the playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<playlistUpdateInput, playlistUncheckedUpdateInput>
  }

  /**
   * playlist delete
   */
  export type playlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * Filter which playlist to delete.
     */
    where: playlistWhereUniqueInput
  }

  /**
   * playlist deleteMany
   */
  export type playlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playlists to delete
     */
    where?: playlistWhereInput
    /**
     * Limit how many playlists to delete.
     */
    limit?: number
  }

  /**
   * playlist.canciones
   */
  export type playlist$cancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cancion
     */
    omit?: cancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cancionInclude<ExtArgs> | null
    where?: cancionWhereInput
    orderBy?: cancionOrderByWithRelationInput | cancionOrderByWithRelationInput[]
    cursor?: cancionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CancionScalarFieldEnum | CancionScalarFieldEnum[]
  }

  /**
   * playlist without action
   */
  export type playlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
  }


  /**
   * Model comentario
   */

  export type AggregateComentario = {
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  export type ComentarioAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    cancionId: number | null
  }

  export type ComentarioSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    cancionId: number | null
  }

  export type ComentarioMinAggregateOutputType = {
    id: number | null
    texto: string | null
    fecha: Date | null
    usuarioId: number | null
    cancionId: number | null
  }

  export type ComentarioMaxAggregateOutputType = {
    id: number | null
    texto: string | null
    fecha: Date | null
    usuarioId: number | null
    cancionId: number | null
  }

  export type ComentarioCountAggregateOutputType = {
    id: number
    texto: number
    fecha: number
    usuarioId: number
    cancionId: number
    _all: number
  }


  export type ComentarioAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    cancionId?: true
  }

  export type ComentarioSumAggregateInputType = {
    id?: true
    usuarioId?: true
    cancionId?: true
  }

  export type ComentarioMinAggregateInputType = {
    id?: true
    texto?: true
    fecha?: true
    usuarioId?: true
    cancionId?: true
  }

  export type ComentarioMaxAggregateInputType = {
    id?: true
    texto?: true
    fecha?: true
    usuarioId?: true
    cancionId?: true
  }

  export type ComentarioCountAggregateInputType = {
    id?: true
    texto?: true
    fecha?: true
    usuarioId?: true
    cancionId?: true
    _all?: true
  }

  export type ComentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comentario to aggregate.
     */
    where?: comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comentarios to fetch.
     */
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comentarios
    **/
    _count?: true | ComentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComentarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComentarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComentarioMaxAggregateInputType
  }

  export type GetComentarioAggregateType<T extends ComentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateComentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentario[P]>
      : GetScalarType<T[P], AggregateComentario[P]>
  }




  export type comentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comentarioWhereInput
    orderBy?: comentarioOrderByWithAggregationInput | comentarioOrderByWithAggregationInput[]
    by: ComentarioScalarFieldEnum[] | ComentarioScalarFieldEnum
    having?: comentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComentarioCountAggregateInputType | true
    _avg?: ComentarioAvgAggregateInputType
    _sum?: ComentarioSumAggregateInputType
    _min?: ComentarioMinAggregateInputType
    _max?: ComentarioMaxAggregateInputType
  }

  export type ComentarioGroupByOutputType = {
    id: number
    texto: string
    fecha: Date
    usuarioId: number
    cancionId: number
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  type GetComentarioGroupByPayload<T extends comentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
            : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
        }
      >
    >


  export type comentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    texto?: boolean
    fecha?: boolean
    usuarioId?: boolean
    cancionId?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    cancion?: boolean | cancionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>



  export type comentarioSelectScalar = {
    id?: boolean
    texto?: boolean
    fecha?: boolean
    usuarioId?: boolean
    cancionId?: boolean
  }

  export type comentarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "texto" | "fecha" | "usuarioId" | "cancionId", ExtArgs["result"]["comentario"]>
  export type comentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    cancion?: boolean | cancionDefaultArgs<ExtArgs>
  }

  export type $comentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comentario"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
      cancion: Prisma.$cancionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      texto: string
      fecha: Date
      usuarioId: number
      cancionId: number
    }, ExtArgs["result"]["comentario"]>
    composites: {}
  }

  type comentarioGetPayload<S extends boolean | null | undefined | comentarioDefaultArgs> = $Result.GetResult<Prisma.$comentarioPayload, S>

  type comentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<comentarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComentarioCountAggregateInputType | true
    }

  export interface comentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comentario'], meta: { name: 'comentario' } }
    /**
     * Find zero or one Comentario that matches the filter.
     * @param {comentarioFindUniqueArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends comentarioFindUniqueArgs>(args: SelectSubset<T, comentarioFindUniqueArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comentario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {comentarioFindUniqueOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends comentarioFindUniqueOrThrowArgs>(args: SelectSubset<T, comentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioFindFirstArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends comentarioFindFirstArgs>(args?: SelectSubset<T, comentarioFindFirstArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioFindFirstOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends comentarioFindFirstOrThrowArgs>(args?: SelectSubset<T, comentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comentarios
     * const comentarios = await prisma.comentario.findMany()
     * 
     * // Get first 10 Comentarios
     * const comentarios = await prisma.comentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comentarioWithIdOnly = await prisma.comentario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends comentarioFindManyArgs>(args?: SelectSubset<T, comentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comentario.
     * @param {comentarioCreateArgs} args - Arguments to create a Comentario.
     * @example
     * // Create one Comentario
     * const Comentario = await prisma.comentario.create({
     *   data: {
     *     // ... data to create a Comentario
     *   }
     * })
     * 
     */
    create<T extends comentarioCreateArgs>(args: SelectSubset<T, comentarioCreateArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comentarios.
     * @param {comentarioCreateManyArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends comentarioCreateManyArgs>(args?: SelectSubset<T, comentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comentario.
     * @param {comentarioDeleteArgs} args - Arguments to delete one Comentario.
     * @example
     * // Delete one Comentario
     * const Comentario = await prisma.comentario.delete({
     *   where: {
     *     // ... filter to delete one Comentario
     *   }
     * })
     * 
     */
    delete<T extends comentarioDeleteArgs>(args: SelectSubset<T, comentarioDeleteArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comentario.
     * @param {comentarioUpdateArgs} args - Arguments to update one Comentario.
     * @example
     * // Update one Comentario
     * const comentario = await prisma.comentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends comentarioUpdateArgs>(args: SelectSubset<T, comentarioUpdateArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comentarios.
     * @param {comentarioDeleteManyArgs} args - Arguments to filter Comentarios to delete.
     * @example
     * // Delete a few Comentarios
     * const { count } = await prisma.comentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends comentarioDeleteManyArgs>(args?: SelectSubset<T, comentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends comentarioUpdateManyArgs>(args: SelectSubset<T, comentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comentario.
     * @param {comentarioUpsertArgs} args - Arguments to update or create a Comentario.
     * @example
     * // Update or create a Comentario
     * const comentario = await prisma.comentario.upsert({
     *   create: {
     *     // ... data to create a Comentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comentario we want to update
     *   }
     * })
     */
    upsert<T extends comentarioUpsertArgs>(args: SelectSubset<T, comentarioUpsertArgs<ExtArgs>>): Prisma__comentarioClient<$Result.GetResult<Prisma.$comentarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioCountArgs} args - Arguments to filter Comentarios to count.
     * @example
     * // Count the number of Comentarios
     * const count = await prisma.comentario.count({
     *   where: {
     *     // ... the filter for the Comentarios we want to count
     *   }
     * })
    **/
    count<T extends comentarioCountArgs>(
      args?: Subset<T, comentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComentarioAggregateArgs>(args: Subset<T, ComentarioAggregateArgs>): Prisma.PrismaPromise<GetComentarioAggregateType<T>>

    /**
     * Group by Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comentarioGroupByArgs} args - Group by arguments.
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
      T extends comentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: comentarioGroupByArgs['orderBy'] }
        : { orderBy?: comentarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, comentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comentario model
   */
  readonly fields: comentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__comentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cancion<T extends cancionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cancionDefaultArgs<ExtArgs>>): Prisma__cancionClient<$Result.GetResult<Prisma.$cancionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the comentario model
   */
  interface comentarioFieldRefs {
    readonly id: FieldRef<"comentario", 'Int'>
    readonly texto: FieldRef<"comentario", 'String'>
    readonly fecha: FieldRef<"comentario", 'DateTime'>
    readonly usuarioId: FieldRef<"comentario", 'Int'>
    readonly cancionId: FieldRef<"comentario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * comentario findUnique
   */
  export type comentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * Filter, which comentario to fetch.
     */
    where: comentarioWhereUniqueInput
  }

  /**
   * comentario findUniqueOrThrow
   */
  export type comentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * Filter, which comentario to fetch.
     */
    where: comentarioWhereUniqueInput
  }

  /**
   * comentario findFirst
   */
  export type comentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * Filter, which comentario to fetch.
     */
    where?: comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comentarios to fetch.
     */
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comentarios.
     */
    cursor?: comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * comentario findFirstOrThrow
   */
  export type comentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * Filter, which comentario to fetch.
     */
    where?: comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comentarios to fetch.
     */
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comentarios.
     */
    cursor?: comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * comentario findMany
   */
  export type comentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * Filter, which comentarios to fetch.
     */
    where?: comentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comentarios to fetch.
     */
    orderBy?: comentarioOrderByWithRelationInput | comentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comentarios.
     */
    cursor?: comentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comentarios.
     */
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * comentario create
   */
  export type comentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * The data needed to create a comentario.
     */
    data: XOR<comentarioCreateInput, comentarioUncheckedCreateInput>
  }

  /**
   * comentario createMany
   */
  export type comentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comentarios.
     */
    data: comentarioCreateManyInput | comentarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comentario update
   */
  export type comentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * The data needed to update a comentario.
     */
    data: XOR<comentarioUpdateInput, comentarioUncheckedUpdateInput>
    /**
     * Choose, which comentario to update.
     */
    where: comentarioWhereUniqueInput
  }

  /**
   * comentario updateMany
   */
  export type comentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comentarios.
     */
    data: XOR<comentarioUpdateManyMutationInput, comentarioUncheckedUpdateManyInput>
    /**
     * Filter which comentarios to update
     */
    where?: comentarioWhereInput
    /**
     * Limit how many comentarios to update.
     */
    limit?: number
  }

  /**
   * comentario upsert
   */
  export type comentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * The filter to search for the comentario to update in case it exists.
     */
    where: comentarioWhereUniqueInput
    /**
     * In case the comentario found by the `where` argument doesn't exist, create a new comentario with this data.
     */
    create: XOR<comentarioCreateInput, comentarioUncheckedCreateInput>
    /**
     * In case the comentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<comentarioUpdateInput, comentarioUncheckedUpdateInput>
  }

  /**
   * comentario delete
   */
  export type comentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
    /**
     * Filter which comentario to delete.
     */
    where: comentarioWhereUniqueInput
  }

  /**
   * comentario deleteMany
   */
  export type comentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comentarios to delete
     */
    where?: comentarioWhereInput
    /**
     * Limit how many comentarios to delete.
     */
    limit?: number
  }

  /**
   * comentario without action
   */
  export type comentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comentario
     */
    select?: comentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comentario
     */
    omit?: comentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comentarioInclude<ExtArgs> | null
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


  export const CancionScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    fechaLanzamiento: 'fechaLanzamiento',
    generoId: 'generoId',
    restriccionEdad: 'restriccionEdad',
    portada: 'portada',
    anioLanzamiento: 'anioLanzamiento',
    albumId: 'albumId'
  };

  export type CancionScalarFieldEnum = (typeof CancionScalarFieldEnum)[keyof typeof CancionScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    nombre: 'nombre',
    direccion: 'direccion',
    estado: 'estado',
    fechaNacimiento: 'fechaNacimiento',
    nacionalidad: 'nacionalidad',
    sexo: 'sexo',
    apodo: 'apodo',
    foto: 'foto',
    rolId: 'rolId',
    anioInicioCarrera: 'anioInicioCarrera'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const UsuarioscancionesScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    cancionId: 'cancionId'
  };

  export type UsuarioscancionesScalarFieldEnum = (typeof UsuarioscancionesScalarFieldEnum)[keyof typeof UsuarioscancionesScalarFieldEnum]


  export const RolScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const AlbumScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    anio: 'anio',
    portada: 'portada'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const GeneroScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type GeneroScalarFieldEnum = (typeof GeneroScalarFieldEnum)[keyof typeof GeneroScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    usuarioId: 'usuarioId'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const ComentarioScalarFieldEnum: {
    id: 'id',
    texto: 'texto',
    fecha: 'fecha',
    usuarioId: 'usuarioId',
    cancionId: 'cancionId'
  };

  export type ComentarioScalarFieldEnum = (typeof ComentarioScalarFieldEnum)[keyof typeof ComentarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const cancionOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    portada: 'portada'
  };

  export type cancionOrderByRelevanceFieldEnum = (typeof cancionOrderByRelevanceFieldEnum)[keyof typeof cancionOrderByRelevanceFieldEnum]


  export const usuarioOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    nombre: 'nombre',
    direccion: 'direccion',
    estado: 'estado',
    nacionalidad: 'nacionalidad',
    sexo: 'sexo',
    apodo: 'apodo',
    foto: 'foto'
  };

  export type usuarioOrderByRelevanceFieldEnum = (typeof usuarioOrderByRelevanceFieldEnum)[keyof typeof usuarioOrderByRelevanceFieldEnum]


  export const rolOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type rolOrderByRelevanceFieldEnum = (typeof rolOrderByRelevanceFieldEnum)[keyof typeof rolOrderByRelevanceFieldEnum]


  export const albumOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    portada: 'portada'
  };

  export type albumOrderByRelevanceFieldEnum = (typeof albumOrderByRelevanceFieldEnum)[keyof typeof albumOrderByRelevanceFieldEnum]


  export const generoOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type generoOrderByRelevanceFieldEnum = (typeof generoOrderByRelevanceFieldEnum)[keyof typeof generoOrderByRelevanceFieldEnum]


  export const playlistOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type playlistOrderByRelevanceFieldEnum = (typeof playlistOrderByRelevanceFieldEnum)[keyof typeof playlistOrderByRelevanceFieldEnum]


  export const comentarioOrderByRelevanceFieldEnum: {
    texto: 'texto'
  };

  export type comentarioOrderByRelevanceFieldEnum = (typeof comentarioOrderByRelevanceFieldEnum)[keyof typeof comentarioOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type cancionWhereInput = {
    AND?: cancionWhereInput | cancionWhereInput[]
    OR?: cancionWhereInput[]
    NOT?: cancionWhereInput | cancionWhereInput[]
    id?: IntFilter<"cancion"> | number
    titulo?: StringFilter<"cancion"> | string
    fechaLanzamiento?: DateTimeNullableFilter<"cancion"> | Date | string | null
    generoId?: IntNullableFilter<"cancion"> | number | null
    restriccionEdad?: BoolFilter<"cancion"> | boolean
    portada?: StringNullableFilter<"cancion"> | string | null
    anioLanzamiento?: IntNullableFilter<"cancion"> | number | null
    albumId?: IntNullableFilter<"cancion"> | number | null
    album?: XOR<AlbumNullableScalarRelationFilter, albumWhereInput> | null
    genero?: XOR<GeneroNullableScalarRelationFilter, generoWhereInput> | null
    usuarioscanciones?: UsuarioscancionesListRelationFilter
    playlists?: PlaylistListRelationFilter
    comentarios?: ComentarioListRelationFilter
  }

  export type cancionOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    fechaLanzamiento?: SortOrderInput | SortOrder
    generoId?: SortOrderInput | SortOrder
    restriccionEdad?: SortOrder
    portada?: SortOrderInput | SortOrder
    anioLanzamiento?: SortOrderInput | SortOrder
    albumId?: SortOrderInput | SortOrder
    album?: albumOrderByWithRelationInput
    genero?: generoOrderByWithRelationInput
    usuarioscanciones?: usuarioscancionesOrderByRelationAggregateInput
    playlists?: playlistOrderByRelationAggregateInput
    comentarios?: comentarioOrderByRelationAggregateInput
    _relevance?: cancionOrderByRelevanceInput
  }

  export type cancionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cancionWhereInput | cancionWhereInput[]
    OR?: cancionWhereInput[]
    NOT?: cancionWhereInput | cancionWhereInput[]
    titulo?: StringFilter<"cancion"> | string
    fechaLanzamiento?: DateTimeNullableFilter<"cancion"> | Date | string | null
    generoId?: IntNullableFilter<"cancion"> | number | null
    restriccionEdad?: BoolFilter<"cancion"> | boolean
    portada?: StringNullableFilter<"cancion"> | string | null
    anioLanzamiento?: IntNullableFilter<"cancion"> | number | null
    albumId?: IntNullableFilter<"cancion"> | number | null
    album?: XOR<AlbumNullableScalarRelationFilter, albumWhereInput> | null
    genero?: XOR<GeneroNullableScalarRelationFilter, generoWhereInput> | null
    usuarioscanciones?: UsuarioscancionesListRelationFilter
    playlists?: PlaylistListRelationFilter
    comentarios?: ComentarioListRelationFilter
  }, "id">

  export type cancionOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    fechaLanzamiento?: SortOrderInput | SortOrder
    generoId?: SortOrderInput | SortOrder
    restriccionEdad?: SortOrder
    portada?: SortOrderInput | SortOrder
    anioLanzamiento?: SortOrderInput | SortOrder
    albumId?: SortOrderInput | SortOrder
    _count?: cancionCountOrderByAggregateInput
    _avg?: cancionAvgOrderByAggregateInput
    _max?: cancionMaxOrderByAggregateInput
    _min?: cancionMinOrderByAggregateInput
    _sum?: cancionSumOrderByAggregateInput
  }

  export type cancionScalarWhereWithAggregatesInput = {
    AND?: cancionScalarWhereWithAggregatesInput | cancionScalarWhereWithAggregatesInput[]
    OR?: cancionScalarWhereWithAggregatesInput[]
    NOT?: cancionScalarWhereWithAggregatesInput | cancionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cancion"> | number
    titulo?: StringWithAggregatesFilter<"cancion"> | string
    fechaLanzamiento?: DateTimeNullableWithAggregatesFilter<"cancion"> | Date | string | null
    generoId?: IntNullableWithAggregatesFilter<"cancion"> | number | null
    restriccionEdad?: BoolWithAggregatesFilter<"cancion"> | boolean
    portada?: StringNullableWithAggregatesFilter<"cancion"> | string | null
    anioLanzamiento?: IntNullableWithAggregatesFilter<"cancion"> | number | null
    albumId?: IntNullableWithAggregatesFilter<"cancion"> | number | null
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id?: IntFilter<"usuario"> | number
    email?: StringFilter<"usuario"> | string
    password?: StringFilter<"usuario"> | string
    nombre?: StringFilter<"usuario"> | string
    direccion?: StringNullableFilter<"usuario"> | string | null
    estado?: StringNullableFilter<"usuario"> | string | null
    fechaNacimiento?: DateTimeNullableFilter<"usuario"> | Date | string | null
    nacionalidad?: StringNullableFilter<"usuario"> | string | null
    sexo?: StringNullableFilter<"usuario"> | string | null
    apodo?: StringNullableFilter<"usuario"> | string | null
    foto?: StringNullableFilter<"usuario"> | string | null
    rolId?: IntFilter<"usuario"> | number
    anioInicioCarrera?: IntNullableFilter<"usuario"> | number | null
    rol?: XOR<RolScalarRelationFilter, rolWhereInput>
    usuarioscanciones?: UsuarioscancionesListRelationFilter
    playlists?: PlaylistListRelationFilter
    comentarios?: ComentarioListRelationFilter
  }

  export type usuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    fechaNacimiento?: SortOrderInput | SortOrder
    nacionalidad?: SortOrderInput | SortOrder
    sexo?: SortOrderInput | SortOrder
    apodo?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    rolId?: SortOrder
    anioInicioCarrera?: SortOrderInput | SortOrder
    rol?: rolOrderByWithRelationInput
    usuarioscanciones?: usuarioscancionesOrderByRelationAggregateInput
    playlists?: playlistOrderByRelationAggregateInput
    comentarios?: comentarioOrderByRelationAggregateInput
    _relevance?: usuarioOrderByRelevanceInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    password?: StringFilter<"usuario"> | string
    nombre?: StringFilter<"usuario"> | string
    direccion?: StringNullableFilter<"usuario"> | string | null
    estado?: StringNullableFilter<"usuario"> | string | null
    fechaNacimiento?: DateTimeNullableFilter<"usuario"> | Date | string | null
    nacionalidad?: StringNullableFilter<"usuario"> | string | null
    sexo?: StringNullableFilter<"usuario"> | string | null
    apodo?: StringNullableFilter<"usuario"> | string | null
    foto?: StringNullableFilter<"usuario"> | string | null
    rolId?: IntFilter<"usuario"> | number
    anioInicioCarrera?: IntNullableFilter<"usuario"> | number | null
    rol?: XOR<RolScalarRelationFilter, rolWhereInput>
    usuarioscanciones?: UsuarioscancionesListRelationFilter
    playlists?: PlaylistListRelationFilter
    comentarios?: ComentarioListRelationFilter
  }, "id" | "email">

  export type usuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    fechaNacimiento?: SortOrderInput | SortOrder
    nacionalidad?: SortOrderInput | SortOrder
    sexo?: SortOrderInput | SortOrder
    apodo?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    rolId?: SortOrder
    anioInicioCarrera?: SortOrderInput | SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuario"> | number
    email?: StringWithAggregatesFilter<"usuario"> | string
    password?: StringWithAggregatesFilter<"usuario"> | string
    nombre?: StringWithAggregatesFilter<"usuario"> | string
    direccion?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    estado?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    fechaNacimiento?: DateTimeNullableWithAggregatesFilter<"usuario"> | Date | string | null
    nacionalidad?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    sexo?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    apodo?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    foto?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    rolId?: IntWithAggregatesFilter<"usuario"> | number
    anioInicioCarrera?: IntNullableWithAggregatesFilter<"usuario"> | number | null
  }

  export type usuarioscancionesWhereInput = {
    AND?: usuarioscancionesWhereInput | usuarioscancionesWhereInput[]
    OR?: usuarioscancionesWhereInput[]
    NOT?: usuarioscancionesWhereInput | usuarioscancionesWhereInput[]
    id?: IntFilter<"usuarioscanciones"> | number
    usuarioId?: IntFilter<"usuarioscanciones"> | number
    cancionId?: IntFilter<"usuarioscanciones"> | number
    cancion?: XOR<CancionScalarRelationFilter, cancionWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }

  export type usuarioscancionesOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
    cancion?: cancionOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
  }

  export type usuarioscancionesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usuarioscancionesWhereInput | usuarioscancionesWhereInput[]
    OR?: usuarioscancionesWhereInput[]
    NOT?: usuarioscancionesWhereInput | usuarioscancionesWhereInput[]
    usuarioId?: IntFilter<"usuarioscanciones"> | number
    cancionId?: IntFilter<"usuarioscanciones"> | number
    cancion?: XOR<CancionScalarRelationFilter, cancionWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }, "id">

  export type usuarioscancionesOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
    _count?: usuarioscancionesCountOrderByAggregateInput
    _avg?: usuarioscancionesAvgOrderByAggregateInput
    _max?: usuarioscancionesMaxOrderByAggregateInput
    _min?: usuarioscancionesMinOrderByAggregateInput
    _sum?: usuarioscancionesSumOrderByAggregateInput
  }

  export type usuarioscancionesScalarWhereWithAggregatesInput = {
    AND?: usuarioscancionesScalarWhereWithAggregatesInput | usuarioscancionesScalarWhereWithAggregatesInput[]
    OR?: usuarioscancionesScalarWhereWithAggregatesInput[]
    NOT?: usuarioscancionesScalarWhereWithAggregatesInput | usuarioscancionesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuarioscanciones"> | number
    usuarioId?: IntWithAggregatesFilter<"usuarioscanciones"> | number
    cancionId?: IntWithAggregatesFilter<"usuarioscanciones"> | number
  }

  export type rolWhereInput = {
    AND?: rolWhereInput | rolWhereInput[]
    OR?: rolWhereInput[]
    NOT?: rolWhereInput | rolWhereInput[]
    id?: IntFilter<"rol"> | number
    nombre?: StringFilter<"rol"> | string
    descripcion?: StringNullableFilter<"rol"> | string | null
    usuarios?: UsuarioListRelationFilter
  }

  export type rolOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    usuarios?: usuarioOrderByRelationAggregateInput
    _relevance?: rolOrderByRelevanceInput
  }

  export type rolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: rolWhereInput | rolWhereInput[]
    OR?: rolWhereInput[]
    NOT?: rolWhereInput | rolWhereInput[]
    nombre?: StringFilter<"rol"> | string
    descripcion?: StringNullableFilter<"rol"> | string | null
    usuarios?: UsuarioListRelationFilter
  }, "id">

  export type rolOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: rolCountOrderByAggregateInput
    _avg?: rolAvgOrderByAggregateInput
    _max?: rolMaxOrderByAggregateInput
    _min?: rolMinOrderByAggregateInput
    _sum?: rolSumOrderByAggregateInput
  }

  export type rolScalarWhereWithAggregatesInput = {
    AND?: rolScalarWhereWithAggregatesInput | rolScalarWhereWithAggregatesInput[]
    OR?: rolScalarWhereWithAggregatesInput[]
    NOT?: rolScalarWhereWithAggregatesInput | rolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rol"> | number
    nombre?: StringWithAggregatesFilter<"rol"> | string
    descripcion?: StringNullableWithAggregatesFilter<"rol"> | string | null
  }

  export type albumWhereInput = {
    AND?: albumWhereInput | albumWhereInput[]
    OR?: albumWhereInput[]
    NOT?: albumWhereInput | albumWhereInput[]
    id?: IntFilter<"album"> | number
    nombre?: StringFilter<"album"> | string
    anio?: IntFilter<"album"> | number
    portada?: StringNullableFilter<"album"> | string | null
    canciones?: CancionListRelationFilter
  }

  export type albumOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    anio?: SortOrder
    portada?: SortOrderInput | SortOrder
    canciones?: cancionOrderByRelationAggregateInput
    _relevance?: albumOrderByRelevanceInput
  }

  export type albumWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: albumWhereInput | albumWhereInput[]
    OR?: albumWhereInput[]
    NOT?: albumWhereInput | albumWhereInput[]
    nombre?: StringFilter<"album"> | string
    anio?: IntFilter<"album"> | number
    portada?: StringNullableFilter<"album"> | string | null
    canciones?: CancionListRelationFilter
  }, "id">

  export type albumOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    anio?: SortOrder
    portada?: SortOrderInput | SortOrder
    _count?: albumCountOrderByAggregateInput
    _avg?: albumAvgOrderByAggregateInput
    _max?: albumMaxOrderByAggregateInput
    _min?: albumMinOrderByAggregateInput
    _sum?: albumSumOrderByAggregateInput
  }

  export type albumScalarWhereWithAggregatesInput = {
    AND?: albumScalarWhereWithAggregatesInput | albumScalarWhereWithAggregatesInput[]
    OR?: albumScalarWhereWithAggregatesInput[]
    NOT?: albumScalarWhereWithAggregatesInput | albumScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"album"> | number
    nombre?: StringWithAggregatesFilter<"album"> | string
    anio?: IntWithAggregatesFilter<"album"> | number
    portada?: StringNullableWithAggregatesFilter<"album"> | string | null
  }

  export type generoWhereInput = {
    AND?: generoWhereInput | generoWhereInput[]
    OR?: generoWhereInput[]
    NOT?: generoWhereInput | generoWhereInput[]
    id?: IntFilter<"genero"> | number
    nombre?: StringFilter<"genero"> | string
    canciones?: CancionListRelationFilter
  }

  export type generoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    canciones?: cancionOrderByRelationAggregateInput
    _relevance?: generoOrderByRelevanceInput
  }

  export type generoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: generoWhereInput | generoWhereInput[]
    OR?: generoWhereInput[]
    NOT?: generoWhereInput | generoWhereInput[]
    nombre?: StringFilter<"genero"> | string
    canciones?: CancionListRelationFilter
  }, "id">

  export type generoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: generoCountOrderByAggregateInput
    _avg?: generoAvgOrderByAggregateInput
    _max?: generoMaxOrderByAggregateInput
    _min?: generoMinOrderByAggregateInput
    _sum?: generoSumOrderByAggregateInput
  }

  export type generoScalarWhereWithAggregatesInput = {
    AND?: generoScalarWhereWithAggregatesInput | generoScalarWhereWithAggregatesInput[]
    OR?: generoScalarWhereWithAggregatesInput[]
    NOT?: generoScalarWhereWithAggregatesInput | generoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"genero"> | number
    nombre?: StringWithAggregatesFilter<"genero"> | string
  }

  export type playlistWhereInput = {
    AND?: playlistWhereInput | playlistWhereInput[]
    OR?: playlistWhereInput[]
    NOT?: playlistWhereInput | playlistWhereInput[]
    id?: IntFilter<"playlist"> | number
    nombre?: StringFilter<"playlist"> | string
    usuarioId?: IntFilter<"playlist"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    canciones?: CancionListRelationFilter
  }

  export type playlistOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuarioId?: SortOrder
    usuario?: usuarioOrderByWithRelationInput
    canciones?: cancionOrderByRelationAggregateInput
    _relevance?: playlistOrderByRelevanceInput
  }

  export type playlistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: playlistWhereInput | playlistWhereInput[]
    OR?: playlistWhereInput[]
    NOT?: playlistWhereInput | playlistWhereInput[]
    nombre?: StringFilter<"playlist"> | string
    usuarioId?: IntFilter<"playlist"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    canciones?: CancionListRelationFilter
  }, "id">

  export type playlistOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuarioId?: SortOrder
    _count?: playlistCountOrderByAggregateInput
    _avg?: playlistAvgOrderByAggregateInput
    _max?: playlistMaxOrderByAggregateInput
    _min?: playlistMinOrderByAggregateInput
    _sum?: playlistSumOrderByAggregateInput
  }

  export type playlistScalarWhereWithAggregatesInput = {
    AND?: playlistScalarWhereWithAggregatesInput | playlistScalarWhereWithAggregatesInput[]
    OR?: playlistScalarWhereWithAggregatesInput[]
    NOT?: playlistScalarWhereWithAggregatesInput | playlistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"playlist"> | number
    nombre?: StringWithAggregatesFilter<"playlist"> | string
    usuarioId?: IntWithAggregatesFilter<"playlist"> | number
  }

  export type comentarioWhereInput = {
    AND?: comentarioWhereInput | comentarioWhereInput[]
    OR?: comentarioWhereInput[]
    NOT?: comentarioWhereInput | comentarioWhereInput[]
    id?: IntFilter<"comentario"> | number
    texto?: StringFilter<"comentario"> | string
    fecha?: DateTimeFilter<"comentario"> | Date | string
    usuarioId?: IntFilter<"comentario"> | number
    cancionId?: IntFilter<"comentario"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    cancion?: XOR<CancionScalarRelationFilter, cancionWhereInput>
  }

  export type comentarioOrderByWithRelationInput = {
    id?: SortOrder
    texto?: SortOrder
    fecha?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
    usuario?: usuarioOrderByWithRelationInput
    cancion?: cancionOrderByWithRelationInput
    _relevance?: comentarioOrderByRelevanceInput
  }

  export type comentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: comentarioWhereInput | comentarioWhereInput[]
    OR?: comentarioWhereInput[]
    NOT?: comentarioWhereInput | comentarioWhereInput[]
    texto?: StringFilter<"comentario"> | string
    fecha?: DateTimeFilter<"comentario"> | Date | string
    usuarioId?: IntFilter<"comentario"> | number
    cancionId?: IntFilter<"comentario"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    cancion?: XOR<CancionScalarRelationFilter, cancionWhereInput>
  }, "id">

  export type comentarioOrderByWithAggregationInput = {
    id?: SortOrder
    texto?: SortOrder
    fecha?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
    _count?: comentarioCountOrderByAggregateInput
    _avg?: comentarioAvgOrderByAggregateInput
    _max?: comentarioMaxOrderByAggregateInput
    _min?: comentarioMinOrderByAggregateInput
    _sum?: comentarioSumOrderByAggregateInput
  }

  export type comentarioScalarWhereWithAggregatesInput = {
    AND?: comentarioScalarWhereWithAggregatesInput | comentarioScalarWhereWithAggregatesInput[]
    OR?: comentarioScalarWhereWithAggregatesInput[]
    NOT?: comentarioScalarWhereWithAggregatesInput | comentarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comentario"> | number
    texto?: StringWithAggregatesFilter<"comentario"> | string
    fecha?: DateTimeWithAggregatesFilter<"comentario"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"comentario"> | number
    cancionId?: IntWithAggregatesFilter<"comentario"> | number
  }

  export type cancionCreateInput = {
    titulo: string
    fechaLanzamiento?: Date | string | null
    restriccionEdad?: boolean
    portada?: string | null
    anioLanzamiento?: number | null
    album?: albumCreateNestedOneWithoutCancionesInput
    genero?: generoCreateNestedOneWithoutCancionesInput
    usuarioscanciones?: usuarioscancionesCreateNestedManyWithoutCancionInput
    playlists?: playlistCreateNestedManyWithoutCancionesInput
    comentarios?: comentarioCreateNestedManyWithoutCancionInput
  }

  export type cancionUncheckedCreateInput = {
    id?: number
    titulo: string
    fechaLanzamiento?: Date | string | null
    generoId?: number | null
    restriccionEdad?: boolean
    portada?: string | null
    anioLanzamiento?: number | null
    albumId?: number | null
    usuarioscanciones?: usuarioscancionesUncheckedCreateNestedManyWithoutCancionInput
    playlists?: playlistUncheckedCreateNestedManyWithoutCancionesInput
    comentarios?: comentarioUncheckedCreateNestedManyWithoutCancionInput
  }

  export type cancionUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    restriccionEdad?: BoolFieldUpdateOperationsInput | boolean
    portada?: NullableStringFieldUpdateOperationsInput | string | null
    anioLanzamiento?: NullableIntFieldUpdateOperationsInput | number | null
    album?: albumUpdateOneWithoutCancionesNestedInput
    genero?: generoUpdateOneWithoutCancionesNestedInput
    usuarioscanciones?: usuarioscancionesUpdateManyWithoutCancionNestedInput
    playlists?: playlistUpdateManyWithoutCancionesNestedInput
    comentarios?: comentarioUpdateManyWithoutCancionNestedInput
  }

  export type cancionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generoId?: NullableIntFieldUpdateOperationsInput | number | null
    restriccionEdad?: BoolFieldUpdateOperationsInput | boolean
    portada?: NullableStringFieldUpdateOperationsInput | string | null
    anioLanzamiento?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    usuarioscanciones?: usuarioscancionesUncheckedUpdateManyWithoutCancionNestedInput
    playlists?: playlistUncheckedUpdateManyWithoutCancionesNestedInput
    comentarios?: comentarioUncheckedUpdateManyWithoutCancionNestedInput
  }

  export type cancionCreateManyInput = {
    id?: number
    titulo: string
    fechaLanzamiento?: Date | string | null
    generoId?: number | null
    restriccionEdad?: boolean
    portada?: string | null
    anioLanzamiento?: number | null
    albumId?: number | null
  }

  export type cancionUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    restriccionEdad?: BoolFieldUpdateOperationsInput | boolean
    portada?: NullableStringFieldUpdateOperationsInput | string | null
    anioLanzamiento?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cancionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generoId?: NullableIntFieldUpdateOperationsInput | number | null
    restriccionEdad?: BoolFieldUpdateOperationsInput | boolean
    portada?: NullableStringFieldUpdateOperationsInput | string | null
    anioLanzamiento?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usuarioCreateInput = {
    email: string
    password: string
    nombre: string
    direccion?: string | null
    estado?: string | null
    fechaNacimiento?: Date | string | null
    nacionalidad?: string | null
    sexo?: string | null
    apodo?: string | null
    foto?: string | null
    anioInicioCarrera?: number | null
    rol?: rolCreateNestedOneWithoutUsuariosInput
    usuarioscanciones?: usuarioscancionesCreateNestedManyWithoutUsuarioInput
    playlists?: playlistCreateNestedManyWithoutUsuarioInput
    comentarios?: comentarioCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    nombre: string
    direccion?: string | null
    estado?: string | null
    fechaNacimiento?: Date | string | null
    nacionalidad?: string | null
    sexo?: string | null
    apodo?: string | null
    foto?: string | null
    rolId?: number
    anioInicioCarrera?: number | null
    usuarioscanciones?: usuarioscancionesUncheckedCreateNestedManyWithoutUsuarioInput
    playlists?: playlistUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: comentarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nacionalidad?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    apodo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    anioInicioCarrera?: NullableIntFieldUpdateOperationsInput | number | null
    rol?: rolUpdateOneRequiredWithoutUsuariosNestedInput
    usuarioscanciones?: usuarioscancionesUpdateManyWithoutUsuarioNestedInput
    playlists?: playlistUpdateManyWithoutUsuarioNestedInput
    comentarios?: comentarioUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nacionalidad?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    apodo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    rolId?: IntFieldUpdateOperationsInput | number
    anioInicioCarrera?: NullableIntFieldUpdateOperationsInput | number | null
    usuarioscanciones?: usuarioscancionesUncheckedUpdateManyWithoutUsuarioNestedInput
    playlists?: playlistUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: comentarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id?: number
    email: string
    password: string
    nombre: string
    direccion?: string | null
    estado?: string | null
    fechaNacimiento?: Date | string | null
    nacionalidad?: string | null
    sexo?: string | null
    apodo?: string | null
    foto?: string | null
    rolId?: number
    anioInicioCarrera?: number | null
  }

  export type usuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nacionalidad?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    apodo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    anioInicioCarrera?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nacionalidad?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    apodo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    rolId?: IntFieldUpdateOperationsInput | number
    anioInicioCarrera?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usuarioscancionesCreateInput = {
    cancion: cancionCreateNestedOneWithoutUsuarioscancionesInput
    usuario: usuarioCreateNestedOneWithoutUsuarioscancionesInput
  }

  export type usuarioscancionesUncheckedCreateInput = {
    id?: number
    usuarioId: number
    cancionId: number
  }

  export type usuarioscancionesUpdateInput = {
    cancion?: cancionUpdateOneRequiredWithoutUsuarioscancionesNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutUsuarioscancionesNestedInput
  }

  export type usuarioscancionesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    cancionId?: IntFieldUpdateOperationsInput | number
  }

  export type usuarioscancionesCreateManyInput = {
    id?: number
    usuarioId: number
    cancionId: number
  }

  export type usuarioscancionesUpdateManyMutationInput = {

  }

  export type usuarioscancionesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    cancionId?: IntFieldUpdateOperationsInput | number
  }

  export type rolCreateInput = {
    nombre: string
    descripcion?: string | null
    usuarios?: usuarioCreateNestedManyWithoutRolInput
  }

  export type rolUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    usuarios?: usuarioUncheckedCreateNestedManyWithoutRolInput
  }

  export type rolUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: usuarioUpdateManyWithoutRolNestedInput
  }

  export type rolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: usuarioUncheckedUpdateManyWithoutRolNestedInput
  }

  export type rolCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
  }

  export type rolUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type albumCreateInput = {
    nombre: string
    anio: number
    portada?: string | null
    canciones?: cancionCreateNestedManyWithoutAlbumInput
  }

  export type albumUncheckedCreateInput = {
    id?: number
    nombre: string
    anio: number
    portada?: string | null
    canciones?: cancionUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type albumUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    portada?: NullableStringFieldUpdateOperationsInput | string | null
    canciones?: cancionUpdateManyWithoutAlbumNestedInput
  }

  export type albumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    portada?: NullableStringFieldUpdateOperationsInput | string | null
    canciones?: cancionUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type albumCreateManyInput = {
    id?: number
    nombre: string
    anio: number
    portada?: string | null
  }

  export type albumUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    portada?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type albumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    portada?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type generoCreateInput = {
    nombre: string
    canciones?: cancionCreateNestedManyWithoutGeneroInput
  }

  export type generoUncheckedCreateInput = {
    id?: number
    nombre: string
    canciones?: cancionUncheckedCreateNestedManyWithoutGeneroInput
  }

  export type generoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    canciones?: cancionUpdateManyWithoutGeneroNestedInput
  }

  export type generoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    canciones?: cancionUncheckedUpdateManyWithoutGeneroNestedInput
  }

  export type generoCreateManyInput = {
    id?: number
    nombre: string
  }

  export type generoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type generoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type playlistCreateInput = {
    nombre: string
    usuario: usuarioCreateNestedOneWithoutPlaylistsInput
    canciones?: cancionCreateNestedManyWithoutPlaylistsInput
  }

  export type playlistUncheckedCreateInput = {
    id?: number
    nombre: string
    usuarioId: number
    canciones?: cancionUncheckedCreateNestedManyWithoutPlaylistsInput
  }

  export type playlistUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: usuarioUpdateOneRequiredWithoutPlaylistsNestedInput
    canciones?: cancionUpdateManyWithoutPlaylistsNestedInput
  }

  export type playlistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    canciones?: cancionUncheckedUpdateManyWithoutPlaylistsNestedInput
  }

  export type playlistCreateManyInput = {
    id?: number
    nombre: string
    usuarioId: number
  }

  export type playlistUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type playlistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type comentarioCreateInput = {
    texto: string
    fecha?: Date | string
    usuario: usuarioCreateNestedOneWithoutComentariosInput
    cancion: cancionCreateNestedOneWithoutComentariosInput
  }

  export type comentarioUncheckedCreateInput = {
    id?: number
    texto: string
    fecha?: Date | string
    usuarioId: number
    cancionId: number
  }

  export type comentarioUpdateInput = {
    texto?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutComentariosNestedInput
    cancion?: cancionUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type comentarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    cancionId?: IntFieldUpdateOperationsInput | number
  }

  export type comentarioCreateManyInput = {
    id?: number
    texto: string
    fecha?: Date | string
    usuarioId: number
    cancionId: number
  }

  export type comentarioUpdateManyMutationInput = {
    texto?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type comentarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    cancionId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AlbumNullableScalarRelationFilter = {
    is?: albumWhereInput | null
    isNot?: albumWhereInput | null
  }

  export type GeneroNullableScalarRelationFilter = {
    is?: generoWhereInput | null
    isNot?: generoWhereInput | null
  }

  export type UsuarioscancionesListRelationFilter = {
    every?: usuarioscancionesWhereInput
    some?: usuarioscancionesWhereInput
    none?: usuarioscancionesWhereInput
  }

  export type PlaylistListRelationFilter = {
    every?: playlistWhereInput
    some?: playlistWhereInput
    none?: playlistWhereInput
  }

  export type ComentarioListRelationFilter = {
    every?: comentarioWhereInput
    some?: comentarioWhereInput
    none?: comentarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type usuarioscancionesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type playlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type comentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cancionOrderByRelevanceInput = {
    fields: cancionOrderByRelevanceFieldEnum | cancionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cancionCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    fechaLanzamiento?: SortOrder
    generoId?: SortOrder
    restriccionEdad?: SortOrder
    portada?: SortOrder
    anioLanzamiento?: SortOrder
    albumId?: SortOrder
  }

  export type cancionAvgOrderByAggregateInput = {
    id?: SortOrder
    generoId?: SortOrder
    anioLanzamiento?: SortOrder
    albumId?: SortOrder
  }

  export type cancionMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    fechaLanzamiento?: SortOrder
    generoId?: SortOrder
    restriccionEdad?: SortOrder
    portada?: SortOrder
    anioLanzamiento?: SortOrder
    albumId?: SortOrder
  }

  export type cancionMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    fechaLanzamiento?: SortOrder
    generoId?: SortOrder
    restriccionEdad?: SortOrder
    portada?: SortOrder
    anioLanzamiento?: SortOrder
    albumId?: SortOrder
  }

  export type cancionSumOrderByAggregateInput = {
    id?: SortOrder
    generoId?: SortOrder
    anioLanzamiento?: SortOrder
    albumId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RolScalarRelationFilter = {
    is?: rolWhereInput
    isNot?: rolWhereInput
  }

  export type usuarioOrderByRelevanceInput = {
    fields: usuarioOrderByRelevanceFieldEnum | usuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    estado?: SortOrder
    fechaNacimiento?: SortOrder
    nacionalidad?: SortOrder
    sexo?: SortOrder
    apodo?: SortOrder
    foto?: SortOrder
    rolId?: SortOrder
    anioInicioCarrera?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    anioInicioCarrera?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    estado?: SortOrder
    fechaNacimiento?: SortOrder
    nacionalidad?: SortOrder
    sexo?: SortOrder
    apodo?: SortOrder
    foto?: SortOrder
    rolId?: SortOrder
    anioInicioCarrera?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    estado?: SortOrder
    fechaNacimiento?: SortOrder
    nacionalidad?: SortOrder
    sexo?: SortOrder
    apodo?: SortOrder
    foto?: SortOrder
    rolId?: SortOrder
    anioInicioCarrera?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    anioInicioCarrera?: SortOrder
  }

  export type CancionScalarRelationFilter = {
    is?: cancionWhereInput
    isNot?: cancionWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: usuarioWhereInput
    isNot?: usuarioWhereInput
  }

  export type usuarioscancionesCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
  }

  export type usuarioscancionesAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
  }

  export type usuarioscancionesMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
  }

  export type usuarioscancionesMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
  }

  export type usuarioscancionesSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
  }

  export type UsuarioListRelationFilter = {
    every?: usuarioWhereInput
    some?: usuarioWhereInput
    none?: usuarioWhereInput
  }

  export type usuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolOrderByRelevanceInput = {
    fields: rolOrderByRelevanceFieldEnum | rolOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type rolCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type rolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rolMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type rolMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type rolSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CancionListRelationFilter = {
    every?: cancionWhereInput
    some?: cancionWhereInput
    none?: cancionWhereInput
  }

  export type cancionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type albumOrderByRelevanceInput = {
    fields: albumOrderByRelevanceFieldEnum | albumOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type albumCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    anio?: SortOrder
    portada?: SortOrder
  }

  export type albumAvgOrderByAggregateInput = {
    id?: SortOrder
    anio?: SortOrder
  }

  export type albumMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    anio?: SortOrder
    portada?: SortOrder
  }

  export type albumMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    anio?: SortOrder
    portada?: SortOrder
  }

  export type albumSumOrderByAggregateInput = {
    id?: SortOrder
    anio?: SortOrder
  }

  export type generoOrderByRelevanceInput = {
    fields: generoOrderByRelevanceFieldEnum | generoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type generoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type generoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type generoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type generoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type generoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type playlistOrderByRelevanceInput = {
    fields: playlistOrderByRelevanceFieldEnum | playlistOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type playlistCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuarioId?: SortOrder
  }

  export type playlistAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type playlistMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuarioId?: SortOrder
  }

  export type playlistMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuarioId?: SortOrder
  }

  export type playlistSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type comentarioOrderByRelevanceInput = {
    fields: comentarioOrderByRelevanceFieldEnum | comentarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type comentarioCountOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    fecha?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
  }

  export type comentarioAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
  }

  export type comentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    fecha?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
  }

  export type comentarioMinOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    fecha?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
  }

  export type comentarioSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type albumCreateNestedOneWithoutCancionesInput = {
    create?: XOR<albumCreateWithoutCancionesInput, albumUncheckedCreateWithoutCancionesInput>
    connectOrCreate?: albumCreateOrConnectWithoutCancionesInput
    connect?: albumWhereUniqueInput
  }

  export type generoCreateNestedOneWithoutCancionesInput = {
    create?: XOR<generoCreateWithoutCancionesInput, generoUncheckedCreateWithoutCancionesInput>
    connectOrCreate?: generoCreateOrConnectWithoutCancionesInput
    connect?: generoWhereUniqueInput
  }

  export type usuarioscancionesCreateNestedManyWithoutCancionInput = {
    create?: XOR<usuarioscancionesCreateWithoutCancionInput, usuarioscancionesUncheckedCreateWithoutCancionInput> | usuarioscancionesCreateWithoutCancionInput[] | usuarioscancionesUncheckedCreateWithoutCancionInput[]
    connectOrCreate?: usuarioscancionesCreateOrConnectWithoutCancionInput | usuarioscancionesCreateOrConnectWithoutCancionInput[]
    createMany?: usuarioscancionesCreateManyCancionInputEnvelope
    connect?: usuarioscancionesWhereUniqueInput | usuarioscancionesWhereUniqueInput[]
  }

  export type playlistCreateNestedManyWithoutCancionesInput = {
    create?: XOR<playlistCreateWithoutCancionesInput, playlistUncheckedCreateWithoutCancionesInput> | playlistCreateWithoutCancionesInput[] | playlistUncheckedCreateWithoutCancionesInput[]
    connectOrCreate?: playlistCreateOrConnectWithoutCancionesInput | playlistCreateOrConnectWithoutCancionesInput[]
    connect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
  }

  export type comentarioCreateNestedManyWithoutCancionInput = {
    create?: XOR<comentarioCreateWithoutCancionInput, comentarioUncheckedCreateWithoutCancionInput> | comentarioCreateWithoutCancionInput[] | comentarioUncheckedCreateWithoutCancionInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutCancionInput | comentarioCreateOrConnectWithoutCancionInput[]
    createMany?: comentarioCreateManyCancionInputEnvelope
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
  }

  export type usuarioscancionesUncheckedCreateNestedManyWithoutCancionInput = {
    create?: XOR<usuarioscancionesCreateWithoutCancionInput, usuarioscancionesUncheckedCreateWithoutCancionInput> | usuarioscancionesCreateWithoutCancionInput[] | usuarioscancionesUncheckedCreateWithoutCancionInput[]
    connectOrCreate?: usuarioscancionesCreateOrConnectWithoutCancionInput | usuarioscancionesCreateOrConnectWithoutCancionInput[]
    createMany?: usuarioscancionesCreateManyCancionInputEnvelope
    connect?: usuarioscancionesWhereUniqueInput | usuarioscancionesWhereUniqueInput[]
  }

  export type playlistUncheckedCreateNestedManyWithoutCancionesInput = {
    create?: XOR<playlistCreateWithoutCancionesInput, playlistUncheckedCreateWithoutCancionesInput> | playlistCreateWithoutCancionesInput[] | playlistUncheckedCreateWithoutCancionesInput[]
    connectOrCreate?: playlistCreateOrConnectWithoutCancionesInput | playlistCreateOrConnectWithoutCancionesInput[]
    connect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
  }

  export type comentarioUncheckedCreateNestedManyWithoutCancionInput = {
    create?: XOR<comentarioCreateWithoutCancionInput, comentarioUncheckedCreateWithoutCancionInput> | comentarioCreateWithoutCancionInput[] | comentarioUncheckedCreateWithoutCancionInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutCancionInput | comentarioCreateOrConnectWithoutCancionInput[]
    createMany?: comentarioCreateManyCancionInputEnvelope
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type albumUpdateOneWithoutCancionesNestedInput = {
    create?: XOR<albumCreateWithoutCancionesInput, albumUncheckedCreateWithoutCancionesInput>
    connectOrCreate?: albumCreateOrConnectWithoutCancionesInput
    upsert?: albumUpsertWithoutCancionesInput
    disconnect?: albumWhereInput | boolean
    delete?: albumWhereInput | boolean
    connect?: albumWhereUniqueInput
    update?: XOR<XOR<albumUpdateToOneWithWhereWithoutCancionesInput, albumUpdateWithoutCancionesInput>, albumUncheckedUpdateWithoutCancionesInput>
  }

  export type generoUpdateOneWithoutCancionesNestedInput = {
    create?: XOR<generoCreateWithoutCancionesInput, generoUncheckedCreateWithoutCancionesInput>
    connectOrCreate?: generoCreateOrConnectWithoutCancionesInput
    upsert?: generoUpsertWithoutCancionesInput
    disconnect?: generoWhereInput | boolean
    delete?: generoWhereInput | boolean
    connect?: generoWhereUniqueInput
    update?: XOR<XOR<generoUpdateToOneWithWhereWithoutCancionesInput, generoUpdateWithoutCancionesInput>, generoUncheckedUpdateWithoutCancionesInput>
  }

  export type usuarioscancionesUpdateManyWithoutCancionNestedInput = {
    create?: XOR<usuarioscancionesCreateWithoutCancionInput, usuarioscancionesUncheckedCreateWithoutCancionInput> | usuarioscancionesCreateWithoutCancionInput[] | usuarioscancionesUncheckedCreateWithoutCancionInput[]
    connectOrCreate?: usuarioscancionesCreateOrConnectWithoutCancionInput | usuarioscancionesCreateOrConnectWithoutCancionInput[]
    upsert?: usuarioscancionesUpsertWithWhereUniqueWithoutCancionInput | usuarioscancionesUpsertWithWhereUniqueWithoutCancionInput[]
    createMany?: usuarioscancionesCreateManyCancionInputEnvelope
    set?: usuarioscancionesWhereUniqueInput | usuarioscancionesWhereUniqueInput[]
    disconnect?: usuarioscancionesWhereUniqueInput | usuarioscancionesWhereUniqueInput[]
    delete?: usuarioscancionesWhereUniqueInput | usuarioscancionesWhereUniqueInput[]
    connect?: usuarioscancionesWhereUniqueInput | usuarioscancionesWhereUniqueInput[]
    update?: usuarioscancionesUpdateWithWhereUniqueWithoutCancionInput | usuarioscancionesUpdateWithWhereUniqueWithoutCancionInput[]
    updateMany?: usuarioscancionesUpdateManyWithWhereWithoutCancionInput | usuarioscancionesUpdateManyWithWhereWithoutCancionInput[]
    deleteMany?: usuarioscancionesScalarWhereInput | usuarioscancionesScalarWhereInput[]
  }

  export type playlistUpdateManyWithoutCancionesNestedInput = {
    create?: XOR<playlistCreateWithoutCancionesInput, playlistUncheckedCreateWithoutCancionesInput> | playlistCreateWithoutCancionesInput[] | playlistUncheckedCreateWithoutCancionesInput[]
    connectOrCreate?: playlistCreateOrConnectWithoutCancionesInput | playlistCreateOrConnectWithoutCancionesInput[]
    upsert?: playlistUpsertWithWhereUniqueWithoutCancionesInput | playlistUpsertWithWhereUniqueWithoutCancionesInput[]
    set?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    disconnect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    delete?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    connect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    update?: playlistUpdateWithWhereUniqueWithoutCancionesInput | playlistUpdateWithWhereUniqueWithoutCancionesInput[]
    updateMany?: playlistUpdateManyWithWhereWithoutCancionesInput | playlistUpdateManyWithWhereWithoutCancionesInput[]
    deleteMany?: playlistScalarWhereInput | playlistScalarWhereInput[]
  }

  export type comentarioUpdateManyWithoutCancionNestedInput = {
    create?: XOR<comentarioCreateWithoutCancionInput, comentarioUncheckedCreateWithoutCancionInput> | comentarioCreateWithoutCancionInput[] | comentarioUncheckedCreateWithoutCancionInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutCancionInput | comentarioCreateOrConnectWithoutCancionInput[]
    upsert?: comentarioUpsertWithWhereUniqueWithoutCancionInput | comentarioUpsertWithWhereUniqueWithoutCancionInput[]
    createMany?: comentarioCreateManyCancionInputEnvelope
    set?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    disconnect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    delete?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    update?: comentarioUpdateWithWhereUniqueWithoutCancionInput | comentarioUpdateWithWhereUniqueWithoutCancionInput[]
    updateMany?: comentarioUpdateManyWithWhereWithoutCancionInput | comentarioUpdateManyWithWhereWithoutCancionInput[]
    deleteMany?: comentarioScalarWhereInput | comentarioScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usuarioscancionesUncheckedUpdateManyWithoutCancionNestedInput = {
    create?: XOR<usuarioscancionesCreateWithoutCancionInput, usuarioscancionesUncheckedCreateWithoutCancionInput> | usuarioscancionesCreateWithoutCancionInput[] | usuarioscancionesUncheckedCreateWithoutCancionInput[]
    connectOrCreate?: usuarioscancionesCreateOrConnectWithoutCancionInput | usuarioscancionesCreateOrConnectWithoutCancionInput[]
    upsert?: usuarioscancionesUpsertWithWhereUniqueWithoutCancionInput | usuarioscancionesUpsertWithWhereUniqueWithoutCancionInput[]
    createMany?: usuarioscancionesCreateManyCancionInputEnvelope
    set?: usuarioscancionesWhereUniqueInput | usuarioscancionesWhereUniqueInput[]
    disconnect?: usuarioscancionesWhereUniqueInput | usuarioscancionesWhereUniqueInput[]
    delete?: usuarioscancionesWhereUniqueInput | usuarioscancionesWhereUniqueInput[]
    connect?: usuarioscancionesWhereUniqueInput | usuarioscancionesWhereUniqueInput[]
    update?: usuarioscancionesUpdateWithWhereUniqueWithoutCancionInput | usuarioscancionesUpdateWithWhereUniqueWithoutCancionInput[]
    updateMany?: usuarioscancionesUpdateManyWithWhereWithoutCancionInput | usuarioscancionesUpdateManyWithWhereWithoutCancionInput[]
    deleteMany?: usuarioscancionesScalarWhereInput | usuarioscancionesScalarWhereInput[]
  }

  export type playlistUncheckedUpdateManyWithoutCancionesNestedInput = {
    create?: XOR<playlistCreateWithoutCancionesInput, playlistUncheckedCreateWithoutCancionesInput> | playlistCreateWithoutCancionesInput[] | playlistUncheckedCreateWithoutCancionesInput[]
    connectOrCreate?: playlistCreateOrConnectWithoutCancionesInput | playlistCreateOrConnectWithoutCancionesInput[]
    upsert?: playlistUpsertWithWhereUniqueWithoutCancionesInput | playlistUpsertWithWhereUniqueWithoutCancionesInput[]
    set?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    disconnect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    delete?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    connect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    update?: playlistUpdateWithWhereUniqueWithoutCancionesInput | playlistUpdateWithWhereUniqueWithoutCancionesInput[]
    updateMany?: playlistUpdateManyWithWhereWithoutCancionesInput | playlistUpdateManyWithWhereWithoutCancionesInput[]
    deleteMany?: playlistScalarWhereInput | playlistScalarWhereInput[]
  }

  export type comentarioUncheckedUpdateManyWithoutCancionNestedInput = {
    create?: XOR<comentarioCreateWithoutCancionInput, comentarioUncheckedCreateWithoutCancionInput> | comentarioCreateWithoutCancionInput[] | comentarioUncheckedCreateWithoutCancionInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutCancionInput | comentarioCreateOrConnectWithoutCancionInput[]
    upsert?: comentarioUpsertWithWhereUniqueWithoutCancionInput | comentarioUpsertWithWhereUniqueWithoutCancionInput[]
    createMany?: comentarioCreateManyCancionInputEnvelope
    set?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    disconnect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    delete?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    update?: comentarioUpdateWithWhereUniqueWithoutCancionInput | comentarioUpdateWithWhereUniqueWithoutCancionInput[]
    updateMany?: comentarioUpdateManyWithWhereWithoutCancionInput | comentarioUpdateManyWithWhereWithoutCancionInput[]
    deleteMany?: comentarioScalarWhereInput | comentarioScalarWhereInput[]
  }

  export type rolCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<rolCreateWithoutUsuariosInput, rolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: rolCreateOrConnectWithoutUsuariosInput
    connect?: rolWhereUniqueInput
  }

  export type usuarioscancionesCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<usuarioscancionesCreateWithoutUsuarioInput, usuarioscancionesUncheckedCreateWithoutUsuarioInput> | usuarioscancionesCreateWithoutUsuarioInput[] | usuarioscancionesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuarioscancionesCreateOrConnectWithoutUsuarioInput | usuarioscancionesCreateOrConnectWithoutUsuarioInput[]
    createMany?: usuarioscancionesCreateManyUsuarioInputEnvelope
    connect?: usuarioscancionesWhereUniqueInput | usuarioscancionesWhereUniqueInput[]
  }

  export type playlistCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<playlistCreateWithoutUsuarioInput, playlistUncheckedCreateWithoutUsuarioInput> | playlistCreateWithoutUsuarioInput[] | playlistUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: playlistCreateOrConnectWithoutUsuarioInput | playlistCreateOrConnectWithoutUsuarioInput[]
    createMany?: playlistCreateManyUsuarioInputEnvelope
    connect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
  }

  export type comentarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<comentarioCreateWithoutUsuarioInput, comentarioUncheckedCreateWithoutUsuarioInput> | comentarioCreateWithoutUsuarioInput[] | comentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutUsuarioInput | comentarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: comentarioCreateManyUsuarioInputEnvelope
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
  }

  export type usuarioscancionesUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<usuarioscancionesCreateWithoutUsuarioInput, usuarioscancionesUncheckedCreateWithoutUsuarioInput> | usuarioscancionesCreateWithoutUsuarioInput[] | usuarioscancionesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuarioscancionesCreateOrConnectWithoutUsuarioInput | usuarioscancionesCreateOrConnectWithoutUsuarioInput[]
    createMany?: usuarioscancionesCreateManyUsuarioInputEnvelope
    connect?: usuarioscancionesWhereUniqueInput | usuarioscancionesWhereUniqueInput[]
  }

  export type playlistUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<playlistCreateWithoutUsuarioInput, playlistUncheckedCreateWithoutUsuarioInput> | playlistCreateWithoutUsuarioInput[] | playlistUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: playlistCreateOrConnectWithoutUsuarioInput | playlistCreateOrConnectWithoutUsuarioInput[]
    createMany?: playlistCreateManyUsuarioInputEnvelope
    connect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
  }

  export type comentarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<comentarioCreateWithoutUsuarioInput, comentarioUncheckedCreateWithoutUsuarioInput> | comentarioCreateWithoutUsuarioInput[] | comentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutUsuarioInput | comentarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: comentarioCreateManyUsuarioInputEnvelope
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
  }

  export type rolUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<rolCreateWithoutUsuariosInput, rolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: rolCreateOrConnectWithoutUsuariosInput
    upsert?: rolUpsertWithoutUsuariosInput
    connect?: rolWhereUniqueInput
    update?: XOR<XOR<rolUpdateToOneWithWhereWithoutUsuariosInput, rolUpdateWithoutUsuariosInput>, rolUncheckedUpdateWithoutUsuariosInput>
  }

  export type usuarioscancionesUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<usuarioscancionesCreateWithoutUsuarioInput, usuarioscancionesUncheckedCreateWithoutUsuarioInput> | usuarioscancionesCreateWithoutUsuarioInput[] | usuarioscancionesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuarioscancionesCreateOrConnectWithoutUsuarioInput | usuarioscancionesCreateOrConnectWithoutUsuarioInput[]
    upsert?: usuarioscancionesUpsertWithWhereUniqueWithoutUsuarioInput | usuarioscancionesUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: usuarioscancionesCreateManyUsuarioInputEnvelope
    set?: usuarioscancionesWhereUniqueInput | usuarioscancionesWhereUniqueInput[]
    disconnect?: usuarioscancionesWhereUniqueInput | usuarioscancionesWhereUniqueInput[]
    delete?: usuarioscancionesWhereUniqueInput | usuarioscancionesWhereUniqueInput[]
    connect?: usuarioscancionesWhereUniqueInput | usuarioscancionesWhereUniqueInput[]
    update?: usuarioscancionesUpdateWithWhereUniqueWithoutUsuarioInput | usuarioscancionesUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: usuarioscancionesUpdateManyWithWhereWithoutUsuarioInput | usuarioscancionesUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: usuarioscancionesScalarWhereInput | usuarioscancionesScalarWhereInput[]
  }

  export type playlistUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<playlistCreateWithoutUsuarioInput, playlistUncheckedCreateWithoutUsuarioInput> | playlistCreateWithoutUsuarioInput[] | playlistUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: playlistCreateOrConnectWithoutUsuarioInput | playlistCreateOrConnectWithoutUsuarioInput[]
    upsert?: playlistUpsertWithWhereUniqueWithoutUsuarioInput | playlistUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: playlistCreateManyUsuarioInputEnvelope
    set?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    disconnect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    delete?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    connect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    update?: playlistUpdateWithWhereUniqueWithoutUsuarioInput | playlistUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: playlistUpdateManyWithWhereWithoutUsuarioInput | playlistUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: playlistScalarWhereInput | playlistScalarWhereInput[]
  }

  export type comentarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<comentarioCreateWithoutUsuarioInput, comentarioUncheckedCreateWithoutUsuarioInput> | comentarioCreateWithoutUsuarioInput[] | comentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutUsuarioInput | comentarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: comentarioUpsertWithWhereUniqueWithoutUsuarioInput | comentarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: comentarioCreateManyUsuarioInputEnvelope
    set?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    disconnect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    delete?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    update?: comentarioUpdateWithWhereUniqueWithoutUsuarioInput | comentarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: comentarioUpdateManyWithWhereWithoutUsuarioInput | comentarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: comentarioScalarWhereInput | comentarioScalarWhereInput[]
  }

  export type usuarioscancionesUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<usuarioscancionesCreateWithoutUsuarioInput, usuarioscancionesUncheckedCreateWithoutUsuarioInput> | usuarioscancionesCreateWithoutUsuarioInput[] | usuarioscancionesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuarioscancionesCreateOrConnectWithoutUsuarioInput | usuarioscancionesCreateOrConnectWithoutUsuarioInput[]
    upsert?: usuarioscancionesUpsertWithWhereUniqueWithoutUsuarioInput | usuarioscancionesUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: usuarioscancionesCreateManyUsuarioInputEnvelope
    set?: usuarioscancionesWhereUniqueInput | usuarioscancionesWhereUniqueInput[]
    disconnect?: usuarioscancionesWhereUniqueInput | usuarioscancionesWhereUniqueInput[]
    delete?: usuarioscancionesWhereUniqueInput | usuarioscancionesWhereUniqueInput[]
    connect?: usuarioscancionesWhereUniqueInput | usuarioscancionesWhereUniqueInput[]
    update?: usuarioscancionesUpdateWithWhereUniqueWithoutUsuarioInput | usuarioscancionesUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: usuarioscancionesUpdateManyWithWhereWithoutUsuarioInput | usuarioscancionesUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: usuarioscancionesScalarWhereInput | usuarioscancionesScalarWhereInput[]
  }

  export type playlistUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<playlistCreateWithoutUsuarioInput, playlistUncheckedCreateWithoutUsuarioInput> | playlistCreateWithoutUsuarioInput[] | playlistUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: playlistCreateOrConnectWithoutUsuarioInput | playlistCreateOrConnectWithoutUsuarioInput[]
    upsert?: playlistUpsertWithWhereUniqueWithoutUsuarioInput | playlistUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: playlistCreateManyUsuarioInputEnvelope
    set?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    disconnect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    delete?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    connect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    update?: playlistUpdateWithWhereUniqueWithoutUsuarioInput | playlistUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: playlistUpdateManyWithWhereWithoutUsuarioInput | playlistUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: playlistScalarWhereInput | playlistScalarWhereInput[]
  }

  export type comentarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<comentarioCreateWithoutUsuarioInput, comentarioUncheckedCreateWithoutUsuarioInput> | comentarioCreateWithoutUsuarioInput[] | comentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: comentarioCreateOrConnectWithoutUsuarioInput | comentarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: comentarioUpsertWithWhereUniqueWithoutUsuarioInput | comentarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: comentarioCreateManyUsuarioInputEnvelope
    set?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    disconnect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    delete?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    connect?: comentarioWhereUniqueInput | comentarioWhereUniqueInput[]
    update?: comentarioUpdateWithWhereUniqueWithoutUsuarioInput | comentarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: comentarioUpdateManyWithWhereWithoutUsuarioInput | comentarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: comentarioScalarWhereInput | comentarioScalarWhereInput[]
  }

  export type cancionCreateNestedOneWithoutUsuarioscancionesInput = {
    create?: XOR<cancionCreateWithoutUsuarioscancionesInput, cancionUncheckedCreateWithoutUsuarioscancionesInput>
    connectOrCreate?: cancionCreateOrConnectWithoutUsuarioscancionesInput
    connect?: cancionWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutUsuarioscancionesInput = {
    create?: XOR<usuarioCreateWithoutUsuarioscancionesInput, usuarioUncheckedCreateWithoutUsuarioscancionesInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutUsuarioscancionesInput
    connect?: usuarioWhereUniqueInput
  }

  export type cancionUpdateOneRequiredWithoutUsuarioscancionesNestedInput = {
    create?: XOR<cancionCreateWithoutUsuarioscancionesInput, cancionUncheckedCreateWithoutUsuarioscancionesInput>
    connectOrCreate?: cancionCreateOrConnectWithoutUsuarioscancionesInput
    upsert?: cancionUpsertWithoutUsuarioscancionesInput
    connect?: cancionWhereUniqueInput
    update?: XOR<XOR<cancionUpdateToOneWithWhereWithoutUsuarioscancionesInput, cancionUpdateWithoutUsuarioscancionesInput>, cancionUncheckedUpdateWithoutUsuarioscancionesInput>
  }

  export type usuarioUpdateOneRequiredWithoutUsuarioscancionesNestedInput = {
    create?: XOR<usuarioCreateWithoutUsuarioscancionesInput, usuarioUncheckedCreateWithoutUsuarioscancionesInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutUsuarioscancionesInput
    upsert?: usuarioUpsertWithoutUsuarioscancionesInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutUsuarioscancionesInput, usuarioUpdateWithoutUsuarioscancionesInput>, usuarioUncheckedUpdateWithoutUsuarioscancionesInput>
  }

  export type usuarioCreateNestedManyWithoutRolInput = {
    create?: XOR<usuarioCreateWithoutRolInput, usuarioUncheckedCreateWithoutRolInput> | usuarioCreateWithoutRolInput[] | usuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutRolInput | usuarioCreateOrConnectWithoutRolInput[]
    createMany?: usuarioCreateManyRolInputEnvelope
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
  }

  export type usuarioUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<usuarioCreateWithoutRolInput, usuarioUncheckedCreateWithoutRolInput> | usuarioCreateWithoutRolInput[] | usuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutRolInput | usuarioCreateOrConnectWithoutRolInput[]
    createMany?: usuarioCreateManyRolInputEnvelope
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
  }

  export type usuarioUpdateManyWithoutRolNestedInput = {
    create?: XOR<usuarioCreateWithoutRolInput, usuarioUncheckedCreateWithoutRolInput> | usuarioCreateWithoutRolInput[] | usuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutRolInput | usuarioCreateOrConnectWithoutRolInput[]
    upsert?: usuarioUpsertWithWhereUniqueWithoutRolInput | usuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: usuarioCreateManyRolInputEnvelope
    set?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    disconnect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    delete?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    update?: usuarioUpdateWithWhereUniqueWithoutRolInput | usuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: usuarioUpdateManyWithWhereWithoutRolInput | usuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
  }

  export type usuarioUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<usuarioCreateWithoutRolInput, usuarioUncheckedCreateWithoutRolInput> | usuarioCreateWithoutRolInput[] | usuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutRolInput | usuarioCreateOrConnectWithoutRolInput[]
    upsert?: usuarioUpsertWithWhereUniqueWithoutRolInput | usuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: usuarioCreateManyRolInputEnvelope
    set?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    disconnect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    delete?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    update?: usuarioUpdateWithWhereUniqueWithoutRolInput | usuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: usuarioUpdateManyWithWhereWithoutRolInput | usuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
  }

  export type cancionCreateNestedManyWithoutAlbumInput = {
    create?: XOR<cancionCreateWithoutAlbumInput, cancionUncheckedCreateWithoutAlbumInput> | cancionCreateWithoutAlbumInput[] | cancionUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: cancionCreateOrConnectWithoutAlbumInput | cancionCreateOrConnectWithoutAlbumInput[]
    createMany?: cancionCreateManyAlbumInputEnvelope
    connect?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
  }

  export type cancionUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<cancionCreateWithoutAlbumInput, cancionUncheckedCreateWithoutAlbumInput> | cancionCreateWithoutAlbumInput[] | cancionUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: cancionCreateOrConnectWithoutAlbumInput | cancionCreateOrConnectWithoutAlbumInput[]
    createMany?: cancionCreateManyAlbumInputEnvelope
    connect?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
  }

  export type cancionUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<cancionCreateWithoutAlbumInput, cancionUncheckedCreateWithoutAlbumInput> | cancionCreateWithoutAlbumInput[] | cancionUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: cancionCreateOrConnectWithoutAlbumInput | cancionCreateOrConnectWithoutAlbumInput[]
    upsert?: cancionUpsertWithWhereUniqueWithoutAlbumInput | cancionUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: cancionCreateManyAlbumInputEnvelope
    set?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    disconnect?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    delete?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    connect?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    update?: cancionUpdateWithWhereUniqueWithoutAlbumInput | cancionUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: cancionUpdateManyWithWhereWithoutAlbumInput | cancionUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: cancionScalarWhereInput | cancionScalarWhereInput[]
  }

  export type cancionUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<cancionCreateWithoutAlbumInput, cancionUncheckedCreateWithoutAlbumInput> | cancionCreateWithoutAlbumInput[] | cancionUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: cancionCreateOrConnectWithoutAlbumInput | cancionCreateOrConnectWithoutAlbumInput[]
    upsert?: cancionUpsertWithWhereUniqueWithoutAlbumInput | cancionUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: cancionCreateManyAlbumInputEnvelope
    set?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    disconnect?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    delete?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    connect?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    update?: cancionUpdateWithWhereUniqueWithoutAlbumInput | cancionUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: cancionUpdateManyWithWhereWithoutAlbumInput | cancionUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: cancionScalarWhereInput | cancionScalarWhereInput[]
  }

  export type cancionCreateNestedManyWithoutGeneroInput = {
    create?: XOR<cancionCreateWithoutGeneroInput, cancionUncheckedCreateWithoutGeneroInput> | cancionCreateWithoutGeneroInput[] | cancionUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: cancionCreateOrConnectWithoutGeneroInput | cancionCreateOrConnectWithoutGeneroInput[]
    createMany?: cancionCreateManyGeneroInputEnvelope
    connect?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
  }

  export type cancionUncheckedCreateNestedManyWithoutGeneroInput = {
    create?: XOR<cancionCreateWithoutGeneroInput, cancionUncheckedCreateWithoutGeneroInput> | cancionCreateWithoutGeneroInput[] | cancionUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: cancionCreateOrConnectWithoutGeneroInput | cancionCreateOrConnectWithoutGeneroInput[]
    createMany?: cancionCreateManyGeneroInputEnvelope
    connect?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
  }

  export type cancionUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<cancionCreateWithoutGeneroInput, cancionUncheckedCreateWithoutGeneroInput> | cancionCreateWithoutGeneroInput[] | cancionUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: cancionCreateOrConnectWithoutGeneroInput | cancionCreateOrConnectWithoutGeneroInput[]
    upsert?: cancionUpsertWithWhereUniqueWithoutGeneroInput | cancionUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: cancionCreateManyGeneroInputEnvelope
    set?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    disconnect?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    delete?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    connect?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    update?: cancionUpdateWithWhereUniqueWithoutGeneroInput | cancionUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: cancionUpdateManyWithWhereWithoutGeneroInput | cancionUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: cancionScalarWhereInput | cancionScalarWhereInput[]
  }

  export type cancionUncheckedUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<cancionCreateWithoutGeneroInput, cancionUncheckedCreateWithoutGeneroInput> | cancionCreateWithoutGeneroInput[] | cancionUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: cancionCreateOrConnectWithoutGeneroInput | cancionCreateOrConnectWithoutGeneroInput[]
    upsert?: cancionUpsertWithWhereUniqueWithoutGeneroInput | cancionUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: cancionCreateManyGeneroInputEnvelope
    set?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    disconnect?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    delete?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    connect?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    update?: cancionUpdateWithWhereUniqueWithoutGeneroInput | cancionUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: cancionUpdateManyWithWhereWithoutGeneroInput | cancionUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: cancionScalarWhereInput | cancionScalarWhereInput[]
  }

  export type usuarioCreateNestedOneWithoutPlaylistsInput = {
    create?: XOR<usuarioCreateWithoutPlaylistsInput, usuarioUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutPlaylistsInput
    connect?: usuarioWhereUniqueInput
  }

  export type cancionCreateNestedManyWithoutPlaylistsInput = {
    create?: XOR<cancionCreateWithoutPlaylistsInput, cancionUncheckedCreateWithoutPlaylistsInput> | cancionCreateWithoutPlaylistsInput[] | cancionUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: cancionCreateOrConnectWithoutPlaylistsInput | cancionCreateOrConnectWithoutPlaylistsInput[]
    connect?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
  }

  export type cancionUncheckedCreateNestedManyWithoutPlaylistsInput = {
    create?: XOR<cancionCreateWithoutPlaylistsInput, cancionUncheckedCreateWithoutPlaylistsInput> | cancionCreateWithoutPlaylistsInput[] | cancionUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: cancionCreateOrConnectWithoutPlaylistsInput | cancionCreateOrConnectWithoutPlaylistsInput[]
    connect?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
  }

  export type usuarioUpdateOneRequiredWithoutPlaylistsNestedInput = {
    create?: XOR<usuarioCreateWithoutPlaylistsInput, usuarioUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutPlaylistsInput
    upsert?: usuarioUpsertWithoutPlaylistsInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutPlaylistsInput, usuarioUpdateWithoutPlaylistsInput>, usuarioUncheckedUpdateWithoutPlaylistsInput>
  }

  export type cancionUpdateManyWithoutPlaylistsNestedInput = {
    create?: XOR<cancionCreateWithoutPlaylistsInput, cancionUncheckedCreateWithoutPlaylistsInput> | cancionCreateWithoutPlaylistsInput[] | cancionUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: cancionCreateOrConnectWithoutPlaylistsInput | cancionCreateOrConnectWithoutPlaylistsInput[]
    upsert?: cancionUpsertWithWhereUniqueWithoutPlaylistsInput | cancionUpsertWithWhereUniqueWithoutPlaylistsInput[]
    set?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    disconnect?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    delete?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    connect?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    update?: cancionUpdateWithWhereUniqueWithoutPlaylistsInput | cancionUpdateWithWhereUniqueWithoutPlaylistsInput[]
    updateMany?: cancionUpdateManyWithWhereWithoutPlaylistsInput | cancionUpdateManyWithWhereWithoutPlaylistsInput[]
    deleteMany?: cancionScalarWhereInput | cancionScalarWhereInput[]
  }

  export type cancionUncheckedUpdateManyWithoutPlaylistsNestedInput = {
    create?: XOR<cancionCreateWithoutPlaylistsInput, cancionUncheckedCreateWithoutPlaylistsInput> | cancionCreateWithoutPlaylistsInput[] | cancionUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: cancionCreateOrConnectWithoutPlaylistsInput | cancionCreateOrConnectWithoutPlaylistsInput[]
    upsert?: cancionUpsertWithWhereUniqueWithoutPlaylistsInput | cancionUpsertWithWhereUniqueWithoutPlaylistsInput[]
    set?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    disconnect?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    delete?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    connect?: cancionWhereUniqueInput | cancionWhereUniqueInput[]
    update?: cancionUpdateWithWhereUniqueWithoutPlaylistsInput | cancionUpdateWithWhereUniqueWithoutPlaylistsInput[]
    updateMany?: cancionUpdateManyWithWhereWithoutPlaylistsInput | cancionUpdateManyWithWhereWithoutPlaylistsInput[]
    deleteMany?: cancionScalarWhereInput | cancionScalarWhereInput[]
  }

  export type usuarioCreateNestedOneWithoutComentariosInput = {
    create?: XOR<usuarioCreateWithoutComentariosInput, usuarioUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutComentariosInput
    connect?: usuarioWhereUniqueInput
  }

  export type cancionCreateNestedOneWithoutComentariosInput = {
    create?: XOR<cancionCreateWithoutComentariosInput, cancionUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: cancionCreateOrConnectWithoutComentariosInput
    connect?: cancionWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usuarioUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<usuarioCreateWithoutComentariosInput, usuarioUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutComentariosInput
    upsert?: usuarioUpsertWithoutComentariosInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutComentariosInput, usuarioUpdateWithoutComentariosInput>, usuarioUncheckedUpdateWithoutComentariosInput>
  }

  export type cancionUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<cancionCreateWithoutComentariosInput, cancionUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: cancionCreateOrConnectWithoutComentariosInput
    upsert?: cancionUpsertWithoutComentariosInput
    connect?: cancionWhereUniqueInput
    update?: XOR<XOR<cancionUpdateToOneWithWhereWithoutComentariosInput, cancionUpdateWithoutComentariosInput>, cancionUncheckedUpdateWithoutComentariosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type albumCreateWithoutCancionesInput = {
    nombre: string
    anio: number
    portada?: string | null
  }

  export type albumUncheckedCreateWithoutCancionesInput = {
    id?: number
    nombre: string
    anio: number
    portada?: string | null
  }

  export type albumCreateOrConnectWithoutCancionesInput = {
    where: albumWhereUniqueInput
    create: XOR<albumCreateWithoutCancionesInput, albumUncheckedCreateWithoutCancionesInput>
  }

  export type generoCreateWithoutCancionesInput = {
    nombre: string
  }

  export type generoUncheckedCreateWithoutCancionesInput = {
    id?: number
    nombre: string
  }

  export type generoCreateOrConnectWithoutCancionesInput = {
    where: generoWhereUniqueInput
    create: XOR<generoCreateWithoutCancionesInput, generoUncheckedCreateWithoutCancionesInput>
  }

  export type usuarioscancionesCreateWithoutCancionInput = {
    usuario: usuarioCreateNestedOneWithoutUsuarioscancionesInput
  }

  export type usuarioscancionesUncheckedCreateWithoutCancionInput = {
    id?: number
    usuarioId: number
  }

  export type usuarioscancionesCreateOrConnectWithoutCancionInput = {
    where: usuarioscancionesWhereUniqueInput
    create: XOR<usuarioscancionesCreateWithoutCancionInput, usuarioscancionesUncheckedCreateWithoutCancionInput>
  }

  export type usuarioscancionesCreateManyCancionInputEnvelope = {
    data: usuarioscancionesCreateManyCancionInput | usuarioscancionesCreateManyCancionInput[]
    skipDuplicates?: boolean
  }

  export type playlistCreateWithoutCancionesInput = {
    nombre: string
    usuario: usuarioCreateNestedOneWithoutPlaylistsInput
  }

  export type playlistUncheckedCreateWithoutCancionesInput = {
    id?: number
    nombre: string
    usuarioId: number
  }

  export type playlistCreateOrConnectWithoutCancionesInput = {
    where: playlistWhereUniqueInput
    create: XOR<playlistCreateWithoutCancionesInput, playlistUncheckedCreateWithoutCancionesInput>
  }

  export type comentarioCreateWithoutCancionInput = {
    texto: string
    fecha?: Date | string
    usuario: usuarioCreateNestedOneWithoutComentariosInput
  }

  export type comentarioUncheckedCreateWithoutCancionInput = {
    id?: number
    texto: string
    fecha?: Date | string
    usuarioId: number
  }

  export type comentarioCreateOrConnectWithoutCancionInput = {
    where: comentarioWhereUniqueInput
    create: XOR<comentarioCreateWithoutCancionInput, comentarioUncheckedCreateWithoutCancionInput>
  }

  export type comentarioCreateManyCancionInputEnvelope = {
    data: comentarioCreateManyCancionInput | comentarioCreateManyCancionInput[]
    skipDuplicates?: boolean
  }

  export type albumUpsertWithoutCancionesInput = {
    update: XOR<albumUpdateWithoutCancionesInput, albumUncheckedUpdateWithoutCancionesInput>
    create: XOR<albumCreateWithoutCancionesInput, albumUncheckedCreateWithoutCancionesInput>
    where?: albumWhereInput
  }

  export type albumUpdateToOneWithWhereWithoutCancionesInput = {
    where?: albumWhereInput
    data: XOR<albumUpdateWithoutCancionesInput, albumUncheckedUpdateWithoutCancionesInput>
  }

  export type albumUpdateWithoutCancionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    portada?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type albumUncheckedUpdateWithoutCancionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    portada?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type generoUpsertWithoutCancionesInput = {
    update: XOR<generoUpdateWithoutCancionesInput, generoUncheckedUpdateWithoutCancionesInput>
    create: XOR<generoCreateWithoutCancionesInput, generoUncheckedCreateWithoutCancionesInput>
    where?: generoWhereInput
  }

  export type generoUpdateToOneWithWhereWithoutCancionesInput = {
    where?: generoWhereInput
    data: XOR<generoUpdateWithoutCancionesInput, generoUncheckedUpdateWithoutCancionesInput>
  }

  export type generoUpdateWithoutCancionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type generoUncheckedUpdateWithoutCancionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioscancionesUpsertWithWhereUniqueWithoutCancionInput = {
    where: usuarioscancionesWhereUniqueInput
    update: XOR<usuarioscancionesUpdateWithoutCancionInput, usuarioscancionesUncheckedUpdateWithoutCancionInput>
    create: XOR<usuarioscancionesCreateWithoutCancionInput, usuarioscancionesUncheckedCreateWithoutCancionInput>
  }

  export type usuarioscancionesUpdateWithWhereUniqueWithoutCancionInput = {
    where: usuarioscancionesWhereUniqueInput
    data: XOR<usuarioscancionesUpdateWithoutCancionInput, usuarioscancionesUncheckedUpdateWithoutCancionInput>
  }

  export type usuarioscancionesUpdateManyWithWhereWithoutCancionInput = {
    where: usuarioscancionesScalarWhereInput
    data: XOR<usuarioscancionesUpdateManyMutationInput, usuarioscancionesUncheckedUpdateManyWithoutCancionInput>
  }

  export type usuarioscancionesScalarWhereInput = {
    AND?: usuarioscancionesScalarWhereInput | usuarioscancionesScalarWhereInput[]
    OR?: usuarioscancionesScalarWhereInput[]
    NOT?: usuarioscancionesScalarWhereInput | usuarioscancionesScalarWhereInput[]
    id?: IntFilter<"usuarioscanciones"> | number
    usuarioId?: IntFilter<"usuarioscanciones"> | number
    cancionId?: IntFilter<"usuarioscanciones"> | number
  }

  export type playlistUpsertWithWhereUniqueWithoutCancionesInput = {
    where: playlistWhereUniqueInput
    update: XOR<playlistUpdateWithoutCancionesInput, playlistUncheckedUpdateWithoutCancionesInput>
    create: XOR<playlistCreateWithoutCancionesInput, playlistUncheckedCreateWithoutCancionesInput>
  }

  export type playlistUpdateWithWhereUniqueWithoutCancionesInput = {
    where: playlistWhereUniqueInput
    data: XOR<playlistUpdateWithoutCancionesInput, playlistUncheckedUpdateWithoutCancionesInput>
  }

  export type playlistUpdateManyWithWhereWithoutCancionesInput = {
    where: playlistScalarWhereInput
    data: XOR<playlistUpdateManyMutationInput, playlistUncheckedUpdateManyWithoutCancionesInput>
  }

  export type playlistScalarWhereInput = {
    AND?: playlistScalarWhereInput | playlistScalarWhereInput[]
    OR?: playlistScalarWhereInput[]
    NOT?: playlistScalarWhereInput | playlistScalarWhereInput[]
    id?: IntFilter<"playlist"> | number
    nombre?: StringFilter<"playlist"> | string
    usuarioId?: IntFilter<"playlist"> | number
  }

  export type comentarioUpsertWithWhereUniqueWithoutCancionInput = {
    where: comentarioWhereUniqueInput
    update: XOR<comentarioUpdateWithoutCancionInput, comentarioUncheckedUpdateWithoutCancionInput>
    create: XOR<comentarioCreateWithoutCancionInput, comentarioUncheckedCreateWithoutCancionInput>
  }

  export type comentarioUpdateWithWhereUniqueWithoutCancionInput = {
    where: comentarioWhereUniqueInput
    data: XOR<comentarioUpdateWithoutCancionInput, comentarioUncheckedUpdateWithoutCancionInput>
  }

  export type comentarioUpdateManyWithWhereWithoutCancionInput = {
    where: comentarioScalarWhereInput
    data: XOR<comentarioUpdateManyMutationInput, comentarioUncheckedUpdateManyWithoutCancionInput>
  }

  export type comentarioScalarWhereInput = {
    AND?: comentarioScalarWhereInput | comentarioScalarWhereInput[]
    OR?: comentarioScalarWhereInput[]
    NOT?: comentarioScalarWhereInput | comentarioScalarWhereInput[]
    id?: IntFilter<"comentario"> | number
    texto?: StringFilter<"comentario"> | string
    fecha?: DateTimeFilter<"comentario"> | Date | string
    usuarioId?: IntFilter<"comentario"> | number
    cancionId?: IntFilter<"comentario"> | number
  }

  export type rolCreateWithoutUsuariosInput = {
    nombre: string
    descripcion?: string | null
  }

  export type rolUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nombre: string
    descripcion?: string | null
  }

  export type rolCreateOrConnectWithoutUsuariosInput = {
    where: rolWhereUniqueInput
    create: XOR<rolCreateWithoutUsuariosInput, rolUncheckedCreateWithoutUsuariosInput>
  }

  export type usuarioscancionesCreateWithoutUsuarioInput = {
    cancion: cancionCreateNestedOneWithoutUsuarioscancionesInput
  }

  export type usuarioscancionesUncheckedCreateWithoutUsuarioInput = {
    id?: number
    cancionId: number
  }

  export type usuarioscancionesCreateOrConnectWithoutUsuarioInput = {
    where: usuarioscancionesWhereUniqueInput
    create: XOR<usuarioscancionesCreateWithoutUsuarioInput, usuarioscancionesUncheckedCreateWithoutUsuarioInput>
  }

  export type usuarioscancionesCreateManyUsuarioInputEnvelope = {
    data: usuarioscancionesCreateManyUsuarioInput | usuarioscancionesCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type playlistCreateWithoutUsuarioInput = {
    nombre: string
    canciones?: cancionCreateNestedManyWithoutPlaylistsInput
  }

  export type playlistUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nombre: string
    canciones?: cancionUncheckedCreateNestedManyWithoutPlaylistsInput
  }

  export type playlistCreateOrConnectWithoutUsuarioInput = {
    where: playlistWhereUniqueInput
    create: XOR<playlistCreateWithoutUsuarioInput, playlistUncheckedCreateWithoutUsuarioInput>
  }

  export type playlistCreateManyUsuarioInputEnvelope = {
    data: playlistCreateManyUsuarioInput | playlistCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type comentarioCreateWithoutUsuarioInput = {
    texto: string
    fecha?: Date | string
    cancion: cancionCreateNestedOneWithoutComentariosInput
  }

  export type comentarioUncheckedCreateWithoutUsuarioInput = {
    id?: number
    texto: string
    fecha?: Date | string
    cancionId: number
  }

  export type comentarioCreateOrConnectWithoutUsuarioInput = {
    where: comentarioWhereUniqueInput
    create: XOR<comentarioCreateWithoutUsuarioInput, comentarioUncheckedCreateWithoutUsuarioInput>
  }

  export type comentarioCreateManyUsuarioInputEnvelope = {
    data: comentarioCreateManyUsuarioInput | comentarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type rolUpsertWithoutUsuariosInput = {
    update: XOR<rolUpdateWithoutUsuariosInput, rolUncheckedUpdateWithoutUsuariosInput>
    create: XOR<rolCreateWithoutUsuariosInput, rolUncheckedCreateWithoutUsuariosInput>
    where?: rolWhereInput
  }

  export type rolUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: rolWhereInput
    data: XOR<rolUpdateWithoutUsuariosInput, rolUncheckedUpdateWithoutUsuariosInput>
  }

  export type rolUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rolUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarioscancionesUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: usuarioscancionesWhereUniqueInput
    update: XOR<usuarioscancionesUpdateWithoutUsuarioInput, usuarioscancionesUncheckedUpdateWithoutUsuarioInput>
    create: XOR<usuarioscancionesCreateWithoutUsuarioInput, usuarioscancionesUncheckedCreateWithoutUsuarioInput>
  }

  export type usuarioscancionesUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: usuarioscancionesWhereUniqueInput
    data: XOR<usuarioscancionesUpdateWithoutUsuarioInput, usuarioscancionesUncheckedUpdateWithoutUsuarioInput>
  }

  export type usuarioscancionesUpdateManyWithWhereWithoutUsuarioInput = {
    where: usuarioscancionesScalarWhereInput
    data: XOR<usuarioscancionesUpdateManyMutationInput, usuarioscancionesUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type playlistUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: playlistWhereUniqueInput
    update: XOR<playlistUpdateWithoutUsuarioInput, playlistUncheckedUpdateWithoutUsuarioInput>
    create: XOR<playlistCreateWithoutUsuarioInput, playlistUncheckedCreateWithoutUsuarioInput>
  }

  export type playlistUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: playlistWhereUniqueInput
    data: XOR<playlistUpdateWithoutUsuarioInput, playlistUncheckedUpdateWithoutUsuarioInput>
  }

  export type playlistUpdateManyWithWhereWithoutUsuarioInput = {
    where: playlistScalarWhereInput
    data: XOR<playlistUpdateManyMutationInput, playlistUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type comentarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: comentarioWhereUniqueInput
    update: XOR<comentarioUpdateWithoutUsuarioInput, comentarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<comentarioCreateWithoutUsuarioInput, comentarioUncheckedCreateWithoutUsuarioInput>
  }

  export type comentarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: comentarioWhereUniqueInput
    data: XOR<comentarioUpdateWithoutUsuarioInput, comentarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type comentarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: comentarioScalarWhereInput
    data: XOR<comentarioUpdateManyMutationInput, comentarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type cancionCreateWithoutUsuarioscancionesInput = {
    titulo: string
    fechaLanzamiento?: Date | string | null
    restriccionEdad?: boolean
    portada?: string | null
    anioLanzamiento?: number | null
    album?: albumCreateNestedOneWithoutCancionesInput
    genero?: generoCreateNestedOneWithoutCancionesInput
    playlists?: playlistCreateNestedManyWithoutCancionesInput
    comentarios?: comentarioCreateNestedManyWithoutCancionInput
  }

  export type cancionUncheckedCreateWithoutUsuarioscancionesInput = {
    id?: number
    titulo: string
    fechaLanzamiento?: Date | string | null
    generoId?: number | null
    restriccionEdad?: boolean
    portada?: string | null
    anioLanzamiento?: number | null
    albumId?: number | null
    playlists?: playlistUncheckedCreateNestedManyWithoutCancionesInput
    comentarios?: comentarioUncheckedCreateNestedManyWithoutCancionInput
  }

  export type cancionCreateOrConnectWithoutUsuarioscancionesInput = {
    where: cancionWhereUniqueInput
    create: XOR<cancionCreateWithoutUsuarioscancionesInput, cancionUncheckedCreateWithoutUsuarioscancionesInput>
  }

  export type usuarioCreateWithoutUsuarioscancionesInput = {
    email: string
    password: string
    nombre: string
    direccion?: string | null
    estado?: string | null
    fechaNacimiento?: Date | string | null
    nacionalidad?: string | null
    sexo?: string | null
    apodo?: string | null
    foto?: string | null
    anioInicioCarrera?: number | null
    rol?: rolCreateNestedOneWithoutUsuariosInput
    playlists?: playlistCreateNestedManyWithoutUsuarioInput
    comentarios?: comentarioCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutUsuarioscancionesInput = {
    id?: number
    email: string
    password: string
    nombre: string
    direccion?: string | null
    estado?: string | null
    fechaNacimiento?: Date | string | null
    nacionalidad?: string | null
    sexo?: string | null
    apodo?: string | null
    foto?: string | null
    rolId?: number
    anioInicioCarrera?: number | null
    playlists?: playlistUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: comentarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutUsuarioscancionesInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutUsuarioscancionesInput, usuarioUncheckedCreateWithoutUsuarioscancionesInput>
  }

  export type cancionUpsertWithoutUsuarioscancionesInput = {
    update: XOR<cancionUpdateWithoutUsuarioscancionesInput, cancionUncheckedUpdateWithoutUsuarioscancionesInput>
    create: XOR<cancionCreateWithoutUsuarioscancionesInput, cancionUncheckedCreateWithoutUsuarioscancionesInput>
    where?: cancionWhereInput
  }

  export type cancionUpdateToOneWithWhereWithoutUsuarioscancionesInput = {
    where?: cancionWhereInput
    data: XOR<cancionUpdateWithoutUsuarioscancionesInput, cancionUncheckedUpdateWithoutUsuarioscancionesInput>
  }

  export type cancionUpdateWithoutUsuarioscancionesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    restriccionEdad?: BoolFieldUpdateOperationsInput | boolean
    portada?: NullableStringFieldUpdateOperationsInput | string | null
    anioLanzamiento?: NullableIntFieldUpdateOperationsInput | number | null
    album?: albumUpdateOneWithoutCancionesNestedInput
    genero?: generoUpdateOneWithoutCancionesNestedInput
    playlists?: playlistUpdateManyWithoutCancionesNestedInput
    comentarios?: comentarioUpdateManyWithoutCancionNestedInput
  }

  export type cancionUncheckedUpdateWithoutUsuarioscancionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generoId?: NullableIntFieldUpdateOperationsInput | number | null
    restriccionEdad?: BoolFieldUpdateOperationsInput | boolean
    portada?: NullableStringFieldUpdateOperationsInput | string | null
    anioLanzamiento?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    playlists?: playlistUncheckedUpdateManyWithoutCancionesNestedInput
    comentarios?: comentarioUncheckedUpdateManyWithoutCancionNestedInput
  }

  export type usuarioUpsertWithoutUsuarioscancionesInput = {
    update: XOR<usuarioUpdateWithoutUsuarioscancionesInput, usuarioUncheckedUpdateWithoutUsuarioscancionesInput>
    create: XOR<usuarioCreateWithoutUsuarioscancionesInput, usuarioUncheckedCreateWithoutUsuarioscancionesInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutUsuarioscancionesInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutUsuarioscancionesInput, usuarioUncheckedUpdateWithoutUsuarioscancionesInput>
  }

  export type usuarioUpdateWithoutUsuarioscancionesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nacionalidad?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    apodo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    anioInicioCarrera?: NullableIntFieldUpdateOperationsInput | number | null
    rol?: rolUpdateOneRequiredWithoutUsuariosNestedInput
    playlists?: playlistUpdateManyWithoutUsuarioNestedInput
    comentarios?: comentarioUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutUsuarioscancionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nacionalidad?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    apodo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    rolId?: IntFieldUpdateOperationsInput | number
    anioInicioCarrera?: NullableIntFieldUpdateOperationsInput | number | null
    playlists?: playlistUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: comentarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateWithoutRolInput = {
    email: string
    password: string
    nombre: string
    direccion?: string | null
    estado?: string | null
    fechaNacimiento?: Date | string | null
    nacionalidad?: string | null
    sexo?: string | null
    apodo?: string | null
    foto?: string | null
    anioInicioCarrera?: number | null
    usuarioscanciones?: usuarioscancionesCreateNestedManyWithoutUsuarioInput
    playlists?: playlistCreateNestedManyWithoutUsuarioInput
    comentarios?: comentarioCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutRolInput = {
    id?: number
    email: string
    password: string
    nombre: string
    direccion?: string | null
    estado?: string | null
    fechaNacimiento?: Date | string | null
    nacionalidad?: string | null
    sexo?: string | null
    apodo?: string | null
    foto?: string | null
    anioInicioCarrera?: number | null
    usuarioscanciones?: usuarioscancionesUncheckedCreateNestedManyWithoutUsuarioInput
    playlists?: playlistUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: comentarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutRolInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutRolInput, usuarioUncheckedCreateWithoutRolInput>
  }

  export type usuarioCreateManyRolInputEnvelope = {
    data: usuarioCreateManyRolInput | usuarioCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type usuarioUpsertWithWhereUniqueWithoutRolInput = {
    where: usuarioWhereUniqueInput
    update: XOR<usuarioUpdateWithoutRolInput, usuarioUncheckedUpdateWithoutRolInput>
    create: XOR<usuarioCreateWithoutRolInput, usuarioUncheckedCreateWithoutRolInput>
  }

  export type usuarioUpdateWithWhereUniqueWithoutRolInput = {
    where: usuarioWhereUniqueInput
    data: XOR<usuarioUpdateWithoutRolInput, usuarioUncheckedUpdateWithoutRolInput>
  }

  export type usuarioUpdateManyWithWhereWithoutRolInput = {
    where: usuarioScalarWhereInput
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyWithoutRolInput>
  }

  export type usuarioScalarWhereInput = {
    AND?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
    OR?: usuarioScalarWhereInput[]
    NOT?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
    id?: IntFilter<"usuario"> | number
    email?: StringFilter<"usuario"> | string
    password?: StringFilter<"usuario"> | string
    nombre?: StringFilter<"usuario"> | string
    direccion?: StringNullableFilter<"usuario"> | string | null
    estado?: StringNullableFilter<"usuario"> | string | null
    fechaNacimiento?: DateTimeNullableFilter<"usuario"> | Date | string | null
    nacionalidad?: StringNullableFilter<"usuario"> | string | null
    sexo?: StringNullableFilter<"usuario"> | string | null
    apodo?: StringNullableFilter<"usuario"> | string | null
    foto?: StringNullableFilter<"usuario"> | string | null
    rolId?: IntFilter<"usuario"> | number
    anioInicioCarrera?: IntNullableFilter<"usuario"> | number | null
  }

  export type cancionCreateWithoutAlbumInput = {
    titulo: string
    fechaLanzamiento?: Date | string | null
    restriccionEdad?: boolean
    portada?: string | null
    anioLanzamiento?: number | null
    genero?: generoCreateNestedOneWithoutCancionesInput
    usuarioscanciones?: usuarioscancionesCreateNestedManyWithoutCancionInput
    playlists?: playlistCreateNestedManyWithoutCancionesInput
    comentarios?: comentarioCreateNestedManyWithoutCancionInput
  }

  export type cancionUncheckedCreateWithoutAlbumInput = {
    id?: number
    titulo: string
    fechaLanzamiento?: Date | string | null
    generoId?: number | null
    restriccionEdad?: boolean
    portada?: string | null
    anioLanzamiento?: number | null
    usuarioscanciones?: usuarioscancionesUncheckedCreateNestedManyWithoutCancionInput
    playlists?: playlistUncheckedCreateNestedManyWithoutCancionesInput
    comentarios?: comentarioUncheckedCreateNestedManyWithoutCancionInput
  }

  export type cancionCreateOrConnectWithoutAlbumInput = {
    where: cancionWhereUniqueInput
    create: XOR<cancionCreateWithoutAlbumInput, cancionUncheckedCreateWithoutAlbumInput>
  }

  export type cancionCreateManyAlbumInputEnvelope = {
    data: cancionCreateManyAlbumInput | cancionCreateManyAlbumInput[]
    skipDuplicates?: boolean
  }

  export type cancionUpsertWithWhereUniqueWithoutAlbumInput = {
    where: cancionWhereUniqueInput
    update: XOR<cancionUpdateWithoutAlbumInput, cancionUncheckedUpdateWithoutAlbumInput>
    create: XOR<cancionCreateWithoutAlbumInput, cancionUncheckedCreateWithoutAlbumInput>
  }

  export type cancionUpdateWithWhereUniqueWithoutAlbumInput = {
    where: cancionWhereUniqueInput
    data: XOR<cancionUpdateWithoutAlbumInput, cancionUncheckedUpdateWithoutAlbumInput>
  }

  export type cancionUpdateManyWithWhereWithoutAlbumInput = {
    where: cancionScalarWhereInput
    data: XOR<cancionUpdateManyMutationInput, cancionUncheckedUpdateManyWithoutAlbumInput>
  }

  export type cancionScalarWhereInput = {
    AND?: cancionScalarWhereInput | cancionScalarWhereInput[]
    OR?: cancionScalarWhereInput[]
    NOT?: cancionScalarWhereInput | cancionScalarWhereInput[]
    id?: IntFilter<"cancion"> | number
    titulo?: StringFilter<"cancion"> | string
    fechaLanzamiento?: DateTimeNullableFilter<"cancion"> | Date | string | null
    generoId?: IntNullableFilter<"cancion"> | number | null
    restriccionEdad?: BoolFilter<"cancion"> | boolean
    portada?: StringNullableFilter<"cancion"> | string | null
    anioLanzamiento?: IntNullableFilter<"cancion"> | number | null
    albumId?: IntNullableFilter<"cancion"> | number | null
  }

  export type cancionCreateWithoutGeneroInput = {
    titulo: string
    fechaLanzamiento?: Date | string | null
    restriccionEdad?: boolean
    portada?: string | null
    anioLanzamiento?: number | null
    album?: albumCreateNestedOneWithoutCancionesInput
    usuarioscanciones?: usuarioscancionesCreateNestedManyWithoutCancionInput
    playlists?: playlistCreateNestedManyWithoutCancionesInput
    comentarios?: comentarioCreateNestedManyWithoutCancionInput
  }

  export type cancionUncheckedCreateWithoutGeneroInput = {
    id?: number
    titulo: string
    fechaLanzamiento?: Date | string | null
    restriccionEdad?: boolean
    portada?: string | null
    anioLanzamiento?: number | null
    albumId?: number | null
    usuarioscanciones?: usuarioscancionesUncheckedCreateNestedManyWithoutCancionInput
    playlists?: playlistUncheckedCreateNestedManyWithoutCancionesInput
    comentarios?: comentarioUncheckedCreateNestedManyWithoutCancionInput
  }

  export type cancionCreateOrConnectWithoutGeneroInput = {
    where: cancionWhereUniqueInput
    create: XOR<cancionCreateWithoutGeneroInput, cancionUncheckedCreateWithoutGeneroInput>
  }

  export type cancionCreateManyGeneroInputEnvelope = {
    data: cancionCreateManyGeneroInput | cancionCreateManyGeneroInput[]
    skipDuplicates?: boolean
  }

  export type cancionUpsertWithWhereUniqueWithoutGeneroInput = {
    where: cancionWhereUniqueInput
    update: XOR<cancionUpdateWithoutGeneroInput, cancionUncheckedUpdateWithoutGeneroInput>
    create: XOR<cancionCreateWithoutGeneroInput, cancionUncheckedCreateWithoutGeneroInput>
  }

  export type cancionUpdateWithWhereUniqueWithoutGeneroInput = {
    where: cancionWhereUniqueInput
    data: XOR<cancionUpdateWithoutGeneroInput, cancionUncheckedUpdateWithoutGeneroInput>
  }

  export type cancionUpdateManyWithWhereWithoutGeneroInput = {
    where: cancionScalarWhereInput
    data: XOR<cancionUpdateManyMutationInput, cancionUncheckedUpdateManyWithoutGeneroInput>
  }

  export type usuarioCreateWithoutPlaylistsInput = {
    email: string
    password: string
    nombre: string
    direccion?: string | null
    estado?: string | null
    fechaNacimiento?: Date | string | null
    nacionalidad?: string | null
    sexo?: string | null
    apodo?: string | null
    foto?: string | null
    anioInicioCarrera?: number | null
    rol?: rolCreateNestedOneWithoutUsuariosInput
    usuarioscanciones?: usuarioscancionesCreateNestedManyWithoutUsuarioInput
    comentarios?: comentarioCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutPlaylistsInput = {
    id?: number
    email: string
    password: string
    nombre: string
    direccion?: string | null
    estado?: string | null
    fechaNacimiento?: Date | string | null
    nacionalidad?: string | null
    sexo?: string | null
    apodo?: string | null
    foto?: string | null
    rolId?: number
    anioInicioCarrera?: number | null
    usuarioscanciones?: usuarioscancionesUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: comentarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutPlaylistsInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutPlaylistsInput, usuarioUncheckedCreateWithoutPlaylistsInput>
  }

  export type cancionCreateWithoutPlaylistsInput = {
    titulo: string
    fechaLanzamiento?: Date | string | null
    restriccionEdad?: boolean
    portada?: string | null
    anioLanzamiento?: number | null
    album?: albumCreateNestedOneWithoutCancionesInput
    genero?: generoCreateNestedOneWithoutCancionesInput
    usuarioscanciones?: usuarioscancionesCreateNestedManyWithoutCancionInput
    comentarios?: comentarioCreateNestedManyWithoutCancionInput
  }

  export type cancionUncheckedCreateWithoutPlaylistsInput = {
    id?: number
    titulo: string
    fechaLanzamiento?: Date | string | null
    generoId?: number | null
    restriccionEdad?: boolean
    portada?: string | null
    anioLanzamiento?: number | null
    albumId?: number | null
    usuarioscanciones?: usuarioscancionesUncheckedCreateNestedManyWithoutCancionInput
    comentarios?: comentarioUncheckedCreateNestedManyWithoutCancionInput
  }

  export type cancionCreateOrConnectWithoutPlaylistsInput = {
    where: cancionWhereUniqueInput
    create: XOR<cancionCreateWithoutPlaylistsInput, cancionUncheckedCreateWithoutPlaylistsInput>
  }

  export type usuarioUpsertWithoutPlaylistsInput = {
    update: XOR<usuarioUpdateWithoutPlaylistsInput, usuarioUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<usuarioCreateWithoutPlaylistsInput, usuarioUncheckedCreateWithoutPlaylistsInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutPlaylistsInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutPlaylistsInput, usuarioUncheckedUpdateWithoutPlaylistsInput>
  }

  export type usuarioUpdateWithoutPlaylistsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nacionalidad?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    apodo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    anioInicioCarrera?: NullableIntFieldUpdateOperationsInput | number | null
    rol?: rolUpdateOneRequiredWithoutUsuariosNestedInput
    usuarioscanciones?: usuarioscancionesUpdateManyWithoutUsuarioNestedInput
    comentarios?: comentarioUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutPlaylistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nacionalidad?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    apodo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    rolId?: IntFieldUpdateOperationsInput | number
    anioInicioCarrera?: NullableIntFieldUpdateOperationsInput | number | null
    usuarioscanciones?: usuarioscancionesUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: comentarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type cancionUpsertWithWhereUniqueWithoutPlaylistsInput = {
    where: cancionWhereUniqueInput
    update: XOR<cancionUpdateWithoutPlaylistsInput, cancionUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<cancionCreateWithoutPlaylistsInput, cancionUncheckedCreateWithoutPlaylistsInput>
  }

  export type cancionUpdateWithWhereUniqueWithoutPlaylistsInput = {
    where: cancionWhereUniqueInput
    data: XOR<cancionUpdateWithoutPlaylistsInput, cancionUncheckedUpdateWithoutPlaylistsInput>
  }

  export type cancionUpdateManyWithWhereWithoutPlaylistsInput = {
    where: cancionScalarWhereInput
    data: XOR<cancionUpdateManyMutationInput, cancionUncheckedUpdateManyWithoutPlaylistsInput>
  }

  export type usuarioCreateWithoutComentariosInput = {
    email: string
    password: string
    nombre: string
    direccion?: string | null
    estado?: string | null
    fechaNacimiento?: Date | string | null
    nacionalidad?: string | null
    sexo?: string | null
    apodo?: string | null
    foto?: string | null
    anioInicioCarrera?: number | null
    rol?: rolCreateNestedOneWithoutUsuariosInput
    usuarioscanciones?: usuarioscancionesCreateNestedManyWithoutUsuarioInput
    playlists?: playlistCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutComentariosInput = {
    id?: number
    email: string
    password: string
    nombre: string
    direccion?: string | null
    estado?: string | null
    fechaNacimiento?: Date | string | null
    nacionalidad?: string | null
    sexo?: string | null
    apodo?: string | null
    foto?: string | null
    rolId?: number
    anioInicioCarrera?: number | null
    usuarioscanciones?: usuarioscancionesUncheckedCreateNestedManyWithoutUsuarioInput
    playlists?: playlistUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutComentariosInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutComentariosInput, usuarioUncheckedCreateWithoutComentariosInput>
  }

  export type cancionCreateWithoutComentariosInput = {
    titulo: string
    fechaLanzamiento?: Date | string | null
    restriccionEdad?: boolean
    portada?: string | null
    anioLanzamiento?: number | null
    album?: albumCreateNestedOneWithoutCancionesInput
    genero?: generoCreateNestedOneWithoutCancionesInput
    usuarioscanciones?: usuarioscancionesCreateNestedManyWithoutCancionInput
    playlists?: playlistCreateNestedManyWithoutCancionesInput
  }

  export type cancionUncheckedCreateWithoutComentariosInput = {
    id?: number
    titulo: string
    fechaLanzamiento?: Date | string | null
    generoId?: number | null
    restriccionEdad?: boolean
    portada?: string | null
    anioLanzamiento?: number | null
    albumId?: number | null
    usuarioscanciones?: usuarioscancionesUncheckedCreateNestedManyWithoutCancionInput
    playlists?: playlistUncheckedCreateNestedManyWithoutCancionesInput
  }

  export type cancionCreateOrConnectWithoutComentariosInput = {
    where: cancionWhereUniqueInput
    create: XOR<cancionCreateWithoutComentariosInput, cancionUncheckedCreateWithoutComentariosInput>
  }

  export type usuarioUpsertWithoutComentariosInput = {
    update: XOR<usuarioUpdateWithoutComentariosInput, usuarioUncheckedUpdateWithoutComentariosInput>
    create: XOR<usuarioCreateWithoutComentariosInput, usuarioUncheckedCreateWithoutComentariosInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutComentariosInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutComentariosInput, usuarioUncheckedUpdateWithoutComentariosInput>
  }

  export type usuarioUpdateWithoutComentariosInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nacionalidad?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    apodo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    anioInicioCarrera?: NullableIntFieldUpdateOperationsInput | number | null
    rol?: rolUpdateOneRequiredWithoutUsuariosNestedInput
    usuarioscanciones?: usuarioscancionesUpdateManyWithoutUsuarioNestedInput
    playlists?: playlistUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutComentariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nacionalidad?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    apodo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    rolId?: IntFieldUpdateOperationsInput | number
    anioInicioCarrera?: NullableIntFieldUpdateOperationsInput | number | null
    usuarioscanciones?: usuarioscancionesUncheckedUpdateManyWithoutUsuarioNestedInput
    playlists?: playlistUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type cancionUpsertWithoutComentariosInput = {
    update: XOR<cancionUpdateWithoutComentariosInput, cancionUncheckedUpdateWithoutComentariosInput>
    create: XOR<cancionCreateWithoutComentariosInput, cancionUncheckedCreateWithoutComentariosInput>
    where?: cancionWhereInput
  }

  export type cancionUpdateToOneWithWhereWithoutComentariosInput = {
    where?: cancionWhereInput
    data: XOR<cancionUpdateWithoutComentariosInput, cancionUncheckedUpdateWithoutComentariosInput>
  }

  export type cancionUpdateWithoutComentariosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    restriccionEdad?: BoolFieldUpdateOperationsInput | boolean
    portada?: NullableStringFieldUpdateOperationsInput | string | null
    anioLanzamiento?: NullableIntFieldUpdateOperationsInput | number | null
    album?: albumUpdateOneWithoutCancionesNestedInput
    genero?: generoUpdateOneWithoutCancionesNestedInput
    usuarioscanciones?: usuarioscancionesUpdateManyWithoutCancionNestedInput
    playlists?: playlistUpdateManyWithoutCancionesNestedInput
  }

  export type cancionUncheckedUpdateWithoutComentariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generoId?: NullableIntFieldUpdateOperationsInput | number | null
    restriccionEdad?: BoolFieldUpdateOperationsInput | boolean
    portada?: NullableStringFieldUpdateOperationsInput | string | null
    anioLanzamiento?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    usuarioscanciones?: usuarioscancionesUncheckedUpdateManyWithoutCancionNestedInput
    playlists?: playlistUncheckedUpdateManyWithoutCancionesNestedInput
  }

  export type usuarioscancionesCreateManyCancionInput = {
    id?: number
    usuarioId: number
  }

  export type comentarioCreateManyCancionInput = {
    id?: number
    texto: string
    fecha?: Date | string
    usuarioId: number
  }

  export type usuarioscancionesUpdateWithoutCancionInput = {
    usuario?: usuarioUpdateOneRequiredWithoutUsuarioscancionesNestedInput
  }

  export type usuarioscancionesUncheckedUpdateWithoutCancionInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type usuarioscancionesUncheckedUpdateManyWithoutCancionInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type playlistUpdateWithoutCancionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: usuarioUpdateOneRequiredWithoutPlaylistsNestedInput
  }

  export type playlistUncheckedUpdateWithoutCancionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type playlistUncheckedUpdateManyWithoutCancionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type comentarioUpdateWithoutCancionInput = {
    texto?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type comentarioUncheckedUpdateWithoutCancionInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type comentarioUncheckedUpdateManyWithoutCancionInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type usuarioscancionesCreateManyUsuarioInput = {
    id?: number
    cancionId: number
  }

  export type playlistCreateManyUsuarioInput = {
    id?: number
    nombre: string
  }

  export type comentarioCreateManyUsuarioInput = {
    id?: number
    texto: string
    fecha?: Date | string
    cancionId: number
  }

  export type usuarioscancionesUpdateWithoutUsuarioInput = {
    cancion?: cancionUpdateOneRequiredWithoutUsuarioscancionesNestedInput
  }

  export type usuarioscancionesUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    cancionId?: IntFieldUpdateOperationsInput | number
  }

  export type usuarioscancionesUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    cancionId?: IntFieldUpdateOperationsInput | number
  }

  export type playlistUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    canciones?: cancionUpdateManyWithoutPlaylistsNestedInput
  }

  export type playlistUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    canciones?: cancionUncheckedUpdateManyWithoutPlaylistsNestedInput
  }

  export type playlistUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type comentarioUpdateWithoutUsuarioInput = {
    texto?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cancion?: cancionUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type comentarioUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cancionId?: IntFieldUpdateOperationsInput | number
  }

  export type comentarioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cancionId?: IntFieldUpdateOperationsInput | number
  }

  export type usuarioCreateManyRolInput = {
    id?: number
    email: string
    password: string
    nombre: string
    direccion?: string | null
    estado?: string | null
    fechaNacimiento?: Date | string | null
    nacionalidad?: string | null
    sexo?: string | null
    apodo?: string | null
    foto?: string | null
    anioInicioCarrera?: number | null
  }

  export type usuarioUpdateWithoutRolInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nacionalidad?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    apodo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    anioInicioCarrera?: NullableIntFieldUpdateOperationsInput | number | null
    usuarioscanciones?: usuarioscancionesUpdateManyWithoutUsuarioNestedInput
    playlists?: playlistUpdateManyWithoutUsuarioNestedInput
    comentarios?: comentarioUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nacionalidad?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    apodo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    anioInicioCarrera?: NullableIntFieldUpdateOperationsInput | number | null
    usuarioscanciones?: usuarioscancionesUncheckedUpdateManyWithoutUsuarioNestedInput
    playlists?: playlistUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: comentarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateManyWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nacionalidad?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    apodo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    anioInicioCarrera?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cancionCreateManyAlbumInput = {
    id?: number
    titulo: string
    fechaLanzamiento?: Date | string | null
    generoId?: number | null
    restriccionEdad?: boolean
    portada?: string | null
    anioLanzamiento?: number | null
  }

  export type cancionUpdateWithoutAlbumInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    restriccionEdad?: BoolFieldUpdateOperationsInput | boolean
    portada?: NullableStringFieldUpdateOperationsInput | string | null
    anioLanzamiento?: NullableIntFieldUpdateOperationsInput | number | null
    genero?: generoUpdateOneWithoutCancionesNestedInput
    usuarioscanciones?: usuarioscancionesUpdateManyWithoutCancionNestedInput
    playlists?: playlistUpdateManyWithoutCancionesNestedInput
    comentarios?: comentarioUpdateManyWithoutCancionNestedInput
  }

  export type cancionUncheckedUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generoId?: NullableIntFieldUpdateOperationsInput | number | null
    restriccionEdad?: BoolFieldUpdateOperationsInput | boolean
    portada?: NullableStringFieldUpdateOperationsInput | string | null
    anioLanzamiento?: NullableIntFieldUpdateOperationsInput | number | null
    usuarioscanciones?: usuarioscancionesUncheckedUpdateManyWithoutCancionNestedInput
    playlists?: playlistUncheckedUpdateManyWithoutCancionesNestedInput
    comentarios?: comentarioUncheckedUpdateManyWithoutCancionNestedInput
  }

  export type cancionUncheckedUpdateManyWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generoId?: NullableIntFieldUpdateOperationsInput | number | null
    restriccionEdad?: BoolFieldUpdateOperationsInput | boolean
    portada?: NullableStringFieldUpdateOperationsInput | string | null
    anioLanzamiento?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cancionCreateManyGeneroInput = {
    id?: number
    titulo: string
    fechaLanzamiento?: Date | string | null
    restriccionEdad?: boolean
    portada?: string | null
    anioLanzamiento?: number | null
    albumId?: number | null
  }

  export type cancionUpdateWithoutGeneroInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    restriccionEdad?: BoolFieldUpdateOperationsInput | boolean
    portada?: NullableStringFieldUpdateOperationsInput | string | null
    anioLanzamiento?: NullableIntFieldUpdateOperationsInput | number | null
    album?: albumUpdateOneWithoutCancionesNestedInput
    usuarioscanciones?: usuarioscancionesUpdateManyWithoutCancionNestedInput
    playlists?: playlistUpdateManyWithoutCancionesNestedInput
    comentarios?: comentarioUpdateManyWithoutCancionNestedInput
  }

  export type cancionUncheckedUpdateWithoutGeneroInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    restriccionEdad?: BoolFieldUpdateOperationsInput | boolean
    portada?: NullableStringFieldUpdateOperationsInput | string | null
    anioLanzamiento?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    usuarioscanciones?: usuarioscancionesUncheckedUpdateManyWithoutCancionNestedInput
    playlists?: playlistUncheckedUpdateManyWithoutCancionesNestedInput
    comentarios?: comentarioUncheckedUpdateManyWithoutCancionNestedInput
  }

  export type cancionUncheckedUpdateManyWithoutGeneroInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    restriccionEdad?: BoolFieldUpdateOperationsInput | boolean
    portada?: NullableStringFieldUpdateOperationsInput | string | null
    anioLanzamiento?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cancionUpdateWithoutPlaylistsInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    restriccionEdad?: BoolFieldUpdateOperationsInput | boolean
    portada?: NullableStringFieldUpdateOperationsInput | string | null
    anioLanzamiento?: NullableIntFieldUpdateOperationsInput | number | null
    album?: albumUpdateOneWithoutCancionesNestedInput
    genero?: generoUpdateOneWithoutCancionesNestedInput
    usuarioscanciones?: usuarioscancionesUpdateManyWithoutCancionNestedInput
    comentarios?: comentarioUpdateManyWithoutCancionNestedInput
  }

  export type cancionUncheckedUpdateWithoutPlaylistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generoId?: NullableIntFieldUpdateOperationsInput | number | null
    restriccionEdad?: BoolFieldUpdateOperationsInput | boolean
    portada?: NullableStringFieldUpdateOperationsInput | string | null
    anioLanzamiento?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    usuarioscanciones?: usuarioscancionesUncheckedUpdateManyWithoutCancionNestedInput
    comentarios?: comentarioUncheckedUpdateManyWithoutCancionNestedInput
  }

  export type cancionUncheckedUpdateManyWithoutPlaylistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generoId?: NullableIntFieldUpdateOperationsInput | number | null
    restriccionEdad?: BoolFieldUpdateOperationsInput | boolean
    portada?: NullableStringFieldUpdateOperationsInput | string | null
    anioLanzamiento?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
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