
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CancionScalarFieldEnum = {
  id: 'id',
  titulo: 'titulo',
  fechaLanzamiento: 'fechaLanzamiento',
  generoId: 'generoId',
  restriccionEdad: 'restriccionEdad',
  portada: 'portada',
  anioLanzamiento: 'anioLanzamiento',
  albumId: 'albumId'
};

exports.Prisma.UsuarioScalarFieldEnum = {
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

exports.Prisma.UsuarioscancionesScalarFieldEnum = {
  id: 'id',
  usuarioId: 'usuarioId',
  cancionId: 'cancionId'
};

exports.Prisma.RolScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  descripcion: 'descripcion'
};

exports.Prisma.AlbumScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  anio: 'anio',
  portada: 'portada'
};

exports.Prisma.GeneroScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre'
};

exports.Prisma.PlaylistScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  usuarioId: 'usuarioId'
};

exports.Prisma.ComentarioScalarFieldEnum = {
  id: 'id',
  texto: 'texto',
  fecha: 'fecha',
  usuarioId: 'usuarioId',
  cancionId: 'cancionId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.cancionOrderByRelevanceFieldEnum = {
  titulo: 'titulo',
  portada: 'portada'
};

exports.Prisma.usuarioOrderByRelevanceFieldEnum = {
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

exports.Prisma.rolOrderByRelevanceFieldEnum = {
  nombre: 'nombre',
  descripcion: 'descripcion'
};

exports.Prisma.albumOrderByRelevanceFieldEnum = {
  nombre: 'nombre',
  portada: 'portada'
};

exports.Prisma.generoOrderByRelevanceFieldEnum = {
  nombre: 'nombre'
};

exports.Prisma.playlistOrderByRelevanceFieldEnum = {
  nombre: 'nombre'
};

exports.Prisma.comentarioOrderByRelevanceFieldEnum = {
  texto: 'texto'
};


exports.Prisma.ModelName = {
  cancion: 'cancion',
  usuario: 'usuario',
  usuarioscanciones: 'usuarioscanciones',
  rol: 'rol',
  album: 'album',
  genero: 'genero',
  playlist: 'playlist',
  comentario: 'comentario'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
