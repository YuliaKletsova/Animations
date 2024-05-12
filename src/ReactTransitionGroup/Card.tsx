import {Button, Flex, Typography} from 'antd';
import {useEffect, useRef, useState} from 'react';
import { Transition } from 'react-transition-group';
import './style.module.css'

export const Card = () => {
    const [toggleOpen, setToggleOpen] = useState(false);
    const nodeRef = useRef(null);
    const duration = 3000

    const transitionStyles = {
      entering: { opacity: 1, height: '200px' },
      entered:  { opacity: 1, height: '200px' },
      exiting:  { opacity: 0 },
      exited:  { opacity: 0 },
    };

    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out, height ${duration}ms ease-in-out`,
      opacity: 0,
      height: 0
    }

    useEffect(() => {
      setTimeout(() => setToggleOpen(!toggleOpen), 3000)
    },[toggleOpen])

    return (
        <Flex vertical gap={30}>
          <Transition nodeRef={nodeRef} in={toggleOpen} timeout={duration}>
            {state => (
              <div ref={nodeRef} style={{
                ...defaultStyle,
                //@ts-expect-error TS
                ...transitionStyles[state]
              }}>
                <Hello />
              </div>
            )}
          </Transition>
      </Flex>
      );
}

const Hello = () => (
    <Typography.Paragraph style={{maxWidth: '500px'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut hendrerit nunc. Pellentesque a metus sem. Donec sit amet euismod augue, vel faucibus mi. Pellentesque eu congue eros. Maecenas erat lectus, finibus ut mollis et, ornare vel felis. Ut rhoncus euismod orci, a rhoncus mi laoreet ut. Ut eleifend urna fringilla, hendrerit purus ac, rhoncus justo. Fusce lobortis nec nisl at tincidunt. Ut nec commodo arcu. Fusce a dui ut tellus elementum dignissim in vitae mi. Nunc aliquam id lacus at tempus. Ut tempor erat vitae neque condimentum dapibus. Suspendisse potenti. Morbi massa nibh, faucibus vel congue quis, fringilla quis tellus. Etiam pharetra luctus tempor. Mauris a placerat quam. Nam pulvinar arcu eget arcu posuere, at semper odio dictum. Sed id dignissim tellus, id malesuada ante. Aliquam erat volutpat. Morbi interdum enim odio, sed aliquam velit scelerisque non. In hac habitasse platea dictumst. Maecenas vel nibh quis dolor viverra blandit sit amet non ligula. Suspendisse libero erat, maximus quis ante ut, tristique rhoncus urna. Curabitur ac interdum tortor, id cursus sem. Mauris consequat eros eget venenatis pulvinar. Vivamus suscipit metus a lectus dictum ultrices. Maecenas fringilla quis enim porttitor convallis. Suspendisse sed pretium tortor, quis venenatis leo. Proin nec velit ornare, laoreet tellus in, vulputate dolor. Morbi sagittis gravida auctor. Maecenas et cursus mauris. Pellentesque convallis tristique est et convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et ligula dapibus, egestas mi sit amet, iaculis ante. Duis ut est velit. Pellentesque placerat, justo ac varius mattis, dolor est commodo nisi, in mollis risus lectus at urna. Suspendisse ipsum velit, dictum non nunc eu, finibus consequat dui. Pellentesque felis velit, efficitur id dignissim eget, tincidunt quis nisl. Curabitur non fringilla ipsum. Suspendisse potenti. Nullam sit amet blandit nulla. Mauris pharetra diam non vestibulum dapibus. Cras pellentesque sapien urna. Curabitur porta vestibulum massa, id consectetur nulla laoreet sit amet.
    </Typography.Paragraph>
  );