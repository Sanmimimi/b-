export type Social = {
  github?: string
  weibo?: string
  bilibili?: string
  qq?: string
  wx?: string
  cloudmusic?: string
  zhihu?: string
  email?: string
  douyin?: string 
}

type SocialValue = {
  href?: string
  title: string
  icon: string
  color: string
}

const social: Social = {
  github: 'https://github.com/kuizuo',
  weibo: 'https://weibo.com',
  bilibili: 'https://space.bilibili.com',
  wx: 'https://img.kuizuo.me/wechat.png',
  // qq: 'https://img.kuizuo.me/qq.png',
  // zhihu: 'https://www.zhihu.com/people/kuizuo',
  cloudmusic: 'https://music.163.com/#/user/home?id=1333010742',
  email: 'mailto:hi@kuizuo.me',
  douyin: 'https://www.douyin.com',
}

const socialSet: Record<keyof Social | 'rss', SocialValue> = {
  github: {
    href: social.github,
    title: 'GitHub',
    icon: 'ri:github-line',
    color: '#010409',
  },
  bilibili: {
    href: social.bilibili,
    title: '哔哩哔哩',
    icon: 'ri:bilibili-line',
    color: '#00A1D6',
  },
  weibo: {
    href: social.weibo,
    title: '微博',
    icon: 'ri:weibo-line',
    color: '#E6162D',
  },
  wx: {
    href: social.wx,
    title: '微信',
    icon: 'ri:wechat-2-line',
    color: '#07c160',
  },
  zhihu: {
    href: social.zhihu,
    title: '知乎',
    icon: 'ri:zhihu-line',
    color: '#1772F6',
  },
  douyin: {
    href: social.douyin,
    title: '抖音',
    icon: 'simple-icons:tiktok',
    color: '#000000',
  },
  qq: {
    href: social.qq,
    title: 'QQ',
    icon: 'ri:qq-line',
    color: '#1296db',
  },
  email: {
    href: social.email,
    title: '邮箱',
    icon: 'ri:mail-line',
    color: '#D44638',
  },
  cloudmusic: {
    href: social.cloudmusic,
    title: '网易云',
    icon: 'ri:netease-cloud-music-line',
    color: '#C20C0C',
  },
  rss: {
    href: '/blog/rss.xml',
    title: 'RSS',
    icon: 'ri:rss-line',
    color: '#FFA501',
  },
}

export default socialSet
