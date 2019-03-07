import React from 'react'

import BannerImage from 'src/components/Content/BannerImage'
import MainContentWrapper from 'src/components/Content/MainContentWrapper'
import NarrowContent from 'src/components/common/NarrowContent'
import MainHeading from 'src/components/Content/MainHeading'
import RecentNews from 'src/components/News/RecentNewsListing'
import CTAWrapper from 'src/components/CTAWrapper'
import CTAMobileBtn from 'src/components/CTAMobileBtn'

const NewsListingPageTemplate = ({
  data: { bannerImage, callToActionText, callToActionLink, callToActionText2, callToActionLink2 },
  articles,
}) => (
  <>
    <BannerImage image={bannerImage} />

    <MainContentWrapper>
      <NarrowContent>
        <MainHeading centered>Maplewood News</MainHeading>
      </NarrowContent>
      <RecentNews articles={articles} />
    </MainContentWrapper>

    <CTAWrapper>
      {callToActionText && <CTAMobileBtn to={callToActionLink}>{callToActionText}</CTAMobileBtn>}
      {callToActionText2 && <CTAMobileBtn to={callToActionLink2}>{callToActionText2}</CTAMobileBtn>}
    </CTAWrapper>
  </>
)

export default NewsListingPageTemplate
