
export interface IRawResponce {
    TODO: string
    kind: string
    etag: string
    pageInfo: {
        totalResults: number
        resultsPerPage: number
    }
    items: IYoutubeItem[]
}

export interface IResponce {
    TODO: string
    kind: string
    etag: string
    pageInfo: {
        totalResults: number
        resultsPerPage: number
    }
    items: IItem[]
}

export interface IRawYoutubeItem {
    kind: string
    etag: string
    id: { kind: string, videoId: string },
    snippet: ISnippet
}
export interface IYoutubeItem {
    kind: string
    etag: string
    id: string,
    snippet: ISnippet
    statistics: IStatistics
}

export interface IItem {
    id: string,
    custom?: boolean;
    title: string,
    description: string,
    imageLinks: IThumbnails,
    videoLink: string,
    createdAt: string,
    tags: string[],
    channelTitle: string,
    statistics: {
        views: string,
        likes: string,
        dislikes: string,
        comments: string
    }
}


export interface ISnippet {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: IThumbnails
    channelTitle: string
    tags: string[]
    categoryId: string
    liveBroadcastContent: string
    localized: {
        title: string
        description: string
    }
    defaultAudioLanguage: string
}

export interface IThumbnails {
    default: IThumbDetails
    medium?: IThumbDetails
    high?: IThumbDetails
    standard?: IThumbDetails
    maxres?: IThumbDetails
}

export interface IThumbDetails {
    url: string
    width?: number
    height?: number
}

export interface IStatistics {
    viewCount: string
    likeCount: string
    dislikeCount: string
    favoriteCount: string
    commentCount: string
}