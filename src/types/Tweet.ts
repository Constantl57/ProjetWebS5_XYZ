export type Tweet = {parentId? : string; id : string; authorName : string; authorHandle : string; content : string; image? : TweetImage; createdAt : string; likes : number; likedByMe : boolean;}

export type TweetImage = {url : string; alt : string}