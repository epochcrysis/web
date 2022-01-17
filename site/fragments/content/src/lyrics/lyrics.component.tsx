import React             from 'react'
import { FC }            from 'react'
import { useState }      from 'react'

import { Accordion }     from '@ui/accordion'
import { Button }        from '@ui/button'
import { Box }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Column }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { Text }          from '@ui/text'
import { ArrowDownIcon } from '@ui/icons'

const lyrics = `<p>The veil of fear decaying past 
A lot of needs that killing fast 
Smile of delusion making wish 
The errant thoughts we need unleash 
 </p>
<p>
Evaporating present days 
We filling them with dirty grace 
Deceptive stream misleading us 
Another chance is there for last 
 </p>
<p>
You sink in the shame 
There is nothing to blame 
We can't find our ways 
The hope still remains 
</p> 
<p>
The burden full of greed inside 
The gloomy sky that won't catch light 
We look in mirror we can't see reflection 
Because it covered with dead perfection 
 </p>
<p>
A plenty changes that we always crave 
Forgetting everything, accepting rave 
Abomination our inner voice 
In distant sound of the murky noise 
</p>
<p>
A sharpen scythe is hitting solid ground 
This land is turning into stitched wound 
Sometimes we have to plant a seed 
Sometimes we losing everything we need
</p>`.replace(/<p>/g, '')

const Lyrics: FC = () => {
  const [expand, setExpand] = useState<boolean>(false)

  return (
    <Box>
      <Column>
        <Row>
          <Text fontFamily='secondary' color='text.transparentWhite' textTransform='uppercase'>
            {/* TODO localize */}
            Lyrics
          </Text>
        </Row>
        <Layout flexBasis={32} flexShrink={0} />
        <Accordion active={expand}>
          {lyrics.split('</p>').map((verse) => (
            <>
              {verse.split('\n').map((row) => (
                <>
                  <Row>
                    <Text fontSize='increased' color='text.white'>
                      {row}
                    </Text>
                  </Row>
                  <Layout flexBasis={8} flexShrink={0} />
                </>
              ))}
              <Layout flexBasis={32} flexShrink={0} />
            </>
          ))}
        </Accordion>
        <Layout flexBasis={33} />
        <Row alignItems='center'>
          <Button onClick={() => setExpand(!expand)}>
            <Text
              fontFamily='secondary'
              fontSize='normal'
              color='text.white'
              fontWeight='medium'
              textTransform='uppercase'
            >
              {/* TODO localize */}
              More
            </Text>
            <ArrowDownIcon />
          </Button>
        </Row>
      </Column>
    </Box>
  )
}

export { Lyrics }
