  export interface getProfilesProps {
    id: string
    name: string
    bio: string
    attributes: Attribute[]
    followNftAddress: any
    metadata: string
    isDefault: boolean
    picture: any
    handle: string
    coverPicture: any
    ownedBy: string
    dispatcher: Dispatcher
    stats: Stats
    followModule: any
  }
  
  export interface Attribute {
    displayType: any
    traitType: any
    key: string
    value: string
  }
  
  export interface Dispatcher {
    address: string
  }
  
  export interface Stats {
    totalFollowers: number
    totalFollowing: number
    totalPosts: number
    totalComments: number
    totalMirrors: number
    totalPublications: number
    totalCollects: number
  }
  
  export interface PageInfo {
    prev: string
    next: string
    totalCount: number
  }
  