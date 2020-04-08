import React from 'react'
import styled from 'styled-components'
import Collapsible from 'react-collapsible'
// import NarrowContent from 'src/components/common/NarrowContent'

const RichTextBlockStyled = styled.div`
  ${tw`px-3 mx-auto max-w-md`}
  h2,
  h3 {
    color: ${props => props.theme.primaryColor};
    ${tw`mb-6 mt-6`};
  }
  p {
    ${tw`mb-3`};
  }
  ul,
  ol {
    ${tw`ml-6 mb-4`};
  }
  .Collapsible {
    display: block;
    border-bottom: 2px solid #006600;
  }
  .Collapsible__trigger {
    ${tw`p-2`}
    display: flex;
    justify-content: space-between;
  }
  .icon {
    transition: transform 0.25s;
  }
  .Collapsible__trigger.is-open .icon {
    transform: rotate(-45deg);
  }
  .Collapsible__trigger h3 {
    margin: 0;
  }
  .Collapsible__contentInner {
    ${tw`p-2`}
  }
`

const createYoutubeEmbed = key =>
  `<iframe width="100%" height="350" src="https://www.youtube.com/embed/${key}?rel=0" frameborder="0" allowfullscreen></iframe><br/>`

const transformYoutubeLinks = text => {
  if (!text) return text
  const self = this

  const linkreg = /(?:)<a([^>]+)>(.+?)<\/a>/g
  const fullreg = /(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([^& \n<]+)(?:[^ \n<]+)?/g
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^& \n<]+)(?:[^ \n<]+)?/g

  let resultHtml = text

  // get all the matches for youtube links using the first regex
  const match = text.match(fullreg)
  if (match && match.length > 0) {
    // get all links and put in placeholders
    const matchlinks = text.match(linkreg)
    if (matchlinks && matchlinks.length > 0) {
      for (let i = 0; i < matchlinks.length; i++) {
        resultHtml = resultHtml.replace(matchlinks[i], `#placeholder${i}#`)
      }
    }

    // now go through the matches one by one
    for (let i = 0; i < match.length; i++) {
      // get the key out of the match using the second regex
      const matchParts = match[i].split(regex)
      // replace the full match with the embedded youtube code
      resultHtml = resultHtml.replace(match[i], createYoutubeEmbed(matchParts[1]))
    }

    // ok now put our links back where the placeholders were.
    if (matchlinks && matchlinks.length > 0) {
      for (let i = 0; i < matchlinks.length; i++) {
        resultHtml = resultHtml.replace(`#placeholder${i}#`, matchlinks[i])
      }
    }
  }
  return resultHtml
}

const CollapsibleBlock = ({ block }) => (
  <RichTextBlockStyled>
    {/* {console.log(block.sectionContent.replace('&lt;', '<').replace('&gt;', '>'))} */}
    <>
      {/* <div
        dangerouslySetInnerHTML={{
          __html: block.sectionContent
            .replace('&lt;', '<')
            .replace('&gt;', '>')
            .replace('width="560"', 'width="100%"'),
        }} */}

      <Collapsible
        trigger={
          <>
            <h3>{block.title}</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" className="icon">
              <path
                fill="#006600"
                d="M1.816 17.629a1.14 1.14 0 0 1-1.122-1.123 1.14 1.14 0 0 1 1.122-1.122l13.479.011V1.905a1.12 1.12 0 0 1 1.11-1.11c.629 0 1.134.505 1.123 1.122v13.468l13.48.011a1.112 1.112 0 0 1 1.122 1.122 1.12 1.12 0 0 1-1.111 1.111h-13.49l.01 13.48a1.14 1.14 0 0 1-1.121 1.121c-.618-.01-1.123-.516-1.123-1.122l-.01-13.479H1.814z"
              />
            </svg>
          </>
        }
        triggerTagName="div"
      >
        <div
          dangerouslySetInnerHTML={{
            __html: transformYoutubeLinks(block.text),
          }}
        />
      </Collapsible>
    </>
  </RichTextBlockStyled>
)

export default CollapsibleBlock
