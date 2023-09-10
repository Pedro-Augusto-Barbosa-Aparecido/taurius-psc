import * as path from 'path'
import { GluegunToolbox } from 'gluegun'
// import { SchemaManager } from '../lib/files/read-schema-file'
import { PrismaManager } from '../lib/prisma-manager/prisma'

module.exports = {
  name: 'generate',
  alias: ['g'],
  run: async ({ filesystem, print: { info, error } }: GluegunToolbox) => {
    const nodeModuleFolder = path.resolve(
      path.join(filesystem.cwd(), 'node_modules')
    )

    const tauriusFolder = path.resolve(
      path.join(nodeModuleFolder, '@taurius-psc', 'controllers')
    )

    const doesTauriusFolderExists = await filesystem.existsAsync(tauriusFolder)

    if (!doesTauriusFolderExists) {
      filesystem.dir(tauriusFolder)
    }
    // const schemaReader = new SchemaManager({})
    const prismaManager = new PrismaManager()

    if (!prismaManager.checkIfGenerateCommandAlreadyRun()) {
      error(`Prisma Client does not exists!`)
      info(`
Please run:

\`\`\`shell
  npx prisma generate
  # or
  yarn prisma generate
  # or
  pnpm prisma generate
\`\`\`
      `)
    }
  },
}
