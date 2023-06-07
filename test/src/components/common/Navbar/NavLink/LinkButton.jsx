import React from 'react'
import { Button } from '../../Button/Button'
import home from '../../../../assets/icon/icon-home.svg'
import chat from '../../../../assets/icon/icon-message-circle.svg'
import post from '../../../../assets/icon/icon-edit.svg'
import profile from '../../../../assets/icon/icon-user.svg'

export default function LinkButton() {

  const list = {
    home: '홈',
    chat: '채팅',
    post: '게시물 작성',
    profile: '프로필'
  }
  return (
    <>
      <Button>
        <img src={home} alt={list.home} />
        <span>{list.home}</span>
      </Button>
      <Button>
        <img src={chat} alt={list.chat} />
        <span>{list.chat}</span>
      </Button>
      <Button>
        <img src={post} alt={list.post} />
        <span>{list.post}</span>
      </Button>
      <Button>
        <img src={profile} alt={list.profile} />
        <span>{list.profile}</span>
      </Button>
    </>
  )
}
