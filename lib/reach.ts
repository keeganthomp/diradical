import { loadStdlib } from '@reach-sh/stdlib'

const stdlib = loadStdlib('ALGO')
stdlib.setProviderByName('TestNet')

export default stdlib
