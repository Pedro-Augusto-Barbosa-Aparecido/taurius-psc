import { GluegunToolbox } from 'gluegun'
import * as path from 'path'

module.exports = {
  name: 'generate',
  alias: ['g'],
  run: async ({ filesystem }: GluegunToolbox) => {
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
  },
}
