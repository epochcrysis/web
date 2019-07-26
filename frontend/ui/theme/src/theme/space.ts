import { ThemeSpace } from './types'

const space: ThemeSpace = [4, 8, 16, 24, 32, 40, 48, 64, 128]

space.xs = space[0]
space.s = space[1]
space.n = space[2]
space.m = space[3]
space.l = space[4]
space.xl = space[5]
space['2xl'] = space[6]
space['3xl'] = space[7]
space['4xl'] = space[8]

export default space
