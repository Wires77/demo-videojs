interface Annotations {
    [key: string]: {
        annotations: {
            start: number;
            end: number;
            label: string;
            video: string;
        }[]
    }
}

export const annotations: Annotations = {
    "https://www3.cde.ca.gov/download/rod/big_buck_bunny.mp4": {
        annotations: [
            {
                start: 0,
                end: 5,
                label: "First five seconds",
                video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
            },
            {
                start: 5,
                end: 10,
                label: "Next five seconds",
                video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            },
            {
                start: 3,
                end: 15,
                label: "3 to 15 seconds",
                video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
            }
        ]
    }
}