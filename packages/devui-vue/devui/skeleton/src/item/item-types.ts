import type { ExtractPropTypes, PropType } from 'vue'

export type ModelValue = number | string

export const itemProps = {
  row: {
    type: Number,
    default: 0
  },
  animate: {
    type: Boolean,
    default: true
  },
  round: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: true
  },
  avatar: {
    type: Boolean,
    default: false
  },
  title: {
    type: Boolean,
    default: true
  },
  paragraph: {
    type: Boolean,
    default: true
  },
  avatarSize: {
    type: [String, Number] as PropType<ModelValue>,
    default: '40px'
  },
  avatarShape: {
    type: String as PropType<'round' | 'square'>,
    default: 'round'
  },
  titleWidth: {
    type: [String, Number] as PropType<ModelValue>,
    default: '40%'
  },
  rowWidth: {
    type: [Number, String, Array] as PropType<number | string | Array<number | string>>,
    default: ['100%']
  },
  shape: {
    type: String as PropType<'avatar' | 'image' | 'title' | 'paragraph' | 'button'>,
  },
  width: {
    type: [String, Number] as PropType<ModelValue>
  },
  height: {
    type: [String, Number] as PropType<ModelValue>
  },
  style:{
    type: String
  }
} as const

export type ItemProps = ExtractPropTypes<typeof itemProps>
