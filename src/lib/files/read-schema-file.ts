import * as fs from 'fs'
import * as path from 'path'

import { PathDoesNotExists } from '../exception/path-does-not-exists'

interface SchemaManagerProps {
  schema?: string
}

export class SchemaManager {
  private schemaPath: string

  constructor({ schema = '' }: SchemaManagerProps) {
    const prismaSchemaPath = path.resolve(
      path.join(process.cwd(), 'prisma', 'schema.prisma')
    )

    this.schemaPath = schema || prismaSchemaPath
  }

  private read(): string {
    const schema = fs.readFileSync(this.schemaPath, {
      encoding: 'utf-8',
    })

    return schema
  }

  private parseSchema(): string[] {
    const schema = this.read()

    const pattern = /^model\s*.+$/gm

    const matchs = Array.from(schema.matchAll(pattern))
      .map((match) => match[0])
      .map(this.formatModelName)

    return matchs
  }

  private formatModelName(raw: string): string {
    const modelName = raw.replace('model', '').replace('{', '').trim()

    return modelName
  }

  get schema(): string {
    return this.schemaPath
  }

  get matches(): string[] {
    return this.parseSchema()
  }

  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  set schema(path: string) {
    const doesPathExists = fs.existsSync(path)

    if (!doesPathExists) {
      throw new PathDoesNotExists(`Path ${path} does not exists!`)
    }

    this.schemaPath = path
  }
}
