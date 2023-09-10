import * as fs from 'fs'
import * as path from 'path'

export class PrismaManager {
  private prismaClientPath: string

  constructor() {
    this.prismaClientPath = path.resolve(
      path.join(process.cwd(), 'node_modules', '.prisma', 'client')
    )
  }

  public checkIfGenerateCommandAlreadyRun(): boolean {
    const doesFolderAlreadyExists = fs.existsSync(this.prismaClientPath)

    return doesFolderAlreadyExists
  }

  get prismaPath(): string {
    return this.prismaClientPath
  }
}
