import React from 'react'
import Heading from '../components/heading'
import components from '../components/dynamic'
import ReactJSXParser from '@zeit/react-jsx-parser'
import { textBlock } from '../lib/notion/renderers'

type NotionPostObject = {
  Published: 'yes' | any
  content: {
    value: {
      format?: {
        block_width?: number
        display_source?: string | number | boolean
      }
      type: string
      properties: { title: any; language?: any }
      id: string | number
    }
  }[]
}

const defaultImageWidth = 1440
const listTypes = new Set(['bulleted_list', 'numbered_list'])

const RenderPost = ({ post }: { post: NotionPostObject }) => {
  let listTagName: string | null = null
  let listLastId: string | null = null
  let listChildren: React.ReactElement[] = []

  return (
    <div className="post">
      {post.content.map((block, blockIdx) => {
        const { value } = block
        const { type, properties, id } = value
        const isLast = blockIdx === post.content.length - 1
        const isList = listTypes.has(type)
        let toRender = []

        if (isList) {
          listTagName = components[type === 'bulleted_list' ? 'ul' : 'ol']
          listLastId = `list${id}`
          listChildren.push(
            React.createElement(
              components.li || 'li',
              { key: id } as any,
              textBlock(properties.title, true, id)
            )
          )
        }

        if (listTagName && (isLast || !isList)) {
          toRender.push(
            React.createElement(
              listTagName,
              { key: listLastId! },
              ...listChildren
            )
          )
          listChildren = []
          listLastId = null
          listTagName = null
        }

        const renderHeading = (Type: string | React.ComponentType) => {
          toRender.push(
            <Heading key={id}>
              <Type key={id}>{textBlock(properties.title, true, id)}</Type>
            </Heading>
          )
        }

        switch (type) {
          case 'page':
          case 'divider':
            break
          case 'text':
            if (properties) {
              toRender.push(textBlock(properties.title, false, id))
            }
            break
          case 'image': {
            const {
              format = {} as NonNullable<typeof value['format']>
            } = value
            const { block_width } = format
            const baseBlockWidth = 768
            const roundFactor = Math.pow(10, 2)
            // calculate percentages
            const width = block_width
              ? `${Math.round(
                  (block_width / baseBlockWidth) * 100 * roundFactor
                ) / roundFactor}%`
              : '100%'

            toRender.push(
              <img
                key={id}
                src={`${process.env.IMAGE_BASE_URL}/image?imgUrl=${encodeURIComponent(
                  format.display_source as any
                )}&width=${defaultImageWidth}&cache=v2`}
                style={{
                  width,
                  maxWidth: '100%',
                  margin: '0 auto',
                  display: 'block'
                }}
              />
            )
            break
          }
          case 'header':
            renderHeading('h1')
            break
          case 'sub_header':
            renderHeading('h2')
            break
          case 'sub_sub_header':
            renderHeading('h3')
            break
          case 'code': {
            if (properties.title) {
              const content = properties.title[0][0]
              const language = properties.language[0][0]

              if (language === 'LiveScript') {
                // this requires the DOM for now
                toRender.push(
                  <ReactJSXParser
                    key={id}
                    jsx={content}
                    components={components}
                    bindings={{
                      isRowType: (_: any, idx: number) => idx > 0,
                      isHeadType: (_: any, idx: number) => idx === 0
                    }}
                    componentsOnly={false}
                    renderInpost={false}
                    allowUnknownElements={true}
                    blacklistedTags={['script', 'style']}
                  />
                )
              } else {
                toRender.push(
                  <components.Code key={id} language={(language || '')}>
                    {content}
                  </components.Code>
                )
              }
            }
            break
          }
          case 'quote':
            if (properties.title) {
              toRender.push(
                React.createElement(
                  components.blockquote,
                  {},
                  properties.title
                )
              )
            }
            break
          default:
            if (
              process.env.NODE_ENV !== 'production' &&
              !listTypes.has(type)
            ) {
              console.log('unknown type', type)
            }
            break
        }
        return toRender
      })}
    </div>
  )
}

export default RenderPost
