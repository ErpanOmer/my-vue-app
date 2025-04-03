import constans from "@/constans"

export function fetchStoreList() {
    const fetchUrl = 'https://b2b.newurtopia.com/ibd-api/third_party/list_shops'

    return new Promise((async resolve => {
        const { data, code, message } = await fetch(fetchUrl, {
            headers: {
                origin: 'api-test.newurtopia.com',
                referer: 'api-test.newurtopia.com',
                // 'content-type': 'application/json; charset=UTF-8'
            }
        }).then(res => res.json())

        if (!message && code === 200) {
            return resolve(data)
        }

        resolve([])
    }))
}

export function fetchUserLocation() {
    return new Promise(resolve => {
        if (!navigator.geolocation) {
            return resolve(constans.DEFAULT_CENTER)
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("精准位置:", position.coords.latitude, position.coords.longitude);
                return resolve([position.coords.longitude, position.coords.latitude])
            },
            (error) => {
                console.error("获取位置失败:", error.message);
                return resolve(constans.DEFAULT_CENTER)
            },
            {
                enableHighAccuracy: true, // 开启高精度模式
                timeout: 15000, // 最多等待 5 秒
                maximumAge: 0, // 不使用缓存数据
            }
        );
    })
}