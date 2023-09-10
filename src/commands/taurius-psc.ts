import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'taurius-psc',
  alias: ['psc'],
  run: async ({ print }) => {
    print.success(
      `
              Welcome to Taurius PSC

        The CLI is intended to speed up the process of
creation of simple cruds, it has communication with the
Prisma.JS.

Features: 

- [ ] Generate CRUD by Prisma Schema.
- [ ] Comunication
  - [ ] NextJS
  - [ ] NestJS
  - [ ] Fastfy
  - [ ] ElectronJS 
`
    )
  },
}

module.exports = command
